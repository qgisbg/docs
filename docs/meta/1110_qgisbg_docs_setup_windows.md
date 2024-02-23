---
title: Как да настроим среда за работа по QGIS.бг докс в Windows?
tags: miniconda, conda, vscode, qgis.bg, windows, install, setup, virtual environment
---

1. Инсталираме и настройваме необходимия софтуер.
    1. Инсталираме **git**. Как да инсталираме **git** можем да открием [тук](../1000_install_git_windows).
    1. Инсталираме **miniconda**. Как да инсталираме **miniconda** можем да открием [тук](../1000_install_miniconda_windows).
    1. Инсталираме **VS Code**. Как да инсталираме **VS Code** можем да открием [тук](../1000_install_vscode_windows).
        1. Настройваме **VS Code** да работи с нашия GitHub профил.
        1. Настройваме конзолата по подразбиране във **VS Code** да бъде **Git Bash**. С ++ctrl+shift+p++ отваряме списъкът с команди и търсим и избираме `Terminal: Select Default Profile`. Избираме `Git Bash` от списъка.
        1. Настройваме `conda` да работи в **Git Bash** терминал. 
            1. Първо отваряме **Git Bash** терминала с ++ctrl+"\`"++ и изпълняваме командата `conda init bash`. Получаваме множество файлове с пълните им пътища, пред които пише `no change` или `modified`. Резултата от командата ще се различава на различните инсталации.

                === "Команда"
                    ```
                    conda init bash
                    ```
                === "Изход"
                    ```
                    (base) 
                    Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~
                    $ conda init bash
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\conda.exe
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\conda-env.exe
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\conda-script.py
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\conda-env-script.py
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\conda.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\Library\bin\conda.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\_conda_activate.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\rename_tmp.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\conda_auto_activate.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\conda_hook.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\activate.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\activate.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\condabin\deactivate.bat
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\activate
                    no change     C:\Users\Ivan Ivanov\miniconda3\Scripts\deactivate
                    no change     C:\Users\Ivan Ivanov\miniconda3\etc\profile.d\conda.sh
                    no change     C:\Users\Ivan Ivanov\miniconda3\etc\fish\conf.d\conda.fish
                    no change     C:\Users\Ivan Ivanov\miniconda3\shell\condabin\Conda.psm1
                    no change     C:\Users\Ivan Ivanov\miniconda3\shell\condabin\conda-hook.ps1
                    no change     C:\Users\Ivan Ivanov\miniconda3\Lib\site-packages\xontrib\conda.xsh
                    no change     C:\Users\Ivan Ivanov\miniconda3\etc\profile.d\conda.csh
                    modified      C:\Users\Ivan Ivanov\.bash_profile

                    ==> For changes to take effect, close and re-open your current shell. <==
                    (base) 
                    Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~
                    ```
                === "Обяснения"
                    За да можем да използваме `conda` от **Git Bash** е необходимо всеки път при стартирането на **Git Bash**, той да разбере за съществуването на `conda`. Именно затова 

            1. Тъй като мястото на настройка, която `conda` създаде, и мястото на настройка, която **VS Code** използва при стартиране на нов терминал се различават, се налага да копираме един от файловете. Командата няма изход, освен при грешка.

                === "Команда"
                    ```
                    cd ~; cp .bash_profile .bashrc
                    ```
                === "Изход"
                    ```
                    Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~
                    cd ~; cp .bash_profile .bashrc
                    Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~
                    ```
                === "Обяснения"
                    Всъщност изпълняваме две команди. `cd ~` е първата команда, която означава да сменим текущата си директория (`cd` идва от change dir) с директорията на текущия потребител, която за кратко се обозначава с `~`. Директорията на текущия потребител в този случай е `C:\Users\Ivan Ivanov`. 

                    За разделител между първата и втората команда се използва точка и запетая `;`.

                    Втората команда е `cp .bash_profile .bashrc`, където `cp` е командата за копиране (кратко от copy) и следва файла от който да копираме `.bash_profile` и файла, в който да запишем копието `.bashrc`.

            1. Затваряме текущия терминал с командата `exit`. При следващото стартиране настройките ни ще бъдат взети предвид.

1. Правим **fork** на [qgisbg/docs](https://github.com/qgisbg/docs/) с нашия GitHub профил.
1. Клонираме хранилището на *QGIS.бг докс* на локалната ни машина и отваряме локалната директория с проекта.
1. Създаваме нова виртуална среда в `conda`, в която да ще инсталираме всичките ни необходими софтуерни пакети.

    === "Команда"
        ```
        conda create -y -n qgisbg-docs
        ```
    === "Изход"
        ```
        (base)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        $ conda create -y -n qgisbg-docs
        WARNING: A space was detected in your requested environment path
        'C:\Users\Ivan Ivanov\miniconda3\envs\qgisbg-docs'
        Spaces in paths can sometimes be problematic.
        Collecting package metadata (current_repodata.json): done
        Solving environment: done

        ## Package Plan ##

        environment location: C:\Users\Ivan Ivanov\miniconda3\envs\qgisbg-docs

        Preparing transaction: done
        Verifying transaction: done
        Executing transaction: done
        #
        # To activate this environment, use
        #
        #     $ conda activate qgisbg-docs
        #
        # To deactivate an active environment, use
        #
        #     $ conda deactivate

        (base)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        ```
    === "Обяснения"
        Да разгледаме командата, която изпълнихме:

        ```
        conda create -y -n qgisbg-docs
        ```

        С `conda create` казваме на `conda`, че желаем да създадем нова **виртуална среда** (virtual environment). Всяка нова виртуална среда може да си я представяме като чисто нов компютър, който току-що е зареден за първи път. Неговата "среда" (състояние) е в непроменен вид - няма никакви допълнителни програми, вируси и файлове. Така и в чисто новата виртуална среда няма допълнителни инсталирани програми, т.е. започва се от нулата, все едно чисто нов компютър. Ако инсталираме дадена програма на единия от компютрите, тя няма да бъде налична на останалите. По същия начин като инсталираме програма в една виртуална среда, тя ще е налична само в тази виртуална среда и недостъпна от останалите. Накратко, виртуалните среди ни дават възможността да инсталираме различни програми и версии на един и същ компютър, сякаш имаме физически достъп до много различни компютри. От там идва и "виртуална", защото ние само я възпроизвеждаме, без реално да имаме много компютри. На един компютър може да имаме една или повече виртуални среди, които имат уникално име. По подразбиране основната среда на `conda` се казва `base`. Името на текущата виртуална среда се изписва в началото на всеки логически ред в кръгли скоби, затова се забелязва `(base)` при стартирането на конзолата.

        Към командата имаме още три аргумента. С `-y`, накратко от `--yes` указваме, че се съгласяваме с всичко, което `conda` смята за добре без да е необходимо да ни пита. Такова например е предупреждението, че в името ми има празно място и дали със сигурен, че трябва да продължа. А `-n qgisbg-docs` е накратко от `--name qgisbg-docs`, с което казваме, че името на новата ни виртуална среда ще бъде "qgisbg-docs".

1. Активираме новосъздадената виртуална среда с командата:

    === "Команда"
        ```
        conda activate qgisbg-docs
        ```
    === "Изход"
        ```
        (base)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        $ conda activate qgisbg-docs
        (qgisbg-docs)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        ```
    === "Обяснения"
        Тъй като на един компютър може да има повече от една виртуална среда, ние трябва изрично да кажем коя е активна в текущия терминал. За целта изпълняваме `conda activate`, с което `conda` ще активира дадената виртуална среда, в нашия случай това е `qgisbg-docs`.

1. Отваряме нов терминал в директорията, в която записахме проекта. Това става най-лесно, ако сме отворили директорията с проекта и потърсим с ++ctrl+shift+p++ за `Terminal: Create New Integrated Terminal`. Това ще зареди създаде нов терминал директно в текущо отворената директория.
1. Инсталираме всички необходими пакети с командата `pip install -r requirements.txt`. 

    === "Команда"
        ```
        pip install -r requirements.txt
        ```
    === "Изход"
        ```
        (qgisbg)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        $ pip install -r requirements.txt
        Collecting bracex==2.0.1
        Using cached bracex-2.0.1-py3-none-any.whl (10 kB)
        Collecting click==7.1.2
        Using cached click-7.1.2-py2.py3-none-any.whl (82 kB)
        Collecting cyclic==1.0.0
        Downloading cyclic-1.0.0-py3-none-any.whl (2.5 kB)
        Collecting future==0.18.2
        Using cached future-0.18.2.tar.gz (829 kB)
        Collecting Jinja2==2.11.2
        Using cached Jinja2-2.11.2-py2.py3-none-any.whl (125 kB)
        Collecting joblib==1.0.0
        Using cached joblib-1.0.0-py3-none-any.whl (302 kB)
        Collecting livereload==2.6.3
        Using cached livereload-2.6.3.tar.gz (25 kB)
        Collecting lunr==0.5.8
        Using cached lunr-0.5.8-py2.py3-none-any.whl (2.3 MB)
        Collecting Markdown==3.3.3
        Using cached Markdown-3.3.3-py3-none-any.whl (96 kB)
        Collecting markdown-captions==2
        Using cached markdown_captions-2-py3-none-any.whl (2.9 kB)
        Collecting markdown-toc==1.2.6
        Using cached markdown_toc-1.2.6-py3-none-any.whl (8.1 kB)
        Collecting MarkupSafe==1.1.1
        Downloading MarkupSafe-1.1.1-cp38-cp38-win_amd64.whl (16 kB)
        Obtaining mdx_iconify from git+https://github.com/suricactus/mdx_iconify@b64d75cee132cd0087ae21055e7a9955721d5c44#egg=mdx_iconify (from -r requirements.txt (line 13))
        Cloning https://github.com/suricactus/mdx_iconify (to revision b64d75cee132cd0087ae21055e7a9955721d5c44) to c:\users\ivan ivanov\documents\docs\src\mdx-iconify
        Collecting mdx-include==1.4.1
        Downloading mdx_include-1.4.1-py3-none-any.whl (11 kB)
        Collecting mkdocs==1.1.2
        Using cached mkdocs-1.1.2-py3-none-any.whl (6.4 MB)
        Collecting mkdocs-awesome-pages-plugin==2.5.0
        Using cached mkdocs_awesome_pages_plugin-2.5.0-py3-none-any.whl (9.6 kB)
        Collecting mkdocs-material==6.2.6
        Using cached mkdocs_material-6.2.6-py2.py3-none-any.whl (4.0 MB)
        Collecting mkdocs-material-extensions==1.0.1
        Using cached mkdocs_material_extensions-1.0.1-py3-none-any.whl (8.0 kB)
        Collecting nltk==3.5
        Using cached nltk-3.5.zip (1.4 MB)
        Collecting pandoc==1.0.2
        Using cached pandoc-1.0.2.tar.gz (488 kB)
        Collecting ply==3.11
        Using cached ply-3.11-py2.py3-none-any.whl (49 kB)
        Collecting Pygments==2.7.4
        Using cached Pygments-2.7.4-py3-none-any.whl (950 kB)
        Collecting pymdown-extensions==8.1
        Using cached pymdown_extensions-8.1-py2.py3-none-any.whl (206 kB)
        Collecting python-dateutil==2.8.1
        Using cached python_dateutil-2.8.1-py2.py3-none-any.whl (227 kB)
        Collecting PyYAML==5.4.1
        Downloading PyYAML-5.4.1-cp38-cp38-win_amd64.whl (213 kB)
            |████████████████████████████████| 213 kB 2.2 MB/s
        Collecting rcslice==1.1.0
        Downloading rcslice-1.1.0-py3-none-any.whl (5.2 kB)
        Collecting regex==2020.11.13
        Downloading regex-2020.11.13-cp38-cp38-win_amd64.whl (270 kB)
            |████████████████████████████████| 270 kB 3.2 MB/s
        Requirement already satisfied: six==1.15.0 in c:\users\ivan ivanov\miniconda3\lib\site-packages (from -r requirements.txt (line 28)) (1.15.0)
        Collecting tornado==6.1
        Downloading tornado-6.1-cp38-cp38-win_amd64.whl (422 kB)
            |████████████████████████████████| 422 kB 3.3 MB/s
        Collecting tqdm==4.56.0
        Using cached tqdm-4.56.0-py2.py3-none-any.whl (72 kB)
        Collecting wcmatch==8.0.1
        Using cached wcmatch-8.0.1-py3-none-any.whl (38 kB)
        Building wheels for collected packages: future, livereload, nltk, pandoc
        Building wheel for future (setup.py) ... done
        Created wheel for future: filename=future-0.18.2-py3-none-any.whl size=491062 sha256=6eccb6c0f3c642bc76e2ce198515891f38e393defce33e828fe4785ee7737aee
        Stored in directory: c:\users\ivan ivanov\appdata\local\pip\cache\wheels\8e\70\28\3d6ccd6e315f65f245da085482a2e1c7d14b90b30f239e2cf4
        Building wheel for livereload (setup.py) ... done
        Created wheel for livereload: filename=livereload-2.6.3-py2.py3-none-any.whl size=24718 sha256=2348eb92ead36d6bc15cb93510fbab3b47b2246bf4d908ca4de63d3775891299
        Stored in directory: c:\users\ivan ivanov\appdata\local\pip\cache\wheels\48\d7\34\372e0521bd5c9f6dcdff307e37ef6f9c00c1e1e2afc9707b5c
        Building wheel for nltk (setup.py) ... done
        Created wheel for nltk: filename=nltk-3.5-py3-none-any.whl size=1434681 sha256=cda80ee2ea43073c38678da6600d56dfd4084b4fc3cf309b62c75dbf5b275a61
        Stored in directory: c:\users\ivan ivanov\appdata\local\pip\cache\wheels\ff\d5\7b\f1fb4e1e1603b2f01c2424dd60fbcc50c12ef918bafc44b155
        Building wheel for pandoc (setup.py) ... done
        Created wheel for pandoc: filename=pandoc-1.0.2-py3-none-any.whl size=19996 sha256=3b90c26920822998c45e2343ec803e0482ee77faa5fe406ff0f51428b2b14876
        Stored in directory: c:\users\ivan ivanov\appdata\local\pip\cache\wheels\a4\b9\34\3e82b9444401c2199d721240a388499a262d2e2ad37f6f3fa7
        Successfully built future livereload nltk pandoc
        Installing collected packages: bracex, click, cyclic, future, MarkupSafe, Jinja2, joblib, tornado, livereload, lunr, Markdown, 
        markdown-captions, python-dateutil, markdown-toc, mdx-iconify, rcslice, mdx-include, PyYAML, mkdocs, wcmatch, mkdocs-awesome-pages-plugin, mkdocs-material-extensions, pymdown-extensions, Pygments, mkdocs-material, regex, tqdm, nltk, ply, pandoc
        Running setup.py develop for mdx-iconify
        Attempting uninstall: tqdm
            Found existing installation: tqdm 4.51.0
            Uninstalling tqdm-4.51.0:
            Successfully uninstalled tqdm-4.51.0
        Successfully installed Jinja2-2.11.2 Markdown-3.3.3 MarkupSafe-1.1.1 PyYAML-5.4.1 Pygments-2.7.4 bracex-2.0.1 click-7.1.2 cyclic-1.0.0 future-0.18.2 joblib-1.0.0 livereload-2.6.3 lunr-0.5.8 markdown-captions-2 markdown-toc-1.2.6 mdx-iconify mdx-include-1.4.1 mkdocs-1.1.2 mkdocs-awesome-pages-plugin-2.5.0 mkdocs-material-6.2.6 mkdocs-material-extensions-1.0.1 nltk-3.5 pandoc-1.0.2 ply-3.11 pymdown-extensions-8.1 python-dateutil-2.8.1 rcslice-1.1.0 regex-2020.11.13 tornado-6.1 tqdm-4.56.0 wcmatch-8.0.1   
        (qgisbg)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        ```
    === "Обяснения"
        С `pip` лесно се инсталират допълнителни модули в Python. Допълнителните модули спестяват много работа в писането на код, защото някой вече е създал дадената функционалност. Списъкът с необходимите допълнителни модули и техните версии е описан в `requirements.txt`. Затова с `-r requrements.txt`, което е накратко от `--requirement requirements.txt`, командваме `pip` да инсталира всичко необходимо.

8. Стартираме сървъра, през който ще разглеждаме QGIS.бг докс локално с командата `mkdocs serve` и отваряме адреса [http://127.0.0.1:8000](http://127.0.0.1:8000). Последния ред трябва да съдържа `INFO:livereload:Start watching changes`, което означава че ако някой от файловете от проекта бъде променен междувременно, сървърът автоматично ще засече промяната, ще се рестартира и ще представи новата версия. За да спрем изпълнението сервирането, натискаме ++ctrl+c++.

    === "Команда"
        ```
        mkdocs serve
        ```
    === "Изход"
        ```
        (qgisbg)
        Ivan Ivanov@LAPTOP-Q3S31RLD MINGW64 ~/Documents/docs (master)
        $ mkdocs serve
        INFO    -  Building documentation... 
        INFO    -  Cleaning site directory 
        INFO    -  Documentation built in 3.59 seconds 
        [I 210205 00:54:39 server:335] Serving on http://127.0.0.1:8000
        INFO:livereload:Serving on http://127.0.0.1:8000
        [I 210205 00:54:39 handlers:62] Start watching changes
        INFO:livereload:Start watching changes
        ```
    === "Обяснения"
        `mkdocs` е един от допълнителните модули, които инсталирахме. Той се грижи markdown файловете от това хранилище да се превърнат в сайт. Неговата роля може да бъде сравнена с Wordpress при правенето на сайтове. `mkdocs serve` указва да "сервира" текущия сайт, т.е. да бъде достъпен от браузъра. Затова и като отворим http://127.0.0.1:8000 виждаме QGIS.бг докс. Важно е да се отбележи, че за разлика от командите досега, тази не приключва докато не затворим терминала или натиснем ++ctrl+c++.

9. Готово!

{! includes/troubleshoot.md !}
