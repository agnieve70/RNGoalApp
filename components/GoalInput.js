import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

function GoalInput({
  goalInputHandler,
  addGoalHandler,
  showModal,
  setShowModal,
}) {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.formContainer}>
        <Image style={styles.image} source={require("../assets/logo.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonController}>
        <View style={styles.button}>
            <Button
              color={"#f31282"}
              onPress={() => setShowModal(false)}
              title={"Cancel"}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={"#b180f0"}
              onPress={addGoalHandler}
              title={"Add Goal"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius:5,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonController: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
