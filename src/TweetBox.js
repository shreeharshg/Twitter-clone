import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react'
import './TweetBox.css';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Shreeharsh',
            username: 'great',
            verified: true,
            image: tweetImage,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ig2twaRUyItZSNZBrN5q2Q2RG4UVqBJKKUKRSSbsjM75_B-KlMZwmltKV_bP1X-fvsQd6LUPvXY&usqp=CAU',
            text: tweetMessage
        });

        setTweetImage('');
        setTweetMessage('');

    }

    return (
        <div className='tweetBox'>
            <form >
                <div className="tweetBox__input">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ig2twaRUyItZSNZBrN5q2Q2RG4UVqBJKKUKRSSbsjM75_B-KlMZwmltKV_bP1X-fvsQd6LUPvXY&usqp=CAU"/>
                    <input
                        onChange={(e)=> setTweetMessage(e.target.value)}
                        value={tweetMessage} type='text' placeholder="What's happening?" />
                </div>
                <input
                    onChange={(e)=> setTweetImage(e.target.value)}
                        value={tweetImage}
                    className='tweetBox__ImageInput' placeholder='Enter Image URL' type='text' />
                <Button
                    onClick={sendTweet}
                    type='submit' className='tweetBox__tweetButton'>Tweet</Button>

            </form>
        </div>
    )
}

export default TweetBox
