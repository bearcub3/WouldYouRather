## Would You Rather

building a polling app with React and Redux

### start the app

1. clone the app

    `git clone git@github.com:bearcub3/WouldYouRather.git`

2. go to the directory on the terminal and run `npm install`

    Make sure that the directory is `would-you-rather` one which is subdirectory of the original one.

3. run `npm run start`

#### Authentication

Once a user logs in, the authToken is saved in the cookie.
With the saved authToken, whether a user refreshes the browser or leaves the website, the user can still remain as signed in. Also, with custom `useAuth` hook, pages with restricted access can be easily scoped to authenticated users.
