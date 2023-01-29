import * as fs from 'fs';

const fsPromise = fs.promises;

fsPromise
  .readFile('../json/MyNFTs.json', 'utf-8')
  .then((data) => JSON.parse(data))
  .then((data) => {
    // console.log(data.abi);
    fsPromise
      .writeFile('./MyToken.ts', `export const abi=${JSON.stringify(data.abi)}`)
      .then(() => {
        console.log('token complete');
      })
      .catch((err) => console.error(err));
  });
