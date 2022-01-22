import { StyleSheet, Text, SafeAreaView, Pressable, StatusBar } from 'react-native';
import { useState } from "react";

export default function App() {

  let [value, setValue] = useState(0)

  return (
    <>
      <SafeAreaView style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Text style={{
          color: "#22C55E",
          fontSize: 64
        }}>{value}</Text>
        <Pressable style={{
          backgroundColor: "#22C55E",
          paddingHorizontal: 50,
          paddingVertical: 20,
          borderRadius: 6,
          elevation: 4,
          margin: 50
        }}
        onPress={() => {
          setValue(value+1);
          console.log(value)
        }}>
          <Text style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 20
          }}>Add to value</Text>
        </Pressable>
      </SafeAreaView>
      <StatusBar backgroundColor="#22C55E" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
