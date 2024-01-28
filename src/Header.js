import {useState, useEffect, useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from "./images/logo192.png"
import Sidebar from './Sidebar'

function Header(){
    const navigate = useNavigate();

    const [isVisibleSidebar , setVisibileSidebar] = useState(false);
    const [searchText,setSearchText] = useState('');
    const inputRef = useRef(null);
    const randomNum =  Math.floor((Math.random() * 1000) + 1);

    const handleSearchBarChange = (event)=>{
        setTimeout(() => {
          inputRef.current.focus();
        }, 0);
         setSearchText(event.target.value);
      }
    
const SearchBar = ()=>{return (<input ref = {inputRef} type='text'  value={searchText} onChange={handleSearchBarChange} placeholder='Search By Name/Index ' className='p-2 rounded-lg   bg-mainBackgroundColor mr-2'></input>);}
const SearchButton = ()=>{return (<button onClick={reload} className='p-2 rounded-lg bg-buttonColor  hover:opacity-90  text-buttonFontColor font-bold'>Search</button>); }
const FeelingLucky = ()=>{return (<button onClick={reload} className='ml-2 p-2 rounded-lg bg-buttonColor  hover:opacity-90  text-buttonFontColor font-bold'>FeelingLucky</button>); }
const HomeButton =  ()=>{return(<button className="mb-2 ml-2 text-3xl text-left text-blue-400  text-buttonFontColor">PokéPedia</button>)}

function makeSideBarVisible(){
  setVisibileSidebar(!isVisibleSidebar);
}

function sendSearchString(){
    if(searchText.length==0) 
      return "*" 
    else 
      return searchText.toLowerCase();
   }


function reload (){
    setTimeout(()=>{
    window.location.reload();
    },1);
}
    return(
      <>
        <div className="h-14  bg-headerBgColor rounded-md">
        <div className=' pt-2 grid grid-cols-3  justify-items-start'>
        <Link className='grid grid-cols-9' to ={`/`}>
        <img className="ml-2 rounded-lg" src={logo} style={{width:"40px", height:"40px"}} onClick={makeSideBarVisible}></img>
        <HomeButton/>
        </Link>
        <div>
          <SearchBar/>
          <Link to={`/details/${sendSearchString()}`}>
          <SearchButton/>   
          </Link>
          <Link to={`/details/${randomNum}`}>
          <FeelingLucky/>
          </Link>
        </div>
        </div>
        {/* {isVisibleSidebar && <Sidebar/>} */}
        </div>
      </>
    );

}

export default Header;