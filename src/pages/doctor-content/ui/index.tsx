import { BreadcrumbsType } from "@/shared/inderface"
import { DoctorType, DoctorSpecialization } from "@/global/type";
import { Route } from "@/hooks/router";
import routing from "@/shared/routing";
import { HomeIcon, PaddingWrapper, Subheader } from "@/shared/ui";
import { Content } from "./content"
import { Doctors } from "@/pages/home/ui/doctors";
import './style.scss'
import Image from "next/image";

const DoctorContent = ({ doctor }: any) => {
    const { lang, pathname } = Route()

    const first_name = doctor['first_name']
    const last_name = doctor['last_name']
    const about = doctor[`about_${lang}` as keyof DoctorType]
    const education = doctor[`education_${lang}` as keyof DoctorType]

    const breadcrumbs: (BreadcrumbsType & { key: number })[] = [
        {
            key: 1,
            path: routing.home,
            name: "Главная",
            icon: <HomeIcon />,
        },
        {
            key: 2,
            name: "Врач",
            path: pathname,
        },
        {
            key: 3,
            name: `${first_name} ${last_name}`,
        },
    ];

    return (
        <>
            <Subheader render={breadcrumbs} title={`${first_name} ${last_name}`} />
            <PaddingWrapper pt={40} />
            <div className="doctor_header">
                <div className="doctor_image">
                    <Image src={doctor.specialization[0].image} alt="Dr. Falonchi" width={342} height={350} className="doctors_image"/>
                </div>
                <div className="doctor_info">
                    <h3 className="doctor_name">{first_name} {last_name}</h3>
                    <div className="doctor_position">
                        {doctor?.specialization?.map((item: DoctorSpecialization) => {
                            const title: string = item[`title_${lang}` as keyof DoctorSpecialization] as string
                            return <p className="doctor_about" key={item.id}>{title}</p> 
                        })}
                    </div>
                </div>
            </div>
            <PaddingWrapper pt={40} pb={50}>
                <Content text={about} />
            </PaddingWrapper>
            <PaddingWrapper pt={40} pb={50}>
                <Content text={education} />
            </PaddingWrapper>
            <PaddingWrapper pb={100}>
                <Doctors />
            </PaddingWrapper>
        </>
    );
}
export default DoctorContent