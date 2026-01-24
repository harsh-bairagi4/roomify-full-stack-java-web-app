
import React from 'react'
import Solution from "./Solution";

const SectionSolution = () => {
  return (
    <section className="py-24 bg-white border-2 border-pink-500">
      <div className="max-w-6xl mx-auto px-6 text-center border-2 border-pink-400">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-2 border-yellow-400">
          Roomify makes planning simple
        </h2>

        <p className="mt-4 text-sm  sm:text-lg text-slate-600 max-w-3xl mx-auto border-2 border-amber-200">
          Instead of juggling multiple platforms and guessing costs, Roomify
          lets you plan everything together — clearly and confidently.
        </p>

        <Solution/>
      </div>
    </section>
  );
}

export default SectionSolution

