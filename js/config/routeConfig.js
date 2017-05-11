// Realiza o roteamento entre telas da sigle-page
angular.module("listaTelefonica").config(['$routeProvider',function($routeProvider){
    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "contatosController",
        resolve:{
            contatos:['contatosAPI',function(contatosAPI){
                return contatosAPI.getContatos();
            }],
            operadoras:['operadorasAPI',function(operadorasAPI){
                return operadorasAPI.getOperadoras();
            }]   
        },
    });
    $routeProvider.when("/novoContato",{
        templateUrl: "view/novoContato.html",
        controller: "novoContatoController",
        resolve:{
            contatos:['contatosAPI',function(contatosAPI){
                return contatosAPI.getContatos();
            }],
            operadoras:['operadorasAPI',function(operadorasAPI){
                return operadorasAPI.getOperadoras();
            }]   
        }
    });
    $routeProvider.when("/detalhesContato/:id",{
        templateUrl: "view/detalhesContato.html",
        controller: "detalhesContatoController",
        resolve:{
            contato:['contatosAPI','$route',function (contatosAPI,$route){
                return contatosAPI.getContato($route.current.params.id);
            }]
        }
    });
    $routeProvider.when("/error",{
        templateUrl: "view/error.html"
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
}]);