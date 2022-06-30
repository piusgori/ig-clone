import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react';
import AddNewPost from '../components/new-post/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, backgroundColor: 'black', height: '100%'}}>
        <AddNewPost></AddNewPost>
    </SafeAreaView>
  )
}

export default NewPostScreen