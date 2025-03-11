import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {

    
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });

    //  window.onoffline = (event) => {
    //     console.log("The network connection has been lost.");
    //     setOnlineStatus(false);
    //   };

    //   window.ononline = (event) => {
    //     console.log("The network connection is back");
    //     setOnlineStatus(true);
    //   }
    
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
