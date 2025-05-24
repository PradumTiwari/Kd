import CustomerReview from "@/components/CustomerReview";
import Hero from "@/components/Hero";
import HeroParallax from "@/components/HeroParallax";
import Owner from "@/components/Owner";

export default function Home() {
  return (
    <div >
      <div className="text-center">
       
      <Hero/>
      <HeroParallax/>
      <CustomerReview/>
      <Owner/>
      </div>
    </div>
  );
}