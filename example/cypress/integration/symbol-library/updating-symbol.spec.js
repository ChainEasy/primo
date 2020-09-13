import { click, navigateToPage, createPage, typeComponent } from '../../helpers'

context('Symbol Library', () => {

  describe('Updating a symbol', () => {

    it('creates a symbol', () => {
      cy.visit('http://cypress.localhost:5000')
      click('button#symbol-library')
      click('button.primary-button')
      typeComponent('test-element', 'Test Symbol')
      click('button.save-button')
      cy.get('iframe')
    }) 

    it('creates an instance on a second page', () => {
      click('article:last-child button.is-main')
      cy.get('.primo-component').find('#test-element')
      click('#pages')
      createPage('Test Page','test')
      click('#page-test button.page-preview')
      cy.wait(1000)
      click('button#symbol-library')
      click('article:last-child button.is-main')
      cy.get('.primo-component').find('#test-element')
    })

    it('modifies the symbol', () => {
      cy.get('component-buttons')
        .shadow()
        .find('button#component-edit')
        .click()
      click('button#edit-symbol')
      cy.get('.CodeMirror')
        .type('<div id="edited-element" class="w-full p-24 bg-red-500 font-bold text-5xl text-white text-center">Edited Symbol</div>')
      click('button.save-button')
    })

    it('reflects the change on both pages', () => {
      cy.get('.primo-component').find('#edited-element')
      navigateToPage('index')
      cy.get('.primo-component').find('#edited-element')
    })

  })

})
