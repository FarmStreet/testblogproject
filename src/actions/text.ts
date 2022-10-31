export const sliceText = (text: string, maxLength = 400, maxWordsCount = 40) =>
    (text
        .slice(0, maxLength)
        .split(' ')
        .slice(0, maxWordsCount)
        .slice(0, -1)
        .join(' ') + '...')