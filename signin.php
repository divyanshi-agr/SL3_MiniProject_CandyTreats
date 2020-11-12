<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Form Page</title>
    <link rel="stylesheet" href="styleform.css" />  
    <style>
      .error{color: red; font-size: 18px;}
    </style>
  </head>
  <body>
    
  <?php
      // define variables and set to empty values
      $nameErr = $emailErr = $pswdErr = "";
      $name = $email = $pswd = "";

      if ($_SERVER["REQUEST_METHOD"] == "POST") {

      if (empty($_POST["email"])) {
      $emailErr = "Email is required";
      } else {
      $email = test_input($_POST["email"]);
      // check if e-mail address is well-formed
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format!";
      }
      }

      if (empty($_POST["name"])) {
      $nameErr = "Name is required";
      } else {
      $name = test_input($_POST["name"]);
      // check if name syntax is valid
      if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
        $nameErr = "Only letters and whitespace allowed!";
      }    
      }

      if (empty($_POST["pwd"])) {
        $pswdErr = "Password is required";
        } else {
        $pswd = test_input($_POST["pwd"]);
        // check if name syntax is valid
        if (!preg_match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/", $pswd)) {
          $pswdErr = "One special symbol, digit, uppercase, lowercase letter necessary!";
        }    
        }

      }

      function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
      }

      if (isset($_POST['submitform']))
      {   
        ?>
        <script type="text/javascript">
        window.location = "index.html";
        </script>      
        <?php
      }

  ?>

    <div class="page-body">
      <div class="main-form">
        <div class="header">
          <h1>Sign-in</h1>
        </div>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
  
    <div class="form-control">
      <label for="fname">Name</label><br />
      <input
        type="text"
        id="username"
        name="name"
        required
        minlength="6"
        maxlength="24"
      />
      <span class="error"><?php echo $nameErr;?></span>
    </div>

    <div class="form-control">
      <label for="email">Email</label><br />
      <input type="text" id="email" name="email" required />
      <span class="error"><?php echo $emailErr;?></span>
    </div>

    <div class="form-control">
      <label for="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" required />
      <span class="error"><?php echo $pswdErr;?></span>
    </div>

    <input type="submit" value="Sign in" name="submitform" />
    <p class="form-para">
      Don't have an account? <a href="register.html"> Register</a>
    </p> 
</form>
</body>
</html>
