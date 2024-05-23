export function Card() {
  return (
    <div className="bg-white w-[80%] sm:w-[20dvw] p-5 shadow-md rounded-md ">
      <div>
        <h1 className="text-center text-black text-2xl ">MOROSO</h1>
      </div>

      <div className="w-full">
        <img src="/img1.png" className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-center text-xl">Lorem ipsum</h1>
        <p className="text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
      </div>
    </div>
  );
}
