Hay una [versión en español](README.md) de este README disponible.

## About

This is the source code for the website of Club Balonmano Vetusta from Oviedo (Vetusta Olympic Handball Club). This source code is free by the author decision. You are free to use it with the restrictions in the [#License](#license) chapter.

## Roadmap (Tasklist)

<span id="roadmap"></span>

- [x] Complete the design layout and elemental styles like menu, header, footer and regular text.
- [ ] Add static content to the pages: Who we are, Legal content, Train handball, Under construction page for "members" and "shop".
  - [ ] 404 Error Page
  - [x] Legal content
  - [x] Who we are
  - [ ] Train handball with us
  - [ ] Under construction page
  - [ ] Collaboration
  - [ ] Contact
- [ ] Teams pages.
  - [ ] First Team
  - [ ] Second Team
  - [ ] All others (for Under-18 just mention them).
- [ ] Home page images and dinamic content.
  - [ ] Banner 2022/23 membership.
  - [ ] Latest twits
  - [ ] Latest Instagram posts.
- [ ] Shop & Ticket system for matches and members.
  - [ ] Authentication
  - [ ] Main page
  - [ ] Basket
  - [ ] Checkout
  - [ ] After payment page
  - [ ] View your tickets page (probably the best idea is by email receiving the user a code in the email)
  - [ ] Scan ticket process
  - [ ] View current number of people in the court
  - [ ] Private events based on the people inside the event (jackpots).
- [ ] Automate the task to twit results and matches of the week with Github Actions.
  - [ ] Read the rfebm page.
  - [ ] Schedule a task to deploy with the new information.
  - [ ] Post that information to Twitter (inside the Github actior or by webhook).
- [ ] Github action that should be executed manually to generate updated results and twit results of the week.
- [ ] Check if twits can be program throught the API and do program twits for the next week. Have in consideration when the season has finished or stop by some weeks. **This should be done with previous Github Action as well.**
- [ ] Automate Twits while in match? For this I need to check if I can automate Github actions based on other Github actions just to fetch the data from rfebm and twit in seconds every 5 minutes until the match has ended.

## Licese

<span id="license">MIT License for the source code only. This means that the Club logo and brands logos, banners or metions should not appear in the Club Balonmano Vetusta website should not appear in your copied/inspired site unless you have explicit allowance from the Club to do it. This license does not attribute to you that allowance.</span>

The included logos, brands, banners are not under MIT license and they are of their of their owners.

The logos of sports clubs includeing the Club Balonmano Vetusta logo could not be used without allowance from the respective club.

El logotipo de los clubes deportivos que aparezcan incluyendo el del Club Balonmano Vetusta no puede utilizarse sin consentimiento previo del club.

## Contact

From Clubs site of the Royal Spanish Federation you can get the contact data to contact.

## Aviso Legal

Algunos iconos han sido copiados de los siguients proyectos:

- [Material Desgin](https://github.com/Templarian/MaterialDesign) ([Apache License 2.0 and other](https://github.com/Templarian/MaterialDesign/blob/master/LICENSE))
- [System UI Icons](https://systemuicons.com) ([Unlicense](https://github.com/CoreyGinnivan/system-uicons/blob/master/LICENSE))
- [Olympic Handball Pictogram](https://es.m.wikipedia.org/wiki/Archivo:Handball_pictogram.svg) de Wikipedia. ([Dominio público](https://en.wikipedia.org/wiki/Public_domain))

Text fonts:

- [Alumni One](https://github.com/googlefonts/alumni) ([OFL License](http://scripts.sil.org/OFL))

Used External tools:

- [Sketchapp](https://www.sketch.com/)
- [SVGR](https://react-svgr.com/playground) to make some svg as components
