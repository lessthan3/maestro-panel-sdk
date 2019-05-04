import PropTypes from 'prop-types';
import Styled from 'styled-components';
import MaestroPanelSDK from '@maestro_io/panel-sdk';
import * as React from 'react';
import IStyle from './IStyle';

const { Fragment, useState, useEffect } = React;

const panel = new MaestroPanelSDK();

const Wrapper: React.FunctionComponent<{}> = (): React.ReactElement => {
  const [style, setStyle] = useState(null);

  const handleStyleChange = (payload: IStyle): void => {
    console.log({ payload });
    setStyle(payload);
  };

  useEffect((): React.EffectCallback => {
    window.addEventListener('message', (message) => {
      console.log({ message });
    }, false);
    panel.on('style', handleStyleChange);
    return (): void => {
      panel.off('style', handleStyleChange);
    };
  });

  return (
    <Fragment>
      <div>
        {style ? JSON.stringify(style) : 'default'}
      </div>
    </Fragment>
  );
};

panel.init();
Wrapper.defaultProps = {};
export default Wrapper;
