import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const URL = 'https://ecommerce-playground.lambdatest.io';

Given('que o usuário está na página de login', () => {
  // Navegar até a página de login com um timeout maior para garantir o carregamento
  cy.visit(`${URL}/index.php?route=account/login`, { timeout: 3000 });
});

When('o usuário insere o e-mail {string} e a senha {string}', (email, senha) => {
  // Inserir o e-mail e a senha com timeout
  cy.get('#input-email', { timeout: 6000 }).clear().type(email);
  cy.get('#input-password', { timeout: 6000 }).clear().type(senha);
  cy.get('input[type="submit"]', { timeout: 6000 }).click(); // Clique no botão de login
});

Then('o usuário deve ser autenticado com sucesso', () => {
  // Verificar login bem-sucedido (redirecionamento ou saudação ao usuário)
  cy.url({ timeout: 6000 }).should('include', '/account/account');
  cy.get('.breadcrumb', { timeout: 6000 }).should('contain', 'My Account'); // Verifica o breadcrumb "My Account"
});

Then('o usuário deve ver uma mensagem de erro {string}', (mensagemErro) => {
  // Verificar a mensagem de erro exibida
  cy.get('.alert-danger', { timeout: 10000 }).should('be.visible').and('contain', mensagemErro);
});

// Cenários adicionais

When('o usuário deixa o campo de e-mail vazio e insere a senha {string}', (senha) => {
  // Deixa o e-mail vazio e insere a senha
  cy.get('#input-email', { timeout: 10000 }).clear();
  cy.get('#input-password', { timeout: 10000 }).clear().type(senha);
  cy.get('input[type="submit"]', { timeout: 10000 }).click(); // Clique no botão de login
});

When('o usuário deixa o campo de senha vazio e insere o e-mail {string}', (email) => {
  // Deixa a senha vazia e insere o e-mail
  cy.get('#input-email', { timeout: 10000 }).clear().type(email);
  cy.get('#input-password', { timeout: 10000 }).clear();
  cy.get('input[type="submit"]', { timeout: 10000 }).click(); // Clique no botão de login
});

When('o usuário insere o e-mail {string} e deixa o campo de senha vazio', (email) => {
  // Deixa o campo de senha vazio e insere o e-mail
  cy.get('#input-email', { timeout: 10000 }).clear().type(email);
  cy.get('#input-password', { timeout: 10000 }).clear(); // Deixa a senha vazia
  cy.get('input[type="submit"]', { timeout: 10000 }).click(); // Clica no botão de login
});

Then('o usuário deve ver uma mensagem de erro', () => {
  // Verificar se a mensagem de erro está sendo exibida
  cy.get('.alert-danger', { timeout: 10000 }).should('be.visible');
});


