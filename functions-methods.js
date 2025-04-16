// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomain(emailAddress){
    return emailAddress.match(/@([^@]+)/);
//     Dit moest ik opzoeken. Blijkbaar kun je gebruik maken van een regular expression voor het vinden van een match in een String, die daadwerkelijk ook een String teruggeeft. De schrijfwijze hiervan is een beetje funky, maar komt op het volgende neer:
//     @: Zoekt het apenstaartje in het e-mailadres op en zegt: begin hier met matchen.
//     ([^.]+): Dit is de capture group en zegt: neem alles wat matcht met wat hierbinnen staat
//     [^.]+: [ en ] definieren de lijst karakters waar we op checken
//     '^' betekent: NIET deze karakters
//     '@' betekent: we nemen alles TOT de @ (Die er niet nog eens in staat)
//     '+' betekent: match op 1 of meer karakters
}

const emailAddress1 = "n.eeken@novi-education.nl";
const emailAddress2 = "t.mellink@novi.nl";
const emailAddress3 = "a.wiersma@outlook.com";

console.log(getEmailDomain(emailAddress1)[1], getEmailDomain(emailAddress2)[1], getEmailDomain(emailAddress3)[1]);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


function typeOfEmail(emailAddress){
    if (emailAddress.includes("@novi-education.nl")){
        return "Student"
    } else if (emailAddress.includes("@novi.nl")){
        return "Medewerker"
    } else {
    return "Extern"}
}

const emailAddress4 = "novi.nlaapjesk@outlook.com"

console.log(typeOfEmail(emailAddress1), typeOfEmail(emailAddress2), typeOfEmail(emailAddress3), typeOfEmail(emailAddress4));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in


function checkEmailValidity(emailAddress){
    if (emailAddress.includes("@") && (!emailAddress.includes(",")) && (!emailAddress.endsWith("."))){
        return true
    } else {
        return false;
    }
}

const emailAddress5 = "tessmellink@novi.nl"
const emailAddress6 = "n.eekenanovi.nl"
const emailAddress7 = "n.eeken@novinl."
const emailAddress8 = "tessmellink@novi,nl"

console.log(checkEmailValidity(emailAddress1), checkEmailValidity(emailAddress5), checkEmailValidity(emailAddress6), checkEmailValidity(emailAddress7), checkEmailValidity(emailAddress8));


