import axios from 'axios';

export async function getVersion() {
    const versionData = (await axios.get(`version.json?timestamp=${new Date().getTime()}`)).data;
    if (versionData) {
        return versionData
    } else {
        console.error('Не удалось получить информацию о версии сборки');
    }
}

