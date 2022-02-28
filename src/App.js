import Home from "./components/Home/Home";
import Sell from "./components/pages/Sell";
import {
  Routes,
  Route
} from "react-router-dom";
import DetailPage from "./components/pages/Sell/DetailPage"
import CartFeature from "./components/pages/Cart"

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sell" element={<Sell></Sell>}></Route>
        <Route path="/sell/cart" element={<CartFeature></CartFeature>}></Route>
        <Route path="/sell/details" element={<DetailPage></DetailPage>}>
          <Route path="/sell/details/:id" element={<DetailPage></DetailPage>}>
            <Route path="/sell/details/:id/additional" element={<DetailPage></DetailPage>}>
            </Route>
              <Route path="/sell/details/:id/reviews" element={<DetailPage></DetailPage>}>
              </Route>
              <Route path="/sell/details/:id/description" element={<DetailPage></DetailPage>}>
              </Route>
          </Route>
        </Route>
    </Routes>
      {/* <Route path="/sell" element={<Header></Header>}>
        <Route path="/sell/details" element={<DetailPage></DetailPage>}>
          <Route path="/sell/details/:id" element={<DetailPage></DetailPage>}>
          </Route>
        </Route>
      </Route> */}
      {/* <Route path="/sell/productID" element={<DetailPage></DetailPage>}></Route> */}
      
    
    
    </div>
  );
}

export default App;
