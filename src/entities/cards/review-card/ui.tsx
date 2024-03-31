import { Stars } from "@/shared/ui";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ReviewCardType = {
  text: string;
  title: string;
  quantity: number;
  className?: string;
};

const ReviewCard = ({ className, quantity, text, title }: ReviewCardType) => {
  return (
    <div className={clsx(styles.card, className)}>
      <h2 className={styles.title}>{title}</h2>
      <Stars className={styles.stars} quantity={quantity} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default ReviewCard;
