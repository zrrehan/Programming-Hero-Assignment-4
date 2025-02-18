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


function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let [mango, banana] = [0, 0];

    for(let item of votes) {
        if(item === "mango") {
            mango += 1;
        }
        if(item === "banana") {
            banana += 1
        }
    }

    if(banana > mango) {
        return "Banana";
    } else if(mango > banana) {
        return "Mango";
    } else {
        return "Draw";
    }
}


function isBestFriend(f1, f2) {
    if(Array.isArray(f1) || Array.isArray(f2) || typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    }

    if(f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    } else {
        return false;
    }
}

function calculateWatchTime(times) {
    let total = 0;
    for(items of times) {
        if(typeof items !== "number") {
            return "Invalid"
        }
        total += items;
    }
    let hr = parseInt(total / 3600);
    total = total % 3600;
    let min = parseInt(total / 60);
    let sec = total % 60;

    return {
        hour: hr,
        minute: min, 
        second: sec
    };
}