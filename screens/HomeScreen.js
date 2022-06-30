import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTabs from '../components/home/BottomTabs';
import { bottomTabIcons } from '../data/bottom-tab-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      <Stories></Stories>
      <ScrollView>
        {POSTS.map((post, index) => {
          return (
              <Post post={post} key={index}></Post>
          )
        })}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons}></BottomTabs>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        height: '100%',
        backgroundColor: 'black',
        color: 'white'
    }
})