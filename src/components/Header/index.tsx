import { UserButton, useUser } from "@clerk/clerk-react"
import { Button } from "../ui/button"

const Header = () => {
    const {user, isSignedIn} = useUser();
  return (
    <div>   <span>Home page</span>
    <ul className="flex gap=1">
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