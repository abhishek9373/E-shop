import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Login2 from "./components/Admin/Login";
import Middleware from "./components/Middleware";
import { useState } from "react";
import Orders from "./components/Orders";
import Addproducts from "./components/Admin/Addproducts";
import Updateproduct from "./components/Admin/Updateproduct";
import Users from "./components/Admin/Users";
import Cart from "./components/Cart";

function App() {
  const [navbarhideshowcondition, setnavbarhideshowcondition] = useState(true);
  // function for lifting state up
  function liftup(data) {
    console.log(data);
    setnavbarhideshowcondition(data);
  }
  const [num,setnum] = useState();

  // for cart data
  function lftup (data){
    setnum(data)
  }

  return (
    <div className="">
      <BrowserRouter>
        <Navbar cond = {navbarhideshowcondition} carti={num}/>
        <Routes>
          <Route
            path="/"
            element={<Middleware Comp={Products} data={liftup} />}
          ></Route>
          <Route
            path="/addproducts"
            element={<Middleware Comp={Addproducts} data={liftup} />}
          ></Route>
           <Route
            path="/updateproducts"
            element={<Middleware Comp={Updateproduct} data={liftup} />}
          ></Route>
           <Route
            path="/users"
            element={<Middleware Comp={Users} data={liftup} />}
          ></Route>
          <Route
            path="/products"
            element={<Middleware Comp={Products} data={liftup} lftu={lftup}/>}
          ></Route>
          <Route
            path="/orders"
            element={<Middleware Comp={Orders} data={liftup} />}
          ></Route>
          <Route
            path="/cart"
            element={<Middleware Comp={Cart} data={liftup} lftu={lftup}/>}
          ></Route>
          <Route path="/login" element={<Login data={liftup}/>}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/adminlogin" element={<Login2 data={liftup} />}></Route>
        </Routes>
        {/* admin routes */}
        
      </BrowserRouter>
    </div>
  );
}

export default App;
