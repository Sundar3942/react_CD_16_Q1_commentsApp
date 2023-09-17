import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    name: '',
    comment: '',
    commentCount: 0,
  }

  onChangeNameInput = event => {
    const nameInput = event.target.value
    this.setState({name: nameInput})
  }

  onChangeTextArea = event => {
    const textAreaInput = event.target.value
    this.setState({comment: textAreaInput})
  }

  addButtonHandler = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newElement = {id: uuidv4(), name, comment, liked: false}
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newElement],
      name: '',
      comment: '',
      commentCount: prevState.commentCount + 1,
    }))
  }

  onDeleteHandler = id => {
    const {commentList} = this.state
    console.log(commentList)
    const filteredList = commentList.filter(each => each.id !== id)
    console.log(filteredList)
    this.setState(prevState => ({
      commentList: filteredList,
      commentCount: prevState.commentCount - 1,
    }))
  }

  render() {
    const stateDetails = this.state
    const {name, comment, commentCount, commentList} = stateDetails

    return (
      <div className="page">
        <div className="comment-add-section">
          <form onSubmit={this.addButtonHandler}>
            <h1>Comments</h1>
            <p className="comment-section-para">
              Say something about 4.0 technologies
            </p>
            <input
              id="input"
              className="text-input"
              placeholder="Your Name"
              type="text"
              value={name}
              onChange={this.onChangeNameInput}
            />
            <br />
            <textarea
              id="area-input"
              className="text-area-input"
              placeholder="Your Comment"
              rows="8"
              cols="40"
              value={comment}
              onChange={this.onChangeTextArea}
            />
            <br />
            <button className="btn" type="submit">
              Add Comment
            </button>
          </form>
          <div>
            <img
              className="comments-main-image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <p>
          <span className="commentCount">{commentCount}</span> Comments
        </p>
        <ul type="none">
          {commentList.map(each => (
            <CommentItem
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              key={each.id}
              eachDetails={each}
              onDeleteHandler={this.onDeleteHandler}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
