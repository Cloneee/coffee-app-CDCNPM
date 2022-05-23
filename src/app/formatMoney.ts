const numb2Money = (money: number) =>{
  const formatter = new Intl.NumberFormat("vi-VI", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(money);
}

export default numb2Money;
