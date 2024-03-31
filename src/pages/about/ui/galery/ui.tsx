import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { galeries } from "./config";
import { Autoplay } from "swiper/modules";

const AboutGalery = () => {
  return (
    <div className={styles.galery}>
      <div className="container-sm">
        <h2 className={styles.title}>Галерея</h2>
        <Swiper
          className={styles.swiper}
          modules={[Autoplay]}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            1250: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
          }}
        >
          {galeries.map((el) => (
            <SwiperSlide className={styles.slider} key={el.key}>
              <Image
                className={styles.image}
                src={el.image}
                alt="galery"
                width={382}
                height={288}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutGalery;
