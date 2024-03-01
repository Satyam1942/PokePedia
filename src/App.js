import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import HomePage from "./Home.js";
import Details from './Details.js';
import NotFound from './NotFound.js';
import BackgroundSlideshow from './BackgroundSlideshow.js';
import History  from './History.js';



function App() {  
return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path = "/details/:name" element={<Details/>}/>
        <Route path = "/notFound" element={<NotFound/>}/>
        <Route path = "/background" element={<BackgroundSlideshow/>}/>
        <Route path = "/history" element={<History/>}/>
        <Route path = "/*" element={<NotFound/>}/>

      </Routes>
    </Router>
  );
}

export default App;
