import css from './FriendList.module.css'
import FriendListItem from '../friendlistitem/FriendListItem.jsx'
export default function FriendList ({friends}) {
    return (
    <div >
        <ul className={css.friendlist}>
  {friends.map(friend => (
    <li key={friend.id} className={css.friendListItem}>
      <FriendListItem 
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ))}
</ul>
    </div>
    )
}