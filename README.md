# React Blindtest App

Welcome to the Blindtest application developed in React, leveraging the Spotify API. This application was created as part of an evening training session to practice fundamental React concepts and integration with a third-party API, specifically the Spotify API.

## Features

- **Blindtest Game:** Listen to song excerpts and try to guess the title and artist.
- **Spotify Integration:** The application connects to the Spotify API to fetch song excerpts.
- **Scoring System:** Earn points by correctly guessing titles and artists.
- **Responsive User Interface:** Utilizing React for a smooth and dynamic user experience.

## Prerequisites

- Node.js and npm should be installed on your machine.

## Spotify API Token Configuration

To interact with the Spotify API and fetch user's saved tracks, you'll need to obtain an access token. Follow the steps below:

1. Visit the [Spotify Developer Console](https://developer.spotify.com/console/get-current-user-saved-tracks/) and navigate to the "Get Current User's Saved Tracks" section.

2. Click on the "GET TOKEN" button to generate an access token.

3. In the dialog that appears, make sure to check the necessary scopes, especially `user-library-read`.

4. Click on the "REQUEST TOKEN" button to generate the token.

5. In the console, you'll see the cURL request. Extract the `Authorization` header from the cURL command.

6. Open your project's code and navigate to the `src/lib/fetchTracks.ts` file.

7. Find the variable declaration for `apiToken` and replace its value with the extracted `Authorization` header. This will be used for making authenticated requests to the Spotify API.
