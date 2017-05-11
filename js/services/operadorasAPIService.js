// Service com os métodos resposáveis pelas buscas e inserções na base de operadoras
angular.module("listaTelefonica").service("operadorasAPI",['$http','config',function($http,config){
    this.getOperadoras = function() {
        return $http.get(config.baseUrl + "/operadoras");
    };
}]);