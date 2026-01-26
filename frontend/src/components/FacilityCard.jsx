import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function FacilityCard({
  id,
  type,
  name,
  price,
  images,
}) 
{
  const navigate = useNavigate();
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 hover:shadow-md transition">
      <h3 className="font-semibold text-slate-900">{name}</h3>

      <p className="mt-3 font-medium text-slate-900">₹{price} / month</p>
      <img
        src={images[0]}
        alt=" "
        className="border-2 border-blue-500 mt-4 w-full h-80 object-cover rounded-md"
        onError={(e) => console.log("Image failed:", images[0])}
      />
      <div className=" mt-2 text-center">
        <Button
          type="button"
          className="my-2 w-full bg-blue-600 hover:bg-blue-700"
          onClick={() => navigate(`/facility/${type}/${id}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
