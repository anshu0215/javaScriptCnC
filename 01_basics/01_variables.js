const accountId = 2345
let accountEmail = "abvs@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2  //not allowed

accountEmail = "hc@hc.com"
accountPassword = "2346846"
accountCity = "Bengaluru"

console.log(accountId);
 /*
 Prefer not to use var
 because of issue in scope and functional scope
 */
console.table([accountId, accountEmail,accountPassword, accountCity, accountState])
 