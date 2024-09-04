import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import shopImg from "@/assets/shopping-bag.png";
const Header = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <img src={shopImg} alt="shop-image"  width={60} height={60} />
      <ul className="hidden md:flex  gap-16 ">
        <li className="font-medium hover:scale-105 transition-all">Home</li>
        <li className="font-medium hover:scale-105 transition-all">Search</li>
        <li className="font-medium hover:scale-105 transition-all">New</li>
        <li className="font-medium hover:scale-105 transition-all">Preowned</li>
      </ul>

      {isSignedIn ? (
        <div>
          <UserButton />
          <Button>Submit Listing</Button>
        </div>
      ) : (
        <div className="bg-black text-white rounded-md w-20 ml-4"> <SignInButton  ></SignInButton>{user}</div>
      )}
    </div>
  );
};

export default Header;
