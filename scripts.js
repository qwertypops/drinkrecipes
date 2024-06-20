document.addEventListener('DOMContentLoaded', () => {
    const recipes = {
        "Captain Morgan Spiced Gold": [
            {
                name: "Captain's Delight",
                ingredients: [
                    "1.5 oz Captain Morgan Spiced Gold",
                    "3 oz pineapple juice",
                    "0.5 oz lime juice",
                    "0.5 oz simple syrup",
                    "Ice"
                ],
                instructions: [
                    "Fill a shaker with ice.",
                    "Add Captain Morgan Spiced Gold, pineapple juice, lime juice, and simple syrup.",
                    "Shake well and strain into a glass filled with ice.",
                    "Garnish with a pineapple slice."
                ]
            },
            // Add more Captain Morgan Spiced Gold recipes here
        ],
        "Bacardi Rum": [
            {
                name: "Bacardi Mojito",
                ingredients: [
                    "1.5 oz Bacardi Rum",
                    "10 fresh mint leaves",
                    "0.5 lime, cut into 4 wedges",
                    "2 tbsp white sugar",
                    "1 cup ice cubes",
                    "0.5 cup soda water"
                ],
                instructions: [
                    "Muddle mint leaves and 1 lime wedge in a sturdy glass.",
                    "Add 2 more lime wedges and the sugar, and muddle again to release the lime juice.",
                    "Fill the glass with ice cubes.",
                    "Pour the rum over the ice, and fill the glass with soda water.",
                    "Stir, taste, and add more sugar if desired.",
                    "Garnish with the remaining lime wedge."
                ]
            },
            // Add more Bacardi Rum recipes here
        ],
        // Add more alcohol types and their recipes here
    };

    const alcoholTypesElement = document.getElementById('alcohol-types');
    const recipesElement = document.getElementById('recipes');

    Object.keys(recipes).forEach(alcoholType => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = alcoholType;
        link.addEventListener('click', () => displayRecipes(alcoholType));
        listItem.appendChild(link);
        alcoholTypesElement.appendChild(listItem);
    });

    function displayRecipes(alcoholType) {
        recipesElement.innerHTML = '';
        const selectedRecipes = recipes[alcoholType];

        selectedRecipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');

            const titleElement = document.createElement('h2');
            titleElement.textContent = recipe.name;
            recipeElement.appendChild(titleElement);

            const ingredientsElement = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.textContent = ingredient;
                ingredientsElement.appendChild(ingredientItem);
            });
            recipeElement.appendChild(ingredientsElement);

            const instructionsElement = document.createElement('p');
            instructionsElement.textContent = 'Instructions:';
            recipeElement.appendChild(instructionsElement);

            const instructionsListElement = document.createElement('ul');
            recipe.instructions.forEach(instruction => {
                const instructionItem = document.createElement('li');
                instructionItem.textContent = instruction;
                instructionsListElement.appendChild(instructionItem);
            });
            recipeElement.appendChild(instructionsListElement);

            recipesElement.appendChild(recipeElement);
        });
    }

    // Display the first alcohol type's recipes by default
    if (Object.keys(recipes).length > 0) {
        displayRecipes(Object.keys(recipes)[0]);
    }
});
