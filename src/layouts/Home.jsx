import { useState,useEffect } from "react";
import { Route, Routes,useLocation} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Movies from "../pages/Movies";
import Movies1 from "../pages/Movies1";
import Movies2 from "../pages/Movies2";
import Movies3 from "../pages/Movies3";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/Policy";
import NotFound from "./NotFound";
import LoginModal from "./login";
const Home =()=>{
    const [showLogin, setShowLogin] = useState(false);
     const location = useLocation();

      useEffect(() => {
                        if (location.pathname === "/") {
                        const token = localStorage.getItem("token");

                        if (!token) {
                            setShowLogin(true);
                        }
                        } else {
                        setShowLogin(false);
                        }
                    },
                     [location.pathname]);


    return(
            <div className="min-h-screen bg-slate-950 pt-20">
                <Header/>
                 {
                    showLogin && (
                        <LoginModal onClose={() => setShowLogin(false)} />
                    )}

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/movies" element={<Movies/>}/>
                    <Route path="/movies-1" element={<Movies1/>}/>
                    <Route path="/movies-2" element={<Movies2/>}/>
                    <Route path="/movies-3" element={<Movies3/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/terms" element={<Terms/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="*"  element={<NotFound />} />
                    


                </Routes>
                <Footer/>
            </div>)
}
export default Home;