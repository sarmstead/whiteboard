// Return the first `n` numbers of the fibonacci sequence that are prime numbers
// How do we create the fibonacci sequence? Each number is the sum of two of the proceeding ones.
    // 1, 1, 2, 3, 5, 8, 13, 21, 34
    // If the index of 2 is `x`, then x-1 + x-2 = x
// What are prime numbers? Only divisible by 1 and itself (nothing else). And they must be natural numbers (not negative, not floats)
    // Prime numbers have operands that are less than or equal to itself
const fib = (length = 10) => {
  // return an array of `length` length
  const arr = [1, 1]
  for (i = 2; i < length; i++) {
    arr.push(arr[i-1] + arr[i-2])
  }
  return arr
}

// console.log(fib(20))

const isPrime = (num) => {
  // We already know that all natural numbers can be divided by 1 and itself.
  // So we need to test the remainder between 2 and the number-1 to see if any of those are evenly divided. If all in that range have remainders, the number is prime
  const prime = []
  for (let i = 2; i < num; i++) {
    prime.push(num % i === 0)
  }

  if (num === 1) {
    return false
  }

  return !prime.includes(true)
}

// console.log(isPrime(6))

const fibPrime = (num) => {
  const exponentFactor = num < 8 ? Math.pow(10, num) : Math.pow(10, 8)
  const fibArr = fib(exponentFactor)
  const primeArr = []
  for (let i = 0; primeArr.length < num; i++) {
    if(isPrime(fibArr[i])) {
      primeArr.push(fibArr[i])
    }
  }

  return primeArr
}

console.log(fibPrime(9))
