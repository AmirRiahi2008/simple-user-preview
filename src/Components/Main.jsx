import { useState, useEffect } from "react";
import UserData from "./UserData";
import UserSelector from "./UserSelector";
import Loading from "./Loading";
import Toast from "./Toast";
export default function Main() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ type: "default", message: "" });
  const [curPostId, setCurPostId] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
       const filteredData = data.filter(item => item.id === curPostId);
        setData(filteredData);
        
        setLoading(false);
        setToast({ type: "success", message: `Post ${curPostId} Loaded` });
      });
  }, [curPostId]);
  function handleChangeId(id) {
    if (id !== curPostId) setCurPostId(id);
  }
  return (
    <>
      <div id="root">
        <UserSelector curPostId={curPostId} handleChangeId={handleChangeId}/>
        {loading ? <Loading /> : <UserData data={data ? data : null}  />}
        <Toast message={toast.message} type={toast.type}/>
      </div>
    </>
  );
}
