export default class Bids {
  async getBids() {
    try {
      const queryString = `http://jsproject.webcademy.ru/bids`;
      const result = await fetch(queryString);
      const data = await result.json();
      this.bids = await data;
    } catch (error) {
      console.log(error);
    }

  }
}