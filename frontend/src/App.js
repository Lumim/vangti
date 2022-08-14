import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom'
import WebIndex from './web/WebIndex';
import AdminIndex from './admin/AdminIndex';
import Loan from './web/modules/Loan';
import WebLayout from './layout/WebLayout';
import AdminLayout from './layout/AdminLayout';
import Users from './admin/modules/Users';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route  index element={<WebIndex />}/>
          <Route path="/loan" element={<Loan/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
       
          
        <Route path="admin"element={<AdminLayout />}>
            <Route index element={<AdminIndex/>} />
            <Route path='/admin/users' element={<Users/>}/>
        </Route>
        
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
