// Write your code here
import './index.css'

const CommentItem = props => {
  const {
    eachDetails,
    onDeleteHandler,
    initialContainerBackgroundClassNames,
  } = props
  const {id, name, comment} = eachDetails

  const onDelete = () => {
    onDeleteHandler(id)
  }

  const randomNumber = Math.floor(
    Math.random() * initialContainerBackgroundClassNames.length,
  )
  const commentAvatarBg = initialContainerBackgroundClassNames[randomNumber]

  return (
    <li className="comment-item">
      <div className="comment-section">
        <p className={`letter-avatar ${commentAvatarBg}`}>{name[0]}</p>
        <div>
          <h3>{name}</h3>
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-and-delete-section">
        <div className="like-container">
          <img
            className="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />

          <button type="button" className="like-btn">
            <p className="like-text">Like</p>
          </button>
        </div>
        <button
          data-testid="delete"
          className="delete-btn"
          type="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
