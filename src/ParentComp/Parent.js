import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../RouterComponents/Home';
import Student from '../RouterComponents/Student';
import Contact from '../RouterComponents/Contact';
import Layout from '../RouterComponents/Layout';

const ParentComp=()=>{
    return(
       <BrowserRouter>{/*this is wrapper fun which tells the shorter browser router is going to use  */}
            <Routes>{/*(if we have multiple route so we use routes) we can put multiple route bez we are creating multipage application */}
               <Route path='/' element={<Layout />}>
                 <Route path='/home' element={<Home />} />
                  {/* inside route we declares an element that should be rendered at a certain URL path */}
                  <Route path='/student-1' element={<Student />} />
                  <Route path='/contact-us' element={<Contact />} />
               </Route> 
            </Routes>
       </BrowserRouter>
    )
}
 export default ParentComp;



