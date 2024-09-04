import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { FaSearch } from "react-icons/fa";
import Data from "./../../Shared/Data";
const Search = () => {
  return (
    <div className="p-2 md:p-5 bg-white rounded-md md:rounded-full fkex-col md:flex md:flex-row gap-10 px-5 items-center w-full md:w-max">
      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Quality" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Old</SelectItem>
          <SelectItem value="dark">New</SelectItem>
          <SelectItem value="system">Preloved</SelectItem>
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Products" />
        </SelectTrigger>
        <SelectContent>
          {Data.Products.map((item,index) => (
            <SelectItem key={index}  value={item.name}>{item.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className="hidden md:block" />

      <Select>
        <SelectTrigger className="w-[180px] outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
        {Data.Pricing.map((item,index) => (
            <SelectItem key={index} value={item.amount}>{item.amount}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div>
        <FaSearch className="text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
