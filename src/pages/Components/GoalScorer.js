import React, { useEffect, useState } from "react";

function GoalScorer() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=iOaOCd4y39LmiTAUuWGTp3zR844B37sJj8qVUWjqaHZOqXJAWD5Hwlpf4nkVhGLt99L_QfDOcz-g7eFSRaTtU4qqi48uRMUTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnAwQvAZZ1oukpOirI4TuUjjUIvopLKOZ2Unn9IrnxY3QuHOZX53zF6pig1rpXArl-dyoWwucS0IBtbIg4-iCgb2Q1fnh23AiAg&lib=MPFAxVuBdHcKn_ySRxRxBl4PWuj-Zm2gr"
    )
      .then((res) => res.json())
      .then((apidata) => setData(apidata.data.slice(1)));
  }, []);
  return (
    <>
      <div className=" overflow-auto w-auto h-auto ">
        <div className=" grid grid-cols-1 border-2 my-6">
          <table className="max-w-full text-center text-sm font-light">
            <thead className="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4 text-green-500">
                  Player
                </th>

                <th scope="col" className="px-6 py-4 text-red-600">
                  Club
                </th>
                <th scope="col" className="px-6 py-4 text-red-600">
                  Stats
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
                    <td className="whitespace-nowrap px-6 py-4">{user.Club}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.Stats}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default GoalScorer;
