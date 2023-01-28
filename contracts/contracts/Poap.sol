//Contract based on [<https://docs.openzeppelin.com/contracts/3.x/erc721>](<https://docs.openzeppelin.com/contracts/3.x/erc721>)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "../node_modules/@klaytn/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@klaytn/contracts/utils/Counters.sol";
import "../node_modules/@klaytn/contracts/access/Ownable.sol";
import "../node_modules/@klaytn/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./Sbt.sol";

contract Poap is ERC721URIStorage, Ownable, Sbt{
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("Poap", "DYE") {}

  // EventId for each token
  mapping(uint256 => string) private _tokenCollection;

  mapping(uint256 => uint256) private _tokenCreatedAt;

  mapping(string => address) private _collectionOwners;

  mapping(string => uint256) private _collectionMinted;

  mapping(string => string) private _collectionMeta;

  //transactions

  function transferOwnership(address newOwner) override public onlyOwner{
    require(newOwner != address(0), "Ownable: new owner is the zero address");
    _transferOwnership(newOwner);
  }

  function createCollection(string memory collectionName, address owner, string memory metaURI) public onlyOwner{
    require(_existsCol(collectionName), "Poap createCollection : nonexistent collection");

    _collectionOwners[collectionName] = owner;
    _collectionMinted[collectionName] = 0;
    _collectionMeta[collectionName] = metaURI;

  }

  function tokenMint(address recipient, string memory collectionName) public onlyOwner returns(uint256){
    _tokenIds.increment();

    uint256 newItemId = _tokenIds.current();

    _tokenCollection[newItemId] = collectionName;
    _collectionMinted[collectionName] += 1;
    string memory tokenURI = _collectionMeta[collectionName];

    _mint(recipient, newItemId);
    _setTokenURI(newItemId, tokenURI);
    _lock(newItemId);

    _tokenCreatedAt[newItemId] = block.timestamp;

    return newItemId;
  }

  //view

  function tokenCollection(uint256 tokenId) public view existToken(tokenId) returns(string memory){
    return _tokenCollection[tokenId];
  }

  function collectionMinted(string memory collectionName) public view existCollection(collectionName) returns(uint256){
    require(_existsCol(collectionName), "Poap collectionName: nonexistent collection");
    return _collectionMinted[collectionName];   
  }

  function collectionOwner(string memory collectionName) public view existCollection(collectionName) returns(address){
    return _collectionOwners[collectionName];
  }

  function tokenCreatedAt(uint256 tokenId) public view existToken(tokenId) returns(uint256){
    return _tokenCreatedAt[tokenId];
  }

  //sbt

  function safeTransferFrom(address from, address to, uint256 tokenId) public override isUnLocked(tokenId){
    super.safeTransferFrom(from, to, tokenId);
  }

  function safeTransferFrom(address from, address to, uint256 tokenId, bytes memory data) public override isUnLocked(tokenId){
    super.safeTransferFrom(from, to, tokenId, data);
  }

  function transferFrom(address from, address to, uint256 tokenId) public override isUnLocked(tokenId){
    super.transferFrom(from, to, tokenId);
  }

  //internal

  function _existsCol(string memory collectionName) internal view virtual returns (bool) {
    return _collectionOwners[collectionName] != address(0);
  }

  //modifier
  modifier existToken(uint256 tokenId){
    require(_exists(tokenId), "nonexistent token");
    _;
  }

  modifier existCollection(string memory collectionName){
    require(_existsCol(collectionName), "nonexistent collection");
    _;
  }

}