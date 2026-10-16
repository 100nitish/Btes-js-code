function test() {

    try {
        console.log("Outer try");

        try {
            let x = y;  // Error
            console.log(x);
        }
        catch (error) {
            console.log("Inner Error:", error.message);
        }

        console.log("Outer try continues");
    }
    catch (error) {
        console.log("Outer Error:", error.message);
    }
}

test();