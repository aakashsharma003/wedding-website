import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import CarouselSlider from "@/components/CarouselSlider";
import { Button } from "@mui/material";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Card /> */}
      <Banner />
      <Categories />
      <CarouselSlider />
      {/* <div className="bg-[#f5f5f5] flex justify-center items-center flex-col sm:flex-row relative">
        <div className="text-black w-full sm:w-4/5 sm:h-full bg-[#feeecc] sm:absolute sm:top-0 sm:left-0 flex flex-col justify-center p-8 sm:p-12">
          <h1 className="text-3xl mb-4">Top Wedding Vendor Categories</h1>
          <h1 className="text-2xl mb-4">Mahendi</h1>
          <p className="text-xl mb-4">
            In publishing and graphic design, lorem ipsum is placeholder text
            commonly used to demonstrate the visual of a document or a typeface
            without
          </p>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#feeecc",
              textTransform: "capitalize",
            }}
          >
            Discover More
          </Button>
        </div>
        <div className="w-full sm:w-3/4 sm:h-full sm:z-10 sm:ml-30">
          <img src="/img11.png" alt="Wedding" width={50} height={100} />
        </div>
      </div> */}
      <Footer />
    </>
  );
}
