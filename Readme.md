# React Native Firebase Template

## Steps to start coding

### Set up firebase project

Make sure you have a firebase project set up, and have enabled both the Realtime Database and Authentication with e-mail.

### Download this code

Use "Fork" up above to make your own copy of this code then use Github Desktop to clone, or use the "Download as ZIP" option on github and extract into a place you can find it on your computer (you can then add it to github later)

### Open the code in VS Code

Open VS Code, choose "Open Folder", then navigate to this folder

### Set up the many dependencies

Open a Terminal (Terminal -> New Terminal) in VS Code and do the following commands. Some of them may take a while.

1. `npm install -g expo-cli` (do this even if you already have, to get the latest version)
2. `npm install`
3. `expo install firebase react-navigation @react-navigation/native @react-navigation/stack react-native-screens`

### Configure it to connect to your firebase project

The file `src/firebase_config.js` has many numbers and IDs that need to be changed. You can find most of these numbers and values in the firebase console for your app. You will need to configure them before you can start.

### Make sure your database has rules that let anybody authorized access it

Go to the Firebase Console, find your project, navigate to "realtime database" on the left, and choose the "rules" tab. You want your rules to be:

```
{
  "rules": {
    ".read": "auth != null", 
    ".write": "auth != null",  
  }
}
```

### Test the code

You should hopefully be able to run `expo start` in your terminal now. It will open a browser where you can click `open in browser` to see your app in a browser.

If all goes well, you'll get a login screen, along with a link to create a new user. If you already have a manually created user from your console you should be able to log in. Or create one using the registration tool.

If you create a new user, that user should appear under "Authentication" in your Firebase console. And you'll be logged in! You can from then on log in using the Log In screen.

### Have at it!

Explore the code! You can add new screens by tweaking `App.js` to enable them, then creating pathways to get to them starting from `HomeScreen.js`.

The Expo documentation, React Native documentation, and Firebase documentation are all useful tools to help you learn more.
