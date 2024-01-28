import React from "react"
function Sidebar(){

   const  ButtonHome = ()=>{return (<button className=" rounded-lg m-2 p-2 text-buttonColor hover:text-hoverCardColor">Home</button>)}
   const ButtonEatables = ()=>{return (<button className=" rounded-lg m-2 p-2  text-buttonColor hover:text-hoverCardColor">Eatables</button>)};
   const ButtonTypes = ()=>{return (<button className=" rounded-lg m-2 p-2  text-buttonColor hover:text-hoverCardColor">Types</button>)};

    return(
        <>
            <div className=" bg-headerBgColor sticky left-0  w-32 h-screen z-10 rounded-lg">
                <ButtonHome/>
                <ButtonEatables/>
                <ButtonTypes/>
            </div>
        </>
    );

}

export default Sidebar