import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import HomePage from "./Home.js";
import Details from './Details.js';
import NotFound from './NotFound.js';
import BackgroundSlideshow from './BackgroundSlideshow.js';

function App() {  
return (
    <Router>
      <Routes>
        <Route path="/Pokepedia" element={<HomePage />} />
        <Route path = "/PokePedia/details/:name" element={<Details/>}/>
        <Route path = "/PokePedia/notFound" element={<NotFound/>}/>
        <Route path = "/PokePedia/background" element={<BackgroundSlideshow/>}/>
        <Route path = "/PokePedia/*" element={<NotFound/>}/>

      </Routes>
    </Router>
  );
}

export default App;
