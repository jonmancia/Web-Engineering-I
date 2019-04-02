<?php
  function calculateMonth($intMonth)
  {
    switch($intMonth)
    {
      case 1:
        return "January";
        break;
      case 2:
        return "February";
        break;
      case 3:
        return "March";
        break;
      case 4:
        return "April";
        break;
      case 5:
        return "May";
        break;
      case 6:
        return "June";
        break;
      case 7:
        return "July";
        break;
      case 8:
        return "August";
        break;
      case 9:
        return "September";
        break;
      case 10:
        return "October";
        break;
      case 11:
        return "November";
        break;
      case 12:
        return "December";
        break;
    }
  }
?>
<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="main.css">
  <script src="index.js"></script>
  <title>My Geek Tees</title>
</head>
 
<body>
  <section class="form-box">
    <div class="payment-details-box" style="margin-top: 5%;">
      <h4 class="payment-details-heading">Review Order:</h4>
      <div style="margin: 0 auto; width: 50%; text-align: center;">
            <h2>Personal Details:</h2>
            <p><?php echo $_POST["first-name"] . " " . $_POST["last-name"]?></p>
            <p><?php echo $_POST["phone"]?></p>
            <p><?php echo $_POST["address"]?></p>
            <p><?php echo $_POST["credit-card"] . " - " . calculateMonth($_POST["creditcard-exp-month"]) . "/" . $_POST["creditcard-exp-year"]; ?></p>
      </div>
      <br>
      <table style="text-align: left; border-collapse: collapse; border: 2px solid black; padding: 5px; margin: 0 auto; width: 50%;">
        <tr style=" border: 1px solid black;">
          <th>Item</th>
          <th>Cost</th>
        </tr>
        <?php
            # Sum of all items (cost)
            $sum =  0;
            # Display Checked Items
            if (isset($_POST["developer"]))
            {
              echo "<tr><td>Developer T-Shirt</td><td>$" . $_POST["developer"] . "</td></tr>";
              $sum += $_POST["developer"];
            }

            if (isset($_POST["twoStates"]))
            {
              echo "<tr><td>Two States of Developer T-Shirt</td><td>$" . $_POST["twoStates"] . "</td></tr>";
              $sum += $_POST["twoStates"];
            }
            if (isset($_POST["engineer"]))
            {
              echo "<tr><td>I'm an Engineer T-Shirt</td><td>$" . $_POST["engineer"] . "</td></tr>";
              $sum += $_POST["engineer"];
            }
            if (isset($_POST["codeRepeat"]))
            {
              echo "<tr><td>Eat Code Repeat T-Shirt</td><td>$" . $_POST["codeRepeat"] . "</td></tr>";
              $sum += $_POST["codeRepeat"];
            }
            if (isset($_POST["hacked"]))
            {
              echo "<tr><td>Hacked T-Shirt</td><td>$" . $_POST["hacked"] . "</td></tr>";
              $sum += $_POST["hacked"];
            }
        
        echo "</table>";
        echo "<h2 style=\"margin: 2.5% 0;\">Total: $" . $sum . "</h2>";
       
        echo "<form action=\"assign11_a.php\">
              <div class=\"form-buttons\">
              <input type=\"submit\" name=\"submit\" value=\"Confirm\"></input>
              <input type=\"submit\" name=\"submit\" value=\"Cancel\"></input>
              </div>
              </form>";
               ?>
    </div>
    
  </section>
</body>

</html>
