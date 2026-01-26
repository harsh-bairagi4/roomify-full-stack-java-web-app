
import React from 'react'

import CardItem from './CardItem';
import Step from './Step';
import { problems, solutions } from '@/assets/assets';

const SectionItem = () => {
  return (
    <>
    <section className='border-2 border-green-600 py-24 bg-gradient-to-b from-sky-50 to-white'>
      <div className='border-2 border-green-600 max-w-6xl mx-auto px-6 text-center'>
        <h2 className='border-2 border-green-600 text-3xl md:text-4xl font-bold text-slate-900'>Moving to a new city is harder than it should be</h2>
        <p className='border-2 border-green-600 mt-4 text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto'>
          Students often struggle to plan everything together — housing,
          food, study spaces, fitness — and still stay within budget.
        </p>   
           <CardItem name={problems}/>
      </div>
    </section>
    
    <section className="py-24 bg-white border-2 border-pink-500">
      <div className="max-w-6xl mx-auto px-6 text-center border-2 border-pink-400">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 border-2 border-yellow-400">
          Roomify makes planning simple
        </h2>

        <p className="mt-4 text-sm  sm:text-lg text-slate-600 max-w-3xl mx-auto border-2 border-amber-200">
          Instead of juggling multiple platforms and guessing costs, Roomify
          lets you plan everything together — clearly and confidently.
        </p>
        <CardItem name={solutions}/>
      </div>
    </section>

    <section className="border-2 border-amber-500 py-24 bg-white">
      <div className="border-2 border-orange-500 max-w-6xl mx-auto px-6 text-center">
        <h2 className="border border-black text-3xl md:text-4xl font-bold text-slate-900">
          How Roomify works
        </h2>

        <p className="mt-4 text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto border-2 border-blue-700">
          Planning your move doesn’t have to be complicated. Just follow these
          three simple steps.
        </p>       
          <Step/>
      </div>
    </section>
    </>
  );
}

export default SectionItem

