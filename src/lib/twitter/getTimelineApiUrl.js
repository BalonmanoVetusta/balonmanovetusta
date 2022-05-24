import { TWITTER_BASE_API_URL, TWITTER_DEFAULT_MAX_RESULTS } from "./constants";

export function getTimeLineApiUrl(
  id,
  maxResults = TWITTER_DEFAULT_MAX_RESULTS,
  expansions = [],
  exclude = []
) {
  return `${TWITTER_BASE_API_URL}/2/users/${id}/tweets?max_results=${maxResults}${
    expansions.length > 0 ? `&expansions=${expansions.join(",")}` : ""
  }${exclude.length > 0 ? `&exclude=${exclude.join(",")}` : ""}`;
}
