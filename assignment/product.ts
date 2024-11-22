// To run TypeScript code and link it to an HTML page, you need to convert the TypeScript code into JavaScript code.
// By using the command: tsc product.ts
// This will compile the product.ts file and generate a corresponding JavaScript file (product.js). You can then link the product.js file to your HTML page.
// Open the code in the index.html file and replace this line: <script src="script.js"></script>
// with this line: <script src="product.js"></script>
// And this way, your TypeScript code will work the same way as the JavaScript code does.

// Task 4
interface Product {
    name: string;
    price: number;
}

const variousProducts = [
    {
        name:"shoes",
        price:100,
    },
    {
        name:"tshirt",
        price:60,
    },
    {
        name:"dress",
        price:300,
    },
]
function getTotalPrice (Products:Product[]) {
    const prices = Products.map(Product => Product.price); 
    let TotalPrice = prices.reduce(function(previousValue, currentValue){
        return (previousValue + currentValue); 
    },0)
    return TotalPrice;
}

console.log(getTotalPrice(variousProducts));

// Task 5
const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let emailUser = "username@domain.com";
function isValidEmail (email:string) {
    if(emailValidation.test(email)){
        console.log("this is a valid email");
    }
    else console.log("is not a valid email");
}
isValidEmail(emailUser);