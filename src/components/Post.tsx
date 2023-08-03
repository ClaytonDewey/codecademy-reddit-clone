import React from 'react';
import styled from 'styled-components';
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from 'react-icons/io5';

type PostProps = {};

const PostContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding-left: 40px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  min-height: 88px;
  cursor: pointer;

  .vote {
    display: none;
  }

  .post-container {
    background-color: #fff;
    min-height: 88px;
    height: 100%;
    padding: 8px;
  }

  @media screen and (min-width: 640px) {
    .vote {
      width: 40px;
      border-left: 4px solid transparent;
      align-items: center;
      box-sizing: border-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-direction: column;
      flex-direction: column;
      left: 0;
      padding: 8px 4px 8px 0;
      position: absolute;
      top: 0;
    }

    .vote button {
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: initial;
      height: 24px;
      width: 24px;
      font-size: 22px;
    }

    .vote-count {
      margin: 4px 0;
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      pointer-events: none;
      word-break: normal;
    }
  }
`;

const Post: React.FC<PostProps> = () => {
  return (
    <PostContainer>
      <div className='vote'>
        <button className='vote-up'>
          <IoArrowUpCircleOutline />
        </button>
        <div className='vote-count'>vote</div>
        <button className='vote-down'>
          <IoArrowDownCircleOutline />
        </button>
      </div>
      <div className='post-container'>
        <h3 className='post-title'>Post title</h3>
      </div>
    </PostContainer>
  );
};
export default Post;
