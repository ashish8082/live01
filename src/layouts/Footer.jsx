import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">

        {/* Copyright */}
        <div className="text-center text-sm text-slate-400 md:text-left">
          © {new Date().getFullYear()}{" "}
          <Link
            to="/"
            className="font-semibold text-white transition hover:text-red-500"
          >
            LiveTV
          </Link>
          <span className="ml-1">
            . All Rights Reserved.
          </span>
        </div>

        {/* Footer Links */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">

          <li>
            <Link
              to="/about"
              className="text-slate-400 transition hover:text-red-500"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/privacy-policy"
              className="text-slate-400 transition hover:text-red-500"
            >
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="text-slate-400 transition hover:text-red-500"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/terms"
              className="text-slate-400 transition hover:text-red-500"
            >
              Terms
            </Link>
          </li>

        </ul>

      </div>
    </footer>
  );
};

export default Footer;