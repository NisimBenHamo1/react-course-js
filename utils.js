export const average = (...numbers) => 
{
    let sum = 0;
    for (const n of numbers) 
    {
        sum += n;
    }
    return sum / numbers.length;
};