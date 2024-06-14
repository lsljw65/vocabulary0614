import "./App.css";
import DayList from "./component/DayList";
import Header from "./component/Header";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Words from "./component/Words";

function App() {
  // const [wordList, setWordList] = useState([]);
  // //componentDidMount
  // useEffect(() => {
  //   getWordListData();
  // }, []);

  // const getWordListData = async () => {
  //   const result1 = await axios("http://localhost:8000/words");
  //   console.log(result1);
  //   console.log(result1.word);
  //   setWordList(result1.word);
  // };
  return (
    <div className="App">
      <h1>Vocabulary</h1>
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={} />
          <Route path="/" element={} />
        </Routes>
      </BrowserRouter> */}
      <DayList />
      <Words />
    </div>
  );
}

export default App;
