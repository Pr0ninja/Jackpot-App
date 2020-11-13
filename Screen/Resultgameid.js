import React,{useEffect, useState} from 'react'
import { View,Text,Image } from 'react-native'
import firebase from '../Database/Config'
import 'firebase/firestore'
import { ScrollView } from 'react-native-gesture-handler'

export default function Resultgameid({ navigation, route }) {
    
    const [totalval, setTotalval] = useState()
    const [newData, setNewData] = useState([])

   const [totalWinning,setTotalWinning] = useState()
    const[winningBalance ,setWinningBalance] =useState()

    const year = new Date();
    const value = year.getFullYear() + "." + year.getMonth() + "." + year.getDay()
    useEffect(() => {
        firebase.firestore().collection(value).where('gameId', '==', route.params.gameId).get().then(querySnapsho => {
            let total = 0;
            let win = 0;
            const list =[]

            if (querySnapsho.size > 0) {
                querySnapsho.forEach(doc => {
                    const { balance, bid, date, gameId } = doc.data()
                    
                    list.push({
                        balance,
                        bid,
                        date,
                        gameId
                    })
                    
                    bid.forEach(doc => {
                        
                        
                        if (doc==route.params.card) {
                           
                            win += balance * 10;
                        }
                    })
                    
                    total += parseFloat(doc.data().balance)

                })
            }
            setNewData(list)
            setWinningBalance(win)
           
            setTotalval(total)
        })
        

    }, [])


   
    

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flex: 1, backgroundColor: 'skyblue',flexDirection:'row',justifyContent:'space-around' }}>
                <View>
                    <Text style={{fontSize:25}} >Total Bid Amount</Text>
                    <Text style={{ fontSize: 20 }} >{totalval} </Text>
                </View>

                <View>
                    <Text style={{ fontSize: 25 }} >Winning Amount</Text>
                    <Text style={{ fontSize: 20 }} >{winningBalance} </Text>
                </View>
                
                <View style={{flexDirection:'row'}} >
                    <Text>Winning Card : </Text>
                    {
                        route.params.card == 1 ? <Image source={require('../Image/Cards/1.png')} style={{width:70,height:70}} />
                            : route.params.card == 2 ? <Image source={require('../Image/Cards/2.png')} style={{ width: 70, height: 70 }} />
                                : route.params.card == 3 ? <Image source={require('../Image/Cards/3.png')} style={{ width: 70, height: 70 }}/>
                                    : route.params.card == 4 ? <Image source={require('../Image/Cards/4.png')} style={{ width: 70, height: 70 }}/>
                                        : route.params.card == 5 ? <Image source={require('../Image/Cards/5.png')} style={{ width: 70, height: 70 }}/>
                                            : route.params.card == 6 ? <Image source={require('../Image/Cards/6.png')} style={{ width: 70, height: 70 }}/>
                                                : route.params.card == 7 ? <Image source={require('../Image/Cards/7.png')} style={{ width: 70, height: 70 }}/>
                                                    : route.params.card == 8 ? <Image source={require('../Image/Cards/8.png')} style={{ width: 70, height: 70 }}/>
                                                        : route.params.card == 9 ? <Image source={require('../Image/Cards/9.png')} style={{ width: 70, height: 70 }}/>
                                                            : route.params.card == 10 ? <Image source={require('../Image/Cards/10.png')} style={{ width: 70, height: 70 }}/>
                                                                : route.params.card == 11 ? <Image source={require('../Image/Cards/11.png')} style={{ width: 70, height: 70 }}/>
                                                                    : route.params.card == 12 ? <Image source={require('../Image/Cards/12.png')} style={{ width: 70, height: 70 }}/>
                                                                        : route.params.card == 13 ? <Image source={require('../Image/Cards/13.png')} style={{ width: 70, height: 70 }}/>
                                                                            : route.params.card == 14 ? <Image source={require('../Image/Cards/14.png')} style={{ width: 70, height: 70 }}/>
                                                                                : route.params.card == 15 ? <Image source={require('../Image/Cards/15.png')} style={{ width: 70, height: 70 }}/>
                                                                                    : route.params.card == 16 ? <Image source={require('../Image/Cards/16.png')} style={{ width: 70, height: 70 }}/>
                                                                                        :<Text>On card is present</Text>
                    }
                </View>
                

            </View>

            <View style={{ flex: 5, backgroundColor: 'orange' }}>
                <ScrollView>
                {
                    newData.map((item,index) => (
                        <View key={index} style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 2, margin: 10, padding: 5, backgroundColor:'#EEEEFF' }}>
                            <View style={{ flex: 1 }}>
                                <Text>Bid Amount :</Text>
                                <Text>{item.balance}</Text>
                            </View>
                            
                            
                            <View style={{ flexDirection: 'row',flex:1 }}>
                                
                            {
                                item.bid.map(data => (
                                    <View>
                                        
                                        {
                                            data == 1 ? <Image source={require('../Image/Cards/1.png')} style={{ width: 50, height: 50 }} />
                                                : data == 2 ? <Image source={require('../Image/Cards/2.png')} style={{ width: 50, height: 50 }} />
                                                    : data == 3 ? <Image source={require('../Image/Cards/3.png')} style={{ width: 50, height: 50 }} />
                                                        : data == 4 ? <Image source={require('../Image/Cards/4.png')} style={{ width: 50, height: 50 }} />
                                                            : data == 5 ? <Image source={require('../Image/Cards/5.png')} style={{ width: 50, height: 50 }} />
                                                                : data == 6 ? <Image source={require('../Image/Cards/6.png')} style={{ width: 50, height: 50 }} />
                                                                    : data == 7 ? <Image source={require('../Image/Cards/7.png')} style={{ width: 50, height: 50 }} />
                                                                        : data == 8 ? <Image source={require('../Image/Cards/8.png')} style={{ width: 50, height: 50 }} />
                                                                            : data == 9 ? <Image source={require('../Image/Cards/9.png')} style={{ width: 50, height: 50 }} />
                                                                                : data == 10 ? <Image source={require('../Image/Cards/10.png')} style={{ width: 50, height: 50 }} />
                                                                                    : data == 11 ? <Image source={require('../Image/Cards/11.png')} style={{ width: 50, height: 50 }} />
                                                                                        : data == 12 ? <Image source={require('../Image/Cards/12.png')} style={{ width: 50, height: 50 }} />
                                                                                            : data == 13 ? <Image source={require('../Image/Cards/13.png')} style={{ width: 50, height: 50 }} />
                                                                                                : data == 14 ? <Image source={require('../Image/Cards/14.png')} style={{ width: 50, height: 50 }} />
                                                                                                    : data == 15 ? <Image source={require('../Image/Cards/15.png')} style={{ width: 50, height: 50 }} />
                                                                                                        : data == 16 ? <Image source={require('../Image/Cards/16.png')} style={{ width: 50, height: 50 }} />
                                                                                                            : <Text>On card is present</Text>
                                        }
                                        
                                        </View>
                                ))
                                }
                            </View>
                            <View>
                                {
                                    item.bid.map(data => {
                                       
                                        return (
                                            data == route.params.card ? <>
                                                <Text>Winner</Text>
                                                <Text>{item.balance * 10}</Text>
                                                

                                            </>
                                                : <Text></Text>
                                        )


                                    })
                                }
                            </View>
                            
                            
                        </View>
                    ))
                    }
                </ScrollView>


            </View>
            
           
        </View>
    )
}
