Muclara agora deve responder:
Qual a diferença de map para forEach? Quando devo utilizar cada caso?
Por que na primeira questão eu pedi para usar forEach e na segunda map?

<Resposta da Blinda aqui S2>
[Tu é muito lindo sabia *-*]
1. map()
Recebe função como parâmetro e executa ela pra cada elemento, retornando um array novo com os resultados. Também pode encaixar outros métodos depois (porque não retorna indefinido).
2. forEach()
Também recebe a função como argumento e executa para cada elemento, mas não retorna um array novo, e sim undefined. É ligeiramente mais devagar do que o map().
3. Usos
Usar map é melhor se for o caso de mudar os dados e guardar essa mudança, mas se não precisar de um array novo, forEach ou um for servem.
4. Primeira e segunda questões
Porque a primeira precisava de um valor inteiro baseado no array, enquanto a segunda precisava de um array novo com as modificações.


### Quais desses casos funcionaria para a função forEach? E por que? (pode ser mais de um)

#### Pergaminho 1

```javascript
entrada.forEach((element) => (soma += element));
```

#### Pergaminho 2

```javascript
entrada.forEach((element) => {soma += element});
```

#### Pergaminho 3

```javascript
entrada.forEach((element) => { return (soma += element) });
```

#### Pergaminho 4

```javascript
entrada.forEach((element) => { 
	soma += element
});
```

#### Pergaminho 5

```javascript
entrada.forEach((element) => { 
	return soma += element;
});
```

<Resposta da Blinda aqui S2>
- Pergaminhos 1, 2, 3, 4 e funcionam com o resultado esperado, - hipótese - porque ao contrário das arrow functions normais e como provavelmente ocorreria com o map, o .forEach() está apenas executando uma ação, sendo assim, não é necessário aplicar as mesmas regras de retorno (acho)


### Quais desses casos funcionaria para a função map? E por que? (pode ser mais de um)

#### Pergaminho 1

```javascript
entrada.map(element => element**2)
```

#### Pergaminho 2

```javascript
entrada.map(element => { element**2 })
```

#### Pergaminho 3

```javascript
entrada.map(element => { return element**2 })
```

#### Pergaminho 4

```javascript
entrada.map(element => {
	element**2
})
```

#### Pergaminho 5

```javascript
entrada.map(element => {
	return element**2;
})
```


<Resposta da Blinda aqui S2>
- Pergaminhos 1, 3 e 5 funcionam adequadamente 
- Pergaminho 2 usa retorno implícito na mesma linha e com {}
- Pergaminho 4 usa retorno implícito em linhas diferentes