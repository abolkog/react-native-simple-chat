# React Native Simple Chat

This is the repository is for the tutorial ["React Native Simple Chat - Arabic"](http://abolkog.com/courses/view/react-native-chat-application) @abolkog.com

# The App
  - The app is a simple Global chat application using React Native, Redux and Firebase

# Firebase configuration. 
You will need to setup your firebase account, then create the file `src/firebase.js` and add the credentials there.

#### Example file (firebase.js)
```
import * as firebase from 'firebase';

const config = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN_HERE",
    databaseURL: "DATABASE_URL_HERE",
    projectId: "PROJECT_ID_HERE",
    storageBucket: "",
    messagingSenderId: "SENDER_ID_HERE"
};
firebase.initializeApp(config);

export default firebase;

```

#### Contact Me
You can use the [Contact Me](http://www.abolkog.com/contact) form at my website or drop me a message on twitter @abolkog