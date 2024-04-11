import { SectionHeader } from "@/entities/section-header";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";
import { ProgramCard } from "@/entities/cards";
import { useScopedI18n } from "@/features/locales";
import fetchData from "@/pages/api";
import { useQuery } from "react-query";
import { ProgramListType } from "@/global/type";

const Programs = () => {
  const t = useScopedI18n("programs");

  const { data, refetch } = useQuery('programs', () => fetchData(`appointment/program/list/?page=1&page_size=5`))

  return (
    <div className={styles.programs}>
      <div className="container-sm">
        <SectionHeader title={t("caption")} href={routing.programs} />
        <div className={styles.bottom}>
          <div className={styles.left}>
            {data?.results?.slice(0, 1)?.map((el: ProgramListType) =>
              <ProgramCard
                className={styles["card-lg"]}
                key={el.id}
                {...el}
                descOn
                size="large"
              />
            )}
          </div>
          <div className={styles.right}>
            {data?.results?.slice(1, 5)?.map((el: ProgramListType) =>
              <ProgramCard
                className={styles["card-lg"]}
                key={el.id}
                {...el}
              />
            )}
            {/* <ProgramCard
              className={styles["card-sm"]}
              href={routing.programs}
              variant="brown"
              title="Пластика век по специальной цене"
              image="/images/people/woman.png"
            />
            <ProgramCard
              className={styles["card-sm"]}
              href={routing.programs}
              variant="mint"
              title="Гастро- и колоноскопия«во сне»:скидка 20%"
              image="/images/people/doctor-with-telescope.png"
            />
            <ProgramCard
              className={styles["card-sm"]}
              href={routing.programs}
              variant="purple"
              title="«КТ ночью со скидкой 20%»с 22:00 до 08:00"
              image="/images/people/disk.png"
            />
            <ProgramCard
              className={styles["card-sm"]}
              href={routing.programs}
              variant="green"
              title="Акция «Выезд медсестры на дом за 1 руб.»"
              image="/images/people/nurse.png"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
