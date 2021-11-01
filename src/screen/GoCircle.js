//Go圈，主内容屏幕
import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput, Alert,TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'

import Neraby from '../components/Neraby'
import Attention from '../components/Attention'
import DynamicState from '../components/DynamicState'
const GoCircle = (props) => {
    const {componentId} = props
    const [searchText,setSearchText] = useState('大家都在搜索的内容')
    const [searchValue,setSearchValue] = useState("")
    //点击关注，附近、动态
    const [index,setTabsIndex] = useState(1)

    //返回要渲染的Tabs组件
    const showTabsComponent = (componentId)=>{
        switch(index){
            case 1: return <Neraby componentId={componentId}/>
            case 2:return <Attention componentId={componentId}/>
            case 3:return <DynamicState componentId={componentId}/>
        }
    }
    return (
        <View style={styles.container}>
            {/* 顶部搜索栏 */}
            <View style={styles.headersearchbar}>
                <View style={styles.searchinputbar}>
                    <Icon name="search" size={20} color="999999"></Icon>
                    <TextInput 
                    placeholder={searchText} 
                    value={searchValue}
                    inlineImagePadding={5}
                    returnKeyType="search"
                    maxLength={50}
                    onSubmitEditing={()=>{
                        Alert.alert('搜索',searchValue)
                    }}
                    onChangeText={(text)=>{
                        setSearchValue(text)
                    }}
                    onFocus={(e)=>{
                        e.target.clear()
                    }}
                    >

                    </TextInput>
                </View>
                <View style={styles.headericons}>
                    <Icon name="user-plus" size={20} color="gray"></Icon>
                    <Icon2 name="mail" size={20} color="gray"></Icon2>
                </View>


            </View>
            {/* 选项卡 */}
            <View style={styles.tabs}>
                <View>
                    <TouchableHighlight>
                        <Text style={index === 1 ? styles.activertab : styles.defaulttab}
                        onPress={
                            ()=>{
                               setTabsIndex(1) 
                            }
                        }
                        >附近</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text style={index === 2 ? styles.activertab : styles.defaulttab}
                        onPress={
                            ()=>{
                               setTabsIndex(2) 
                            }
                        }
                        >关注</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight>
                        <Text style={index === 3 ? styles.activertab : styles.defaulttab}
                        onPress={
                            ()=>{
                               setTabsIndex(3) 
                            }
                        }
                        >动态</Text>
                    </TouchableHighlight>
                </View>
            </View>
            {/* 选项卡内容展示区 */}
            <View style={styles.tabscontent}>
                        {
                            showTabsComponent(componentId)
                        }
            </View>
        </View>
    )
}

GoCircle.options={
    topBar:{
        title:{
            text:'社区'
        },
        visible:false
    },
    status:{
        visible:false
    }
    // statusBar: {
    //     visible: false
    // }

}
export default GoCircle

const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'orange'
    },
    headersearchbar:{
        height:50,
        marginTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:30
    },
    searchinputbar:{
        width:'80%',
        height:40,
        backgroundColor:'#eee',
        borderRadius:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        flexShrink:1,
        paddingLeft:5,
    },
    headericons:{
        width:'20%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    tabs:{
        height:40,
        borderBottomWidth:2,
        borderBottomColor:'#dbd8d8',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    defaulttab:{
        height:40,
        lineHeight:40,
        paddingHorizontal:30,
        color:'#000'
    },
    activertab:{
        height:40,
        lineHeight:40,
        borderBottomColor:'#0099ff',
        borderBottomWidth:3,
        paddingHorizontal:30,
        color:'#0099ff',
        fontSize:16,
        fontWeight:'bold'
    },
    tabscontent:{
        flex:1,
        // backgroundColor:'red'
    }
})
