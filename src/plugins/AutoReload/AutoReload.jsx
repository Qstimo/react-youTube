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
                console.log(intervalId)
                setTimer(intervalId);
            }


        }
    };

    const check = async (href) => {
        const version = await getVersion();

        if (lastVersion.BundleVersion !== version.BundleVersion) {
            if (timer) {
                clearInterval(timer);
                setTimer(null);
            }

            // if (config.Notification) {
            //     await vm.$alert(config.NotificationMessage, 'Предупреждение', {
            //         type: 'warning',
            //         confirmButtonText: 'OK',
            //         closeOnClickModal: true,
            //         closeOnPressEscape: true,
            //     }).catch(() => {});
            // }

            setLastVersion(await getVersion());

            reload(href);
        }
    };

    const reload = (href) => {
        if (href) {
            window.location.href = href;
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