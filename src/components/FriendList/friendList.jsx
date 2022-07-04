import PropTypes from 'prop-types';
import { FriendListItem } from './friendListItem';
import css from "components/FriendList/friendList.module.css"

export const FriendList = ({friends}) => { 
    return (
        <ul className={css.list}>
        <FriendListItem friends={friends}/>
        </ul>
    )
};
