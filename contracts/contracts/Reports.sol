pragma solidity ^0.8.16;
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
    
    function random() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
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

    function createReport(address recipient, string name, string dateOfDeath, string timeOfDeath, string placeOfDeath, string city, string postalCode, string country, string province, string medicalCauseOfDeath, string meansOfDeath)public onlyOwner {
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

    function deleteReport(string name,string postalCode,string dateOfDeath)public view onlyOwner{
        bool deleted=false;
        uint arrayLength = reports.length;
         for (uint i=0; i<arrayLength-1; i++) {
             if(deleted==true){
               reports[i]=reports[i+1];
               continue; 
            }
            if(reports[i].name==name & reports[i].postalCode==postalCode & reports[i]==dateOfDeath){
                deleted=true;
                reports[i]=reports[i+1];
                continue;
            }
         }
         reports.pop();


    }

    function getReportsCount() public view returns (uint) {
        return reports.length;
    }
}   