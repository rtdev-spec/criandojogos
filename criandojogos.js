class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo.toLowerCase(); // Padroniza o tipo
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "usou um ataque desconhecido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplos de heróis
  const heroi1 = new Heroi("Arthas", 30, "guerreiro");
  const heroi2 = new Heroi("Merlin", 150, "mago");
  const heroi3 = new Heroi("Lee", 40, "monge");
  const heroi4 = new Heroi("Ryu", 25, "ninja");
  
  // Laço para executar os ataques
  const herois = [heroi1, heroi2, heroi3, heroi4];
  
  for (const h of herois) {
    h.atacar();
  }
  