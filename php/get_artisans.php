<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

	try {
        $bdd = new PDO('mysql:host=localhost;dbname=test_technique;charset=utf8', 'root', 'root');
    }
    catch (Exception $e){
        die('Erreur : ' . $e->getMessage());
    };
    $reponse = $bdd->query("
        SELECT * FROM artisan
    ");

    if ($reponse->rowCount() > 0){
        while ($donnees = $reponse->fetch(PDO::FETCH_ASSOC)) {
            $resultset[] = $donnees;
        }
    } else {
        $resultset = [];
    }



    echo json_encode($resultset);

?>
