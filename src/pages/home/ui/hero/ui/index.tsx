import clsx from "clsx";
import Image from "next/image";
import { container, item } from "./config";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperCard } from "./swiper-card";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { IconButton, MailIcon, PhoneIcon, TelegramIcon } from "@/shared/ui";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/store/reducer/modals";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "@/features/locales";
import fetchData from "@/pages/api";
import { useQuery } from "react-query";
import { BannerType } from "@/global/type";
import { data, sliceData } from "./data";

const Hero = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const t = useScopedI18n("home.hero");
  const st = useScopedI18n("services");

  const { data: banners } = useQuery('banner', () => fetchData('blog/banner/list/'))
  const list = data(st)

  const todayIndex = Math.floor(new Date().getDate() / 3)

  const todaySlice = sliceData(list, todayIndex);

  return (
    <div className={styles.hero}>
      <div className={clsx("container-sm", styles.container)}>
        <motion.div
          className={styles.swiper}
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.75,
          }}
        >
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3500 }}
          >
            {banners?.results?.map((el: BannerType) =>
              <SwiperSlide className={styles.slide} key={el?.id}>
                <SwiperCard {...el} />
              </SwiperSlide>
            )}
          </Swiper>
        </motion.div>
        <motion.div
          className={styles.right}
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          <motion.header className={styles.header} variants={item}>
            <Image
              className={styles["header-image"]}
              src="/images/online-consultation.png"
              alt="online consultation"
              width={342}
              height={140}
            />
            <h3 className={styles.title}>{t("title")}</h3>
            <p className={styles.text}>{t("text")}</p>
            <div className={styles.contacts}>
              <IconButton
                className={styles.contact}
                onClick={() => router.push("tel:+998555060303")}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                className={styles.contact}
                onClick={() => router.push("https://t.me/sbjmedicalbot")}
              >
                <TelegramIcon />
              </IconButton>
              <IconButton
                className={styles.contact}
                onClick={() => dispatch(openModal("application"))}
              >
                <MailIcon />
              </IconButton>
            </div>
          </motion.header>
          <div className={styles.aside}>
            {todaySlice.map((el) => (
              <motion.div
                className={styles.wrapper}
                key={el.id}
                variants={item}
              >
                <Image
                  className={styles["wrapper-image"]}
                  src={el.image}
                  alt={el.text}
                  width={80}
                  height={80}
                />
                <p className={styles.name}>{el.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
