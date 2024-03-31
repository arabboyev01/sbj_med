import Image from "next/image";
import styles from "./styles.module.scss";

const AboutInfo = () => {
  return (
    <div className={styles.info}>
      <div className="container-sm">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Современная, высокотехнологичная клиника с опытными врачами, которые
            помогут избавиться от заболеваний и вновь обрести здоровье.
          </h2>
          <p className={styles.text}>
            Мы всегда делаем всё возможное, чтобы помочь нашим пациентам обрести
            утраченное здоровье и используем передовые технологии, чтобы сделать
            диагностику и лечение заболеваний точными и эффективными.
          </p>
        </div>
        <Image
          className={styles.image}
          src="/images/all-doctors.png"
          alt="Team"
          width={1600}
          height={600}
        />
        <h3 className={styles.heading}>
          Наши специалисты прошли обучение и стажировку в ведущих центрах
          Европы, Корее, Индии и являются профессионалами своего дела.
        </h3>
        <p className={styles.text}>
          Needed here respectively competitors driving standup. Could world team
          eco-system after. Productize job hit but product world reality club
          resources. The hammer based my heads-up including third. Up reinvent
          member open lunch adoption criticality scraps devil. Finance will
          break should here overflow eow respectively rundown company. Synergy
          incentivize roll looking unit involved based money mindfulness for.
          Scraps stands best solutions didn&apos;t hanging pain community low
          already. Tomorrow price manage native just we seat hour future-proof.
          Stands turn reality paradigm a three place will floor ui. Discussion
          streamline manager eco-system reach. Feed skulls let today involved
          blue. Discussions of join pivot.
        </p>
      </div>
    </div>
  );
};

export default AboutInfo;
