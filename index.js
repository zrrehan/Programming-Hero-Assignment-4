function cashOut(money) {
    if (typeof money === "string" || money < 0) {
        return "Invalid";
    } 
    return money * 1.75/ 100
}

function validEmail(email) {
    function hasAt() {
        for(let text of email) {
            if(text === "@") {
                return true;
            }
        }
        return false;
    }
    
    function hasSpace() {
        for (let text of email) {
            if(text === " ") {
                return true;
            }
        }
        return false;
    }

    function hasDotCom() {
        if (email.slice(email.length - 4, email.length) == ".com") {
            return true;
        }
        return false;
    }
    if(typeof email !== "string") {
        return "Invalid";
    }

    let condition = email[0] !== "." && email[0] !== "-" && email[0] !== "_" && email[0] !== "+" && email[0] !== "@"
                    && hasAt() && !hasSpace() && hasDotCom();

    return condition;
}
