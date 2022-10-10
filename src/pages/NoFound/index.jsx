import styles from './index.module.scss'

export default function NoFound() {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}
