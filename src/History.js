import React from 'react'
import BackgroundSlideshow from './BackgroundSlideshow';
import Header  from './Header';
import {Link} from 'react-router-dom'

function History(){
    // localStorage.clear();
    let  cache = []; 
    
    if(localStorage.getItem("pokemonHistory"))
        cache = JSON.parse(localStorage.getItem("pokemonHistory"));
    const altImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFJoiQl5YPHK2xiOHeyplhJWUpFZT4m0vw&usqp=CAU";
    const imageHeight = "200px" 
    const imageWidth = "200px"

    const beutifyName = (name)=>{return (name.charAt(0).toUpperCase()+ name.slice(1));} 

    console.log(localStorage);
    console.log(cache);
    return (
        <>
            <Header/>
            <BackgroundSlideshow/>
            <div className=' flex justify-center  text-mainBackgroundColor  text-2xl  font-bold'> 
                RECENTLY VIEWED POKEMON
            </div>

            { 
            
            cache.length==0 ? (
                <div className=' flex justify-center text-headerBgColor text-2xl'>
                    GO AND VIEW POKEMON TO ADD TO HISTORY TAB
                </div>
            )
             :(
            <div className='gap-2 m-2 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 justify-items-center'>
            {
                cache.reverse().map((obj,index)=>(
                    <div key = {index} className=" mt:20 hover: bg-hoverCardColor rounded-lg p-2  hover:animate-pulse">
                  <Link to={`/details/${obj.name}`}>
                    <img src= {obj.imageUrl} alt={altImageURL} style={{width:imageWidth ,height:imageHeight}}/>
                    <div className='font-bold'>
                    {beutifyName(obj.name)}
                    </div>
                  </Link>
                  </div>
                ))
            }
            </div>
            )
            }

        </>
    );
}
export default History;