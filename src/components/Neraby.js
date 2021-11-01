//社区附近组件页面
import React, { useRef, useState } from 'react'
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const DATA = [
    {
        zid: 1,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 2,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 3,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 4,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 5,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 6,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 7,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 8,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 9,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 10,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
    {
        zid: 1,
        title: '啊啦啊啦，不好啊看',
        nickname: '我可以',
        zancount: 4235,
        msgcount: 3,
        img: require('../assets/images/1.png'),
        userphoto: require('../assets/images/4.png')
    },
]
const renderItem = ({ item }) => {
    return (
        <View>
            <Text>{item.zid}</Text>
        </View>
    )
}
const Neraby = () => {
    const flatref = useRef()
    const [list, setList] = useState(DATA)

    const onEndReachedHandler = ()=>{
        Alert.alert('上拉触底','数据加载成功')
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ref={flatref}
                data={list}//要渲染的数据
                renderItem={renderItem}//每个容器成员组件
                keyExtractor={item => item.zid}//每个成员对应的Key
                horizontal={false}//取消水平布局
                numColumns={2}//设置多列布局的列数
                scrollEnabled={true}//false时内容不能滚动
                onRefresh={()=>{
                    //下拉刷新交互
                    Alert.alert('下拉刷新','重新请求后台数据')
                }}
                refreshing={false}//在等待加载新数据时将此属性设为true，列表就会显示出一个正在加载的符号
                onEndReachedThreshold={0.01}//上拉触底的位置，一个比例值
                onEndReached={onEndReachedHandler}//上拉触底时的回调
                ListFooterComponent = {(<View>
                    <MaterialIcons style={styles.loads} name="timer" size={30}></MaterialIcons>
                </View>)}
            >
            </FlatList>
        </SafeAreaView>
    )
}

export default Neraby

const styles = StyleSheet.create({
    container:{
        
    }
})
