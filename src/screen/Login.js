//登录页面，登录屏
import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, TouchableHighlight, Alert, KeyboardAvoidingView,Platform } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconAntd from 'react-native-vector-icons/AntDesign'
import { Navigation } from 'react-native-navigation'
//获取设置的宽高值
const { width, height } = Dimensions.get("window")
const Login = (props) => {
    const [telvalue, setTelValue] = useState('');

    const onChangeText = (v) => {
        setTelValue(v)
    }
    //清除输入的手机号码
    const clearValue = () => {
        setTelValue('')
    }
    //验证手机号码
    const checkTel = () => {
        let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
        if (reg.test(telvalue)) {
            // Alert.alert('验证结果', "手机号码通过验证")
            // 'InputAuthCode'
            //Navigation.push,向导航所在的栈中，添加一个新的导航子对象，子对象添加到栈的最后
            // Navigation.push(props.componentId,{
            //     component:{
            //         name:'InputAuthCode'
            //     }
            // })
            Navigation.showModal({
                stack:{
                    children:[
                        {
                            component:{
                                name:'InputAuthCode',
                                //向下一个导航页中，传递参数的方法
                                passProps:{telvalue}
                            }
                        }
                    ]
                }
            })
        } else {
            Alert.alert('验证结果', "手机号码输入不规范")
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS != 'ios'?'padding':'height'}>
            <ImageBackground
                source={require('../assets/images/bg2.png')}
                style={styles.bgImg}
            >
                <View style={styles.blackbgcontainer}>
                    {/* 上半部分 */}
                    <View style={styles.header}>
                        <View style={styles.headertext}>
                            <Text style={styles.headertextbig}>手机登录 / 注册</Text>
                            <Text style={styles.headertextsmall}>未注册手机验证后自动登录</Text>
                        </View>
                        <View style={styles.inputtel}>
                            <Text style={{ color: 'white', fontSize: 18 }}>+86</Text>
                            <Text style={styles.sortdown}>
                                <Icon name="sort-down" size={20} color="#fff"></Icon>
                            </Text>
                            <TextInput
                                keyboardType="phone-pad"
                                value={telvalue}
                                onChangeText={text => onChangeText(text)}
                                placeholder="请输入11位手机号码"
                                placeholderTextColor="white"
                                maxLength={11}
                                onFocus={clearValue}
                                onSubmitEditing={
                                    //输入完成时，点击键盘上完成时触发的事件
                                    checkTel
                                    // ()=>{
                                    //     alert("输入完成")
                                    // }
                                }
                                style={styles.textinput}
                            >

                            </TextInput>
                        </View>
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor="#DDDDDD"
                            onPress={() => {
                                //请求后台，判断手机号码是否注册过，注册了的，直接登录，没有注册二的进行验证并注册，成功后自动登录
                                checkTel()
                            }}
                            style={{ borderRadius: 40 }}
                        >
                            <View style={styles.loginbutton}>
                                <Text style={styles.logintext}>一键登录</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    {/* 下半部分 */}
                    <View style={styles.loginother}>
                        <View>
                            <Text style={styles.othertitle}>其他登录方式</Text>
                        </View>
                        <View style={styles.othericonlist}>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="rgba(0,0,0,0.5)"
                                style={styles.othericonitem}
                                onPress={() => { }}
                            >
                                <Icon style={styles.othericon}
                                    name="weixin" size={20} color="#fff"
                                ></Icon>
                            </TouchableHighlight>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="rgba(0,0,0,0.5)"
                                style={styles.othericonitem}
                                onPress={() => { }}
                            >
                                <Icon style={styles.othericon}
                                    name="qq" size={20} color="#fff"
                                ></Icon>
                            </TouchableHighlight>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="rgba(0,0,0,0.5)"
                                style={styles.othericonitem}
                                onPress={() => { }}
                            >
                                <Icon style={styles.othericon}
                                    name="weibo" size={20} color="#fff"
                                ></Icon>
                            </TouchableHighlight>
                            <TouchableHighlight
                                activeOpacity={0.6}
                                underlayColor="rgba(0,0,0,0.5)"
                                style={styles.othericonitem}
                                onPress={() => { }}
                            >
                                <IconAntd style={styles.othericon}
                                    name="alipay-circle" size={20} color="#fff"
                                ></IconAntd>
                            </TouchableHighlight>
                        </View>
                        {/* 用户协议文本信息 */}
                        <View>
                            <Text style={styles.footerdes}>登录即代表同意 IAnimation <Text style={styles.textlink}> 用户协议 </Text> 和 <Text style={styles.textlink} > 隐私政策</Text></Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
Login.options = {
    statusBar: {
        visible: false
    },
    topBar: {
        visible: false
    }
}
export default Login

const styles = StyleSheet.create({
    bgImg: {
        width: width,
        height: height
    },
    blackbgcontainer: {
        height: height,
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    header: {
        height: '50%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around'

    },
    headertext: {
        paddingTop: 80,
        paddingBottom: 20
    },
    headertextbig: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    headertextsmall: {
        paddingTop: 5,
        fontSize: 12,
        color: 'white'
    },
    inputtel: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 40,
        marginBottom: 10,
        height: 50,
        paddingHorizontal: 40,
    },
    //手机输入框
    textinput: {
        flexGrow: 1,
        height: 50,
        color: 'white',
        borderWidth: 0,
        fontSize: 18,
    },
    sortdown: {
        marginHorizontal: 5,
        marginTop: -5

    },
    //登录按钮
    loginbutton: {
        paddingHorizontal: 40,
        paddingVertical: 15,
        backgroundColor: "rgba(3,118,191,0.7)",
        borderRadius: 40
    },
    logintext: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    },
    //其他登录方式
    loginother: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    othertitle: {
        color: 'white',
        fontSize: 16
    },
    othericonlist: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    othericonitem: {
        width: 50,
        height: 50,
        backgroundColor: "rgba(0,0,0,0.6)",
        borderRadius: 25,
        marginHorizontal: 20
    },
    othericon: {
        width: 50,
        height: 50,
        textAlign: 'center',
        lineHeight: 50
    },
    footerdes: {
        color: 'white',
        fontSize: 12
    },
    textlink: {
        textDecorationLine: 'underline',
        marginHorizontal: 10
    }
})
