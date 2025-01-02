import { formatCurrency } from "../../scripts/utils/money.js";

console.log('test suite: formatCurrency')

console.log('consverts cents into dollars')

if(formatCurrency(2090) === '20.90'){
    console.log('passed')
}else{
    console.log('failed')
}

console.log('works with 0')
if(formatCurrency(0) === '0.00'){
    console.log('passed')
}else{
    console.log('failed')
}

console.log('rounds up to the nearest cent')
if(formatCurrency(2000.5) === '20.01'){
    console.log('passed')
}else{
    console.log('failed')
}