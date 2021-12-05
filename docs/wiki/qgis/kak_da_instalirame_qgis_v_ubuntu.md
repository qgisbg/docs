---
title: Как да инсталирам QGIS в Debian/Ubuntu?
tags: qgis, проекция, слой
---

# Как да инсталирам QGIS в Debian/Ubuntu?

Инсталацията на QGIS в Debian базираните операционни системи е лесно, както всеки друг пакет. Наличен е както `.deb` пакет, така и `Flatpak` пакет. В тази статията ще опишем процедурата за инсталация на QGIS с `.deb` пакет.

В най-простия случай може да се използа версията на QGIS, която е в пакетите по подразбиране. В такъв случай може да се инсталира просто с `sudo apt install qgis`.

Често обаче тази версия е на поне няколко години, а QGIS изкарва нова версия на всеки 3 месеца.

## Стъпки


1. Първо инсталираме някои допълнителни инструменти:

    ```
    sudo apt install gnupg software-properties-common
    ```

2. Следва инсталация на QGIS ключа, така че QGIS хранилището да бъде разпознато като доверена страна.

    ```
    wget -qO - https://qgis.org/downloads/qgis-2021.gpg.key | sudo gpg --no-default-keyring --keyring gnupg-ring:/etc/apt/trusted.gpg.d/qgis-archive.gpg --import
    sudo chmod a+r /etc/apt/trusted.gpg.d/qgis-archive.gpg
    ```

3. Добавяме хранилището на QGIS.

    === "Latest"

        ```
        sudo add-apt-repository "deb https://qgis.org/ubuntu $(lsb_release -c -s) main"
        ```

    === "LTR (Stable)"

        ```
        sudo add-apt-repository "deb https://qgis.org/ubuntu-ltr $(lsb_release -c -s) main"
        ```


4. Обновяваме информацията за пакетите:

    ```
    sudo apt update
    ```

5. Инсталираме QGIS:

    ```
    sudo apt install qgis qgis-plugin-grass
    ```

6. В случай, че искаме да инсталираме `QGIS Server`, трябва да инсталираме и следния пакет:

    ```
    sudo apt install qgis-server
    ```

7. Готово!


???+ warning "Внимание!"

    Най-последните инструкции за инсталиране на QGIS може да откриете [тук](https://qgis.org/en/site/forusers/alldownloads.html#debian-ubuntu).