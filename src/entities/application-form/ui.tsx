import { PropsWithChildren, ReactNode, useCallback, useState } from "react";
import clsx from "clsx";
import * as yup from "yup";
import { Button } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./styles.module.scss";
import { useScopedI18n } from "@/features/locales";
import { opacityAnimation } from "@/shared/animation";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import fetchData from "@/pages/api";
import { DoctorType, ProgramListType } from "@/global/type";
import { Services_List } from "@/global/servicde_list";
import { ServiceType } from "@/pages/services/ui/services-list/config";

type ApplicationFormType = {
  theme?: "dark" | "light";
  modalClose?: ReactNode;
};

type TabItemType = {
  value: number;
  index: number;
};

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    message: yup.string().required("Message is required"),
    service: yup.string().required("Please, select service"),
    direction: yup.string().required("Please, select direction"),
    doctor: yup.string().required("Please, select doctor"),
    phone_number: yup.string().required("Phone number is required"),
  })
  .required();

export const ApplicationForm = ({ theme, modalClose }: ApplicationFormType) => {
  const [value, setValue] = useState(1);

  const t = useScopedI18n("appointment");

  const { data: doctors } = useQuery('doctors', () => fetchData('appointment/doctor/list/'))
  const { data: programs } = useQuery('programs', () => fetchData('appointment/program/list/'))

  const services_list: ServiceType[] = Services_List(t)

  const onChangeHandler = useCallback((val: number) => setValue(val), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const classes = clsx(styles.form, styles[theme ?? "light"]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className={styles["application-form"]}>
      <div className="container-sm">
        <form className={classes} onSubmit={onSubmit}>
          <header className={styles.header}>
            <h2 className={styles.title}>{t("form-title")}</h2>
            {modalClose && modalClose}
          </header>
          <div className={styles.wrapper}>
            <div className={styles.top}>
              <label className={clsx(styles.label, styles["label-name"])}>
                <span className={styles.text}>{t("name")}</span>
                <input
                  className={clsx(styles.input)}
                  {...register("name")}
                  placeholder={t("fullName")}
                />
                {errors.name && (
                  <p className={styles.error}>{errors.name.message}</p>
                )}
              </label>
              <label className={clsx(styles.label, styles["label-phone"])}>
                <span className={styles.text}>{t("phone")}</span>
                <input
                  className={clsx(styles.input)}
                  {...register("phone_number")}
                  placeholder={t("phoneNumber")}
                />
                {errors.phone_number && (
                  <p className={styles.error}>{errors.phone_number.message}</p>
                )}
              </label>
            </div>
            <div className={styles.tab}>
              <header className={styles["tab-header"]}>
                <div className={styles["tab-wrapper"]}>
                  <button
                    className={clsx(
                      styles["tab-button"],
                      value === 0 && styles.active
                    )}
                    type="button"
                    onClick={() => onChangeHandler(0)}
                  >
                    {t('programs')}
                  </button>
                  <button
                    className={clsx(
                      styles["tab-button"],
                      value === 1 && styles.active
                    )}
                    type="button"
                    onClick={() => onChangeHandler(1)}
                  >
                    {t('medical_services')}
                  </button>
                  <button
                    className={clsx(
                      styles["tab-button"],
                      value === 2 && styles.active
                    )}
                    type="button"
                    onClick={() => onChangeHandler(2)}
                  >
                    {t('doctor_services')}
                  </button>
                </div>
              </header>
              <TabItem value={value} index={0}>
                <label className={clsx(styles.label, styles["label-select"])}>
                  <span className={styles.text}>{t('programs')}</span>
                  <select
                    className={clsx(styles.input)}
                    {...register("direction")}
                  >
                    <option value="0">
                      {t("choose")}
                    </option>
                    {programs?.results?.map((program: ProgramListType) => (
                      <option key={program.id} value={program.id} style={{color: "#000"}}>
                        {program.title_en}
                      </option>
                    ))}
                  </select>
                  {errors.direction && (
                    <p className={styles.error}>{errors.direction.message}</p>
                  )}
                </label>
              </TabItem>
              <TabItem value={value} index={1}>
                <label className={clsx(styles.label, styles["label-select"])}>
                  <span className={styles.text}>{t("service")}</span>
                  <select
                    className={clsx(styles.input)}
                    {...register("service")}
                  >
                    <option value="0">
                      {t("choose")}
                    </option>
                    {services_list.map((doctor: ServiceType) => (
                      <option key={doctor.id} value={doctor.id} style={{color: "#000"}}>
                        {doctor.title}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className={styles.error}>{errors.service.message}</p>
                  )}
                </label>
              </TabItem>
              <TabItem value={value} index={2}>
                <label className={clsx(styles.label, styles["label-select"])}>
                  <span className={styles.text}>{t("doctor")}</span>
                  <select
                    className={clsx(styles.input)}
                    {...register("doctor")}
                  >
                    <option value="0">
                      {t("choose")}
                    </option>
                    {doctors?.results?.map((doctor: DoctorType) => (
                      <option key={doctor.id} value={doctor.id} style={{color: "#000"}}>
                        {doctor.first_name} {doctor.last_name}
                      </option>
                    ))}
                  </select>
                  {errors.doctor && (
                    <p className={styles.error}>{errors.doctor.message}</p>
                  )}
                </label>
                <div>
                  <input type="date" className={styles.date_input} />
                </div>
              </TabItem>
            </div>

            <label className={clsx(styles.label, styles["label-message"])}>
              <span className={styles.text}>{t("comment")}</span>
              <textarea
                className={clsx(styles.input, styles.textarea)}
                {...register("message")}
                placeholder={t("detail")}
                rows={3}
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

const TabItem = ({
  value,
  index,
  children,
}: PropsWithChildren<TabItemType>) => {
  return value === index ? (
    <motion.div
      className={styles.context}
      initial="hidden"
      animate="visible"
      variants={opacityAnimation}
    >
      {children}
    </motion.div>
  ) : null;
};
