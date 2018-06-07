---
layout: base
subtitle: "Kaarten van Nederland, volledig vrij te gebruiken"
---
<section class="section maps">
  <div class="container">
    <div class="columns is-multiline">
      {% for map in site.maps %}
      <div class="column is-half-tablet is-one-third-desktop">
        <div class="card map">
          <header class="card-header">
            <p class="card-header-title">
              {{ map.title }}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <img src="img/{{ map.name }}-thumb.png" original="img/{{ map.name }}-thumb.png" alternative="img/{{ map.name }}-alt.png" alt="{{ map.title }}">
            </div>
          </div>
          <footer class="card-footer warning">
              <div class="card-footer-item">
                <span>Waarschuwing: grote afbeeldingen kunnen je computer laten vastlopen</span>
              </div>
            </footer>
          <footer class="card-footer download">
            <div href="#" class="card-footer-item">
              <span class="size"></span>
              |
              <span class="width"></span>
              ×
              <span class="height"></span>
              <a map="{{ map.title }}" size="" href="" target="_blank" class="download button is-small is-link">Download</a>
            </div>
          </footer>
          <footer class="card-footer sizes">
            {% for size in map.sizes %}
            <a href="#" size="{{ size.size }} MB" width="{{ size.width }}" height="{{ size.height }}" url="{{ size.url }}" class="card-footer-item {% if size.size > 40 %}warning{% endif %}">{{ size.title }}</a>
            {% endfor %}
          </footer>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>