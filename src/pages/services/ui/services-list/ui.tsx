import { ServiceCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import { ServiceType } from "./config";
import { useScopedI18n } from "@/features/locales";

const ServiceList = () => {
  const t = useScopedI18n("services");

  const services_list: ServiceType[] = [
    {
      id: 1,
      title: t("urology"),
      text: t("urology_text"),
      image: "/images/medical/urology.png",
      variant: "red",
    },
    {
      id: 2,
      title: t("neurology"),
      text: t("neurology_text"),
      image: "/images/medical/neurology.png",
      variant: "mint",
    },
    {
      id: 3,
      title: t("cardiology"),
      text: t("cardiology_text"),
      image: "/images/medical/cardiology.png",
      variant: "sky",
    },
    {
      id: 4,
      title: t("gynecology"),
      text: t("gynecology_text"),
      image: "/images/medical/gynecology.png",
      variant: "medium-purple",
    },
    {
      id: 5,
      title: t("msct"),
      text: t("msct_text"),
      image: "/images/medical/msk.png",
      variant: "belge",
    },
    {
      id: 6,
      title: t("x-ray"),
      text: t("x-ray_text"),
      image: "/images/medical/rengen.png",
      variant: "blue",
    },
    {
      id: 7,
      title: t("ent"),
      text: t("ent_text"),
      image: "/images/lor.svg",
      variant: "peach",
    },
    // {
    //   id: 8,
    //   title: "Терапевт",
    //   text: "Терапевт — это широкопрофильный специалист с высшим медицинским образованием, закончивший ординатуру",
    //   image: "/images/medical/terapevt.png",
    //   variant: "green",
    // },
    // {
    //   id: 9,
    //   title: "EKG",
    //   text: "Методика регистрации и исследования электрических полей, образующихся при работе сердца.",
    //   image: "/images/medical/ekg.png",
    //   variant: "sky",
    // },
    {
      id: 10,
      title: t("laboratory"),
      text: t("laboratory_text"),
      image: "/images/labaratory.svg",
      variant: "medium-purple",
    },
    {
      id: 11,
      title: t("ultrasound-examination"),
      text: t("ultrasound-examination_text"),
      image: "/images/ytt.svg",
      variant: "blue",
    },
    {
      id: 12,
      title: t("massage"),
      text: t("massage_text"),
      image: "/images/medical/massage.png",
      variant: "pink",
    },
    {
      id: 13,
      title: t("physical-therapy"),
      text: t("physical-therapy_text"),
      image: "/images/medical/ozon.png",
      variant: "teal",
    },
    {
      id: 14,
      title: t("traumatology"),
      text: t("traumatology_text"),
      image: "/images/travmatalogiya.svg",
      variant: "purple",
    }
  ];

  return (
    <div className={styles.sevices}>
      <div className="container-sm">
        <div className={styles.list}>
          {services_list.map((serv) => (
            <ServiceCard className={styles.card} key={serv.id} {...serv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
