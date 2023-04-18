import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQB86xq-vBWT1TVrE_kBB5ctRJQWxOcH4vIYy7pP5PvXnj_g9vkZWip8wp3v7Nb4qtVW0wLGq6Y_S_T6idsdhPOYhH069d_O-3uSYdIJ8OvR92QuiOIur55_P4Z5NHUWkokA2x7nUqO8JQVlo3NioEVHQZD-w5oqUPTqFDhUZkXTiSJ21wXSbbxycBgdfJ9FP5JbFPpkSI3yHoNZmfLXpt6JVqXSYsuLaQ-qHqDouKXT7kLBE8p8soNlHtsnTuVTNorzv-C51Kp2AjJABh5PQDuxHyOZMycE4S6_HxrEmUcMbUSMEFmgMMuoFUtIatygUUbNr5tpnhBr-N3cze-AIT0LTt5nc-4r_WusVnUAmQSecDA';

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
