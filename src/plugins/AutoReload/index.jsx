import React, { useState, useEffect } from "react";
import { getVersion } from "./utils";

const AutoReload = ({ config }) => {
  const { enabled = true, checkInterval = 300 } = config;
  const [timer, setTimer] = useState(null);
  const init = async () => {
    if (enabled) {
      const initialVersion = await getVersion();
      localStorage.setItem("version", initialVersion.BundleVersion);

      if (initialVersion && checkInterval > 0) {
        const intervalId = setInterval(() => {
          check();
        }, checkInterval * 1000);
        setTimer(intervalId);
      }
    }
  };
  

  const check = async () => {
    try {
      const version = await getVersion();
      const lastVersion = localStorage.getItem("version");
      if (lastVersion && lastVersion !== version.BundleVersion) {
        if (timer) {
          clearInterval(timer);
          setTimer(null);
        }

        reload();
      }
    } catch (error) {
      console.error("Error checking version:", error);
    }
  };

  const reload = () => {
    window.location.reload(true);
  };

  useEffect(() => {
    init();

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return null;
};

export default AutoReload;
