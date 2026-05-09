import Banner from "@/components/shared/Banner";
import FeaturedTiles from "@/components/shared/FeaturedTiles";
import NewArrivals from "@/components/shared/NewArrivals";
import { TilesData } from "@/lib/dataFetch";
import Image from "next/image";



export default async function Home() {
  const tiles = await TilesData()
  console.log(tiles);
  return (
    <>
      <Banner></Banner>
      <NewArrivals tiles={tiles}></NewArrivals>
      <FeaturedTiles tiles={tiles}></FeaturedTiles>
    </>
  );
}
