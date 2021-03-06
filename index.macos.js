/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native';

const defaultLayout = Dimensions.get('window');
import { UIExplorerList } from './UIExplorerList.macos';

export default class native extends Component {
  state: any;
  constructor() {
    super();
    this.state = {
      component: Welcome, //UIExplorerListBase.makeRenderable(BorderExample)
      layout: defaultLayout,
    };
  }

  render() {
    var Component = this.state.component;
    return (
      <View
        style={styles.container}
        onLayout={e => this.setState({ layout: e.nativeEvent.layout })}>
        <View style={[styles.leftPanel, { width: 300 }]}>
          <UIExplorerList
            openExample={component => this.setState({ component })}
          />
        </View>
        <View
          style={[styles.rightPanel, { width: this.state.layout.width - 300 }]}
          respondsToLiveResizing>
          {this.state.component && <Component />}
        </View>
      </View>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <View style={styles.welcomeWrapper}>
        <Text style={styles.welcomeText}>
          Choose an example on the left side
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  itemWrapper: {
    backgroundColor: '#eaeaea',
  },
  leftPanel: {
    width: 300,
  },
  rightPanel: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#999',
    fontSize: 20,
  },
});

AppRegistry.registerComponent('SetPropertiesExampleApp', () =>
  require('./SetPropertiesExampleApp')
);
AppRegistry.registerComponent('RootViewSizeFlexibilityExampleApp', () =>
  require('./RootViewSizeFlexibilityExampleApp')
);

AppRegistry.registerComponent('native', () => native);
