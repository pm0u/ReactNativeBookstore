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
import SideMenu from 'react-native-side-menu'
import SideCart from './SideCart'
import { SearchBar } from 'react-native-elements'

type Props = {};
export default class App extends Component<Props> {

  state = {
    books: [],
    filterBooks: []
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

  filterBooks = filter => {
    console.log(filter)
    this.setState(prevState => {
      return ({
        filterBooks: [...prevState.books.filter(book => {
          return book.title.toLowerCase().includes(filter.toLowerCase())
        })]
      })
    })

  }

  componentDidMount = async () => {
    const bookStoreResponse = await fetch('https://collective-api-pm.herokuapp.com/api/books')
    const books = await bookStoreResponse.json()
    console.log('setting state', books)
    this.setState(() => ({
      books,
      filterBooks: books
    }))
  }

  render() {
    return (
      <SideMenu menu={<SideCart cart={this.state.books.filter(book => book.inCart)}/>}>
              <View style={styles.topBar}><SearchBar lightTheme={true} clearIcon onChangeText={this.filterBooks}/></View>
    <View style={{backgroundColor:'white', height:'100%'}}>
      <FlatList contentContainerStyle={{paddingTop: 50, paddingBottom:20 }} data={this.state.filterBooks} extraData={this.state.filterBooks}
        renderItem={({item}) => <BookCard {...item} toggleCart={this.toggleCart}/>}
        keyExtractor={book => book.id.toString()}
        />
    </View>
    </SideMenu>
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
  topBar: {
    position: 'absolute',
    top:0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
    zIndex: 1,
  }
})
