---
layout: base
subtitle: "Kaarten van Nederland, volledig vrij te gebruiken"
---
<section class="section maps">
  <div class="container">
    <div class="columns is-multiline">
      {% for map in site.maps %}
      <div class="column is-half-tablet is-one-third-desktop">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ map.title }} <span class="tag is-light">1:{{ map.scale }}</span>
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <img src="img/{{ map.name }}-thumb.png">
            </div>
          </div>
          <footer class="card-footer warning">
            <div class="card-footer-item">
              <span>Waarschuwing: een afbeelding van deze grootte kan je computer laten vastlopen</span>
            </div>
          </footer>
          <footer class="card-footer download">
            <div href="#" class="card-footer-item">
              <span class="size"></span>
              |
              <span class="width"></span>
              ×
              <span class="height"></span>
              <a href="" class="download button is-small is-link">Download</a>
            </div>
          </footer>
          <footer class="card-footer sizes">
            <a url="klein.com" size="16,5 MB" width="2125" height="2500" href="#" class="card-footer-item example">Klein</a>
            <a url="middel.com" size="38,2 MB" width="4250" height="5000" href="#" class="card-footer-item">Middel</a>
            <a url="groot.com" size="38,2 MB" width="8500" height="10000" href="#" class="card-footer-item">Groot</a>
            <a url="poster.com" size="62,5 MB" width="17000" height="20000" href="#" class="card-footer-item poster">Poster</a>
          </footer>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>