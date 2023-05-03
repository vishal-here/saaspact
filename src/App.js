import Home from './Home/Home'
import Error from './Error/Error'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
   <>
   <Routes>
    <Route exact path='saaspact/' element={<Home />} />
    <Route  path='saaspact/*' element={<Error />} />
   </Routes>
   </>
  );
}

export default App;
