angular.module("listaTelefonica").controller("novoContatoController",['$scope','contatosAPI','$location','operadoras','contatos',function($scope,contatosAPI,$location,operadoras,contatos){
				$scope.operadoras = operadoras.data;
				var contatosBase = [];
				contatosBase =  contatos.data;
				
				$scope.adicionarContato = function(contato){
					contato.id = contatosBase.length + 1;
					contatosAPI.saveContato(contato).success(function(data){
						delete $scope.contato;
						$scope.contatoForm.$setPristine();
						$location.path("/contatos");
					});
				};
				
			}]);
