import { SavedTrack } from 'spotify-types';

const apiToken =
  'BQDuCx6aQToknW4ZjkgslXhRaAfe6Fikpeusvpw6aKsErUw2smzeECXxGO04y588fxztDREyNdM7k8yJIzJCtyxkLsqPX_3qp3xiIXZXyjY3lI2H9ZEwpno2aOzOnVajoD4GX53iAVZlTilmtKZ8O9NaznNQSWCAdEBRj-bzE2f5y5yQqND_fzKSUGNKH37Km11JwALPQvFv637_kvcOSglqS9k0MXtY-mi1c-HjaUK0lBENVXPRU2Oe9MI7WhznKQjQbE8RIC-vrsGlRu6t9O9j7-GMS-yIHSvtXhCyUBnVEGM4bWynWp-k4th2bY0RgU5EUA2duRS3woBX95UM_F1zzhooNLTSKtDHX7HXthvGAnY';

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
