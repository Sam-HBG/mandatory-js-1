# Inlämningsuppgift 1 - JavaScript
**Deadline för den här uppgiften är fredag 3 januari kl 08:59**

## Förberedelser

1. Skapa ett nytt repo på [GitHub](github.com) och kalla det **mandatory-js-1**

2. Följ instruktionerna som GitHub ger dig; skapa ett lokalt repo och lägg till en remote eller klona repot.

## Inlämning

När du lämnar in uppgiften på Ping Pong, **innan deadline**, ska du lägga in en länk till ditt repo, t ex

```
https://github.com/mygithubusername/mandatory-js-1
```

Läraren kommer att titta i **master-branchen**. Om någon commit görs till master efter deadlinen kommer betyget bli IG.

Du kan få betygen **G** eller **IG** på uppgiften.

## Resurser

[https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Instruktioner

Titta på filen `index.html` och jämför den med `want.html`. Din uppgift är att implementera kod i `index.js` som omvandlar DOM-strukturen så att den ser ut exakt som i `want.html`.

Det är upp till dig hur du vill utföra uppgiften. Du får endast skriva JavaScript, så alla förändringar i DOM:en måste göras med JS. *Det är inte tillåtet att använda innerHTML i uppgiften*.

### Detaljer

En lista av saker som är fel och ska fixas följer

* Den tidigare utvecklaren trodde att företaget heter Fruits & Bananas Corp, men det heter egentligen Fruits & Vegetables Corp
* Texten i `header h1` är fel, det ska vara Fruits & Vegetables Corp (see första punkten)
* Den sista `a`-taggen i `header ul` har fel text och href-attribut (det ska vara Vegetables och inte Bananas)
* Sektionerna `#contact` och `#about` är i fel ordning. Byt plats på dem.
* Varje `section` ska ha en `h2`-tagg längst upp med text som motsvarar dess `id`.
* Texten "We're the best in fruits & vegetables" under `#about` ska omslutas med en `p`-tagg
* Utvecklaren använde `td`-element i `thead` istället för `th`. Fixa det.
* Utvecklaren glömde att inkludera `main.css`-filen. Lägg till den i `head`.
* Titeln i `head` är inkorrekt [MDN info](https://developer.mozilla.org/en-US/docs/Web/API/Document/title). Den ska vara "Fruits & Vegetables Corp"
