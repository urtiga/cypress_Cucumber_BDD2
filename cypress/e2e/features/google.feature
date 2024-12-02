Feature: Google Main Page*
  Como um usuário
  Eu quero fazer login no sistema
  Para acessar minhas informações pessoais
@focus 
  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When o usuário insere o e-mail "urtryan@gmail.com" e a senha "Ryan@2709"
    Then o usuário deve ser autenticado com sucesso
    And deve ser redirecionado para a página inicial
@focus 
  Scenario: Login com credenciais inválidas
    Given que o usuário está na página de login
    When o usuário insere o e-mail "urtryan@gmail.com" e a senha "senhaerrada"
    Then o usuário deve ver uma mensagem de erro "Credenciais inválidas"
@focus 
  Scenario: Login com campo de e-mail vazio
    Given que o usuário está na página de login
    When o usuário deixa o campo de e-mail vazio e insere a senha "Ryan@2709"
    Then o usuário deve ver uma mensagem de erro "O e-mail é obrigatório"
@focus 
  Scenario: Login com campo de senha vazio
    Given que o usuário está na página de login
    When o usuário insere o e-mail "urtryan@gmail.com" e deixa o campo de senha vazio
    Then o usuário deve ver uma mensagem de erro "A senha é obrigatória"
@focus 
  Scenario: Login com e-mail inválido
    Given que o usuário está na página de login
    When o usuário insere o e-mail "urtryan@gmail" e a senha "Ryan@2709"
    Then o usuário deve ver uma mensagem de erro "Formato de e-mail inválido"

  Scenario: Login com senha incorreta
    Given que o usuário está na página de login
    When o usuário insere o e-mail "urtryan@gmail.com" e a senha "senha_incorreta"
    Then o usuário deve ver uma mensagem de erro "Senha incorreta"

