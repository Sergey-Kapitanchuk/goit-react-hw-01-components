import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem';

export const FriendList = ({friends}) => { 
    return (
        <ul className="friend-list">
        <FriendListItem friends={friends}/>
        </ul>
    )
};