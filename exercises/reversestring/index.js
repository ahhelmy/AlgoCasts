// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
//debugger;
    return str.split('').reduce((rev, char)=> char + rev, '');
}
//reverse('lama')
module.exports = reverse;
// sol.1
// function reverse(str) {
//     return str
//     .split('')
//     .reverse()
//     .join('');
// }
// sol.2
// function reverse(str) {
//     let reversed = '';
//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }
// sol.3
// function reverse(str) {
//         return str.split('').reduce((rev, char)=> char + rev, '');
// }