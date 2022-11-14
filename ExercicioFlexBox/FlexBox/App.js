import { StyleSheet, View, StatusBar } from "react-native";

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto"/>

      <View style={styles.lightBlue} />

      <View style={styles.portraitView}>
        <View style={styles.orange} />
        <View style={styles.orangeRectangle} />
      </View>

      <View style={styles.middleView}>
        <View style={styles.purplee} />
        <View style={styles.bluee} />
      </View>

      <View style={styles.lightBlue} />

      <View style={styles.endView} >

        <View style={styles.orange} />
        <View style={styles.orange} />
        <View style={styles.orange} />
        <View style={styles.orange} />
        <View style={styles.orange} />
        <View style={styles.orange} />

      </View>
      <View style={styles.blueFooter} />

    </View >

  );
}


const styles = StyleSheet.create({
  
  container: {
    
    flex: 1,
    alignItems: "center",
  },

  lightBlue: {

    backgroundColor: "#4fe3c1",
    width: "100%",
    height: "2%",
  },

  portraitView: {

    marginTop: 5,
    alignItems: "center",
    width: "100%",
    height: 200,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  orange: {

    margin: 20,
    width: 90,
    height: 92,
    backgroundColor: "#f8a82b",
  },

  orangeRectangle: {

    width: 150,
    height: 25,
    backgroundColor: "#f8a82b",
  },

  middleView: {
    
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
  },

  purplee: {

    width: "50%",
    height: 70,
    backgroundColor: "#a900fd"
  },

  bluee: {

    width: "50%",
    height: 70,
    backgroundColor: "#5485e1"
  },

  endView: {

    marginTop:55,
    marginBottom:55,
    display: "flex",
    width: "100%",
    height: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    justifyContent: "center",
  },

blueFooter: {

  width: "100%",
  height: 70,
  backgroundColor: "#5485e1"
},

});