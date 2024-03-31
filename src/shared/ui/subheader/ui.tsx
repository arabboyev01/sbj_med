import { BreadcrumbsType } from "@/shared/inderface";
import { Breadcrumbs } from "..";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

type SubheaderProps = {
  render: (BreadcrumbsType & { key: number })[];
  title: string;
};

const Subheader = ({ render, title }: SubheaderProps) => {
  return (
    <div className={styles.header}>
      <motion.div
        className="container-sm"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.75,
        }}
      >
        <Breadcrumbs className={styles.breadcrumbs} render={render} />
        <h1 className={styles.title}>{title}</h1>
      </motion.div>
    </div>
  );
};

export default Subheader;
