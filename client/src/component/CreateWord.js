import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWord() {
  const [days, setDays] = useState([]);
  const history = useNavigate();
  const [isLoading, setIsLoding] = useState(false);
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

    if (!isLoading) {
      setIsLoding(true);
      // isDone 고정
      fetch(url2, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: 0,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다");
          history(`/word/${dayRef.current.value}`);
          setIsLoding(false);
        }
      });
    }
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
      "
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
