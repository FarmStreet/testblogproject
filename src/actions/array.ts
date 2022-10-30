export const getRepeatedArray = (value: any, count: number) => {
    let array = [];
    for (let i = 0; i < count; i++) array.push(value);
    return array;
}