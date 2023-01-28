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

  // EventId for each token
  mapping(uint256 => uint256) private _tokenCollection;

  mapping(uint256 => uint256) private _tokenCreatedAt;

  mapping(uint256 => address) private _collectionOwners;

  mapping(uint256 => uint256) private _collectionMinted;

  mapping(uint256 => string) private _collectionMeta;

  //transactions

  function transferOwnership(address newOwner) override public onlyOwner{
    require(newOwner != address(0), "Ownable: new owner is the zero address");
    _transferOwnership(newOwner);
  }

  function createCollection(address owner, string memory metaURI) public onlyOwner{

    _collectionIds.increment();
    uint256 newCollectionId = _collectionIds.current();

    _collectionOwners[newCollectionId] = owner;
    _collectionMinted[newCollectionId] = 0;
    _collectionMeta[newCollectionId] = metaURI;
  }

  function tokenMint(address recipient, uint256 collectionId) public onlyOwner returns(uint256){
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();

    _tokenCollection[newItemId] = collectionId;
    _collectionMinted[collectionId] += 1;
    string memory tokenURI = _collectionMeta[collectionId];

    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);

    _tokenCreatedAt[newItemId] = block.timestamp;

    return newItemId;
  }

  //view

  function tokenCollection(uint256 tokenId) public view returns(uint256){
    return _tokenCollection[tokenId];
  }

  function collectionMinted(uint256 collectionId) public view returns(uint256){
    return _collectionMinted[collectionId];   
  }

  function tokenCreatedAt(uint256 tokenId) public view returns(uint256){
    return _tokenCreatedAt[tokenId];
  }

}