import css from './Profile.module.css'
export default function Profile ({name, tag, location, image, stats }) {
    return (
        <div className={css.profile}>
  <div>
    <img className={css.img}
      src={image}
      alt="User avatar"
    />
    <p className={css.name}>{name}</p>
    <p className={css.p}>@{tag}</p>
    <p className={css.p}>{location}</p>
  </div>

  <ul className={css.ul}>
    <li className={css.li}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={css.li}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={css.li}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>

</div>
    )
}