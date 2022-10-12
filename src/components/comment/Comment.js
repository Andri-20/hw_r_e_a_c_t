import css from './Comment.module.css'
const Comment = ({comment}) => {
    return (
        <div className={css.comment}>
            <h4>{comment.id}--{comment.name}</h4>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
};
export {Comment}