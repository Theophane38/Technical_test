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
    $idArtisan = $_GET['id'];

    $reponse = $bdd->query("
        SELECT * FROM user_review
        WHERE artisan_id = '$idArtisan'
        ORDER BY review_date DESC
        LIMIT 3
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
