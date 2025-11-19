importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('notificationclick', function(event) {
  const data = event.notification?.data || {};
  alert('Custom Service Worker Click Data:', data);

  let url = 'https://setkita.com/ayohaclient/index.html#notification';

  // Append params from data (if available)
  if (data.type && data.merchant) {
    url += `?type=${data.type}&merchant=${data.merchant}`;
  }

  event.waitUntil(
    clients.openWindow(url)
  );
});