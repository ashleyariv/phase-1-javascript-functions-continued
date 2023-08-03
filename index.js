function saturdayFun (activity) {
    if (activity === "bathe my dog") {
    return `This Saturday, I want to ${activity}!`
    }else {
        return "This Saturday, I want to roller-skate!"
    }
}

function mondayWork(work) {
    if (work === "work from home") {
        return `This Monday, I will ${work}.`
    }else {
        return "This Monday, I will go to the office."
        }
}

function wrapAdjective(msg = "*") {
    return (thing = "special") => {
        return `You are ${msg}${thing}${msg}!`
    }
}