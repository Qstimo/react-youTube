import React, { useState, useEffect } from 'react';
import Config from './Config';
import { getVersion } from './utils';

const AutoReload = ({ config }) => {
  const [lastVersion, setLastVersion] = useState(null);
  const [timer, setTimer] = useState(null);

  const init = async () => {
    try {
      const conf = new Config(config);

      if (conf.Enabled) {
        const initialVersion = await getVersion();
        setLastVersion(initialVersion);

        if (initialVersion && conf.CheckInterval > 0) {
          const intervalId = setInterval(() => {
            check();
          }, conf.CheckInterval * 1000);
          setTimer(intervalId);
        }
      }
    } catch (error) {
      console.error("Error initializing AutoReload:", error);
    }
  };

  const check = async () => {
    try {
      const version = await getVersion();
      console.log(version.BundleVersion, "version.BundleVersion");
      if (lastVersion && lastVersion.BundleVersion !== version.BundleVersion) {
        if (timer) {
          clearInterval(timer);
          setTimer(null);
        }

        setLastVersion(version);
        reload();
      }
    } catch (error) {
      console.error("Error checking version:", error);
    }
  };

  const reload = () => {
    try {
      window.location.reload(true);
    } catch (error) {
      console.error("Error reloading the page:", error);
    }
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