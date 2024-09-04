import Search from "@/pages/Search";

const Hero = () => {


  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[#eef0fc]">
        <h2 className="text-lg">Find things for sale near you</h2>
        <h2 className="text-[60px] flex-none"> Find your dream things </h2>
     
      <Search/>

      <span className="text-[12rem] mt-20 text-[#cc5500] font-semibold"> BUY NOW</span>
 </div>

    </div>
  );
};

export default Hero;
