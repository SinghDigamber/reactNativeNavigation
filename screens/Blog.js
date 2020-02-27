// screens/Blog.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Blog extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Blog Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Blog Details"
          onPress={() => this.props.navigation.navigate('BlogDetails')}
        />
      </View>
    );
  }
}

export default Blog;