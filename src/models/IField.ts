export interface IField {
    value: string,
    name: string,
    minValue: number,
    maxValue: number,
    setValue: (value: string) => void,
    customRegExp?: RegExp;
}