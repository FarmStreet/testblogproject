import {IField} from "models/IField";

export const validateText = (
    text: string,
    name: string,
    minLength: number = 5,
    maxLength : number = 60,
    customRegExp: RegExp,
): string => {

        if (!text) return `Заполните ${name}!`;
        if (text.length < minLength || text.length > maxLength)
            return `${name} должно быть длиной от ${minLength} до ${maxLength}!`;


        if (!customRegExp.test(text))
            return `В поле ${name} нельзя использовать нестандартные символы!`

        return '';
}

const getRegExp = (regExp: RegExp | undefined) => regExp || /^[A-ZА-ЯЁ\d,;-— .*+?!^${}()]+$/i

export function submitForm (
    fieldList: IField[],
    submitError: (error: string) => void,
    submitAction: () => void,
    ):void {

    submitError('');

    let isError = false;
    fieldList.forEach(({value, name, minValue, maxValue, customRegExp}) => {

        if (isError) return;
        let titleError = validateText(value, name, minValue, maxValue, getRegExp(customRegExp));
        if (titleError) {
            submitError(titleError);
            isError = true;
            return;
        }
    })

    if (isError) return;

    submitAction();
}