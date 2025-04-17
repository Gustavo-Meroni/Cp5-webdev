Diogo Cecchini Bueno  RM 560427<br>
Gustavo Pandolfo Meroni  RM 560271<br>
Matheus Aparecido Rocha Plati  RM 559813

![](./fiap.png)

# Web development 2024/2


| Checkpoint        | 5      | ```CURSO:```     | ENGENHARIA DE SOFTWARE |
| ----------------- | ------ | ---------------- | ---------------------- |
| ```DISCIPLINA:``` | Webdev | ```PROFESSOR:``` | Marcelo Amorim         |

# Fake Users Revenge

### Sua missão

Sua tarefa nesta atividade é completar o App React deste repositório que apresenta uma lista de usuários falsos usando a API [randomuser.me](https://randomuser.me/) *(A free, open-source API for generating random user data. Like Lorem Ipsum, but for people)*.

Para isso, você deve acrescentar as funcionalidades necessárias ao componente ```FakeUser.jsx```:
* Na inicialização do componente via ```useEffect```, receber os dados de um usuário falso via a API **randomuser** e alterar os dados na renderização do componente JSX (HTML).
* Adicionar o evento de clique ao Icone de atualização para novamente carregar um novo usuário. 

#### Tem um exemplo de como deveria ficar meu App?

Sim. O video abaixo ilustra como seu App deve mais ou menos ficar...

https://github.com/user-attachments/assets/dfa0b535-cd27-4178-bf61-4886a121a426

## Como usar o randomuser ??

A função assíncrona abaixo realiza uma requisição HTTP para a API do Randonuser.

~~~js
async function loadUser() {
    let resp = await fetch("https://randomuser.me/api/")
    let data = await resp.json()
    let fakeUser = data.results[0]
    console.log("fakeUser",fakeUser);
    let _user = {
        name: fakeUser.name.first + fakeUser.name.last,
        email: fakeUser.email,
        username: fakeUser.login.username,
        urlPhoto: fakeUser.picture.medium
    }
    console.log("_user",_user);
}

loadUser() // imprime um objeto contendo todas as informações sobre um usuário e um objeto _user com apenas as informações necessárias
~~~

# Passo a passo da tarefa

1. Clonar este repositório
   
~~~bash
git clone https://github.com/mmamorim/CP5-Webdev.git
~~~

2. Abrir pasta clonada com o VSCode
3. Abrir terminal
4. Executar instalação dos pacotes

~~~bash
npm install
~~~

5. Executar o projeto

~~~bash
npm run dev
~~~

6. Modificar apenas o componente ```FakeUser.jsx```
   * Adicionar a captura da inicialização do componente via ```useEffect``` que realizará a chamada da API e receberá os dados de um usuário falso via a API **randomuser** alterarando os dados via ```setUser()``` que implicará na atualização da renderização do componente JSX (HTML).
   * Adicionar o evento de clique ao Icone de atualização para novamente carregar um novo usuário.  

# O que deve ser entregue?

A entrega deve ser realizada no TEAMs na tarefa que foi criada para sua turma / disciplina (web development) enviando um link para um repositório do github contendo o projeto.

> **IMPORTANTE**
> * Os grupos podem ter no máximo 6 integrantes
> * A entrega deve ser realiza por apenas um dos integrantes do grupo 
> * O repositório deve conter RA e Nome completo dos integrantes
> * Verifique se o link corresponde ao repositório e esteja correto antes de enviar ao Teams 
> * **Prazo da entrega**: 16/04 

