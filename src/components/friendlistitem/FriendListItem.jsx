import css from "./FriendListItem.module.css";
export default function FriendListItem ({avatar, name, isOnline}) {
    return (
     <div>
       <img src={avatar} alt="Avatar" width="48" className={css.imgItem}/>
       <p className={css.nameItem}>{name}</p>
       <p className={`${css.statusText} ${isOnline ? css.onlineText : css.offlineText}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
     </div>
    )
}