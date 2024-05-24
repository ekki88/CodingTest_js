function solution(money) {
   const coffee = Math.floor(money / 5500);
    const moneyLeft = money % 5500;
    return [coffee, moneyLeft];
}