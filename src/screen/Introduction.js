//引导页面，欢迎屏
import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MySwiper from '../components/MySwiper'
const Introduction = () => {
    const[swiperImgs,setSwiperImgs]=useState([
        {id:1,img:require('./../assets/images/sw1.png')},
        {id:2,img:require('./../assets/images/sw6.png')},
        {id:3,img:require('./../assets/images/sw7.png')},
        // {id:4,img:require('./../assets/images/sw4.png')},
        // {id:5,img:require('./../assets/images/sw5.png')}
    ])
    return (
        <View style={styles.container}>
            <MySwiper images = {swiperImgs}></MySwiper>
        </View>
    )
}

//组件options，配置状态栏，topbar，bottomTab的属性配置
//如果是class组件，可以是组件私有属性：static options
Introduction.options = {
    topBar:{
        visible:false
    },
    statusBar:{
        visible:false
    }
}

export default Introduction

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"rgb(255,255,255)"
    }
})
