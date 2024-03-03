---
title: GDAL
tags: technology, GDAL
---

# GDAL/OGR

![GDAL лого](./img/gdal_logo.png)

GDAL/OGR (джидал или гуудъл/о-джи-ар) e софтуер с отворен код за прочитане и записване на почти всички растерни и векторни геопространствени формати.
Комбинацията от код написан на C++ и разпространението му под X/MIT лиценз [OSGeo](../organizations/osgeo.md), което позволява лесната му интеграция с разнообрани софтуерни продукти.

GDAL не разполага с графичен интерфейс за визуализиране на данни.
Крайният потребител обикновено работи с допълнителните помощни програми от командния ред за обработка на пространствени данни.
За целта може да се използват програми като QGIS, QField, GRASS GIS и др.
Основните цели на GDAL/OGR е да осигури библиотеки, които да позволяват на други програми да четат разнообразни файлови формати, както и програми от командния ред за обработка, преобразуване и анализ на географски данни.

Почти всяка програма, която работи с пространствени данни, използва по един или друг начин кодът на GDAL.
Акронима GDAL означава Geospatial Data Abstraction Library (библиотека за абстракция на геопространствени данни).
На практика означава, че след прочитане на съответния векторен или растерен файлов формат от GDAL, обектите или пикселите са представени по един и същи абстрактен начин в паметта на компютъра.


## Поддържани формати

GDAL поддържа над 140 растерни формата, сред които: GeoTIFF, Erdas Imagine, OGC WCS/WMS/WMTS, SDTS, ESRI Grids, ECW, MrSID, HDF, NetCDF, JPEG2000, DTED, NITF, GeoPackage и др.

OGR поддържа над 80 векторни формата, сред които: GeoPackage, GeoParquet, ESRI Shapefile, GML, GeoJSON, KML, OpenStreetMap, PostGIS, DGN, Oracle Spatial ESRI Coverages, ESRI FileGeodatabase, Mapinfo (tab and mid/mif), OGC WFS и др.


## Приложение

GDAL/OGR е най-използваната библиотека за достъп до геопространствени данни, използван от много приложения като [MapServer](./mapserver.md), [GRASS GIS](./grass_gis.md), [QGIS](./qgis.md), [QField](./qfield.md), [GeoNode](./geonode.md), Python модули като `rasterio`, `geopandas`, `fiona`. Използва се и софтуерни пакети като OSSIM, Cadcorp SIS, FME, Google Earth, VTP, ILWIS, MapGuide, ArcGIS и др.


## Допълнителни инструменти

- `ogrinfo` - Изписва информация за даден векторен слой.
- `ogr2ogr` - Превръща между различни векторни формати.
- `gdalinfo` - Изписва информация за даден растерен слой.
- `gdalwarp` - Променя проекцията на растерен слой.
- `gdal_translate` - Превръща между различни растерни формати.
- `gdal_polygonize.py` - Превръща растерен слой във векторен слой с полигони.


## Примери

### Извличане на мета данни за векторен файл

=== "Команда"
    ```
    ogrinfo -so natural_earth_vector.gpkg ne_10m_admin_0_antarctic_claim_limit_lines
    ```
=== "Изход"
    ```
    INFO: Open of `natural_earth_vector.gpkg'
         using driver `GPKG' successful.

    Layer name: ne_10m_admin_0_antarctic_claim_limit_lines
    Geometry: Line String
    Feature Count: 23
    Extent: (-150.000000, -90.000000) - (160.100000, -60.000000)
    Layer SRS WKT:
    GEOGCS["WGS 84",
        DATUM["WGS_1984",
            SPHEROID["WGS 84",6378137,298.257223563,
                AUTHORITY["EPSG","7030"]],
            AUTHORITY["EPSG","6326"]],
        PRIMEM["Greenwich",0,
            AUTHORITY["EPSG","8901"]],
        UNIT["degree",0.0174532925199433,
            AUTHORITY["EPSG","9122"]],
        AUTHORITY["EPSG","4326"]]
    FID Column = fid
    Geometry Column = geom
    type: String (15.0)
    scalerank: Integer (0.0)
    featurecla: String (50.0)
    ```


### Превръщане от един в друг векторен формат и смяна на КРС


<!-- TODO add sample output -->
```
ogr2ogr -s_srs EPSG:4326 -t_srs EPSG:3857 output.gpkg input.shp
```


### Извличане на мета данни за растерен файл

=== "Команда"
    ```
    gdalinfo ./input.tif
    ```
=== "Изход"
    ```
    Driver: GTiff/GeoTIFF
    Size is 512, 512
    Coordinate System is:
    PROJCS["NAD27 / UTM zone 11N",
        GEOGCS["NAD27",
            DATUM["North_American_Datum_1927",
                SPHEROID["Clarke 1866",6378206.4,294.978698213901]],
            PRIMEM["Greenwich",0],
            UNIT["degree",0.0174532925199433]],
        PROJECTION["Transverse_Mercator"],
        PARAMETER["latitude_of_origin",0],
        PARAMETER["central_meridian",-117],
        PARAMETER["scale_factor",0.9996],
        PARAMETER["false_easting",500000],
        PARAMETER["false_northing",0],
        UNIT["metre",1]]
    Origin = (440720.000000,3751320.000000)
    Pixel Size = (60.000000,-60.000000)
    Corner Coordinates:
    Upper Left  (  440720.000, 3751320.000) (117d38'28.21"W, 33d54'8.47"N)
    Lower Left  (  440720.000, 3720600.000) (117d38'20.79"W, 33d37'31.04"N)
    Upper Right (  471440.000, 3751320.000) (117d18'32.07"W, 33d54'13.08"N)
    Lower Right (  471440.000, 3720600.000) (117d18'28.50"W, 33d37'35.61"N)
    Center      (  456080.000, 3735960.000) (117d28'27.39"W, 33d45'52.46"N)
    Band 1 Block=512x16 Type=Byte, ColorInterp=Gray
    ```


### Промяна на каналите от BGR на RGB

<!-- TODO add sample output -->
```
$ gdalwarp input_bgr.tif output_rgb.tif -b 3 -b 2 -b 1
```


### Промяна на КРС на растерен слой на EPSG:4326

<!-- TODO add sample output -->
```
$ gdalwarp -t_srs EPSG:4326 input.tif output.tif
```


### Превръщане от .map в .tif с плочки

```
gdal_translate -of GTiff -co "TILED=YES" utm.map utm_tiled.tif
```


## Какво може GDAL/OGR?

- Редица помощни програми от командния ред за превод на данни; дигитална манипулация на изображения; промяна на картни проекции; подбиране на подмножества (извличане само на частите от големи файлове, които представляват интерес за конкретна цел); обединяване; мозайкиране на карти (създаване на клетки); услуги, свързани с цифров модел на релефа DEM (сенкорелеф, наклон, хипсометрично оцветяване) и др.
- Високоефективен достъп до растерни данни чрез мозайкиране и опции за преглед.
- Поддръжка на големи файлове (>4 GB) с малки изисквания към паметта.
- Достъп до библиотеки от C, C++, Python, Java, C#, Perl.
- Механизъм за координатни системи, изграден на библиотеката PROJ.4, както и описания на координатни системи чрез OGC Well Known Text (WKT).
- Подробна документация за всеки поддържан формат и за всяка помощна програма от командния ред.


## Инсталация

GDAL/OGR може да бъде инсталиран по няколко начина, в зависимост от операционната система и нуждите.

- **OSGeo4W Network Installer** - Най-лесния начин за управление на геопространствен софтуер с отворен код под Уиндоус. Първо изтегли OSGeo4W Network Installer (`osgeo4w-setup.exe`) от страницата на [OSGeo4W](https://trac.osgeo.org/osgeo4w/). Инсталирай програмата като избереш Express или Advanced инсталация. Избереи GDAL пакетът, за да бъде инсталиран на компютъра ти. OSGeo4W позволява да използвате всички геопространствени пакети от командния ред на OSGeo4W Shell.
- **Conda** - може да инсталирате `GDAL` с Anaconda или Miniconda чрез командата `conda install -c conda-forge gdal`.
- **Самостоятелна инсталация** - изтегли от [официалната страница](https://gdal.org/download.html).


## Външни връзки

- Страница и документация: https://gdal.org/
- Изтегляне: https://gdal.org/download.html
