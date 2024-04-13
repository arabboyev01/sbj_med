import styles from "./styles.module.scss";

type ContentProps = {
  text: string;
};

const Content = ({ text }: ContentProps) => {
  return (
    <div className={styles.content}>
      <div className="container-sm">
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
};

export default Content;