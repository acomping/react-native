//Swiper组件
import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { Navigation } from 'react-native-navigation'
import { LoginRoot } from '../navigation'
const MySwiper = (props) => {
    // console.log(props);
    let arr = props.images;
    //跳转到登录页面的方法
    const goLoginPage=()=>{
        setTimeout(() => {
            Navigation.setRoot(LoginRoot)
        }, 1000);
    }
    return (
        <View style={styles.SwiperWrapper}>
            <Swiper style={styles.wrapper} loop={false} autoplay={true}
            autoplayTimeout={1}
            >
                {
                    arr.map((item) => {
                        return (
                            <View key={item.id} style={styles.swiperItem}>
                                <View>
                                    <Image style={styles.swiperImg} source={item.img}></Image>
                                </View>
                                {item.id == 3 && (
                                    <TouchableHighlight style={styles.swiperImgButton}
                                    underlayColor='#F27600'
                                    activeOpacity={0.6}
                                    onPress={goLoginPage}
                                    >
                                        <View>
                                            <Text style={{color:'white'}}>立即体验</Text>
                                        </View>
                                    </TouchableHighlight>
                                )}
                            </View>
                        )
                    })
                }
            </Swiper>
        </View>
    )
}

export default MySwiper

const styles = StyleSheet.create({
    SwiperWrapper: {
        flex: 1
    },
    wrapper: {},
    swiperItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperImg: {
        width: 200,
        height: 350
    },
    swiperImgButton:{
        backgroundColor:'orange',
        paddingVertical:10,
        paddingHorizontal:50,
        borderRadius:20,
        marginTop:50,
        position:'absolute',
        bottom:80
    }
})
