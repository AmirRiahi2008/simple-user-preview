import { useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Toast({type = "default" , message}) {
    useEffect(() => {
            if(message){
                toast[type][message]
            }
    }, [message , type]);
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={"Bounce"}
    />
  );
}
