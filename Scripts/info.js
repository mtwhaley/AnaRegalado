




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