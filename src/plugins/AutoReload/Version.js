
export default class Version {

    constructor(origin) {

        this.AppVersion = origin?.AppVersion ?? '0.0.0';

        this.Build = origin?.Build;

        this.BundleVersion = origin?.BundleVersion ?? '2020-01-01T00:00';
    }
}