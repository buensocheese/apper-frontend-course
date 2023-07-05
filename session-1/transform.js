function transform(nums) {
    // First Implementation
    
    // const squareNums = nums.map(num => Math.pow(num,2))
    // const sortedNums = squareNums.sort((a, b) => a - b)

    // return sortedNums

    return nums.map(num => Math.pow(num,2)).sort((a, b) => a - b) 
}

const nums = [4,9,5,3,8]

const sortedSquaredNums = transform(nums)

console.log(sortedSquaredNums) // [9,16,25,64,81]