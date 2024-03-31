import { EquipmentCard } from "@/entities/cards";
import styles from "./styles.module.scss";

const EquipmentsList = () => {
  return (
    <div className={styles.equipments}>
      <div className="container-sm">
        <div className={styles.list}>
          {Array.from({ length: 8 }, () => Math.random()).map((el) => (
            <EquipmentCard className={styles.card} key={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentsList;
