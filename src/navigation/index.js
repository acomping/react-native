//路由导航
import { Navigation } from "react-native-navigation";

import Login from "./../screen/Login";
import My from "./../screen/My";
import GoCircle from "./../screen/GoCircle";
import GoHealth from "./../screen/GoHealth";
import GoRun from "./../screen/GoRun";
import GoStore from "./../screen/GoStore";
import InputAuthCode from "./../screen/InputAuthCode";
import Introduction from "./../screen/Introduction";
// import App from '../../App'
//注册所有组件
Navigation.registerComponent('Login', () => Login)
Navigation.registerComponent('My', () => My)
Navigation.registerComponent('GoCircle', () => GoCircle)
Navigation.registerComponent('GoHealth', () => GoHealth)
Navigation.registerComponent('GoRun', () => GoRun)
Navigation.registerComponent('GoStore', () => GoStore)
Navigation.registerComponent('InputAuthCode', () => InputAuthCode)
Navigation.registerComponent('Introduction', () => Introduction)
Navigation.registerComponent('App', () => App)

//配置Rn中的导航
//1欢迎屏的导航配置
export const WelcomeScreen = {
    root: {
        stack: {
            id: 'WELCOMESCREEN',
            children: [
                {
                    component: {
                        name: 'Introduction'
                    }
                }
            ]
        }
    }
}

//2登录屏的导航配置
export const LoginRoot = {
    root: {
        stack: {
            id: 'LOGIN_LAYOUT',
            children: [
                {
                    component: {
                        name: "Login"
                    }
                },
            ]
        }
    }
}

//3配置APP主屏幕页面的布局结构
export const MainRoot={
    root:{
        //建议在栈中嵌套bottomTabs,bottomTabs中嵌套stack
        bottomTabs:{
            id:'BOTTPM_TABS_LAYOUT',
            children:[
                //每一个对象，就是一个bottomTab选项卡对象
                {
                    stack:{
                        id:'HOEM_TAB',
                        children:[
                            {
                                component:{
                                    id:'Go_CIRCLE_SCREEN',
                                    name:'GoCircle',
                                }
                            }
                        ],
                        options:{
                            bottomTab:{
                                text:'社区',
                                icon:require('../assets/images/goquan.png'),
                                selectedIcon:require('../assets/images/goquan_ac.png')
                            }
                        }
                    }
                },
                {
                    stack:{
                        id:'HEALTH_TAB',
                        children:[
                            {
                                component:{
                                    id:'GO_HEALTH_SCREEN',
                                    name:'GoHealth'
                                }
                            }
                        ],
                        options:{
                            bottomTab:{
                                text:'游戏',
                                icon:require('../assets/images/gojk.png'),
                                selectedIcon:require('../assets/images/gojk_ac.png')
                            },
                        }
                    }
                },
                {
                    stack:{
                        id:'RUN_TAB',
                        children:[
                            {
                                component:{
                                    id:'GO_RUN_SCREEN',
                                    name:'GoRun'
                                }
                            }
                        ],
                        options:{
                            bottomTab:{
                                text:'娱乐',
                                icon:require('../assets/images/gorun_ac.png'),
                                selectedIcon:require('../assets/images/gorun.png')
                            },
                        }
                    }
                },
                {
                    stack:{
                        id:'STORE_TAB',
                        children:[
                            {
                                component:{
                                    id:'GO_STORE_SCREEN',
                                    name:'GoStore'
                                }
                            }
                        ],
                        options:{
                            bottomTab:{
                                text:'商城',
                                icon:require('../assets/images/gosd.png'),
                                selectedIcon:require('../assets/images/gosd_ac.png')
                            },
                        }
                    }
                },
                {
                    stack:{
                        id:'MY_TAB',
                        children:[
                            {
                                component:{
                                    id:'MYGO_HEALTH_SCREEN',
                                    name:'My'
                                }
                            }
                        ],
                        options:{
                            bottomTab:{
                                text:'我的',
                                icon:require('../assets/images/my.png'),
                                selectedIcon:require('../assets/images/my_ac.png')
                            },
                        }
                    }
                },
            ]
        }
    }
}

//4默认APP导航样式的设置
Navigation.setDefaultOptions({
    //设置App底部的整体的TABS设置
    //bottomTabs enum('alwaysShow','showWhenActive','alwaysHide')	
    bottomTabs:{
        titleDisplayMode:'alwaysShow'
    },
    //手机状态栏
    statusBar:{
        backgroundColor:'rgba(255,255,255,0.85)',//设置状态栏颜色
        style:'dark',//手机的模式，设置文字和手机信息字体的颜色
        visible:true//false不显示状态栏
    },
    //App顶部配置
    topBar:{
        title:{
            color:'black'
        },
        backButton:{
            color:'#666666'
        },
        background:{
            color:'#ffffff'
        }
    },
    //App的底部的tab的设置
    bottomTab:{
        fontSize:12,
        selectedFontSize:14,
        iconWidth:20,
        iconHeight:20,
        textColor:'#666666',
        selectedTextColor:'#0099ff',
        fontWeight:700

    }
})
