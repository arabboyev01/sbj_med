import { BreadcrumbsType } from "@/shared/inderface"
import { DoctorType, DoctorSpecialization } from "@/global/type";
import { Route } from "@/hooks/router";
import routing from "@/shared/routing";
import { HomeIcon, PaddingWrapper, Subheader } from "@/shared/ui";
import { Content } from "./content"
import { Doctors } from "@/pages/home/ui/doctors";
import './style.scss'
import Image from "next/image";
import { Fragment } from "react";
import { useScopedI18n } from "@/features/locales";
import { Reviews } from "@/pages/home/ui/reviews";

type DoctorProps = {
    doctor: DoctorType
}

const DoctorContent = ({ doctor }: DoctorProps) => {
    const { lang, pathname } = Route()
    const t = useScopedI18n("doctors")

    const first_name = doctor['first_name']
    const last_name = doctor['last_name']
    const about: string = doctor[`about_${lang}` as keyof DoctorType] as string
    const education: string = doctor[`education_${lang}` as keyof DoctorType] as string

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
        <Fragment>
            <Subheader render={breadcrumbs} title={`${first_name} ${last_name}`} />
            <PaddingWrapper pt={40} />
            <div className="doctor_header">
                <div className="doctor_image">
                    <Image
                        src={doctor?.specialization[0]?.image}
                        alt="Dr. Falonchi"
                        width={342}
                        height={350}
                        className="doctors_image"
                    />
                </div>
                <div className="doctor_info">
                    <div className="doctor_position">
                        {doctor?.specialization?.map((item: DoctorSpecialization) => {
                            const title: string = item[`title_${lang}` as keyof DoctorSpecialization] as string
                            return <span className="doctor_about" key={item.id}>{title}</span>
                        })}
                    </div>
                    <div className="additional">
                        <div className="addition_item"></div>
                    </div>
                </div>
            </div>
            <PaddingWrapper pt={40} pb={50}>
                <h4 className="subtitle">{t('about')}</h4>
                <Content text={about} />
            </PaddingWrapper>
            <PaddingWrapper pt={40} pb={50}>
                <h4 className="subtitle">{t('education')}</h4>
                <Content text={education} />
            </PaddingWrapper>
            <PaddingWrapper pt={100} pb={100}>
                <Reviews />
            </PaddingWrapper>
            <PaddingWrapper pb={100}>
                <Doctors />
            </PaddingWrapper>
        </Fragment>
    );
}
export default DoctorContent