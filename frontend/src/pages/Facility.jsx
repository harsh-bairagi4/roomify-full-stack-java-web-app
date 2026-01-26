import { useParams } from "react-router-dom";
import { allFacilities } from "@/assets/assets";
import FacilityImageCarousel from "@/components/FacilityImageCarousel";
import { IndianRupee, CheckCircle, Building2, Tags ,ShoppingBag  } from "lucide-react";
import { Button } from "@/components/ui/button";

const Facility = () => {
  const { type, id } = useParams();

  const facility = allFacilities.find(
    (f) => f.type === type && f.id === Number(id),
  );

  if (!facility) {
    return <div className="text-center mt-10">Facility not found</div>;
  }
  const handleAddToPackage = () => {
  console.log("Added to package:", facility);
  // later: dispatch / context / API call
};


  return (
    <div className="min-h-screen border-2 border-purple-600 bg-slate-50 px-4 py-8">
      <div className="border-2 border-yellow-500 max-w-6xl mx-auto">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT → IMAGE CAROUSEL */}
          <div className="top-24 self-start">
            <FacilityImageCarousel images={facility.images} />
          </div>

          {/* RIGHT → DETAILS */}
          <div className="space-y-6">
            {/* TITLE */}
            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Building2 size={18} />
                <span className="capitalize">{facility.type}</span>
              </div>

              <h1 className="text-3xl font-bold text-slate-900">
                {facility.name}
              </h1>
            </div>

            {/* PRICE */}
            <div className="flex items-center gap-2 text-blue-600 text-xl font-semibold">
              <IndianRupee size={20} />
              <span>{facility.price} / month</span>
            </div>

            {/* FEATURES */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Tags size={18} className="text-slate-700" />
                <h2 className="text-lg font-semibold text-slate-800">
                  Features
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {facility.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm text-sm"
                  >
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                About
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
            {/* ADD TO PACKAGE */}
            <div className="pt-4">
              <Button  onClick={handleAddToPackage}
                className="w-full sm:w-80
               bg-blue-600 hover:bg-blue-700 text-lg font-semibold 
               transition active:scale-95 shadow-md">Add to Package</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facility;
