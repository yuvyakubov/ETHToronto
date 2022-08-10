// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
pragma experimental ABIEncoderV2;


import '@openzeppelin/contracts/access/Ownable.sol';
contract Report is Ownable {
    struct DeathReport {
        address recipient;
        string name;
        string dateOfDeath;
        string timeOfDeath;
        string placeOfDeath;
        string city;
        string postalCode;
        string country;
        string province;
        string medicalCauseOfDeath;
        string meansOfDeath;
    }
    
    
    DeathReport[] public reports;
    address public manager;
    address[] public players;
    
    constructor() {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function getReports() public view returns (DeathReport[] memory) {
        return reports;
    }

    function createReport(address recipient, string memory name, string memory dateOfDeath, string memory timeOfDeath, string memory placeOfDeath, string memory city, string memory postalCode, string memory country, string memory province, string memory medicalCauseOfDeath, string memory meansOfDeath)public onlyOwner {
        DeathReport memory newReport = DeathReport ({
            recipient: recipient,
            name: name,
            dateOfDeath: dateOfDeath,
            timeOfDeath: timeOfDeath,
            placeOfDeath: placeOfDeath,
            city: city,
            postalCode: postalCode,
            country: country,
            province: province,
            medicalCauseOfDeath: medicalCauseOfDeath,
            meansOfDeath: meansOfDeath
        });

        reports.push(newReport);
    }
    function compareTwoStrings(string memory s1, string memory s2) public pure
    returns (bool)
  {
    return keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
  }

    function deleteReport(string memory name,string memory postalCode,string memory dateOfDeath)public onlyOwner{
        bool deleted=false;
        uint arrayLength = reports.length;
         for (uint i=0; i<arrayLength-1; i++) {
             if(deleted==true){
               reports[i]=reports[i+1];
               continue; 
            }
            if(compareTwoStrings(reports[i].name,name)==true){
                if(compareTwoStrings(reports[i].postalCode,postalCode)==true){
                    if(compareTwoStrings(reports[i].dateOfDeath,dateOfDeath)==true){
                        deleted=true;
                        reports[i]=reports[i+1];
                        continue;
                    }
                }
            }
         }
         reports.pop();


    }

    function getReportsCount() public view returns (uint) {
        return reports.length;
    }
}   