$(document).ready(function(){

    $("#pop").hide();
    $("#pop").click(function(){

      $.ajax({

          type: 'GET',
          url: "http://localhost:8083/api/users",
          dataType: "JSON",
          success: function(res){

              var body = document.getElementById('pop');
              showtable(res);

              function showtable(jsonObj) {

                  var col = [];
                      for (var i = 0; i < jsonObj.length; i++) {
                          for (var key in jsonObj[i]) {
                              if (col.indexOf(key) === -1 ) {
                                  col.push(key);
                              }
                          }
                      }
                  col.push("");
                  console.log("col");
                  console.log(col);


                  var table = document.createElement("table");
                  var tr = table.insertRow(-1);                   // TABLE ROW.

                  for (var i = 0; i < col.length; i++) {
                      var th = document.createElement("th");      // TABLE HEADER.
                      th.innerHTML = col[i];
                      tr.appendChild(th);
                  }
                  for (var i = 0; i < jsonObj.length; i++) {

                      tr = table.insertRow(-1);

                      for (var j = 0; j < (col.length - 1) ; j++) {
                          var tabCell = tr.insertCell(-1);
                          tabCell.innerHTML = jsonObj[i][col[j]];
                      }

                      var tabCell = tr.insertCell(-1);

                      var myImage1 = new Image(20, );
                      myImage1.src = 'edit.png';
                      var myImage2 = new Image(20, );
                      myImage2.src = 'delete.png';
                      myImage1.setAttribute("id", jsonObj[i].id);
                      myImage1.setAttribute("onclick","myfuncedit(this.id)");
                      myImage2.setAttribute("id", "del" + jsonObj[i].id)
                      myImage2.setAttribute("onclick","myfuncdel(this.id)");

                      tabCell.appendChild(myImage1);
                      tabCell.appendChild(myImage2);
                      tr.appendChild(tabCell);
                  }
                  var pop = document.getElementById("pop");
                  pop.appendChild(table);
              }


              }

          });
        });
      });
