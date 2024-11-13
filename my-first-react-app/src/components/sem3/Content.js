import styles from "./Content.module.css";
function Content({ theme }) {
  return <div className={`${styles.content} ${styles[theme]}`}>
    <p>Проверка темы</p>
    <p>Проверка темы</p>
    <p>Проверка темы</p>
    <p>Проверка темы</p>
    <p>Проверка темы</p>
    <p>Проверка темы</p>
    <p>Проверка темы</p>
  </div>;
}

export default Content;
