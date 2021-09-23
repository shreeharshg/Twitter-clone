import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react'
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@material-ui/icons';


const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName} <span className='post_headerSpecial'>
                                {verified && <VerifiedUserIcon className='post_badge' />}@{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} />
                <div className="post_footer">
                    <ChatBubbleOutline fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small'/>
                </div>
            </div>
        </div>
   )
}
)

export default Post
