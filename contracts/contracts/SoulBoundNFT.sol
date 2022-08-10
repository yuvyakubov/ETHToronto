// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9 <0.9.0;

/**
*    ___ ______  __ __      ______   ___   ____   ___   ____   ______   ___  
*   /  _]      ||  |  |    |      | /   \ |    \ /   \ |    \ |      | /   \ 
*  /  [_|      ||  |  |    |      ||     ||  D  )     ||  _  ||      ||     |
* |    _]_|  |_||  _  |    |_|  |_||  O  ||    /|  O  ||  |  ||_|  |_||  O  |
* |   [_  |  |  |  |  |      |  |  |     ||    \|     ||  |  |  |  |  |     |
* |     | |  |  |  |  |      |  |  |     ||  .  \     ||  |  |  |  |  |     |
* |_____| |__|  |__|__|      |__|   \___/ |__|\_|\___/ |__|__|  |__|   \___/ 
*                                                                           
*/

import 'erc721a/contracts/extensions/ERC721AQueryable.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/utils/Strings.sol";

contract SoulBoundNFT is ERC721AQueryable, ReentrancyGuard,Ownable {
  using Strings for uint256;
  string public initialUri;
  bool public finalForm = false;
  string public baseUri = '';

  constructor(
    string memory _tokenName,
    string memory _tokenSymbol,
    string memory _initalUri
  ) ERC721A(_tokenName, _tokenSymbol) {
    setInitialUri(_initalUri);
  }

   modifier mintCompliance(uint256 _mintAmount) {
    require(_mintAmount > 0);
    _;
  }

    function burn(uint256 tokenId) public onlyOwner {
        _burn(tokenId, true);
  }

   function setInitialUri(string memory _initalUri) public onlyOwner {
    initialUri = _initalUri;
  }

    function mint(uint256 _mintAmount) public onlyOwner mintCompliance(_mintAmount) {

    _safeMint(_msgSender(), _mintAmount);
  }
  
  function mintForAddress(uint256 _mintAmount, address _receiver) public onlyOwner {
    _safeMint(_receiver, _mintAmount);
  }

    function _startTokenId() internal view virtual override returns (uint256) {
    return 1;
  }

  function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
    require(_exists(_tokenId), 'Please enter valid token');

    if (finalForm == false) {
      return initialUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, _tokenId.toString(), '.json'))
        : '';
  }

  function setFinalForm(bool _state) public onlyOwner {
    finalForm = _state;
  }

   function setBaseUri(string memory _baseUri) public onlyOwner {
    baseUri = _baseUri;
  }

   function _baseURI() internal view virtual override returns (string memory) {
    return baseUri;
  }

function _beforeTokenTransfer(
address from, 
address to, 
uint256 tokenId
) internal virtual {
require(from == address(0), "Err: token transfer is BLOCKED");    
}



}