/**
 * @format
 */
import App from '@monorepo/common';
import * as React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native';
import {name as appName} from './app.json';

const Encapsulator = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <App text="Mobil" />
    </SafeAreaView>
  );
};

AppRegistry.registerComponent(appName, () => Encapsulator);
