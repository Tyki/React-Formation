### Exercice 1

Créer un composant 'Login' Stateful qui va nous permettre de faire une authentification locale d'un utilisateur.
(https://reactjs.org/docs/react-component.html#overview) et
(https://reactjs.org/docs/react-component.html#constructor)

Pour cela, il faut mettre en place un state (https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) avec deux propriétés :
- username
- password

Une fois votre state mis en place, afficher dans la function 'render', des champs input qui vont permettre de faire la saisie du username et du mot de passe et, pour finir, les relier au state. (https://reactjs.org/docs/forms.html#controlled-components)

Pour finir, ajouter un bouton de soumission de formulaire, vérifier que vos champs 'username' et 'password' ne sont pas vide et faites un console.log('Je suis connecté') si les conditions sont remplies