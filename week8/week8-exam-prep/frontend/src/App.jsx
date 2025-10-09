import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages & components
import Home from "./pages/HomePage";
import AddPropertyPage from "./pages/AddPropertyPage";
import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage"
import PropertyPage from "./pages/PropertyPage";
import EditPropertyPage from "./pages/EditPropertyPage";
import SignupPage from "./pages/SignupPage";
const App = () => {

    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-property" element={<AddPropertyPage />} />
              <Route path="/edit-property/:propertyId" element={<EditPropertyPage/>}/>
              <Route path="/property/:propertyId" element={<PropertyPage/>}/>
              <Route path='*' element={<NotFoundPage />} />
              <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
