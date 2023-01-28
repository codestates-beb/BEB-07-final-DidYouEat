//Contract based on [<https://docs.openzeppelin.com/contracts/3.x/erc721>](<https://docs.openzeppelin.com/contracts/3.x/erc721>)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../node_modules/@klaytn/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@klaytn/contracts/utils/Counters.sol";
import "../node_modules/@klaytn/contracts/access/Ownable.sol";
import "../node_modules/@klaytn/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Poap is ERC721URIStorage, Ownable{
  using Counters for Counters.Counter;
  Counters.Counter private _collectionIds;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Poap", "DYE") {}

  // Base token URI
  string private _baseURI;

  // EventId for each token
  mapping(uint256 => uint256) private _tokenCollection;

  //transactions

  function setBaseURI(string memory baseURI) public onlyOwner{
    _baseURI = baseURI;
  }

  function transferOwnership(address newOwner) override public onlyOwner{
    require(newOwner != address(0), "Ownable: new owner is the zero address");
    _transferOwnership(newOwner);
  }

  // function mintCollection()



  //view
  function tokenCollection(uint256 tokenId) public view returns(uint256){
    return _tokenCollection[tokenId];
  }

}