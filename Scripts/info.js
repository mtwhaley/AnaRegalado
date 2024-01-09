const servicesOffered=[
    "ADHD","Anger Management", "Behavioral Issues", "Bipolar Disorder",
    "Chronic Illness", "Coping Skills", "Domestic Abuse", "Domestic Violence","Eating Disorders",
    "Family Conflict", "Grief", "Marital and Premarital Conflict", "Prenatal/ Postpartum/ Maternal Issues",
    "Racial Identity", "Relationship Issues", "School Issues", "Self Esteem Issues", "Sleep or Insomnia",
    "Spirituality Issues", "Stress", "Womens' Issues", "Anxiety"
]

const approaches=[
    "Art Therapy", "Christian Counseling", "Cognitive Behavioral Therapy (CBT)", "Culturally-Sensitive Therapy",
    "Dialectal Behavior Therapy(DBT)", "Family Systems", "Motivational Interviewing", "Person-Centered Therapy",
    "Solution Focused Brief Therapy (SFBT)", "Strength-Based Therapy","Trauma-Focused Therapy"
]


function loadListTable(tableID, numCols, array) {
    array.sort()
    const table=document.getElementById(tableID)

    columnCounter=1
    var currentRow
    for (var i=0;i<array.length;i++) {
        if (columnCounter==1) {
            const newRow=document.createElement("tr")
            currentRow=newRow
        }


        const cell=document.createElement("td")
        cell.innerText=array[i]
        currentRow.appendChild(cell)


        if (columnCounter==numCols) {
            table.appendChild(currentRow)
            columnCounter=1
        }
        else {columnCounter+=1}

        if ((columnCounter!=1)&&(i==array.length-1)) {
            table.appendChild(currentRow)
        }
    }
}

function setInfoButtons() {
    const servicesButton=document.getElementById("servicesButton")
    const approachesButton=document.getElementById("approachesButton")
    const insuranceButton=document.getElementById("insuranceButton")
    const paymentButton=document.getElementById("paymentButton")

    servicesButton.onclick=function() {setInfo("services")}
    approachesButton.onclick=function() {setInfo("approach")}
    insuranceButton.onclick=function() {setInfo("insurance")}
    paymentButton.onclick=function() {setInfo("payment")}

    

}

function setInfo(info) {
    const servicesButton=document.getElementById("servicesButton")
    const approachesButton=document.getElementById("approachesButton")
    const insuranceButton=document.getElementById("insuranceButton")
    const paymentButton=document.getElementById("paymentButton")

    const serviceInfo=document.getElementById("serviceInfo")
    const approachInfo=document.getElementById("approachInfo")
    const insuranceInfo=document.getElementById("insuranceInfo")
    const paymentInfo=document.getElementById("paymentInfo")

    var infoArray=[serviceInfo, approachInfo, insuranceInfo, paymentInfo]
    var infoButtons=[servicesButton, approachesButton, insuranceButton, paymentButton]
    var selection

    switch(info) {
        case "approach":
            selection=approachInfo
            break;
        case "insurance":
            selection=insuranceInfo
            break;
        case "payment":
            selection=paymentInfo
            break;
        case "services":
        default:
            selection=serviceInfo
            break;
    }



    for (var i=0;i<infoArray.length;i++) {
        if (infoArray[i]==selection) {
            infoArray[i].style.display="block"
            infoButtons[i].setAttribute("class", "infoTab")
        }
        else {
            infoArray[i].style.display="none"
            infoButtons[i].setAttribute("class", "unselectedButton")
        }
    }
}

setInfoButtons()
setInfo("services")