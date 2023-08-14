import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import SafeAreaView from 'react-native-safe-area-view';

export default class Home extends Component {
  static navigationOptions={title:'Home'};

  render() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <Image
      source={require("./assets/logo2.gif")}
      style={{width:400, height:200}}>
      </Image>

      <ScrollView>

        <Text style={{textAlign:'center', paddingTop:10, paddingBottom:5, fontSize:18, fontWeight:'bold'}}>Footwear</Text>
        <View style={{flexDirection:'row', alignSelf:'center'}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.nierashoes.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Niera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.laydeez.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Laydeez</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://pawahan.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Pawahan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://helankashoes.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Helanka</Text>
        </TouchableOpacity>

        </View>

        <Text style={{textAlign:'center', paddingTop:10, paddingBottom:5, fontSize:18, fontWeight:'bold'}}>Fashion</Text>
        <View style={{flexDirection:'row', alignSelf:'center'}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://mimosaforever.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Mimosa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://springandsummer.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Spring &{'\n'}Summer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://zigmajones.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Zigma{'\n'}Jones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.daisybloomdesigns.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Daisy{'\n'}bloom{'\n'}design</Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row', alignSelf:'center', paddingTop:5}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://nilsonline.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Nils{'\n'}Store</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.fashionbug.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Fashion{'\n'}Bug</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://midnightdivas.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Midnightdivas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://zigzag.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>ZigZag</Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row', alignSelf:'center', paddingTop:5}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.nolimit.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Nolimit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.tfo.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>The{'\n'}Factory{'\n'}Outlet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://coolplanet.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Cool{'\n'}Planet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.sriyanidresspoint.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Sriyani{'\n'}Dress{'\n'}Point</Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row', alignSelf:'center', paddingTop:5}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://odel.lk/home' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>ODEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.thilakawardhana.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Thilakawardhana</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://foaclothing.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>F.O.A</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://kellyfelder.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Kelly{'\n'}Felder</Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row', paddingTop:5}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://cibonline.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>CIB{'\n'}Shopping{'\n'}Center</Text>
        </TouchableOpacity>

        </View>

        <Text style={{textAlign:'center', paddingTop:10, paddingBottom:5, fontSize:18, fontWeight:'bold'}}>Cosmetics</Text>
        <View style={{flexDirection:'row', alignSelf:'center'}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://viana.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>VIANA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://lk.spaceylon.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>SPA{'\n'}CEYLON</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://www.luvesence.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>LuvEsence</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://britishcosmetics.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>British{'\n'}Cosmetics</Text>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row', alignSelf:'center', paddingTop:5}}>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://janet.lk/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>Janet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'center', paddingRight:10}}
          onPress={() => {this.props.navigation.navigate('Browser',{ url: 'https://foreverskinnaturals.com/' })}}>
          <Image source={require("./assets/btnimg.gif")}></Image>
          <Text style={{textAlign:'center'}}>4ever</Text>
        </TouchableOpacity>

        </View>

      </ScrollView>
      
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
});