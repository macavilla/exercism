export function twoFer(name) {
    var message = "One for you, one for me.";

    if (!name || name === "" || name.length === 0) {
        return message;
    } else{
        message = "One for " + name + ", one for me.";
        return message;
    }    
}
