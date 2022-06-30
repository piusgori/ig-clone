import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_photo: USERS[0].image,
        comments: [
            {user: 'theqazman', comment: 'Wow! This is lit mahn ! 😂😂'},
            {user: 'amaanath.dev', comment: 'Once I wake up I will be ready to code this up'}
        ]
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/06/22/08/37/children-817365__340.jpg',
        user: USERS[1].user,
        likes: 1258,
        caption: 'My Oh My 👼',
        profile_photo: USERS[1].image,
        comments: [
            {user: 'maximillian', comment: 'The cutest ones of all'},
            {user: 'janice', comment: 'Wanna have some like them'}
        ]
    },
]