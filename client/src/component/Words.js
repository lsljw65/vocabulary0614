// import Word from "./Word";
import WordView from "./WordView";
import styles from "../css/Words.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Words() {
  const { day } = useParams();
  const [wordList, setWordList] = useState([]);

  //componentDidMount
  useEffect(() => {
    getWordListData();
  }, []);

  const getWordListData = async () => {
    const result = await axios("http://localhost:8000/words");
    console.log(result);
    console.log(result.data);
    setWordList(result.data);
  };
  const wordFilter = wordList.filter((word) => word.day === Number(day));

  return (
    <div>
      <h2 className={styles.wordH2}>Day {day}</h2>
      <table>
        <tbody>
          {/*  */}
          {wordFilter.map((word) => (
            <WordView word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      {/* <Word wordList={wordList} /> */}
    </div>
  );
}
