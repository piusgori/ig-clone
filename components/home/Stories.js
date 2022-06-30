import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react';
import { USERS  } from '../../data/users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story, index) => {
                return(
                    <View key={index} style={{alignItems: 'center'}}>
                        <Image style={styles.story} source={{uri: story.image}}></Image>
                        <Text style={{color: 'white', textAlign: 'center'}}>{story.user.length > 11 ? story.user.slice(0, 10).toLocaleLowerCase() + '...' : story.user.toLowerCase()}</Text>
                    </View>
                )
            })}
        </ScrollView>
    </View>
  )
}

export default Stories;

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',

    },

})