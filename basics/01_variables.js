const accountId = 14432
let accountEmail = "zenin@rbi.com"
accountPassword = "Deoria"
let accountState;
// accountId = 2 // not allowed


accountEmail = "zy@zy.com"
accountPassword = "231412323"
accountCity = "pune"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId,accountState, accountEmail, accountPassword, accountCity]);
