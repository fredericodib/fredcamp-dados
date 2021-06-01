Muclara agora deve responder:
Qual a diferença de map para forEach? Quando devo utilizar cada caso?
Por que na primeira questão eu pedi para usar forEach e na segunda map?

<Resposta da Blinda aqui S2>

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