import Selector from "./Selector";

export default function UserSelector({handleChangeId,curPostId}) {
  const all = [1, 2, 3, 4].map((num, index) => (
    <Selector curPostId={curPostId} handleChangeId={handleChangeId} num={num} key={num} />
  ));
  return (
    <p className="section">
      Users:
      {all}
    </p>
  );
}
