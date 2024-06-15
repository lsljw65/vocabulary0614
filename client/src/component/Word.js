import styles from "../css/Words.module.css";
import { useParams } from "react-router-dom";
export default function Word(props) {
  // 해당 날자의 자료만 출력 설정
  const a = useParams();

  const day = a.day;
  const wordFilter = props.wordList.filter((word) => word.day === Number(day));
  // console.log(wordFilter);
  console.log(a);
  return (
    <div>
      <h2 className={styles.wordH2}>Day {day}</h2>
      <table>
        <tbody>
          {/*  */}
          {wordFilter.map((word) => (
            <tr>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
          {/* 속성을 받아 자료전체 출력 */}
          {/* {props.wordList.map((word) => (
            <tr>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
