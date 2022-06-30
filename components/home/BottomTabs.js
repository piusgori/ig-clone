import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Divider } from 'react-native-elements';

const BottomTabs = ( { icons } ) => {
    const [activeTab, setActiveTab] = useState('Home');
    const Icon = ({ icon }) => {
        return(
            <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
                <Image source={{uri: activeTab === icon.name ? icon.active : icon.inactive}} style={[styles.icon, icon.name === 'Profile' ? styles.profilePic() : null, activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab) : null]}></Image>
            </TouchableOpacity>
        )
    }
  return (
      <View style={styles.wrapper}>
          <Divider width={1} orientation='vertical'></Divider>
        <View style={styles.container}>
        {icons.map((icon, index) => {
            return(
                <Icon key={index} icon={icon}></Icon>
            )
        })}
        </View>
      </View>
  )
}

export default BottomTabs;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30
    },
    profilePic : (activeTab = '' ) => ({
        borderRadius: 50,
        borderColor: '#fff', 
        borderWidth : activeTab === 'Profile' ? 2 : 0
    }),
    wrapper: {
        postion: 'absolute',
        width: '100%',
        bottom: '3%',
        zIndex: 999,
        backgroundColor: '#000',

    }
})