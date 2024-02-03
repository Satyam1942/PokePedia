import {useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import BackgroundSlideshow from './BackgroundSlideshow.js';
import Header  from './Header.js';
import loadingImage from "./images/loading.png"


function Home() {  

  const [isLoading,setLoading] = useState(true);
  const [about,setAbout] = useState(null);
  const [names,setNames] = useState([]);
  const [nextUrl,setNextUrl] = useState(null);
  const baseURL = "https://pokeapi.co/api/v2/pokemon";
  const imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"
  const altImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFJoiQl5YPHK2xiOHeyplhJWUpFZT4m0vw&usqp=CAU";

  const imageHeight = "200px" 
  const imageWidth = "200px"


  const GetHTTPRequest = (url)=>{
      fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
           console.log(data);
           setAbout(data);
           setLoading(false);
           const extractedNames = data.results.map(item => item.name);
           const resultArray = [...names,...extractedNames];
           setNames(resultArray)
           setNextUrl(data.next);
   
        })
        .catch((err)=>{
          console.log(err);
        })
  }
  
  useEffect(()=>{
      if(isLoading)
        GetHTTPRequest(baseURL)
  },[]);


  const loadNextPage = ()=>{
        if(nextUrl){
        GetHTTPRequest(nextUrl)
        }
  }
 


const NextButton =  ()=>{return ( <button onClick= {loadNextPage} className='p-2 rounded-lg bg-buttonColor  hover:opacity-90  text-buttonFontColor font-bold'>Load More Pokémon</button>); }
const beutifyName = (name)=>{return (name.charAt(0).toUpperCase()+ name.slice(1));} 
const getImageURL = (index)=>{return (imageURL+(index+1).toString()+".png");}

  return (
    <>
    <Header/>
    <BackgroundSlideshow/>
    <div className="Home"   >
        { 
        isLoading?(
          <div className=' mt-10 flex  justify-center '>
           <img src={loadingImage} style={{height: "100px" ,width: "100px" }}className=' animate-bounce '></img>
           </div>
        ):
          names.length>0 && (
            <div>
          
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center'>
            {   
                names.map((name,index)=>(
                  <div key = {index} className=" mt:20 hover: bg-hoverCardColor rounded-lg p-2  hover:animate-pulse">
                  <Link to={`/details/${name}`}>
                    <img src= {getImageURL(index)} alt={altImageURL} style={{width:imageWidth ,height:imageHeight}}/>
                    <div className='font-bold'>
                    {beutifyName(name)}
                    </div>
                  </Link>
                  </div>
                ))
              }
          </div>

           <div className='flex justify-center m-10'>
          <NextButton/>
              </div>
        </div>          
        )
        
      }
    </div>
    {/* <Footer/> */}
      </>
  
  );
}

export default Home;
