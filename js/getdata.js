var aKat = [];


//Funktion lädt die XML-Datei mit allen Fragenkategorien und wandelt sie in ein JavaScript-Array
function loadXml(file){
    var fObject;
    var aKatObjects;
    var aAnswers;
    var aCAnswers;
    var aKata = [];
    
    console.log('loading Data ...');
    $.get( file , function( data ) {         

      $(data).find('qcategory').each( function(){ 
        aKatObjects = {};   
        aKatObjects.name = $(this).attr('name'); 
        aKatObjects.arrayBox = []; 

        
        $(this).find('qcatquestions').each(function(){
            fObject = {}; 
            fObject.frage = $(this).find('qcatquestiontxt').text();
                        
            aAnswers = [];
            
            $(this).find('allanswers').each(function(){
                
                $(this).find('answer').each(function(){
                    aAnswers.push($(this).text());
                });
                                              
            });
            fObject.allAnt = aAnswers;
            aCAnswers = [];
            $(this).find('correctanswers').each(function(){
                
                $(this).find('correctanswer').each(function(){
                    aCAnswers.push($(this).text());
                });
            });
            fObject.antR = aCAnswers;
            aKatObjects.arrayBox.push(fObject);
        });
          aKata.push(aKatObjects); 
          aKat = aKata;

      console.log(aKat);
            

          
      });//end each !!!
      
      console.log('fin');
      
              aKat[aKat.length] = {
              namemix: [],
              name: 'Kategorien mischen',
              arrayBox: [] 
          };
      /*DATEN FERTIG -> CREATE GFX*/
      dataanaly();
      createChoiceBoxes();
      
    });    
  
}

loadXml('xml/fragen.xml?v='+ Math.random());


//Funktion checkt, ob username und password korrekt eingegeben worden sind und leitet dann weiter zum Menü des Backend/Admin-Bereichs
function checkLogin(user,pass) {

    $.ajax({
        url: "php/login.php",
        method:"POST",
        data:{u: user, p: pass},
        success: function (dat) {
            
            var loginData = JSON.parse(dat); 
              if(loginData.login=="ok"){
                  
                  adminFkt();
                  logoutBtnFkt();
                  
              }else{
                  alert("User or Pass is invalid, try again !");
              }            
            
        }
    });

  }
  
var u;

//Funktion speichert eine neue Quiz-Kategorie mit ihren Fragen und Antworten. Dabei wird JavaScript in JSON übertragen und über Ajax an PHP geschickt
function fragenundantwortenSpeichern(){
    

        
        var catname = $('#katName').val();
        var aNeueFragen = [];
        var aNeueAntworten = [];
        var aNeueCAntworten = [];
        
        for(var i=0; i<aNeueFragenIndices.length; i++){
        
        aNeueFragen.push($('#frage'+aNeueFragenIndices[i]).val());


        aNeueAntworten[i] = [];
        aNeueCAntworten[i] = [];        
        
        
        for(var j=0; j<aNeueAntwortenIndices[i].length; j++){
        
        aNeueAntworten[i].push($('#antwort'+aNeueAntwortenIndices[i][j]).val());
        
        }
        
        for(var k=0; k<aNeueCAntwortenIndices[i].length; k++){
        
        aNeueCAntworten[i].push($('#Cantwort'+aNeueCAntwortenIndices[i][k]).val());
        
        }
    }

        
console.log(aNeueFragen);
console.log(aNeueAntworten);
console.log(aNeueCAntworten);

  var catnameJSON = JSON.stringify(catname);  
  var aNeueFragenJSON = JSON.stringify(aNeueFragen);
  var aNeueAntwortenJSON = JSON.stringify(aNeueAntworten);
  var aNeueCAntwortenJSON = JSON.stringify(aNeueCAntworten);
    

    $.ajax({
        url: "php/saveToXml.php",
        method:"POST",
        data:{catname: catnameJSON, aNeueFragen:aNeueFragenJSON,aNeueAntworten:aNeueAntwortenJSON,aNeueCAntworten:aNeueCAntwortenJSON},
        success: function (dat) {
        }
    });
    
    
//    eingabenDarstellen(aNeueFragen, aNeueAntworten, aNeueCAntworten);//Aufruf der Funktion, die 
  }
  
  
