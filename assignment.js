//first problem transform a number into meter from a kilometer
function kilometerToMeter(kilometer){
   
    if(kilometer<0){
        console.log("This is Envalid number as a distance.") //becacuse distance can not be negative.
    }
    else{
        var meter = kilometer*1000;         //we know 1km=1000m.
        return meter;
    }   
}


// second problem determine the total price of watch,mobile and laptop

function budgetCalculator(quantity_of_watch, quantity_of_mobile, quantity_of_laptop){
    if(quantity_of_watch<=0 | quantity_of_mobile<=0 | quantity_of_laptop<=0){
        console.log("You have to purchase all the item at least one piece") //becacuse negative or null value can not be granted
    }
    else{
        var totalPrice= (quantity_of_watch*50)+(quantity_of_mobile*100)+(quantity_of_laptop*500);
        return totalPrice;
    } 
}

// third problem determine the hotel cost of a client.

function hotelCost(days){
    if(days<=0){
        console.log("This is envalid")      // negative days con not be granted
    }
    else if(days<=10){
        var totalCost= days*100;            // for first 10 days hotel cost per day 100tk .
    }
    else if(days<=20){
       var price_for_first_ten_days= 10*100;  // for first 10 days hotel cost per day 100tk .
       var left_days=days-10;
       var price_for_left_days=left_days*80;  // for second 10 days hotel cost per day 80tk .
       var totalCost= price_for_first_ten_days+price_for_left_days;
    }
    else{
       var price_for_first_ten_days= 10*100;          // for first 10 days hotel cost per day 100tk .
       var price_for_second_ten_days=10*80;           // for second 10 days hotel cost per day 80tk .
       var left_days=days-20;
       var price_for_left_days=left_days*50;          // after 20 days then hotel cost per day 50tk .
       var totalCost= price_for_first_ten_days+price_for_second_ten_days+ price_for_left_days;
    }
    return totalCost;
    
   
}

// find the longest friend name.
function megaFriend(friendsNames) {
    var size = 0; 
    var longest_name;
    for (var i=0; i<friendsNames.length;i++) {
      if (friendsNames[i].length >size) {
        var size = friendsNames[i].length; 
        longest_name =friendsNames[i];   
      }
  }
   return longest_name;   
}
