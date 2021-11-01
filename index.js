/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//安装react-native-navigation组件后，修改入口文件为以下代码
import { Navigation } from "react-native-navigation";

// import App from "./App";

// Navigation.registerComponent('App',()=>App)

// const WelcomeScreen = {
//     root:{
//         stack:{
//             id:'WELCOMESCREEN',
//             children:[
//                 {
//                     component:{
//                         name:'App'
//                     }
//                 }
//             ]
//         }
//     }
// }
import {WelcomeScreen} from './src/navigation'
Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot(WelcomeScreen)
})