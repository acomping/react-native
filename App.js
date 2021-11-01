//APP跟组件修改
import React from 'react'
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native'
// https://reactnative.directory/?search=react-native-vector-icons
// react-native link react-native-vector-icons
import Icon from 'react-native-vector-icons/FontAwesome'
const App = () => {
  // jsx语法
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.layer}>
            <Text style={styles.textred}>文本1</Text>
            <Text style={styles.textred}>文本2</Text>
            <Text style={styles.textred}>文本3</Text>
          </View>
          <View>
            <Text>
              文本1 <Text>文本2</Text><Text>文本3</Text>
            </Text>
          </View>
          <View>
            <Text>ICONS用法：</Text>
            <Icon name="home" size={40} color="green"></Icon>
            <Icon name="steam-square" size={40} color="green"></Icon>
          </View>
          <View>
            <Button title="跳转到外部的页面" onPress={() => {
              Linking.openURL("http:www.baidu.com")
            }}
              color="green"
            ></Button>
          </View>
          {/* <View style={styles.acenter}>
          <Text style={styles.mybutton} onPress={() => {
            Linking.openURL("http:www.baidu.com")
          }}>跳转到外部链接</Text>
        </View> */}

          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="blue"
            style={styles.mybutton}
            onPress={() => {
              console.log("123");
            }}>
            <Text style={styles.textbutton}>跳转到外部页面</Text>
          </TouchableHighlight>
          <TouchableOpacity
            style={styles.mybutton}
          >
            <Text>TouchableOpacity</Text>
          </TouchableOpacity>
          <View>
            <Image source={require('./src/assets/images/1.png')}></Image>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  layer: {
    display: "flex",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textred: {
    color: "red"
  },
  mybutton: {
    // color: "#fff",
    backgroundColor: "orange",
    height: 50,
    width: 200,
    // lineHeight: 50,
    borderRadius: 25,
    // textAlign: 'center',
    // marginHorizontal:100
    marginVertical: 50,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'

  },
  // acenter: {
  //   display: 'flex',
  //   flexDirection: "row",
  //   justifyContent: 'center',
  //   marginTop: 50
  // },
  textbutton: {
    color: 'black'
  }
})
