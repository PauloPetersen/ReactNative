import { StyleSheet, View, StatusBar, Image, Text, TextInput } from "react-native";
import Menu from 'react-native-vector-icons/Feather'
import Pesquisa from 'react-native-vector-icons/AntDesign'
import Seta from 'react-native-vector-icons/AntDesign'
import Carro from 'react-native-vector-icons/AntDesign'
import Logo from './assets/logo.png'
import imagemUdemy from './assets/imagemUdemy.jpeg'


export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto"/>

      <View style={styles.navBar}>
        <View style={styles.nav}>
          <Menu name="menu" style={{ marginLeft: 15, fontSize: 20 }} size={20} color="#000"/>
        </View>
        <View style={styles.nav1}>
          <Image source={Logo} style={{ width: 80, height: 50, alignItems:"center" }} />
        </View>

        <View style={styles.nav2}>
          <Pesquisa style={{ marginRight: 25 }} name="search1" size={20} color="#000"/>
          <Carro style={{ marginRight: 15 }} name="shoppingcart" size={20} color="#000"/>
        </View>
      </View>
      <Image source={imagemUdemy} style={{ width: 700, height: 240, marginRight: 250 }} />

      <Text style={{ marginTop: 10, marginBottom: 5, fontWeight: "600", fontSize: 25, textAlign: "left", width: "90%" }}>Aprendizado que te ajuda </Text>
      

   <View style={{ textAlign: "left", width: "90%" }}>
      
        <Text >
        Habilidades para o presente (e seu futuro). Comece agora conosco. {' '}
        </Text>

   </View>

      <View style={{ height: 45, alignItems: "center", marginTop: 15, borderWidth: 0.5, padding: 10, width: "90%", flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput placeholder="O que quer aprender?" />
        <Pesquisa name="search1" size={20} color="#000"/>
      </View>

      <Text style={{ fontWeight: "600", marginTop: 45, fontSize: 25, textAlign:"left", width: "90%" }}> Uma ampla seleção de cursos</Text>


      <Text style={{ marginTop: 15, textAlign:"left", width: "90%", fontSize: 19 }}>Escolha entre 204.000 cursos em vídeo online com novas adições publicadas mensalmente</Text>


      <View style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "dotted",
        borderColor: "#A9A9A9",
        borderTopWidth: 1, width: "90%"
      }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Python</Text>
        <Seta name="down" size={16} color="#000"/>
      </View>
      <View style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "dotted",
        borderColor: "#A9A9A9",
        borderTopWidth: 1, width: "90%"
      }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Excel</Text>
        <Seta name="down" size={16} color="#000"/>
      </View>
      <View style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "dotted",
        borderColor: "#A9A9A9",
        borderTopWidth: 1, width: "90%"
      }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>Desenvolvimento Web</Text>
        <Seta name="down" size={16} color="#000"/>
      </View>
      <View style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "dotted",
        borderColor: "#A9A9A9",
        borderTopWidth: 1, width: "90%"
      }}>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>JavaScript</Text>
        <Seta name="down" size={16} color="#000"/>
      </View>
      <View style={{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle: "dotted",
        borderColor: "#A9A9A9",
        borderTopWidth: 1, width: "90%"
      }}/>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",

  },
  navBar: {
    width: "100%",
    height: "6%",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nav: {

    width: "20%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center"

  },
  nav1: {

    width: "30%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

  },
  nav2: {

    width: "20%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",


  },

  });



