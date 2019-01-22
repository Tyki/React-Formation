### Exercice 2

Maintenant que nous savons que l'utilisateur est connecté, il faut indiquer au composant parent que nous sommes enfin connecté ! 

Si vous regardez dans le fichier "App.js" vous verrez qu'il y à un state `isLogged` qu'il faut mettre à jour afin de pouvoir le state du composant App.

Ici, c'est le composant App qui va décider de quel composant doit être affiché. Tant que l'utilisateur n'est pas connecté, il s'agit du composant 'Login', sinon cela affiché 'Je suis connecté'

Afin de modifier le state du parent, il va falloir passer une props "callback" au composant Login qui nous permettra de mettre à jour le state du composant App.

https://reactjs.org/docs/components-and-props.html

Une props peut être un attribut d'un composant custom ou d'une balise html native.

Exemple :

```
<MyComponent prop={value}>
```

ou 
```
<input type={value} />
```

Vous pouvez aussi passer une fonction en props à travers les composants. C'est ce qu'il faut faire ici.

Une fois que vous avez réussi à changer le state, vous pouvez importer le composant todoList qui est prêt à être modifié.

## Suite

Dans le composant todoList, il va falloir remplacer l'affichage de la todo statique par les todos qui sont dans le state. Pour cela il va falloir utiliser une des Array functions : le .map 
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) combiné avec du JSX : https://reactjs.org/docs/lists-and-keys.html

