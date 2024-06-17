import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function CrateDay() {
  const [days, setDays] = useState([]);
  const history = useNavigate();
  const url = "http://localhost:8000/days";
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((days) => {
        setDays(days);
      });
  }, [url]);
  function addDay() {
    console.log("눌려짐");
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다.");
        history("/");
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  );
}
