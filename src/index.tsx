import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {store} from './store/store';
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </DndProvider>

  </Provider>,
  document.getElementById('root')
)
;

