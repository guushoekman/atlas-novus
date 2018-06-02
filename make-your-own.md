---
layout: make-your-own
title: Eigen kaart maken
subtitle: Maak je eigen kaarten met open source software
---
De kaarten op Atlas Novus zijn gemaakt met open data en open source software. Je bent vrij om ze te downloaden, te bewerken en te delen voor alle doeleinden ([volledige licentie](https://creativecommons.org/licenses/by-sa/4.0/deed.nl">volledige)). Ook kan je je eigen kaarten maken. Het is niet moeilijk, maar het helpt om instructies te hebben. Hieronder leg ik uit hoe je de kaarten op deze site kan recreëren. Uiteraard kan je andere data, gebieden of kleuren gebruiken.

## Topografische data

Stap één is om de data te verkrijgen. Dit kan via [PDOK](https://www.pdok.nl/nl) (Publieke Dienstverlening Op de Kaart), een publieke organisatie die digitale geo-informatie als dataservices en bestanden beschikbaar stelt. Hun topografische data van Nederland, TOPNL, is vrij te downloaden en te gebruiken.

Als je dit doet te leren hoe je een kaart maakt stel ik voor om [TOP250NL data](https://www.pdok.nl/nl/producten/pdok-downloads/basisregistratie-topografie/topnl/topnl-actueel/top250nl) te gebruiken. De meeste kaarten op de site gebruiken gedetailleerderde TOP10NL data, maar daarmee duurt het veel langer om kaarten te genereren. Aangezien dit een uitleg is maakt de data niet echt uit, het proces is hetzelfde.

## Open de data met QGIS

Download en installeer [QGIS](https://www.qgis.org), een open source geografisch informatiesysteem waarme je geografische gegevens kan bekijken, bewerken en analyseren.

De [TOP250NL data](https://www.pdok.nl/nl/producten/pdok-downloads/basisregistratie-topografie/topnl/topnl-actueel/top250nl) komt in een zip bestand. Unzip dit en open het `top250nl.gml` bestand met QGIS. Dit is het snelst door het te drag en droppen. In het `gml` bestand zitten alle layers en je zult een venster zien waar je kan kiezen welke layers je daadwerkelijk wilt laden.

![Selecteer layers in QGIS](/img/make-your-own/select-layers.png)

Voor dit voorbeeld wil ik alleen de terrein en water layers. Je kan in de metadata zien wat de andere layers zijn. Selecteer deze en ga verder.

## Laat de data er beter uitzien

Zodra je de layers opent zul je zien dat er een kaart verschijnt. Top! Maar het ziet er nogal vreemd uit. Elke layer krijgt een willekeurige kleur en de zee steekt ver uit.

![Layers zijn geladen](/img/make-your-own/layers-loaded.png)

We beginnen met de kleuren. Linksonder zie je een lijst van de layers. Twee layers hebben een vierkantje (de terrein layer en water polygonen), één een lijn (waterdelen zoals sloten, kanalen en grachten). Klik met je rechtermuisknop op de water poloygon layer en ga naar de properties. Daar kunnen we onder de Style tab de kleuren aanpassen.

![Verander de kleur van de water layer](/img/make-your-own/water-color.png)

Ik heb gekozen voor lichtblauw en heb de border weggehaald. Vervolgens heb ik de layer met de water lijnen dezelfde kleur blauw gegeven.

> **Een tip**: Elke keer dat een stijl of de positie van de kaart veranderd zal QGIS de kaart renderen. Dat kan irritant worden. Rechtsonder kan je "Render" uitvinken om dit tijdelijk uit te zetten.

Dan hebben we nog de terrein layer. Deze layer moet niet één kleur krijgen aangezien we dan niet kunnen onderscheiden tussen het type terrein (bos, zand, enz).

![Verander de kleuren van de terrein layer](/img/make-your-own/terrain-layer.png)

Ga naar de properties van de layer. Bovenaan in dat venster is een dropdown menu. Selecteer daar "Categorized". We willen per categorie een andere kleur. Als colom gebruiken we `typeLandgebruik`. Klik dan op de "Classify" knop en je krijgt een lijst van unieke hits in de geslecteerde colom. Voor elke van deze kan je de stijl aanpassen om ze een logische kleur te geven.

Nadat je dit hebt gedaan kan je teruggaan naar je kaart en deze renderen. Het zal er dan ongeveer zo uitzien:

![Gerenderde kaart met juiste kleuren](/img/make-your-own/proper-colors.png)

>Mocht je het handig vinden is hier [het QGIS bestand](/voorbeeld.qgs) voor deze kaart. Zet dit in dezelfde map als `top250nl.gml` en het zou moeten werken.

## Exporteer de kaart als afbeelding

Als je blij bent met de kleuren kunnen we de kaart exporteren als afbeelding. Dat kan zeer gemakkelijk via de [command line](https://en.wikipedia.org/wiki/Command_line) met `--snapshot`:

>`qgis --project project-naam.qgs --snapshot afbeelding-naam.png --width 1500 --height 1000 --extent xmin,ymin,xmax,ymax`

Wat betekent dit precies? Laten we het command ontleden.

`qgis` opent het programma zelf. We laden dan het juiste project met `--project`. Vervolgens willen we hier een `--snapshot` van die moet worden opgeslagen met een bepaalde bestandsnaam. We moeten ook de breedte en hoogte van de afbeelding in pixels aangeven met `--width` en `--height`. Als laatste moet QGIS ook weten van welk gebied de afbeelding moet zijn. De waarden van de `--extent` zijn coördinaten. Voor Nederland gebruik ik: `11500,305000,279300,620000`.

> Meer informatie over hoe je QGIS via de command line gebruikt staat in [de documentation](https://docs.qgis.org/2.18/en/docs/user_manual/introduction/getting_started.html#command-line-options).

Voor dit project wordt de command als volgt:

>`qgis --project voorbeeld.qgs --snapshot voorbeeld.png --width 8500 --height 10000 --extent 11500,305000,279300,620000`

> Ik gebruik Linux en deze commands zijn daar dus ook voor. Ik kan dit niet op andere besturingssystemen testen, maar online is wel te vinden [hoe het moet op Windows](https://gis.stackexchange.com/questions/54778/how-to-use-qgis-from-command-line-on-windows) en [macOS](https://superuser.com/questions/859247/can-i-run-qgis-from-the-command-line-on-osx).

QGIS zal openen en even bezig zijn. Zodra de afbeelding klaar is zal QGIS sluiten. Je kan de afbeelding in dezelfde directory als het project vinden. De mijne ziet er zo uit:

![Eindresultaat](/img/make-your-own/end-result.png)

Dat is het! Je kan overwegen om er een legenda, schaal, of ander element erbij te plaatsen. Dat is allemaal aan jou, met QGIS is veel mogelijk.

**Veel succes en plezier!**

------

#### Was dit nuttig? Zit je vast? Heb je suggesties? [Laat het me weten](mailto:mail@guushoekman.com)!