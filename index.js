function cashOut(money) {
    if (typeof money === "string" || money < 0) {
        return "Invalid";
    } 
    return money * 1.75/ 100
}

