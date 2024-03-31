import { ServiceCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import fetchData from "@/pages/api";
import { useQuery } from "react-query";
import { ServicesType } from "@/global/type";

const ServiceList = () => {

  const { data: services } = useQuery('services', () => fetchData('appointment/spec/list/'))

  return (
    <div className={styles.sevices}>
      <div className="container-sm">
        <div className={styles.list}>
          {services?.results?.map((serv: ServicesType) => (
            <ServiceCard className={styles.card} key={serv.id} {...serv} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
