<?php
if (isset($_POST)) {
  error_reporting(0);

  $name = $_POST["nombre"];
  $email = $_POST["email"];
  $subject = $_POST["asunto"];
  $comments = $_POST["comentario"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "bonacci.leandro@gmail.com";
  $subject_mail = "Contacto desde el formulario del sitio $domain.";
  $message = "
    <p>
      Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
      <li>Nombre: <b>$name</b></li>
      <li>Email: <b>$email</b></li>
      <li>Asunto: $subject</li>
      <li>Comentarios: $comments</li>
    </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n" . "Content-Type: text/html; charset=utf-8\r\n" . "From: Envío Automático No Responder <no-reply@$domain>";

  $send_mail = mail($to, $subject_mail, $message, $headers);

  if($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados"
    ];
  } else {
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos. Intenta nuevamente."
    ];
  }

  //header("Access-Control-Allow-Origin: https://jonmircha.com"); //control de acceso
  header("Access-Control-Allow-Origin: *");
  header( 'Content-type: application/json' );
  echo json_encode($res);
  exit;
}