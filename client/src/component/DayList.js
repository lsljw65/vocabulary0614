import "../css/DayList.css";
import { Link } from "react-router-dom";
import styles from "../css/Day.module.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DayList() {
  const [dayList, setDayList] = useState([]);
  const fetchUrl = "http://localhost:8000/days";
  //componentDidMount
  useEffect(() => {
    const getDayListData = async () => {
      const result = await axios(fetchUrl);
      setDayList(result.data);
    };
    getDayListData();
  }, [fetchUrl]);

  /* const getDayListData = async () => {
    const result = await axios("http://localhost:8000/days");
    setDayList(result.data);
  }; */
  return (
    <div className="daylist">
      {dayList.map((day) => (
        <span className={styles.day} key={day.id}>
          <Link to={`/word/${day.day}`}>Day {day.day}</Link>
        </span>
      ))}
    </div>
  );
}
