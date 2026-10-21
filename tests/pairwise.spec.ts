import { test, expect } from '@playwright/test';
import { Shop } from '../pages/shop';

const firstProduct: Record<string, string> = {
    az: 'Sauce Labs Backpack',
    za: 'Test.allTheThings() T-Shirt (Red)',
    lohi: 'Sauce Labs Onesie',
    hilo: 'Sauce Labs Fleece Jacket',
};

const rows: [string, string, string][] = [
    ['standard_user', 'sauce-labs-backpack', 'az'],
    ['problem_user', 'sauce-labs-fleece-jacket', 'az'],
    ['visual_user', 'sauce-labs-onesie', 'az'],
    ['visual_user', 'sauce-labs-fleece-jacket', 'za'],
    ['problem_user', 'sauce-labs-backpack', 'za'],
    ['standard_user', 'sauce-labs-onesie', 'za'],
    ['standard_user', 'sauce-labs-fleece-jacket', 'lohi'],
    ['problem_user', 'sauce-labs-onesie', 'lohi'],
    ['visual_user', 'sauce-labs-backpack', 'lohi'],
    ['visual_user', 'sauce-labs-backpack', 'hilo'],
    ['problem_user', 'sauce-labs-onesie', 'hilo'],
    ['standard_user', 'sauce-labs-fleece-jacket', 'hilo'],
];

for (const [user, item, sort] of rows) {
    test(`@pairwise ${user} | ${item} | ${sort}`, async ({ page }) => {
        const shop = new Shop(page);
        await shop.login(user);
        await shop.sortBy(sort);
        await expect(page.getByTestId('inventory-item-name').first()).toHaveText(firstProduct[sort]);
        await shop.addToCart(item);
        await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
    });
}