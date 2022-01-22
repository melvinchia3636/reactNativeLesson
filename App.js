import { StyleSheet, Text, SafeAreaView, Pressable, StatusBar } from 'react-native';
import { useState } from "react";

export default function App() {

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
          fontSize: 26
        }}>Coming Soon</Text>
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
