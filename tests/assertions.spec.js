// @ts-check
const { test, expect } = require('@playwright/test');
const { default: newLoginAction } = require('../tests/actions/newLoginAction')

test('pom assertion', async({ page }) => {
    const loginObj = new newLoginAction(page)
    await loginObj.goToWeb();
    await loginObj.goLogin();
    await loginObj.pilihBarang();
    await loginObj.cekKeranjang();
    await loginObj.checkout();
    await loginObj.fillData();
    await loginObj.finish();
})

test('assertion dan locator cara traditional', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    const inputUsername = page.locator('#user-name')
    await inputUsername.fill('standard_user')
    await expect(inputUsername).toHaveValue('standard_user')

    const inputPassword = page.locator('#password')
    await inputPassword.fill('secret_sauce')

    const btnLogin = page.locator('#login-button')
    await expect(btnLogin).toContainText('Login')
    await btnLogin.click()

    const itemBackpack = page.locator('#item_4_title_link > div')
    await expect(itemBackpack).toContainText('Sauce Labs Backpack')
    const pilihBackpack = page.locator('#add-to-cart-sauce-labs-backpack')
    await pilihBackpack.click()

    const itemTShirt = page.locator('#item_1_title_link > div')
    await expect(itemTShirt).toContainText('Sauce Labs Bolt T-Shirt')
    const pilihBoltTShirt = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt')
    await pilihBoltTShirt.click()

    const cart = page.locator('#shopping_cart_container > a')
    await cart.click()

    const btnCheckout = page.locator('#checkout')
    btnCheckout.click()

    const inputFirstName = page.locator('#first-name')
    await inputFirstName.fill('Hanif')
    await expect(inputFirstName).toHaveValue('Hanif')

    const inputLastName = page.locator('#last-name')
    await inputLastName.fill('Rahmatullah')
    await expect(inputLastName).toHaveValue('Rahmatullah')

    const inputZipCode = page.locator('#postal-code')
    await inputZipCode.fill('101010')
    await expect(inputZipCode).toHaveValue('101010')

    const btnContinue = page.locator('#continue')
    await expect(btnContinue).toContainText('Continue')
    await btnContinue.click()

    const btnFinish = page.locator('#finish')
    await expect(btnFinish).toContainText('Finish')
    await btnFinish.click()

    const congratsText = page.locator('#checkout_complete_container > h2')
    await expect(congratsText).toContainText('Thank you for your order!')
  });