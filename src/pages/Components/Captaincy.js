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
        setData(apidata.data.slice(1));
      });
  }, []);
}
