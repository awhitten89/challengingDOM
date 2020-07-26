/// <reference types="cypress" />

import { onChallengingDOMPage } from '../support/pageObjects/challengingDOMPage.js'

describe('', () => {

    beforeEach(()=> {
        cy.visit('')
    })

    it('TC001 - Is canvas visible', ()=> {
        cy.contains('Answer:').should('be.visible')
    })

    it('TC002 - Button Test', () => {
        onChallengingDOMPage.readButton()

        cy.get('@buttonText').then(beforeText => {
            cy.get(onChallengingDOMPage.getButton()).click().then(() => {
                onChallengingDOMPage.readButton()
                cy.get('@buttonText').then(afterText => {
                  expect(afterText).not.to.equal(beforeText)  
                })
             })
        })
    })

    it('TC003 - Button Alert Test', () => {
        onChallengingDOMPage.readButton()

        cy.get('@buttonText').then(beforeText => {
            cy.get(onChallengingDOMPage.getButtonAlert()).click().then(() => {
                onChallengingDOMPage.readButton()
                cy.get('@buttonText').then(afterText => {
                  expect(afterText).not.to.equal(beforeText)  
                })
             })
        }) 
    })

    it('TC004 - Button Submuit Test', () => {

        onChallengingDOMPage.readButton()

        cy.get('@buttonText').then(beforeText => {
            cy.get(onChallengingDOMPage.getButtonSubmit()).click().then(() => {
                onChallengingDOMPage.readButton()
                cy.get('@buttonText').then(afterText => {
                  expect(afterText).not.to.equal(beforeText)  
                })
             })
        }) 
    })

    it('TC005 - Table Content Test', () => {
        let values = []
        cy.getTableRow().each(($row, $index) => {
            cy.log($index)
           cy.wrap($row).find('td').each(($el) => {
                cy.wrap($el).invoke('text')
                .then(text => {
                    values.push(text)
                })
            }).then(() => {
                expect(values[0]).to.equal("Iuvaret" + $index)
                expect(values[1]).to.equal("Apeirian" + $index)
                expect(values[2]).to.equal("Adipisci" + $index)
                expect(values[3]).to.equal("Definiebas" + $index)
                expect(values[4]).to.equal("Consequuntur" + $index)
                expect(values[5]).to.equal("Phaedrum" + $index)
                values = []
            })  
        })
    })

    it('TC006 - Test table row 1 edit/delete links', ()=> {
        cy.getCell('0', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC007 - Test table row 2 edit/delete links', ()=> {
        cy.getCell('1', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC008 - Test table row 3 edit/delete links', ()=> {
        cy.getCell('2', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC009 - Test table row 4 edit/delete links', ()=> {
        cy.getCell('3', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC010 - Test table row 5 edit/delete links', ()=> {
        cy.getCell('4', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC011 - Test table row 6 edit/delete links', ()=> {
        cy.getCell('5', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC012 - Test table row 7 edit/delete links', ()=> {
        cy.getCell('6', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC013 - Test table row 8 edit/delete links', ()=> {
        cy.getCell('7', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })

    it('TC014 - Test table row 9 edit/delete links', ()=> {
        cy.getCell('8', '6').then(cell => {
            cy.wrap(cell).find('[href="#edit"]').click().then(() => {
                cy.url().should('include', '#edit')
            })
            cy.wrap(cell).find('[href="#delete"]').click().then(() => {
                cy.url().should('include', '#delete')
            })
        })
    })
})