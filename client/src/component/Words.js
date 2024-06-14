import Word from "./Word";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Words() {
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
  return (
    <div>
      <Word wordList={wordList} />
    </div>
  );
}
