// import { Button } from "@/components/ui/button";
// import { SignInButton } from "@clerk/clerk-react";

import Category from "@/components/Category";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hot from "@/components/HotCards";

export default function Home() {
  return (
    <>
    {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Category */}
      <Category />
      {/* Hot */}
      <Hot/>
    </>
  );
}
