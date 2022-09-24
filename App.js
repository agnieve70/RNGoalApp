import React, { useState, useEffect } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { createGoal, deleteGoal, getGoals } from "./fetch_api/goals";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [actionTrigger, setActionTrigger] = useState(0);
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function loadGoals() {
      const result = await getGoals();
      setGoals(result);
    }

    loadGoals();
  }, [actionTrigger]);

  function goalInputHandler(e) {
    setText(e);
  }

  function showAlert(title, message){
    return Alert.alert(
      title,
      message,
      [
        {
          text: "Okay",
          style: "okay",
        },
      ],
    );
  }

  async function addGoalHandler() {

    try {
      const result = await createGoal(text);
      if(result.error) return showAlert('Goal cannot be added.', result.error.message) ;
      if(result) setActionTrigger(prev => prev + 1);
      setShowModal(false);
    } catch (error) {
      showAlert();
      // console.error(error);
    }
  }

  async function deleteHandler(id) {
    try {
      const result = await deleteGoal(id);
      if(result.error) return showAlert('Goal cannot be deleted.', result.error.message) ;
      if(result) setActionTrigger(prev => prev + 1);
      setShowModal(false);
    } catch (error) {
      showAlert();
      // console.error(error);
    }
  }

  return (

    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.modalButton}>
          <Button onPress={() => setShowModal(!showModal)} title={'Add New Goal'} color={'#b180f0'} />
        </View>
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <GoalItem goals={goals} onDeleteItem={deleteHandler} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  modalButton: {
    paddingHorizontal: 15
  }
});
