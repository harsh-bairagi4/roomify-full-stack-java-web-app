import { steps } from "@/assets/assets";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import * as Icons from "lucide-react";

const Step = () => {
  return (
    <div className='border-2 border-purple-600 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {steps.map((step, index) => {
        const Icon = Icons[step.icon];
        return (
          <Card key={index} className="border-2 border-green-600">
            <CardHeader>
                <div className="icon-pop h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-blue-600 text-white flex justify-center items-center text-xs sm:text-lg font-bold mb-4 mx-auto"><p>{step.value}</p></div>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>
               {step.description}
              </CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default Step;
