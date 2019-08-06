/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { OaksBleLockLibrary, RNBlePlugin } from 'newlib2';
const getToken = async (mac) => {
  return {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0bmVySWQiOjEsImRldmljZU1hYyI6IkRGOkFGOjI2OjVDOkZFOjBCIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNTY1MDc0NjY0LCJleHAiOjE1NjUxNjEwNjR9.6Uz-AvPAeJ-kzLAimR4FEpazZB0tL7CJzJLg-jWtxwc",
    expiresAt: 1565161064000
  };
};
const oakobj = new OaksBleLockLibrary(getToken, new RNBlePlugin());

console.log('oakobj');
console.log('oakobj',oakobj);
const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TouchableOpacity onPress={() => {
            console.log('scanning started');
            oakobj.on('foundDevice', (lock) => {
              console.log('lock found ', lock)
            });
            oakobj.startScan(20);
          }}>
            <Text > Scan </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
