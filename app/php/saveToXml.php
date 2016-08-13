<?php
// 3 GET PARAMS
//TEST OB DAS AUCH GEHT
//$aNeueFragen = filter_input(INPUT_POST, "aNeueFragen");
//$aNeueAntworten = filter_input(INPUT_POST, "aNeueAntworten");
//$aNeueCAntworten = filter_input(INPUT_POST, "aNeueCAntworten");

//FUNKTIONIERT
$catname = $_POST["catname"];//Name der neuen Kategorie
$aNeueFragen = $_POST["aNeueFragen"];//Array mit Fragentexten
$aNeueAntworten = $_POST["aNeueAntworten"];//Array mit Antworttexten
$aNeueCAntworten = $_POST["aNeueCAntworten"];//Array mit CAntworttexten 

$catnameNoJSON = json_decode($catname);
$aNeueFragenNoJSON = json_decode($aNeueFragen);
$aNeueAntwortenNoJSON = json_decode($aNeueAntworten);
$aNeueCAntwortenNoJSON = json_decode($aNeueCAntworten);

//FÜR TEST
//$aNeueFragen = "!";
//$fp = fopen("something.txt", "w");
////$string = $aNeueFragen; 
////$string = $aNeueAntworten; 
//$string = $aNeueCAntwortenNoJSON[0][0]; 
//fwrite($fp, $string, strlen($string)); 

/****************************************************************/

$qcatquestions = array();
$qcatquestiontext = array();
$allanswers = array();

//Arrays mit XML-Tags+Fragen&Antworttexten
$questcontent = array();//zum Füllen von qcatquestions
$answers = array();//zum Füllen von allanswers
$canswers = array();//zum Füllen von correctanswers
$correctanswers = array();//zum Füllen von correctanswers

$xml = simplexml_load_file('../xml/fragen.xml');
       
       for($i=0; $i<count($aNeueFragenNoJSON); $i++){
       
            for($j=0; $j<count($aNeueAntwortenNoJSON[$i]); $j++){                    
                $answers[$i] .= '<answer>'.$aNeueAntwortenNoJSON[$i][$j].'</answer>';//multiple//--->NICHT CORRECT         
            }
            
            for($k=0; $k<count($aNeueCAntwortenNoJSON[$i]); $k++){
                $canswers[$i] .= '<correctanswer>'.$aNeueCAntwortenNoJSON[$i][$k].'</correctanswer>';//multiple//--->NICHT CORRECT
            }
       
            
       $correctanswers[] = '<correctanswers>'.$canswers[$i].'</correctanswers>';//--->CORRECT      
       $allanswers[] = '<allanswers>'.$answers[$i].'</allanswers>';//--->CORRECT              
       $qcatquestiontext[] = '<qcatquestiontxt>'.$aNeueFragenNoJSON[$i].'</qcatquestiontxt>';//--->CORRECT          
       $questcontent[] =  $qcatquestiontext[$i].$allanswers[$i].$correctanswers[$i];//--->CORRECT    
       $qcatquestions[] = '<qcatquestions>'.$questcontent[$i].'</qcatquestions>';//multiple//--->CORRECT     
       $catcontent .= $qcatquestions[$i];//Zusammenfügen der Fragen zu einen XML-String
    }
       
        
    

        
        //'.$catname.'
            
//              $qcategory = new SimpleXMLElement('<qcategory name="Neue Kategorie">'.$qcatquestions[0].'</qcategory>');//--->CORRECT     
            $qcategory = new SimpleXMLElement('<qcategory name="'.$catnameNoJSON.'">'.$catcontent.'</qcategory>');   
       

       //Fügt XML-Baum in anderen XML-Baum     
            xml_adopt($xml,$qcategory); 
   
       //SimpleXmlObjekt wird für die Speicherung oder Ausgabe in XmlString umgewandelt  -> Wandelt in sauberes allgemeines XML(String)
            $output = $xml->asXML();       
//       echo $output;   
        
        
        //Für Test mit neuer XML-Datei
//        $output = $qcategory->asXML();    
       
  //Schreibe in XMLDATEI 
  $fp = fopen('../xml/fragen.xml', 'w+');
        fputs ($fp,$output,50024);
        fclose ($fp);      
       
     
/****************************************************************/

function xml_adopt($root, $new) {
    $node = $root->addChild($new->getName(), (string) $new);
    foreach($new->attributes() as $attr => $value) {
        $node->addAttribute($attr, $value);
    }
    foreach($new->children() as $ch) {
        xml_adopt($node, $ch);
    }
}

?>