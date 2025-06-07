

export default function UserData({data}) {
   if(data === null){
    return false;
   }
    
  return (
  <div className="section">
        <p>id: {data[0]?.id}</p>
        <p>name: {data[0]?.name}</p>
        <p>username: {data[0]?.username}</p>
        <p>email: {data[0]?.email}</p>
        <p>phone: {data[0]?.phone}</p>
      </div>
  )
}
