import d from "../../src/d";
import renderToStaticMarkup from "../../src/renderToStaticMarkup";
import App from "./components/App";
import fetch from "isomorphic-fetch";
import { STATE, INITIAL_DATA } from "./constants";
import fs from "fs";

const FILENAME = "./examples/isomorphic/index.html";

const fetchData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => ({ posts: posts.slice(0, 3), state: STATE.INITIAL }));
};

const getInitialData = data => `var ${INITIAL_DATA}=${JSON.stringify(data)}`;

export default fetchData()
  .then(data =>
    fs.writeFile(
      FILENAME,
      renderToStaticMarkup(
        <html>
          <head>
            <title>Davi</title>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          </head>
          <body>
            <div id="root">
              <App {...data} />
            </div>
            <script>{getInitialData(data)}</script>
            <script src="./client.jsx" />
          </body>
        </html>
      ),
      err => {
        return console.log(
          err ? err : `${FILENAME} built.`
        );
      }
    )
  )
  .catch(console.error);
