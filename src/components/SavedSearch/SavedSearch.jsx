import styles from "./SavedSearch.module.scss";

import SavedCar from "./SavedCar";
import SavedSkeleton from "../SavedSkeleton";

const headings = [
  "Марка",
  "Модель",
  "Коробка",
  "Стан",
  "Паливо",
  "Привід",
  "Рік",
  "Ціна",
  "Telegram",
];

export default function SavedSearch({ saved }) {
  return (
    <article className={styles.root}>
      <article className={styles.wrapper}>
        <div className={styles.heading}>
          {headings.map((heading) => {
            return <h3 key={heading}>{heading}</h3>;
          })}
        </div>
        {saved && saved.length !== 0 ? (
          saved.map((save) => {
            return <SavedCar key={save.id} savedCar={save} />;
          })
        ) : (
          <SavedSkeleton />
        )}
      </article>
    </article>
  );
}
