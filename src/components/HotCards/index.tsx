import FakeData from "@/Shared/FData";
import HotItem from "./HotItem";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
const Hot = () => {
  console.log(FakeData.prodList);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center my-16">Hot Items</h2>
      <Carousel className="   mx-24">
        <CarouselContent className="basis-1/4 " >
          {FakeData.prodList.map((hot) => (
            <HotItem hot={hot} key={hot.name} />
          ))}
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>
    </div>
  );
};

export default Hot;
