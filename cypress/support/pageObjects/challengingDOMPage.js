export class challengingDOMPage {

    getButton() {
        return '[class="button"]'
    }

    getButtonAlert() {
        return '[class="button alert"]'
    }

    getButtonSubmit() {
        return '[class="button success"]'
    }

    readButton(){
        cy.get(this.getButton()).then(btnText => {
            cy.get(this.getButtonAlert()).then(alertText => {
                 cy.get(this.getButtonSubmit()).then(subText => {
                     cy.wrap(subText.text() + alertText.text()+ btnText.text()).as('buttonText')
                 })
             }) 
         })
    }
}

export const onChallengingDOMPage = new challengingDOMPage();