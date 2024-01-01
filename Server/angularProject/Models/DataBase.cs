using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angularProject.Models
{
    public class DataBase
    {

        public static List<User> user = new List<User>
            {
                new User("1","Isreal Israeli","hagay","israel@gmail.com","israel"),
                new User("2", "Tamar","hagay","e0583231267@gmail.com","urhuhg"),
                new User("2","Ester","hagay","e0583231267@gmail.com","urhuhg"),
                new User("3","Miri","hagay","e0583231267@gmail.com","urhuhg")

            };
        public static List<Recipe> recipes = new List<Recipe>()
        {
            new Recipe("1",
                "Pizza",
                "Baking",
                 45,
                2,
                DateTime.Now,
                new List<string>{ "3 cups lukewarm water", "Spoon of sugar","2 tablespoons yeast","Half a cup of oil","A pound of flour","A tablespoon of salt" },

                new List<string>{"In a large broth, mix water, sugar and yeast and leave for a minute. Add oil, flour and salt to the bowl and mix well.","Transfer to a lightly floured work surface, put well until a non-sticky dough is obtained. Transfer the dough to a lightly greased bowl, cover with cling film and leave in a warm place to rise for half an hour - an hour","Transfer the dough to a work surface and open it to the size of a round or square pan. It is important to note that the dough is not too thin. Line a pan with lightly floured baking paper and transfer the dough to the pan. Fold the edges of the dough slightly inwards to form a hard.","Brush the edges of the dough with a little olive oil. Pour about a tablespoon of sauce in the center of the dough and spread well - it is important to remember to leave sides of dough without sauce and cheese to create a hard pizza. Sprinkle with grated yellow cheese and toppings.","Place in a preheated oven at 200 degrees until browned (usually 10-20 minutes).","Remove from the oven and eat from the hot pan ..."},
                "Baking",
                "../../assets/images/piza.jpg"),

            new Recipe("2",
                "Potifur",
                "Conditur",
                35,
                4,
                DateTime.Now,
                new List<string>{"Big egg","Half a cup (100 g) sugar","One third cup (80 ml) oil","2/3 cup (160 ml) hot water","Cup (140 g) puffed flour (or a cup of regular flour + a teaspoon of baking powder)","Tablespoon cocoa powder","A tablespoon full of chocolate powder"},
                new List<string>{"Mix all the ingredients with a whisk or spoon in the order listed.","Pour into a muffin tin","Bake in a preheated oven at 180 degrees for about 15 minutes."},
                "1",
                "../../assets/images/16.jpg"),

            new Recipe("3",
                "Asado in a pot",
                "Baking",
                25,
                5,
                DateTime.Now,
                new List<string>{"3-4 tablespoons olive oil","4-5 asado / iris avenues of red red","Small potatoes","Sweet potatoes","Fresh garlic heads cut into 2","Herbs: Rosemary / Thyme","A glass of red wine (optional) / a glass of meat / water stock","A glass of hot water","Salt / black pepper"},
                new List<string>{"Preheat oven to 220 degrees.","In a cast pot with a lid that fits in the oven, place the asado avenues.","Place the vegetables, herbs on top","Pour over the oil, wine and stock or water.","Close and place in the oven for an hour and a half with a lid.","After an hour and a half, open the lid and continue to roast for another half hour until golden."},
                "1",
                "../../assets/images/asado.jpg"),

            new Recipe("4",
                "Spaghetti Bolognese",
                "Baking",
                40,
                3,
                DateTime.Now,
                new List<string>{"Spaghetti package","500 g minced meat 'red red'","5 sliced tomatoes or a box of canned sliced tomatoes (400 g)","3 tablespoons tomato paste","2 onions cut into cubes","3 tablespoons oil","Salt","pepper","sweet paprika"},
                new List<string>{"Heat the oil in a saucepan and fry the onions until golden.","Add the meat and fry while stirring to crumble the lumps of meat.","When the meat is greased, add the sliced tomatoes and cook together for about 5 minutes.","Add 3 tablespoons of tomato paste and about half a cup of water. After a few minutes, add spices to taste.","Cook for another 20-15 minutes until the meat is tender.","Boil water in a pot and cook the spaghetti according to the instructions on the package. Filters.","Mix the spaghetti together with the sauce and serve with fresh parsley."},
                "1",
                "../../assets/images/pasta.jpg"),

            new Recipe("5",
                "cheese cake",
                "Cooking",
                70,
                5,
                DateTime.Now,
                new List<string>{"1 cup milk","2 tablespoons of sugar","1 vanilla sugar","100 g butter","a cup of flour","4 eggs M"},
                new List<string>{"In a small saucepan heat milk, sugar, vanilla sugar and butter, bring to a boil and mix to dissolve the sugar and butter.","Lower the flame and add a cup of flour, stirring gradually, until we have a lump of dough that detaches from the sides of the pot.","Transfer the lump of dough to a mixer bowl and cool slightly. Add eggs and mix well in a mixer with a guitar hook.","Transfer the dough mixture to a perfusion bag with a star catheter, sprinkled on a baking sheet lined with baking paper.","Preheat oven to 180 degrees and bake the puff pastry for about 30 minutes, depending on the oven.","We will wait for the puffs to cool completely, cut them sideways and fill with patisserie cream / whipped cream. You can also dip the puff pastry in melted chocolate."},
                "1",
                "../../assets/images/42.jpg"),

            new Recipe("6",
                "Pancakes",
                "Cooking",
                10,
                1,
                DateTime.Now,
                new List<string>{"1 cup (140 g) white flour","1 teaspoon (5 g) baking powder","1 bag (10 g) vanilla sugar (* you can put a teaspoon of vanilla extract + a flat spoon of sugar)","2 tablespoons (25 g) sugar","1 egg","2 tablespoons oil","1 cup (240 ml) milk","A pinch of salt (from the salt shaker)"},
                new List<string>{"-Mix all the ingredients well in a bowl with a whisk until smooth overnight.","Grease a pan with butter or oil (you can use a wide regular pan with a non-stick coating or a pancake pan) and when the pan is hot, pour the batter into the pan with a ladle (of soup).","-After about a minute, when small bubbles appear on top of the pancakes, turn aside and leave for another 1/2 minute.","* Recommended with chocolate / maple syrup."},
                "1",
                "../../assets/images/pankeik.png")
        };
        public static List<Category> categories = new List<Category>
        {
            new Category(1,"Cooking","../../assets/icon/bake.JPG"),
            new Category(2,"Baking","../../assets/icon/bake.JPG"),
            new Category(3,"Conditur","../../assets/icon/bake.JPG")
        };
    }
}