// frontend/src/components/Notifications.js
import React, { useEffect } from 'react';
import { requestNotificationPermission } from '../services/firebase';

const Notifications = () => {
  useEffect(() => {
    requestNotificationPermission().then(token => {
      if (token) {
        // Save the token on the server to send notifications
        console.log('FCM Token:', token);
      }
    });
  }, []);

  return <div>Push Notifications Enabled</div>;
};

export default Notifications;
