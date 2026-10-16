import PromptSync from "prompt-sync";
let prompt=PromptSync();

let n=parseInt(prompt("Enter: "))

// let star = 5;

for(let i=0;i<n;i++){
    for(let j=0;j<i;j++){
        
        process.stdout.write(" * ")
    }
    // star--;
    process.stdout.write("\n")
}