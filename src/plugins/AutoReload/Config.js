import { isBoolean } from './utils';


export default class Config {

    constructor(origin) {

        this.Enabled = isBoolean(origin.Enabled) ? origin.Enabled : true;


        this.CheckInterval = origin.CheckInterval ?? 1 * 60;


        this.Notification = isBoolean(origin.Notification) ? origin.Notification : true;


        this.NotificationMessage = origin.NotificationMessage
            ?? 'Система была обновлена, страница будет перезагружена.';
    }
}