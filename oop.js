function Pessoa(nomeTodo , alt , disc , com , equipa , data){
	this.nome = nomeTodo
	this.altura = alt
	this.disciplinaFavorita = disc
	this.comidaFavorita = com
	this.equipafavorita = equipa
	this.dataNascimento = data
	this.saudacao = function(){
		console.log("Olá, o meu nome é " + this.nome + " tenho " + this.altura + " metros. A minha disciplina favorita é " + this.disciplinaFavorita + ". A minha comida favorita é " + this.comidaFavorita + ". Sou do " + this.equipafavorita + ". E a minha data de nascimento é " + this.dataNascimento + ".") ;
	}
}
var andre = new Pessoa("André Costa" , "1,70" , "matemática" , "pizza" , "Benfica" , "14/06/2000");
andre.saudacao();

var antonioL = new Pessoa("António Lourenço" , "1,75" , "português" , "lasanha" , "Porto" , "15/02/2000");
antonioL.saudacao();

var beatriz = new Pessoa("Beatriz Barreto" , "1,60" , "biologia" , "bitoque" , "Benfica" , "28/04/2000");
beatriz.saudacao();

var franciscoE = new Pessoa("Francisco Esteves" , "1,72" , "inglês" ,"bacalhau" , "Porto" , "29/06/2000");
franciscoE.saudacao();

var franciscoF = new Pessoa("Francisco Rodrigues" , "1,80" , "fisica" , "hambúrguer" , "Benfica" , "31/12/2000");
franciscoF.saudacao();

var daniel = new Pessoa("Daniel Serrano" , "1,85" , "biologia" , "pizza" , "Benfica" , "25/07/2000");
daniel.saudacao();

var fabio = new Pessoa("Fábio Franco" , "1,90" , "matemática" , "bitoque" , "Sporting" , "05/05/2000");
fabio.saudacao();

var joaoN = new Pessoa("João Neves" , "1,75" , "quimíca" , "pizza" , "Benfica" , "15/03/2000");
joaoN.saudacao();

var joaoM = new Pessoa("João Madeira" , "1,85" , "matemática" , "bacalhau" , "Sporting" , "28/07/2000");
joaoM.saudacao();

var goncalo = new Pessoa("Gonçalo Simões" , "1,65" , "api" , "bitoque" , "Benfica" , "04/04/2000");
goncalo.saudacao();

var luis = new Pessoa("Luís Catarino" , "1,86" , "api" , "pizza" , "Benfica" , "19/07/2000");
luis.saudacao();

var miguelP = new Pessoa("Miguel Pinto" , "1,76" , "matemática" , "pizza" , "Benfica" , "25/07/2000");
miguelP.saudacao();

var mines = new Pessoa("Maria Inês Sousa" , "1,70" , "biologia" , "hambúrguer" , "Sporting" , "29/06/2000");
mines.saudacao();

var nuno = new Pessoa("Nuno Rodrigues" , "1,50" , "português" , "lasanha" , "Benfica" , "06/09/2000");
nuno.saudacao();

var pedro = new Pessoa("Pedro Fonseca" , "1,89" , "api" , "pizza" , "Benfica" , "03/11/2000");
pedro.saudacao();

var miguelD = new Pessoa("Miguel Dionísio" , "1,75" , "api" , "lasanha" , "Benfica" , "22/04/2000");
miguelD.saudacao();

var ricardoG = new Pessoa("Ricardo Gonçalves" , "1,77" , "matemática" , "bacalhau" , "Benfica" , "08/08/2000");
ricardoG.saudacao();

var sandu = new Pessoa("Sandu Lungo" , "1,73" , "inglês" , "pizza" , "Porto" , "03/02/2000");
sandu.saudacao();

var ricardoP = new Pessoa("Ricardo Pereira" , "1,60" , "biologia" , "lasanha" , "Benfica" , "09/08/2000");
ricardoP.saudacao();

var rodrigo = new Pessoa("Rodrigo Valério" , "1,90" , "português" , "bacalhau" , "Sporting" , "10/11/2000");
rodrigo.saudacao();

var samuel = new Pessoa("Samuel Vaz" , "1,70" , "matemática" , "hambúrguer" , "Benfica" , "05/06/2000");
samuel.saudacao();
  
var tomas = new Pessoa("Tomás Feith" , "1,72" , "fisica" , "lasanha" , "Sporting" , "24/09/2000");
tomas.saudacao();

var tiago = new Pessoa("Tiago Arriegas" , "1,71" , "api" , "bitoque" , "Benfica" , "21/11/2000");
tiago.saudacao();

var antonioC = new Pessoa("António Campaniço" , "1,80" , "api" , "lasanha" , "Benfica" , "01/01/2000");
antonioC.saudacao();
