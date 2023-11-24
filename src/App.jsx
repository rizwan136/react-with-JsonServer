import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideMenu from "./Components/SideMenu";
import Electronics from "./Components/Electronics";
import Navbar from "./Components/Navbar";
import Grocery from "./Components/Grocery";
import AddNewProducts from "./Components/AddNewProducts";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex">
          <div className="w-56">
            <SideMenu />
          </div>
          <div className="flex-1">
            <Routes>
              <Route
                path="/product-form"
                element={
                  <div className="container mx-auto">{<AddNewProducts />}</div>
                }
              ></Route>
              <Route
                path="/electronics"
                element={
                  <div className="container mx-auto">{<Electronics />}</div>
                }
              ></Route>
              <Route
                path="/grocery"
                element={<div className="container mx-auto">{<Grocery />}</div>}
              ></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
