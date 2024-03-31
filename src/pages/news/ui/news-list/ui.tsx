import { BlogCard } from "@/entities/cards";
import styles from "./styles.module.scss";
import { NewsListType } from "@/shared/inderface";

type NewsType = {
  news: NewsListType;
};

const NewsList = ({ news: { results } }: NewsType) => {
  return (
    <div className={styles.news}>
      <div className="container-sm">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.column}>
              {results.slice(0, 2).map((card) => (
                <BlogCard
                  className={styles.card}
                  key={card.id}
                  card={{
                    date: card.created,
                    title: card.title_uz,
                    text: card.desc_uz,
                    slug: card.slug,
                  }}
                />
              ))}
            </div>
            {results.slice(1, 2).map((card) => (
              <BlogCard
                className={styles["card-lg"]}
                key={card.id}
                card={{
                  date: card.created,
                  title: card.title_uz,
                  text: card.desc_uz,
                  image: {
                    src: card.images[0].image,
                  },
                  slug: card.slug,
                }}
              />
            ))}
            <div className={styles.column}>
              {results.slice(0, 2).map((card) => (
                <BlogCard
                  className={styles.card}
                  key={card.id}
                  card={{
                    date: card.created,
                    title: card.title_uz,
                    text: card.desc_uz,
                    slug: card.slug,
                  }}
                />
              ))}
            </div>
          </div>
          <div className={styles.middle}>
            {results.slice(0, 2).map((card) => (
              <BlogCard
                className={styles.card}
                key={card.id}
                card={{
                  date: card.created,
                  title: card.title_uz,
                  text: card.desc_uz,
                  slug: card.slug,
                }}
              />
            ))}
            {results.slice(0, 2).map((card) => (
              <BlogCard
                className={styles.card}
                key={card.id}
                card={{
                  date: card.created,
                  title: card.title_uz,
                  text: card.desc_uz,
                  slug: card.slug,
                }}
              />
            ))}
          </div>
          <div className={styles.bottom}>
            {results.slice(1, 2).map((card) => (
              <BlogCard
                className={styles["card-lg"]}
                key={card.id}
                card={{
                  date: card.created,
                  title: card.title_uz,
                  text: card.desc_uz,
                  image: {
                    src: card.images[0].image,
                  },
                  slug: card.slug,
                }}
              />
            ))}
            <div className={styles.column}>
              {results.slice(0, 2).map((card) => (
                <BlogCard
                  className={styles.card}
                  key={card.id}
                  card={{
                    date: card.created,
                    title: card.title_uz,
                    text: card.desc_uz,
                    slug: card.slug,
                  }}
                />
              ))}
            </div>
            <div className={styles.column}>
              {results.slice(0, 2).map((card) => (
                <BlogCard
                  className={styles.card}
                  key={card.id}
                  card={{
                    date: card.created,
                    title: card.title_uz,
                    text: card.desc_uz,
                    slug: card.slug,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
