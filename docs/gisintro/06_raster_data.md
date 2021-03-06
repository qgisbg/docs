---
title: 06. Растери
tags: растер, пиксел, дистанционни изследвания, спътници, сателити, изображения, геореференциране
---

# Растери

## Преглед

В предишните глави разгледахме векторните данни в подробности и научихме, че при тях имаме отделни обекти. Всеки обект се представя в пространството с геометрия, било то точка, линия или полигон. Сега е време да обърнем внимание на **растерните данни**, които са не по-малко важни в ГИС. Растерите представляват мрежа от плътно слепени **клетки** с еднаква форма и и размер. Тези клетки наричаме **пиксели**, като най-често това са квадратни пиксели разположени в решетка (мрежа) от **редове** и **колони**. Всеки пиксел съхранява една или повече числови стойности, които са валидни за цялата площ на пиксела.

Всъщност всяка най-обикновена снимка, било то селфи в огледалото, или спътникова снимка, представлява растерно изображение. То има определена резолюция, което определя броят редове и колони,а всеки пиксел съхранява число, описващо цвета.

В контекста на ГИС, всеки пиксел покрива определена площ от земната повърхност, като неговата стойност се приема за **хомогенна за цялата му площ**.

![Растерните данни се състоят от редове (в широчина) и колони (във височина) от пиксели. Всеки един от тях покрива определена площ, а стойността на пиксела определя (стойността на) някакво свойство за тази площ.](img/raster_dataset.png)

## Още за растерните данни

В ГИС използваме растери, когато представяме информация за непрекъснат (континуален) обект или явление за дадена територия. Когато си обяснявахме за векторните данни, разгледахме пейзаж погледнат от високо. Точки, линии и полигони добре описваха индивидуалните обекти, но как да опишем нещо като цвета на тревата например? Или надморската височина? Или пък температурата на въздуха? За разлика от конкретното дърво, или конкретната къща, измерване на надморската височина може да се случи във всяка една безкрайно малка точка.

![Не всичко от заобикалящата ни среда е така лесно да се представи като точки, линии и полигони, както например дърветата, пътищата или сградите. Например как бихме описали ливадите? Като полигони? Ами тревата е с различен цвят за всеки отделен квадратен метър. При данни за големи площи с непрекъснато променящи се стойности се използват растери, по-просто е.](img/landscape.jpg)

Възможно решение е да оградим големи участъци в полигони, за които да зададем средната надморска височина. Проблемът е, че дори и в този случай на цялата площ не наблюдаваме еднаква стойност. Това е защото векторните данни са по-удачни за показване на хомогенни обекти по качествен признак. Например полигона и атрибутите, с които се описва територията на някоя община, не се променят за целия обхват на общината, тя си има все същия кмет, все същите граници и все същия общински център.

Добре, другия вариант за събиране на данни за надморската височина е просто да направим полигоните по-малки, за да гарантираме, че нямаме отклонение с повече от 1 метър за тази площ. Това е правдоподобно решение, но изведнъж ще се окаже, че работим със стотици (хиляди) обекти и това ще затормози както нас, така и ГИС програмата.

Растерните данни са решението в точно такива случаи. Много често растери се използват като фон на векторни слоеве, за да се опише по-добре контекста на весторните слоеве. Хората са добре приспособени да извличат информация от изображения, именно затова картите с подходяща непрекъсната картна основа успяват да предадат повече информация.

Макар и най-често асоциирани със спътникови изображения на земната повърхност, растерните данни са приложими и съхранението на по-абстрактни идеи. Примери за това са надморската височина, сума на валежите, сеизмичен риск, гъстота на населението и т.н. Ето например спътниково изображение и извлечена преработена изображение от него.

![Изображенията в истински цвят (вляво) са полезни с възможността си да покажат детайли, които не са възможни при работа с векторни данни. Растерите са полезни и за по-абстрактни визуализации, например на средната минимална температура в Източен Кейп през март (вдясно).](img/raster_types.png)

## Геореференциране

**Геореференцирането** е процесът на задаване на точния териториален обхват на изображението. Тази информация се съхранява като **метаданни**, за да може ГИС програмата да покаже изображението на правилното място на картата. Информацията необходима за правилното геореференциране в най-простия случай се състои от координатите на горния ляв ъгъл на изображението, широчина и височина на всеки пиксел, която съответства върху земната повърхност, както и с колко е завъртяно изображението. Обикновено тази информация е достатъчна, за да може всяка ГИС програма да покаже снимката привилно. Тя се съхранява най-често вътре в самия растерен файл, но понякога е и като отделен текстови файл придружаващ изображението.

## Източници на растери

Растери могат да се извлекат по различни начини. Двата най-разпространени са въздушното и спътниковото заснемане. При въздушното заснемане летателен апарат, било то самолет, хеликоптер или дрон, облита дадена територия и я заснема със специално пригодена камера, или по-общо **сензор**. Спътниковите изображения пък се заснемат от много по-голяма височина всеки път когато преминат над територия, която представлява интерес. И в двата случая тези данни и придружаващите ги метаданни се нуждаят от последваща обработка на Земята, която да направи изображенията използваме и георефенцирани. Целия този процес се нарича **дистанционни изследвания**.

![Част от данните, които спътниците на Европейската космическа агенция изпращат, биват приемани от станцията Цебрерос в Испания.](//upload.wikimedia.org/wikipedia/commons/0/0b/Ceberos_estrack_station.jpg)

В други случаи, растерите се изчисляват. Например метеоролозите биха растерен слой на средната температура, валежи, скорост или посока на вятъра за цялата територия на страната, въпреки че тези замервания са се случили само в проделени точки, където има метеорологични станции. За целта са приложили специален метод за пространствен анализ наречен интерполация, който ще разгредаме по-подробно в една от следващите глави.

Често растери са генерирани и от векторни слоеве, просто защото работата с растери е много по-лесна. Например Гугъл карти или OpenStreetMap, които показват множество векторни обекти като пътища, реки, сгради, гари, паркове, ресторанти и прочие, всъщност се визуализират за крайните потребители като растери. Това е приложимо само ако данните могат да бъдат комуникирани само със симвология и етикети. Ако се налага да работим изключително с атрибутивната таблица, то тогава растеризираните вектори не са най-добрия вариант.

???! note "Забележка"
    OpenStreetMap и подобни услуги всъщност прилагат трик, с който да покажат данните от атрибутивната таблица. Всеки път когато потребителят натисне върху точка от картата, нейните координати се изпращат до сървъра и той връща атрибутите на векторния обект, който се намира точно на това място.

## Разделителна способност

### Пространствена разделителна способност (ПРС)

Всеки растер се състои от пиксели с еднакви размери. Именно тези размери определят разделителната способност, или на каква площ от земната повърхност отговаря един пиксел. Това ясно се забелязва, ако приближим достатъчно в някой растерен слой.

![Добре изглеждащ растерен слой, но\...](img/raster_small_scale.png)

![... ако приближим прекалено, и изображението става... пикселизирано.](img/raster_large_scale.png)

Различни фактори определят разделителната способност на изображението. За данни от дистанционни изследвания, разделителната способност зависи от възможностите на сензора, с които е снето изображението. Например спътниците от програмата SPOT5 имат разделителна способност 10x10 m, докато MODIS - 500x500 m. Най-мошните съвременни спътникови сензори предлагат изображения с разделителна способност от 0.33x0.33 m. Аерофотоснимките имат още по-малки размери на пикселите - около и под сантиметър.

Когато размерът на пикселите е малък, т.е. един пиксел покрива малка площ от земната повърхност, тези растери имат **висока разделителна способност**, тъй като предлагат висока степен на детайлност за разграничаване на отделните обекти. Напротив, когато растерите се състоят от пиксели, които покрива големи площи от земната повърхност, говорим за **ниска разделтиелна способност**.

При растери изчислени след пространствен анализ (напр. средногодишната сума на валежите), разделителната способност на получения растер зависи от гъстотата на изходните данни (напр. гъстотата на метеорологичните станции).

Един от основните недостатъци на изображенията с висока разделителна способност е техния огромен обем. Да вземем за пример растер съставен от девет пиксела в три реда и три колони (3x3=9). Ако приемем, че изображението има само един канал, то компютърът трябва да съхрани само девет числа. Сега ако се прехвърлим на мащабите на цяла държава, то едноканално растерно изображение на България, където всеки пиксел е 1 km ще отнеме 111 000 байта, което е по-малко от броя на буквите на тази символите на тази страница. Ако обаче решим да съхраним страната в резолюция 1x1 m, тогава изображението ще заеме 111 GB  (гигабайта) пространство, което е повече от 11 двучасови филма в пълно качество. Ами ако увеличим разделителната способност на 33 cm? Тогава България би заемала близо 1 TB (терабайт) пространство, което е повече от капацитета на повечето компютри. Ако добавим и трите цвята червено, зелено и синьо, достигнахме до 3 TB (терабайта) данни. Можем да заключим, че малка промяна на размера на пиксела има огромен ефект върху размера на файловете, най-вече поради големия брой пиксели в едно изображение.

Всъщност ниската разделителна способност не трябва да се приема за недостатък. С увеличаването на размера на пикселите, техния брой за същата площ намалява, което означава по-бърза обработка от компютърните алгоритми. За големи площи това забързване на обработката не бива да се подценява, особено при по-сложни операции. Освен това високата разделителна способност не би ни донесла допълнителна информация в редица случаи. Ако искаме да покажем карта на облаците за метеорологичната прогноза, разделителна способност от няколко сантиметра определено няма да помогне за по-добро предсказване на времето.

От друга страна използването на растери с ниска резолюция е проблем, ако искаме да опишем обекти с малка площ. В някои случаи е възможно няколко обекта да попаднат в един и същи пиксел. Така стойностите на тези обекти ще бъде осреднена като стойност на пиксела и те не могат да бъдат разграничени и изследвани.

### Спектрална разделителна способност

Когато правим дигитална снимка с телефона си например, камерата използва електрически **сензор**, с който улавя яркостта на червената, зелената и синята светлина и записва тези три стойности за всеки пиксел. Когато екранът показва всеки отделен пиксел, той чете тази информация и настройва екрана да възпроизведе същия цвят светлина. Тъй като нашия сензор е уловил трите цвята червено, зелено и синьо и е записал три стойности, то създадения растер има три **канала**.

И докато нашите очи могат да виждат само тези три цвята, то електрическите сензори не са ограничени от тези недостатъци на човешкото зрение. Тъй като повечето снимки на потребители са от рода на снимка на вечерята в Инстаграм и са със съмнителен принос за научните среди, тези изображения са само в тези три цвята. Вече дори някои съвременни мобилни телефони улавят и записват информация за инфрачервената светлина , която е **невидима** за нас.

??? example "Пример: експеримент с инфарчервена светлина"
    Вземете дистанционно на някой електроуред у дома и го насочете към камерата на вашия телефон. Натиснете някое от копчетата на дистанционното. Виждате ли светлина? В случая сензора улавя светлина, която не е видима за нас и я интерпретира като червено.

Професионалните сензори за дистанционни изследвания могат улавят информация и за други невидими цветове за нас. Те се наричат **многоканални** при запис на няколко и **хиперканални** при запис на интензитета на десетки или стотици дължини на вълната. Но защо? Ами например инфрачервената светлина е много добър индикатор за откриване на водни повърхности и вода в растителността. Броят на каналите в едно изображение се нарича **спекрална разделителна способност**.

Най-често изображенията в ГИС са многоканални, където всеки канал е като отделен растерен слой. ГИС позволява да се комбинират до три от тези канали, за да се покаже изображението в цветове, които човешкото око може да види. Ако избраните канали не съвпадат с реалните цветове за червено, зелено и синьо, това изображение се нарича изображение с **фалшиви цветове**.

Понякога изображението съдържа само един канал и то се нарича **сиво**. В такива случаи е въможно допълнително да се приложат цветове спрямо стойностите в пикселите и се наричат **псевдоцветове**. Особен случай на едноканалните изображения са **двоичните маски**. При тях имаме черен фон, който съответства на стойност 0, и бели обекти със стойност 1. Те се използват за маркиране на границите на отделни категории обекти (напр. сгради и несгради, улици и неулици, водни площи и суша).

TODO example grayscale vs pseudocolor

TODO example binary mask

## Улавяне и съхранение на растерни данни

От часовете по 

В контекста на дистанционните изследвания и заснемането на земната повърхност, растерите съхраняват данни за отразената от земната повърхност електромагнитна радиация (светлина) от естествени или изкуствени източници. Ако източника на електромагнитна радиация е естествен, например слънчевата светлина

При някои растерни формати (`jpg`, `png`) съхраняваното за всеки пиксел число е код, който съответства на конкретен цвят. Например числото 1 може да съответства на бяло, числото 2 на лилаво, числото 3 на розово, числото 4 на тъмно сиво и т.н.

Най-често обаче в пространствените науки се използват формати (`tif`, често срещан като `tiff` или `geotiff`), при които стойността на пиксела описва яркостта (интензитета) на светлината за определен спектър.

При едноканално (черно-бяло) изображение този спектър ще заема целия видим спектър за човешкото око. Така в черните и тъмните участъци ще съхраняват по-ниски стойности, а в светлите и белите участъци - високи стойности.

При  (в най-простия случай) видимия спектър е разделен на трите основни цвята - червен, зелен и син. Така ако за всеки цвят запишем интензитета на светлината, можем да получим всеки един от видимите цветове за човешкото око.

<!-- Например снойностите -->

## Преобразуване от растер към вектор

По-рано коментирахме, че често при работа с векторни слоеве изолзваме растерен слой за заден фон. Това улеснява осъзнаването на пространствения контекст на данните, както и цифроването на нови векторни обекти.

Не е задължително цифроването да става ръчно обаче. Някои особености на земната повърхност, например пътища сред ниви, представляват рязка промяна в цвета между между съседни пиксели. Тази рязка промяна позволява лесното им идентифициране от специализирани компютърни програми, които могат да извлекат данни при алгоритмичното анализиране на изображението. В днешно време автоматичното извличане на данни от изображения може да вземе предвид не само цветовете, но и формата, разположението и шарките, които те образуват. За целта се прилагат различни алгоритми, като в последните години изкуствения интелект е заел особено място в изпълнението на подобни задачи.

## Преобразуване от вектор към растер

Преобразуването от вектор към растер се нарича **растеризиране** и се прилага за улеснена обработка на пространствената информация или за разпространение на географската информация към потребители без специализиран ГИС софтуер. Особеност при растеризирането е, че информацията от атрибутивната таблица се изгубва завинаги и не може да бъде възстановена. Въпреки това числовите и категоризиращите атрибути могат да бъдат записани като отделни канали в изображението.

## Анализ на растери

Фактът, че растерите са просто поредица от еднакви по размер пиксели по редове и колони ги прави идеален кандидат за авторатизиран анализ с компютърни алгоритми, при това много по-удобен отколкото векторните данни. 

Растери често се използват и в управлението на земеделските и горските ресурси. От спътниково изображение може да се види в къде растенията са със забавено развитие, изпитват воден недостиг, са нападнати от вредител, или да изчисли обема на дървения материал. По този начин собственика на земята може да вземе информирано решение какви действия да предприеме и какво да очаква в бъдеще.

В условията на променящ се климат, анализирането на растери е незаменим инструмент за предпазване и справяне с все по-засилващите се като честата и сила природните бедствия. Например в хидрологията само с цифров модел на релефа можем да открием повърхностите потоци и съответните им водосбори, както и кои участъци имат затруднено отичане и биха се наводнили при определено количество валеж.

## Препъникамъчета

Тъй като растерите покриват големи участъци от земната повърхност, често те са с прекалено големи размери. Това води до няколко нежелани ефекта, като голямо необходимост от голямо пространство за съхранение, покриване на участъци, които не представляват интерес, както и до излишна нужда от изчислителна мощ. Размерът на растерните файлове е правопропорционален на броят канали, размерът на пикселите и обхватът на изображението.

## Какво научихме?

- Растерите са мрежа от еднакви по размер **пиксели**.
- Растерите са подходащи за данни с **голям и непрекъснат обхват**.
- Размерът на пикселите определя **разделителната способност** на изображението.
- Изображенията съдържат един или повече **канали**, които позволяват една или повече стойности за всеки един пиксел.
<!-- - When raster data contains bands from different parts of the electromagnetic spectrum, they are called **multi-spectral images**. -->
- Изображенията на земната повърхност от спътникови или въздушни сензори най-често са в трите видими за човешкото око цвята червено, зелено и синьо и се съхраняват в триканални растери.
- Изображенията с един канал се наричат grayscale.
- Едноканалните изображения могат да се покажат в неистински цветове в ГИС (напр. надморската височина за всеки пиксел от синьо, през зелено, оранжево, кафяво до бяло за върховете).
- Растерите са изключително удобни за автоматизирана обработка от компютърни алгоритми.
- Растерите могат да заемат огромен обем дисково пространство.

## Твой ред е!

- Опишете ситуации, при които растерните данни са за предпочитане пред векторните данни.

??? example "Примери"
    Всички данни с непрекъснат териториален обхват, например:
    - надморска височина за определена територия;
    - температура на въздуха за определена територия;
    - годишна сума на валежи за определена територия;
    - изображения на земната повърхност;
    - влажност на почвата за определена територия;
    - гъстота на населението за определена територия;
    - риск от наводнение за определена територия;
    - гъстота на растителността за определена територия.

- Създайте собствен растерен слой на хартия, разграфен на ситни квадратчета (0.5 cm). Наложете листа хартия над изображение на района, в който живеете. За всеки вид земно покритие (напр. сграда, игрище, поляна, гора, улица, тротоар, площад и т.н.) изберете различен цвят молив. Оцветете всяко едно квадратче в един единствен цвят според основния обект, който го заема, напр. улиците в сиво, игрищата в оранжево и т.н. Добре ли се открояват отделните обекти на хартиения ни растер? Как размерът на квадратчетата ще повлияе на тази задача? Аргументирайте отговора си.

??? example "Примери"

    Според размера на квадратчетата върху хартията и приближението на снимката, е възможно новосъздадените растерни данни да са напълно неразбираеми за случаен наблюдател. Всъщност квадратчетата играят ролята на пиксели, а листа хартия - на обхвата на растерния слой. Оптималния размер на пикселите е такъв, че най-малките обекти трябва да заемат поне 3-4 квадратчета. Ако пикселите са прекалено едри, е възможно в един "пиксел" да попаднат повече от един обекти от изображението, което е проблем при растерите с ниска разделителна способност (големи по площ пиксели).

- Дайте примери, в които ниската разделителна способност (голям размер на пикселите) е подходящо.

??? example "Примери"

    - карта на средногодишната сума слънчево греене - границите са прекалено плавни, а площите много големи и разделителна способност от стотици и дори хиляди километри е подходящата.
    - карта на вида гори (широколистни или иглолистни) - едно възрастно дърво покрива площ повече от 25 m^2^, по-висока резолюция няма да донесе допълнителна информация за видовия състав.
    - Карта на температурата на водните басейни - границите са прекалено плавни, за да има смисъл от разделителна способност от няколко метра.
