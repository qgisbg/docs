---
title: Markdown в QGIS.бг докс
tags: qgis.бг, докс
---

Markdown в QGIS.бг докс
=======================

Поддържат се редица разширения, най-важните сред които са:

## Разширения специално за QGIS.бг

### [Икони от QGIS](https://github.com/suricactus/mdx_iconify)

Списъка с икони на QGIS директно от [кода](https://github.com/qgis/QGIS/tree/master/images/themes/default).

Виж списъка с икони TODO.

=== "Изход"
    Иконка филтър :i:qgis:mActionFilter:

    Иконка карта :i:qgis:svgbase/worldmap:

=== "Markdown"
    ```
    Иконка филтър :i:qgis:mActionFilter:

    Иконка карта :i:qgis:svgbase/worldmap:
    ```

## markdown

### [Мета данни](https://python-markdown.github.io/extensions/meta_data/)

=== "Markdown"
    ```
    ---
    title: Markdown в QGIS.бг докс
    tags: qgis.бг, докс
    ---
    ```

### [smarty](https://python-markdown.github.io/extensions/smarty/)

=== "Изход"
    ASCII      | заместител | име
    :--------: | :--------: | -----
    \.\.\.     | ...  | триеточие (ellipsis)
    \-\-       | --   | тире
    \-\-\-     | ---  | много дълго тире 

=== "Markdown"
    ```
    ASCII      | заместител | име
    :--------: | :--------: | -----
    \.\.\.     | ...  | триеточие (ellipsis)
    \-\-       | --   | тире
    \-\-\-     | ---  | много дълго тире 
    ```

### [Бележки под линия](https://python-markdown.github.io/extensions/footnotes/)

=== "Изход" 
    Бележки[^1] имат етикет[^@#$%] и съдържание на етикета [^or_a_name].

    [^1]: Бележка под линия.
    [^@#$%]: и още бележки под линия за: "@#$%".
    [^or_a_name]: и още бележки под линия за: "or_a_name".

=== "Markdown"
    ```
    Бележки[^1] имат етикет[^@#$%] и съдържание на етикета [^or_a_name].

    [^1]: Бележка под линия.
    [^@#$%]: и още бележки под линия за: "@#$%".
    [^or_a_name]: и още бележки под линия за: "or_a_name".
    ```

### [Забележки](https://python-markdown.github.io/extensions/admonition/)

=== "Изход" 
    !!! note "Незадължително заглавие"
        Първи параграф.

        Втори параграф.
    
    !!! note

    !!! important

    !!! warning

    !!! danger

=== "Markdown"
    ```
    !!! note "Незадължително заглавие"
        Първи параграф.

        Втори параграф.
    ```

    !!! note

    !!! important

    !!! warning

    !!! danger

### [Речници](https://python-markdown.github.io/extensions/definition_lists/)

=== "Изход"
    Ябълка
    :   Най-вкусен този представител на розоцветни е на кекс.

    Портокал
    :   Тази година цитруси има не само на Коледа.

=== "Markdown"
    ```
    Ябълка
    :   Най-вкусен този представител на розоцветни е на кекс.

    Портокал
    :   Тази година цитруси има не само на Коледа.
    ```

### [Таблици](https://python-markdown.github.io/extensions/tables/)

=== "Изход" 
    First Header  | Second Header
    ------------- | -------------
    Content Cell  | Content Cell
    Content Cell  | Content Cell

=== "Markdown"
    ```
    First Header  | Second Header
    ------------- | -------------
    Content Cell  | Content Cell
    Content Cell  | Content Cell
    ```

## pymdownx

### [pymdownx.caret](https://facelessuser.github.io/pymdown-extensions/extensions/caret/)

=== "Изход"
    ^^Insert me^^

    H^2^0

    text^a\ superscript^

=== "Markdown"
    ```
    ^^Insert me^^

    H^2^0

    text^a\ superscript^
    ```

<!-- 
### [pymdownx.critic](https://facelessuser.github.io/pymdown-extensions/extensions/critic/)

!!! example "critic пример"

    === "Изход"
        Ето малко {--*грешен*--} Markdown.  Или пък добавям {++още ++}нещо.  Ето малко повече {--пример
         с многоредов --}текст.  Или дори повече {++текст  
         добавен ++}тук.{~~

        ~>  ~~}В крайна сметка този параграф си замина, заменен с празно място.{~~  ~>

        ~~}Сега останахме само на нов текст.

        Ето и коментар {==тук
         върху текста==}{>>Работи прилично. Първия ми коментар.<<}. Заместванията {~~е~>са~~} чудесни!

        И малко блокове.

        {--

        * тест за изтриване
        * тест за изтриване
        * тест за изтриване
            * тест за изтриване
        * тест за изтриване

        --}

        {++

        * тест за добавяне
        * тест за добавяне
        * тест за добавяне
            * тест за добавяне
        * тест за добавяне

        ++}

    === "Markdown"
        ```critic-markup
        Ето малко {--*грешен*--} Markdown.  Или пък добавям {++още ++}нещо.  Ето малко повече {--пример
         с многоредов --}текст.  Или дори повече {++текст  
         добавен ++}тук.{~~

        ~>  ~~}В крайна сметка този параграф си замина, заменен с празно място.{~~  ~>

        ~~}Сега останахме само на нов текст.

        Ето и коментар {==тук
         върху текста==}{>>Работи прилично. Първия ми коментар.<<}. Заместванията {~~е~>са~~} чудесни!

        И малко блокове.

        {--

        * тест за изтриване
        * тест за изтриване
        * тест за изтриване
            * тест за изтриване
        * тест за изтриване

        --}

        {++

        * тест за добавяне
        * тест за добавяне
        * тест за добавяне
            * тест за добавяне
        * тест за добавяне

        ++}
        ``` 
-->

### [pymdownx.details](https://facelessuser.github.io/pymdown-extensions/extensions/details/)

!!! example "Пример"

    === "Изход"
        ???+ "Информация"
            Отворено съдържание заради плюсчето в `???+`

        ???+ note "Заглавие на вложени детайли"

            ??? danger "Вложени детайли!"
                И още повече информация тук.

        ??? success "Зелено"
            Съдържание.

        ??? example "Пример"
           Съдържание.

        ??? warning "Жълто"
            Обикновено се използва да се внимава в дадена ситуация.

    === "Markdown"
        ```
        ???+ "Информация"
            Отворено съдържание заради плюсчето в `???+`

        ???+ note "Заглавие на вложени детайли"

            ??? danger "Вложени детайли!"
                И още повече информация тук.

        ??? success "Зелено"
           Съдържание.

        ??? example "Пример"
           Съдържание.

        ??? warning "Жълто"
           Обикновено се използва да се внимава в дадена ситуация.
        ```

### [pymdownx.emoji](https://facelessuser.github.io/pymdown-extensions/extensions/emoji/)

!!! example "Емоджита"

=== "Изход"
    :smile: :heart: :earth_africa:

=== "Markdown"
    ```
    :smile: :heart: :earth_africa:
    ```

### [pymdownx.escapeall](https://facelessuser.github.io/pymdown-extensions/extensions/escapeall/)

!!! example "Escape"

=== "Изход"
    Този `пример` е такъв. Този \`пример\` обаче не.

=== "Markdown"
    ```
    Този `пример` е такъв. Този \`пример\` обаче не.
    ```

### [pymdownx.keys](https://facelessuser.github.io/pymdown-extensions/extensions/keys/)

!!! example "Клавишни комбинации"

=== "Изход"
    ++ctrl+alt+delete++.

=== "Markdown"
    ```
    ++ctrl+alt+delete++
    ```

### [pymdownx.magiclinks](https://facelessuser.github.io/pymdown-extensions/extensions/magiclinks/)

!!! example "Автоматични връзки"

=== "Изход"
    - Когато показваме самият линк, просто го принтираме така: https://google.com.
    - Дори и имейли адреси: fake.email@email.com.
    - Или потребители в GitHub: @facelessuser

=== "Markdown"
    ```
    - Когато показваме самият линк, просто го принтираме така: https://google.com.
    - Дори и имейли адреси: fake.email@email.com.
    - Или потребители в GitHub: @facelessuser
    ```

### [pymdownx.tabs](https://facelessuser.github.io/pymdown-extensions/extensions/tabs/)

=== "Изход"
    === "Tab 1"
        Markdown **content**.

        Multiple paragraphs.

    === "Tab 2"
        More Markdown **content**.

        - list item a
        - list item b

    ===! "Tab A"
        Different tab set.

    === "Tab B"
        ```
        More content.
        ```

=== "Markdown"

    ```
    === "Tab 1"
        Markdown **content**.

        Multiple paragraphs.

    === "Tab 2"
        More Markdown **content**.

        - list item a
        - list item b

    ===! "Tab A"
        Different tab set.

    === "Tab B"
        ```
        More content.
        ```
    ```

### [pymdownx.tilde](https://facelessuser.github.io/pymdown-extensions/extensions/tilde/)

=== "Изход"
    ~~Delete me~~

    CH~3~CH~2~OH

    text~a\ subscript~

=== "Markdown"
    ```
    ~~Delete me~~

    CH~3~CH~2~OH

    text~a\ subscript~
    ```
