### Exercice 4

Nous allons maintenant utiliser les fonctions du cycle de vie pour charger notre todoList dynamiquemnet depuis une API. 
(https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class).

Un mini serveur est disponible dans le dossier `serveur` qui expose une route qui va nous permettre de charger des todos depuis une API :
Pour le lancer 'node index.js'. 
L'API est disponible sur http://localhost:3001/getTodos. 

L'exercice est :
- de charger le composant TodoList avec un composant du cycle de vie
- de mettre en place un helper qui va se connecter à notre petite API en utilisant l'API fetch pour charger les données dans le composant
- de gerer l'UX en mettant en place un composant loader le temps que les données soient présentes dans le composant 