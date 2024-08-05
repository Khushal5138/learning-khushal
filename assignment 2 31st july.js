// PDF 2:

console.log(true && true)
console.log(true && false)
console.log(true || true)
console.log(true || false)
console.log()
console.log(1 && 2)
console.log(null || undefined)
console.log('hello' && true)
console.log(Boolean(false))
console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
console.log(Boolean(true))
console.log(Boolean(4))
console.log(Boolean('Hello'))
console.log(Boolean({ name: 'John' }))
console.log(true && false && true)
console.log(3 && 1 && 0 && 10)
console.log(true && 1 && { name: 'John' })
const person = null;
console.log(person && person.address && person.address.street)
console.log()
console.log(true || false)
console.log(0 || -1 || 10)
console.log()
const p = {
  name: 'John',
  job: 'haha'
};
console.log(p.name || 'Unknown')
console.log(p.job || 'Unknown')