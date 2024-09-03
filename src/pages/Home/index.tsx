// import { Button } from "@/components/ui/button";
// import { SignInButton } from "@clerk/clerk-react";

import Header from "@/components/Header";
 
export default function Home () {
    
    return(
        <div className="flex justify-between items-center shado-sm p-5">
               {/* Header */}
           <Header />
         
 
            {/* <SignInButton mode="modal" forceRedirectUrl={'/'}>
              <Button>Sign In</Button>
            </SignInButton> */}

         
        

        </div>
    )
}