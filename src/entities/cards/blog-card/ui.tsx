import clsx from "clsx";
import styles from "./styles.module.scss";
import { CalendarIcon, LinkButton } from "@/shared/ui";
import routing from "@/shared/routing";
import Image from "next/image";
import { localeDate } from "@/shared/lib/date";

type ImageType = {
  src: string;
  height?: number | `${number}`;
  width?: number | `${number}`;
};

type CardType = {
  slug: string;
  title: string;
  text: string;
  image?: ImageType;
  date: string;
};

type BlogCardType = {
  className?: string;
  card: CardType;
};

const BlogCard = ({ className, card }: BlogCardType) => {
  const classes = clsx(styles.card, className);

  return (
    <div className={classes}>
      {card.image && (
        <div className={styles.wrapper}>
          <Image
            className={styles.image}
            src={card.image.src}
            alt="Blog Image"
            width={card.image.width ?? 740}
            height={card.image.height ?? 390}
          />
        </div>
      )}
      <h3 className={styles.title}>{card.title}</h3>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: card.text }}
      />
      <div className={styles.bottom}>
        <div className={styles.date}>
          <CalendarIcon />
          <time className={styles.time}>{localeDate(card.date)}</time>
        </div>
        <LinkButton
          className={styles.link}
          href={routing.blogBySlug(card.slug)}
          theme="dark"
        >
          Читать
        </LinkButton>
      </div>
    </div>
  );
};

export default BlogCard;
