import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h2>
        <Link to="/">토익 영단어(고급)</Link>
      </h2>
      <div className="menu">
        <a href="#x" className="link">
          단어 추가
        </a>
        <a href="#x" className="link">
          Day 추가
        </a>
      </div>
    </div>
  );
}
