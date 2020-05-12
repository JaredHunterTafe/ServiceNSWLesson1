const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
   let userName = await askQuestion ("Please Enter Name");
console.log("Welcome " + username);


}


Program().then(() => {
    process.exit(0);
});
