const firebaseConfig = {
  apiKey: "AIzaSyC5rkN0RF93_q1uYgoGQF7ex5TFryaussA",
  authDomain: "lolt-bb9aa.firebaseapp.com",
  projectId: "lolt-bb9aa",
  storageBucket: "lolt-bb9aa.appspot.com",
  messagingSenderId: "632100441282",
  appId: "1:632100441282:web:4dc8d680f755e7d0baff5b"
} as const;

type Config = typeof config;

export function getFirebaseConfig(): Config {
  if (Object.values(config).some((value) => !value))
    throw new Error('Firebase config is not set or incomplete');

  return config;
}
