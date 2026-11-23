const POSTS_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * Should return an array of posts with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export async function getPosts() {
  console.log('[getPosts]: fetching list of posts');

  const url = POSTS_ENDPOINT;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data = await response.json();

  return data;
}

/**
 * Should return a single post object with the following properties:
 * - userId
 * - id
 * - title
 * - body
 */
export async function getSinglePost(postId) {
  if (!postId) {
    throw new Error('[getSinglePost]: postId parameter is required!');
  }

  console.log('[getSinglePost]: fetching post with id:', postId);

  const url = `${POSTS_ENDPOINT}${postId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }

  const data = await response.json();

  return data;
}
