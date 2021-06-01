Na China antiga era muito comum guerreiros treinarem
em montanhas e cachoeiras. E com o tempo muita dessas
histórias se tornaram lenda. Mas entre todas as histórias
havia uma que se destacou entre as outras.

No ano de 42 AC, Muclara-Shin e suas duas irmãs, Pedrinha e
Bambuzinha, estavam treinando junto de seu mestre Jackie Chan.
Refletindo sobre a vida e a existencia, foi ai que o Mister Chan
olhou para Muclara e fez uma pergunta iconica, que viajou pelas águas
do tempo, e até hoje, mesmo depois de 1000 anos no futuro
ainda é bastente lembrada.

"Muclara, você realmente entende arrow functions?"

Logo em seguida Senhor Chan deu para Muclara diversos
pergaminhos milenares, encontrado pelo avô de Jackie
a mais de 100 anos embaixo de uma duna de areia no Egito
antigo. Dizem os mais tolos, ou talvez mais corajosos, que embaixo
dessas dunas haviam as ruianas de uma civilização antiga
chamada Atlântida. Nestes pergaminhos havia escrito diversos
textos Javascriptos.

Agora, minha cara Muclara, quais pergaminhos são sinônimos?
quais são diferentes? Qual a diferença entre eles? Para resolver
isso Jackie aconselhou Muclara a consultar o sabio Gugou, pergunta-lo
sobre "arrow functions" e "callback funcktions".

### Pergaminho 1

```javascript
entrada.map((e) => e ** 2);
```

### Pergaminho 2

```javascrip
entrada.map((e) => (e ** 2));
```

### Pergaminho 3

```javascript
entrada.map((e) => {
  e ** 2;
});
```

### Pergaminho 4

```javascript
entrada.map((e) => {
  return e ** 2;
});
```

### Pergaminho 5

```javascript
function minhaFunc(n) {
  const retorno = n * n;
  return retorno;
}

entrada.map(minhaFunc);
```

### Pergaminho 6

```javascript
function minhaFunc(n) {
  const retorno = n * n;
  return retorno;
}

entrada.map((e) => minhaFunc(e));
```

### Pergaminho 7

```javascript
function minhaFunc(n) {
  n * n;
}

entrada.map((e) => minhaFunc(e));
```

Agora que Muclara retornou de sua viagem ela deve responder
a pergunta que não que calar:

<Resposta da Blinda aqui S2>