import React from 'react'
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
    const words = ["smartly", "within budget", "with clarity", "stress-free"];
  const fullText =
    "D-iscover rooms, mess, libraries, tiffins and more. Build packages and compare costs before you move.";

  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // DOM element ka reference
  const vantaRef = useRef(null);

  // 2️⃣ Vanta animation lifecycle
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;

      if (index === fullText.length) {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 20); // speed control

    return () => clearInterval(interval);
  }, []);
  return (
     <section
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="border-2 border-blue-800 absolute inset-0 bg-white/60"></div>
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-4xl border-2 border-green-600 md:text-6xl sm:text-5xl font-bold text-slate-900">
          Plan your student life in a new city --{" "}
          <span
            key={words[index]}
            className="text-blue-600 inline-block animate-fade"
          >
            {words[index]}
          </span>
        </h1>
      
        <p className="mt-6 sm:text-lg border-2 border-amber-500 text-sm min-h-16  text-slate-700 ">
          {typedText}{isTyping &&  <span className="animate-pulse">|</span>}
        </p>

        <div className="mt-5 border-2 border-pink-600 flex justify-center gap-4">
          <Button type="button" onClick={()=> navigate("/signup")}>Get Started</Button>
          <Button type="button" onClick={()=> navigate("/login")}>Login</Button>
        </div>
      </div>
    </section>
  )
}

export default Header
