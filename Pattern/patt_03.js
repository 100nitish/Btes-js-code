import PromptSync from "prompt-sync";
let prompt=PromptSync();

let n=parseInt(prompt("Enter: "))

// let star = 1;

for(let i=n;i>=1;i--){
    for(let j=1;j<=i;j++){
        
        process.stdout.write(" * ")
    }
    // star++;
    process.stdout.write("\n")
}