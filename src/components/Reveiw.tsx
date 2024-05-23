import { ReviewCard } from "./ReviewCard";

export function Review() {
  return (
    <div className="bg-[#f5f5f5] p-10">
      <h1 className="text-black font-bold text-3xl">
        <span className="text-gray-400">" </span>What Our Customer are Saying
      </h1>
      <div className="sm:flex">
        <ReviewCard
          heading={"Great Services with Good Quality Photo graphers"}
        />
        <ReviewCard
          heading={"Great Services with Good Quality Photo graphers"}
        />
      </div>
    </div>
  );
}
