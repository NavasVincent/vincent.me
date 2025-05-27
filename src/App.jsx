import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer"; 
import GenderReveal from "./views/GenderReveal/GenderReveal";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
    <Router>
      
      <div className="font-sans bg-gray-50 font-regular text-[12px] z-30">
       
        <Routes>
          <Route path="/vincent.me/" element={<> <Header /> <Home />         <Footer /></>} />
         <Route path="/vincent.me/gender-reveal" element={<GenderReveal />} />
        </Routes>

      </div>
    </Router>
    </RecoilRoot>
  );
}

export default App;
