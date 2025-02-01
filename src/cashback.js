const cashback = {
	regular: {
		bound: 1000,
		percent: 1, //1 проц кэшбека и тд
	},
	silver: {
		bound: 10000,
		percent: 2,
	},
	gold: {
		bound: 100000,
		percent: 5,
	},
};

export default function calculateCashback(amount) { ///передаем параметр, который равен сумме покупок в будущем
    if(amount >= cashback.gold.bound) { //в зависимости от суммы покупок, сравниваем со значением
        return Math.ceil(amount * cashback.gold.percent / 100); //вычитаем стоимость кешбека с учетом процента статуса
    }
    if(amount >= cashback.silver.bound) {
        return Math.ceil(amount * cashback.silver.percent / 100);
    }
    if(amount >= cashback.regular.bound) {
        return Math.ceil(amount * cashback.regular.percent / 100);
    }
    return 0; 
}