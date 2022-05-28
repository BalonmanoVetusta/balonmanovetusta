import { TWITTER_TIMELINE_TWITS, TWITTER_USERID } from "./constants";
import { getTimeLineApiUrl } from "./getTimelineApiUrl";
import { twitsObjectMapMedia } from "./twitsObjectMapMedia";
import { twitterFetch } from "./twitterFetch";

export const LATESTS_TWITTS_ERRORS = {
  UNKNOWN: "Twitter API: Unknown Error",
  NOT_CONFIGURED: "Twitter API: Not Configured",
};

export async function getLatestTimelineTwitts() {
  try {
    if (!TWITTER_USERID || !TWITTER_TIMELINE_TWITS) {
      throw new Error(LATESTS_TWITTS_ERRORS.NOT_CONFIGURED);
    }

    const parameters = [
      "geo.place_id",
      "attachments.media_keys",
      "attachments.poll_ids&tweet.fields=created_at",
      "text",
      "attachments",
      "lang&user.fields=username",
      "profile_image_url&media.fields=duration_ms",
      "height",
      "preview_image_url",
      "type",
      "url",
      "width",
    ];
    const apiUrl = getTimeLineApiUrl(
      TWITTER_USERID,
      TWITTER_TIMELINE_TWITS,
      parameters
    );

    const twitts = await twitterFetch(apiUrl);
    const resolvedMediaTwits = twitsObjectMapMedia(twitts);

    return resolvedMediaTwits;
  } catch (error) {
    console.error({ error });
    return {
      status: 500,
      error:
        error.message === LATESTS_TWITTS_ERRORS.NOT_CONFIGURED
          ? error.message
          : LATESTS_TWITTS_ERRORS.UNKNOWN,
    };
  }
}
