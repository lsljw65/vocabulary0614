import { Link } from "react-router-dom";
export default function EmptyPage() {
  return (
    <div>
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌악가기</Link>
    </div>
  );
}
