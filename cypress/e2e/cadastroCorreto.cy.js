describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do formulário corretamente e clicar no botão cadastrar', () => {
    cy.cadastrar('Maria Joana3', 'mariajoana3@email.com', 'Senha123');
  })
})