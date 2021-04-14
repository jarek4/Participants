import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/rootreducer';
import { myLogger } from 'middleware/logger/Logger';
import { auth } from 'services/firebase/Firebase';
import { setUserIsSignedIn, setUserIsSignedOut } from 'actions/UserActions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk, myLogger];

const appStore = createStore(
  rootReducer,
  composeEnhancers(compose(applyMiddleware(...middlewares))),
);

// Firebase listener, modifying state depend on user is signed in or not.
auth.onAuthStateChanged((user) => {
  if (user?.uid) {
    const currentUser = {
      email: user.email,
      name: user.displayName,
      idToken: user.idToken,
      uid: user.uid,
    };
    // User is signed in.
    appStore.dispatch(setUserIsSignedIn(currentUser));
  } else {
    // No user is signed in.
    appStore.dispatch(setUserIsSignedOut());
    // alert('You are signed out');
  }
});

export default appStore;
