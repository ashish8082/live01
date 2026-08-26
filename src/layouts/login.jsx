import React from "react";

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      
      <div className="relative w-full max-w-md rounded-2xl bg-slate-950 p-6 shadow-2xl">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl text-white hover:text-white rounded-full border border-2 h-30 w-[8%] pb-1 cursor-pointer"
        >
          ×
        </button>

        <h2 className="mb-2 text-center text-2xl text-white font-bold">
          Login
        </h2>

        <p className="mb-6 text-center text-white">
          Please login to continue
        </p>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border px-4 py-3 outline-none  focus:border-slate-500"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded-lg border px-4 py-3  outline-none  focus:border-slate-500"
        />

        <button
          className="w-full rounded-lg bg-slate-700 py-3 font-semibold text-white hover:bg-slate-700"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default LoginModal;