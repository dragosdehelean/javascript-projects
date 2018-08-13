<?php
header("Access-Control-Allow-Origin: *"); 

// Connection to Database
$db = new PDO("mysql:dbname=mod9_1;host=localhost;charset=utf8mb4", 'root', '');
$db->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

// Only process POST requests
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    try {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
        $name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $message = trim($_POST["message"]);

    
        $query = "INSERT INTO messages(name, email, message, created)
                VALUES ('$name', '$email', '$message', NOW() )";

        $db->exec($query);

        echo "New record created successfully";
    } 
    catch(PDOException $e){

        echo $query . "<br>" . $e->getMessage();

    }
}

// Only process GET requests
if ($_SERVER["REQUEST_METHOD"] == "GET") {
   
    try {
        $query = 'SELECT name, email, message 
                    FROM messages
                    ORDER BY created DESC
                ';
    
        $statement = $db->query($query);

        $data = $statement->fetchAll(PDO::FETCH_ASSOC);

        // echo '<pre>';
        // var_dump($data);
        // echo '</pre>';

        $output = json_encode($data);

        echo $output; 
    } 
    catch(PDOException $e){

        echo $query . "<br>" . $e->getMessage();

    }
}



?>