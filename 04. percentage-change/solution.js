function calculatePercentageChange(original, newAmount) {
  if (original == newAmount) {
    return 0
  }
  const difference = newAmount - original;
  const percentageDifference = (difference / original) * 100;
  return Math.round(percentageDifference);
}

// console.log(calculatePercentageChange(100, 120))


module.exports = { calculatePercentageChange };
