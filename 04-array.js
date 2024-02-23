// find the average of marks
let marks = [99 , 68, 98, 64, 81, 77]
sum = 0
idx = 0
marks.map(() => {
    sum += marks[idx]
    idx++
})
console.log(Math.round(sum/marks.length));

//apply 10% discount on the available price

let price = [250, 646, 300, 900, 50]
index = 0
price.map(() => {
    console.log("MRP"+ price[index]);
    let discount = price[index] - (price[index]/10)
    console.log("Offer Price"+ discount);
    index++
})

// array manipulation

let companies = ["bloomberg", "Microsoft", "Uber", "Google", "Netflix" , "IBM"]
console.log(companies);
console.log(companies.shift());
console.log(companies.splice(2, 1, "OLa"));
console.log(companies.push());