import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";
import { LinkButton } from "..";
import routing from "@/shared/routing";

type ErrorMessageType = {
  image: string;
  title: string;
};

const ErrorMessage = ({ image, title }: ErrorMessageType) => {
  return (
    <div className={styles.error}>
      <div className={clsx("container-sm", styles.container)}>
        <div className={styles.wrapper}>
          <Image
            className={styles.image}
            src={image ?? "/images/not-found.png"}
            alt="Something went wrong!"
            width={750}
            height={500}
          />
          <h1 className={styles.title}>{title ?? "Эта страница не найдена"}</h1>
          <LinkButton className={styles.link} href={routing.home} theme="dark">
            Главная страница
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
