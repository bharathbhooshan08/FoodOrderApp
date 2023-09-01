//To load all available categories in Add Food Page
function loadCategories(){
    //Task 1.i
    //Write the code here to display category names in the Category dropdown menu on Add FoodItem webpage
    var category = document.getElementById("category");
    category.innerHTML = "";
    for(var itr in categoryCollection){
        //var category = document.getElementById("category");
        var categoryOption = document.createElement("option");
        categoryOption.text = categoryCollection[itr]["name"];
        //console.log(categoryCollection[itr]["name"]);
        category.appendChild(categoryOption);
    }
}

//To load all available cuisines in Add Food Page
function loadCuisines(){
    //Task 1.i
    //Write the code here to display cuisine names in the Cuisine dropdown menu on Add FoodItem webpage
    var cuisine = document.getElementById("cuisine");
    cuisine.innerHTML = "";
    for(var itr in cuisineCollection){
        //var cuisine = document.getElementById("cuisine");
        var cuisineOption = document.createElement("option");
        cuisineOption.text = cuisineCollection[itr]["name"];
        //console.log(cuisineCollection[itr]["name"]);
        cuisine.appendChild(cuisineOption);
    }
}

//View All Food Items Info
function listFoodItems(){
    //Task 1.ii
    //Write the code here to display details of all food items available on the List Food Items webpage
    var foodItemTable = document.getElementById("fooditemstable");
    alert(foodItemsCollection);
    for(var itr in foodItemsCollection){
        var foodItemsContent;
        var someFoodItem = foodItemsCollection[itr];
       
        // foodItemsContent = "<tr><td>"+someFoodItem['id']+"</td>" +
        // "<td>"+someFoodItem['title']+"</td>" +
        // "<td>"+someFoodItem['description']+"</td>" +
        // "<td>"+someFoodItem['inStock']+"</td>" +
        // "<td>"+someFoodItem['isVeg']+"</td>" +
        // "<td>"+someFoodItem['category']+"</td>" +
        // "<td>"+someFoodItem['cuisine']+"</td>" +
        // "<td>"+"<img src="+someFoodItem['image']+" alt=\"\" style=\"width: 50px; height: 50px;\" class=\"img-thumbnail\""+"</td>" +
        // "<td><button>Edit</button></td></tr>";

        // for(var innrItr in itr){
        //     if(innrItr != "image")
        //         foodItemsContent += "<td>" + itr[innrItr] + "</td>";
        //     else
        //         foodItemsContent += "<td>" + "<img src="+itr[innrItr]+" alt=\"\" style=\"width: 50px; height: 50px;\" class=\"img-thumbnail\""+"</td>";
        // }
        //foodItemsCollection.innerHTML += foodItemsContent;
    }
    
}