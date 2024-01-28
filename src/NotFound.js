import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundSlideshow from "./BackgroundSlideshow";
import Header from "./Header";

function NotFound(){
    const redirectTime = 1;
    const [time,setTime] = useState(redirectTime);
    const navigate = useNavigate();

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(time=>(time-1));
        },1000)

         setTimeout(()=>{
            navigate("/");
        },time*1000);
     
        return () => clearInterval(intervalId);

    },[navigate])

    return (
        <>
        <Header/>
        <BackgroundSlideshow/>
        <h1 className="flex justify-center font-bold text-2xl md:text-6xl  text-hoverCardColor">
        404 PAGE NOT FOUND
        </h1>
        <div className="flex justify-center m-10 text-hoverCardColor">
            Redirecting to main page in {time} seconds
        </div>
        {/* <Footer/> */}
        </>
        
    )
}

export default NotFound;