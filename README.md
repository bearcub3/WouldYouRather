## Would You Rather

building a polling app with React and Redux


### start the app

1. clone the app

    `git clone git@github.com:bearcub3/WouldYouRather.git`

2. go to the directory on the terminal and run `npm install`

    Make sure that the directory is `would-you-rather` one which is subdirectory of the original one.

3. run `npm run start`

4. or you can watch a [videoclip](https://drive.google.com/file/d/1Lz34fSGtFrAXz3kOWFta3v1atZ9LvUl8/view)!    


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

`It is mind-blowing that sometimes I have to figure out what the problem is and why every browser works slightly differently even with the same JavaScript codes. It seems like it would be better to work on firefox and if the app works fine there, it would be pretty much the same on Chrome`

#### no-op and memory leak

We create many states as we need when it comes to creating a dynamic UI component. However, once the component is unmounted, the states referring to the component still take up memory and React warns us as a memory leak. Basically, in object orient programming, it means the memory is still stored somewhere for its usage later, but, there is no way to access to the memory since the component is already unmounted. So, I had to work around to change memory allocation. What I have found so far is that I can pass function and state as props even with Route rendering the component as HOC. So, we can avoid any memory leak warning when to manage states from top hierarchy and to pass them down.
