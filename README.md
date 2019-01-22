### Exercice 3

Maintenant nous allons mettre en place tout le CRUD de nos todos.

- Mettre en place un composant AddTodo qui se charge d'ajouter des todos à notre liste qui se trouve dans le composant `TodoList`

- Créer un composant stateless `Todo` qui va se charger de l'affichage d'une TODO

Un composant stateless est un composant, qui par définition, n'a pas de state. En react, les composants stateless s'écrivent de la forme suivante : 

```
import React from 'react'

const MyStatelessComponent = (props) => {
  return (
    <div>
      <span>props.title</span>
      ...
    </div>
  )
}


export default MyStatelessComponent
```

Il ne se charge que de l'affichage et des interactions utilisateurs.
Ici notre composant `Todo` va prendre en props notre donnée et  afficher le contenu de la todo. On va y ajouter un bouton qui permettra de retirer la todo ciblée de la liste. Pour cela, on utilisera une props callback et un Array.filter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


## Suite

Finalement, ce qu'on souhaite, c'est aussi de pouvoir éditer une todo, il faut donc pouvoir gêrer un état interne au composant. Il va donc falloir transformer notre composant stateless en composant stateful, gêrer un état interne de modification de la todo et d'émettre les modifications pour que celles-ci soient repercutées dans la liste (Props de callback :) )

Pour generer un ID, vous pouvez utiliser la librairie https://www.npmjs.com/package/uuid déjà présente dans le projet