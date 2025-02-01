export function calculateTotal(purchases,applyDiscount) { ///аппли дискаунт - уменьшит стоимость на процент
   
    const sum = purchases.reduce((total,item) => {
        return total + (item.count * item.price)
    }, 0)

    if(applyDiscount){
        return sum * 0.891
    }
    return sum
}













// export function calculateTotal(purchases,applyDiscount) { ///аппли дискаунт - уменьшит стоимость на процент
   
//     const sum = purchases.reduce((total,item) => {
//         return total + (item.count * item.price)
//     }, 0)

//     if(applyDiscount){
//         return sum * 0.5 //50проц скидки
//     }
//     return sum
// }
// npm test -- --coverage
// до каких то точек проверка не доходит и стоит добавить дополнитльных тестов




// export function calculateTotal(purchases) { ///аппли дискаунт - уменьшит стоимость на процент
   
//     return purchases.reduce((total,item) => {
//         return total + (item.count * item.price)
//     }, 0)
// }




//     let result = 0;
//     for (let i = 0; i < purchases.length; i++) {
//         result += purchases[i].count * purchases[i].price //количество покупок умножаем на стоимость и выводит результат
//     }
//     return result
// }

// module.exports = {
//     calculateTotal
// }