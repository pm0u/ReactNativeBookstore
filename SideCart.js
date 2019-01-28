import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class SideCart extends Component {

  renderCartItems = () => {
    return this.props.cart.map(book => {
      return (<View key={book.id} style={styles.cartItem}><View><Text>{book.title}</Text></View><View><Text>${book.price.toFixed(2)}</Text></View></View>)
    })
  }

  render() {
    console.log('sideCart',this.props.cart)
    return (
      <View>
      <Text style={styles.cartTitle}>Cart</Text>
      <View style={styles.horizontalFlex}><View style={styles.horizontalLine} /></View>
      <View style={styles.cart}>{this.props.cart.length > 0 ? this.renderCartItems() : <View style={styles.nothing}><View><Text>Nothing in Cart!</Text></View></View>}</View>
      <View style={styles.horizontalFlex}><View style={styles.horizontalLine} /></View>
      <View style={styles.cartItem}><View><Text>Total</Text></View><View><Text>${this.props.cart.reduce((a,e) => a + e.price,0).toFixed(2)}</Text></View></View>
      </View>
    );
  }

}

export default SideCart;


const styles = {
  cartTitle: {
    fontSize:24,
    textAlign: 'center',
    color: 'black'
  },
  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '90%',
  },
  horizontalFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  cartItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginBottom: 10,
  },
  cart: {
    marginBottom: 10,
  },
  nothing: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 10,
  }
}
