# Top News
Aplicação front-end para visualização do projeto back-end. Nesta aplicação, é possível gerenciar o back-end de um pequeno site de contratação de serviços através de requisições HTTP(s).

![image](https://github.com/MilenaMed/obriGatorio/assets/115955806/55681150-9699-4ec0-9a73-1fba61c6c975)

# Demo
[Link do projeto](https://obrigatorio.vercel.app)

Para entidade, foram criadas cinco paginas:

- "/": Retorna a página de login, para que se possa acessar o site. Em caso de erro retorna: "Preencha os dados corretamente".
- "/signup": Retorna a página de cadastro, onde é possivel registrar um novo usuário.  Em caso de erro retorna: "Os dados estão incorretos!". Caso o usuário não preencha corretamente (ex: e-mail em formato inválido), retorna: "erro: preencha os dados corretamente"

  As seguintes paginas só podem ser acessadas caso o login tenha sido realizado, em caso de erro, retorna: "É necessário estar logado para prosseguir".
  
- "/home": Pode ser acessado pelo link, ou ao clicar na logo presente no cabeçalho. Mostra todos os gatos cadastrados e disponíveis para prestar serviço, assim como o telefone para contato.
- "/AddCat": Página para inserir os dados do gato, que pode ser acessada pela url, ou ao clicar no icon do gato na home: nome, descrição e foto. Em caso de dados preenchidos errados (ex: url da foto inválida), retorna: "Preencha os dados corretamente". Em caso de sucesso, o usuário é redirecionado para /home onde o novo gato já aparece.
- "/mycats": Aparecem apenas os gatos cadastrados pelo usuário. Caso não tenha nenhum gato cadastrado pelo usuário, aparece apenas "Você ainda não cadastrou nenhum gato".


# Tecnologias utilizadas
Para este projeto, foram utilizadas:

- Node (versão 18.17.0);
- Cors;
- React;
- Styled-components;
- Axios;
- Redis;
- Joi;
