import React from 'react';
import styled from 'styled-components';
import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from 'react-icons/io5';
import { GoComment } from 'react-icons/go';
import avatar from '../assets/fcc.png';
import moment from 'moment';
import shortenNumber from '../utils/shortenNumber';
import { PostObj } from '../types';

type PostProps = {
  key: string;
  post: PostObj;
  // onToggleComments: (link: any) => void;
};

const PostContainer = styled.article`
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

  .post-body {
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

    .post-header {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-align: start;
      align-items: start;
      margin: 0 8px 8px;
      position: relative;
    }

    .post-avatar {
      flex: 0 0 auto;
    }

    .post-avatar img {
      display: inline-block;
      height: 20px;
      margin-right: 4px;
      vertical-align: middle;
      width: 20px;
      border-radius: 100%;
    }

    .post-meta {
      -ms-flex-align: center;
      align-items: center;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      overflow: hidden;
    }
    .subreddit {
      display: inline-block;
      font-weight: 700;
      font-size: 12px;
      display: inline;
      line-height: 20px;
      text-decoration: none;
      vertical-align: baseline;
      margin-right: var(--spacing-1);
    }

    .post-user {
      margin-right: var(--spacing-1);
    }

    .post-title {
      display: inline;
      padding-right: 5px;
      word-wrap: break-word;
      font-size: 18px;
      line-height: 22px;
    }

    .post-image {
      margin-top: 8px;
      max-height: 512px;
      position: relative;

      img {
        display: block;
        max-width: 100%;
        position: relative;
        margin: 0 auto;
        max-height: 512px;
      }
    }

    .post-footer {
      display: flex;
      align-items: center;
      flex-direction: row;
      min-height: 40px;
      font-weight: 700;
      font-size: 12px;
      overflow: hidden;
      padding: 0 8px 0 4px;
      flex-grow: 1;

      button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;
        line-height: 16px;
        color: var(--color-text-body);
        transition: opacity 0.25s ease-in-out;

        &:hover {
          opacity: 0.75;
        }
      }

      svg {
        margin-right: 6px;
        height: 20px;
        font-size: 20px;
        font-weight: 400;
        line-height: 20px;
        vertical-align: middle;
        width: 20px;
      }
    }
  }
`;

const Post: React.FC<PostProps> = ({ key, post }) => {
  return (
    <PostContainer key={key}>
      <div className='vote'>
        <button className='vote-up'>
          <IoArrowUpCircleOutline />
        </button>
        <div className='vote-count'>vote</div>
        <button className='vote-down'>
          <IoArrowDownCircleOutline />
        </button>
      </div>
      <div className='post-body'>
        <div className='post-header'>
          {/* <div className='post-avatar'>
            <img src={avatar} alt='' role='presentation' />
          </div> */}
          <div className='post-meta'>
            <div className='subreddit'>r/{post.subreddit}</div>
            <div className='post-user'>Posted by u/{post.author}</div>
            <div className='post-date'>
              {moment.unix(post.created_utc).fromNow()}
            </div>
          </div>
        </div>
        <h3 className='post-title'>{post.title}</h3>

        <div className='post-image'>
          <img src={post.url} alt='' />
        </div>

        <div className='post-footer'>
          <button
            // onClick={() => onToggleComments(post.permalink)}
            aria-label='Show comments'>
            <GoComment />
            <span>{shortenNumber(post.num_comments, 1)} Comments</span>
          </button>
        </div>
      </div>
    </PostContainer>
  );
};
export default Post;
