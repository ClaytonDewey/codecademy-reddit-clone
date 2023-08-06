import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

type CommentProps = {};

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

const Comment: React.FC<CommentProps> = () => {
  return (
    <StyledComment>
      <div className='comment-meta'>
        <img
          src='https://api.adorable.io/avatars/10/StarKiller32'
          alt='StarKiller32'
          className='comment-image'
        />
        <p className='comment-author'>StarKiller32</p>
        <p className='comment-date'>6 hours ago</p>
      </div>

      <div className='comment-body'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel
        dolores recusandae consequatur ex quae.
      </div>
    </StyledComment>
  );
};
export default Comment;
