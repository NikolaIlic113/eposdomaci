SAJT
Na ovoj web prezentaciji prikazali smo osnovne podatke o našoj školi na 6 stranica, od kojih svaka ima posebnu ulogu. Stranice su povezane i korisniku je omogućeno lako snalaženje na sajtu. Stranice su: Početna, Istorijat, Nastavno osoblje, Nastava, Kontakt i Galerija. 
U head delu svake stranice se nalazi naslov i slika, i povezivanje sa js i css. U futeru smo stavili copyright znak i naziv škole i grada. Futer i navigacioni bar se pojavljuju na svakoj stranici. 

POČETNA STRANA
Na ovoj stranici korisnik može videti kako škola izgleda danas i trenutno vreme. Takođe, na vrhu stranice postoji navigacioni bar koji korisnika može odvesti do ostalih stranica na sajtu.
U navigacionom baru napravili smo meni sa pet stavki koje su prilepljene na desnu stranu. Na levoj strani se nalazi logo škole, na koji kada kliknete vodi na početnu stranicu.
Meni je responzivan i kada se stranica smanji na 950px slika nestaje i meni se pretvara u opadajuću listu, koja se prikazuje klikom na ikonicu u desnom uglu.
Na stranici se nalazi pozadinska fotografija kojoj je prozirnost stavljena na 0,5, ona se takođe umanjuje kada se smanji stranica.
Sat u donjem levom uglu napravili smo preko js-a, sa funkcijom Date() iz koje smo izvukli sate, minute i sekunde, sa funkcijama getHours(), getMinutes(), getSeconds(). Formatirali smo i ispisali u divu koji ima id Clock. 

ISTORIJAT
Na ovoj stranici korisnik se može upoznati sa istorijom škole i određenim pohvalama, koje Gimnaziju u Kraljevu stavljaju među 10 najboljih srednjih škola u Srbiji. Takođe, sadrži sliku naše škole kako je nekada izgledala i slike pohvala.
Ovu stranicu smo napravili pomoću apsolutnog pozicioniranja, glavni div ima širinu 100%. Prvi poddiv je širine 70% sa levom marginom i desnim padding-om i u njemu smo postavili sliku koja ima atribut align sa vrednošću left i to dozvoljava da tekst bude oko nje. Drugi poddiv je širine 15%, kada se stranica smanji na 900px, poddivovi se šire na 80%, tako da drugi poddiv prelazi ispod prvog.

NASTAVNO OSOBLJE
Na ovoj stranici korisnik može izabrati predmet koji ga zanima i klikom na taj predmet automatski će biti prebačen na deo stranice koji prikazuje spisak profesora koji su na odabranom predmetu. Na dnu stranice postoji link, gde se klikom na njega korisnik vraća na početak stranice.
Meni gde korisnik može izabrati predmete napravili smo pomoću tag-a a koji ima događaj onclick, kojem je prosleđen atribut koji mu je potreban. 
Svaki predmet je napravljen pomoću liste koja ima poseban id.

NASTAVA
Na ovoj stranici korisnik može izabrati godinu koja ga zanima i da vidi raspored za tu odabranu godinu. Klikom na dugme korisnik može da sakrije raspored za odabranu godinu, a ponovnim klikom ponovo se pojavljuje.
Raspored je napravljen pomoću tabele, dugme za skrivanje i prikazivanje je odrađeno pomoću js funkcije koja u sebi sadrži if else petlju koja proverava pomoću document.getElementById pomoću koga pristupamo atributu style.visibility datog elementa. Ako je uslov ispunjen (element je skriven) funkcija prikazuje taj element, a kada uslov nije ispunjen f-ja skriva taj element.

KONTAKT
Na ovoj stranici korisnik može da pošalje poruku odabranom predstavniku kako bi saznao određene informacije. Takođe sadrži I ostale načine komunikacije sa glavnim ljudima škole.
Div id=”glavni” obuhvata 2 diva. Div id=”levi” sadrži osnovne podatke o gimnaziji, kao i ikonicu facebook-a koji predstavlja link ka zvaničnoj stranici Gimnazije na pomenutoj društvenoj mreži. Div id=”forma_kontakt” sadrži label (Ime, prezime, E-mail adresa…), tri intput type=”text” koja su obavezna, select koja sadrži 4 opcije, od kojih 1 opcija (Učenik) sadrži 4 podopcije, 4 radio polja gde korisnik može da izabere samo 1, 5 checkbox-ova gde korisnik može da izabere više od 1 opcije, textarea gde korisnik može da unese željenu poruku, 2 buttons( submit I reset), gde klikom na reset button se pojavljuje alert prozor, čija se funkcija napravljena preko js-a. 
Svako polje je posebno obrađeno, čak i placeholder-i. Color, border, background, font, width, margin, padding su prilagođeni izgledu stranice. 
Pozicioniranje stranice smo izvršili pomoću flex-a, a responzivnost je osigurana tako što se desni deo stranice (forma), spušta ispod dela gde su navedene osnovne informacije. 

GALERIJA
Korisnici na ovoj stranici mogu videti određene slike vezane za Gimnaziju. Svaka slika ima svoju prethodnu i sledeću (dok smo na prvoj slici, klikom na “prethodno” prebacujemo se na poslednju sliku). Klikom na “slideshow”slike će se same smenjivati. Dok se slideshow izvršava to polje će biti zelene boje. Klikom na stop, slideshow se prekida. 
Funkcije na ovom sajtu napravili smo preko jQuery-a. 


https://ilic-nikola.github.io/eposdomaci/
