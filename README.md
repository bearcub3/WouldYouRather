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

#### useContext

This API comes with `Provider` component and if the context needs to be shared globally, this hook helps making codes less verbose and readable. The context can be state, setState, method and styling for ui, etc. PrivateRoute also restricts its access based on the context given(setAuth) in order to make certain pages accessible to only authenticated users.

#### Data Sorting

Since I use Redux, all the states are stored as one, single source of the truth on the top level of the application. With `connect()` function, we can access to the store from any components.

    mapStateToProps?: (state, ownProps?) => Object

Redux store updates, mapStateToProps will be called and just like states, mapStateToProps should be an object as well and the object will be passed as props to the component.
If I don't want to re-render the components when the store updated, pass `null` or `undefined` instead.
`ownProps` will be called the store state changes or the parent component receives new props(shallow equality comparison).

#### Handling State and Data

1. know the data you need to send to the server and create a function to dispatch
2. create an action creator ( create a constant for action type as well )
3. create a reducer to make a state change accordingly
4. to deal with backend data, create an asynchronous promise
