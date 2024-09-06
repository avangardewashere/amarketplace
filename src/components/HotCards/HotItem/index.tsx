import { Separator } from "@radix-ui/react-select";
import { LuFuel } from "react-icons/lu";
import { MdOpenInNew } from "react-icons/md";

interface HotItemProps {
  hot: {
    name: string;
    material: string;
    adj: string;
    description: string;
    price: string;
    image: string;
  };
}

const HotItem = ({ hot }: HotItemProps) => {
  return (
    <div className="rounded-xl bg-purple-50 mx-2 border hover:shadow-md cursor-pointer flex-wrap  flex text-wrap overflow-hidden">
      <h2 className="absolute m-2 bg-blue-500 text-white ">New</h2>
      <img
        className="rounded-t-xl w-full"
        width={100}
        height={100}
        src={hot.image}
        alt="image-hot"
      />
      <div className="p-4">
 
        <h2 className="font-bold text-black text-lg mb-2">{hot.name}</h2>
        <Separator />

        <div className="grid grid-cols-3 mt-5 ">
          <div className="flex flex-col items-center">
            <LuFuel />
            <h2 className="text-sm">{hot.price}</h2>
          </div>

          <div className="flex flex-col items-center">
            <LuFuel />
            <h2 className="text-sm">{hot.price}</h2>
          </div>

          <div className="flex flex-col items-center">
            <LuFuel />
            <h2 className="text-sm">{hot.price}</h2>
          </div>
        </div>

        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">${hot.price}</h2>

          <h2 className="text-primary text-sm flex items-center">
            <MdOpenInNew width={20} height={20} />
            View Details
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HotItem;
