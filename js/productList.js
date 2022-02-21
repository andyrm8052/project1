var orderBy = document.getElementById("orderBy");
var sortBy = document.getElementById("sortBy");
var product = orderBy.getElementsByClassName("product");
var productSort = sortBy.getElementsByClassName("product");
var active = document.getElementsByClassName("active");
var i;

function renderList(n) {
    if (n == "all") {
        n = "";
    }

    var item = document.getElementsByClassName("item-list");
    //var title = document.getElementsByClassName("title");
    var price = document.getElementsByClassName("price");

    for (i = 0; i < item.length; i++){
        item[i].classList.remove("show");
        item[i].classList.add("hide");
        if (item[i].className.indexOf(n) > -1) {
            item[i].classList.remove("hide");
            item[i].classList.add("show");
        }
        
        //*************
        // TODO: couldn't get the sort working. I've tried so many different methods.
        //*************

        //var x = item[i].className.indexOf(n) > 1;
        //var x = item[i].innerHTML;

        /*
        var ar= [item[i]];
        ar.sort(function(a, b){
            ar.append()
            return a - b;
        });
        console.log(ar);
        */

        //item.sort();

        //if (productSort == document.getElementsByClassName("title"))
        //if (item.children == title){
        //    item.sort(document.getElementsByClassName("name"));
        //    }

        //var title = item.[i].document.getElementsByClassName("title");
        //title.sort("name")

        //else if (productSort == document.getElementsByClassName("price"))
        //    item.sort(document.getElementsByClassName("price"));
        //}
    }

}




for (i = 0; i < product.length; i++) {
    product[i].addEventListener("click", function() {
        active[0].className = active[0].className.replace(" active", "");
        this.classList.add('active');
    });
}

for (i = 0; i < productSort.length; i++) {
    productSort[i].addEventListener("click", function() {
        active[0].className = active[0].className.replace(" active", "");
        this.classList.add('active');
    });
}

renderList("all");
