import Image from "next/image";
import { ProgramType } from "@/shared/inderface";
import styles from "./styles.module.scss";
import { Route } from "@/hooks/router";
import { ProgramListType } from "@/global/type";

type ContentProps = {
  program: ProgramListType;
};

const Content = ({ program }: ContentProps) => {
  const { lang } = Route()
  const description: string = program[`desc_${lang}` as keyof ProgramListType] as string
  return (
    <div className={styles.content}>
      <div className="container-sm">
        {program.images[0] && (
          <div className={styles.wrapper}>
            <Image
              className={styles.image}
              src={program.images[0].image}
              alt="Blog Image"
              width={1600}
              height={700}
            />
          </div>
        )}
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default Content;
