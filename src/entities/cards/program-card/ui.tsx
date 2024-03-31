import clsx from "clsx";
import styles from "./styles.module.scss";
import { LinkAll, LinkButton } from "@/shared/ui";
import Image from "next/image";
import { ProgramsVariantType } from "@/shared/inderface";
import routing from "@/shared/routing";
import { useI18n } from "@/features/locales";
import { ProgramListType } from "@/global/type";
import { Route } from '@/hooks/router'
// type ProgramCardType = {
//   href: string;
//   title: string;
//   text?: string;
//   className?: string;
//   variant?: ProgramsVariantType;
//   linkType?: "ordinary" | "all";
//   size?: "large" | "small";
//   image: string;
// };

const ProgramCard = (props: ProgramListType) => {
  const t = useI18n();

  const { lang } = Route()
  const classes = clsx(
    styles.card,
    styles[props?.colors ?? "blue"],
    props.className,
    styles["small"]
  );
  const title: string = props[`title_${lang}` as keyof ProgramListType] as string
  const description: string = props[`desc_${lang}` as keyof ProgramListType] as string

  return (
    <div className={classes}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {props?.descOn && <div style={{ color: "#fff", marginBottom: '12px'}} dangerouslySetInnerHTML={{ __html: description }} />}
        {"all" === "all" ? (
          <LinkAll
            className={clsx(styles.link, styles.all)}
            href={routing.programsBySlug(props?.slug)}
          >
            {t("detailed")}
          </LinkAll>
        ) : (
          <LinkButton
            className={clsx(styles.link, styles.ordinary)}
            href={routing.programsBySlug(props?.slug)}
          >
            {t("detailed")}
          </LinkButton>
        )}
      </div>
      <Image
        className={styles.image}
        src={props?.images[0]?.image}
        alt="Programs"
        width={225}
        height={270}
      />
    </div>
  );
};

export default ProgramCard;
