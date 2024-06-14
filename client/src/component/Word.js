export default function Word(props) {
  return (
    <table>
      <tbody>
        {props.wordList.map((word) => (
          <tr>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
        {/* <tr>
          <td>영어</td>
          <td>국어</td>
        </tr> */}
      </tbody>
    </table>
  );
}
