// Remove Blanks
function removeBlank(str) {
    let newStr = ''

    for(var char in str) {
        if(str[char] != ' ') {
            newStr += str[char]
        }
    }
    return newStr
}
console.log(removeBlank("    I L ik   eT o M o   veI t Mo veIt     "))



// Get Digits
function getDigits(str) {
    let nums = ' '

    for (char in str) {
        if(!isNaN(str[char])) {
            nums += str[char]
        }
    }
    console.log(nums)
}
getDigits("fgh44j4yhf83gn39td93un3")

// Acronyms
function acronym(str) {
    let wordsArr = str.split(' ')
    let acronymStr = ''

    for(let word in wordsArr) {
        if(wordsArr[word].length > 0) {
            acronymStr += wordsArr[word][0].toUpperCase()
        }
    }
    console.log(acronymStr)
    
}
acronym("Tell me what you want what you really really want")

// non Spaces
function nonSpaces(str) {
    let counter = 0
    for(var char in str) {
        if(str[char] != " "){
            counter ++
        }
    }
    return counter
}
console.log(nonSpaces("how many letters is in   this ?"))


// Remove Shorter Strings
function noShortStrings(arr, len) {
    let newStr = []
    let nextIndex = 0
    for(let value in arr) {
        if(arr[value].length > len) {
            newStr[nextIndex++] = (arr[value])
        }
    }
    return newStr
}
console.log(noShortStrings([" apple ", "cherries", "pea", "pear", "pie"], 3))

