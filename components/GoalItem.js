import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ goals, onDeleteItem }) {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        data={goals}
        keyExtractor={(item, index) => {
          return item._id;
        }}
        renderItem={(itemData) => {
          return (
            <View style={styles.viewList}>
              <Pressable
                android_ripple={{color:'#48089c'}}
                onPress={onDeleteItem.bind(this, itemData.item._id)}
                style={({pressed}) => pressed && styles.pressedItem}
              >
                <Text style={styles.textList}>{itemData.item.goal}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 5,
    marginTop:10
  },
  textList: {
    color: "white",
    padding: 15,
  },
  viewList: {
    marginHorizontal: 15,
    marginVertical:5,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.8
  }
});

export default GoalItem;
