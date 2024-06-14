import styles from "../css/Day.module.css";

export default function Day(props) {
  return (
    <div className={styles.day}>
      {props.dayList.map((data) => (
        <span>Day {data.day}</span>
      ))}
    </div>
  );
}
