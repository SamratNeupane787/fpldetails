import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function Transfer_In() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiurl = fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=xxnOjtgtU4YMNrYgiz1CzWoLlI9NuZGs1154Qx9cIDjnzCLNQc4MWyhDl3ivjhwJL1o52t2qN-T9TfjfTV2WMBtE4z0rjtf0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPdTYxt3KjgTFdeQjDQ53suN79TS6ot4g0vtJ3QyvDVKATAKnej25nJ4v6b8aOckAYNLGG9SQEfBrBuBVp1PQhZDQRsfuaVTxtz9Jw9Md8uu&lib=MHZ0xy2XIc1aXvNSP7AHvzT4gJKHnd-OI"
    )
      .then((res) => {
        return res.json();
      })

      .then((apidata) => {
        const filterdata = apidata.data.filter((entry) => {});
        setData(apidata.data.slice(1));
      });
  }, []);
  return (
    <>
      <section className="transfer">
        <div className="flex flex-col text-center">
          <div className="overflow-x-auto sm:mx-6 lg:mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4 text-green-500">
                        Most Transfers In
                      </th>
                      <th scope="col" className="px-6 py-4 text-green-500">
                        Transfers
                      </th>
                      <th scope="col" className="px-6 py-4 text-red-600">
                        Most Transfers Out
                      </th>
                      <th scope="col" className="px-6 py-4 text-red-600">
                        Transfers
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.slice(0, 5).map((user, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b font-medium border-yellow-500"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {user.NameIn}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.TransferIn}
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                            {user.NameOut}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {user.TransferOut}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF TRANSFER SECTION */}
      <div className=" grid place-items-center lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1">
        <div>
          <div className=" grid grid-cols-1 ">
            <div>
              <h2 className=" text-4xl text-center py-6 font-semibold ">
                Captaincy
              </h2>
            </div>
            <div className=" overflow-hidden">
              <table>
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      Captaincy
                    </th>
                  </tr>
                </thead>
                <tbody className=" text-center">
                  {data.slice(0, 10).map((user, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b font-medium border-yellow-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.CaptainName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.CaptainPer}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* END OF CAPTAINCY SECTION AND START OF NEW PRICE CHANGE (UP) */}
        <div>
          <div className="grid  place-items-center sm:grid-cols-1">
            <div>
              <h1 className="text-center font-semibold text-3xl pb-6">
                Price Change
              </h1>
              {data.slice(0, 1).map((user, index) => {
                const apiDate = user.date;
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
                  <div className=" text-center  bg-gradient-to-r from-teal-200 to-teal-500  rounded-2xl">
                    <h2 className="  mx-2 my-2 text-2xl font-semibold">
                      {formattedDate}
                    </h2>
                  </div>
                );
              })}
            </div>

            <div>
              <table>
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      {" "}
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      Team
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      New Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, 3).map((user, index) => {
                    return (
                      <tr key={index} className="text-center">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-green-600 text-center"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.PriceUpName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.PriceUpteam}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.latestUpPrice}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* START OF NEW PRICE CHANGE (DOWN) */}

            <div>
              <table>
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      {" "}
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      Team
                    </th>
                    <th scope="col" className="px-6 py-4 text-green-500">
                      New Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.slice(0, 5).map((user, index) => {
                    return (
                      <tr key={index} className="text-center">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 text-red-600"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.PricedownName}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.Pricedownteam}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.latestdownPrice}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* START OF NEW TABLE SECTION */}
    </>
  );
}

export default Transfer_In;
