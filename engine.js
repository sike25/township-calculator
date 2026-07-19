
class Good {
    constructor(sellOffPrice, timeToMakeInSeconds, ingredients) {
        this.sellOffPrice        = sellOffPrice;
        this.timeToMakeInSeconds = timeToMakeInSeconds;
        this.ingredients         = ingredients;
    }
}


// CROPS
const wheat        = new Good(sellOffPrice=1,  timeToMakeInSeconds=120,   ingredients=[]);
const corn         = new Good(sellOffPrice=3,  timeToMakeInSeconds=300,   ingredients=[]);
const carrot       = new Good(sellOffPrice=5,  timeToMakeInSeconds=600,   ingredients=[]);
const sugarcane    = new Good(sellOffPrice=7,  timeToMakeInSeconds=1200,  ingredients=[]);
const cotton       = new Good(sellOffPrice=9,  timeToMakeInSeconds=1800,  ingredients=[]);
const strawberry   = new Good(sellOffPrice=11, timeToMakeInSeconds=3600,  ingredients=[]);
const tomato       = new Good(sellOffPrice=13, timeToMakeInSeconds=7200,  ingredients=[]);
const pine_tree    = new Good(sellOffPrice=15, timeToMakeInSeconds=10800, ingredients=[]);
const potato       = new Good(sellOffPrice=17, timeToMakeInSeconds=14400, ingredients=[]);
const cacao        = new Good(sellOffPrice=19, timeToMakeInSeconds=28800, ingredients=[]);
const rubber_tree  = new Good(sellOffPrice=29, timeToMakeInSeconds=43200, ingredients=[]);
const silk         = new Good(sellOffPrice=33, timeToMakeInSeconds=54000, ingredients=[]);
const cork_oak     = new Good(sellOffPrice=25, timeToMakeInSeconds=36000, ingredients=[]);
const pepper       = new Good(sellOffPrice=20, timeToMakeInSeconds=18000, ingredients=[]);
const mint         = new Good(sellOffPrice=30, timeToMakeInSeconds=9900,  ingredients=[]);
const rice         = new Good(sellOffPrice=14, timeToMakeInSeconds=4800,  ingredients=[]);
const rose         = new Good(sellOffPrice=28, timeToMakeInSeconds=9000,  ingredients=[]);
const jasmine      = new Good(sellOffPrice=37, timeToMakeInSeconds=12600, ingredients=[]);
const coffee_plant = new Good(sellOffPrice=48, timeToMakeInSeconds=21600, ingredients=[]);
const peanut_plant = new Good(sellOffPrice=53, timeToMakeInSeconds=25200, ingredients=[]);
const apple        = new Good(sellOffPrice=55, timeToMakeInSeconds=27000, ingredients=[]);
const tea_plant    = new Good(sellOffPrice=60, timeToMakeInSeconds=32400, ingredients=[]);
const soybean      = new Good(sellOffPrice=15, timeToMakeInSeconds=7200,  ingredients=[]);
const lavender     = new Good(sellOffPrice=40, timeToMakeInSeconds=18000, ingredients=[]);

// MINE
const clay       = new Good(sellOffPrice=40, timeToMakeInSeconds=0, ingredients=[]);
const copper_ore = new Good(sellOffPrice=8, timeToMakeInSeconds=0, ingredients=[]);
const silver_ore = new Good(sellOffPrice=12, timeToMakeInSeconds=0, ingredients=[]);

// FEED
const cow_feed     = new Good(sellOffPrice=3,  timeToMakeInSeconds=300,  ingredients=[[wheat, 2], [corn, 1]]);
const chicken_feed = new Good(sellOffPrice=4,  timeToMakeInSeconds=600,  ingredients=[[wheat, 2], [carrot, 1]]);
const sheep_feed   = new Good(sellOffPrice=5,  timeToMakeInSeconds=1200, ingredients=[[corn, 2], [carrot, 2]]);
const bee_feed     = new Good(sellOffPrice=7,  timeToMakeInSeconds=1800, ingredients=[[wheat, 3], [sugarcane, 1]]);
const pig_feed     = new Good(sellOffPrice=10, timeToMakeInSeconds=2400, ingredients=[[wheat, 2], [carrot, 2], [corn, 1]]);
const substrate    = new Good(sellOffPrice=23, timeToMakeInSeconds=3000, ingredients=[[pine_tree, 1], [rice, 1], [corn, 2]]);

// FARM GOODS
const milk       = new Good(sellOffPrice=7,  timeToMakeInSeconds=1200,  ingredients=[[cow_feed, 1]]);
const egg        = new Good(sellOffPrice=10, timeToMakeInSeconds=3600,  ingredients=[[chicken_feed, 1]]);
const wool       = new Good(sellOffPrice=15, timeToMakeInSeconds=14400, ingredients=[[sheep_feed, 1]]);
const honeycombs = new Good(sellOffPrice=22, timeToMakeInSeconds=21600, ingredients=[[bee_feed, 1]]);
const bacon      = new Good(sellOffPrice=32, timeToMakeInSeconds=25200, ingredients=[[pig_feed, 1]]);
const mushroom   = new Good(sellOffPrice=69, timeToMakeInSeconds=18000, ingredients=[[substrate, 1]]);

// to-do
const down_feather = new Good(sellOffPrice=69, timeToMakeInSeconds=18000, ingredients=[substrate]);
const colorful_feather   = new Good(sellOffPrice=69, timeToMakeInSeconds=18000, ingredients=[substrate]);
const seaweed  = new Good(sellOffPrice=69, timeToMakeInSeconds=18000, ingredients=[substrate]);
const scallop   = new Good(sellOffPrice=69, timeToMakeInSeconds=18000, ingredients=[substrate]);
const pearls = new Good(sellOffPrice=69, timeToMakeInSeconds=18000, ingredients=[substrate]);

// ISLAND GOODS
const peach      = new Good(sellOffPrice=34,  timeToMakeInSeconds=14400, ingredients=[]);
const watermelon = new Good(sellOffPrice=49,  timeToMakeInSeconds=14400, ingredients=[]);
const plum       = new Good(sellOffPrice=72,  timeToMakeInSeconds=14400, ingredients=[]);
const grapes     = new Good(sellOffPrice=48,  timeToMakeInSeconds=25200, ingredients=[]);
const olives     = new Good(sellOffPrice=69,  timeToMakeInSeconds=25200, ingredients=[]);
const key_lime   = new Good(sellOffPrice=97,  timeToMakeInSeconds=25200, ingredients=[]);
const banana     = new Good(sellOffPrice=58,  timeToMakeInSeconds=32400, ingredients=[]);
const coconut    = new Good(sellOffPrice=84,  timeToMakeInSeconds=32400, ingredients=[]);
const pineapple  = new Good(sellOffPrice=117, timeToMakeInSeconds=32400, ingredients=[]);
const fish       = new Good(sellOffPrice=61,  timeToMakeInSeconds=28800, ingredients=[]);
const shrimp     = new Good(sellOffPrice=97,  timeToMakeInSeconds=28800, ingredients=[]);
const lobster    = new Good(sellOffPrice=131, timeToMakeInSeconds=28800, ingredients=[]);
const avocado    = new Good(sellOffPrice=73,  timeToMakeInSeconds=36000, ingredients=[]);
const mango      = new Good(sellOffPrice=114, timeToMakeInSeconds=36000, ingredients=[]);
const aloe       = new Good(sellOffPrice=153, timeToMakeInSeconds=36000, ingredients=[]);

// DAIRY FACTORY
const cream        = new Good(sellOffPrice=12,  timeToMakeInSeconds=900,   ingredients=[[milk, 1]]);
const cheese       = new Good(sellOffPrice=25,  timeToMakeInSeconds=1800,  ingredients=[[milk, 2]]);
const butter       = new Good(sellOffPrice=39,  timeToMakeInSeconds=3600,  ingredients=[[milk, 3]]);
const yogurt       = new Good(sellOffPrice=53,  timeToMakeInSeconds=5400,  ingredients=[[milk, 4]]);
const peach_yogurt = new Good(sellOffPrice=157, timeToMakeInSeconds=7200,  ingredients=[[milk, 2], [peach, 2]]);
const tofu         = new Good(sellOffPrice=104, timeToMakeInSeconds=14400, ingredients=[[soybean, 5]]);
const plant_milk   = new Good(sellOffPrice=60,  timeToMakeInSeconds=10800, ingredients=[[soybean, 3]]);

// SUGAR FACTORY
const sugar         = new Good(sellOffPrice=14,  timeToMakeInSeconds=1200,  ingredients=[[sugarcane, 1]]);
const syrup         = new Good(sellOffPrice=29,  timeToMakeInSeconds=2400,  ingredients=[[sugarcane, 2]]);
const caramel       = new Good(sellOffPrice=45,  timeToMakeInSeconds=5400,  ingredients=[[sugarcane, 3]]);
const honey_caramel = new Good(sellOffPrice=68,  timeToMakeInSeconds=9000,  ingredients=[[honeycombs, 1], [sugarcane, 1]]);

// BAKERY 
const bread             = new Good(sellOffPrice=5,   timeToMakeInSeconds=300,   ingredients=[[wheat, 2]]);
const cookies           = new Good(sellOffPrice=44,  timeToMakeInSeconds=900,   ingredients=[[wheat, 2], [egg, 2]]);
const bagel             = new Good(sellOffPrice=55,  timeToMakeInSeconds=1800,  ingredients=[[wheat, 2], [sugar, 1], [egg, 3]]);
const pizza             = new Good(sellOffPrice=68,  timeToMakeInSeconds=7200,  ingredients=[[wheat, 2], [cheese, 1], [tomato, 2]]);
const potato_bread      = new Good(sellOffPrice=158, timeToMakeInSeconds=3600,  ingredients=[[wheat, 2], [potato, 2], [egg, 4]]);
const banana_bread      = new Good(sellOffPrice=294, timeToMakeInSeconds=5400,  ingredients=[[wheat, 2], [banana, 3], [egg, 2], [butter, 1]]);
const seafood_pizza     = new Good(sellOffPrice=241, timeToMakeInSeconds=9000,  ingredients=[[wheat, 2], [cheese, 1], [fish, 1], [shrimp, 1]]);
const mushroom_turnover = new Good(sellOffPrice=195, timeToMakeInSeconds=4500,  ingredients=[[wheat, 3], [mushroom, 2], [potato, 1]]);
const apple_strudel     = new Good(sellOffPrice=168, timeToMakeInSeconds=10800, ingredients=[[wheat, 2], [apple, 2], [sugar, 1]]);

// TEXTILE FACTORY
const cotton_fabric = new Good(sellOffPrice=37,  timeToMakeInSeconds=1800,  ingredients=[[cotton, 2]]);
const yarn          = new Good(sellOffPrice=61,  timeToMakeInSeconds=2400,  ingredients=[[wool, 2]]);
const silk_fabric   = new Good(sellOffPrice=140, timeToMakeInSeconds=5400,  ingredients=[[silk, 2]]);
const nylon_thread  = new Good(sellOffPrice=111, timeToMakeInSeconds=7200,  ingredients=[[rubber_tree, 3]]);

// TAILOR SHOP
const shirt        = new Good(sellOffPrice=45,  timeToMakeInSeconds=3600,  ingredients=[[cotton_fabric, 1]]);
const sweater      = new Good(sellOffPrice=76,  timeToMakeInSeconds=5400,  ingredients=[[yarn, 1]]);
const coat         = new Good(sellOffPrice=125, timeToMakeInSeconds=7200,  ingredients=[[cotton_fabric, 1], [yarn, 1]]);
const hat          = new Good(sellOffPrice=231, timeToMakeInSeconds=9000,  ingredients=[[cotton_fabric, 1], [silk_fabric, 1]]);
const dress        = new Good(sellOffPrice=268, timeToMakeInSeconds=10800, ingredients=[[yarn, 1], [silk_fabric, 1]]);
const suit         = new Good(sellOffPrice=330, timeToMakeInSeconds=14400, ingredients=[[yarn, 1], [cotton_fabric, 1], [silk_fabric, 1]]);
const tyrolean_hat = new Good(sellOffPrice=274, timeToMakeInSeconds=9900,  ingredients=[[cotton_fabric, 1], [silk_fabric, 1], [colorful_feather, 1]]);
const gown         = new Good(sellOffPrice=815, timeToMakeInSeconds=12600, ingredients=[[pearls, 5], [silk_fabric, 2]]);

// SNACK FACTORY
const popcorn         = new Good(sellOffPrice=12,  timeToMakeInSeconds=1800, ingredients=[[corn, 2]]);
const corn_chips      = new Good(sellOffPrice=19,  timeToMakeInSeconds=3600, ingredients=[[corn, 3]]);
const granola         = new Good(sellOffPrice=29,  timeToMakeInSeconds=2400, ingredients=[[wheat, 2], [strawberry, 2]]);
const potato_chips    = new Good(sellOffPrice=69,  timeToMakeInSeconds=7200, ingredients=[[potato, 2]]);
const canape          = new Good(sellOffPrice=307, timeToMakeInSeconds=900,  ingredients=[[olives, 2], [grapes, 2], [cheese, 1]]);
const glazed_bacon    = new Good(sellOffPrice=115, timeToMakeInSeconds=4800, ingredients=[[bacon, 2], [caramel, 1]]);
const puffed_rice     = new Good(sellOffPrice=103, timeToMakeInSeconds=2700, ingredients=[[rice, 4], [caramel, 1]]);
const dried_mushrooms = new Good(sellOffPrice=262, timeToMakeInSeconds=6300, ingredients=[[mushroom, 3]]);
const salted_peanuts  = new Good(sellOffPrice=199, timeToMakeInSeconds=5400, ingredients=[[peanut_plant, 3]]);

// JAM FACTORY
const strawberry_jam        = new Good(sellOffPrice=41,  timeToMakeInSeconds=5400,  ingredients=[[strawberry, 3]]);
const peach_marmalade       = new Good(sellOffPrice=133, timeToMakeInSeconds=9000,  ingredients=[[peach, 3]]);
const watermelon_jam        = new Good(sellOffPrice=196, timeToMakeInSeconds=10800, ingredients=[[watermelon, 3]]);
const plum_jam              = new Good(sellOffPrice=299, timeToMakeInSeconds=14400, ingredients=[[plum, 3]]);
const grape_jelly           = new Good(sellOffPrice=196, timeToMakeInSeconds=12600, ingredients=[[grapes, 3]]);
const rose_jam              = new Good(sellOffPrice=107, timeToMakeInSeconds=7200,  ingredients=[[rose, 3]]);
const caramelized_mushrooms = new Good(sellOffPrice=297, timeToMakeInSeconds=6300,  ingredients=[[mushroom, 3], [sugar, 2]]);
const peanut_butter         = new Good(sellOffPrice=243, timeToMakeInSeconds=8100,  ingredients=[[peanut_plant, 3], [syrup, 1]]);
const apple_jam             = new Good(sellOffPrice=217, timeToMakeInSeconds=9900,  ingredients=[[apple, 3]]);

// RUBBER FACTORY
const rubber   = new Good(sellOffPrice=35,  timeToMakeInSeconds=3600,  ingredients=[[rubber_tree, 1]]);
const plastic  = new Good(sellOffPrice=73,  timeToMakeInSeconds=5400,  ingredients=[[rubber_tree, 2]]);
const glue     = new Good(sellOffPrice=111, timeToMakeInSeconds=7200,  ingredients=[[rubber_tree, 3]]);
const dumbbell = new Good(sellOffPrice=114, timeToMakeInSeconds=10800, ingredients=[[rubber, 2], [copper_ore, 2]]);

// GRILL FACTORY
const quiche              = new Good(sellOffPrice=95,  timeToMakeInSeconds=5400,  ingredients=[[wheat, 2], [bacon, 2], [egg, 1]]);
const baked_lobster       = new Good(sellOffPrice=190, timeToMakeInSeconds=10800, ingredients=[[lobster, 1], [cream, 1]]);
const bacon_and_eggs      = new Good(sellOffPrice=103, timeToMakeInSeconds=3600,  ingredients=[[bacon, 2], [egg, 2]]);
const fried_fish          = new Good(sellOffPrice=128, timeToMakeInSeconds=7200,  ingredients=[[fish, 1], [butter, 1]]);
const rice_casserole      = new Good(sellOffPrice=226, timeToMakeInSeconds=6300,  ingredients=[[rice, 5], [bacon, 2], [egg, 2], [cheese, 1]]);
const pancakes_with_honey = new Good(sellOffPrice=80,  timeToMakeInSeconds=2700,  ingredients=[[egg, 3], [honeycombs, 1], [sugar, 1]]);
const lobster_omelet      = new Good(sellOffPrice=201, timeToMakeInSeconds=8100,  ingredients=[[lobster, 1], [egg, 2], [bread, 1]]);
const grilled_scallop     = new Good(sellOffPrice=358, timeToMakeInSeconds=9000,  ingredients=[[olives, 1], [scallop, 2], [key_lime, 1]]);
const roast_meat          = new Good(sellOffPrice=561, timeToMakeInSeconds=12600, ingredients=[[mushroom, 2], [bacon, 1], [peanut_butter, 1]]);

// FOOD PROCESSING FACTORY
const dough             = new Good(sellOffPrice=4,   timeToMakeInSeconds=1800,  ingredients=[[wheat, 3]]);
const frozen_vegetables = new Good(sellOffPrice=26,  timeToMakeInSeconds=5400,  ingredients=[[tomato, 1], [corn, 1], [carrot, 1]]);
const dumplings         = new Good(sellOffPrice=98,  timeToMakeInSeconds=12600, ingredients=[[dough, 2], [bacon, 2]]);
const seafood_mix       = new Good(sellOffPrice=277, timeToMakeInSeconds=9000,  ingredients=[[shrimp, 1], [scallop, 1], [fish, 1]]);
const frozen_fruit      = new Good(sellOffPrice=395, timeToMakeInSeconds=10200, ingredients=[[mango, 1], [peach, 2], [pineapple, 1]]);
const packaged_meal     = new Good(sellOffPrice=301, timeToMakeInSeconds=10800, ingredients=[[rice_casserole, 1]]);

// PAPER FACTORY
const paper       = new Good(sellOffPrice=19,  timeToMakeInSeconds=5400,  ingredients=[[pine_tree, 1]]);
const paper_towel = new Good(sellOffPrice=39,  timeToMakeInSeconds=9000,  ingredients=[[pine_tree, 2]]);
const wallpaper   = new Good(sellOffPrice=147, timeToMakeInSeconds=10800, ingredients=[[pine_tree, 2], [rubber, 1]]);
const book        = new Good(sellOffPrice=304, timeToMakeInSeconds=12600, ingredients=[[paper, 4], [cotton_fabric, 1], [glue, 1]]);
const tea_bags    = new Good(sellOffPrice=93,  timeToMakeInSeconds=900,   ingredients=[[paper, 1], [tea_plant, 1]]);

// CANDY FACTORY
const jelly_beans        = new Good(sellOffPrice=79,  timeToMakeInSeconds=7200,  ingredients=[[strawberry, 3], [syrup, 1]]);
const toffee             = new Good(sellOffPrice=112, timeToMakeInSeconds=10800, ingredients=[[caramel, 1], [butter, 1]]);
const candy_cane         = new Good(sellOffPrice=105, timeToMakeInSeconds=14400, ingredients=[[caramel, 1], [cream, 1], [paper, 1]]);
const chocolate          = new Good(sellOffPrice=108, timeToMakeInSeconds=9000,  ingredients=[[cacao, 3], [cream, 1], [sugar, 1]]);
const lollipop           = new Good(sellOffPrice=117, timeToMakeInSeconds=18000, ingredients=[[strawberry, 2], [syrup, 1], [pine_tree, 2]]);
const honey_marshmallow  = new Good(sellOffPrice=211, timeToMakeInSeconds=16200, ingredients=[[honey_caramel, 1], [egg, 2]]);
const mint_candy         = new Good(sellOffPrice=114, timeToMakeInSeconds=7200,  ingredients=[[syrup, 1], [mint, 2]]);
const jelly_fruit_slices = new Good(sellOffPrice=436, timeToMakeInSeconds=9000,  ingredients=[[watermelon_jam, 1], [strawberry_jam, 1], [key_lime, 1]]);
const chocolate_bar      = new Good(sellOffPrice=225, timeToMakeInSeconds=12600, ingredients=[[cacao, 2], [peanut_plant, 2], [honeycombs, 1]]);
const green_tea_candy    = new Good(sellOffPrice=200, timeToMakeInSeconds=5400,  ingredients=[[tea_plant, 2], [cream, 1], [sugar, 2]]);


// ICE CREAM FACTORY
const ice_cream_cone           = new Good(sellOffPrice=39,  timeToMakeInSeconds=1800,  ingredients=[[milk, 1], [cream, 1], [sugar, 1]]);
const popsicle                 = new Good(sellOffPrice=45,  timeToMakeInSeconds=5400,  ingredients=[[strawberry, 2], [sugar, 1]]);
const frozen_yogurt            = new Good(sellOffPrice=87,  timeToMakeInSeconds=10800, ingredients=[[yogurt, 1], [cream, 1]]);
const ice_cream_bar            = new Good(sellOffPrice=148, timeToMakeInSeconds=14400, ingredients=[[syrup, 1], [cacao, 1], [pine_tree, 1]]);
const mint_chocolate_ice_cream = new Good(sellOffPrice=214, timeToMakeInSeconds=3600,  ingredients=[[milk, 1], [mint, 2], [chocolate, 1]]);
const pineapple_sorbet         = new Good(sellOffPrice=343, timeToMakeInSeconds=9000,  ingredients=[[syrup, 1], [pineapple, 2]]);
const rose_sorbet              = new Good(sellOffPrice=118, timeToMakeInSeconds=7200,  ingredients=[[syrup, 1], [rose, 2], [milk, 1]]);
const peanut_butter_parfait    = new Good(sellOffPrice=432, timeToMakeInSeconds=12600, ingredients=[[egg, 1], [peanut_butter, 1], [peanut_plant, 1], [cream, 1]]);

// PASTRY FACTORY
const muffin            = new Good(sellOffPrice=68,  timeToMakeInSeconds=1800,  ingredients=[[sugar, 1], [egg, 4], [wheat, 3]]);
const brownie           = new Good(sellOffPrice=128, timeToMakeInSeconds=2400,  ingredients=[[cacao, 2], [syrup, 1], [butter, 1]]);
const cupcake           = new Good(sellOffPrice=93,  timeToMakeInSeconds=3600,  ingredients=[[sugar, 1], [egg, 5], [cream, 1]]);
const donut             = new Good(sellOffPrice=149, timeToMakeInSeconds=5400,  ingredients=[[bagel, 1], [caramel, 1], [cacao, 1]]);
const cheesecake        = new Good(sellOffPrice=160, timeToMakeInSeconds=10800, ingredients=[[cookies, 1], [cheese, 1], [syrup, 1], [strawberry, 2]]);
const honey_gingerbread = new Good(sellOffPrice=119, timeToMakeInSeconds=3600,  ingredients=[[wheat, 3], [honeycombs, 2], [egg, 1]]);
const key_lime_pie      = new Good(sellOffPrice=285, timeToMakeInSeconds=7200,  ingredients=[[wheat, 3], [key_lime, 2], [sugar, 1], [cream, 1]]);
const coconut_macaroons = new Good(sellOffPrice=253, timeToMakeInSeconds=5400,  ingredients=[[coconut, 2], [egg, 2], [sugar, 1]]);
const caramel_apple     = new Good(sellOffPrice=202, timeToMakeInSeconds=9000,  ingredients=[[caramel, 1], [apple, 2]]);

// FAST FOOD RESTAURANT
const milkshake            = new Good(sellOffPrice=30,  timeToMakeInSeconds=900,  ingredients=[[milk, 2], [strawberry, 1]]);
const cheeseburger         = new Good(sellOffPrice=57,  timeToMakeInSeconds=1800, ingredients=[[bread, 2], [cheese, 1], [tomato, 1]]);
const sandwich             = new Good(sellOffPrice=80,  timeToMakeInSeconds=2400, ingredients=[[bread, 1], [butter, 1], [strawberry, 2]]);
const french_fries         = new Good(sellOffPrice=88,  timeToMakeInSeconds=3600, ingredients=[[potato, 2], [cream, 1], [tomato, 2]]);
const baked_potato         = new Good(sellOffPrice=111, timeToMakeInSeconds=3000, ingredients=[[potato, 2], [bacon, 1], [cheese, 1]]);
const fish_burger          = new Good(sellOffPrice=184, timeToMakeInSeconds=2700, ingredients=[[bread, 2], [fish, 2], [pepper, 1]]);
const fish_and_chips       = new Good(sellOffPrice=195, timeToMakeInSeconds=5400, ingredients=[[fish, 2], [potato, 2]]);
const peanut_butter_crepes = new Good(sellOffPrice=376, timeToMakeInSeconds=4500, ingredients=[[wheat, 3], [peanut_butter, 1], [banana, 1]]);

// PLASTICS FACTORY
const plastic_bottle  = new Good(sellOffPrice=91,  timeToMakeInSeconds=5400, ingredients=[[plastic, 1]]);
const toys            = new Good(sellOffPrice=131, timeToMakeInSeconds=2700, ingredients=[[plastic, 1], [rubber, 1]]);
const ball            = new Good(sellOffPrice=235, timeToMakeInSeconds=7200, ingredients=[[plastic, 1], [glue, 1]]);
const inflatable_boat = new Good(sellOffPrice=236, timeToMakeInSeconds=9000, ingredients=[[rubber, 2], [glue, 1]]);
const shuttlecock     = new Good(sellOffPrice=117, timeToMakeInSeconds=2400, ingredients=[[down_feather, 2], [plastic, 1]]);
const modeling_clay   = new Good(sellOffPrice=169, timeToMakeInSeconds=3600, ingredients=[[clay, 2], [rubber_tree, 2]]);

// HOUSEHOLD GOODS FACTORY
const scrub_brush                 = new Good(sellOffPrice=169, timeToMakeInSeconds=7200,  ingredients=[[sugarcane, 3], [nylon_thread, 1]]);
const soap_dispenser              = new Good(sellOffPrice=150, timeToMakeInSeconds=8400,  ingredients=[[cork_oak, 1], [plastic_bottle, 1]]);
const clothesline_and_clothespins = new Good(sellOffPrice=193, timeToMakeInSeconds=10200, ingredients=[[sugarcane, 5], [nylon_thread, 1]]);
const plunger                     = new Good(sellOffPrice=114, timeToMakeInSeconds=11400, ingredients=[[pine_tree, 1], [rubber, 2]]);
const feather_duster              = new Good(sellOffPrice=136, timeToMakeInSeconds=12600, ingredients=[[sugarcane, 1], [colorful_feather, 3]]);
const rubber_gloves               = new Good(sellOffPrice=260, timeToMakeInSeconds=14400, ingredients=[[rubber, 1], [aloe, 1]]);

// MEXICAN RESTAURANT
const chili_sauce      = new Good(sellOffPrice=144, timeToMakeInSeconds=7200,  ingredients=[[tomato, 3], [pepper, 3], [sugar, 1]]);
const burrito          = new Good(sellOffPrice=97,  timeToMakeInSeconds=3600,  ingredients=[[wheat, 2], [bacon, 2], [tomato, 1]]);
const nachos           = new Good(sellOffPrice=112, timeToMakeInSeconds=10800, ingredients=[[corn_chips, 1], [cheese, 1], [pepper, 2]]);
const taco             = new Good(sellOffPrice=109, timeToMakeInSeconds=5400,  ingredients=[[corn, 3], [cream, 1], [tomato, 2], [pepper, 2]]);
const jalapeno_poppers = new Good(sellOffPrice=124, timeToMakeInSeconds=7200, ingredients=[[pepper, 2], [bacon, 1], [cheese, 1]]);
const gazpacho         = new Good(sellOffPrice=110, timeToMakeInSeconds=9000,  ingredients=[[tomato, 3], [pepper, 2], [bread, 1]]);
const corn_soup        = new Good(sellOffPrice=105, timeToMakeInSeconds=6300,  ingredients=[[corn, 3], [carrot, 2], [bacon, 2]]);
const mole_sauce       = new Good(sellOffPrice=149, timeToMakeInSeconds=7200,  ingredients=[[cacao, 3], [pepper, 3]]);
const mushroom_soup    = new Good(sellOffPrice=576, timeToMakeInSeconds=12600, ingredients=[[dried_mushrooms, 1], [tomato, 2], [key_lime, 1], [butter, 1]]);

// STATIONERY FACTORY
const eraser          = new Good(sellOffPrice=111, timeToMakeInSeconds=7200,  ingredients=[[rubber_tree, 3]]);
const sticky_notes    = new Good(sellOffPrice=219, timeToMakeInSeconds=9000,  ingredients=[[paper, 3], [glue, 1]]);
const bulletin_board  = new Good(sellOffPrice=124, timeToMakeInSeconds=10200, ingredients=[[cork_oak, 1], [paper, 1]]);
const highlighter_pen = new Good(sellOffPrice=283, timeToMakeInSeconds=11400, ingredients=[[nylon_thread, 1], [cotton, 3], [plastic, 1]]);

// FURNITURE FACTORY
const table      = new Good(sellOffPrice=62,  timeToMakeInSeconds=14400, ingredients=[[pine_tree, 3]]);
const chair      = new Good(sellOffPrice=165, timeToMakeInSeconds=10800, ingredients=[[plastic, 1]]);
const couch      = new Good(sellOffPrice=100, timeToMakeInSeconds=21600, ingredients=[[pine_tree, 2], [cotton_fabric, 1]]);
const bed        = new Good(sellOffPrice=292, timeToMakeInSeconds=16200, ingredients=[[silk_fabric, 1], [cotton_fabric, 1], [pine_tree, 2]]);
const floor_lamp = new Good(sellOffPrice=230, timeToMakeInSeconds=12600, ingredients=[[copper_ore, 5], [plastic, 1]]);

// SHOE FACTORY
const flip_flops        = new Good(sellOffPrice=44,  timeToMakeInSeconds=5400,  ingredients=[[rubber, 1]]);
const sandals           = new Good(sellOffPrice=238, timeToMakeInSeconds=7200,  ingredients=[[cork_oak, 3], [nylon_thread, 1]]);
const sneakers          = new Good(sellOffPrice=234, timeToMakeInSeconds=7200,  ingredients=[[rubber, 1], [cotton_fabric, 1], [glue, 1]]);
const boots             = new Good(sellOffPrice=381, timeToMakeInSeconds=10800, ingredients=[[rubber, 1], [silk_fabric, 1], [glue, 1]]);
const high_heeled_shoes = new Good(sellOffPrice=393, timeToMakeInSeconds=9000,  ingredients=[[rubber, 1], [silk_fabric, 1], [pine_tree, 1]]);
const warm_boots        = new Good(sellOffPrice=236, timeToMakeInSeconds=9900,  ingredients=[[down_feather, 2], [silk_fabric, 1], [wool, 1]]);

// ASIAN RESTAURANT
const sushi_roll           = new Good(sellOffPrice=159, timeToMakeInSeconds=2700,  ingredients=[[rice, 5], [fish, 1]]);
const lobster_sushi        = new Good(sellOffPrice=231, timeToMakeInSeconds=4500,  ingredients=[[lobster, 1], [rice, 4]]);
const seaweed_shrimp_salad = new Good(sellOffPrice=179, timeToMakeInSeconds=7200,  ingredients=[[seaweed, 1], [shrimp, 1]]);
const scallop_sushi        = new Good(sellOffPrice=145, timeToMakeInSeconds=9000,  ingredients=[[scallop, 1], [rice, 4], [seaweed, 1]]);
const coconut_soup         = new Good(sellOffPrice=484, timeToMakeInSeconds=8100,  ingredients=[[coconut, 1], [shrimp, 2], [key_lime, 1]]);
const rice_noodles         = new Good(sellOffPrice=257, timeToMakeInSeconds=3600,  ingredients=[[rice, 6], [corn, 3], [pepper, 1], [shrimp, 1]]);
const sea_salad            = new Good(sellOffPrice=236, timeToMakeInSeconds=5400,  ingredients=[[fish, 1], [shrimp, 1], [corn, 2], [cheese, 1]]);
const mushroom_salad       = new Good(sellOffPrice=148, timeToMakeInSeconds=6300,  ingredients=[[rice, 2], [mushroom, 2], [pepper, 1]]);
const peanut_sauce         = new Good(sellOffPrice=591, timeToMakeInSeconds=10800, ingredients=[[peanut_butter, 1], [coconut, 1], [key_lime, 1], [chili_sauce, 1]]);

// PERFUME FACTORY
const aromatherapy_candle = new Good(sellOffPrice=162, timeToMakeInSeconds=7200,  ingredients=[[honeycombs, 2], [cacao, 2], [caramel, 1]]);
const perfume             = new Good(sellOffPrice=296, timeToMakeInSeconds=10800, ingredients=[[rose, 3], [banana, 2], [strawberry, 2]]);
const air_freshener       = new Good(sellOffPrice=157, timeToMakeInSeconds=2400,  ingredients=[[jasmine, 2], [rose, 2]]);
const scented_soap        = new Good(sellOffPrice=266, timeToMakeInSeconds=9000,  ingredients=[[honeycombs, 3], [olives, 2]]);
const jasmine_oil         = new Good(sellOffPrice=345, timeToMakeInSeconds=14400, ingredients=[[jasmine, 3], [olives, 2]]);
const lotion              = new Good(sellOffPrice=280, timeToMakeInSeconds=5400,  ingredients=[[rose, 2], [coconut, 2]]);
const face_mask           = new Good(sellOffPrice=102, timeToMakeInSeconds=3600,  ingredients=[[seaweed, 1], [clay, 1]]);
const toothpaste          = new Good(sellOffPrice=223, timeToMakeInSeconds=9900,  ingredients=[[honeycombs, 1], [mint, 1], [pineapple, 1]]);

// BEVERAGE FACTORY
const vitamin_cocktail   = new Good(sellOffPrice=45,  timeToMakeInSeconds=1800, ingredients=[[carrot, 1], [tomato, 1], [pepper, 1]]);
const grape_fizz         = new Good(sellOffPrice=147, timeToMakeInSeconds=3600, ingredients=[[grapes, 2], [egg, 1], [sugar, 1]]);
const chocolate_smoothie = new Good(sellOffPrice=298, timeToMakeInSeconds=5400, ingredients=[[milk, 2], [chocolate, 1], [banana, 2]]);
const watermelon_fresh   = new Good(sellOffPrice=136, timeToMakeInSeconds=2700, ingredients=[[watermelon, 2], [sugar, 1]]);
const iced_tea           = new Good(sellOffPrice=262, timeToMakeInSeconds=6000, ingredients=[[jasmine, 3], [key_lime, 1]]);
const tropical_mix       = new Good(sellOffPrice=540, timeToMakeInSeconds=7200, ingredients=[[coconut, 2], [pineapple, 2], [sugarcane, 3]]);
const apple_fresh        = new Good(sellOffPrice=162, timeToMakeInSeconds=9000, ingredients=[[apple, 2], [sugar, 1]]);
const mint_iced_tea      = new Good(sellOffPrice=223, timeToMakeInSeconds=4500, ingredients=[[mint, 2], [tea_plant, 2]]);

// CAKE FACTORY
const carrot_cake     = new Good(sellOffPrice=80,  timeToMakeInSeconds=7200,  ingredients=[[carrot, 2], [sugar, 1], [butter, 1]]);
const strawberry_cake = new Good(sellOffPrice=72,  timeToMakeInSeconds=16200, ingredients=[[wheat, 3], [strawberry, 2], [sugar, 1], [cream, 1]]);
const coffee_cake     = new Good(sellOffPrice=217, timeToMakeInSeconds=14400, ingredients=[[wheat, 2], [coffee_plant, 2], [egg, 2], [butter, 1]]);
const mint_cake       = new Good(sellOffPrice=132, timeToMakeInSeconds=12600, ingredients=[[wheat, 3], [mint, 2], [egg, 2], [sugar, 1]]);
const chocolate_cake  = new Good(sellOffPrice=146, timeToMakeInSeconds=10800, ingredients=[[cacao, 3], [sugar, 1], [butter, 1]]);
const wedding_cake    = new Good(sellOffPrice=61,  timeToMakeInSeconds=21600, ingredients=[[wheat, 3], [cream, 2], [sugar, 1]]);

// HOT DOG FACTORY
const hot_dog         = new Good(sellOffPrice=111, timeToMakeInSeconds=1500, ingredients=[[bread, 2], [bacon, 1], [tomato, 1]]);
const corn_dog        = new Good(sellOffPrice=268, timeToMakeInSeconds=5400, ingredients=[[corn, 4], [bacon, 2], [olives, 2]]);
const coney_dog       = new Good(sellOffPrice=138, timeToMakeInSeconds=3000, ingredients=[[bread, 1], [bacon, 2], [cheese, 1], [pepper, 1]]);
const carrot_sandwich = new Good(sellOffPrice=56,  timeToMakeInSeconds=4500, ingredients=[[carrot, 2], [bread, 1], [soybean, 2]]);

// FRENCH RESTAURANT
const ratatouille    = new Good(sellOffPrice=102, timeToMakeInSeconds=7200,  ingredients=[[pepper, 1], [potato, 2], [tomato, 2]]);
const profiteroles   = new Good(sellOffPrice=446, timeToMakeInSeconds=8400,  ingredients=[[dough, 2], [cream, 1], [chocolate, 3]]);
const salade_nicoise = new Good(sellOffPrice=399, timeToMakeInSeconds=9600, ingredients=[[olives, 3], [tomato, 2], [fish, 1], [egg, 1]]);
const bouillabaisse  = new Good(sellOffPrice=535, timeToMakeInSeconds=11400, ingredients=[[fish, 1], [shrimp, 3], [potato, 2], [tomato, 1]]);

// COFFEE FACTORY
const espresso      = new Good(sellOffPrice=187, timeToMakeInSeconds=900,  ingredients=[[coffee_plant, 3], [sugar, 1]]);
const cappuccino    = new Good(sellOffPrice=148, timeToMakeInSeconds=1800, ingredients=[[coffee_plant, 2], [milk, 2], [sugar, 1]]);
const caffe_mocha   = new Good(sellOffPrice=179, timeToMakeInSeconds=3600, ingredients=[[coffee_plant, 2], [cacao, 2], [cream, 1]]);
const hot_chocolate = new Good(sellOffPrice=80,  timeToMakeInSeconds=2700, ingredients=[[cacao, 2], [milk, 2], [sugar, 1]]);
const coconut_latte = new Good(sellOffPrice=361, timeToMakeInSeconds=4200, ingredients=[[coffee_plant, 2], [syrup, 1], [coconut, 2]]);

// DOWN FEATHER FACTORY
const pillow            = new Good(sellOffPrice=75,  timeToMakeInSeconds=3600, ingredients=[[down_feather, 2], [cotton_fabric, 1]]);
const parka             = new Good(sellOffPrice=225, timeToMakeInSeconds=7200, ingredients=[[down_feather, 3], [silk_fabric, 1]]);
const down_quilt        = new Good(sellOffPrice=169, timeToMakeInSeconds=6300, ingredients=[[down_feather, 5], [cotton_fabric, 2]]);
const robe_and_slippers = new Good(sellOffPrice=463, timeToMakeInSeconds=5400, ingredients=[[down_feather, 2], [silk_fabric, 2], [rubber, 1], [colorful_feather, 1]]);

// DOLL FACTORY
const puppet         = new Good(sellOffPrice=161, timeToMakeInSeconds=6000, ingredients=[[pine_tree, 2], [cotton_fabric, 1], [yarn, 1]]);
const porcelain_doll = new Good(sellOffPrice=339, timeToMakeInSeconds=9000, ingredients=[[clay, 3], [silk_fabric, 1]]);
const fashion_doll   = new Good(sellOffPrice=316, timeToMakeInSeconds=3600, ingredients=[[plastic, 1], [cotton_fabric, 2], [glue, 1]]);
const rag_doll       = new Good(sellOffPrice=249, timeToMakeInSeconds=7200, ingredients=[[silk_fabric, 1], [cotton_fabric, 1], [cotton, 2]]);

// KITCHENWARE FACTORY
const cup              = new Good(sellOffPrice=101, timeToMakeInSeconds=6300,  ingredients=[[clay, 2]]);
const frying_pan       = new Good(sellOffPrice=139, timeToMakeInSeconds=5400,  ingredients=[[copper_ore, 4], [pine_tree, 1]]);
const trivet_mat       = new Good(sellOffPrice=130, timeToMakeInSeconds=14400, ingredients=[[cork_oak, 3], [paper, 1]]);
const teapot           = new Good(sellOffPrice=155, timeToMakeInSeconds=8100,  ingredients=[[clay, 3]]);
const cutlery          = new Good(sellOffPrice=174, timeToMakeInSeconds=2400,  ingredients=[[silver_ore, 7]]);
const tea_ceremony_set = new Good(sellOffPrice=172, timeToMakeInSeconds=9000,  ingredients=[[clay, 2], [pine_tree, 1], [cotton_fabric, 1]]);

// MUSIC FACTORY
const ukulele   = new Good(sellOffPrice=85,  timeToMakeInSeconds=4500, ingredients=[[pine_tree, 3], [copper_ore, 3]]);
const saxophone = new Good(sellOffPrice=160, timeToMakeInSeconds=5100, ingredients=[[plastic, 1], [copper_ore, 6], [sugarcane, 1]]);
const drum      = new Good(sellOffPrice=331, timeToMakeInSeconds=7200, ingredients=[[pine_tree, 3], [cotton_fabric, 2], [silk_fabric, 1]]);
const accordion = new Good(sellOffPrice=556, timeToMakeInSeconds=9000, ingredients=[[plastic, 2], [silk_fabric, 2]]);
const pan_flute = new Good(sellOffPrice=81,  timeToMakeInSeconds=3600, ingredients=[[sugarcane, 5], [colorful_feather, 1]]);

// TEA FACTORY
const black_tea         = new Good(sellOffPrice=148, timeToMakeInSeconds=2700,  ingredients=[[tea_plant, 2]]);
const jasmine_white_tea = new Good(sellOffPrice=200, timeToMakeInSeconds=1800,  ingredients=[[tea_bags, 1], [jasmine, 2]]);
const rose_tea          = new Good(sellOffPrice=69,  timeToMakeInSeconds=3600,  ingredients=[[rose, 2]]);
const butter_tea        = new Good(sellOffPrice=212, timeToMakeInSeconds=7200,  ingredients=[[tea_plant, 2], [butter, 1], [milk, 1]]);
const apple_tea         = new Good(sellOffPrice=361, timeToMakeInSeconds=5400,  ingredients=[[apple, 2], [tea_plant, 1], [honeycombs, 1], [key_lime, 1]]);
const milk_oolong_tea   = new Good(sellOffPrice=321, timeToMakeInSeconds=9000,  ingredients=[[tea_plant, 1], [milk, 2], [tea_ceremony_set, 1]]);
const chocolate_custard = new Good(sellOffPrice=330, timeToMakeInSeconds=10800, ingredients=[[tea_plant, 2], [chocolate, 1], [egg, 2]]);

// BOUQUET FACTORY
const summer_bouquet         = new Good(sellOffPrice=134, timeToMakeInSeconds=4500,  ingredients=[[rose, 3], [wheat, 5], [paper, 1]]);
const vegetable_bouquet      = new Good(sellOffPrice=104, timeToMakeInSeconds=9000,  ingredients=[[tomato, 3], [corn, 1], [carrot, 2], [sugarcane, 4]]);
const wedding_bouquet        = new Good(sellOffPrice=301, timeToMakeInSeconds=5400,  ingredients=[[jasmine, 2], [cotton, 3], [silk_fabric, 1]]);
const candy_bouquet          = new Good(sellOffPrice=315, timeToMakeInSeconds=3600,  ingredients=[[strawberry, 3], [honey_gingerbread, 1], [candy_cane, 1]]);
const flower_basket          = new Good(sellOffPrice=316, timeToMakeInSeconds=7200,  ingredients=[[rose, 3], [jasmine, 4], [pine_tree, 1]]);
const lavender_bouquet       = new Good(sellOffPrice=131, timeToMakeInSeconds=8400,  ingredients=[[lavender, 2], [sugarcane, 3]]);
const tea_and_coffee_bouquet = new Good(sellOffPrice=486, timeToMakeInSeconds=10800, ingredients=[[tea_bags, 3], [cacao, 1], [coffee_plant, 1], [paper, 1]]);

// ITALIAN RESTAURANT
const olive_oil       = new Good(sellOffPrice=259, timeToMakeInSeconds=5400, ingredients=[[olives, 3]]);
const bruschetta      = new Good(sellOffPrice=257, timeToMakeInSeconds=2700, ingredients=[[bread, 1], [tomato, 1], [shrimp, 2]]);
const pasta_arrabiata = new Good(sellOffPrice=111, timeToMakeInSeconds=6300, ingredients=[[wheat, 3], [egg, 2], [pepper, 2], [cheese, 1]]);
const ravioli         = new Good(sellOffPrice=203, timeToMakeInSeconds=7200, ingredients=[[wheat, 3], [lobster, 1], [cheese, 1]]);
const tiramisu        = new Good(sellOffPrice=493, timeToMakeInSeconds=3600, ingredients=[[espresso, 1], [egg, 2], [cookies, 2], [chocolate, 1]]);
const lasagna         = new Good(sellOffPrice=260, timeToMakeInSeconds=9000, ingredients=[[wheat, 4], [mushroom, 2], [bacon, 1], [cheese, 1]]);

// FESTIVITIES FACTORY
const balloon      = new Good(sellOffPrice=117, timeToMakeInSeconds=3600, ingredients=[[yarn, 1], [rubber, 1]]);
const cotton_candy = new Good(sellOffPrice=137, timeToMakeInSeconds=2700, ingredients=[[sugar, 2], [syrup, 1], [rose, 2]]);
const soap_bubbles = new Good(sellOffPrice=424, timeToMakeInSeconds=5400, ingredients=[[scented_soap, 1], [plastic, 1]]);
const lei          = new Good(sellOffPrice=389, timeToMakeInSeconds=1800, ingredients=[[rose, 5], [jasmine, 5]]);
const pinata       = new Good(sellOffPrice=291, timeToMakeInSeconds=7200, ingredients=[[glue, 1], [paper, 2], [jelly_beans, 1]]);

// GARDENING SUPPLIES FACTORY
const garden_tools = new Good(sellOffPrice=142, timeToMakeInSeconds=6300,  ingredients=[[pine_tree, 1], [copper_ore, 3], [plastic, 1]]);
const garden_gnome = new Good(sellOffPrice=160, timeToMakeInSeconds=10800, ingredients=[[clay, 3]]);
const lawn_chair   = new Good(sellOffPrice=84,  timeToMakeInSeconds=5400,  ingredients=[[pine_tree, 2], [cotton_fabric, 1]]);
const planter      = new Good(sellOffPrice=55,  timeToMakeInSeconds=3600,  ingredients=[[pine_tree, 3]]);
const garden_hose  = new Good(sellOffPrice=185, timeToMakeInSeconds=7200,  ingredients=[[plastic, 1], [rubber, 1], [cotton_fabric, 1]]);

// PET SUPPLY FACTORY
const rubber_bone   = new Good(sellOffPrice=88,  timeToMakeInSeconds=5400,  ingredients=[[rubber, 2]]);
const wind_up_mouse = new Good(sellOffPrice=177, timeToMakeInSeconds=6300,  ingredients=[[wool, 2], [cotton_fabric, 1], [plastic, 1]]);
const cat_litter    = new Good(sellOffPrice=79,  timeToMakeInSeconds=4800,  ingredients=[[soybean, 3], [paper, 1]]);
const water_bowl    = new Good(sellOffPrice=135, timeToMakeInSeconds=3600,  ingredients=[[clay, 2], [pine_tree, 2]]);
const pet_bed       = new Good(sellOffPrice=180, timeToMakeInSeconds=10800, ingredients=[[down_feather, 2], [cotton_fabric, 3]]);

// VEGAN CAFE
const falafel          = new Good(sellOffPrice=119, timeToMakeInSeconds=3600,  ingredients=[[soybean, 4], [pepper, 1], [potato, 1]]);
const miso_soup        = new Good(sellOffPrice=425, timeToMakeInSeconds=10800, ingredients=[[soybean, 4], [seaweed, 2], [tofu, 1], [mushroom, 1]]);
const vegan_cheesecake = new Good(sellOffPrice=370, timeToMakeInSeconds=14400, ingredients=[[plant_milk, 2], [wheat, 2], [grapes, 1], [key_lime, 1]]);
const soybean_hummus   = new Good(sellOffPrice=406, timeToMakeInSeconds=9000,  ingredients=[[soybean, 4], [chili_sauce, 1], [key_lime, 1], [carrot, 2]]);
const guacamole        = new Good(sellOffPrice=444, timeToMakeInSeconds=12000, ingredients=[[avocado, 3], [tomato, 1], [key_lime, 1]]);

// BAG FACTORY
const backpack      = new Good(sellOffPrice=328, timeToMakeInSeconds=7200,  ingredients=[[cotton_fabric, 3], [glue, 1], [rubber, 1]]);
const woven_bag     = new Good(sellOffPrice=21,  timeToMakeInSeconds=5400,  ingredients=[[wheat, 3], [sugarcane, 2]]);
const small_handbag = new Good(sellOffPrice=477, timeToMakeInSeconds=12600, ingredients=[[silk_fabric, 2], [pearls, 1], [sugarcane, 1]]);
const suitcase      = new Good(sellOffPrice=416, timeToMakeInSeconds=18000, ingredients=[[plastic, 3], [rubber, 2]]);
const kids_bag      = new Good(sellOffPrice=167, timeToMakeInSeconds=4500,  ingredients=[[cotton_fabric, 1], [colorful_feather, 2], [down_feather, 3]]);



const order = [[cotton, 1], [strawberry_jam, 1], [watermelon_jam, 1], [grape_jelly, 1], [peach_marmalade, 1], [granola, 1]]
// const order = [[french_fries, 2]]
const offer = 592

let sellOffTotal = 0
for (const item of order) {
    const good     = item[0];
    const quantity = item[1];

    sellOffTotal += good.sellOffPrice * quantity;
}

const profit = offer - sellOffTotal;
console.log(`Sell off price is ${sellOffTotal}. Profit: ${profit}`);