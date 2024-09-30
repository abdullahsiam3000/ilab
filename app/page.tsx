import AccessoriesRepair from "@/sections/AccessoriesRepair";
import Banner from "@/sections/Banner";
import FeaturedProducts from "@/sections/FeaturedProducts";
import Hero from "@/sections/Hero";
import NewArrival from "@/sections/NewArrival";
import Subscribe from "@/sections/Subscribe";
import TopSellingProduct from "@/sections/TopSellingProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <NewArrival />
      <TopSellingProduct />
      <Banner />
      <FeaturedProducts />
      <AccessoriesRepair />
      <Subscribe />
    </>
  );
}
