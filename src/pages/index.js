import Image from "next/image";
import { Inter } from "next/font/google";
import Transfer_In from "./Components/toptransferin";
import InjuredList from "./Components/InjuredList";
import { useState, useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiurl = fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=LlYvRb_YikgBe6f-3foykAzIkn2mWicVVwcj7-QeFQ_UCVRlyhDGW3BMExKBKn9-kfusHKP8BdXdCv58hrg7InARc_d1mO4rm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEi3qJJG5W8GpZ6hZxzvwT_sCoN2HqwO4K8Ic6Fer0nKtskrYaAFLZgUfBEJtenesaHAHfIkpjMM8emNo9ioDhzXx_QhhIOM7dz9Jw9Md8uu&lib=MS-y7okCAx6lw75sFDttdWD4gJKHnd-OI"
    )
      .then((res) => {
        return res.json();
      })

      .then((apidata) => {
        const filterdata = apidata.data.filter((entry) => {});
        setData(apidata.data);
      });
  }, []);
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
            {data.slice(1, 2).map((user, index) => {
              return (
                <span key={index} className=" mx-4">
                  Gameweek {user.GW}
                </span>
              );
            })}
          </h2>
        </div>

        {data.slice(0, 1).map((user, index) => {
          const apiDate = user.deadline;
          const dateObject = new Date(apiDate);

          const options = {
            month: "short",
            day: "numeric",
            year: "numeric",
          };
          const formattedDate = new Intl.DateTimeFormat(
            "en-US",
            options
          ).format(dateObject);
          return (
            <h3 key={index} className=" text-lg font-bold my-5">
              {formattedDate}
            </h3>
          );
        })}
      </div>

      <div>
        <h3 className=" text-4xl text-center font-semibold">
          Top 5 Transfer In/Out
        </h3>
        <Transfer_In />
      </div>
      <div className=" text-center">
        <InjuredList />
      </div>

      <footer>
        <h2 className=" text-center">
          Developed by{" "}
          <span className=" text-green-500">
            <a href="https://samratneupane.com.np" target="_blank">
              Samrat Neupane
            </a>
          </span>
        </h2>
      </footer>
    </main>
  );
}
