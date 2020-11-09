import React from 'react'
import { View,Text, TouchableOpacity, ScrollView,Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

export default function Game1() {
    return (
        // head bar
       <View style={{flex:1}} >
           <View style={{flex:1,backgroundColor:'yellow',flexDirection:'row',justifyContent:'space-around'}} >
               <Text style={{fontSize:25}} >COUNTER :3</Text>
               <Text style={{fontSize:25}} >TOTAL :3</Text>
               <Text style={{fontSize:25}} >TIMER : 01.59</Text>
               <TouchableOpacity style={{justifyContent:'center'}} >
                         <AntDesign name="closecircleo" size={30} color="red" />
               </TouchableOpacity>

           </View>

        {/* section 1 */}

           <View style={{flex:8,flexDirection:'row'}} >
               <View style={{flex:3,flexDirection:'row'}} >
                   
                   <View style={{flex:1,justifyContent:'space-around'}} >
                       <TouchableOpacity style={{backgroundColor:'red',margin:5,padding:5,alignItems:'center',borderRadius:10}} >
                           <Text style={{fontSize:20,color:'white'}} >10</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'red',margin:5,padding:5,alignItems:'center',borderRadius:10}} >
                           <Text style={{fontSize:20,color:'white'}} >50</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'red',margin:5,padding:5,alignItems:'center',borderRadius:10}} >
                           <Text style={{fontSize:20,color:'white'}} >100</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'red',margin:5,padding:5,alignItems:'center',borderRadius:10}} >
                           <Text style={{fontSize:20,color:'white'}} >200</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'red',margin:5,padding:5,alignItems:'center',borderRadius:10}} >
                           <Text style={{fontSize:20,color:'white'}} >400</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{backgroundColor:'red',margin:5,padding:5,alignItems:'center',borderRadius:10}} >
                           <Text style={{fontSize:20,color:'white'}} >500</Text>
                       </TouchableOpacity>

                   </View>

                   <View style={{flex:4}} >
                       <View style={{alignItems:'center'}} ><Text style={{fontSize:25}} >Selection</Text></View>
                       <View style={{flex:5}} >
                           <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} >
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/1.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/2.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/3.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/4.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>

                           </View>
                           <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} >
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/5.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/6.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/7.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/8.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>

                           </View>

                           <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} >
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/9.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/10.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/11.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/12.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>

                           </View>

                           <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} >
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/13.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/14.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/15.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>
                               <TouchableOpacity>
                                   <Image source={require('../Image/Cards/16.png')} style={{height:60,width:60}} />
                               </TouchableOpacity>

                           </View>

                       </View>

                       <View style={{flex:1,backgroundColor:'black',margin:5,flexDirection:'row'}} >

                           <View style={{flex:2,alignItems:'center',justifyContent:'center'}} >
                             <Text style={{color:'white',fontSize:20}} >5000</Text>
                           </View> 
                           <TouchableOpacity style={{flex:1,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}  >
                                <Text style={{fontSize:18,color:'white'}} >Place Bids</Text>
                           </TouchableOpacity>

                       </View>

                   </View>

               </View>


        {/* section 2 */}

               <View style={{flex:2}} >
                   <View style={{alignItems:'center'}} ><Text style={{fontSize:25}} >Winner</Text></View>

                           <View style={{alignItems:'center'}} >
                                 <Image source={require('../Image/Cards/1.png')} style={{height:250,width:250}} />
                           </View> 
               </View>









        {/* section 3 */}

               <View style={{flex:1,}} >
               <View style={{alignItems:'center'}} ><Text style={{fontSize:25}} >Bids</Text></View>
                    <ScrollView>
                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>

                        <View style={{alignItems:'center',marginBottom:2}} >
                            <Image source={require('../Image/Cards/1.png')} style={{height:80,width:80}} />
                            <Text>200</Text>
                        </View>
                        
                    </ScrollView>
                    <View style={{backgroundColor:'black',alignItems:'center'}} >
                        <Text style={{color:'white'}} >5000</Text>
                    </View>
                    
               </View>

           </View>
       </View>
    )
}
