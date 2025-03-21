import FriendListItem from '../friendlistitem/FriendListItem.jsx'
export default function FriendList ({friends}) {
    return (
    <div>
        <ul>
  {friends.map(friend => (
    <li key={friend.id}>
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