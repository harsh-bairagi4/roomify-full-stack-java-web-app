import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'
import * as Icons from "lucide-react";

const CardItem = ({name}) => {
  return (
    <div className='border-2 border-purple-600 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {name.map((part, index) => {
        const Icon = Icons[part.icon];
        return (
          <Card key={index} className="border-2 border-green-600">
            <CardHeader>
                {Icon && (
                    <Icon className="icon-pop h-8 mx-auto w-7 text-blue-600 mb-3" />
                )}
              <CardTitle>{part.title}</CardTitle>
              <CardDescription>
               {part.description}
              </CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};

export default CardItem;
