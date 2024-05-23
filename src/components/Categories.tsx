import { Button } from "@mui/material";
import { Card } from "./Card";

export function Categories() {
  return (
    <div className="bg-[#f5f5f5] text-black p-10 min-h-screen ">
      <h1 className="text-2xl text-center font-bold mb-4">
        Wedding Categories
      </h1>
      <p className="text-lg text-center mb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias labore
        maiores et, dolorum debitis ex praesentium obcaecati consequuntur
      </p>
      <div className="flex flex-col">
        <div className="w-full sm:hidden flex justify-center gap-5 items-center flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="hidden sm:flex justify-center items-center gap-6 flex-wrap">
          <div>
            <Card />
          </div>
          <div className="mt-12">
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div className="mt-12">
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div className="mt-12">
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div className="mt-12">
            <Card />
          </div>
        </div>
        <div className="flex justify-center items-center py-10 w-full">
          <Button
            variant="contained"
            sx={{
              color: "black",
              border: "black",
              bgcolor: "#f5f5f5",
              textTransform: "capitalize",
            }}
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
