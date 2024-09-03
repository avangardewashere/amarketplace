import { UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import shopImg from "@/assets/shopping-bag.png"
const Header = () => {
    const {user, isSignedIn} = useUser();
  return (
    <div>   <span>Home page</span>
    <ul className="flex  flex gap-1">
        <li><img src={shopImg} alt="shop-image" className="w-12 h-12 " /></li>
       <li>Home</li>
       <li>Search</li>
       <li>New</li>
       <li>Preowned</li>
    </ul>

{isSignedIn ? 
<div>
<UserButton />
<Button>Submit Listing</Button>
</div>
:
<div>{user}</div>}
</div>
  )
}

export default Header