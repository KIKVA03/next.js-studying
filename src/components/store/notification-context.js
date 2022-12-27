import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null,
    showNotification: function () {},
    hideNotification: function () {},
});

export function NotificationContextProvaider(props) {
    const [activeNotification, setActiveNotification] = useState();

    function showNotificationHandler(notificationData) {
        setActiveNotification(notificationData);
    }
    function hideNotificationHandler() {}

    return <NotificationContext.Provider>{props.children}</NotificationContext.Provider>;
}

export default NotificationContext;
