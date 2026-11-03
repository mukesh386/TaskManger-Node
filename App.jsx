import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Input from "./Component/ui/input";

const App =() => {
  return (
  <>

    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path ='/login' element ={<Login/>}/>
      <Route path ='/in' element ={<Input/>}/>
    </Routes>
  </>
  )
}
export default App;