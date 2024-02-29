<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Data Receiver</title>
</head>
<body>
    <?php
    // Check if form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $fullName = $_POST["fullName"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $dob = $_POST["dob"];
        $agreeTerms = isset($_POST["agreeTerms"]) ? "Yes" : "No";
        $preferredSpots = $_POST["preferredSpots"];
        $travelFrequency = $_POST["travelFrequency"];
        $travelExperience = $_POST["travelExperience"];

        // Display received data
        echo "<h2>Form Data Received</h2>";
        echo "<p><strong>Full Name:</strong> $fullName</p>";
        echo "<p><strong>Email:</strong> $email</p>";
        echo "<p><strong>Password:</strong> $password</p>";
        echo "<p><strong>Date of Birth:</strong> $dob</p>";
        echo "<p><strong>Agree to Terms:</strong> $agreeTerms</p>";
        echo "<p><strong>Preferred Spots:</strong> $preferredSpots</p>";
        echo "<p><strong>Travel Frequency:</strong> $travelFrequency</p>";
        echo "<p><strong>Travel Experience:</strong> $travelExperience</p>";
    } else {
        // If form is not submitted, display a message
        echo "<p>No form data submitted.</p>";
    }
    ?>
</body>
</html>
