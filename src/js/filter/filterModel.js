export default class Filter {
  constructor() {

  }
  async getParams() {
    try {
      const queryString = 'http://jsproject.webcademy.ru/itemsinfo';
      const response = await fetch(queryString);
      const data = await response.json();
      this.params = await data;
      console.log(this.params);
    } catch (error) {
      console.log(error)
    }

  }
}