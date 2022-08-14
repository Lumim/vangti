import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WebIndex from './web/WebIndex';
import AdminIndex from './admin/AdminIndex';
import Loan from './web/modules/Loan';
import WebLayout from './layout/WebLayout';
import AdminLayout from './layout/AdminLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<WebLayout/>}>
            <Route  path='/' element={<WebIndex />}>
              <Route path="/loan" element={<Loan/>}/>
            </Route>
          </Route>
          
          
          <Route path="admin"element={<AdminLayout />}>
              <Route path='admin' element={<AdminIndex/>} >

              </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
  );
}

 export function NotFound(){
  return(
      <>  
        <div>
         <h1> 404 not found</h1>
        </div>
      </>

  )
}

export default App;
