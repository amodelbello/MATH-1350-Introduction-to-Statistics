/* const data = '040011100012011010111100100100111300020300000'.split('') */
const data = '0000000001123334555555555555555668889'.split('')

const pulseRates = '80 94 58 66 56 82 78 86 88 56 36 66 84 76 78 64 66 78 60 64'
  .split(' ')
  .sort()
pulseRates.forEach(c => {
  /* console.warn(c) */
})

const phenotypes = '2 1 1 1 1 1 1 4 1 2 2 1 2 3 3 2 3 1 3 1 3 1 3 2 2'
  .split(' ')
  .sort()
phenotypes.forEach(c => {
  console.warn(c)
})
