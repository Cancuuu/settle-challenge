class OrderFactory {
  constructor(id, operation, type, coin, amount, price, status, time) {
    this.id = id;
    this.operation = operation;
    this.type = type;
    this.coin = coin;
    this.amount = amount;
    this.price = price;
    this.status = status;
    this.time = time;
  }
}

class BuyMarketOrder extends OrderFactory {
  constructor(id, coin, amount, price, status, time) {
    super(id, "buy", "market", coin, amount, price, status, time);
  }
}

class SellMarketOrder extends OrderFactory {
  constructor(id, coin, amount, price, status, time) {
    super(id, "sell", "market", coin, amount, price, status, time);
  }
}

class BuyLimitOrder extends OrderFactory {
  constructor(id, coin, amount, price, status, time) {
    super(id, "buy", "limit", coin, amount, price, status, time);
  }
}

class SellLimitOrder extends OrderFactory {
  constructor(id, coin, amount, price, status, time) {
    super(id, "sell", "limit", coin, amount, price, status, time);
  }
}

export { BuyMarketOrder, SellMarketOrder, BuyLimitOrder, SellLimitOrder };
