import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; /* eslint-disable-line */
import axios from "axios";
import Config from "Utils/Config";

function Activate() {
  const activation_token = new URLSearchParams(location.search).get("token");
  console.log(activation_token);

  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (activation_token) {
      console.log("works");
      const activationEmail = async () => {
        try {
          const res = await axios.post(
            Config.BACKEND_URL + "/api/user/activation",
            {
              activation_token,
            }
          );
          console.log(res);
          setSuccess(res.data.msg);
        } catch (err) {
          err.response.data.msg && setErr(err.response.data.msg);
        }
      };
      activationEmail();
    }
  }, [activation_token]);

  return (
    <div className="active_page">
      <h1>Activation</h1>
      {success && <div>Success + {success}</div>}
      {err && <div>Error + {err}</div>}
    </div>
  );
}

export default Activate;
