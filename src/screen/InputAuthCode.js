//输入验证码，欢迎屏
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, TouchableHighlight, Alert } from 'react-native'
// https://github.com/retyui/react-native-confirmation-code-field
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Navigation } from 'react-native-navigation';
import { MainRoot } from '../navigation';
const { width, height } = Dimensions.get('window')
const InputAuthCode = (props) => {
    const CELL_COUNT = 6
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props1, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    //是否确定按钮的样式
    const [isActive, setActive] = useState(false)

    // 初始化时间值：
    var second = 60
    const [time, modifTimeValue] = useState(second)
    const [timeId, setTimeId] = useState(null)//定时器对象
    //判断是否输入了6位验证码
    const checkValueLength = (text) => {
        setValue(() => {
            if (value.length + 1 == 6) {
                setActive(true)
            }
            return text
        })
        // console.log(value.length);

    }
    // console.log(props)
    //提交请求：手机号码+验证码
    const submitHandler = () => {
        if (isActive == false) return
        // console.log('手机号码：', props.telvalue);
        // console.log('输入的验证码：', value);
        // fetch('http://127.0.0.1:8081',
        //     {
        //         method: 'POST',
        //         body: JSON.stringify({ userName: props.telvalue, passWord: value }),
        //         headers: {
        //             "Content-type": "application/json"
        //         }
        //     }
        // ).then(function (response) {

        //     return response.json();
        // }).then(function (myJson) {
        //     console.log(myJson);
        //     if (myJson.code == 200) {
        //         Alert.alert('请求结果', '成功请求了后台接口')
        //         Navigation.setRoot(MainRoot)
        //     }

        // }).catch(err => {
        //     console.log("error:", err);
        // })
        Navigation.setRoot(MainRoot)

    }

    //请求发送验证码的方法
    const getCode = () => {
        // console.log('请求后台发送短信到当前的手机号码', props.telvalue);
    }
    //定时器函数：
    const changeTime = (time) => {
        const codeTime = time
        let now = Date.now();
        const overTimeStaamp = now + codeTime * 1000 + 100;//100毫秒，用于时间的容错

        setTimeId(setInterval(() => {
            const nowStamp = Date.now()
            if (nowStamp >= overTimeStaamp) {
                //倒计时结束
                clearInterval(timeId)
            } else {
                const leftTime = parseInt((overTimeStaamp - nowStamp) / 1000, 10)
                modifTimeValue(leftTime)
            }
        }, 1000))
    }
    useEffect(() => {
        getCode()
        // changeTime(second)
        const listener = {
            componentDidAppear:()=>{
                changeTime(second)
            },
            componentDidDisappear:()=>{
                clearInterval(timeId)
            }
        }
        const unsubscribe = Navigation.events().registerComponentListener(listener,props.componentId);

        return ()=>{
            unsubscribe.remove()
        }
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/bg2.png')}
                style={styles.bgImg}
            >
                <View style={styles.headertext}>
                    <Text style={styles.headertextdes}>请输入验证码</Text>
                    <Text style={styles.headertextdestel}>已发送 6 位验证码到+86
                        <Text style={styles.headertelvalue}>{props.telvalue}</Text></Text>
                </View>
                <SafeAreaView style={styles.root}>
                    <CodeField
                        ref={ref}
                        {...props1}
                        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                        value={value}
                        onChangeText={(text) => {
                            checkValueLength(text)
                        }}
                        onFocus={() => {
                            setActive(false)
                        }}
                        // onSubmitEditing={()=>{
                        //     if(value.length == 6){

                        //     }else{
                        //         console.log('输入不完整');
                        //     }
                        // }}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </SafeAreaView>
                {/* 确定按钮 */}
                <TouchableHighlight
                    onPress={submitHandler}
                    style={[styles.buttonwrap, isActive ? styles.activebuttonwrap : ""]}
                >
                    <View>
                        <Text style={styles.button}>确定</Text>
                    </View>
                </TouchableHighlight>
                {/* 倒计时功能 */}
                <View>
                    <Text style={styles.regain}
                    onPress={()=>{
                        //防止重复获取
                        if(time != 0)return
                        modifTimeValue(second)
                        changeTime(second)
                    }}
                    >重新获取(<Text style={styles.time}>{time}</Text>)</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

InputAuthCode.options = {
    topBar: {
        visible: false,
    },
    statusBar: {
        visible: false
    }
}
export default InputAuthCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'flex-start'
    },
    bgImg: {
        flex: 1,
        paddingHorizontal: 40
    },
    headertext: {
        marginTop: 80
    },
    headertextdes: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headertextdestel: {
        color: 'white',
        fontSize: 12,
        marginTop: 10,
        fontWeight: '700'
    },
    headertelvalue: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    //验证码
    root: { padding: 20 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#ffffff60',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        borderRadius: 5
    },
    focusCell: {
        borderColor: '#ddd',
    },
    //确定按钮
    buttonwrap: {
        borderRadius: 25,
        paddingHorizontal: 30,
        paddingVertical: 15,
        backgroundColor: "rgba(0,0,0,0.6)"
    },
    activebuttonwrap: {
        backgroundColor: 'rgba(3,118,191,0.7)'
    },
    button: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },
    //倒计时
    regain: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        marginTop: 20
    },
    time: {
        color: 'gray',
        fontWeight: 'bold'
    }
})
