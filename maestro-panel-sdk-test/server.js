import path from 'path';
import express from 'express';
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config';

const app = express();
const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => { console.log(`App is listening on port ${port}`); });

app.get('/', (req, res) => {
  res.send(`
    <html>
    <body>
    <script>
    window.addEventListener('message', (message) => {
      if (!window.sendMessage) {
        const data = JSON.parse(message.data);
        window.sendMessage = (name, payload) => {
          const frame = window.frames.frame;
          const message = {...data, name, payload };
          console.log(message);
          frame.postMessage(JSON.stringify(message));
        };
        console.log(data);  
      }
    }, false);
    </script>
    <iframe src="/frame" height="700px" width="320px" name="frame"/>
    </body>
    </html>
  `);
});

app.get('/frame', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: webpackConfig.output.publicPath, stats: { colors: true },
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.resolve(__dirname, 'dist')));
