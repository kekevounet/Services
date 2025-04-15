import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Accueil from './Pages/Pages/Accueil';
import Services from './Pages/Pages/Services';
import About from './Pages/Pages/About';

function App()
{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Accueil />}></Route>
                <Route path='/Services' element={<Services />}></Route>
                <Route path='/About' element={<About/>}></Route>
            </Routes>
        </Router>
    )
}
export default App;