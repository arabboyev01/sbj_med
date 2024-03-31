import { ProgramCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import { programs } from "./config";
import { useQuery } from "react-query";
import fetchData from "@/pages/api";
import { ProgramListType } from "@/global/type";
import { Fragment, useState, useEffect } from "react";
import PaginationComponent from "@/components/pagination";

const ProgramsList = () => {
  const [count, setCount] = useState(1)
  const { data, refetch } = useQuery('programs', () => fetchData(`appointment/program/list/?page=${count}&page_size=6`))

  useEffect(() => {
    refetch()
  }, [count, refetch]);

  return (
    <Fragment>
      <div className={styles.programs}>
        <div className="container-sm">
          <div className={styles.list}>
            {data?.results?.map((el: ProgramListType) => (
              <ProgramCard className={styles.card} key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
      <PaginationComponent count={data?.count} onChange={setCount}/>
    </Fragment>

  );
};

export default ProgramsList;
