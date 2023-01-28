// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;

import "./IERC5192Minimal.sol";

abstract contract Sbt is IERC5192{

  mapping (uint256 => bool) _tokenLocked;
  
  // function locked(uint256 tokenId) override external view returns (bool){

  // };
}