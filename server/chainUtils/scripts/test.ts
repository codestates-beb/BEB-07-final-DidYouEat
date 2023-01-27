import { myContract } from '../setting';

async function testFunction() {
  // console.log(myContract);

  myContract.methods.name().call().then(console.log);
  myContract.methods
    .mintNFT(
      'https://urclass-images.s3.ap-northeast-2.amazonaws.com/beb/section4/unit4/test.json',
    )
    .send({ from: process.env.ACC_ADDR, gas: 1000000 })
    .then((res: any) => console.log(res));
}

export { testFunction };
