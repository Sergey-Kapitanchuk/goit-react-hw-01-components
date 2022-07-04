import PropTypes from 'prop-types';
import css from "components/FriendList/friendListItem.module.css"

export const FriendListItem = ({ friends }) => {
    return (
        friends.map(friend => (
            <li className={css.item} key={friend.id}>
                <span className={friend.isOnline ? css.online : css.offline}>{friend.isOnline}</span>
                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={css.name}>{friend.name}</p>
            </li>
        ))
    )
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired, 
    }).isRequired,
  ).isRequired,
};
