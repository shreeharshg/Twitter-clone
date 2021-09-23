import React from 'react'
import './Widget.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import { Search } from '@material-ui/icons';

function Widget() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
                <Search className="widgets_searchIcon" />
                <input type="text" placeholder='search twitter'/>
            </div>

            <div className="widgets_widgetcontainter">
                <h2>What's Happening</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius voluptatibus dolores dicta ipsam optio omnis repellat officia nesciunt voluptas velit obcaecati dignissimos, quo cum aut praesentium perspiciatis magni quas laudantium.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius voluptatibus dolores dicta ipsam optio omnis repellat officia nesciunt voluptas velit obcaecati dignissimos, quo cum aut praesentium perspiciatis magni quas laudantium.</p>

                <TwitterTweetEmbed />
                <TwitterTimelineEmbed />
                
            </div>
        </div>
    );
}

export default Widget
