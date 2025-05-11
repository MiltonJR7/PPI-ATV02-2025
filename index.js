import express from "express";


const host = "0.0.0.0";
const port = 3000;
var listaUsers = [];

const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/", (requisicao, resposta) => {
    resposta.send(`
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
                    <style>
                        body {
                            background-color: #121212;
                            color: #e0e0e0;
                        }
                        .container {
                            background-color: #1e1e1e;
                            padding: 1rem;
                            border-radius: 0.5rem;
                        }
                        .table {
                            background-color: #1e1e1e;
                        }
                        .table th, .table td {
                            border-color: #333 !important;
                        }
                        .btn-primary {
                            background-color: #bb86fc;
                            border-color: #bb86fc;
                        }
                        .btn-secondary {
                            background-color: #03dac6;
                            border-color: #03dac6;
                        }
                    </style>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Menu de Opções</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" id="cadastrosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Cadastros
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="cadastrosDropdown">
                                        <li><a class="dropdown-item" href="/clientes">Clientes</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        `)
    resposta.end();
})

app.get("/clientes", (requisicao, resposta) => {
    resposta.send(`
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Formulário</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                    <style>
                        body {
                            background-color: #121212;
                            color: #e0e0e0;
                        }
                        .container {
                            background-color:rgb(44, 44, 44);
                            padding: 1rem;
                            border-radius: 0.5rem;
                        }
                        .table {
                            background-color: rgb(44, 44, 44);
                        }
                        .table th, .table td {
                            border-color: #333 !important;
                        }
                        .btn-primary {
                            background-color: #bb86fc;
                            border-color: #bb86fc;
                        }
                        .btn-secondary {
                            background-color: #03dac6;
                            border-color: #03dac6;
                        }
                    </style>
                </head>
                <body>
                    <div class="container w-75 mb-5 mt-5 ">
                        <form method="POST" action="/clientes" class="row g-3 border p-2 rounded shadow mt-1" novalidate>
                            <fieldset>
                                <legend class="text-center">Cadastro de Cliente</legend>
                            </fieldset>

                            <div class="col-md-4 position-relative">
                                <label for="nome" class="form-label">Primeiro nome</label>
                                <input type="text" class="form-control" id="nome" name="nome" required />
                            </div>
                                <div class="col-md-4 position-relative">
                                    <label for="sobrenome" class="form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="sobrenome" name="sobrenome" required />
                            </div>
                            <div class="col-md-4 position-relative">
                                <label for="nomeUsuario" class="form-label">Usuário</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                    <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario"  aria-describedby="validationTooltipUsernamePrepend" required />
                                </div>
                            </div>
                            <div class="col-md-6 position-relative">
                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" required />
                            </div>
                            <div class="col-md-3 position-relative">
                                <label for="uf" class="form-label">UF</label>
                                <select class="form-select" id="uf" name="uf" required>
                                    <option selected disabled value="">Selecione</option>
                                    <option value="AC">AC</option>
                                    <option value="AL">AL</option>
                                    <option value="AP">AP</option>
                                    <option value="AM">AM</option>
                                    <option value="BA">BA</option>
                                    <option value="CE">CE</option>
                                    <option value="DF">DF</option>
                                    <option value="ES">ES</option>
                                    <option value="GO">GO</option>
                                    <option value="MA">MA</option>
                                    <option value="MT">MT</option>
                                    <option value="MS">MS</option>
                                    <option value="MG">MG</option>
                                    <option value="PA">PA</option>
                                    <option value="PB">PB</option>
                                    <option value="PR">PR</option>
                                    <option value="PE">PE</option>
                                    <option value="PI">PI</option>
                                    <option value="RJ">RJ</option>
                                    <option value="RN">RN</option>
                                    <option value="RS">RS</option>
                                    <option value="RO">RO</option>
                                    <option value="RR">RR</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                    <option value="SE">SE</option>
                                    <option value="TO">TO</option>
                                </select>
                            </div>
                            <div class="col-md-3 position-relative">
                                <label for="cep" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="cep" name="cep" required />
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Enviar formulário</button>
                                <a class="btn btn-secondary" href="/">Voltar</a>
                            </div>
                        </form>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                </body>
            </html>      
        `);
    resposta.end();
})

app.post("/clientes", (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const sobrenome = requisicao.body.sobrenome;
    const cidade = requisicao.body.cidade;
    const nomeUsuario = requisicao.body.nomeUsuario
    const uf = requisicao.body.uf;
    const cep = requisicao.body.cep;

    if(nome && sobrenome && nomeUsuario && cidade && uf && cep && /^\d{8}$/.test(cep)) {
        listaUsers.push({
            nome: nome,
            sobrenome: sobrenome,
            nomeUsuario: nomeUsuario,
            cidade: cidade,
            uf: uf,
            cep: cep
        })
        resposta.redirect("/listaUsers");
    } else {
        let conteudo = `
                <html lang="pt-br">
                    <head>
                        <meta charset="UTF-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Formulário</title>
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                        <style>
                            body {
                                background-color: #121212;
                                color: #e0e0e0;
                            }
                            .container {
                                background-color: rgb(44, 44, 44);
                                padding: 1rem;
                                border-radius: 0.5rem;
                            }
                            .table {
                                background-color: rgb(44, 44, 44);
                            }
                            .table th, .table td {
                                border-color: #333 !important;
                            }
                            .btn-primary {
                                background-color: #bb86fc;
                                border-color: #bb86fc;
                            }
                            .btn-secondary {
                                background-color: #03dac6;
                                border-color: #03dac6;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container w-75 mb-5 mt-5">
                            <form method="POST" action="/clientes" class="row g-3 border p-2 rounded shadow mt-1" novalidate>
                                <fieldset>
                                    <legend class="text-center">Cadastro de Cliente</legend>
                                </fieldset>

                                <div class="col-md-4 position-relative"> `;
                                    if(!nome) {
                                        conteudo = conteudo + `
                                            <label for="nome" class="form-label">Primeiro nome</label>
                                            <input type="text" class="form-control" id="nome" name="nome" required />
                                            <span class="text-danger">Por favor informe o nome!</span>
                                        `
                                    } else {
                                        conteudo = conteudo + `
                                            <label for="nome" class="form-label">Primeiro nome</label>
                                            <input type="text" class="form-control" id="nome" name="nome" value="${nome}" required />
                                        `
                                    }

                                    conteudo = conteudo + `</div>
                                    <div class="col-md-4 position-relative">`;
                                    if(!sobrenome) {
                                        conteudo = conteudo + `
                                            <label for="sobrenome" class="form-label">Sobrenome</label>
                                            <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="${sobrenome}" required />
                                            <span class="text-danger">Por favor informe o sobrenome!</span>
                                        `
                                    } else {
                                        conteudo = conteudo + `
                                            <label for="sobrenome" class="form-label">Sobrenome</label>
                                            <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="${sobrenome}" required />
                                        `
                                    }
                                    
                                    conteudo = conteudo + `</div>
                                <div class="col-md-4 position-relative">`;
                                    if(!nomeUsuario) {
                                        conteudo = conteudo + `
                                            <label for="nomeUsuario" class="form-label">Usuário</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario"  aria-describedby="validationTooltipUsernamePrepend" required />
                                            </div>
                                            <span class="text-danger">Por favor informe o nome de usuario!</span>
                                        `
                                    } else {
                                        conteudo = conteudo + `
                                            <label for="nomeUsuario" class="form-label">Usuário</label>
                                            <div class="input-group has-validation">
                                                <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                <input type="text" class="form-control" id="nomeUsuario" name="nomeUsuario" value="${nomeUsuario}"  aria-describedby="validationTooltipUsernamePrepend" required />
                                            </div>
                                        `
                                    }

                                    conteudo = conteudo + `</div>
                                <div class="col-md-6 position-relative">`;
                                    if(!cidade) {
                                        conteudo = conteudo + `
                                             <label for="cidade" class="form-label">Cidade</label>
                                            <input type="text" class="form-control" id="cidade" name="cidade" required />
                                            <span class="text-danger">Por favor informe a cidade!</span>
                                        `
                                    } else {
                                        conteudo = conteudo + `
                                            <label for="cidade" class="form-label">Cidade</label>
                                            <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}" required />
                                        `
                                    }

                                    conteudo = conteudo + `</div>
                                <div class="col-md-3 position-relative">`;
                                    if (!uf) {
                                        conteudo = conteudo + `
                                            <label for="uf" class="form-label">UF</label>
                                            <select class="form-select" id="uf" name="uf" required>
                                                <option selected disabled value="">Selecione</option>
                                                <option value="AC">AC</option>
                                                <option value="AL">AL</option>
                                                <option value="AP">AP</option>
                                                <option value="AM">AM</option>
                                                <option value="BA">BA</option>
                                                <option value="CE">CE</option>
                                                <option value="DF">DF</option>
                                                <option value="ES">ES</option>
                                                <option value="GO">GO</option>
                                                <option value="MA">MA</option>
                                                <option value="MT">MT</option>
                                                <option value="MS">MS</option>
                                                <option value="MG">MG</option>
                                                <option value="PA">PA</option>
                                                <option value="PB">PB</option>
                                                <option value="PR">PR</option>
                                                <option value="PE">PE</option>
                                                <option value="PI">PI</option>
                                                <option value="RJ">RJ</option>
                                                <option value="RN">RN</option>
                                                <option value="RS">RS</option>
                                                <option value="RO">RO</option>
                                                <option value="RR">RR</option>
                                                <option value="SC">SC</option>
                                                <option value="SP">SP</option>
                                                <option value="SE">SE</option>
                                                <option value="TO">TO</option>
                                            </select>
                                            <span class="text-danger">Informe a Unidade Federativa!</span>
                                        `;
                                    } else {
                                        conteudo = conteudo + `
                                            <label for="uf" class="form-label">UF</label>
                                            <select class="form-select" id="uf" name="uf" required>
                                                <option disabled value="">Selecione</option>
                                                <option value="AC" ${uf === "AC" ? "selected" : ""}>AC</option>
                                                <option value="AL" ${uf === "AL" ? "selected" : ""}>AL</option>
                                                <option value="AP" ${uf === "AP" ? "selected" : ""}>AP</option>
                                                <option value="AM" ${uf === "AM" ? "selected" : ""}>AM</option>
                                                <option value="BA" ${uf === "BA" ? "selected" : ""}>BA</option>
                                                <option value="CE" ${uf === "CE" ? "selected" : ""}>CE</option>
                                                <option value="DF" ${uf === "DF" ? "selected" : ""}>DF</option>
                                                <option value="ES" ${uf === "ES" ? "selected" : ""}>ES</option>
                                                <option value="GO" ${uf === "GO" ? "selected" : ""}>GO</option>
                                                <option value="MA" ${uf === "MA" ? "selected" : ""}>MA</option>
                                                <option value="MT" ${uf === "MT" ? "selected" : ""}>MT</option>
                                                <option value="MS" ${uf === "MS" ? "selected" : ""}>MS</option>
                                                <option value="MG" ${uf === "MG" ? "selected" : ""}>MG</option>
                                                <option value="PA" ${uf === "PA" ? "selected" : ""}>PA</option>
                                                <option value="PB" ${uf === "PB" ? "selected" : ""}>PB</option>
                                                <option value="PR" ${uf === "PR" ? "selected" : ""}>PR</option>
                                                <option value="PE" ${uf === "PE" ? "selected" : ""}>PE</option>
                                                <option value="PI" ${uf === "PI" ? "selected" : ""}>PI</option>
                                                <option value="RJ" ${uf === "RJ" ? "selected" : ""}>RJ</option>
                                                <option value="RN" ${uf === "RN" ? "selected" : ""}>RN</option>
                                                <option value="RS" ${uf === "RS" ? "selected" : ""}>RS</option>
                                                <option value="RO" ${uf === "RO" ? "selected" : ""}>RO</option>
                                                <option value="RR" ${uf === "RR" ? "selected" : ""}>RR</option>
                                                <option value="SC" ${uf === "SC" ? "selected" : ""}>SC</option>
                                                <option value="SP" ${uf === "SP" ? "selected" : ""}>SP</option>
                                                <option value="SE" ${uf === "SE" ? "selected" : ""}>SE</option>
                                                <option value="TO" ${uf === "TO" ? "selected" : ""}>TO</option>
                                            </select>
                                        `;
                                    }
    
                                    conteudo = conteudo + `</div>
                                <div class="col-md-3 position-relative">`;
                                    if(!cep || !/^\d{8}$/.test(cep)) {
                                        conteudo = conteudo + `
                                            <label for="cep" class="form-label">CEP</label>
                                            <input type="text" class="form-control" id="cep" name="cep" required />
                                            <span class="text-danger">Informe um CEP valido!</span>
                                        `
                                    } else {
                                        conteudo = conteudo + `
                                            <label for="cep" class="form-label">CEP</label>
                                            <input type="text" class="form-control" id="cep" name="cep" value="${cep}" required />
                                        `
                                    }
                                    
                                    conteudo = conteudo + `</div>
                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Enviar formulário</button>
                                    <a class="btn btn-secondary" href="/">Voltar</a>
                                </div>
                            </form>
                        </div>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
                    </body>
                </html>      
            `;

        resposta.send(conteudo);
        resposta.end();
    }
})

app.get("/listaUsers", (requisicao, resposta) => {
    let conteudo=`
            <html lang="pt-br">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Formulário</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                    <style>
                        body {
                            background-color: #121212;
                            color: #e0e0e0;
                        }
                        .container {
                            background-color: rgb(44, 44, 44);
                            padding: 1rem;
                            border-radius: 0.5rem;
                        }
                        .table {
                            background-color: rgb(44, 44, 44);
                        }
                        .table th, .table td {
                            border-color: #333 !important;
                        }
                        .btn-primary {
                            background-color: #bb86fc;
                            border-color: #bb86fc;
                        }
                        .btn-secondary {
                            background-color: #03dac6;
                            border-color: #03dac6;
                        }
                    </style>
                </head>
                <body>
                    <div class="container w-75 mb-5 mt-5">
                        <table class="table table-dark table-striped-columns">
                            <thead>
                                <tr>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Sobrenome</th>
                                    <th scope="col">Nome de usuario</th>
                                    <th scope="col">Cidade</th>
                                    <th scope="col">UF</th>
                                    <th scope="col">CEP</th>
                                </tr>
                            </thead>
                            <tbody> `;
                            for(let i = 0; i < listaUsers.length; i++) {
                                conteudo = conteudo + `
                                        <tr>
                                            <td>${listaUsers[i].nome}</td>
                                            <td>${listaUsers[i].sobrenome}</td>
                                            <td>${listaUsers[i].nomeUsuario}</td>
                                            <td>${listaUsers[i].cidade}</td>
                                            <td>${listaUsers[i].uf}</td>
                                            <td>${listaUsers[i].cep}</td>
                                        </tr>    
                                `
                            }

    conteudo = conteudo + ` </tbody>
                        </table>
                        <a class="btn btn-secondary" href="/clientes">Retornar ao cadastro</a>
                     </div>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </html>`
    resposta.send(conteudo);
    resposta.end();
})

app.listen(port, host, () => {
    console.log(`Servidor em execucao em http://${host}:${port}/`);
})