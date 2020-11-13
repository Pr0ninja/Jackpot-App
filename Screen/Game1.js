import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput, Alert, ImageBackground, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Timer from './component/Timer';
import firebase from '../Database/Config';
import 'firebase/firestore';


export default function Game1({ navigation, route }) {
    
    const [totalWinning,setTotalWinning] = useState()
    //user state
    const [user, setUser] = useState()
    const [balance, setBalance] = useState()
    
    //if-else condition state
    const [isTimerStart,setIsTimerStart] = useState(true)
    const [isGameStart, setIsGameStart] = useState(true)
    const [isResult, setIsResult] = useState(true);
    const date = new Date();

    const [bidAmount, setBidAmount] = useState("1");
    const [card, setCard] = useState([])
    const [cardResult,setCardResult] =useState([])

    const [totalBidAmount, setTotalBidAmount] = useState(0)

    const [gameId, setGameId] = useState(date.getFullYear() + "" + date.getMonth() + "" + date.getDay() + "" + date.getHours() + "" + date.getMinutes())

    const [styleColor1, setStyleColor1] = useState('white')
    const [styleColor2, setStyleColor2] = useState('white')
    const [styleColor3, setStyleColor3] = useState('white')
    const [styleColor4, setStyleColor4] = useState('white')
    const [styleColor5, setStyleColor5] = useState('white')
    const [styleColor6, setStyleColor6] = useState('white')
    const [styleColor7, setStyleColor7] = useState('white')
    const [styleColor8, setStyleColor8] = useState('white')
    const [styleColor9, setStyleColor9] = useState('white')
    const [styleColor10, setStyleColor10] = useState('white')
    const [styleColor11, setStyleColor11] = useState('white')
    const [styleColor12, setStyleColor12] = useState('white')
    const [styleColor13, setStyleColor13] = useState('white')
    const [styleColor14, setStyleColor14] = useState('white')
    const [styleColor15, setStyleColor15] = useState('white')
    const [styleColor16, setStyleColor16] = useState('white')

    const [cardName,setCardName]=useState()


    const [imageUrl, setImageUrl] = useState([])
    const [winningCard,setWinningCard] = useState()

    useEffect(() => {
        firebase.firestore().collection('Counter').doc(route.params.token).get().then(doc => {
           
            const { userName, counterName, balance } = doc.data()
            setUser(counterName)
            setBalance(balance)
        })
    }, [])


    const float = parseFloat(bidAmount) / card.length
    const eachCardAmount = float.toFixed(2)

    const onBidHandelar = () => {

        const year = new Date();
        const value = year.getFullYear() + "." + year.getMonth() + "." + year.getDay()
       console.log(year.getDate)
        //firebase post data
        firebase.firestore().collection(value).add({
            bid: card,
            balance: eachCardAmount,
            gameId: gameId,
            date: value,
            counterId: route.params.token

        })

        firebase.firestore().collection('Counter').doc(route.params.token).update({
            balance: balance - parseFloat(bidAmount) 
        })
        setBalance(balance - parseFloat(bidAmount) )
        //reset all state
        setCardResult(imageUrl)
        setCard([])
        setBidAmount("1")

        setTotalBidAmount(totalBidAmount + parseFloat(bidAmount))

        setStyleColor1('white')
        setStyleColor2('white')
        setStyleColor3('white')
        setStyleColor4('white')
        setStyleColor5('white')
        setStyleColor6('white')
        setStyleColor7('white')
        setStyleColor8('white')
        setStyleColor9('white')
        setStyleColor10('white')
        setStyleColor11('white')
        setStyleColor12('white')
        setStyleColor13('white')
        setStyleColor14('white')
        setStyleColor15('white')
        setStyleColor16('white')


    }
    const gameIdHandelar = () => {
        
    }
    const ValueRandom = Math.floor(Math.random() * 16) + 1

    const startGameHandelar = () => {



        const date = new Date();
        const value1 = date.getFullYear() + "." + date.getMonth() + "." + date.getDay()
        
        
        

        setIsGameStart(false)
       
       
        setTimeout(() => {
            const ValueRandom = Math.floor(Math.random() * 16) + 1
            setCardName(ValueRandom)
            firebase.firestore().collection('Winner').add({

                WinningCard: ValueRandom,
                gameId: gameId,
                counterId: route.params.token,
                date:value1
            })
           
        }, 5000)


       


        setTimeout(() => {
            firebase.firestore().collection('Winner').where('gameId', '==', gameId).get().then((quarySnapshot) => {
                quarySnapshot.forEach(doc => {
                   
                    const { WinningCard, counterId, gameId } = doc.data()
                    setWinningCard(WinningCard)

                    console.log('winnng card no :' + WinningCard)
                    
                  
                })
            })

           
        }, 10000)
      
       

        setTimeout(() => {
            setIsResult(false)
        }, 125000)

        setTimeout(() => {
            setIsResult(true)
            setIsGameStart(true)
            setTotalBidAmount(0)
            setCardResult([])
          
        },130000)
       
       

    }

    
   

    return (
        <>
            {
                balance > 100 ? // head bar
                    <ImageBackground source={require('../Image/Lightbg.png')} style={{ flex: 1 }} >
                        <View style={{ flex: 1, backgroundColor: 'orange', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                            <Text>Hi</Text>
                            <Text style={{ fontSize: 16 }} >COUNTER : {user}</Text>
                            <Text style={{ fontSize: 18 }} >Balance : {balance}</Text>
                            <Text style={{ fontSize: 18 }} >GAMEID : {gameId}</Text>
                            {
                                isGameStart ? <Text>Time Remaining : 0:00</Text>
                                    : <Timer />
                            }

                            <TouchableOpacity style={{ justifyContent: 'center' }} onPress={() => { navigation.replace('Dashboard', { token: route.params.token }) }} >
                                <AntDesign name="closecircleo" size={30} color="red" />
                            </TouchableOpacity>

                        </View>

                        {/* section 1 */}

                        <View style={{ flex: 8, flexDirection: 'row', borderLeftColor: 'orange', borderLeftWidth: 2 }} >
                            {
                                isGameStart ? <ImageBackground source={require('../Image/Games/game6.jpg')} style={{ flex: 3 }} >
                                    <View style={{ flex: 1, alignItems: 'center' }} >

                                    </View>

                                    <View style={{ flex: 1 }} >


                                        <TouchableOpacity onPress={startGameHandelar} style={{ backgroundColor: 'yellow', marginHorizontal: 60, alignItems: 'center', borderColor: 'white', borderWidth: 2, borderRadius: 5, padding: 30, elevation: 20 }} >
                                            <Text style={{ fontSize: 23 }}  >Ready to Start The GAME</Text>
                                        </TouchableOpacity>
                                         
                                        


                                        
                                    </View>
                                    <View style={{ flex: 1 }} >

                                    </View>

                                </ImageBackground>

                                    : <View style={{ flex: 3, flexDirection: 'row' }} >

                                        <View style={{ flex: 1, justifyContent: 'space-around' }} >
                                            <TouchableOpacity style={{ backgroundColor: 'red', margin: 5, padding: 5, alignItems: 'center', borderRadius: 10 }} onPress={() => { setBidAmount("10") }} >
                                                <Text style={{ fontSize: 20, color: 'white' }} >10</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: 'red', margin: 5, padding: 5, alignItems: 'center', borderRadius: 10 }} onPress={() => { setBidAmount("50") }} >
                                                <Text style={{ fontSize: 20, color: 'white' }} >50</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: 'red', margin: 5, padding: 5, alignItems: 'center', borderRadius: 10 }} onPress={() => { setBidAmount("100") }} >
                                                <Text style={{ fontSize: 20, color: 'white' }} >100</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: 'red', margin: 5, padding: 5, alignItems: 'center', borderRadius: 10 }} onPress={() => { setBidAmount("200") }} >
                                                <Text style={{ fontSize: 20, color: 'white' }} >200</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: 'red', margin: 5, padding: 5, alignItems: 'center', borderRadius: 10 }} onPress={() => { setBidAmount("400") }} >
                                                <Text style={{ fontSize: 20, color: 'white' }} >400</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ backgroundColor: 'red', margin: 5, padding: 5, alignItems: 'center', borderRadius: 10 }} onPress={() => { setBidAmount("500") }} >
                                                <Text style={{ fontSize: 20, color: 'white' }} >500</Text>
                                            </TouchableOpacity>

                                        </View>

                                        <View style={{ flex: 4 }} >
                                            <View style={{ alignItems: 'center' }} ><Text style={{ fontSize: 25 }} >Selection</Text></View>
                                            <View style={{ flex: 5 }} >
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }} >
                                                    <TouchableOpacity onPress={() => { setCard([...card, 1]), setStyleColor1('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/1.png')]) }}  >
                                                        <Image source={require('../Image/Cards/1.png')} style={{ height: 60, width: 60, borderColor: styleColor1, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 2]), setStyleColor2('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/2.png')]) }} >
                                                        <Image source={require('../Image/Cards/2.png')} style={{ height: 60, width: 60, borderColor: styleColor2, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 3]), setStyleColor3('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/3.png')]) }}>
                                                        <Image source={require('../Image/Cards/3.png')} style={{ height: 60, width: 60, borderColor: styleColor3, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 4]), setStyleColor4('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/4.png')]) }} >
                                                        <Image source={require('../Image/Cards/4.png')} style={{ height: 60, width: 60, borderColor: styleColor4, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>

                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }} >
                                                    <TouchableOpacity onPress={() => { setCard([...card, 5]), setStyleColor5('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/5.png')]) }} >
                                                        <Image source={require('../Image/Cards/5.png')} style={{ height: 60, width: 60, borderColor: styleColor5, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 6]), setStyleColor6('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/6.png')]) }} >
                                                        <Image source={require('../Image/Cards/6.png')} style={{ height: 60, width: 60, borderColor: styleColor6, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 7]), setStyleColor7('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/7.png')]) }} >
                                                        <Image source={require('../Image/Cards/7.png')} style={{ height: 60, width: 60, borderColor: styleColor7, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 8]), setStyleColor8('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/8.png')]) }} >
                                                        <Image source={require('../Image/Cards/8.png')} style={{ height: 60, width: 60, borderColor: styleColor8, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>

                                                </View>

                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }} >
                                                    <TouchableOpacity onPress={() => { setCard([...card, 9]), setStyleColor9('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/9.png')]) }} >
                                                        <Image source={require('../Image/Cards/9.png')} style={{ height: 60, width: 60, borderColor: styleColor9, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 10]), setStyleColor10('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/10.png')]) }} >
                                                        <Image source={require('../Image/Cards/10.png')} style={{ height: 60, width: 60, borderColor: styleColor10, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 11]), setStyleColor11('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/11.png')]) }} >
                                                        <Image source={require('../Image/Cards/11.png')} style={{ height: 60, width: 60, borderColor: styleColor11, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 12]), setStyleColor12('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/12.png')]) }} >
                                                        <Image source={require('../Image/Cards/12.png')} style={{ height: 60, width: 60, borderColor: styleColor12, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>

                                                </View>

                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }} >
                                                    <TouchableOpacity onPress={() => { setCard([...card, 13]), setStyleColor13('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/13.png')]) }} >
                                                        <Image source={require('../Image/Cards/13.png')} style={{ height: 60, width: 60, borderColor: styleColor13, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 14]), setStyleColor14('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/14.png')]) }} >
                                                        <Image source={require('../Image/Cards/14.png')} style={{ height: 60, width: 60, borderColor: styleColor14, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 15]), setStyleColor15('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/15.png')]) }} >
                                                        <Image source={require('../Image/Cards/15.png')} style={{ height: 60, width: 60, borderColor: styleColor15, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={() => { setCard([...card, 16]), setStyleColor16('yellow'), setImageUrl([...imageUrl, require('../Image/Cards/16.png')]) }} >
                                                        <Image source={require('../Image/Cards/16.png')} style={{ height: 60, width: 60, borderColor: styleColor16, borderWidth: 3, padding: 3 }} />
                                                    </TouchableOpacity>

                                                </View>

                                            </View>

                                            <View style={{ flex: 1, backgroundColor: 'black', margin: 5, flexDirection: 'row' }} >

                                                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }} >
                                                    <TextInput placeholder='Add Amount' value={bidAmount} style={{ color: 'white', fontSize: 20 }} onChangeText={(e) => { setBidAmount(e) }} />
                                                </View>
                                                <TouchableOpacity style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}  >
                                                    <Text style={{ fontSize: 18, color: 'white' }} onPress={onBidHandelar} >Place Bids</Text>
                                                </TouchableOpacity>

                                            </View>

                                        </View>

                                    </View>
                            }




                            {/* section 2 */}

                            <View style={{ flex: 2, borderLeftColor: 'orange', borderLeftWidth: 2 }} >
                                <View style={{ alignItems: 'center' }} ><Text style={{ fontSize: 25 }} >Winner</Text></View>
                                <Text>Winning Ammount : {totalWinning}</Text>

                                {
                                    isResult ? <View style={{ alignItems: 'center', paddingBottom: 30 }} >
                                        <Text style={{ fontSize: 20 }} >Waitting For Result</Text>
                                        <ActivityIndicator size="large" color="#00ff00" />
                                    </View>
                                        : <View style={{ alignItems: 'center' }} >
                                            {
                                                winningCard == 1 ? <Image source={require('../Image/Cards/1.png')} style={{ height: 250, width: 250 }} />
                                                    : winningCard == 2 ? <Image source={require('../Image/Cards/2.png')} style={{ height: 250, width: 250 }} />
                                                        : winningCard == 3 ? <Image source={require('../Image/Cards/3.png')} style={{ height: 250, width: 250 }} />
                                                            : winningCard == 4 ? <Image source={require('../Image/Cards/4.png')} style={{ height: 250, width: 250 }} />
                                                                : winningCard == 5 ? <Image source={require('../Image/Cards/5.png')} style={{ height: 250, width: 250 }} />
                                                                    : winningCard == 6 ? <Image source={require('../Image/Cards/6.png')} style={{ height: 250, width: 250 }} />
                                                                        : winningCard == 7 ? <Image source={require('../Image/Cards/7.png')} style={{ height: 250, width: 250 }} />
                                                                            : winningCard == 8 ? <Image source={require('../Image/Cards/8.png')} style={{ height: 250, width: 250 }} />
                                                                                : winningCard == 9 ? <Image source={require('../Image/Cards/9.png')} style={{ height: 250, width: 250 }} />
                                                                                    : winningCard == 10 ? <Image source={require('../Image/Cards/10.png')} style={{ height: 250, width: 250 }} />
                                                                                        : winningCard == 11 ? <Image source={require('../Image/Cards/11.png')} style={{ height: 250, width: 250 }} />
                                                                                            : winningCard == 12 ? <Image source={require('../Image/Cards/12.png')} style={{ height: 250, width: 250 }} />
                                                                                                : winningCard == 13 ? <Image source={require('../Image/Cards/13.png')} style={{ height: 250, width: 250 }} />
                                                                                                    : winningCard == 14 ? <Image source={require('../Image/Cards/14.png')} style={{ height: 250, width: 250 }} />
                                                                                                        : winningCard == 15 ? <Image source={require('../Image/Cards/15.png')} style={{ height: 250, width: 250 }} />
                                                                                                            : winningCard == 16 ? <Image source={require('../Image/Cards/16.png')} style={{ height: 250, width: 250 }} />
                                                                                                                : <Text>Value is not Found</Text>
                                            }
                                           

                                        </View>
                                }
                            </View>









                            {/* section 3 */}

                            <View style={{ flex: 1, borderLeftWidth: 2, borderLeftColor: 'orange' }} >
                                <View style={{ alignItems: 'center' }} ><Text style={{ fontSize: 25 }} >Bids</Text></View>
                                <ScrollView>

                                    {
                                        cardResult.reverse().map((data, index) => (
                                            <View style={{ alignItems: 'center', marginBottom: 2 }} key={index} >
                                                <Image source={data} style={{ height: 50, width: 50 }} />

                                            </View>
                                        ))
                                    }

                                </ScrollView>
                                <View style={{ backgroundColor: 'black', alignItems: 'center' }} >
                                    <Text style={{ color: 'white' }} >{totalBidAmount}</Text>
                                </View>

                            </View>

                        </View>
                    </ImageBackground>
                    : <ImageBackground source={require('../Image/Games/game3.jpeg')} style={{ flex: 1,justifyContent:'center' }} >
                        <View style={{ backgroundColor: 'blue',alignItems:'center',marginHorizontal:100,padding:20,borderColor:'white',borderWidth:2 }} >
                            <Text style={{fontSize:30,color:'white'}} >Your Balance is Low</Text>

                        </View>
                        <TouchableOpacity onPress={() => { navigation.push('Dashboard', { token: route.params.token }) }} style={{ backgroundColor: 'red', alignItems: 'center', marginHorizontal: 100, padding: 20, borderColor: 'white', borderWidth: 2,margin:20 }} >
                            <Text style={{ fontSize: 30, color: 'white' }} >Close</Text>

                        </TouchableOpacity>
                        

                    </ImageBackground>
            }
        </>
        
    )
}
