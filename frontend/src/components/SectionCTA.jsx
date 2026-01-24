import React from 'react'
import { Button } from './ui/button'

const SectionCTA = () => {
  return (
    <section className='border-2 border-green-400 py-28 bg-white'>
      <div className="border-2 border-green-600 max-w-4xl mx-auto px-6 text-center">
        <h2 className="border-2 border-yellow-300 text-3xl md:text-4xl font-bold text-slate-900">
            Start planning your move the smart way
        </h2>
        <p className="border-2 border-red-400 mt-4 text-lg text-slate-800">
            Build packages, compare costs, and make confident decisions — all in
          one place.
        </p>
        <div className="border-2 border-blue-500 mt-10">
            <Button className="px-6 py-6">
                Create your free account
            </Button>
        </div>
      </div>
    </section>
  )
}

export default SectionCTA
