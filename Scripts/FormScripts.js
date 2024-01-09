const emailDomainExt=["com","net","org", "gov", "edu", "mil", "co", "biz", "mobi", "info", "io"]


function validate() {
    setInsValue()
    if (validatePhone()==false) {errorOut("phone"); return false}
    if (validateEmail()==false) {errorOut("email"); return false}


    return true
}


function validateEmail() {
    const email=document.getElementById("email").value
    const atIndex=email.indexOf('@')
    const domain=email.substring(atIndex+1)
    const lastDot=domain.lastIndexOf('.')
    if (lastDot==-1) {return false}

    const extension=(domain.substring(lastDot+1)).toLowerCase()
    if (emailDomainExt.indexOf(extension)==-1) {return false}

    
    removeError("email")
    return true
}

function validatePhone() {
    const phone=document.getElementById("phone").value
    var openParCounter=0
    var closedParCounter=0
    var hyphenCounter=0
    var spaceCounter=0
    var numberString=""




    for (var i=0;i<phone.length;i++) {
        if (phone[i]=='(') {openParCounter++}
        else if (phone[i]==')') {closedParCounter++}
        else if (phone[i]=='-') {hyphenCounter++}
        else if (phone[i]==' ') {spaceCounter++}
        else {numberString+=phone[i]}

        if ((openParCounter>1)||(closedParCounter>1)||(hyphenCounter+spaceCounter>3)) {
            return false
        }
    }
    if ((numberString.length<10)||(numberString.length>11)) {return false}
    if ((numberString.length==11)&&(numberString[0]!='1')) {return false}
    if (isNaN(Number(numberString))) {return false}
    
    removeError("phone")
    return true

}



function errorOut(inputID) {
    document.getElementById(inputID).style.border="0.4vh solid red"
}

function removeError(inputID) {
    document.getElementById(inputID).style.border=""
}

function setInsValue() {
    const ins=document.getElementById("ins")
    const insBox=document.getElementById("insBox")
    const otherIns=document.getElementById("otherIns")
    if (insBox.value=="Other") {
        ins.value=otherIns.value
    }
    else {
        ins.value=insBox.value
    }

}
