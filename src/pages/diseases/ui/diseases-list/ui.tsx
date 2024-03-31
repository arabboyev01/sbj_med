import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import Link from "next/link";
import routing from "@/shared/routing";

const DiseasesList = () => {
  const {
    query: { letter },
  } = useRouter();

  const l = letter ?? "A";

  return (
    <div className={styles.diseases}>
      <div className="container-sm">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            Буква <span className={styles.letter}>{l}</span>
          </h2>
          <div className={styles.list}>
            {Array.from({ length: 16 }, () => ({
              name: "Абиотрофия сетчатки",
              id: Math.round(Math.random() * 10000),
            })).map((el) => (
              <Link
                className={styles.link}
                href={routing.diseaseById(el.id)}
                key={el.id}
              >
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseasesList;
