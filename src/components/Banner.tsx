import { TextField } from "@mui/material";
import { Button } from "@mui/material";
export function Banner() {
  return (
    <div className="bg-[#173535] text-white flex flex-col justify-center items-center sm:flex-row sm:pl-[15%]">
      <div className="w-[80%] sm:w-1/2 pt-2 flex justify-center items-center flex-col sm:px-10">
        <h1 className="bold text-[2rem] w-full">
          Plan your love journey with us right by your side
        </h1>
        <div className="flex justify-between items-center w-full">
          <TextField
            id="outlined-basic"
            label="Category"
            placeholder={"Vanues"}
            variant="outlined"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
          <TextField
            id="outlined-basic"
            label="City"
            placeholder="Gujarat"
            variant="outlined"
            InputLabelProps={{
              style: { color: "white" },
            }}
            InputProps={{
              style: { color: "white" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "white",
                },
              },
              "& .MuiInputLabel-root": {
                color: "white",
              },
            }}
          />
        </div>
        <div className="w-full flex justify-end items-end m-2">
          <Button
            variant="contained"
            sx={{
              bgcolor: "white",
              textTransform: "capitalize",
              color: "#173535",
            }}
          >
            View results
          </Button>
        </div>
      </div>
      <div className="w-4/5 sm:w-1/2">
        <img src="/img1.png" />
      </div>
    </div>
  );
}
