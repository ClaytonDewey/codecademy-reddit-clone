import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { CommentObj } from '../types';

type CommentProps = {
  key: number;
  comment: CommentObj;
};

const StyledComment = styled.div`
  background-color: #fff;
  padding: 8px;
  font-size: 12px;

  .comment-meta {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .comment-image {
    margin-right: 8px;
    border-radius: 50%;
    height: 28px;
    width: 28px;
  }

  .comment-author {
    font-weight: 700;
  }

  .comment-date {
    margin-left: auto;
    font-style: italic;
  }
`;

const Comment: React.FC<CommentProps> = ({ key, comment }) => {
  // console.log(comment);

  return (
    <StyledComment key={key}>
      <div className='comment-meta'>
        <img
          src={`https://api.adorable.io/avatars/10/${comment.author}`}
          alt={`${comment.author} profile`}
          className='comment-image'
        />
        <p className='comment-author'>{comment.author}</p>
        <p className='comment-date'>
          {moment.unix(comment.created_utc).fromNow()}
        </p>
      </div>

      <div className='comment-body'>{comment.body}</div>
    </StyledComment>
  );
};
export default Comment;
