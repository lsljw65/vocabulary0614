import "../css/DayList.css";
import React from "react";
import Day from "./Day";
// import Words from "./Words";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DayList() {
  const [dayList, setDayList] = useState([]);
  //componentDidMount
  useEffect(() => {
    getDayListData();
  }, []);

  const getDayListData = async () => {
    const result = await axios("http://localhost:8000/days");
    console.log(result);
    console.log(result.data);
    setDayList(result.data);
  };
  return (
    <div className="daylist">
      {/* <h2>dayList</h2> */}
      <Day dayList={dayList} />
    </div>
  );
}
