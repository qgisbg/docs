---
title: Как да инсталираме Miniconda в Windows?
tags: anaconda, miniconda, conda, windows, install
---

# Как да инсталираме Miniconda в Windows?

1. Отваряме страницата за изтегляне на Miniconda [тук](https://docs.conda.io/en/latest/miniconda.html) и изтегляме версията за Windows и Python 3.8 или по-нов. За директен линк за изтегляне на последната 64-битова версия натиснете [тук](https://repo.anaconda.com/miniconda/Miniconda3-latest-Windows-x86_64.exe).
1. Стартираме файла с име `Miniconda3-latest-Windows-x86_64.exe` и следваме настройките по подразбиране до екрана с `Advanced Installation Options`. На този екран отбелязваме с отметка `Add Miniconda3 to my PATH environment variable` и премахваме отметката на `Register Miniconda3 as my default Python 3.8`, въпреки препоръките в червено да не променяме тези настройки по подразбиране.
1. Потвърждаваме, че инсталацията е завършила успешно, ако открием `Anaconda Powershell Prompt` в старт менюто.
1. Потвърждаваме, че сме избрали правилните отметки при инсталация, като стартираме `Windows Powershell`, напишем командата `conda --version` (за проверка на инсталираната версия). Както всяка команда, и тук завършваме с натискане на `Enter`. Очакваният резултат е `conda 4.9.2` (числата може да са различни). Например:
```
(base) PS C:\Users\Ivan Ivanov> conda --version
conda 4.9.2
```
1. Готово!

{! includes/troubleshoot.md !}
