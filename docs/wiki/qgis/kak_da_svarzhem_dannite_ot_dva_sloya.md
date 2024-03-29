---
title: Как да свържем (JOIN) данните от два слоя?
tags: qgis, свързване, join, ключ, вектор
---

Често в се налага да работим с различни източници на данни за атрибутите на един и същи обект. Например за изготвянето на карта на населението на България по общини може да изтеглим слой с геометриите на общините в България от OpenStreetMap, а пък данни за населението може да вземем от НСИ. Но двата слоя не са достатъчни поотделно за изготвяне на картата, трябва някак си да свържем данните между тях. За целта съществува възможността за (JOIN) свързване на данните от двата слоя.

Свързването (JOIN) на данните между два слоя се постига, когато те имат еднакви стойности в някоя от колоните си. В нашия случай такива колони са името на общините и в двата слоя.

## Данни

Да вземем пример с област Перник и изготвяне на карта на населението на общините. Разполагаме с два слоя с данните.

Първия слой `pernik_obshtini` е с полигоните на общините и атрибути за името (`name`) и площта на общината (`area_km2`):

| name      | area_km2 |
|-----------|---------:|
| Брезник   | 404.04   |
| Земен     | 247.08   |
| Ковачевци | 144.95   |
| Перник    | 477.4    |
| Радомир   | 540.49   |
| Трън      | 573.46   |

Втория слой `pernik_population` няма геометрия, а само атрибути за името (`name`) и броя на населението (`count_2011`):


| name      | count_2011 |
|-----------|-----------:|
| Брезник   | 6945       |
| Земен     | 2762       |
| Ковачевци | 1600       |
| Перник    | 97181      |
| Радомир   | 20896      |
| Трън      | 4146       |

## Стъпки

1. Отваряме настройките на слоя (`Layer properties`).
1. Отиваме в менюто за настройка за свързване на слоя :i:qgis:propertyicons/join:`Joins`.
1. Натискаме зеления плюс за добавяне на ново свързване :i:qgis:symbologyAdd:.
1. Избираме кой слой искаме да свържем към текущия в полето `Join layer`.
2. Избираме името на атрибута от слоя за свързване, което ще използваме за свръзване, в полето `Join field`.
3. Избираме името на атрибута в тещущия слой, което ще използваме за свързване, в полето `Target field`. Важното е стойностите в съответните на `Join field` и `Target field` поле да съвпадат.
4. Избираме представката (префикс) `Custom field name prefix`, която да се добави пред името на всички свързани атрибути.
5. Готово!


<video controls width="100%">
    <source src="../img/joins_howto.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>
*Настройване на свързване (JOIN) между слоя `pernik_obshtini` и `pernik_population` по полето `name`.*


???+ note "Забележка!"
    Не е задължително имената на полетата `Join field` и `Target field` да съвпадат, въпреки че в нашия случай носят едно и също име `name`.

???+ note "Забележка!"
    Важно е стойностите в `Join field` и `Target field` да съвпадат напълно, за да се случи свързването. Ако в едното поле се съдържат главни букви, а в другото не, QGIS третира стойностите като **различни**.

???+ note "Забележка!"
    Не е задължително броят на обектите в двата слоя да съвпада. Свързването се случва само с редовете от другия слой, за които има съвпадение. В случай че няма съвпадение, в свързаните колоните стойността е `NULL`.
