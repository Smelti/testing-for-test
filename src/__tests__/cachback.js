import calculateCashback from  "../cashback"

test('cashback at sum: 500', () => { //от суммы должны получить 0
    const result = calculateCashback(500) //потому что до 1000
    expect(result).toBe(0)
})

test.each( [
    ['gold', 100000, 5000], ///в массивах будут задаваться параметры и передаваться в ...params
    ['silver', 10000, 200], ///нету жесткого стандарта. просто данные параметров, буду передаваться целиком
    ['regular', 1000, 10],
    ['no', 500, 0],
])
('testing cashback function with %s status and %i amount', (status, amount, expected) => { //описание каждого из тестов "префикс".данные будем брать из параметров (..params..)

    const result = calculateCashback(amount);
    expect(result).toBe(expected);
})  ///так чаще всего используют. вызывают сразу





// const handler = test.each(dataList) //список данных. возвращает функцию
// handler('testing cashback function with %s status and %i amount', (status, amount, expected) => { //описание каждого из тестов "префикс".данные будем брать из параметров (..params..)
//     const result = calculateCashback(amount);
//     expect(result).toBe(expected);
// }) 