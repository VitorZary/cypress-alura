describe('Página Inicial Exemplo Cypress', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    })

    it('Deve adicionar nova tarefa, e depois deletar essa tarefa', () => {
        cy.adicionarNovaTarefa('Ir para academia');
        cy.get('.todo-list li:last-child button').click({force: true});
    })
})