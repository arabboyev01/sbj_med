import { Button } from "@/shared/ui";
import styles from "./styles.module.scss";
import { BannerType } from "@/global/type";
import { Route } from "@/hooks/router";

const SwiperCard = (props: BannerType) => {
  const { lang } = Route()

  const title = props[`title_${lang}` as keyof BannerType]
  const description = props[`desc_${lang}` as keyof BannerType]
  return (
    <div className={styles.card} style={{backgroundImage: `url(${props?.image})`}}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.text} dangerouslySetInnerHTML={{ __html: description }} />
        <Button className={styles.button} variant="contained">
          Подробнее о нас
        </Button>
      </div>
    </div>
  );
};

export default SwiperCard;
