import styles from "./styles.module.scss";
import { StarIcon } from "..";
import clsx from "clsx";

type StarsType = {
  quantity: number;
  className?: string;
};

const Stars = ({ quantity, className }: StarsType) => {
  return (
    <div className={clsx(styles.stars, className)}>
      {Array(quantity)
        .fill("star")
        .map((_, ind) => (
          <StarIcon key={ind} />
        ))}
    </div>
  );
};

export default Stars;
