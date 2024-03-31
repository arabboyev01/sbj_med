import Link from "next/link";
import { letters } from "./config";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";
import { SearchIcon } from "@/shared/ui";
import { useScopedI18n } from "@/features/locales";

const SearchByLetter = () => {
  const t = useScopedI18n("diseases");
  return (
    <div className={styles.search}>
      <div className="container-sm">
        <h2 className={styles.title}>{t("caption")}</h2>
        <div className={styles.container}>
          <form className={styles.form}>
            <label className={styles.label}>
              <SearchIcon className={styles.icon} />
              <input
                className={styles.input}
                type="text"
                placeholder={t("search")}
              />
            </label>
          </form>
          <ul className={styles.list}>
            {letters.map((letter) => (
              <li className={styles.item} key={letter.id}>
                <Link
                  className={styles.link}
                  href={routing.diseases({ letter: letter.letter })}
                >
                  {letter.letter}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchByLetter;
