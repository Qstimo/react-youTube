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
        localStorage.setItem('version', initialVersion.BundleVersion) 

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
      const lastVersion = await localStorage.getItem('version')
      if (lastVersion && lastVersion !== version.BundleVersion) {
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