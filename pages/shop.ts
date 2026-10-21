import { Page } from '@playwright/test';

export class Shop {
    constructor(private page: Page) {}

    async login(user: string, password = 'secret_sauce') {
        await this.page.goto('/');
        await this.page.getByTestId('username').fill(user);
        await this.page.getByTestId('password').fill(password);
        await this.page.getByTestId('login-button').click();
    }

    async sortBy(option: string) {
        await this.page.getByTestId('product-sort-container').selectOption(option);
    }

    async addToCart(item: string) {
        await this.page.getByTestId(`add-to-cart-${item}`).click();
    }

    async openCart() {
        await this.page.getByTestId('shopping-cart-link').click();
    }

    async checkout() {
        await this.page.getByTestId('checkout').click();
    }

    async fillCheckout(first: string, last: string, zip: string) {
        await this.page.getByTestId('firstName').fill(first);
        await this.page.getByTestId('lastName').fill(last);
        await this.page.getByTestId('postalCode').fill(zip);
        await this.page.getByTestId('continue').click();
    }
}