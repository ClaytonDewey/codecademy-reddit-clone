export const API_URL = 'https://www.reddit.com';

export const getPosts = async (subreddit) => {
  const response = await fetch(`${API_URL}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_URL}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getComments = async (link) => {
  const response = await fetch(`${API_URL}${link}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
