import clsx from "clsx";
import styles from "./styles.module.scss";
import Image from "next/image";

type EquipmentCard = {
  className?: string;
};

const EquipmentCard = ({ className }: EquipmentCard) => {
  const classes = clsx(styles.card, className);
  return (
    <div className={classes}>
      <div className={styles.wrapper}>
        <Image
          className={styles.image}
          src="/images/equipments/densimetr.png"
          alt="Equipment"
          width={342}
          height={350}
        />
      </div>
      <h3 className={styles.title}>Магнитно-резонансный томограф (1.5Т)</h3>
      <p className={clsx(styles.text, styles.name)}>Lonwin SuperVan1.5T</p>
      <p className={styles.text}>
        Производитель: <b className={styles.bold}>LonWin (Китай)</b>
      </p>
    </div>
  );
};

export default EquipmentCard;
