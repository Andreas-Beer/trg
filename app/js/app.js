$(document).ready(function(){
    

    
    $('#menuTeil1').on('click', function(){
        location.reload();
        backClick();
    });

    $('#menuTeil3').on('click', loginFkt);
    
//    $( window ).resize(function() {
//        antwortBoxflexBoxDirection();
//    });
});

/* +++++++++++++++++++++++++++ ALLE GLOBALEN VARIABLEN ++++++++++++++++++++++++++++*/

var aindicesKomplex;
var aindicesEinfach;

var nextF; //Hilfsvariablen
var aFrageGemischt, aAntwortGemischt /*, aKatMix, aMixFinal*/; //Arrays zum Mixen der Fragen und Antworten

var firstKlick = true;//registriert, ob es der erste Klick im einem Quizdurchgang war
var trueAnswer=0; //registriert die richtigen Antworten pro Frage
var falseAnswer=0; //registriert die falschen Antworten pro Frage
var clicks=0; //Zählt die Klicks auf Antworten innerhalb eines Quizdurchgangs, damit am Ende auf dieser Basis der Prozentsatz der richtigen Antworten errechnet werden kann
var answerClick = true;//registriert, ob auf eine Frage ausreichend geantwortet worden ist, d.h. ob so viele Antworten gegeben worden sind, wie es richtige Antwortmöglichkeiten für diese Frage gibt
var overalltrue = 0;//Anzahl der abgegebenen richtigen Antworten für einen Quizdurchgang
var overallfalse = 0;//Anzahl der abgegebenen falschen Antworten für einen Quizdurchgang
var multipleAnswer=0;//Anzahl der abgegebenen Antworten für eine Frage, falls mehr als eine richtige Antwortmöglichkeit existiert.
var aMix = [];//Array für gemischte Kategorie
var anzahlGesamtKat = 0;//Anzahl der für den Mix ausgewählten Fragekategorien

var aNeueFragenIndices;
var aNeueAntwortenIndices = [];
var aNeueCAntwortenIndices = [];

/* ANFANG - Durch diese Funktion kenne ich die einfachen und komplexen Fragekategorien */

function dataanaly(){
        aindicesEinfach = [];//leeres Array, dass die Indices der einfachen Fragekategorien sammelt
        aindicesKomplex = [];//leeres Array, das die Indices der komplexen Fragekategorien sammelt
    var anzahlkomplexeKats = 0; //Zähler für komplexe Fragekategorien
    var anzahleinfacheKats = 0; //Zähler für einfache Fragekategorien 
    
        for (j in aKat) {

/* Erkennen einer einfachen Fragekategorie (z.B. Verantwortung) in der  data.js */
         if(typeof aKat[j].arrayBox[0] === 'object' && aKat[j].arrayBox[0].hasOwnProperty('frage')) {

            var indexEinfachKat = j;
                    anzahleinfacheKats++;
                    aindicesEinfach.push(indexEinfachKat);//fügt dem Array aindicesEinfach, dass die einfachen Kategorien listet, die Indizies der einfachen Kategorien hinzu
        }//ENDE if

/* Erkennen einer komplexen Fragekategorie mit Unterkategorien (z.B. Verkehrsregeln) in der  data.js */
         if(typeof aKat[j].arrayBox[0] === 'object' && aKat[j].arrayBox[0].hasOwnProperty('arrayBox')){

            var indexKomplexKat = j;
                    anzahlkomplexeKats++;
                    aindicesKomplex.push(indexKomplexKat);//fügt dem Array aindicesKomplex, dass die komplexen Kategorien listet, die Indizies der komplexen Kategorien hinzu
         }//ENDE if 
      
        
    }//Ende for  
        
}

/* ENDE - Durch diese Funktion kenne ich die einfachen und komplexen Fragekategorien */

/* ++++++++++++++++++++++++++ERSTELLUNG DER DIV-LISTE DER HAUPTKATEGORIEN ******************************** */


function createChoiceBoxes(){
    
    
    var h = window.innerHeight;   
//    var navHeight = $('nav').height();  
    var navHeight = 50;
    var mainBoxHeight = h-navHeight;
    var containerBoxHeight = mainBoxHeight;
     

    $('#mainBox').css({top: navHeight+'px', height: mainBoxHeight+'px'});
    $('#containerBox').css({height: containerBoxHeight+'px'});
    $('#weiterBox').css({top: containerBoxHeight+'px'}).hide();
    
    
    var summeKats = aindicesEinfach.length + aindicesKomplex.length;
    
    for (var i=0; i<aindicesEinfach.length; i++){
         
        $('<div id="hauptkat' + i + '" data-nr="' + aindicesEinfach[i] + '" data-name="' + aKat[aindicesEinfach[i]].name + '" >').html(aKat[aindicesEinfach[i]].name)
           .addClass("box hauptkat")
           .on("click",erklaerFkt)
           .appendTo($(containerBox));
     }
    
    for (var j=0; j<aindicesKomplex.length; j++){
        var hmm = j + aindicesEinfach.length;
        $('<div id="hauptkat' + hmm + '" data-nr="' + aindicesKomplex[j] + '" data-name="' + aKat[aindicesKomplex[j]].name + '">').html(aKat[aindicesKomplex[j]].name)
            .addClass("box hauptkat")
            .on("click",subkats)
            .appendTo($(containerBox));
    }
    
        $('<div id="hauptkat' + summeKats + '" data-nr="' + summeKats + '" data-name="Kategorien mischen">')
            .html("Kategorien mischen")
            .addClass("box hauptkat")
            .on("click",mischkats)
            .appendTo($(containerBox));
      
    
}//ENDE function createChoiceBoxes()
 
     
/* ANFANG - Darstellung der Unterkategorien im Falle komplexer Quizkategorien wie z.B. Verkehrsregeln */

function subkats(){
 
    heightWithWeiterBox();
        
    $(".box").remove();
    var nr = $(this).attr("data-nr");
    
    zurueckBtn();

    
    for(var i=0; i<aKat[nr].arrayBox.length; i++){
        
        $('<div id="subcat' + i + '" data-subkat = "' + nr + '" data-nr="' + i + '">')
            .addClass("box subcat")
            .html(aKat[nr].arrayBox[i].name)
            .on("click", erklaerFkt)
            .appendTo($(containerBox));
       
     }//ENDE for
    
}

/* ENDE - Darstellung der Unterkategorien im Falle komplexer Quizkategorien wie z.B. Verkehrsregeln */

/* ANFANG - Darstellung der ersten erklärenden Seiten vor dem Start eines Quizzes */

function erklaerFkt(nr,wie){
    
    heightWithWeiterBox();
           
    $(".box").remove();
        
    if($(this).attr("data-nr")){
    var nr = $(this).attr("data-nr");
    var wie = $(this).html();
    }
        
 
        
    $('<div id="erklaerBox" data-nr="' + nr + '">')
            .addClass("erklaerBox einleiterkl")
            .html('<p id="einleiterkl">Jetzt beginnt der Multiple-Choice-Quiz zum Thema:<br><br> <span class="einleitKatSpan" >' + wie + '</span> <br><br> Zu einigen Fragen gibt es mehr als eine richtige Antwort. Wenn du die maximale Anzahl an Antworten angeklickt hast, kommst du über "Weiter" zur nächsten Frage.<br><br>Klicke Start, wenn es losgehen soll!</p>')
            .appendTo($(containerBox));
    

    
    zurueckBtn();

    
    /* Falls die Kategorie das Attribut data-subkat hat, handelt es sich um eine Unterkategorie. Dann mischt die Funktion komplexMischen die Fragen und Antworten */
    if($(this).attr("data-subkat")){
        var subkat = $(this).attr("data-subkat");
        komplexMischen(subkat, nr);
        aFrageGemischt;
    }
    
    /* Falls die Kategorie das Attribut data-subkat nicht hat, handelt es sich um eine einfache Fragekategorie. Dann mischt die Funktion einfachMischen die Fragen und Antworten */    
    else{
        einfachMischen(nr);
        aFrageGemischt;
    }
    
    $('<div id="start" data-nr="' + nr + '">')
            .addClass("clickBox start")
            .html('Start')
            .on("click", quizMix)
            .appendTo($(weiterBox));
    clickBoxPadding();
    }

    
/* ENDE - Darstellung der ersten erklärenden Seiten vor dem Start eines Quizzes */

/* ANFANG - Funktion zur Erstellung des Zurück-Buttons */

function zurueckBtn(){
    
    $('<div id="zurueckBtn">')
            .addClass("clickBox zurueckBtn")
            .html("Zurück")
            .on("click", backClick)
            .appendTo($(weiterBox));
    clickBoxPadding();
}//ENDE function zurueckBtn()

/* ENDE - Funktion zur Erstellung des Zurück-Buttons */

/* ANFANG - Mischen der Fragen und Antworten im Falle einfacher Kategorien z.B. Verantwortung, Boote steuern und führen, etc. */

function einfachMischen(wer){
    
        var nrMix = wer;
        
        aFrageGemischt = [];//leeres Array für gemischte Fragen 
        var c = aKat[nrMix].arrayBox.length;
        
        /* Mischen der Fragen durch zufälliges ausschneiden aus dem Array in data.js und zufälliges Hinzufügen zu aFrageGemischt */
        for(var i=0;i<c;i++){
            
        var zufallIndex = Math.floor(Math.random()*aKat[nrMix].arrayBox.length);
        var raus = aKat[nrMix].arrayBox.splice(zufallIndex,1)[0];
        aFrageGemischt.push(raus);

        }//ENDE for

    
        //Ursprüngliches Array wieder vervollständigen
        aKat[nrMix].arrayBox = aFrageGemischt;
       
        for (var i=0; i<aFrageGemischt.length; i++){
            aAntwortGemischt = [];//leeres Array für gemischte Antworten 
        
        var d = aFrageGemischt[i].allAnt.length;
        
            for(var j=0;j<d;j++){
                
                var zufallIndexAnt = Math.floor(Math.random()*aFrageGemischt[i].allAnt.length);
                
                var rausAnt = aFrageGemischt[i].allAnt.splice(zufallIndexAnt,1)[0];
                aAntwortGemischt.push(rausAnt);
                
            }
        
                aFrageGemischt[i].allAnt = aAntwortGemischt; //Vervollständigen von Array aFrageGemischt nachdem die Antworten ausgeschnitten und gemischt worden sind
        }     
        
        return  aFrageGemischt;
        
}

/* ENDE - Mischen der Fragen und Antworten im Falle einfacher Kategorien z.B. Verantwortung, Boote steuern und führen, etc. */

/* ANFANG - Mischen der Fragen und Antworten im Falle komplexer Kategorien z.B. Verkehrsregeln */

function komplexMischen(was,wer){
        
        var subKat = was;
        var nrMix = wer;
          
        aFrageGemischt = [];//leeres Array für gemischte Fragen
        var c = aKat[subKat].arrayBox[nrMix].arrayBox.length;

        /* Mischen der Fragen durch zufälliges ausschneiden aus dem Array in data.js und zufälliges Hinzufügen zu aFrageGemischt */
        for(var i=0;i<c;i++){
        var zufallIndex = Math.floor(Math.random()*aKat[subKat].arrayBox[nrMix].arrayBox.length);
        var raus = aKat[subKat].arrayBox[nrMix].arrayBox.splice(zufallIndex,1)[0];
        aFrageGemischt.push(raus);
        }//ENDE for
        
        //Ursprüngliches Array wieder vervollständigen
        aKat[subKat].arrayBox[nrMix].arrayBox = aFrageGemischt;
    
       for (var i=0; i<aFrageGemischt.length; i++){
            aAntwortGemischt = [];//leeres Array für gemischte Antworten 
        
        var d = aFrageGemischt[i].allAnt.length;
        //console.log("d = ", d);
        
            for(var j=0;j<d;j++){
                
                var zufallIndexAnt = Math.floor(Math.random()*aFrageGemischt[i].allAnt.length);
                
                var rausAnt = aFrageGemischt[i].allAnt.splice(zufallIndexAnt,1)[0];
                aAntwortGemischt.push(rausAnt);
                
            }
        
                aFrageGemischt[i].allAnt = aAntwortGemischt; //Vervollständigen von Array aFrageGemischt nachdem die Antworten ausgeschnitten und gemischt worden sind
        }
    
         return  aFrageGemischt; 
        
}

/* ENDE - Mischen der Fragen und Antworten im Falle komplexer Kategorien z.B. Verkehrsregeln */

/* ANFANG - Darstellung der Fragen und Antworten einer ausgewählten (oder später individuell gemixten) Kategorie nach der Mischung */

//Parameter k
function quizMix(k){


        
        $("#contquest").remove();
        $(".clickBox").remove();
        $("#erklaerBox").remove();
        $("#start").remove();
        $(".box").remove();
    
        //Antworten der ersten Frage werden gemischt 
    
        if(firstKlick){
        var k=0;
        }

        //Erste Frage mit Antwortmöglichkeiten wird dargestellt    
        $('<div id="contquest">')
            .addClass("contquest")
            .appendTo($(containerBox));
        
        $('<div id="frageBox">')
            .addClass("frageBox")
            .appendTo($("#contquest"));
      
        $('<div id="frageSatz" data-nr="' + k + '">')
            .addClass("frageSatz")
            .html(k + 1 + ". " + aFrageGemischt[k].frage)
            .appendTo("#frageBox");

        antwortBoxflexBoxDirection();    
        antwortBoxHeightFkt();
        
        $('<div id="antwortBox">')
            .addClass("antwortBox")
            .appendTo($("#contquest"));

        
        

        for(var j=0; j<aFrageGemischt[k].allAnt.length; j++){

            if(aFrageGemischt[k].allAnt[j].search('img') != -1){
                
            $('<div id="antwortSatz' + j + '" data-frage="' + k + '" data-nr="' + j + '">')   
                .addClass("antwortSatz mitBild")
                .html(aFrageGemischt[k].allAnt[j])
                .on("click",answerCheck)
                .appendTo($("#antwortBox"));      
            $('.antwortBox').css({flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'});


            var bildPaddingLeft = ($('.antwortSatz').innerWidth()-$('.bild').width())/2;
            var bildWidth = $('.bild').width() + bildPaddingLeft;
            $('.antwortSatz').css({ paddingLeft: bildPaddingLeft, width: bildWidth});
        
            }
            
            else{
            $('<div id="antwortSatz' + j + '" data-frage="' + k + '" data-nr="' + j + '">')   
                .addClass("antwortSatz normal")
                .html(aFrageGemischt[k].allAnt[j])
                .on("click",answerCheck)
                .appendTo($("#antwortBox")); 
            $('.antwortBox').css({flexDirection: 'column', justifyContent: 'flex-start'});


            }  
            
            if(document.getElementById("antwortSatz" + j).innerHTML.search('Abschnitte:') != -1){
                
                //$("#antwortSatz" + j).addClass("zubreit");
                $(".antwortSatz").addClass("zubreit");
                $('.antwortBox').css({flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap'});
                }
      
        }//ENDE for
    

    
        if(k<aFrageGemischt.length-1){
            
            $('<div id="weiter" data-nr="' + k + '">')
            .addClass("clickBox weiter")
            .html("Weiter")
            .on("click",forthClick)
            .appendTo($(weiterBox));

        }
    
        else if(k==aFrageGemischt.length-1){
            $('#weiter').remove();
            
            $('<div id="auswertung" data-nr="' + k + '">')
                .addClass("clickBox weiter")
                .html("Ergebnis")
                .on("click",forthClick)
                .appendTo($(weiterBox));

        }
        //auswertungFkt
        
        $('<div id="abbruch" data-nr="' + k + '">')
            .addClass("clickBox abbruch")
            .html("Abbruch")
            .on("click",backClick)
            .appendTo($(weiterBox));
        clickBoxPadding();    
    
        antwortBoxHeightFkt();
        
            

}

/* ENDE - Darstellung der Fragen und Antworten einer ausgewählten (oder später individuell gemixten) Kategorie nach der Mischung */

/* ANFANG - Wechsel zur nächsten Frage der Kategorie oder Mischung */

function forthClick(){


        
        if(firstKlick){                
        var nr = $(this).attr("data-nr");
        nextF = nr; 
        firstKlick = false;
        }    
    
     var rightLength = aFrageGemischt[nextF].antR.length;    
     var c=aFrageGemischt.length;
     var g=c-1;
        
        
        if(nextF<=c && multipleAnswer==rightLength && answerClick == false){
        firstKlick = false;
        nextF++;//Zähler für Fragen, mit dem durch das Fragearray Schritt für Schritt durchgegangen wird, wenn auf weiter geklickt wird.    
        answerClick = true;//Registriert, ob eine Antwort abgegeben worden ist
        trueAnswer=0;//Registriert, wie viele richtige Antworten pro Frage
        falseAnswer=0;//Registriert, wie viele falsche Antworten pro Frage
        multipleAnswer=0;//Registriert, ob genauso viele Antworten abgegeben worden sind, wie es richtige Antwortmöglichkeiten pro Frage gibt
            
            if(nextF<c){    
                quizMix(nextF);//führt wieder die quizMix Funktion für die nächste Frage aus. 
            }
            if(nextF==c){    
                auswertungFkt();
            }
        
        
        return;

        }
    

     
    
        /* Wenn es mehr als eine richtige Antwortmöglichkeit gibt, sorgt folgende Bedingung dafür, dass der Spieler erst weiterkommt, wenn entsprechend viele Antworten abgegeben worden sind */
    
        if (nextF<c && multipleAnswer<rightLength && answerClick == true){    

            var hinweis1 = "<p>Zu dieser Frage gibt es " + rightLength;
                hinweis1 += " richtige Antwort(en). Wähle (weitere) Antworten aus. Erst dann kommst du weiter." 
                hinweis1 += "<br><br>Klick mich weg</p>";

            $("#popupBox").html(hinweis1);
            $("#popupBox1").stop().animate({left:"-2.5vw", top:"0"},500);
            $("#popupBox").on("click",wegfahren);
            $("#popupBox1").on("click",wegfahren);
            
            
        }//ENDE else if
       

        

}

/* ENDE - Wechsel zur nächsten Frage der Kategorie oder Mischung */

/* ANFANG - Überprüfung der Antworten bzw. auch, ob so viele Antworten gegeben worden sind, wie es Antwortmöglichkeiten gibt */

function answerCheck(){
    
    var nrF = $(this).attr("data-frage");
        
    var nrA = $(this).attr("data-nr");
    
    var rightLength = aFrageGemischt[nrF].antR.length;//prüft die Anzahl der richtigen Antwortmöglichkeiten
    var addTrueFalse = trueAnswer+falseAnswer;//prüft die Anzahl der abgegebenen Antworten auf Basis der Summe richtiger und falscher Antworten zur jeweiligen Frage
    var differenz = rightLength-addTrueFalse;//Differenz zwischen Anzahl abgegebener Antworten und der richtigen Antwortmöglichkeiten
    
    
    /* Setzt die richtigen und falschen Antworten auf Null, damit für dieselbe Frage noch weitere Antworten abgegeben werden können */
    if(differenz>0){
        trueAnswer=0;
        falseAnswer=0;
    } //ENDE if

    if(answerClick){
        
        clicks++;//Zählt die Klicks insgesamt für den Durchgang durch einen Quiz. Wird benötigt, um später den Prozentsatz der richtigen Antworten auszurechen.
        
        for (i in aFrageGemischt[nrF].antR){   
            if($(this).html()==aFrageGemischt[nrF].antR[i] ){
                
                trueAnswer++;
                overalltrue++;
                multipleAnswer++;
                $(this).css({backgroundColor:'rgba(0,180,0,.7)',color:'white', textShadow: '0px 0px 1px black', border: '3px solid rgba(255,255,255,1)'});
            }//ENDE if  
            
        }//ENDE for


        if(trueAnswer==0){
            falseAnswer++;
            overallfalse++;
            multipleAnswer++;
            $(this).css({backgroundColor:'rgba(250,0,0,.8)', color:'white', textShadow: '0px 0px 1px black', border: '3px solid rgba(255,255,255,1)'});
        }//ENDE if

        if(multipleAnswer ==rightLength){
        answerClick = false;
            }//ENDE if

        else if(multipleAnswer < rightLength){
        answerClick = true;
        }//ENDE else

    }//ENDE if(answerClick)
    
}//ENDE function answerCheck()

/* ENDE - Überprüfung der Antworten bzw. auch, ob so viele Antworten gegeben worden sind, wie es Antwortmöglichkeiten gibt */

/* ANFANG - Wegfahren des Hinweises auf mehrere Antwortmöglichkeiten */

function wegfahren() {
	$("#popupBox1").stop().animate({left:"-250vw"},1000);
}//ENDE function wegfahren()

/* ENDE - Wegfahren des Hinweises auf mehrere Antwortmöglichkeiten */

/* ANFANG - Funktion zum Abbruch eines Quizzes bzw. um nach Abschluss eines Quizzes zurück zum Hauptmenü zu kommen */

function backClick(){

    
    
    $('.loginBox').remove();
    $("#adminBox").remove();

    $(".box").remove();
    $("#auswertBox").remove();
    $("#erklaerBox").remove();
    $("#contquest").remove();
    $(".clickBox").remove();
    $("#mischcont1").remove();
    $("#mischcont2").remove();
    createChoiceBoxes();

    nextF=0;
    clicks=0;
    answerClick = true;
    firstKlick = true;
    overalltrue = 0;
    overallfalse = 0;
    aMix = [];
    trueAnswer=0; 
    falseAnswer=0;
    multipleAnswer=0;
    anzahlGesamtKat = 0;
    
}

/* ENDE - Funktion zum Abbruch eines Quizzes bzw. um nach Abschluss eines Quizzes zurück zum Hauptmenü zu kommen */

/* ANFANG - Funktion zur Auswertung eines durchlaufenen Quizzes */

function auswertungFkt(){

    $(".clickBox").remove();
   
    $("#contquest").remove();
    
    $('<div id="auswertBox">')
        .addClass("auswertBox")
        .html('<img id="auswertImg" src="img/trgfahne.gif" alt="Red rowers" width="159" height="123"> <br><br> Du hast ' + Math.round((overalltrue/clicks)*100) + '% der Fragen richtig beantwortet. <br/> ( '+ overalltrue +' von '+ clicks +' deiner Antworten sind korrekt. )')
        .appendTo($(containerBox));
    
    
    trueAnswer=0;
    falseAnswer=0;
    multipleAnswer=0;
    clicks=0;
    answerClick = true;
    overalltrue = 0;
    overallfalse = 0;
    aMix = [];

    $('<div id="neustart" >')
        .addClass("clickBox neustart")
        .html("Zurück zum Hauptmenü")
        .on("click", backClick)
        .appendTo($(weiterBox));
    clickBoxPadding();
    

    
}//ENDE function auswertung()

/* ENDE - Funktion zur Auswertung eines durchlaufenen Quizzes */

/* ANFANG - Darstellung aller Kategorien, die gemischt werden können und Option, diese m.H. von Drag und Drop in eine Mixbox (inthebox) zu ziehen */

function mischkats(){
    
    heightWithWeiterBox();
    
    var nr = $(this).attr("data-nr");
    
    
    
    
    $(".box").remove();
    
    /* Darstellung der möglichen Fragekategorien, aus denen gewählt werden kann */
    $('<div id="mischcont1" data-nr"' + nr + '">')
        .addClass("mischcont1")
        .appendTo($(containerBox));
    
    /* Box, in die die ausgewählten Fragekategorien gezogen werden können */
    $('<div id="mischcont2" data-nr"' + nr + '">')
        .addClass("mischcont2")
        .html("Zieh die Kategorien, in denen du dich testen möchtest in diesen Bereich")
        .appendTo($(containerBox));

    $('.mischcont1').css({height:$('#containerBox').height()*0.67});  
    $('.mischcont2').css({height:$('#containerBox').height()*0.33});  

     /* Länge der komplexen Fragekategoriens */
        var summeLaengeKomplex = 0;  

          for (n in aindicesKomplex){
            var l = aKat[aindicesKomplex[n]].arrayBox.length;
            summeLaengeKomplex += l;

        }//ENDE for
    
  
    /* Drag und Drop zum ziehen der ausgewählten Kategorien in den Mixbereich zur Zusammenstellung eines individuellen Quizzes */
    for(var i=0; i<(aindicesEinfach.length + summeLaengeKomplex); i++){
        
        $('<div id="mischkat' + i + '" data-nr="' + i + '">')
            .addClass("box mischkat")
            .appendTo($("#mischcont1"))
            .draggable({
                containment: "document",
                start:function(){},
                drag:function(){
                    var nr = $(this).attr("data-nr");
                },
                stop:function(){
                    var nr = $(this).attr("data-nr");
                    intheMixbox(this, nr);
                }
            });
        
        if(i<aindicesEinfach.length){ $('#mischkat' + i).html(aKat[i].name); }//ENDE if i<anzahleinfacheKats Gibt für die einfachen Kategorien den Namen aus 
        
        if(i>=aindicesEinfach.length && i< (aindicesEinfach.length + summeLaengeKomplex)){
            
            for (f in aindicesKomplex){
                
                for(var m=0; m<aKat[aindicesKomplex[f]].arrayBox.length; m++){
                 $('#mischkat' + (m + aindicesEinfach.length)).html(aKat[aindicesKomplex[f]].arrayBox[m].name);
                }
            }
        }//ENDE if i>=anzahleinfacheKats && i< (anzahleinfacheKats + summeLaengeKomplex) Gibt für die Unterkategorien der komplexen Fragekategorien die Namen aus
        
        anzahlGesamtKat = aindicesEinfach.length + summeLaengeKomplex;
    }//Listet alle Fragekategorien, die gewählt und gemischt werden können und macht sie draggable
    
    zurueckBtn();//Erstellt Zurückbutton

    
    /* Fügt Hinweis-Button hinzu, der bei Klick einen Hinweis vorfahren lässt */
    $('<div id=hinweismischenB" data-nr="' + nr + '">')
            .addClass("clickBox hinweismischenB")
            .html("Hinweis")
            .on("click", hinweismischen)
            .appendTo($(weiterBox));
    
    /* Fügt Misch-Button hinzu, der bei Klick die ausgewählten Fragekategorien mischt und zur Startseite für den individuellen Quiz weiterleitet */
    $('<div id=mischenBtn" data-nr="' + nr + '">')
            .addClass("clickBox mischenBtn")
            .html("Mischen")
            .on("click", mischFunktion)
            .appendTo($(weiterBox));
    clickBoxPadding();
}//ENDE funktion mischkats()

/* ENDE - Darstellung aller Kategorien, die gemischt werden können und Option, diese m.H. von Drag und Drop in eine Mixbox (inthebox) zu ziehen */

/* ANFANG - Funktion, die einen Hinweis hereinfahren lässt, der die Option erklärt, Kategorien für einen individuellen Quiz zu mischen */

function hinweismischen(){
     var hinweis2 = "<p>Hier kannst du dir aus allen Kategorien deinen eigenen Quiz zusammenstellen. <br/><br/> Ziehe die Kategorien einfach in die blaue Box und klicke auf 'Mischen'.<br/><br/>Klick mich weg!</p>";
    
    $("#popupBox").html(hinweis2);
    $("#popupBox1").stop().animate({left:"0", top:"0"},500);
    $("#popupBox").on("click",wegfahren);
    $("#popupBox1").on("click",wegfahren);
    
}//ENDE function hinweismischen()

/* ENDE - Funktion, die einen Hinweis hereinfahren lässt, der die Option erklärt, Kategorien für einen individuellen Quiz zu mischen */

/* ANFANG - Funktion, die aus den ausgewählten Kategorien ein neues Array erstellt und dieses zum Array in data.js an die Kategorie mischen anfügt, damit dieser individuell zusammengestellte Quiz nach dem Klick auf den Button "Mischen" abgearbeitet werden kann */

function mischFunktion(){

    if(aMix.length != 0){
    var nr = $(this).attr("data-nr");
    
    var aKatMix = [];
    var aMixFinal = [];
    var nameString = "";
    var aNames = []; 
    
    $(".clickBox").remove();
    $("#mischcont1").remove();
    $("#mischcont2").remove();
    

    for (i in aMix){
              
        for(var o=0; o<aKat.length; o++){
            if(aMix[i] == aKat[o].name){
                
                //Fügt ausgewählte Fragekategorie (aus dem Bereich der einfachen Fragekategorien) zum Mixarray hinzu, damit nachher der individualisierte Quiz auf Basis dieser Mischung abgearbeitet werden kann
                
                aKatMix.push(aKat[o].arrayBox);
                
                //Fügt ein + ein zwischen die ausgewählten Kategorien, sofern mehrere ausgewählt worden sind und es nicht die zuletzt ausgewählte Kategorie ist
                
                if(aMix.length>1 && i<aMix.length-1){
                    nameString += aKat[o].name + " + "; 
                }
                
                else{
                    nameString += aKat[o].name;  
                }
                
            }//ENDE if
   
        }//ENDE for
        
    
        for(j in aindicesKomplex){
            for (var x=0; x<aKat[aindicesKomplex[j]].arrayBox.length; x++){

            if(aMix[i] == aKat[aindicesKomplex[j]].arrayBox[x].name){

                //Fügt ausgewählte Fragekategorie (aus dem Bereich der komplexen Fragekategorien) zum Mixarray hinzu, damit nachher der individualisierte Quiz auf Basis dieser Mischung abgearbeitet werden kann
                aKatMix.push(aKat[aindicesKomplex[j]].arrayBox[x].arrayBox);
                
                //Füge ein + ein zwischen die ausgewählten Kategorien, sofern mehrere ausgewählt worden sind und es nicht die zuletzt ausgewählte Kategorie ist
                
                if(aMix.length>1 && i<aMix.length-1){
                nameString +=  aKat[aindicesKomplex[j]].arrayBox[x].name + " + ";
                }//ENDE if
                
                else{
                nameString += aKat[aindicesKomplex[j]].arrayBox[x].name;
                }//ENDE else
                
            }//ENDE if
   
      }//ENDE for
    }//ENDE for (j in aindicesKomplex)
    }//ENDE for (i in aMix)
    
        
    /* Erstellung eines finalen Mix-Arrays, das aussieht, wie eine einfache Fragekategorie (z.B. Verantwortung) */
    for (i in aKatMix){
        for (j in aKatMix[i]){
          aMixFinal.push(aKatMix[i][j]);   
        }//ENDE for
    }//ENDE for
      
    
    for(i in aKat){
        if(aKat[i].name == "Kategorien mischen"){
                aKat[i].arrayBox = null;
                aKat[i].arrayBox = aMixFinal;//Fügt individuell gemixtes Fragenarray zur Mischkategorie in der data.js hinzu
                
                aKat[i].namemix = null;
                aKat[i].namemix = nameString;//Fügt Liste der Namen der gemixten Fragekategorien unter namemix zur data.js hinzu 
                
                var mischVar = i;//merkt sich den Index des Abschnitts der aKat, der den Namen "Kategorien mischen" trägt
                
            }//ENDE if
        }//ENDE for
    
    erklaerFkt(nr,aKat[nr].namemix);//Führt Funktion aus, vor dem Start eines Quizzes die erklärende Startseite zeigt
    
    }//ENDE if if(aMix.length != 0)
    
    else{
        hinweismischen();

    }//ENDE else
}//ENDE function mischFunktion()


/* ENDE - Funktion, die aus den ausgewählten Kategorien ein neues Array erstellt und dieses zum Array in data.js an die Kategorie mischen anfügt, damit dieser individuell zusammengestellte Quiz nach dem Klick auf den Button "Mischen" abgearbeitet werden kann */


/* ANFANG - Funktion wechselt die CSS-Darstellung der Kategorien, die in die Auswahlbox gezogen worden sind */

function intheMixbox(wer,nummer){

/* Wechselt CSS-Klasse wenn Fragekategorie in Auswahlbox gezogen worden ist und fügt diese Kategorie zum aMix Array hinzu */    
    if(isHit(wer,mischcont2)){
        $(wer)
            .addClass("mischkat2");
       
            
        aMix.push($(wer).html());
    }//ENDE if
    
    
/* Wechselt CSS-Klasse wenn Fragekategorie wieder aus der Auswahlbox entfernt wird und löscht sie wieder aus dem aMix Array */    
    if(isHit(wer,mischcont1)){
        $(wer).removeClass("mischkat2");
            
        
        
        for(i in aMix){
            if(aMix[i] == $(wer).html()){
                aMix.splice(i, 1);
            }//ENDE if
        }//ENDE for
    }//ENDE if
    
}//ENDE function intheMixbox(wer,nummer)

/* ENDE - Funktion wechselt die CSS-Darstellung der Kategorien, die in die Auswahlbox gezogen worden sind */


/* ANFANG - Hilfskunktion, die prüft, ob die Kategorien mit drag und drop in die Box gezogen worden sind */

function isHit(obj1,obj2){
     var rect1=obj1.getBoundingClientRect();
     var rect2=obj2.getBoundingClientRect();
     return !(rect1.right < rect2.left || rect1.left > rect2.right || 
             rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}// ENDE function isHit(obj1,obj2)

/* ENDE - Hilfskunktion, die prüft, ob die Kategorien mit drag und drop in die Box gezogen worden sind */


function clickBoxPadding(){
    
    var paddingTop = 0.15*$('#weiterBox').height(); 
    var marginTop = ($('#weiterBox').height() - $('#weiterBox').height()*.8)/2;
    $('.clickBox').css({paddingTop:paddingTop+"px", height:$('#weiterBox').height()*.8+"px", marginTop:marginTop});
}

function antwortBoxflexBoxDirection(){
    
    if($('.body').innerHeight() < $('.body').innerWidth()){
        $('.antwortBox').css({flexDirection: 'row', flexFlow: 'row', marginTop:'0%'});
        alert('Huhu');
    }
    if($('.body').innerHeight() > $('.body').innerWidth()){
        $('.antwortBox').css({flexDirection: 'column', flexFlow: 'column', marginTop:'5%'});
        alert('Hihi');
    }
}

function antwortBoxHeightFkt(){
    var antwortBoxHeight = $('.contquest').innerHeight() - $('.frageBox').innerHeight()-0.08*$('.contquest').innerHeight();
            $('.frageBox').css({height: $('.frageSatz').innerHeight(), maxHeight: $('.contquest').innerHeight()*0.5});
            $('.antwortBox').css({height: antwortBoxHeight + "px"});
            console.log('contquestHeight', $('.contquest').innerHeight());
            console.log('antwortBoxHeight', $('.antwortBox').innerHeight());
}

function heightWithWeiterBox(){
        var h = window.innerHeight;
//    var navHeight = $('nav').height();  
    var navHeight = 50;
    var mainBoxHeight = h-navHeight;
    var containerBoxHeight = mainBoxHeight-$('#weiterBox').height(); 

    $('#mainBox').css({top: navHeight+'px', height: mainBoxHeight+'px'});
    $('#containerBox').css({height: containerBoxHeight+'px'});
    $('#weiterBox').css({top: containerBoxHeight+'px'}).show();
}


/*********************************************************************/
/******************************* Backend/Admin-Bereich **************************************/

function loginFkt(){
    $('.loginBox').remove();
    $('#logoutBtn').remove();
    $("#adminBox").remove();
    $("#adminBox1").remove();
    
    $('.box').remove();
    $('#erklaerBox').remove();
    $('.contquest').remove(); 
    $('.mischcont1').remove();
    $('.mischcont2').remove();
    $(".clickBox").remove();
    $("#auswertBox").remove();

    $("#weiterBox").hide();    
   
    
    $('<div id="loginBox">')
            .addClass('loginBox')
            .appendTo($(containerBox));    

    $('<div id="loginHeadline">')
            .addClass('loginHeadline')
            .html('Admin-Bereich')
            .appendTo($('#loginBox')); 

    $('<input id="userName" type="text" placeholder="username">')
            .addClass('userName loginInputBoxen')
            .appendTo($('#loginBox'));    
    
    $('<input id="passWord" type="password" placeholder="password">')
            .addClass('passWord loginInputBoxen')
            .appendTo($('#loginBox'));    

    $('<div id="loginBtn">')
            .addClass('loginBtn')
            .html('Login')
            .on('click', loginBtnFkt)
            .appendTo($('#loginBox'));  
    
}//ENDE loginFkt()

function loginBtnFkt(){

    var username = $('#userName').val();
    var password = $('#passWord').val();
    checkLogin(username, password);
}//ENDE loginBtnFkt()


//Funktion erstellt Menü des Backend/Admin-Bereichs
function adminFkt(){

    $('#loginBox').remove(); 
    
    $('#adminBox').remove();
       
    
    $('<div id="adminBox1">')
            .addClass('adminBox1')
            .appendTo($(containerBox));
    
    $('<div id="neuEinfachKatBtn">')
            .addClass('adminKatBtn')
            .html('Einzelne Kategorie hinzufügen')
            .on('click', neuEinfachKatFkt)
            .appendTo($('#adminBox1'));

    $('<div id="neuKomplexKatBtn">')
            .addClass('adminKatBtn')
            .html('Kategorie mit Unterkategorien hinzufügen')  
            .on('click', neuKomplexKatFkt)
            .appendTo($('#adminBox1'));
    
    $('<div id="alterKatBtn">')
            .addClass('adminKatBtn')
            .html('Bestehende Kategorie anpassen')
            .on('click', alterKatFkt)
            .appendTo($('#adminBox1'));   
    
    
}//ENDE adminFkt()

//Funktion erstellt Maske zur Eingabe der Fragen der neuen einfachen Quiz-Kategorie
function neuEinfachKatFkt(){

    $('#adminBox1').remove();
    $('#adminBox').remove();     

    $('<div id="adminBox">')
            .addClass('adminBox')
            .appendTo($(containerBox));    

    $('<div id="katNameBoxWrap" >')
            .addClass('fragenWrap')
            .appendTo($('#adminBox'));    
    

    $('<label for="katName" >')
            .addClass('katName inputBoxen')
            .html('Name der neuen Kategorie')
            .appendTo($('#katNameBoxWrap'));  
        
    $('<input id="katName" type="text" placeholder="Kategoriename">')
            .addClass('katName inputBoxen')
            .appendTo($('#katNameBoxWrap'));



    $('<div id="fragenAnzahlBoxWrap" >')
            .addClass('fragenWrap')
            .appendTo($('#adminBox'));

    $('<label id="fragenAnzahlBoxLabel" for="fragenAnzahlBox" >')
            .addClass('fragenAnzahl inputBoxen')
            .html('Anzahl der Fragen')
            .appendTo($('#fragenAnzahlBoxWrap'));     
    
    $('<input id="fragenAnzahlBox" type="text" placeholder="Wie viele Fragen gehören zur Kategorie?">')
            .addClass('fragenAnzahl inputBoxen')
            .appendTo($('#fragenAnzahlBoxWrap'));
    
    

    $('<div id="fragenAnzahlBtnBoxWrap" >')
            .addClass('fragenWrap')
            .appendTo($('#adminBox'));
    
    $('<div id="fragenAnzahlBtn" >')
            .addClass('loginBtn')
            .html('Erstelle Fragenmaske')
            .on('click', mehrFragenFkt) 
            .appendTo($('#fragenAnzahlBtnBoxWrap'));

   backToMenuFkt();//Fügt Button hinzu, mit dem man zurück zum Admin-Menü kommt
    
}//ENDE neuEinfachKatFkt()


//Funktion erstellt Maske zur Eingabe der Fragen der neuen komplexen Quiz-Kategorie
function neuKomplexKatFkt(){
    $('.adminKatBtn').remove();
}

//Funktion führt zu weiterem Menü, dass die Möglichkeiten auflistet, bestehende Kategorien zu verändern
function alterKatFkt(){
    $('.adminKatBtn').remove();


    //Mögliche Änderungen:
    //a) Löschen einer Kategorie
    //b) Löschen von einzelnen Fragen
    //c) Löschen von einzelnen Antworten
    //d) Löschen von einzelnen richtigen Antworten
    //e) Abändern der vorhandenen Fragetexte
    //f) Abändern der vorhandenen Antworttexte
    //g) Abändern der vorhandenen richtigen Antworttexte
    //h) Hinzufügen neuer Fragen
    //i) Hinzufügen neuer Antworten
    //j) Hinzufügen neuer richtiger Antworten
    
    //Darstellung der vorhandenen Kategorien -> CheckBox für Angabe an welcher Änderungen vorgenommen werden sollen
    
    
}

//Funktion erstellt Fragen und Antwortmaske für Fragen, die zu neuer einfacher Quiz-Kategorie hinzugefügt werden sollen
function mehrFragenFkt(){

    aNeueFragenIndices = [];
    
    var fragenanzahl = $('#fragenAnzahlBox').val();
    var f;

    if(fragenanzahl>0){
    $('#backToMenuBtn').remove();    
    $('#fragenAnzahlBoxWrap').hide();
    $('#fragenAnzahlBtnBoxWrap').hide();
    
    $('#fragenAnzahlBtn').hide();
    $('#fragenAnzahlBox').hide();
    $('#fragenAnzahlBoxLabel').hide();
        

    
    for(var i=0; i<fragenanzahl; i++){
        $('#frage'+i).remove();
        f = i + 1;
        
        $('<div id="fragenWrap'+i+'" data-nr="'+i+'">')
                .addClass('fragenWrap')
                .appendTo($('#adminBox'));

        $('<label id="fragenTxtBoxLabel" for="frage'+i+'" >')
                .addClass('fragenAnzahl inputBoxen')
                .html('Frage '+f+' zur neuen Kategorie')
                .appendTo($('#fragenWrap'+i));             
        
        $('<input id="frage'+ i +'" type="text" placeholder="Frage'+ f +'" data-nr="'+i+'">')
                .addClass('inputBoxen')
                .appendTo($('#fragenWrap'+i));
        
        $('<input id="antwortAnzahlBox'+i+'" data-nr="'+i+'" type="text" placeholder="Gebe die Anzahl möglicher Antworten an">')
            .addClass('fragenAnzahl inputBoxen')
            .appendTo($('#fragenWrap'+i));
    
        $('<div id="antwortAnzahlBtn'+i+'" data-nr="'+i+'">')
            .addClass('fragenAnzahl formularBtn')
            .html('Eingabefelder für mögliche Antworten erstellen')
            .on('click', mehrAntwortenFkt)
            .appendTo($('#fragenWrap'+i));
        

        aNeueFragenIndices.push(i);    
        
        
    }
        
        weitereEinzelFrageBtnKonstructor(i);
        EinfachKatresetBtnFkt();
        absendeBtnKonstructor(i);
        backToMenuFkt();
        console.log(aNeueFragenIndices);
        
    }
                else{
                alert('Bitte gebe die Anzahl der Fragen an.');
            }
}

//Funktion erstellt die möglichen Antworten und Maske für richtige Antworten, die zu neuer einfacher Quiz-Kategorie hinzugefügt werden sollen 
function mehrAntwortenFkt(){
            
        var nr = $(this).attr('data-nr');
        var antwortanzahl = $('#antwortAnzahlBox'+nr).val();
                
    if( antwortanzahl>0 ){ 

        $('#antwortAnzahlBox'+nr).hide();
        $('#antwortAnzahlBtn'+nr).hide();        
    
    aNeueAntwortenIndices[nr] = [];

    for(var i=0; i<antwortanzahl; i++){
        
        $('#antwort'+nr+i).remove();
        var f = i + 1;
        var g = parseInt(nr) + 1;
        $('<input id="antwort'+ nr+i +'" type="text" placeholder="Antwort'+ f +' zu Frage'+g+'" data-nr"'+nr+i+'">')
                .addClass('inputBoxen')
                .appendTo($('#fragenWrap'+nr));
        
        aNeueAntwortenIndices[nr].push(nr+i);        
    }

    $('<input id="CantwortAnzahlBox'+nr+'" data-nr="'+nr+'" type="text" placeholder="Gebe die Anzahl richtiger Antworten an">')
        .addClass('fragenAnzahl inputBoxen')
        .appendTo($('#fragenWrap'+nr));

    $('<div id="CantwortAnzahlBtn'+nr+'" data-nr="'+nr+'" data-antwortzahl="'+antwortanzahl+'" >')
        .addClass('fragenAnzahl formularBtn')
        .html('Eingabefelder für richtige Antworten erstellen')
        .on('click', richtigeAntwortenFkt)
        .appendTo($('#fragenWrap'+nr));      
    
        
    }
    else{
        alert('Bitte gebe die Anzahl möglicher Antworten an.');
    }
    console.log(aNeueAntwortenIndices);
    
 
    
}


//Funktion erstellt richtige Antworten, die zu neuer einfacher Quiz-Kategorie gehören
function richtigeAntwortenFkt(){
    
        var nr = $(this).attr('data-nr');

        
        var Cantwortanzahl = $('#CantwortAnzahlBox'+nr).val(); 
        var antwortanzahl = $(this).attr('data-antwortzahl');
        console.log("antwortanzahl = ", antwortanzahl);
           if( Cantwortanzahl>0 && Cantwortanzahl<= antwortanzahl){  
               
            $('#CantwortAnzahlBox'+nr).hide();
            $('#CantwortAnzahlBtn'+nr).hide();       
            aNeueCAntwortenIndices[nr] = [];
        
                for(var i=0; i<Cantwortanzahl; i++){

                    $('#Cantwort'+nr+i).remove();
                    var f = i + 1;
                    var g = parseInt(nr) + 1;
                    $('<input id="Cantwort'+ nr+i +'" type="text" placeholder="Richtige Antwort'+ f +' zu Frage'+g+'" data-nr"'+nr+i+'" >')
                            .addClass('inputBoxen')
                            .appendTo($('#fragenWrap'+nr));

                    aNeueCAntwortenIndices[nr].push(nr+i);
                }   
    }
    if(!Cantwortanzahl){
        alert('Bitte gebe die Anzahl möglicher Antworten an.');
    }
    if(Cantwortanzahl>antwortanzahl){
        alert('Die Anzahl richtiger Antworten muss kleiner sein als die Anzahl der möglichen Antworten.');
    }        
     
console.log(aNeueCAntwortenIndices);
}


//Funktion ermöglicht es einzelne weitere Fragen zu neuer Quiz-Kategorie hinzuzufügen, falls man vorher in der Maske eine falsche Anzahl eingegeben hat
function weitereEinzelFrageFkt(){
    
        $('#absendeBtn').remove();
        $('#resetBtn').remove();
        $('#backToMenuBtn').remove();           
        
        var nr = $(this).attr('data-nr');
        var f = parseInt(nr) + 1;
        
        $('<div id="fragenWrap'+nr+'" data-nr="'+nr+'">')
                .addClass('fragenWrap')
                .appendTo($('#adminBox'));

        $('<label id="fragenTxtBoxLabel" for="frage'+nr+'" >')
                .addClass('fragenAnzahl inputBoxen')
                .html('Frage '+f+' zur neuen Kategorie')
                .appendTo($('#fragenWrap'+nr));     
        
        $('<input id="frage'+ nr +'" type="text" placeholder="Frage'+ f +'" data-nr="'+nr+'">')
                .addClass('inputBoxen')
                .appendTo($('#fragenWrap'+nr));
        
        $('<input id="antwortAnzahlBox'+nr+'" data-nr="'+nr+'" type="text" placeholder="Gebe die Anzahl möglicher Antworten an">')
            .addClass('fragenAnzahl inputBoxen')
            .appendTo($('#fragenWrap'+nr));
    
        $('<div id="antwortAnzahlBtn'+nr+'" data-nr="'+nr+'">')
            .addClass('fragenAnzahl formularBtn')
            .html('Eingabefelder für mögliche Antworten erstellen')
            .on('click', mehrAntwortenFkt)
            .appendTo($('#fragenWrap'+nr));
    
        aNeueFragenIndices.push(nr);         
    
        weitereEinzelFrageBtnKonstructor(nr);    
        absendeBtnKonstructor(nr);
        EinfachKatresetBtnFkt();
        backToMenuFkt();
}

var zahl=0;

//Funktion erstellt den Button zur Erstellung weiterer einzelner Fragen für die neue einfache Quiz-Kategorie
function weitereEinzelFrageBtnKonstructor(nr){
        
        if(zahl<nr){
        zahl = parseInt(nr);
        }
        else{
        zahl++;    
        }
        $('#weitereEinzelFrage').remove();
        $('<div id="weitereEinzelFrage" data-nr="'+zahl+'">')
            .addClass('loginBtn')
            .html('Weitere Frage anfügen')
            .on('click', weitereEinzelFrageFkt)
            .appendTo($('#adminBox'));
}


//Funktion erstellt Vorschau-Button, mit dem vor dem Speichern das Aussehen der neuen Fragenkategorie überprüft werden kann
function absendeBtnKonstructor(nr){
        $('#absendeBtn').remove();
        $('<div id="absendeBtn" data-nr="'+nr+'">')
            .addClass('loginBtn')
            .html('Vorschau')
            .on('click', eingabenDarstellen)
            .appendTo($('#adminBox')); 
}

//Funktion erstellt Logout-Button für Backend/Admin-Bereich
function logoutBtnFkt(){
        $('<div id="logoutBtn">')
            .addClass('loginBtn')
            .html('Logout aus Admin-Bereich')
            .on('click', loginFkt)
            .appendTo($('#containerBox'));     
}


console.log(aNeueFragenIndices);
console.log(aNeueAntwortenIndices);
console.log(aNeueCAntwortenIndices);

//Funktion erstellt Vorschau des Titels, der Fragen und Antworten der neuen einfachen Fragenkategorie vor dem Speichern
function eingabenDarstellen(){
    
    $('#weitereEinzelFrage').hide(); 
    $('.fragenWrap').hide();      
    $('#backToMenuBtn').remove();      
    $('#resetBtn').remove();
        
    for(var i=0; i<aNeueFragenIndices.length; i++){
    $('<div id="darstfrage'+i+'">')
            .addClass('inputBoxen')
            .html('Frage'+(i+1)+': '+$('#frage'+aNeueFragenIndices[i]).val())
            .appendTo('#adminBox');         

    console.log($('#frage'+aNeueFragenIndices[i]).val());

    for(var j=0; j<aNeueAntwortenIndices[i].length; j++){
    $('<div id="darstantwort'+i+j+'">')
            .addClass('inputBoxen')
            .html('Antwort'+(j+1)+' zur Frage'+(i+1)+': '+$('#antwort'+aNeueAntwortenIndices[i][j]).val())
            .appendTo($('#darstfrage'+i));             

    console.log($('#antwort'+aNeueAntwortenIndices[i][j]).val());

        }    

    for(var k=0; k<aNeueCAntwortenIndices[i].length; k++){
    $('<div id="cantwort'+i+j+'">')
            .addClass('inputBoxen')
            .html('Richtige Antwort'+(k+1)+' zur Frage'+(i+1)+': '+ $('#Cantwort'+aNeueCAntwortenIndices[i][k]).val())
            .appendTo($('#darstfrage'+i));    
    
    console.log($('#Cantwort'+aNeueCAntwortenIndices[i][k]).val());
    }            
    
    }
    
        $('#absendeBtn').remove();
        $('<div id="absendeBtn">')
            .addClass('loginBtn')
            .html('Alles Speichern')
            .on('click', fragenundantwortenSpeichern)
            .appendTo($('#adminBox'));   
    

     EinfachKatresetBtnFkt();
     backToMenuFkt();
    
}

//Funktion ertellt Reset-Button, über den man zurück zur Fragen-Eingabe-Maske für die neue einfache Quiz-Kategorie kommt
function EinfachKatresetBtnFkt(){
        $('<div id="resetBtn">')
            .addClass('loginBtn')
            .html('Reset')
            .on('click', neuEinfachKatFkt)
            .appendTo($('#adminBox'));      
}

//Funktion erstellt Button über den man zurück zum allgemeinen Backend/Admin-Bereich-Menü kommt
function backToMenuFkt(){
        $('<div id="backToMenuBtn">')
            .addClass('loginBtn')
            .html('Zurück zum Admin-Menü')
            .on('click', adminFkt)
            .appendTo($('#adminBox'));      
}