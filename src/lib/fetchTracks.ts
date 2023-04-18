import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQDBH9kYqJabv6wUlYjUdA4l0fqrzk3uGlYYC_SY1oghPKqnjIK_NyqqN0c05KM0cZKiYmyrngMQtwZGGd3pVOSmAhOZKtZQd2mYz0KgU7o5ayXQAeNrXJ6nKR0S4KOTL8mds8Jv2JHPHLCmMmUzWOOMf-hPXkFy0N0vvAmMeQCRSpzB_qNyKGCxT1R6vQbDCCuqN44YvjajkdfQSZEFAOkPOUbywYxp8hYUbFbbjyE14OVb_chPs3_MJFERS5xd3YItxW7Bp1Kqphj0kGGPiyobbuxUcXu_ZiO92LVOQqLf8Hk6WPRLUItvCF05CyynLuMAOLaIG88oT93i7Ht4lp84RVdYf0eBY0aJUw-hWD_bm4E';

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
