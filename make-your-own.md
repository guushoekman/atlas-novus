---
layout: base
title: Eigen kaart maken
subtitle: Maak je eigen kaarten met open source software
---
<section class="section content">
  <div class="container">
    <div class="columns">
      <div class="column is-two-thirds">
        <p>De kaarten op Atlas Novus zijn gemaakt met open data en open source software. Je bent vrij om ze te downloaden, te bewerken en te delen voor alle doeleinden (<a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/deed.nl">volledige licentie</a>). Ook kan je je eigen kaarten maken. Het is niet moeilijk, maar het helpt om instructies te hebben. Hieronder leg ik uit hoe je de kaarten op deze site kan recreëren. Uiteraard kan je andere data of kleuren gebruiken.</p>
        <h2 class="title">Topografische data</h2>
        <p>Stap één is om de data te verkrijgen. Dit kan via <a target="_blank" href="https://www.pdok.nl/nl">PDOK</a> (Publieke Dienstverlening Op de Kaart), een publieke organisatie die digitale geo-informatie als dataservices en bestanden beschikbaar stelt. Hun topografische data van Nederland, TOPNL, is vrij te downloaden en te gebruiken.</p>
        <p>Als je dit doet te leren hoe je een kaart maakt stel ik voor om TOP250NL data te gebruiken. De meeste kaarten op de site gebruiken gedetailleerderde TOP10NL data, maar daarmee duurt het veel langer om kaarten te genereren. Aangezien dit een uitleg is maakt de data niet echt uit.</p>
        <p></p>
        <p></p>
        <h2 class="title"></h2>
        <pre>qgis --project topnl.qgs --snapshot output.png --width 7690 --height 3070 --extent 54980,428640,101120,447060</pre>
      </div>
    </div>
  </div>
</section>