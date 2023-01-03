<?php

// Passando os dados obtidos pelo formulário para as variáveis abaixo
$name     = $_POST['name'];
$email    = trim($_POST['email']);
$emaildestinatario = 'contato@email.com.br'; // Digite seu e-mail aqui, lembrando que o e-mail deve estar em seu servidor web
$text          = $_POST['text'];


/* Montando a mensagem a ser enviada no corpo do e-mail. */
$mensagemHTML = '<P>FORMULARIO PREENCHIDO NO SITE STILUSEG.COM</P>
<p><b>Nome:</b> '.$name.'
<p><b>E-Mail:</b> '.$email.'
<p><b>Mensagem:</b> '.$text.'</p>
<hr>';


// O remetente deve ser um e-mail do seu domínio conforme determina a RFC 822.
// O return-path deve ser ser o mesmo e-mail do remetente.
$headers = "MIME-Version: 1.1\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: $email\r\n"; // remetente
$headers .= "Return-Path: $emaildestinatario \r\n"; // return-path
$envio = mail($emaildestinatario, $text, $mensagemHTML, $headers);

if($envio)
{ echo("email enviado com sucesso");
    } else {
        echo("Erro ao enviar e-mail");
    }
?>
