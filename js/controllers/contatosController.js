angular.module("listaTelefonica").controller("contatosController",['$scope','contatos','operadoras','contatosAPI','$location',function($scope,contatos,operadoras,contatosAPI,$location){
				$scope.app = "Lista Telefonica";
				$scope.contatos = contatos.data;
				$scope.operadoras = operadoras.data;

				var init = function(){
					calcularImpostos($scope.contatos);
				};

				var calcularImpostos = function (contatos){
					contatos.forEach(function(contato){
						contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
					});
				};
				
				$scope.apagarContatos = function(contatos){
						var contatosExistentes = [];
						 contatos.forEach(function(contato){
							if(contato.selecionado) {
									contatosAPI.deleteContato(contato.id).success(function(data){
								});
							}else{
								contatosExistentes.push(contato);
							}	
						});
						$scope.contatos = contatosExistentes;
						$scope.verificarContatoSelecionado($scope.contatos);
									
				};

				$scope.verificarContatoSelecionado = function (contatos){
					$scope.hasContatoSelecionado = contatos.some(function(contato){
						return contato.selecionado;
					});
				};
				$scope.ordenarPor = function(campo){
					$scope.criterioDeOrdenacao = campo;
					$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
				};

				var counter = 0;
				var calcularImposto = function(preco){
					console.log(counter++);
					var imposto = 1.2;
					return preco * imposto;
				};
				
				init();
							
			}]);
