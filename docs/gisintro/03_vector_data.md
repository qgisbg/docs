---
title: 02. Векторни данни
tags: вектор, точка, линия, полигон, вертекс, геометрия, мащаб, качество на данните, симвология, източници на данни 
---

# Векторни данни

## Преглед

**Векрните данни** в ГИС позволяват изобразяването на **обекти** от заобикалящата ни среда. **Обект** може да бъде всичко около нас. Представете си, че сте на някое високо място. Като се огледате наоколо, виждате дървета, реки, пътища, поля, сгради, селища и т.н. Всяко от тези неща би било "обект", когато го представяме в ГИС среда. Всеки отделен обект може да има **атрибути**, които са допълнителна информация, най-често като текст и числа, която **описва** обекта.

![Когато се огледаме наоколо, виждаме основните обекти - пътища, река, къщи, дървета.](img/landscape.jpg)

Формата на векторния обект се представя чрез неговата **геометрия**. Векторната геометрия се състои от последователно свързани точки, наречени **вертекси**. Вертексът описва позицията на дадена точка, като съхранява координатите по осите **X**, **Y** и незадължително **Z**. Възможно е да се запишат и други данни за всеки вертекс, но тази функционалст се ползва далеч по-рядко.

Когато геометрията на обекта съдържа един единствен вертекс, то геометрия се нарича **точка**. Когато геометрията се състои от два или повече вертекса, като първия и последния не съвпадат, то става дума за **линия**. Когато геометрията се състои от три или повече вертекси, при които първия и последния съвпадат, получения затворен многоъгълник се нарича **полигон**.

![Точката се описва от X, Y и незадължителна Z координата. Атрибутите на обекта с точката съхраняват допълнителна информация за точката, например дали е палмово дърво, уличен стълб, място на светкавица или др..](img/point_feature.png)

![Линията е поредица от свързани вертекси. Всеки вертекс има X, Y
и незадължителни Z координата. Атрибутите съхраняват допълнителна информация, дали линията е река, път, маршрут на колело и дп.](img/polyline_feature.png)

![И полигона, и линията са поредица от вертекси, но при полигона първия и последния вертекс винаги съвпадат](img/polygon_feature.png)

Ако погледнем отново на панорамната снимка от по-рано и въоръжени със знание за начина по който съхраняваме обекти в ГИС, лесно можем да си представим различните данни в компютъра.

![Как бихме представили обектите от пейзажа в ГИС? Реките (в синьо) и пътищата (в зелено) могат да бъдат представени като линии, дърветата като точки (в червено), а къщите като полигони (в бяло).](img/landscape_geometry.jpg)


## Още за точковите обекти

Трябва да сме наясно, че изборът на точки за представяне на обекти е приближение на реалността и е изцяло субективно решение на автора на данните. Основните причини да предпочетем точки са мащаба на картата, удобството за работа и вида на обектите. Например на дребномащабна карта (напр. карта на България), селищата ще бъдат представени най-вероятно като точки. Когато обаче представяме в по-едър мащаб (напр. карта на община или град), обхвата на селищата ще се представят най-вероятно като полигони. Ако ние ръчно трябва да изчертаем обектите, най-вероятно ще предпочетем точки където е възможно, защото изисква много пъти по-малко усилие, отколкото полигоните (един вертекс срещу три и повече). А и не на последно място, ако показваме местоположението на улични стълбове, просто няма смисъл да ги представяме като полигони.

Както вече коментирахме, точковите обекти имат X, Y и евентуално Z стойност.  Стойностите за X и Y ще зависят от **координатната система** (КС). Ще разгледаме координатните системи много по-подробно в следващите глави, а засега нека просто приемем, че записаните стойности запазват с точност местоположението на дадената точка. Най-разпространения вариант за това е използването на **географска дължина и ширина**. 

Линиите, които описват географската дължина се наричат **меридиани** и преминават по повърхността на Земята от единия до другия полюс. Един от тези меридиани се нарича за **главен меридиан** и всички точки, които лежат на главния меридиан имат географска дължина 0 градуса за географска дължина, тези на изток положителна стойност до 180 градуса, а тези на запад отрицателна стойност до -180 градуса. Линиите, които описват географската ширина се наричат **паралели** и обикалят земното кълбо перпендикулярно на меридианите. Главния паралел се нарича **екватор** и всички точки на екватора имат географска ширина 0 градуса, тези на север положителна стойност до 90 градуса на **северния полюс**, а тези на юг отрицателна до -90 градуса на **южния полюс**.

С това бързо и непълно въведение в географските координатни системи, можем да се досетим че при наличие на стойности за географската дължина (X) и ширина (Y), можем да определим с абсолютна точност позицията на всяка една точка на земната повърхност. Така само с две числа може да отбележим къде се намира дадено дърво, уличен стълб или самите ние.

Въпреки набиращото популярност движение, Земята не е плоска и в някои ситуации може да съхраним и стойността на измерената надморска височина (Z).

## Още за линейните обекти

Ако точката се състои от само един вертекс, то **линията има два или повече вертекса**. Линията е непрекъснатата следа, оставена при последователното свързване на вертексите. Когато два вертекса се свържат се получава **сегмент**, когато много сегменти се свържат се получава **линия**.

Линиите се използват за съхранение на геометрията на **линейни обекти**, а такива са реки, пътища, следи от преминаване, граници, хоризонтали на релефа и т. н. Понякога следваме специални правила освен дефиницията за линия. Например ако имаме карта на хоризонталите на релефа, то хоризонталите може да се допират (напр. много стръмен склон), но никога не могат да се пресичат. Подобно при карта на пътищата всеки пътен участък трябва да започне и свърши на кръстовище. В някои ГИС програми тези правила могат да се зададат като допълнително ограничение и програма сама ще съблюдава за спазването им.

Ако линията прави завой, но има прекалено големи разстояния между съседните вертекси, тя ще изглежда много **ъгловата** при по-едри мащаби. Затова е важно при създаването на нов линеен обект да слагаме достатъчно вертекси при завоите според нуждите на мащаба.

![Линиите при дребен мащаб (1:20 000 вляво) изглеждат плавни и извити. При приближаване в едър мащаб обаче (1:500 вдясно) линиите могат да приемат много ъгловат вид.](img/jagged_polyline.png)

<!-- TODO това малко ни в клин, ни в ръкав тук, трябва да се измести сякаш -->
Атрибутите на линейните обекти описват свойствата му. Така за слой с пътища може да имаме атрибут за пътната настилка - павета или асфалт, или пък за броят ленти в посока, или пък дали е еднопосочка и т. н. Благодарение на тези атрибути може да визуализираме слоя с подхощят цвят и дебелина на линията.

Polygon features in detail
==========================

Polygon features are **enclosed areas** like dams, islands, country
boundaries and so on. Like polyline features, polygons are created from
a series of vertices that are connected with a continuous line. However
because a polygon always describes an enclosed area, the first and last
vertices should always be at the same place! Polygons often have
**shared geometry** --\-- boundaries that are in common with a
neighbouring polygon. Many GIS applications have the capability to
ensure that the boundaries of neighbouring polygons exactly coincide. We
will explore this in the `gentle_gis_topology`{.interpreted-text
role="ref"} topic later in this tutorial.

As with points and polylines, polygons have **attributes**. The
attributes describe each polygon. For example a dam may have attributes
for depth and water quality.

Vector data in layers
=====================

Now that we have described what vector data is, let\'s look at how
vector data is managed and used in a GIS environment. Most GIS
applications group vector features into **layers**. Features in a layer
have the same geometry type (e.g. they will all be points) and the same
kinds of attributes (e.g. information about what species a tree is for a
trees layer). For example if you have recorded the positions of all the
footpaths in your school, they will usually be stored together on the
computer hard disk and shown in the GIS as a single layer. This is
convenient because it allows you to hide or show all of the features for
that layer in your GIS application with a single mouse click.

Editing vector data
===================

The GIS application will allow you to create and modify the geometry
data in a layer \---- a process called **digitising** --\-- which we
will look at more closely in a later tutorial. If a layer contains
polygons (e.g. farm dams), the GIS application will only allow you to
create new polygons in that layer. Similarly if you want to change the
shape of a feature, the application will only allow you to do it if the
changed shape is correct. For example it won\'t allow you to edit a line
in such a way that it has only one vertex --\-- remember in our
discussion of lines above that all lines must have at least two
vertices.

Creating and editing vector data is an important function of a GIS since
it is one of the main ways in which you can create personal data for
things you are interested in. Say for example you are monitoring
pollution in a river. You could use the GIS to digitise all outfalls for
storm water drains (as point features). You could also digitise the
river itself (as a polyline feature). Finally you could take readings of
pH levels along the course of the river and digitise the places where
you made these readings (as a point layer).

As well as creating your own data, there is a lot of free vector data
that you can obtain and use. For example, you can obtain vector data
that appears on the 1:50 000 map sheets from the Chief Directorate:
Surveys and Mapping.

Scale and vector data
=====================

Map **scale** is an important issue to consider when working with vector
data in a GIS. When data is captured, it is usually digitised from
existing maps, or by taking information from surveyor records and global
positioning system devices. Maps have different scales, so if you import
vector data from a map into a GIS environment (for example by digitising
paper maps), the digital vector data will have the same scale issues as
the original map. This effect can be seen in illustrations
`figure_vector_small_scale`{.interpreted-text role="numref"} and
`figure_vector_large_scale`{.interpreted-text role="numref"}. Many
issues can arise from making a poor choice of map scale. For example
using the vector data in illustration
`figure_vector_small_scale`{.interpreted-text role="numref"} to plan a
wetland conservation area could result in important parts of the wetland
being left out of the reserve! On the other hand if you are trying to
create a regional map, using data captured at 1:1000 000 might be just
fine and will save you a lot of time and effort capturing the data.

::: {#figure_vector_small_scale}
![Vector data (red lines) that was digitised from a small scale (1:1000
000) map.](img/small_scale.png){.align-center width="30em"}
:::

::: {#figure_vector_large_scale}
![Vector data (green lines) that was digitised from a large scale (1:50
000) map.](img/large_scale.png){.align-center width="30em"}
:::

Symbology
=========

When you add vector layers to the map view in a GIS application, they
will be drawn with random colours and basic symbols. One of the great
advantages of using a GIS is that you can create personalised maps very
easily. The GIS program will let you choose colours to suite the feature
type (e.g. you can tell it to draw a water bodies vector layer in blue).
The GIS will also let you adjust the symbol used. So if you have a trees
point layer, you can show each tree position with a small picture of a
tree, rather than the basic circle marker that the GIS uses when you
first load the layer (see illustrations
`figure_vector_symbology`{.interpreted-text role="numref"},
`figure_generic_symbology`{.interpreted-text role="numref"} and
`figure_custom_symbology`{.interpreted-text role="numref"}).

::: {#figure_vector_symbology}
![In the GIS, you can use a panel (like the one above) to adjust how
features in your layer should be
drawn.](img/symbology_settings.png){.align-center width="30em"}
:::

::: {#figure_generic_symbology}
![When a layer (for example the trees layer above) is first loaded, a
GIS application will give it a generic
symbol.](img/symbology_generic.png){.align-center width="30em"}
:::

::: {#figure_custom_symbology}
![After making our adjustments it is much easier to see that our points
represent trees.](img/symbology_custom.png){.align-center width="30em"}
:::

Symbology is a powerful feature, making maps come to life and the data
in your GIS easier to understand. In the topic that follows
(`gentle_gis_attributes`{.interpreted-text role="ref"}) we will explore
more deeply how symbology can help the user to understand vector data.

What can we do with vector data in a GIS?
=========================================

At the simplest level we can use vector data in a GIS Application in
much the same way you would use a normal topographic map. The real power
of GIS starts to show itself when you start to ask questions like
\'which houses are within the 100 year flood level of a river?\';
\'where is the best place to put a hospital so that it is easily
accessible to as many people as possible?\'; \'which learners live in a
particular suburb?\'. A GIS is a great tool for answering these types of
questions with the help of vector data. Generally we refer to the
process of answering these types of questions as **spatial analysis**.
In later topics of this tutorial we will look at spatial analysis in
more detail.

Common problems with vector data
================================

Working with vector data does have some problems. We already mentioned
the issues that can arise with vectors captured at different scales.
Vector data also needs a lot of work and maintenance to ensure that it
is accurate and reliable. Inaccurate vector data can occur when the
instruments used to capture the data are not properly set up, when the
people capturing the data aren\'t being careful, when time or money
don\'t allow for enough detail in the collection process, and so on.

If you have poor quality vector data, you can often detect this when
viewing the data in a GIS. For example **slivers** can occur when the
edges of two polygon areas don\'t meet properly (see
`figure_vector_slivers`{.interpreted-text role="numref"}).

::: {#figure_vector_slivers}
![Slivers occur when the vertices of two polygons do not match up on
their borders. At a small scale (e.g. 1 on left) you may not be able to
see these errors. At a large scale they are visible as thin strips
between two polygons (2 on
right).](img/vector_slivers.png){.align-center width="30em"}
:::

**Overshoots** can occur when a line feature such as a road does not
meet another road exactly at an intersection. **Undershoots** can occur
when a line feature (e.g. a river) does not exactly meet another feature
to which it should be connected. Figure
`figure_vector_shoots`{.interpreted-text role="numref"} demonstrates
what undershoots and overshoots look like.

::: {#figure_vector_shoots}
![Undershoots (1) occur when digitised vector lines that should connect
to each other don't quite touch. Overshoots (2) happen if a line ends
beyond the line it should connect
to.](img/vector_overshoots.png){.align-center width="30em"}
:::

Because of these types of errors, it is very important to digitise data
carefully and accurately. In the upcoming topic on **topology**, we will
examine some of these types of errors in more detail.

What have we learned?
=====================

Let\'s wrap up what we covered in this worksheet:

-   **Vector data** is used to represent real world **features** in a
    GIS.
-   A vector feature can have a **geometry** type of **point**, **line**
    or a **polygon**.
-   Each vector feature has **attribute data** that describes it.
-   Feature geometry is described in terms of **vertices.**
-   Point geometries are made up of a **single vertex** (X,Y and
    optionally Z).
-   Polyline geometries are made up of **two or more** vertices forming
    a connected line.
-   Polygon geometries are made up of **at least four vertices** forming
    an enclosed area. The first and last vertices are always in the same
    place.
-   Choosing which geometry type to use depends on scale, convenience
    and what you want to do with the data in the GIS.
-   Most GIS applications do not allow you to mix more than one geometry
    type in a single layer.
-   Digitising is the process of creating digital vector data by drawing
    it in a GIS application.
-   Vector data can have quality issues such as **undershoots**,
    **overshoots** and **slivers** which you need to be aware of.
-   Vector data can be used for **spatial analysis** in a GIS
    application, for example to find the nearest hospital to a school.

We have summarised the GIS Vector Data concept in Figure
`figure_vector_summary`{.interpreted-text role="numref"}.

::: {#figure_vector_summary}
![This diagram shows how GIS applications deal with vector
data.](img/vector_summary.png){.align-center width="30em"}
:::

## Практика!

Ето някои идеи за упражнения:

- Опитайте се да откриете различни примери за векторни данни на топографски картен лист.

![Потърсете векторни обекти на картата, описани с точки, линии или полигони.](img/sample_map.png)

- Помислете как районът около сградата, в която се намирате може да бъде описана като векторни обекти. Изберете няколко категории обекти и създайте таблица за всеки един от тях, където всеки ред е отделен обект, а всяка колона някой от неговите атрибути. Определете вида на геометрията за всяка категория обекти, както и най-важните атрибути, които ги описват.

| Обект от истинския свят | Подходяща геометрия |
|-------------------------|---------------------|
| Пейки в парка           |                     |
| Пешеходни пътеки        |                     |
| Площади в града         |                     |
| Пътека в гората         |                     |
| Среда на охльов         |                     |
| Футбулно игрище         |                     |
