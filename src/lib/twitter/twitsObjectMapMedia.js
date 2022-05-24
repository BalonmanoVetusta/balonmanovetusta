export function twitsObjectMapMedia(responseObject) {
  const twits = responseObject.data;
  const medias = responseObject.includes.media;

  const twitsWithMedia = twits.map((twit) => {
    if (twit.attachments) {
      const twitMedias = twit.attachments.media_keys.map((mediaKey) =>
        medias.find((media) => media.media_key === mediaKey)
      );
      twit.attachments.media = twitMedias;
    }

    return twit;
  });

  responseObject.data = twitsWithMedia;

  return responseObject;
}
