console.log("Sneha")


const accountId=123
//acountId =5-----> will give an error since const can NEVER BE CHANGED--->can neither be updated nor be re declared in any scope


let acountName="Sneha"
accountName="SSneha"


{
    let accountName="123"
}

console.log(accountName);

//let can be changed but it follows block and scope-->can be updated but can't be re declared in the same scope



var accountPass="3e4r"
accountPass="5555"
{
    var accountPass="jjjjj"
}

console.log(accountPass);

//var can be changed and it does not follow block and scope---> can be updated and re-declared in the same scope


let accountState
//if not initialized --> gives undefined

console.table([accountId, accountPass, accountState, accountName])
