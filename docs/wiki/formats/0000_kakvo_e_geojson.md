---
title: Какво е Geojson (геоджейсон)?
tags: геоджейсон, geojson, geo.json, json, вектор, интернет
---

# Какво е Geojson (геоджейсон)?

**Geojson** (произнася се *геоджейсон*) е един от най-достъпните формати за разпространение на географски данни в интернет. Разширението на файлове съдържащи geojson е `.json`, `.geo.json` или най-често `.geojson`.

## Примерен файл

```json
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type":"Point",
                "coordinates": [1, 1]
            },
            "properties": {
                "id": 1,
                "name": "one"
            }
        }
    ]
}
```
