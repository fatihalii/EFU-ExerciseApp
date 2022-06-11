import { View, StyleSheet, SafeAreaView, ScrollView, Text, RefreshControl } from "react-native";
import Colors from "../../constants/Colors";
import { useState, useEffect, useCallback } from "react";
import { auth, db } from "../../db/firebase";
import { getDoc, doc } from "firebase/firestore";
import ExerciseProgramButton from "../../components/ExerciseProgramButton";



const Routine = () => {
  const user = auth.currentUser;

  const [programs, setPrograms] = useState({});
  const [refreshing, setRefreshing] =useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getPrograms();
  }, []);

  const getPrograms = () => {
    getDoc(doc(db, "userPrograms", user?.uid))
      .then((response) => {
        const data = response.data();
        setPrograms(data);
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);
      });
  };
  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
      
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        <View style={styles.viewContainer}>
          {programs.ArmGym === true ? (
        <ExerciseProgramButton Type={"ARM"} Place={"GYM"} Nav={'ArmGym'} />
        ) : null}
        {programs.ArmHouse === true ? (
          <ExerciseProgramButton Type={"ARM"} Place={"HOUSE"} Nav={'ArmHouse'} />
        ) : null}
          {programs.FullBodyGym === true ? (
            <ExerciseProgramButton
              Type={"FULLBODY"}
              Place={"GYM"}
              Nav={"FullbodyGym"}
            />
          ) : null}
          {programs.FullBodyHouse === true ? (
            <ExerciseProgramButton
              Type={"FULLBODY"}
              Place={"HOUSE"}
              Nav={"FullbodyHouse"}
            />
          ) : null}
          {programs.LegsGym === true ? (
            <ExerciseProgramButton
              Type={"LEGS"}
              Place={"GYM"}
              Nav={"LegsGym"}
            />
          ) : null}
          {programs.LegsHouse === true ? (
            <ExerciseProgramButton
              Type={"LEGS"}
              Place={"HOUSE"}
              Nav={"LegsHouse"}
            />
          ) : null}
          {programs.TricepsGym === true ? (
            <ExerciseProgramButton
              Type={"TRICEPS"}
              Place={"GYM"}
              Nav={"TricepsGym"}
            />
          ) : null}
          {programs.TricepsHouse === true ? (
            <ExerciseProgramButton
              Type={"TRICEPS"}
              Place={"HOUSE"}
              Nav={"TricepsHouse"}
            />
          ) : null} 
        </View>
      </ScrollView>
    </View>
  );
};

export default Routine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
  },
  viewContainer: {
    alignItems: "center",
    backgroundColor: Colors.primary100,
    marginTop:50
  },
});
