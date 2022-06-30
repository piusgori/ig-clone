import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';

const postFooterIcons = [
    {name: 'Like', imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png', likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like.png'},
    {name: 'Comment', imageUrl: 'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble.png'},
    {name: 'Share', imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/paper-plane.png'},
    {name: 'Save', imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/bookmark.png',},
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
        <Divider width={1} orientation='vertical'></Divider>
        <PostHeader post={post}></PostHeader>
        <PostImage post={post}></PostImage>
        <View style={{marginHorizontal: 15, marginTop: 10}}>
            <PostFooter></PostFooter>
            <Likes post={post}></Likes>
            <Caption post={ post }></Caption>
            <CommentsSection post={ post }></CommentsSection>
            <Comments post={ post }></Comments>
        </View>
    </View>
  )
}

const PostHeader = ({post}) => {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: post.profile_photo}} style={styles.story}></Image>
                <Text style={{color: 'white', marginLeft: 5, fontWeight: 'bold'}}>{post.user}</Text>
            </View>
            <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
        </View>
    )
}

const PostImage = ({post}) => (
    <View style={{width: '100%', height: 450}}>
        <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}}></Image>
    </View>
)

const PostFooter = () => (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.leftFooters}>
            <Icon imgStyle={styles.footerIcon} imgUrl={ postFooterIcons[0].imageUrl}></Icon>
            <Icon imgStyle={styles.footerIcon} imgUrl={ postFooterIcons[1].imageUrl}></Icon>
            <Icon imgStyle={styles.footerIcon} imgUrl={ postFooterIcons[2].imageUrl}></Icon>
        </View>
        <View>
            <Icon imgStyle={styles.footerIcon} imgUrl={ postFooterIcons[3].imageUrl}></Icon>
        </View>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri: imgUrl}}></Image>
    </TouchableOpacity>
) 

const Likes = ({ post }) => (
    <View style={{flexDirection: 'row', marginTop: 4}}>
        <Text style={{color: 'white', fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
);

const Caption = ({ post }) => (
    <View style={{marginTop: 5}}>
        <Text style={{color: 'white'}}>
            <Text style={{fontWeight: '600'}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentsSection = ({ post }) => {

    return(
        <View style={{marginTop: 5}}>
            {post.comments.length > 0 && <Text style={{color: 'gray'}}>View {post.comments.length > 1 ? `all ${post.comments.length} comments` : `${post.comments.length}comment`}</Text>}
        </View>
    )
}

const Comments = ({post}) => (
    <View>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{color: 'white'}}>
                    <Text style={{fontWeight: '600'}}>{comment.user} </Text>
                    {comment.comment}
                </Text>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    footerIcon: {
      width: 33,
      height: 33  
    },
    leftFooters: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    }
})

export default Post;