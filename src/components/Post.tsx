import heartIcon from '../assets/codicon_heart.svg'
import heartIconFilled from '../assets/codicon_heart_filled.svg'
import { PostInterface } from '../interfaces/post_interface'


export function Post({ title, description, created_at, is_favorite: isFavorite }: PostInterface) {
    return (
        <li className="post-list-item">
            <div className="post-list-item-header">
                <span>{created_at}</span>
                <button className="post-list-item-save" type="button">
                    <img src={isFavorite ? heartIconFilled : heartIcon} alt="" />
                </button>
            </div>
            <div className="post-list-item-details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    )
}