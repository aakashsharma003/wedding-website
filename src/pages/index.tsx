import Image from "next/image";
import { Inter } from "next/font/google";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import CarouselSlider from "@/components/CarouselSlider";
import { Button } from "@mui/material";
import { Footer } from "@/components/Footer";
import { Review } from "@/components/Reveiw";
import { Poster } from "@/components/Poster";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Card /> */}
      <Banner />
      <Categories />
      <div className="bg-[#f5f5f5] text-black">
        <div className="w-full p-10">
          <h1 className="font-bold text-3xl text-center">Gallary</h1>
          <p className="bold text-xl text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            similique autem obcaecati, voluptatum ipsa velit.
          </p>
        </div>

        <CarouselSlider />
      </div>
      <Poster />
      <div className="bg-[#f5f5f5] flex justify-center items-center flex-col sm:flex-row relative">
        <div className="text-black w-full sm:w-4/5 sm:h-full bg-[#feeecc] sm:absolute sm:top-0 sm:left-0 flex flex-col justify-center">
          <div className="w-full sm:w-[35%] sm:h-[60%] p-5 md:h-[95%] lg:py-[10%]">
            <h1 className="text-[1rem] font-bold lg:text-[2dvh]">
              Top Wedding Vendor Categories
            </h1>
            <h1 className="text-[2dvh] py-2">Mahendi</h1>
            <p className="text-[1dvh] py-2">
              In publishing and graphic design, lorem ipsum is placeholder text
              commonly used to demonstrate the visual of a document or a
              typeface without
            </p>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#feeecc",
                textTransform: "capitalize",
                color: "black",
              }}
            >
              Discover More
            </Button>
          </div>
        </div>
        <div className="w-full sm:w-3/4 sm:h-full sm:z-10 sm:ml-45 sm:p-[7%] sm:ml-[25%]">
          <img src="/img11.png" alt="Wedding" className="w-full h-full" />
        </div>
      </div>
      <Review />
      <Footer />
    </>
  );
}
