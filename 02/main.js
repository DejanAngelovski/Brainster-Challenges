// 2. Check which numbers from 10 to 100 are even and divisible by 3. Print
// with console.log all those that meet these conditions.

for (let i = 10; i < 100; i++) {
    const element = [i];

    if(i % 3 == 0 && i % 2 == 0){
        console.log(`${i} is even and divisible by 3`);
    } 
    
}
