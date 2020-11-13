import React,{useEffect,useState} from 'react'
import { ImageBackground, Text, TextInput, TouchableOpacity, View,Alert } from 'react-native'
import firebase from '../Database/Config'
import 'firebase/firestore'



export default function Login({ navigation }) {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()

   

    const loginHandelar = () => {
        
        firebase.firestore().collection('Counter').where('userName', '==', user).where('password', '==', password).get().then(Snapshot => {
            console.log(Snapshot.size)
            if (Snapshot.size == 1) {
                Snapshot.forEach(doc => {

                    navigation.replace('Dashboard', { token: doc.id })
                    console.log('login')

                })


            } else {
                Alert.alert('Check you Email & Password')
            }
        })
        
    }

    return (
        <ImageBackground source={require('../Image/Games/game7.jpg')} style={{ flex: 1 }} >
            <View style={{flex:1}} >

            </View>
            <View style={{ flex: 3, backgroundColor: 'seagreen', marginHorizontal: 60, borderRadius: 15, borderColor: 'white', borderWidth: 2, elevation: 20, }} >
                <View style={{flex:1}} >
                    <TextInput onChangeText={(e)=>{setUser(e)}} placeholder='ENTER USER NAME' style={{fontSize:25,borderWidth:2,borderColor:'white',marginHorizontal:100,marginTop:15,paddingLeft:30,borderRadius:10}} placeholderTextColor='white' />
                </View>

                <View style={{ flex: 1 }}>
                    <TextInput onChangeText={(e) => { setPassword(e) }} placeholder='ENTER PASSWORD' style={{ fontSize: 25, borderWidth: 2, borderColor: 'white', marginHorizontal: 100, marginTop: 15, paddingLeft: 30, borderRadius: 10 }} placeholderTextColor='white'/>
                </View>
                <View style={{ flex: 2, }} >
                    <TouchableOpacity onPress={loginHandelar} style={{ alignItems: 'center', backgroundColor: 'blue', marginHorizontal: 120, marginTop: 5, marginBottom: 5,borderRadius:20 }}>
                        <Text style={{fontSize:25,color:'white'}} >LOGIN</Text>
                    </TouchableOpacity>

                </View>
                

            </View>
            <View style={{ flex: 1 }} >

            </View>
            
       </ImageBackground>
    )
}
