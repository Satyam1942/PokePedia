import {useEffect, useState} from 'react';
import {Link, useNavigate, useMatch,useParams} from 'react-router-dom';
import loadingImage from "./images/loading.png"
import BackgroundSlideshow from './BackgroundSlideshow.js';
import Header from './Header.js';
import Footer from './Footer.js';

function Details() {  

  const [pageNotFound , setPageNotFound] = useState(false);
  const [isLoading ,setLoading] = useState(true);
  const [about,setAbout] = useState(null);
  const match = useMatch('/PokePedia/details/:name');
  const pokemonName = match.params.name;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const altImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFJoiQl5YPHK2xiOHeyplhJWUpFZT4m0vw&usqp=CAU";

  const imageHeight = "350px" 
  const imageWidth = "350px"
  const navigate = useNavigate();
  console.log(url)


  const GetHTTPRequest=()=>{
    fetch(url)
    .then((res)=>{
      if(res.status == 404)
        setPageNotFound(true);
      else 
        return res.json();
    })
    .then((data)=>{
        console.log(data);
         setAbout(data);
         setLoading(false);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  useEffect(()=>{
     if(isLoading)
       GetHTTPRequest();
    },[]);
    console.log(isLoading);
  const beutifyName = (name)=>{return (name.charAt(0).toUpperCase()+ name.slice(1));} 
  const getImageURL = (about)=>{return (about.sprites.other['official-artwork'].front_default);}
  const getWeight = (weight)=>{return ((weight/10.0)+" Kg");}

  if(pageNotFound){
    console.log("NOT FOUND");
    return  navigate ("/PokePedia/notFound") ;
  }

  return (
    <>
      <Header/>
      <BackgroundSlideshow/>
    <div className="Details">
        {
        isLoading?(
          <div className=' mt-10 flex  justify-center '>
           <img src={loadingImage} style={{height: "100px" ,width: "100px" }}className=' animate-bounce   '></img>
           </div>
        ):
        about && (
          <div>

           {/* name  */}
          <h2 className=' font-bold  text-2xl flex justify-center mt-2 mb-5'>{beutifyName(about.name)}</h2>


          <div className='grid grid-cols-2 gap--1'>

            <img className=' bg-hoverCardColor hover:animate-ping hover:bg-buttonColor  rounded-lg ml-40' src= {getImageURL(about)} alt={altImageURL} style={{width:imageWidth ,height:imageHeight}}/>
            <div className='grid grid-cols-3'>

            {/* Types */}
            <div  className='   bg-detailsCard hover:bg-buttonColorSelected  rounded-lg border-borderColor ml-10 mr-10 mb-10  hover:text-buttonFontColor '>
            <h4 className='font-bold text-lg flex justify-center mt-2'>Types :</h4>
            <div className='flex justify-center'>
            {
              about.types.map((type,index)=>(
                <div key = {index} className='m-2'>{beutifyName(type.type.name)}</div>
                ))
              }
            </div>
            </div>

                {/* All Single Characteristics */}
              <div className=' bg-detailsCard hover:bg-buttonColorSelected  rounded-lg border-borderColor ml-10 mr-10 mb-10 hover:text-buttonFontColor  p-2'>
            <h4>Base Experience : {about.base_experience}</h4>
            <h4>Height : {about.height}</h4>
            <h4>Weight : {getWeight(about.weight)}</h4>
            <h4>Species : {beutifyName(about.species.name)}</h4>
            </div>

          {/* Abilities */}
          <div className=' bg-detailsCard hover:bg-buttonColorSelected  rounded-lg border-borderColor ml-10 mr-10 mb-10  hover:text-buttonFontColor p-1'>
          <h3 className='font-bold  flex justify-center mt-2'>Abilities:</h3>
          <ul>
          {
            about.abilities.map((ability,index)=>(
              <li key = {index} className='flex justify-center'>{beutifyName(ability.ability.name)}</li>
              ))
            }
          </ul>
          </div>

            {/* Moves */}
            <div className='  bg-detailsCard hover:bg-buttonColorSelected  rounded-lg border-borderColor ml-10 mr-10 mb-10  hover:text-buttonFontColor  p-1'>
            <h3 className='font-bold  flex justify-center mt-2'>Moves:</h3>
            <ul>
            {
              about.moves.slice(0,10).map((move,index)=>(
              <li key = {index} className='flex justify-center'>{beutifyName(move.move.name)}</li>
              ))
            }
            </ul>
            </div>

            {/* Forms */}
            <div className='  bg-detailsCard hover:bg-buttonColorSelected  rounded-lg border-borderColor ml-10 mr-10 mb-10 hover:text-buttonFontColor  p-1'>
           <h3 className='mt-2 font-bold  flex justify-center '>Forms:</h3>
           <ul>
           {
            about.forms.map((form,index)=>(
              <li key = {index} className='flex justify-center'>{beutifyName(form.name)}</li>
              ))
            }
            </ul>
            </div>

          {/* BaseStats */}
          <div className=' bg-detailsCard hover:bg-buttonColorSelected  rounded-lg border-borderColor ml-10 mr-10 mb-10 hover:text-buttonFontColor  p-1'>  
          <h3 className='font-bold flex justify-center mt-2'>Base Stats:</h3>
          <ul>
          {
            about.stats.map((stat,index)=>(
              <li key = {index} className='flex justify-center'>{beutifyName(stat.stat.name)}: {stat.base_stat}</li>
              ))
            }
          </ul>
          </div>

         </div> 
        </div>
        </div>
        )
        }
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Details;
