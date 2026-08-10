const countHashtags = (caption) => {

    if (typeof caption !== 'string') {
        return "Invalid"
    }

    const separetedWord = caption.split(" ")

    const hashTagWord = separetedWord.filter(word => word.startsWith('#'))

    const howManyTags = hashTagWord.length

    const cleanWord = hashTagWord.map(word => word.slice(1))

    let theBigTag = cleanWord[0] || "";

    cleanWord.forEach((word) => {
        if (word.length > theBigTag.length) {
            theBigTag = word
        }
    });

    return {
        hashtagCount: howManyTags,
        longestTag: theBigTag
    };
}