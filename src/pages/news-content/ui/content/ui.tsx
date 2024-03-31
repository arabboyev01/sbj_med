import { NewsType } from "@/shared/inderface";
import styles from "./styles.module.scss";
import Image from "next/image";

type ContentProps = {
  news: NewsType;
};

const Content = ({ news }: ContentProps) => {
  return (
    <div className={styles.content}>
      <div className="container-sm">
        {news.images[0] && (
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src={news.images[0].image}
              alt="Blog Image"
              width={1600}
              height={700}
            />
          </div>
        )}
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: news.desc_ru }}
        ></div>
      </div>
    </div>
  );
};

export default Content;
