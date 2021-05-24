import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
// import i18n (needs to be bundled ;))
import "./i18n";
// Style
import "./index.css";
// Redux Setup
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootSaga from "./redux/sagas";
import { rootReducer } from "./redux/reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// Code Split
const App = lazy(() => import(`./App`));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>...loading</div>}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
