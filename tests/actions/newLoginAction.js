import newLoginLocator from "../locator/newLoginLocator";
import wordLoginText from "../word/wordLoginText";
import { expect } from "@playwright/test";

export default class newLoginAction{
    constructor(page){
        this.page = page;
        this.wording = new wordLoginText();
        this.loginlocator = new newLoginLocator();
        this.inputUsername = page.locator(this.loginlocator.inputUsername);
        this.inputPassword = page.locator(this.loginlocator.inputPassword);
        this.clickLogin = page.locator(this.loginlocator.btnLogin);
        this.cekBackpack = page.locator(this.loginlocator.itemBackpack);
        this.pilihBackpack = page.locator(this.loginlocator.pilihBackpack);
        this.cekKaos = page.locator(this.loginlocator.itemBoltTShirt);
        this.pilihKaos = page.locator(this.loginlocator.pilihBoltTShirt);
        this.clickBelanja = page.locator(this.loginlocator.cart);
        this.clickCheckout = page.locator(this.loginlocator.btnCheckout);
        this.inputFstNm = page.locator(this.loginlocator.inputFirstName);
        this.inputLstNm = page.locator(this.loginlocator.inputLastName);
        this.postCode = page.locator(this.loginlocator.inputZipCode);
        this.clickContinue = page.locator(this.loginlocator.btnContinue);
        this.clickFinish = page.locator(this.loginlocator.btnFinish);
        this.successMsg = page.locator(this.loginlocator.congratsText);
    }

    async goToWeb(){
        await this.page.goto('https://www.saucedemo.com/');
    }

    async goLogin(){
        await this.inputUsername.fill(this.wording.valInputUsername);
        await expect(this.inputUsername).toHaveValue(this.wording.valInputUsername);
        await this.inputPassword.fill(this.wording.valInputPassword);
        await expect(this.inputPassword).toHaveValue(this.wording.valInputPassword);
        await this.clickLogin.click();
    }

    async pilihBarang(){
        await expect(this.cekBackpack).toContainText(this.wording.valItemBackpack);
        await this.pilihBackpack.click();
        await expect(this.cekKaos).toContainText(this.wording.valItemBoltTShirt);
        await this.pilihKaos.click();
    }

    async cekKeranjang(){
        await this.clickBelanja.click();
    }

    async checkout(){
        await this.clickCheckout.click();
    }

    async fillData(){
        await this.inputFstNm.fill(this.wording.valInputFirstName);
        await expect(this.inputFstNm).toHaveValue(this.wording.valInputFirstName);
        await this.inputLstNm.fill(this.wording.valInputLastName);
        await expect(this.inputLstNm).toHaveValue(this.wording.valInputLastName);
        await this.postCode.fill(this.wording.valInputZipCode);
        await expect(this.postCode).toHaveValue(this.wording.valInputZipCode);
        await expect(this.clickContinue).toContainText(this.wording.valContinue);
        await this.clickContinue.click();
    }

    async finish(){
        await expect(this.clickFinish).toContainText(this.wording.valFinish);
        await this.clickFinish.click();
        await expect(this.successMsg).toContainText(this.wording.valCongratsText);
    }
}