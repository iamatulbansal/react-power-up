import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        //LOGIC FOR CHECK USER NETWORK IS ONLINE OR OFFLINE
        const handleOnline = () => {
            setIsOnline(true);
        };
        const handleOffLine = () => {
            setIsOnline(false);
        };
        //EVENT LISTENER
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffLine);

        return () => {
            //CLEAN-UP
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffLine);
        };
    }, []);
    //RETURN STATEMENT
    return Boolean(isOnline);
};
export default useOnline;