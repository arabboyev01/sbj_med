import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useChangeLocale } from "@/features/locales";
import { languages } from "./config";
import { IconButton, LangIcon } from "..";
import styles from "./styles.module.scss";
import { horizontalAnimation } from "@/shared/animation";
import { useOnClickOutside } from "@/shared/lib/modal";

const Language = () => {
  const [open, setOpen] = useState(false);
  const changeLocale = useChangeLocale();
  const elementRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(elementRef, () => setOpen(false));

  const changeHandler = (lang: "uz" | "en" | "ru") => {
    changeLocale(lang);
    setOpen(false);
  };

  return (
    <div className={styles.language} ref={elementRef}>
      <IconButton className={styles.button} onClick={() => setOpen(!open)}>
        <LangIcon />
      </IconButton>
      {open && (
        <motion.div
          className={styles.wrapper}
          variants={horizontalAnimation}
          initial="hidden"
          animate="visible"
        >
          {languages.map((lang) => (
            <button
              className={styles["lang-button"]}
              key={lang.lang}
              onClick={() => changeHandler(lang.lang)}
            >
              <lang.icon className={styles.icon} />
              <span>{lang.title}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Language;
