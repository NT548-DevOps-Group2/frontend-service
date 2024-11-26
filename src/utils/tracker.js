import Tracker from '@openreplay/tracker';

const tracker = new Tracker({
  projectKey: "F5Ushrl8KJZCUd1nsw6s",
  ingestPoint: "https://rum.thdcybersecurity.com/ingest",
  __DISABLE_SECURE_MODE: true,
});

// tracker.start().then(sessionData => {
//     console.log("Session ended");
//     console.log(sessionData);
// }).catch(e => console.log(e));
tracker.setUserID('john@doe.com');

export default tracker;