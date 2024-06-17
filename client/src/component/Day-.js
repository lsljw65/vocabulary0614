import { Link } from "react-router-dom";
import styles from "../css/Day.module.css";

export default function Day(props) {
  return (
    <div className={styles.day}>
      {props.dayList.map((data) => (
        <Link to={`/words/${data.day}`}>Day {data.day}</Link>
      ))}
    </div>
  );
}
