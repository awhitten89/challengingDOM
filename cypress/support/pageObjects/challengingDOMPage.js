export class challengingDOMPage {

    /**
     * reusable method to get the button element
     */
    getButton() {
        return '[class="button"]'
    }

    /**
     * reusable method to get the button alert element
     */
    getButtonAlert() {
        return '[class="button alert"]'
    }

    /**
     * reusable method to get the button submit element
     */
    getButtonSubmit() {
        return '[class="button success"]'
    }

    /**
     * reusable method which records the labels on the buttons and saves them to the alias 'buttonText'
     */
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