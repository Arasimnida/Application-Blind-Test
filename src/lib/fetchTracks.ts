import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQAUWzC5alKfe1v1YUV9jpeq8DxFG4whq5BpHmMziqaM919ni97V3_T13hYr_yzICnx-N1HoC_2aQQDbS8iDXXlw0IxeNiqySOVUr0YGeY7Tkyp0qig8CDm7RoR7nHWXbg0L7tNHn7YDErTzdT6tQ38HSBlNsgAeIwOyXmUMhYqkpUhoXZQHZbz7zYUyCrFq9w5-DZUihN4ziujj-_xHfzzJfyOgt7r1UhlV1v60AUxrhoAptY9QZ5D82HWJbPYQVj9qpGUrRIHhM54ADNMD1jQQuhchcaFGHRkpiTLpvuJj6mWpUDUUI7bcovY6dDELMqo_v-buW0L1TdtQo9-pGTU3TssLiojaTouLpMWMN8LWtGE';

export const fetchTracks: () => Promise<Array<SavedTrack>> = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: SavedTrack[] };

  return data.items;
};
