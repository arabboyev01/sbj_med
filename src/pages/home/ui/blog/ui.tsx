import { SectionHeader } from "@/entities/section-header";
import styles from "./styles.module.scss";
import routing from "@/shared/routing";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className="container-sm">
        <SectionHeader title="Наша команда врачей" href={routing.news} />
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default Blogs;
