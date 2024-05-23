import { Button } from "@mui/material";
import { Searchbar } from "./Searchbar";
import MenuIcon from "@mui/icons-material/Menu";
import Hamburger from "./Hamburger";

export function Navbar() {
  return (
    <div className="h-[10dvh] sm:h-1/3 md:h-1/6 flex justify-between bg-[#ffffff] px-[2%] py-[2%] sm:px-[5%] sm:py-[1%] md:py-[0.5%] items-center">
      <div>
        <Hamburger />
      </div>
      <div className="hidden sm:flex sm:w-1/6 justify-center items-center">
        <img
          src="/logo.png
    "
          className="w-full h-full"
        />
      </div>

      <div className="w-1/3 hidden sm:flex text-black justify-between items-center sm:px-5 md:px-10">
        <div>Vanues</div>
        <div>Vendors</div>
        <div>Blog</div>
      </div>
      <div className="w-3/4 h-4/5 sm:w-1/4 sm:h-[100%] flex justify-center items-center">
        <Searchbar />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#faaa00",
            textTransform: "capitalize",
            height: "70%",
            margin: "5%",
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
