import { SectionHeader } from "@/entities/section-header";
import routing from "@/shared/routing";
import styles from "./styles.module.scss";
import { EquipmentCard } from "@/entities/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useScopedI18n } from "@/features/locales";

const Equipments = () => {
  const t = useScopedI18n("equipments");

  return (
    <div className={styles.equipments}>
      <div className="container-sm">
        <SectionHeader title={t("caption")} href={routing.equipments} />
      </div>
      <Swiper
        className={styles.swiper}
        breakpoints={{
          1250: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 3500 }}
        spaceBetween={24}
      >
        <SwiperSlide className={styles.slide}>
          <EquipmentCard className={styles.card} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <EquipmentCard className={styles.card} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <EquipmentCard className={styles.card} />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <EquipmentCard className={styles.card} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Equipments;
