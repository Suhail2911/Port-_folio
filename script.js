--$('.menu-btn').click(function(){
    $('.navbar.menu'.toggleClass('active'));
    $('.menu-btn i').toggleClass('active');
  });
  function sendMail() {
    var params ={
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
  
    const serviceID = "service_6x56has";
    const templateID= "template_szfqk7n";
      alert('Your message send succesfully');

    emailjs
    .send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("name").value ="";
            document.getElementById("email").value ="";
            document.getElementById("message").value ="";
            console.log(res);
            alert("you have sent the message");
    })
    .catch((err) => console.log(err));
  }