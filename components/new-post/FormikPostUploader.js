import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})

const PLACEHOLDER_IMAGE ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACACAMAAABDXWneAAAANlBMVEX///+hoaGYmJj8/PzNzc2wsLDR0dHs7Ozg4ODn5+fCwsLZ2dm1tbWbm5uenp719fW7u7uoqKi/7Z2tAAABk0lEQVR4nO3X3a6rIBBAYQERf8qg7/+yx1rbWHWfojfDxfoud0KyMpmNtKoAAAAAAAAAAAAAALjNNfUNSaU12GivirZXae3sNDQXjWqtj8tnBlp/erem5LLPKLc2k/FN7hnd1j6KkVhnnlFtTdYsQt4Z1dYhLqmxyztD629Lq5Ol1Z98OkN3vB90/7cGG0XsyVibaMfDH5XvrNQ/+pOptvNyHK8H7W/BKTc9l0P28y6ydVz2WGQ38RJb1+vByG5lC2wNa+phZctrdV7ercZ+fdEKad1cpuNnrLNpu7JltHZ+fEe129TvlS2iNVkR8xptEPPFbl6MJbQuG7pO0O9at4+wElpfG7pMsLf71PfAqyJa27VPQtUepjpfXJ9A/dbwmaDvjqXP2KGY1s2GTidjfcamQlrreNr3tbLeFdF6tqF/raz2+/X3VJ9sq9/qxpyxzqag3pqxrC/itVu73NTX81CzNRkbs9lBt7W9RLHVh6tqtVaZf/xdYiTqtKaHv6FVaa3cHTqpAAAAAAAAAAAAAID/+AeI4hprlM9EDAAAAABJRU5ErkJggg==';

const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE);



  return (
    <Formik initialValues={{caption: '', imageUrl: ''}} onSubmit={(values) => {console.log(values)}} validationSchema={uploadPostSchema} validateOnMount={true}>
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <View>
                <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <Image style={{width: 100, height: 100}} source={{uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMAGE}}></Image>
                    <View style={{flex: 1, marginLeft: 12}}>
                        <TextInput multiline={true} style={{color: 'white', fontSize: 20}} onChangeText={handleChange('caption')} onBlur={handleBlur('caption')} value={values.caption} placeholder='Write a Caption...' placeholderTextColor='gray'></TextInput>
                    </View>
                </View>
                <Divider width={0.2} orientation='vertical'></Divider>
                <TextInput onChange={(event) => {setThumbnailUrl(event.nativeEvent.text)}} onChangeText={handleChange('imageUrl')} onBlur={handleBlur('imageUrl')} value={values.imageUrl} style={{color: 'white', fontSize: 18}} placeholder='Enter Image url...' placeholderTextColor='gray'></TextInput>
                {errors.imageUrl && (
                    <Text style={{fontSize: 13, color: 'red'}}>{errors.imageUrl}</Text>
                )}
                <Button onPress={handleSubmit} title='Share' disabled={!isValid}></Button>
            </View>
        )}
    </Formik>
  )
}

export default FormikPostUploader;