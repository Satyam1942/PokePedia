import React from "react"
import { Link } from "react-router-dom";
function Sidebar(){

   const  ButtonHome = ()=>{return (<button className=" rounded-lg m-2 p-2 text-buttonColor hover:text-hoverCardColor">Home</button>)}
//    const ButtonEatables = ()=>{return (<button className=" rounded-lg m-2 p-2  text-buttonColor hover:text-hoverCardColor">Eatables</button>)};
//    const ButtonTypes = ()=>{return (<button className=" rounded-lg m-2 p-2  text-buttonColor hover:text-hoverCardColor">Types</button>)};
   const ButtonHistory = ()=>{return (<button className=" rounded-lg m-2 p-2  text-buttonColor hover:text-hoverCardColor">History</button>)};

    return(
        <>
            <div className=" bg-headerBgColor sticky left-0  w-32 h-auto z-10  rounded-b-lg">
                <Link to = {"/"}>
                <ButtonHome/>
                </Link>
                {/* <ButtonEatables/>
                <ButtonTypes/> */}
                <Link to = {"/history"}>
                <ButtonHistory/>
                </Link>
            </div>
        </>
    );

}

export default Sidebar