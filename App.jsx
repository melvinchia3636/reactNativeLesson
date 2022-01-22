import React, { useLayoutEffect, useState } from 'react';
import {
  Text,
  Pressable,
  StatusBar,
  LayoutAnimation,
  View,
  Platform,
  UIManager,
} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function App() {
  const [currentAlign, setCurrentAlign] = useState('center');
  const [currentJustify, setCurrentJustify] = useState('center');

  useLayoutEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [currentAlign, currentJustify]);

  return (
    <>
      <View style={{
        backgroundColor: 'white',
        padding: 20,
        width: '100%',
      }}
      >
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#94A3B8',
          marginBottom: 8,
        }}
        >
          Align Items
        </Text>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        >
          {['flex-start', 'center', 'flex-end'].map((e, i) => (
            <Pressable
              style={{
                backgroundColor: currentAlign !== e ? 'white' : '#22C55E',
                borderWidth: 2,
                borderColor: '#22C55E',
                flex: 1,
                paddingVertical: 10,
                marginHorizontal: i === 1 ? 6 : 0,
              }}
              onPress={() => setCurrentAlign(e)}
            >
              <Text style={{
                color: currentAlign === e ? 'white' : '#22C55E',
                textAlign: 'center',
              }}
              >
                {e}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 6,
        }}
        >
          {['stretch', 'baseline'].map((e, i) => (
            <Pressable
              style={{
                backgroundColor: currentAlign !== e ? 'white' : '#22C55E',
                borderWidth: 2,
                borderColor: '#22C55E',
                flex: 1,
                paddingVertical: 10,
                marginRight: !i ? 6 : 0,
              }}
              onPress={() => setCurrentAlign(e)}
            >
              <Text style={{
                color: currentAlign === e ? 'white' : '#22C55E',
                textAlign: 'center',
              }}
              >
                {e}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          color: '#94A3B8',
          marginBottom: 8,
          marginTop: 20,
        }}
        >
          Justify Content
        </Text>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
        >
          {['flex-start', 'center', 'flex-end'].map((e, i) => (
            <Pressable
              style={{
                backgroundColor: currentJustify !== e ? 'white' : '#22C55E',
                borderWidth: 2,
                borderColor: '#22C55E',
                flex: 1,
                paddingVertical: 10,
                marginHorizontal: i === 1 ? 6 : 0,
              }}
              onPress={() => setCurrentJustify(e)}
            >
              <Text style={{
                color: currentJustify === e ? 'white' : '#22C55E',
                textAlign: 'center',
              }}
              >
                {e}
              </Text>
            </Pressable>
          ))}
        </View>
        <View style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 6,
        }}
        >
          {['space-\nbetween', 'space-\naround', 'space-\nevenly'].map((e, i) => (
            <Pressable
              style={{
                backgroundColor: currentJustify !== e.replace('\n', '') ? 'white' : '#22C55E',
                borderWidth: 2,
                borderColor: '#22C55E',
                flex: 1,
                paddingVertical: 10,
                marginHorizontal: i === 1 ? 6 : 0,
              }}
              onPress={() => setCurrentJustify(e.replace('\n', ''))}
            >
              <Text style={{
                color: currentJustify === e.replace('\n', '') ? 'white' : '#22C55E',
                textAlign: 'center',
              }}
              >
                {e}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={{
        backgroundColor: '#F1F5F9',
        flex: 1,
        alignItems: currentAlign,
        justifyContent: currentJustify,
      }}
      >
        <View style={{
          width: 80,
          height: 80,
          backgroundColor: '#22C55E',
        }}
        />
        <View style={{
          width: 80,
          height: 80,
          backgroundColor: '#4ADE80',
        }}
        />
        <View style={{
          width: 80,
          height: 80,
          backgroundColor: '#86EFAC',
        }}
        />
      </View>
      <StatusBar backgroundColor="#22C55E" />
    </>
  );
}
