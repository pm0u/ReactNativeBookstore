import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Platform, StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Card } from 'react-native-elements'

class BookCard extends Component {

  render() {
    return (
      <Card title={this.props.title} >
      <Text>{this.props.description}</Text>
    <View style={styles.container}>
          <TouchableOpacity
      style={styles.cartButton}
      onPress={() => this.props.toggleCart(this.props.id)}>
      <Text style={styles.buttonText}>{this.props.inCart? 'Remove from Cart': 'Add to Cart'}</Text>
    </TouchableOpacity>
          <TouchableOpacity
      style={styles.linkButton}
      >
      <Text style={styles.buttonText}
        onPress={() => Linking.openURL(this.props.website)}>Visit Website</Text>
    </TouchableOpacity>


  </View>

      </Card>
    )
  }

}

const styles = StyleSheet.create({
  cartButton: {
    width: '50%',
    backgroundColor: '#ff5252',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkButton: {
    width: '40%',
    backgroundColor: '#1565c0',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: '#fff',
  },
});

export default BookCard;
