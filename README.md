[![Maintainability](https://api.codeclimate.com/v1/badges/c2c9bc5b042b4eb28fa2/maintainability)](https://codeclimate.com/github/Anakharsis9/frontend-project-44/maintainability)

### Hexlet tests and linter status:

[![Actions Status](https://github.com/Anakharsis9/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Anakharsis9/frontend-project-44/actions)

# Игры разума

## Описание

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

## Минимальные требования

- **Node.js**: Версия 20.0.0 или выше

## Инструкции по установке

1. Убедитесь, что у вас установлены Node.js и npm. Проверить установку можно с помощью команд:
   ```bash
   node -v
   npm -v
   ```
2. Установите все зависимости:
   ```bash
   make install
   ```
3. Запустите команду:
   ```bash
   make publish
   ```
4. Далее локально опубликуйте пакет:
   ```bash
   npm link
   ```
5. После можете запускать игры описанные в следующем шаге

## Игры:

- **Калькулятор**: Арифметические выражения, которые необходимо вычислить.
  ```bash
   brain-calc
  ```
  [Ссылка на видео пример игры](https://asciinema.org/a/cmyohCskUBvyj4L7DJ1DIGQq5)
- **Прогрессия**: Поиск пропущенных чисел в последовательности чисел.
  ```bash
   brain-progression
  ```
  [Ссылка на видео пример игры](https://asciinema.org/a/eybQcszi1Czkss3Zx2XaorC6R)
- **Определение четного числа**.
  ```bash
   brain-even
  ```
  [Ссылка на видео пример игры](https://asciinema.org/a/zAiEmHnnBm6pbOQAqIXCl1tsW)
- **Определение наибольшего общего делителя**.
  ```bash
   brain-gcd
  ```
  [Ссылка на видео пример игры](https://asciinema.org/a/HV4T71rsyTyyWVk7rdL7LFIDF)
- **Определение простого числа**.
  ```bash
   brain-prime
  ```
  [Ссылка на видео пример игры](https://asciinema.org/a/2RIpaFxpKAaoQwPFM5loezRLi)
