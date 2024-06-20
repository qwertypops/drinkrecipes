document.addEventListener('DOMContentLoaded', () => {
    const recipes = {
        "Captain morgan spiced gold": [
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
        {
            name: "Captain and Cola",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz cola",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cola.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Spiced Apple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz apple juice",
                "0.5 oz lemon juice",
                "Cinnamon stick",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, apple juice, and lemon juice.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a cinnamon stick."
            ]
        },
        {
            name: "Spicy Ginger",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz ginger beer",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and ginger beer.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Captain's Mule",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz ginger beer",
                "0.5 oz lime juice",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, ginger beer, and lime juice.",
                "Stir gently and garnish with mint leaves."
            ]
        },
        {
            name: "Spiced Mojito",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz soda water",
                "0.5 oz lime juice",
                "Mint leaves",
                "1 tsp sugar",
                "Ice"
            ],
            instructions: [
                "Muddle mint leaves and sugar in a glass.",
                "Fill the glass with ice.",
                "Add Captain Morgan Spiced Gold and lime juice.",
                "Top with soda water and stir gently."
            ]
        },
        {
            name: "Tropical Storm",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz orange juice",
                "2 oz pineapple juice",
                "Grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, orange juice, and pineapple juice.",
                "Shake well and strain into a glass filled with ice.",
                "Drizzle grenadine on top and garnish with an orange slice."
            ]
        },
        {
            name: "Spiced Lemonade",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz lemonade",
                "Lemon wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and lemonade.",
                "Stir gently and garnish with a lemon wedge."
            ]
        },
        {
            name: "Spiced Rum Punch",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz pineapple juice",
                "2 oz orange juice",
                "0.5 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, pineapple juice, orange juice, and grenadine.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a cherry and orange slice."
            ]
        },
        {
            name: "Captain's Coffee",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "5 oz hot coffee",
                "Whipped cream",
                "Ground cinnamon"
            ],
            instructions: [
                "Pour hot coffee into a mug.",
                "Add Captain Morgan Spiced Gold and stir.",
                "Top with whipped cream and a sprinkle of ground cinnamon."
            ]
        },
        {
            name: "Spiced Orange",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz orange juice",
                "Orange slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and orange juice.",
                "Stir gently and garnish with an orange slice."
            ]
        },
        {
            name: "Captain's Cranberry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz cranberry juice",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cranberry juice.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Spiced Mango",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz mango juice",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and mango juice.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Captain's Sunset",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz orange juice",
                "0.5 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and orange juice.",
                "Stir gently and drizzle grenadine on top.",
                "Garnish with an orange slice."
            ]
        },
        {
            name: "Spiced Tea",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz iced tea",
                "Lemon wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and iced tea.",
                "Stir gently and garnish with a lemon wedge."
            ]
        },
        {
            name: "Captain's Pineapple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pineapple juice",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and pineapple juice.",
                "Stir gently and garnish with a pineapple slice."
            ]
        },
        {
            name: "Spiced Berry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz mixed berry juice",
                "Berry skewer",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and mixed berry juice.",
                "Stir gently and garnish with a berry skewer."
            ]
        },
        {
            name: "Captain's Sour",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "0.5 oz lemon juice",
                "0.5 oz lime juice",
                "0.5 oz simple syrup",
                "Lemon twist",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, lemon juice, lime juice, and simple syrup.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a lemon twist."
            ]
        },
        {
            name: "Spiced Mint Julep",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "0.5 oz simple syrup",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Muddle mint leaves and simple syrup in a glass.",
                "Fill the glass with ice.",
                "Add Captain Morgan Spiced Gold.",
                "Stir gently and garnish with more mint leaves."
            ]
        },
        {
            name: "Captain's Tropical",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz orange juice",
                "2 oz pineapple juice",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, orange juice, and pineapple juice.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple slice."
            ]
        },
        {
            name: "Captain's Cooler",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz lemonade",
                "Splash of soda water",
                "Lemon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and lemonade.",
                "Top with a splash of soda water.",
                "Stir gently and garnish with a lemon slice."
            ]
        },
        {
            name: "Captain's Caribbean",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz coconut water",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and coconut water.",
                "Stir gently and garnish with a pineapple slice."
            ]
        },
        {
            name: "Spiced Limeade",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz limeade",
                "Lime wheel",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and limeade.",
                "Stir gently and garnish with a lime wheel."
            ]
        },
        {
            name: "Captain's Citrus",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz orange juice",
                "1 oz lemon juice",
                "Lemon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, orange juice, and lemon juice.",
                "Stir gently and garnish with a lemon slice."
            ]
        },
        {
            name: "Captain's Ginger Ale",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz ginger ale",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and ginger ale.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Spiced Cherry Cola",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz cherry cola",
                "Cherry",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cherry cola.",
                "Stir gently and garnish with a cherry."
            ]
        },
        {
            name: "Captain's Fruit Punch",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz pineapple juice",
                "2 oz orange juice",
                "1 oz grenadine",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Captain Morgan Spiced Gold, pineapple juice, orange juice, and grenadine.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple slice."
            ]
        },
        {
            name: "Captain's Peach",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz peach nectar",
                "Peach slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and peach nectar.",
                "Stir gently and garnish with a peach slice."
            ]
        },
        {
            name: "Spiced Lemon Twist",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz lemon soda",
                "Lemon twist",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and lemon soda.",
                "Stir gently and garnish with a lemon twist."
            ]
        },
        {
            name: "Captain's Watermelon",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz watermelon juice",
                "Watermelon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and watermelon juice.",
                "Stir gently and garnish with a watermelon slice."
            ]
        },
        {
            name: "Spiced Raspberry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz raspberry juice",
                "Raspberry skewer",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and raspberry juice.",
                "Stir gently and garnish with a raspberry skewer."
            ]
        },
        {
            name: "Captain's Blue Lagoon",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz blue curaçao",
                "Lemon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and blue curaçao.",
                "Stir gently and garnish with a lemon slice."
            ]
        },
        {
            name: "Captain's Kiwi",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz kiwi juice",
                "Kiwi slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and kiwi juice.",
                "Stir gently and garnish with a kiwi slice."
            ]
        },
        {
            name: "Spiced Passionfruit",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz passionfruit juice",
                "Passionfruit slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and passionfruit juice.",
                "Stir gently and garnish with a passionfruit slice."
            ]
        },
        {
            name: "Captain's Pink Lemonade",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pink lemonade",
                "Lemon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and pink lemonade.",
                "Stir gently and garnish with a lemon slice."
            ]
        },
        {
            name: "Captain's Blackcurrant",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz blackcurrant juice",
                "Lemon twist",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and blackcurrant juice.",
                "Stir gently and garnish with a lemon twist."
            ]
        },
        {
            name: "Captain's Cucumber Cooler",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz cucumber juice",
                "Cucumber slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cucumber juice.",
                "Stir gently and garnish with a cucumber slice."
            ]
        },
        {
            name: "Captain's Plum",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz plum juice",
                "Plum slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and plum juice.",
                "Stir gently and garnish with a plum slice."
            ]
        },
        {
            name: "Spiced Grapefruit",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz grapefruit juice",
                "Grapefruit slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and grapefruit juice.",
                "Stir gently and garnish with a grapefruit slice."
            ]
        },
        {
            name: "Captain's Blood Orange",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz blood orange juice",
                "Orange slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and blood orange juice.",
                "Stir gently and garnish with an orange slice."
            ]
        },
        {
            name: "Captain's Pomegranate",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pomegranate juice",
                "Pomegranate seeds",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and pomegranate juice.",
                "Stir gently and garnish with pomegranate seeds."
            ]
        },
        {
            name: "Spiced Pear",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pear juice",
                "Pear slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and pear juice.",
                "Stir gently and garnish with a pear slice."
            ]
        },
        {
            name: "Captain's Strawberry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz strawberry juice",
                "Strawberry",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and strawberry juice.",
                "Stir gently and garnish with a strawberry."
            ]
        },
        {
            name: "Spiced Melon",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz melon juice",
                "Melon ball skewer",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and melon juice.",
                "Stir gently and garnish with a melon ball skewer."
            ]
        },
        {
            name: "Captain's Papaya",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz papaya juice",
                "Papaya slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and papaya juice.",
                "Stir gently and garnish with a papaya slice."
            ]
        },
        {
            name: "Spiced Guava",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz guava juice",
                "Guava slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and guava juice.",
                "Stir gently and garnish with a guava slice."
            ]
        },
        {
            name: "Captain's Lychee",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz lychee juice",
                "Lychee skewer",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and lychee juice.",
                "Stir gently and garnish with a lychee skewer."
            ]
        },
        {
            name: "Spiced Dragon Fruit",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz dragon fruit juice",
                "Dragon fruit slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and dragon fruit juice.",
                "Stir gently and garnish with a dragon fruit slice."
            ]
        },
        {
            name: "Captain's Mulled Cider",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "5 oz hot apple cider",
                "Cinnamon stick",
                "Orange slice"
            ],
            instructions: [
                "Pour hot apple cider into a mug.",
                "Add Captain Morgan Spiced Gold and stir.",
                "Garnish with a cinnamon stick and an orange slice."
            ]
        },
        {
            name: "Captain's Maple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz maple water",
                "Maple syrup",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and maple water.",
                "Stir gently and drizzle maple syrup on top."
            ]
        },
        {
            name: "Captain's Cherry Blossom",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz cherry juice",
                "Cherry blossom",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and cherry juice.",
                "Stir gently and garnish with a cherry blossom."
            ]
        },
        {
            name: "Spiced Coconut",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz coconut milk",
                "Coconut flakes",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and coconut milk.",
                "Stir gently and garnish with coconut flakes."
            ]
        },
        {
            name: "Captain's Cinnamon Apple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz apple cider",
                "Cinnamon stick",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and apple cider.",
                "Stir gently and garnish with a cinnamon stick."
            ]
        },
        {
            name: "Spiced Grapefruit Soda",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz grapefruit soda",
                "Grapefruit twist",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and grapefruit soda.",
                "Stir gently and garnish with a grapefruit twist."
            ]
        },
        {
            name: "Captain's Blueberry Lemonade",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz blueberry lemonade",
                "Lemon wheel",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and blueberry lemonade.",
                "Stir gently and garnish with a lemon wheel."
            ]
        },
        {
            name: "Spiced Coconut Pineapple",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz coconut water",
                "1 oz pineapple juice",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, coconut water, and pineapple juice.",
                "Stir gently and garnish with a pineapple slice."
            ]
        },
        {
            name: "Captain's Iced Latte",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "4 oz iced coffee",
                "Milk",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and iced coffee.",
                "Top with milk and stir gently."
            ]
        },
        {
            name: "Spiced Mango Lime",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz mango juice",
                "0.5 oz lime juice",
                "Lime wedge",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, mango juice, and lime juice.",
                "Stir gently and garnish with a lime wedge."
            ]
        },
        {
            name: "Captain's Almond Joy",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz almond milk",
                "1 oz coconut milk",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, almond milk, and coconut milk.",
                "Stir gently."
            ]
        },
        {
            name: "Spiced Pineapple Coconut",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz pineapple juice",
                "1 oz coconut milk",
                "Pineapple slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, pineapple juice, and coconut milk.",
                "Stir gently and garnish with a pineapple slice."
            ]
        },
        {
            name: "Captain's Tropical Smoothie",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz pineapple juice",
                "2 oz coconut milk",
                "1 oz mango juice",
                "Ice"
            ],
            instructions: [
                "Fill a blender with ice.",
                "Add Captain Morgan Spiced Gold, pineapple juice, coconut milk, and mango juice.",
                "Blend until smooth and pour into a glass."
            ]
        },
        {
            name: "Spiced Hibiscus",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz hibiscus tea",
                "Hibiscus flower",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and hibiscus tea.",
                "Stir gently and garnish with a hibiscus flower."
            ]
        },
        {
            name: "Captain's Raspberry Mint",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz raspberry juice",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and raspberry juice.",
                "Stir gently and garnish with mint leaves."
            ]
        },
        {
            name: "Spiced Lemon Ginger",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz ginger beer",
                "1 oz lemon juice",
                "Lemon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, ginger beer, and lemon juice.",
                "Stir gently and garnish with a lemon slice."
            ]
        },
        {
            name: "Captain's Coconut Mint",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz coconut water",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and coconut water.",
                "Stir gently and garnish with mint leaves."
            ]
        },
        {
            name: "Spiced Blackberry",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz blackberry juice",
                "Blackberry skewer",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and blackberry juice.",
                "Stir gently and garnish with a blackberry skewer."
            ]
        },
        {
            name: "Captain's Orange Mint",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz orange juice",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and orange juice.",
                "Stir gently and garnish with mint leaves."
            ]
        },
        {
            name: "Spiced Cranberry Orange",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "2 oz cranberry juice",
                "2 oz orange juice",
                "Orange twist",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, cranberry juice, and orange juice.",
                "Stir gently and garnish with an orange twist."
            ]
        },
        {
            name: "Captain's Lemon Ginger",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz ginger ale",
                "1 oz lemon juice",
                "Lemon slice",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold, ginger ale, and lemon juice.",
                "Stir gently and garnish with a lemon slice."
            ]
        },
        {
            name: "Spiced Strawberry Mint",
            ingredients: [
                "1.5 oz Captain Morgan Spiced Gold",
                "3 oz strawberry juice",
                "Mint leaves",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Captain Morgan Spiced Gold and strawberry juice.",
                "Stir gently and garnish with mint leaves."
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
        {
            name: "Bacardi Daiquiri",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1 oz lime juice",
                "0.5 oz simple syrup",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Bacardi Rum, lime juice, and simple syrup.",
                "Shake well and strain into a chilled glass.",
                "Garnish with a lime wheel."
            ]
        },
        {
            name: "Bacardi Pina Colada",
            ingredients: [
                "2 oz Bacardi Rum",
                "1 oz coconut cream",
                "1 oz heavy cream",
                "6 oz fresh pineapple juice",
                "1/2 cup crushed ice"
            ],
            instructions: [
                "Add all ingredients to a blender.",
                "Blend until smooth.",
                "Pour into a chilled glass and garnish with pineapple slice and maraschino cherry."
            ]
        },
        {
            name: "Bacardi Rum Punch",
            ingredients: [
                "2 oz Bacardi Rum",
                "1 oz pineapple juice",
                "1 oz orange juice",
                "1/2 oz lime juice",
                "1/2 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with an orange slice and cherry."
            ]
        },
        {
            name: "Bacardi Cuba Libre",
            ingredients: [
                "2 oz Bacardi Rum",
                "4 oz cola",
                "1/2 lime",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Bacardi Rum and cola.",
                "Squeeze lime juice into the glass and drop the lime wedge in.",
                "Stir gently."
            ]
        },
        {
            name: "Bacardi Mai Tai",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1/2 oz triple sec",
                "1/2 oz lime juice",
                "1/2 oz orgeat syrup",
                "1/2 oz dark rum",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Bacardi Rum, triple sec, lime juice, and orgeat syrup.",
                "Shake well and strain into a glass filled with ice.",
                "Float dark rum on top and garnish with a mint sprig."
            ]
        },
        {
            name: "Bacardi Hurricane",
            ingredients: [
                "2 oz Bacardi Rum",
                "1 oz passion fruit juice",
                "1 oz orange juice",
                "1/2 oz lime juice",
                "1/2 oz simple syrup",
                "1/2 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with an orange slice and cherry."
            ]
        },
        {
            name: "Bacardi Strawberry Daiquiri",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1 oz lime juice",
                "1/2 oz simple syrup",
                "1 cup fresh strawberries",
                "Ice"
            ],
            instructions: [
                "Add all ingredients to a blender.",
                "Blend until smooth.",
                "Pour into a chilled glass and garnish with a strawberry."
            ]
        },
        {
            name: "Bacardi Zombie",
            ingredients: [
                "1 oz Bacardi Rum",
                "1 oz dark rum",
                "1/2 oz apricot brandy",
                "1 oz pineapple juice",
                "1 oz papaya juice",
                "1/2 oz lime juice",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a cherry and mint sprig."
            ]
        },
        {
            name: "Bacardi Rum Runner",
            ingredients: [
                "1 oz Bacardi Rum",
                "1 oz blackberry liqueur",
                "1 oz banana liqueur",
                "1 oz orange juice",
                "1 oz pineapple juice",
                "Splash grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with an orange slice and cherry."
            ]
        },
        {
            name: "Bacardi Planter's Punch",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1/4 oz grenadine",
                "2 oz pineapple juice",
                "2 oz orange juice",
                "Dash bitters",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple slice and cherry."
            ]
        },
        {
            name: "Bacardi Painkiller",
            ingredients: [
                "2 oz Bacardi Rum",
                "4 oz pineapple juice",
                "1 oz orange juice",
                "1 oz cream of coconut",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple wedge and nutmeg."
            ]
        },
        {
            name: "Bacardi Blue Lagoon",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1 oz blue curaçao",
                "4 oz lemonade",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Bacardi Rum and blue curaçao.",
                "Top with lemonade and stir gently.",
                "Garnish with a lemon slice."
            ]
        },
        {
            name: "Bacardi Mai Tai Twist",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1/2 oz amaretto",
                "1/2 oz triple sec",
                "1/2 oz lime juice",
                "1/2 oz grenadine",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a mint sprig."
            ]
        },
        {
            name: "Bacardi Pina Colada Light",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1 oz coconut water",
                "1 oz pineapple juice",
                "1 oz lime juice",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add all ingredients.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a pineapple wedge."
            ]
        },
        {
            name: "Bacardi Cherry Coke",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "4 oz cherry cola",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Bacardi Rum and cherry cola.",
                "Stir gently.",
                "Garnish with a cherry."
            ]
        },
        {
            name: "Bacardi Rum Sour",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "1 oz lemon juice",
                "1/2 oz simple syrup",
                "Ice"
            ],
            instructions: [
                "Fill a shaker with ice.",
                "Add Bacardi Rum, lemon juice, and simple syrup.",
                "Shake well and strain into a glass filled with ice.",
                "Garnish with a lemon twist."
            ]
        },
        {
            name: "Bacardi Ginger Ale",
            ingredients: [
                "1.5 oz Bacardi Rum",
                "4 oz ginger ale",
                "Ice"
            ],
            instructions: [
                "Fill a glass with ice.",
                "Add Bacardi Rum and ginger ale.",
                "Stir gently.",
                "Garnish with a lime wedge."
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
