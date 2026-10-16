import PromptSync from "prompt-sync";
let prompt=PromptSync();

let n=parseInt(prompt("Enter: "))

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(j%2!=1){
        process.stdout.write(String(1+" "))}
        else{
              process.stdout.write(String(0+" "))
        }
    }
    process.stdout.write("\n")
}