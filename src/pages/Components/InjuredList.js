import { data } from "autoprefixer";

import React, { useEffect, useState } from "react";
import GoalScorer from "./GoalScorer";
function InjuredList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=TpmWNzRVMW7aubFNVflRnvTpQCqjq8XGLKVSk_9AfILAaM4jrRHhiO_CIUUIHWf0UCC1hGG491Iuy0KnSTnQbkE0di5wQzXkm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLYdCBWRQcr6_EARZ1lkDOuB6reMzCUyVsgXCxrYQvMKIS17pJq6vvGTFN7JzouuoKM2gKpFHWxVKLarR3L9xmIR4GRu3jXMztz9Jw9Md8uu&lib=MS-y7okCAx6lw75sFDttdWD4gJKHnd-OI"
    )
      .then((res) => res.json())
      .then((apidata) => setData(apidata.data.slice(1)));
  }, []);
  return (
    <>
      <div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 place-items-center mb-8 border-t-4 border-black-400">
        <div className=" overflow-auto w-auto h-96 ">
          <div className=" grid grid-cols-1 border-2 my-6">
            <div className=" my-6">
              <h1 className=" text-center text-4xl font-semibold text-red-600 border-b-2 border-cyan-600">
                Injured Players
              </h1>
            </div>
            <div></div>
            <table className="max-w-full text-center text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4 text-green-500">
                    Player/ Team
                  </th>

                  <th scope="col" className="px-6 py-4 text-red-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b font-medium border-yellow-500"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium text-[#972D07]">
                        {user.Name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {user.Status}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" text-4xl font-semibold ">
          <div className="text-center mt-4">
            <h1>Goals Scored</h1>
          </div>
          <GoalScorer />
        </div>
      </div>
    </>
  );
}

export default InjuredList;
