import { DoctorCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import fetchData from "@/pages/api";
import { useQuery } from "react-query";
import { DoctorType } from "@/global/type";

const DoctorsList = () => {
  const { data } = useQuery('doctors', () => fetchData('appointment/doctor/list/'))
  return (
    <div className={styles.doctors}>
      <div className="container-sm">
        <div className={styles.list}>
          {data?.results?.map((el: DoctorType) => (
            <DoctorCard className={styles.card} data={el} key={el?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
