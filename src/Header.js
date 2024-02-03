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
    
const SearchBar = ()=>{return (<input ref = {inputRef} type='text'  value={searchText} onChange={handleSearchBarChange} placeholder='Search By Name/Index ' className='ml-2 md:ml-0 w-40 p-1 md:p-2 rounded-lg md:mr-2  bg-mainBackgroundColor '></input>);}
const SearchButton = ()=>{return (<button onClick={reload} className=' ml-2 p-1 md:p-2 rounded-lg bg-buttonColor  hover:opacity-90  text-buttonFontColor font-bold'>Search</button>); }
const FeelingLucky = ()=>{return (<button onClick={reload} className='ml-2 p-1 md:p-2 rounded-lg bg-buttonColor  hover:opacity-90  text-buttonFontColor font-bold  flex-auto'>FeelingLucky</button>); }
const HomeButton =  ()=>{return(<button className=" md:mb-2  md:ml-4  text-3xl    text-buttonFontColor">PokéPedia</button>)}

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
        <div className=" h-32 sm:h-28 md:h-14  bg-headerBgColor rounded-md ">
        <div className=' pt-2 grid grid-cols-1 md:grid-cols-3   '>

        <button className='grid lg:grid-cols-9  grid-cols-3 ' onClick={makeSideBarVisible}>
        <img className="ml-2 rounded-lg" src={logo} style={{width:"40px", height:"40px"}} onClick={makeSideBarVisible}></img>
        <HomeButton/>
        </button>

        <div className='mt-3 md:mt-0 w-96  ml-20 sm:ml-40 md:ml-0'>
          <SearchBar/>
          <Link to={`/details/${sendSearchString()}`}>
          <SearchButton/>   
          </Link>
          <Link to={`/details/${randomNum}`}>
          <FeelingLucky/>
          </Link>
        </div>

        </div>
        {isVisibleSidebar && <Sidebar/>}
        </div>
      </>
    );

}

export default Header;