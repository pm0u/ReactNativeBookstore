/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import BookCard from './BookCard'

type Props = {};
export default class App extends Component<Props> {

  state = {
    books: [],
  }

  toggleCart = (id) => {
    console.log(id)
    this.setState(prevState => ({
      books: [...prevState.books.map(book => {
        if (book.id === id) book.inCart = !book.inCart
        return book
        })]
      }))
    }

  componentDidMount = async () => {
    const bookStoreResponse = await fetch('https://collective-api-pm.herokuapp.com/api/books')
    const books = await bookStoreResponse.json()
    console.log('setting state', books)
    this.setState(() => ({
      books
    }))
  }
  render() {
    return (
    <View>
      <FlatList data={this.state.books}
        renderItem={({item}) => <BookCard {...item} toggleCart={this.toggleCart}/>}
        keyExtractor={book => book.id.toString()}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
