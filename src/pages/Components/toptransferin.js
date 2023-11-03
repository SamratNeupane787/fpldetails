import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";

function Transfer_In() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiurl = fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=9dYw123dd6O8LVbFW5Jp68gQRDQB5yt9apmg5u86AVGBKWej7FcngOJfAVDjfTzFmJkk7sEmqYvNbHneXZjpunOz8-v50mcFm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnLq6LR1xwNT7G4r0nP1hsFiKOngE-CYB3TU2j-0PLEtBO42pxZ8JTfGW7iseMjaWZbKdlCZVmFY2-BwxvrMHjY8Q6yQTF0BIfA&lib=M_74lxCZGdWLF693r5x_fmIPWuj-Zm2gr"
    )
      .then((res) => {
        return res.json();
      })

      .then((apidata) => {
        setData(apidata.data.slice(1));
      });
  }, []);

  return (
    <>
      <div className="flex flex-col text-center">
        <div className="overflow-x-auto sm:mx-6 lg:mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-mediu m dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Cost
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Selected
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Points
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Transfer
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b dark:border-neutral-500"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {user.Name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.Cost}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.Selected}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.Points}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {user.Transfer}
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
    </>
  );
}

export default Transfer_In;
