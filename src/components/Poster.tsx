import { Button } from "@mui/material";

export function Poster() {
  return (
    <div
      className="w-full bg-[white] flex justify-center items-center flex-col
    p-10"
    >
      <h1 className="text-black font-bold text-center md:text-3xl">
        Top Wedding Venues
      </h1>
      <img src="/pic2.png" alt="picture" />
      <Button
        variant="contained"
        sx={{
          bgcolor: "#faaa00",
          textTransform: "capitalize",
        }}
      >
        View All
      </Button>
    </div>
  );
}
