### Exercice 5

Nous allons utiliser mobx pour migrer la gestion des données vers ce qu'on appelle un 'store' .

Il faut installer mobx : 
```
npm install mobx@mobx4 --save
npm install mobx-react --save
```

Utilisont le getting-started de mobx (https://mobx.js.org/getting-started.html#reactive-reactjs-components)
- Dans un premier temps, il va falloir migrer la gestion de nos données dans un store. Pour cela, nous allons creer un dossier 'store' dans lequel nous allons créer un fichier 'TodoStore'. Il s'agit d'une classe qui a une propriété 'todos' et une méthode setTodos

Une fois que c'est fait, il faut creer une instance de cette classe. A la fin du fichier du store, ajouter 
```
export const todoStore = new TodoStore()
```

Ce qui permet d'exporter une seule instance de notre store et de pouvoir l'importer ou bon nous semble (ou presque :) )

une fois effectué, nous allons rendre notre store réactif, pour cela nous allons utiliser les annotations :
- @observable
- @action

Ces annotations permettent de rendre le store réactif 
![](https://mobx.js.org/docs/flow.png)

Maintenant que notre store est prêt, nous allons mettre en place un composant qui s'appelle "Provider" https://github.com/mobxjs/mobx-react#provider-and-inject

- Ce qui nous intéresse c'est de rendre toute l'application capable d'injecter le store dans les composants qui ont besoin. De ce fait, il va falloir modifier le fichier index.js à la racine du dossier src pour qu'il englobe toute notre application.

Un peu d'aide : 

```
import { Provider } from 'mobx-react'
import { todoStore } from '...'

<Provider TodoStore=...>
  ...
</Provider>
```

Une fois que le provider est en place, il "suffit" d'injecter dans les composants qui en ont besoin, notre store. Pour cela, nous allons utiliser l'annotation : 'inject' (https://github.com/mobxjs/mobx-react#provider-and-inject)

Ce qui permettra de pouvoir accèder au store depuis les props du composant : `this.props.[NomDuStore].[Propriété]`

- Il faut maintenant mettre à jour le store apres l'appel à l'API. Il est possible d'appeller les actions du store depuis la prop injectée dans le composant (au moment du `ComponentWillMount`)

- Maintenant que notre store est correctement chargé depuis l'API, il faut modifier la fonction de render du composant `TodoList` pour utiliser les données qui viennent du store. Pour que le composant observe les modifications qui sont effectués suite aux différents appels des actions, il faut utiliser l'annotation `@observer` (https://github.com/mobxjs/mobx-react#provider-and-inject)

Maintenant, des que votre store executera une action sur une propriété observable, les observers de ce meme store auront une 'notification' de mise à jour grace au pattern observer/observable

Vous devriez avoir le même résultat qu'a la fin de l'exercice 4, cependant les todos sont dans le store.

- Faites le refactor nécessaire pour déporter les actions d'ajout et de suppression d'une todo dans le store

- Faites le refactor pour déplacer le `isLogged` dans le store
