// screens/BlogDetails.js

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlogDetails extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Blog Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Blog"
          onPress={() => this.props.navigation.navigate('Blog')}
        />
      </View>
    );
  }
}

export default BlogDetails;