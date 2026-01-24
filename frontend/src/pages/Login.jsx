import { useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = CLOUDS({
      el: vantaRef.current, // kis element pe animation lage
      THREE: THREE, // explicitly THREE dena zaroori hai (Vite ke liye)
      skyColor: 0x68b8d7,
      cloudColor: 0xececed,
      cloudShadowColor: 0x183550,
      sunColor: 0xff9919,
      sunGlareColor: 0xff6633,
      sunlightColor: 0xff9933,
      speed: 1.2, // slow = premium feel
    });
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <section
      ref={vantaRef}
      className="min-h-screen flex items-center justify-center"
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 w-full mx-6 max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Welcome back to Roomify
        </h2>

        <p className="mt-2 text-center text-slate-600">
          Login to continue planning smartly
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-medium hover:underline"
            >
              Create a new account
            </button>
          </p>

          <Button className="w-full py-5">Login</Button>
        </form>
      </div>
    </section>
  );
}
