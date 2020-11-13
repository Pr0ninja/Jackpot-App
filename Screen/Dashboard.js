import React,{useState,useEffect} from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import firebase from '../Database/Config';
import 'firebase/firestore'

export default function Dashboard({ navigation, route }) {
    
    const [user, setUser] = useState()
    const [balence,setBalance] = useState()
    
    useEffect(() => {
        firebase.firestore().collection('Counter').doc(route.params.token).get().then(doc => {
            console.log(doc.data())
            const { userName, counterName, balance} = doc.data()
            setUser(counterName)
            setBalance(balance)
        })
   },[])

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: 'yellow',flexDirection:'row' }} >
                
                <View style={{ flex: 2, backgroundColor: 'black',alignItems:'center',justifyContent:'center' }} >
                    <Text style={{ color: 'white', fontSize: 20 }} >Welcome {user}</Text>

                </View>
                <View style={{ flex: 2,alignItems:'center',justifyContent:'center' }} >
                    <Text style={{ color: 'black', fontSize: 20 }} >For Amusement Only</Text>
                </View>

                <View style={{flexDirection:'row',flex:3,margin:10,borderRadius:5,borderColor:'white',borderWidth:2,}} >
                    <View style={{ flex: 2, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ color: 'white', fontSize: 18 }} >Balance</Text>

                    </View>
                    <View style={{ flex: 1, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center' }} >
                        <Text style={{ color: 'white', fontSize: 18 }} >{balence}</Text>
                    </View>

                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Resultpage', { token: route.params.token})}} style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }} >
                    <Text style={{ color: 'green', fontSize: 20 }} >Admin Dashboard</Text>
                </TouchableOpacity>

                

            </View>

            {/* game section */}

            <ImageBackground source={require('../Image/bg.png')} style={{ flex: 6, backgroundColor: 'black' }} >

                <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-around' }} >
                    
                    <TouchableOpacity onPress={() => { navigation.replace('Game', { token: route.params.token})}} >
                        <Image source={require('../Image/Games/game1.jpg')} style={{height:140,width:100,borderWidth:2,borderColor:'white',borderRadius:10,margin:5}} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game2.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10,margin:5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game3.jpeg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game4.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game5.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game6.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 1,flexDirection:'row',justifyContent:'space-around' }} >

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game7.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game8.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game9.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game10.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game5.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image source={require('../Image/Games/game6.jpg')} style={{ height: 140, width: 100, borderWidth: 2, borderColor: 'white', borderRadius: 10, margin: 5 }} />
                    </TouchableOpacity>

                </View>

            </ImageBackground>

        </View>
    )
}
