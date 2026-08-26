import { useState,useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import LiveTv from "../assets/logo_tv.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [movieDropdown, setMovieDropdown] = useState(false);
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
                    }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <img
            src={LiveTv}
            className="h-11 w-11 object-contain"
            alt="Live TV"
          />

          <div className="hidden sm:block">
            <span className="block text-xl font-bold leading-none text-white">
              Live<span className="text-red-500">TV</span>
            </span>

            <span className="text-[10px] tracking-wider text-slate-400">
              WATCH LIVE TELEVISION
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">

            <li>
              <Link
                to="/"
                className="text-sm font-medium text-white transition hover:text-red-500"
              >
                Home
              </Link>
            </li>

            <li>
              
              <div className="relative"  onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}>
                
              <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="inline-flex items-center justify-center text-white bg-brand  transition hover:text-red-500 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
               type="button">
                Movies
                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
              </button>

              <div id="dropdownHover" className={`z-10 ${menuOpen ? 'block' : 'hidden'} absolute  rounded-base shadow-lg w-44`}>
                  <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">
                    <li>
                       <Link  to="/movies" className="inline-flex items-center w-full p-2  text-slate-300 transition hover:text-red-500 "> Movies</Link>
                                </li>
                        <li>
                           <Link to="/movies-1" className="inline-flex items-center w-full p-2  text-slate-300 transition hover:text-red-500 ">Movies 1</Link>
                        </li>
                        <li>
                          <Link to="/movies-2" className="inline-flex items-center w-full p-2  text-slate-300 transition hover:text-red-500">Movies 2</Link>
                        </li>
                        <li>
                            <Link  to="/movies-3" className="inline-flex items-center w-full p-2  text-slate-300 transition hover:text-red-500 ">Movies 3</Link>
                        </li>
                        
                  </ul>
              </div>
             </div>
            </li>

            <li>
              <Link
                to="/favorites"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-red-500"
              >
                <span>♡</span>
                Favorites
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-sm font-medium text-slate-300 transition hover:text-red-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-sm font-medium text-slate-300 transition hover:text-red-500"
              >
                Contact
              </Link>
            </li>

          </ul>
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Search */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg
                       bg-slate-800 text-slate-300 transition
                       hover:bg-slate-700 hover:text-white"
            title="Search"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
          </button>

          {/* Login */}
          <button
              onClick={()=>setShowLogin(true)}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm
                       font-semibold text-white transition
                       hover:bg-red-700"
          >
            Login
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center
                     rounded-lg bg-slate-800 text-slate-300
                     hover:bg-slate-700 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-4 md:hidden">

          <nav>
            <ul className="space-y-2">

              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-white hover:bg-slate-800 hover:text-red-500"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/channels"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-red-500"
                >
                  Channels
                </Link>
              </li>

              <li>
                <Link
                  to="/favorites"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-red-500"
                >
                  ♡ Favorites
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-red-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-red-500"
                >
                  Contact
                </Link>
              </li>

              <li className="pt-2">
                <button
                   onClick={()=>setShowLogin(true)}
                  className="block rounded-lg bg-red-600 px-4 py-3 text-center
                             font-semibold text-white hover:bg-red-700"
                >
                  Login
                </button>
              </li>

            </ul>
          </nav>

        </div>
      )}
    </header>
  );
};

export default Header;