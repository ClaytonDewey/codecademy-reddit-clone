export interface PostObj {
  id: string;
  author: string;
  created_utc: number;
  permalink: string;
  num_comments: number;
  title: string;
  url: string;
  subreddit_name_prefixed: string;
  showingComments: boolean;
  comments: [];
  link_flair_text: string;
  link_flair_background_color: string;
  link_flair_text_color: string;
}

export interface CommentObj {
  id: string;
  author: string;
  created_utc: number;
  body: string;
}
