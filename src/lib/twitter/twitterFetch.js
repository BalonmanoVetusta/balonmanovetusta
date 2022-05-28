import {
  TWITTER_BEARER_TOKEN,
  TWITTER_BASE_API_URL,
  TWITTER_USERID,
} from "./constants";

const TWITTER_FETCH_ERRORS = {
  NOT_BEARER_TOKEN: "Twitter API: Not Bearer Token",
  FETCH_ERROR: "Twitter API: Fetch Error",
  UNKNOWN: "Twitter API: Unknown Error",
};

export async function twitterFetch(url, options) {
  if (!TWITTER_BEARER_TOKEN) {
    throw new Error(TWITTER_FETCH_ERRORS.NOT_BEARER_TOKEN);
  }

  const { headers = {} } = options || {};

  headers.authorization ??= `Bearer ${TWITTER_BEARER_TOKEN}`;
  headers["Content-Type"] ??= "application/json";

  if (
    process.env.NODE_ENV !== "production" &&
    process.env.NODE_ENV !== "preview"
  ) {
    if (
      url.includes(`${TWITTER_BASE_API_URL}/2/users/${TWITTER_USERID}/tweets`)
    ) {
      const mockData = require("mockData/timelineResponse.json");

      return mockData;
    }
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(TWITTER_FETCH_ERRORS.FETCH_ERROR);
    }

    const json = response.json();
    const responseObject = JSON.parse(json);

    return responseObject;
  } catch (error) {
    if (Array.values(TWITTER_FETCH_ERRORS).includes(error.message)) {
      throw new Error(error.message);
    }

    throw new Error(TWITTER_FETCH_ERRORS.UNKNOWN);
  }
}
