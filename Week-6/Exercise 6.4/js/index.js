function maxProfit( price, start, end)
{
	if (end <= start)
		return 0;
	let profit = 0;

	for (let i = start; i < end; i++) {
		for (let j = i + 1; j <= end; j++) {
			if (price[j] > price[i]) {
				let curr_profit = price[j] - price[i]
								+ maxProfit(price, start, i - 1)
								+ maxProfit(price, j + 1, end);
				profit = Math.max(profit, curr_profit);
			}
		}
	}
	return profit;
}

let price = [7,1,5,3,6,4];
let n = price.length;

console.log(maxProfit(price, 0, n - 1));