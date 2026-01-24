import React from 'react'

import Problem from './Problem';


const SectionProblem = () => {
  return (
    <section className='border-2 border-green-600 py-24 bg-gradient-to-b from-sky-50 to-white'>
      <div className='border-2 border-green-600 max-w-6xl mx-auto px-6 text-center'>
        <h2 className='border-2 border-green-600 text-3xl md:text-4xl font-bold text-slate-900'>Moving to a new city is harder than it should be</h2>
        <p className='border-2 border-green-600 mt-4 text-sm sm:text-lg text-slate-600 max-w-3xl mx-auto'>
          Students often struggle to plan everything together — housing,
          food, study spaces, fitness — and still stay within budget.
        </p>   
           <Problem/>
      </div>
    </section>
  )
}

export default SectionProblem
