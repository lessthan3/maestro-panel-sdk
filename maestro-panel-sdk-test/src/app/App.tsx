import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Wrapper from './Wrapper';

declare let module: any;

ReactDOM.render(<Wrapper />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

