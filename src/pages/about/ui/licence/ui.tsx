import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { licences } from "./config";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const AboutLicence = () => {
  return (
    <div className={styles.licence}>
      <div className="container-sm">
        <h2 className={styles.title}>Сертификаты и Лицензии</h2>
        <Swiper
          className={styles.swiper}
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            1250: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            600: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
          }}
        >
          {licences.map((el) => (
            <SwiperSlide className={styles.slider} key={el.key}>
              <Image
                className={styles.image}
                src={el.image}
                alt="galery"
                width={517}
                height={650}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutLicence;
