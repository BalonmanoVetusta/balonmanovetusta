export const TWITTER_BASE_API_URL = "https://api.twitter.com";
export const TWITTER_DEFAULT_MAX_RESULTS = 10;

export const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN || null;
export const TWITTER_USERID = process.env.TWITTER_USERID || null;
export const TWITTER_TIMELINE_TWITS =
  process.env.TWITTER_TIMELINE_TWITS ?? TWITTER_DEFAULT_MAX_RESULTS;
