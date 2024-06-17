import { useEffect, useRef, useState } from "react";

export default function CreateWord() {
  const [days, setDays] = useState([]);

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

  const url2 = "http://localhost:8000/words/";
  function onSubmit(e) {
    e.preventDefault();
    console.log(engRef.current.value);
    console.log(korRef.current.value);
    console.log(dayRef.current.valueOf);

    // isDone 고정
    fetch(url2, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        day: dayRef.current.valueOf,
        eng: engRef.current.value,
        kor: engRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다");
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(0);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}
