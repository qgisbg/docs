---
title: Какво е Markdown (маркдаун)?
tags: геоджейсон, geojson, geo.json, json, вектор
---

# Какво е Markdown (маркдаун)?

**Markdown** (произнася се *маркдаун*) е средство за конвертиране на обикновен текст в HTML-формат. Той е създаден да е лесен за четене и писане, и удобен за преобразуване в структурно валиден XHTML/HTML-формат. Основната цел на създателя му е да направи удобен формат за писане в Интернет. Маркдаун не е заместител на HTML, а опростен синтаксис за четене, писане и редактиране на уеб съдържание.

Тоест маркдаун представлява две неща:

  1. синтаксис за форматиране на обикновен текст с не-азбучни знаци като `#`, `*`, `_`, `>`, `|`, и др.;
  2. софтуерен инструмент, написан на програмния език _Perl_, който конвертира обикновен текст в HTML-формат.

Синтаксисът на маркдаун е много достъпен и лесен за бързо усвояване, и затова днес той се радва на широко разпространение и употреба (напр. на сайтове като [_Github_](http://www.github.com)), включително документацията, която четете в момента.

Информацията се записва като обикновен текстов файл с разширение `.md` или `.markdown`  [^1].


## Примерен Markdown файл

```
# Заглавие
## Подзаглавие
### По-малко заглавие
#### И така нататък

Всеки параграф, заглавие или друго е разделено с празен ред в края.
Ако го няма празен ред, се долепят. Текстът може да е *италик*, **удебелен** или `отбелязан`.

Списъци по-долу, а връзки като този [линк към OpenStreetMap](https://osm.org).

- списъци
- разни

1. подредени
2. списъци


И таблици:
| Име | Град |
|-----|------|
| Иван | Русе |
| Цвета | Кърджали |

\```
print('Hello, qgis')
\```

![Фърррр](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/67401945-34fc-46b8-8e8f-1982847277d4/ddba22b-2fad9d00-1d3f-4ec8-a65d-199a09dfa4e1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNjc0MDE5NDUtMzRmYy00NmI4LThlOGYtMTk4Mjg0NzI3N2Q0XC9kZGJhMjJiLTJmYWQ5ZDAwLTFkM2YtNGVjOC1hNjVkLTE5OWEwOWRmYTRlMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ._-whxwEBEaTLWUvSWL80KTGiwpoy9dSPzXSRhfTAzeM)

```
Може да откриете как този Markdown се визуализира [тук](https://gist.github.com/suricactus/9d5d10181346ef2ec302bcbcbbbfd44b).

## Работа с Markdown

За да започнете да работите с маркдаун Ви е необходим текстов редактор. В него към обикновения текст се прибавят форматиращите елементи на маркдаун синтаксиса.

Препоръчан и безплатен текстови редактор с поддръжка на Markdown е [Visual Studio Code](https://code.visualstudio.com/download).

## Работа с Markdown във Visual Studio Code

1. Отворете Markdown файл, например `TODO/0000_kakvo_e_markdown.md`.
2. Инсталирайте плъгина `Markdown All in One` (незадължително).
3. Изпълнете командата `Markdown: Open Preview to the Side`. Сега вече виждате съдържанието на файла в почти по същия начин, както в тази документация.


[^1]: (bg) [Първи стъпки с маркдаун](https://danny-dimitrov.github.io/markdown/)
[^2]: (en) Онлайн редакция и преглед на Markdown в [Dillinger](https://dillinger.io/)
[^3]: (en) [Daring Fireball: Markdown](https://daringfireball.net/projects/markdown/)
[^4]: (en) [Mastering Markdown @ GitHub](https://guides.github.com/features/mastering-markdown/)
[^5]: (en) [Interactive Markdown Tutorial](https://www.markdowntutorial.com/)
