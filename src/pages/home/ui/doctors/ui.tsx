import { DoctorCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";
import { SectionHeader } from "@/entities/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useScopedI18n } from "@/features/locales";
import { useQuery } from "react-query";
import fetchData from "@/pages/api";
import { DoctorType } from "@/global/type";

const Doctors = () => {
  const t = useScopedI18n("doctors");

  const { data } = useQuery('doctors', () => fetchData('appointment/doctor/list/?page=1&page_size=4'))

  return (
    <div className={styles.doctors}>
      <div className="container-sm">
        <SectionHeader title={t("caption")} href={routing.doctors} />
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
        {data?.results?.map((item: DoctorType) => 
          <SwiperSlide className={styles.slide}>
            <DoctorCard className={styles.card} badge="Доктор недели" data={item} />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Doctors;
