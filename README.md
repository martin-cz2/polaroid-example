# Příklad ke školení Dnešní webový frontend

http://www.vzhurudolu.cz/kurzy/webovy-frontend

**Autor:** Martin Michálek, martin@vzhurudolu.cz

## Struktura stylů

* `src/less/index.less` – index stylů
* `src/less/ui/` – pokročilejší komponenty uživatelského rozhraní
* `src/less/lib/` – knihovny
* `src/less/core/` – vše ostatní

Kompilujeme pomocí Grunt.js do `css/index.css`.

## Javascript

* `js/index.js` – zdroj
* `js/script.min.js` – výsledný Grunt.js kompilát


## Závislosti 

### Vývojářské závislosti – npm

Vývojářské závislosti (Grunt a pluginy) spravujeme pomocí https://www.npmjs.com/.

Viz [package.json](./package.json).

### Uživatelské závislosti - Bower

Uživatelské závislosti (jQuery a pluginy) spravujeme pomocí https://www.bower.io/.

Viz [bower.json](./bower.json).

## Sestavování pomocí Grunt.js

Důležité tásky:

* `grunt` - spustí vše a nastartuje vývojový server, otevře prohlížeč s nastartovanou synchronizací a pustí hlídání změn
* Pro jednotlivé typy assetů se může hodit `grunt img`, `grunt css`, `grunt js`.

Viz [Gruntfile.js](./Gruntfile.js).

## Instalace projektu

```bash
# naklonování projektu
git clone https://github.com/machal/polaroid-example.git
# vývojářské závislosti
npm install
# uživatelské závislosti
bower install
# spuštění hlavního Grunt tasku
grunt
```

## Zdroje fotek

- http://www.flickr.com/photos/colloidfarl/148800272/sizes/m/in/photostream/  
- http://www.flickr.com/photos/26907150@N08/7321463436/sizes/m/in/photostream/
- http://www.flickr.com/photos/byspice/4557787236/sizes/m/in/photostream/
- http://www.flickr.com/photos/neilarmstrong2/5946195915/sizes/m/in/photostream/
- http://www.flickr.com/photos/dcdead/5890591705/sizes/m/in/photostream/
- http://www.flickr.com/photos/35311483@N06/3368553891/
- http://farm1.staticflickr.com/55/148800272_86cffac801.jpg
- http://farm8.staticflickr.com/7236/7321463436_a2e6e2608d.jpg
- http://farm4.staticflickr.com/3101/4557787236_694b445bec.jpg
- http://farm7.staticflickr.com/6024/5946195915_27255e9cbb.jpg
- http://farm6.staticflickr.com/5027/5890591705_b03aea14f2.jpg
- http://farm4.staticflickr.com/3664/3368553891_a97f04ea72.jpg

