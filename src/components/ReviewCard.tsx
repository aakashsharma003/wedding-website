export function ReviewCard({ heading, desc }: any) {
  return (
    <div className="w-[80dvw]">
      <div className="w-full py-5">
        <div className="w-full text-[#173535] font-bold">{heading}</div>
        <div className="w-full text-black py-5 pr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          necessitatibus iure mollitia inventore! Id molestiae rerum inventore
          illum optio iste?
        </div>
        <div className="w-full my-8 flex justify-start items-center">
          <div className="w-20 h-20 rounded-full">
            <img
              src="/img4.png"
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="mx-5">
            <div className="text-black">Shanti Priya</div>
            <div className="text-black">Client</div>
          </div>
        </div>
      </div>
    </div>
  );
}
