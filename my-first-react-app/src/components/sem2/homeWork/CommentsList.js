import { useState } from "react";

function CommentsList() {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" },
  ]);
  const removeComment = (id) => {
    const updateComments = comments.filter((comment) => comment.id !== id);
    setComments(updateComments);
  };
  return (
    <>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.id} : {comment.text}
            <button onClick={() => removeComment(comment.id)}>удалить</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CommentsList;
