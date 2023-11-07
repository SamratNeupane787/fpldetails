import Image from "next/image";
import { Inter } from "next/font/google";
import Transfer_In from "./Components/toptransferin";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className=" text-center text-4xl font-bold">
        <p>FPL Tracker</p>
      </div>
      <div className="deadline border-green-500 grid grid-cols-1 place-items-center border-4 mx-7 my-7 rounded-lg">
        <h1 className=" text-3xl text-center font-semibold my-8">
          <span className=" text-[#FA198B]">Deadline</span>
        </h1>
        <div className=" text-center text-xl bg-gradient-to-r from-teal-200 to-teal-500 rounded-3xl w-1/2">
          <h2 className=" font-semibold text-center">
            <span className=" mx-4">Gameweek 12</span>
          </h2>
        </div>
        <h3 className=" text-lg font-bold my-5">Sat 11 Nov 16:45</h3>
      </div>

      <div>
        <h3 className=" text-4xl text-center font-semibold">
          Top 5 Transfer In/Out
        </h3>
        <Transfer_In />
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
