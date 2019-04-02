<!DOCTYPE html>
<html>
<head>
<title>PHP Loops</title>
</head>
<body>
  <h1 style="text-align: center">Class Names</h1>
  <div style="text-align: center">
  <?php

        $names = array("Peter", "James", "John");

        foreach($names as $name)
        {
                echo "<h1 style=\"color: red;\">$name</h1>";
        }                       

        $associative = array("Peter" => 1, "James" => 2, "John" => 3);
  
        foreach($associative as $name => $num)
        {
            echo "<h1 style=\"color: purple;\">$name, $num</h1>";

        }
?>

  </div>
</body>
</html>
