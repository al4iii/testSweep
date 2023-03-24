import React, { useRef } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { DATA } from '../store/store';
import Sweeper from '../components/Sweeper';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Main = ({ navigation }) => {
  const swipeUpDownRef = useRef();
  const data = DATA.data

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        onPress={() => swipeUpDownRef?.current?.showFull()}
        style={styles.button}
      >
        <Text style={{ fontSize: 25 }}>
          Open Sweep
        </Text>
      </TouchableOpacity>
      <Sweeper swipeUpDownRef={swipeUpDownRef} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#696969',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#708090',
    padding: 10,
    margin: 15
  },
});

export default Main;

