import { ServiceCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import { ServiceType } from "./config";
import { useScopedI18n } from "@/features/locales";
import { Services_List } from "@/global/servicde_list";

const ServiceList = () => {
  const t = useScopedI18n("services");

  const services_list: ServiceType[] = Services_List(t)
  return (
    <div className={styles.sevices}>
      <div className="container-sm">
        <div className={styles.list}>
          {services_list.map((serv) => (
            <ServiceCard className={styles.card} key={serv.id} {...serv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
