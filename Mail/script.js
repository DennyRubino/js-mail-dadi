//Mail
//Chiedi all’utente la sua email,
//controlla che sia nella lista di chi può accedere,
//stampa un messaggio appropriato sull’esito del controllo.
//Non è necessario provvedere alla validazione delle email.
//NON POTETE UTILIZZARE NESSUN METODO COME:
//- includes
//- indexOf
//- find
//- search
//- ecc...

//-1 Scrivo le email presenti nel archivio
const mailFolder = [
  'Nathan@gmail.com',
  'Ed@gmail.com',
  'Fabio@gmail.com',
  'Phil@gmail.com',
  'Carlo@gmail.com',
  'Lewis@gmail.com',
  'Luca@gmail.com'];

  //-2 creò una richiesta per email
  const  myMail = prompt("Inserisci la tua mail");
  let access = false; 
//-3 controllo se l'email inserita è presente nel archivio
  for (let i = 0; i < mailFolder.length; i++) 
      if (mailFolder[i] === myMail)   
           {access = true;}
  //se la email è presente in archivio restituisco un messaggio si conferma 
  if (access) 
      {alert("La sua email è presente nel  l'archivio");}
// se la email non è presente in archivio restituisco un messaggio di negazione
  else {alert("La sua email non è presente nel l'archivio");}
  