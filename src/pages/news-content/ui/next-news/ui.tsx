import { useGetNewsQuery } from "@/app/store/api";
import styles from "./styles.module.scss";
import { BlogCard } from "@/entities/cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const NextNews = () => {
  const { data: news } = useGetNewsQuery();

  return (
    <div className={styles.news}>
      <div className="container-sm">
        <h2 className={styles.title}>Похожие новости</h2>
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={24}
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
        {news?.results.slice(0, 4).map((card) => (
          <SwiperSlide className={styles.slider} key={card.id}>
            <BlogCard
              className={styles.card}
              key={card.id}
              card={{
                date: card.created,
                title: card.title_uz,
                text: card.desc_uz,
                slug: card.slug,
              }}
            />
          </SwiperSlide>
        ))}
        {news?.results.slice(0, 4).map((card) => (
          <SwiperSlide className={styles.slider} key={card.id}>
            <BlogCard
              className={styles.card}
              key={card.id}
              card={{
                date: card.created,
                title: card.title_uz,
                text: card.desc_uz,
                slug: card.slug,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NextNews;
