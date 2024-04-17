import React, { useState, useEffect } from 'react';
import Config from './Config';
import { getVersion } from './utils';

const AutoReload = ({  config }) => {
    const [lastVersion, setLastVersion] = useState(null);
    const [timer, setTimer] = useState(null);

    const init = async () => {
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
    };

    const check = async (href) => {
        const version = await getVersion();

        if (lastVersion?.BundleVersion !== version.BundleVersion) {
            if (timer) {
                clearInterval(timer);
                setTimer(null);
            }

            setLastVersion(await getVersion());

            reload(href);
        }
    };

    const reload = (href) => {
        if (href) {
            window.location.href = href;
            console.log(href, 'reload')
        } else {
            window.location.reload(true);
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