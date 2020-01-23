// if($_POST["submit"]) {
//     $recipient="babavava420@gmail.com";
//     $subject="Form to email message";
//     $sender=$_POST["sender"];
//     $senderEmail=$_POST["senderEmail"];
//     $message=$_POST["message"];

//     $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

//     mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

//     $thankYou="<p>Thank you! Your message has been sent.</p



var form = document.getElementById("name");
form.onsubmit = function(e) {
    e.preventDefault();
console.log(form.name.value)
};

var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "still") {
      element.setAttribute("data-state", "animate");
      element.setAttribute("src", element.getAttribute("data-animate"));
    } else if (state === "animate") {
      element.setAttribute("data-state", "still");
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});
