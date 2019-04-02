<?php
   $aprValue   = $_GET["apr-rate"];
   $loanTerm   = $_GET["loan-term"];
   $loanAmount = $_GET["loan-amount"];
     
?>

<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="main.css">
  <script src="index.js" type="text/javascript"></script>
  <title>JS Mortgage Calculator</title>
</head>

<body onload="focusOnload()">
  <section class="calculator-box">
    <h2 class="calculator-heading" style="text-shadow: 2px 3px #96281b; padding-bottom: 3%; padding-top: 3%;">Your results:</h2>
    <div class="form-box">
      <form>
        <div class="apr-box">
          <label for="apr-rate">APR Rate:</label>
          <?php echo "<input type=\"text\" disabled value=\"$aprValue\"></input>"; $aprValue /= 100; ?>
        </div>
        <div class="loan-term-box">
          <label for="loan-term">Loan term:</label>
          <?php echo "<input type=\"text\" disabled value=\"$loanTerm\"></input>"; ?>
        </div>
        <div class="loan-amount-box">
          <label for="loan-amount">Loan Amount:</label>
          <?php echo "<input type=\"text\" disabled value=\"$loanAmount\"></input>"; ?>
        </div>
        <div class="buttons-box">
          <div style="text-align: center; margin-top: -20px;">
          <?php
                $monthlyAmount = ( ($aprValue / 12) * $loanAmount) / (1 - pow((1 + $aprValue / 12), (-($loanTerm * 12))) );
                
          ?>
               <h3 style="width: 60%; margin: 0 auto; padding-top: 5%; border-bottom: 2px solid #96281b;">Monthly Payment:</h3>
               <h3 style="color: #FFCE72; text-shadow: 3px 3.5px #96281b;"><?php echo "$" . number_format($monthlyAmount, 2); ?></h3>
          </div>
        </div>
      </form>
    </div>
  </section>
</body>

</html>
