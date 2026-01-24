import { Search, Layers, BarChart3 } from "lucide-react";
import Step from "./Step";

export default function SectionSteps() {
  return (
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
  );
}
