import clsx from "clsx";
import * as yup from "yup";
import { Button } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./styles.module.scss";
import { useScopedI18n } from "@/features/locales";

const schema = yup
  .object({
    name: yup.string().required("Name is required!"),
    message: yup.string().required("Message is required!"),
    company: yup.string().required("Please, mention your company!"),
    position: yup.string().required("Please, mention your position!"),
    phone_number: yup.string().required("Phone number is required!"),
  })
  .required();

const ApplicationForm = () => {
  const t = useScopedI18n("appointment");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const classes = clsx(styles.form);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={styles["application-form"]}>
      <div className="container-sm">
        <form className={classes} onSubmit={onSubmit}>
          <header className={styles.header}>
            <h2 className={styles.title}>{t("form-title")}</h2>
          </header>
          <div className={styles.wrapper}>
            <label className={clsx(styles.label)}>
              <span className={styles.text}>{t("name")}</span>
              <input
                className={clsx(styles.input)}
                {...register("name")}
                placeholder={t("write")}
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </label>
            <label className={clsx(styles.label)}>
              <span className={styles.text}>{t("phone")}</span>
              <input
                className={clsx(styles.input)}
                {...register("phone_number")}
                placeholder={t("write")}
              />
              {errors.phone_number && (
                <p className={styles.error}>{errors.phone_number.message}</p>
              )}
            </label>
            <label className={clsx(styles.label)}>
              <span className={styles.text}>{t("company")}</span>
              <input
                className={clsx(styles.input)}
                {...register("company")}
                placeholder={t("write")}
              />
              {errors.company && (
                <p className={styles.error}>{errors.company.message}</p>
              )}
            </label>
            <label className={clsx(styles.label)}>
              <span className={styles.text}>{t("position")}</span>
              <input
                className={clsx(styles.input)}
                {...register("position")}
                placeholder={t("write")}
              />
              {errors.position && (
                <p className={styles.error}>{errors.position.message}</p>
              )}
            </label>
            <label className={clsx(styles.label)}>
              <span className={styles.text}>{t("comment")}</span>
              <textarea
                className={clsx(styles.input, styles.textarea)}
                {...register("message")}
                placeholder={t("write")}
                rows={5}
              />
              {errors.message && (
                <p className={styles.error}>{errors.message.message}</p>
              )}
            </label>
          </div>
          <footer className={styles.footer}>
            <Button className={styles.button} variant="contained" type="submit">
              {t("submit")}
            </Button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
