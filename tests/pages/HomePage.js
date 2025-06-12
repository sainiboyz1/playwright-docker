exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.header = page.locator('h1'); // Example element
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async getHeaderText() {
    return await this.header.textContent();
  }
}

//module.exports = { HomePage };
