import { Text, StyleSheet, Pressable, View, TextInput } from "react-native";
import Colors from "../../../constants/Colors";

const Register = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.headerText}>Create account</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.nameInput}
          placeholder="Full Name"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="E-mail"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Password"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
          secureTextEntry={'true'}
        />
        <TextInput
          style={styles.nameInput}
          placeholder="Confirm Password"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
          secureTextEntry={'true'}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Age"
          keyboardType="number-pad"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Height"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Weight"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
        <TextInput
          style={styles.smallInput}
          placeholder="Gender"
          placeholderTextColor={Colors.secondary100}
          textAlign={"center"}
        />
      </View>

      <Pressable style={styles.button} >
        <Text style={styles.buttonText} >Register</Text>
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.primary200,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 35,
    marginTop:25,
    marginBottom: 25,
  },
  inputContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    marginBottom:50
  },
  nameInput: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.secondary100,
    color: "#FFFFFF",
    marginVertical:13,
    marginHorizontal:5
  },
  smallInput: {
    width: 145,
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.secondary100,
    color: "#FFFFFF",
    marginVertical:13,
    marginHorizontal:5
  },
  button: {
    borderColor: "white",
    backgroundColor: Colors.secondary100,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    fontSize: 50,
    textAlign: "center",
  },
  buttonText:{
    color:Colors.primary200
  }
});
