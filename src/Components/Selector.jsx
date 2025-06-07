
export default function Selector({num,handleChangeId,curPostId}) {
  return (
    <label>
      <input type="radio" checked={num === curPostId} name="user" onChange={() => handleChangeId(num)}/>{num}
    </label>
  );
}
