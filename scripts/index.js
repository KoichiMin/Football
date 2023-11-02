"use strict"

let teams = [
    {code:"", name:"Select a team" },
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs", plays:"Kansas City, MO"},
    ];

const selectTag = document.getElementById("teamSelect");

window.onload = function(){
    for(let team of teams){
        let theOption = document.createElement("option");
        theOption.textContent = team.name
        theOption.value = team.code
        selectTag.appendChild(theOption)
    }
    const selectForm = document.getElementById("selectForm")
    selectForm.addEventListener("submit", function(event){
        event.preventDefault();
        displayParagraph();
    } )
}




function displayParagraph(){
    const selectedOption = selectTag.options[selectTag.selectedIndex]
    const selectedOptionText = selectedOption.text
    const selectedOptionValue = selectedOption.value
    if(selectedOptionValue){
        const teamInfo = document.getElementById("teamInfo");
        const textInfo = `You selected the ${selectedOptionText}`
        teamInfo.textContent = textInfo;
    } else{
        const teamInfo = document.getElementById("teamInfo");
        const textInfo = "Team information will be displayed here."
        teamInfo.textContent = textInfo;
    }
    return false
}