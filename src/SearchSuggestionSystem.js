import React from 'react'
import { Link } from 'react-router-dom';

import list from './PokemonNameList';
function SearchSuggestion(prop){
    
const pokemonNameList =  list;

const beutifyName = (name)=>{return (name.charAt(0).toUpperCase()+ name.slice(1));} 

function reload (){
    setTimeout(()=>{
    window.location.reload();
    },1);
}

return (
    <>
        <ul className="  rounded-md  w-40  bg-buttonFontColor   relative z-50 ">
           {
            pokemonNameList.filter(item=>{
                const searchTerm = prop.token.toLowerCase();
                const itemList = item.toLowerCase();
                return searchTerm && itemList.startsWith(searchTerm);
            }).slice(0,10).map((name,index)=>(
                <Link to={`/details/${name}`} onClick={()=>reload()}>
                <li className=' text-center hover:bg-buttonColorSelected hover:rounded-md'>{beutifyName(name)}</li>
                </Link>
            ))
           }
        </ul>
    </>
);
}

export default SearchSuggestion;


