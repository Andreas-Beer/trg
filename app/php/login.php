<?php

$u = $_POST['u'];
$p = $_POST['p'];


$catnameNoJSON = json_decode($u);
$aNeueFragenNoJSON = json_decode($p);

$output = "";
        
if( ($u == "peter" && $p == "letmein2015") || ($u == "susi" && $p == "letmein2016")){
    $output = ["uname" => $u, "login" => "ok"];   
}else{
    $output = ["uname" => $u, "login" => "not"];  
}

/*var_dump( $output );
var_dump( json_encode($output) );*/

echo json_encode($output);

//
///*************************** MIT DATENBANK ****************************/
//$servername = "localhost";
//$username = "root";
//$password = "cimdata2016";
//$dbname = "trg_app";
//
//$uname = filter_input(INPUT_POST,'u');
//$pass =  filter_input(INPUT_POST,'p');
//
//
//// Create connection
//$conn = new mysqli($servername, $username, $password, $dbname);
//$conn->set_charset("utf8");
//
//// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}
//
//$sql = "SELECT * FROM adminuser WHERE uname='".$uname."'";
//$result = $conn->query($sql);
//
//if ($result->num_rows > 0) {
//    // output data of each row
//     $row = $result->fetch_assoc() ;
//    //echo "id: " . $row["id"]. " - Name: " . $row["name"]. ", " . $row["surname"]." ".$row["email"]." ".$row["uname"]." ";
//    //var_dump($row);
//     
//    //Ist user ..pass ...korrekt ->  
//    if ( $row['pass'] == $pass    ){
//        //.. ja -> gebe alle Daten des Users zurück
//        echo json_encode($row);
//        
//    }else {
//        //.. nein(User vorhanden, pass falsch) -> gebe error333 Bezechner zurück (erfunden von mir)
//        echo 'error_pass_not_valid';
//    } 
//     
//} else {
//    echo 'error_no_user';
//}

?>
