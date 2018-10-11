$(document).ready(function() {
  autocomplete();
  autocompleteMobile();
});

function autocompleteMobile(){
  var inp = document.getElementById("input-busca-mobile");
  inp.addEventListener("input", function(e) {
    var element = this;
    delay(function(){
      $.ajax({
        method: "GET",
        url: "https://tiagojardim.000webhostapp.com/getPesquisa.php",
        data: { pesquisa: inp.value },
        dataType: "json",
        success: function(result){
          getListAutoCompleteMobile(element,result);
      }});
    }, 500);
  });

  function getListAutoCompleteMobile(element,result){
    var val = element.value.toLowerCase();
    var div_resultado = document.getElementById("result-mobile");
    var html = "<div>";
    if(result != null){
      for (i = 0; i < result.length; i++) {
        html += ""
        html += "<div class='resultado'><a href='/pagina"+result[i].url+"'><div class='img-resultado'><img src='"+result[i].imagem+"'></div><div class='pesquisa-resultado'>";
        var indexOfBusca = result[i].pesquisa.toLowerCase().indexOf(val);
        html +=  result[i].pesquisa.substr(0, indexOfBusca);
      
        html += "<strong>"+ result[i].pesquisa.substr(indexOfBusca, val.length )+ "</strong>";
          
        html +=  result[i].pesquisa.substr(indexOfBusca+val.length, result[i].pesquisa.length );
      
        html += "</div><div class='pesquisa-assunto'>"+result[i].assunto+"</div></a></div>";
      }
    }
    html += "</div>";
    div_resultado.innerHTML = html; 
  }

  var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

}

function autocomplete() {
  var inp = document.getElementById("busca");
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;

  function getListAutoComplete(element,arr){
    var a, b, c, e, f, g, i, val = element.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", element.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    element.parentNode.appendChild(a);
    /*for each item in the array...*/
    if(arr != null)
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
        /*create a DIV element for each matching element:*/
        
        f = document.createElement("DIV");
        f.className = "resultado";

        b = document.createElement("DIV");
        b.className = "img-resultado";
        b.innerHTML = "<img src='"+arr[i].imagem+"'/>";
        
        
        
        
        c = document.createElement("DIV");
        c.className = "pesquisa-resultado";
        
        g = document.createElement("DIV");
        g.className = "pesquisa-assunto";
        g.innerHTML = arr[i].assunto;

        e = document.createElement("DIV");
        /*make the matching letters bold:*/
        var indexOfBusca = arr[i].pesquisa.indexOf(val);
        e.innerHTML +=  arr[i].pesquisa.substr(0, indexOfBusca);
        e.innerHTML += "<strong>" + arr[i].pesquisa.substr(indexOfBusca, val.length )+ "</strong>";
        e.innerHTML +=  arr[i].pesquisa.substr(indexOfBusca+val.length, arr[i].pesquisa.length );
        //b.innerHTML = "<strong>" + arr[i].pesquisa.substr(0, val.length) + "</strong>";
        //b.innerHTML += arr[i].pesquisa.substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        e.innerHTML += "<input type='hidden' value='" + arr[i].url + "'>";
        e.innerHTML += "<input type='hidden' value='" + arr[i].pesquisa + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        f.addEventListener("click", function(e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[1].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
           
            //window.open("file:///C:/Users/Developer/Desktop/site/index.html#/"+this.getElementsByTagName("input")[1].value+"/"+this.getElementsByTagName("input")[0].value);
            window.location.href = "/pagina"+this.getElementsByTagName("input")[0].value;
            //location.reload();
        });
        f.appendChild(b);
        c.appendChild(e);
        f.appendChild(c);
        f.appendChild(g);
        a.appendChild(f);
      }
  }


  var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
    var element = this;
    delay(function(){
      $.ajax({
        method: "GET",
        url: "https://tiagojardim.000webhostapp.com/getPesquisa.php",
        data: { pesquisa: inp.value },
        dataType: "json",
        success: function(result){
            getListAutoComplete(element, result);
      }});
    }, 500);
  });

  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

function EscondeLimparBusca(){
  $("#limpar-input-mobile").css("display","none")
}

function MostrarLimparBusca(){
  $("#limpar-input-mobile").css("display","block");
}

function FocusBuscaMobile(){
  $("#input-busca-mobile").focus();
}

/* abrir aba consulta */
$("#topo-busca-search-icon").click(function() {
  $("#busca-mobile").addClass("topo-busca-mobile-ativo");
  $("#input-busca-mobile").css("display","block");
  if($("#input-busca-mobile").val().length > 0)
      MostrarLimparBusca();
      FocusBuscaMobile();
});

/* sair consulta mobile */
$("#topo-busca-arrow-icon").click(function() {
  $("#busca-mobile").removeClass("topo-busca-mobile-ativo");
  $("#input-busca-mobile").css("display","none");
  EscondeLimparBusca();
});

/* limpar consulta */
$("#limpar-input-mobile").click(function() {
  $("#input-busca-mobile").val("");
  EscondeLimparBusca();
  FocusBuscaMobile();
  $("#result-mobile").html("");
});

/* quando digitar mostrar botão limpar consulta */
$("#input-busca-mobile").keyup(function() {
  if($(this).val().length > 0)
      MostrarLimparBusca();
  else
      EscondeLimparBusca();
});