# Client Services Performance Tests Suite
## Table of contents
* [Resume](#resume)
* [Pre-requirements](#pre-requirements)
* [Setup](#setup)
* [Dependencies](#dependencies)
* [Reports](#reports)
## Resume
The main aim of this project is to
## Pre-requirements
* To have installed a node version [managment](https://github.com/nvm-sh/nvm)
* To have installed the ``v16.11.1`` node version or higher
## Setup
* ``$ cd ../repository_folder``
* ``$ git clone https://github.com/JesusSClara/performance.git``
* For MacOS run ``$ brew intall k6``. For any other S.O. go to the next [link](https://k6.io/docs/getting-started/installation)
* Install all the [Dependencies](#dependencies)
* Finally, run: ``$ k6 run --config "./utils/config.json" --console-output "./logs/logs.log" ./scripts/script_name.js``
## Dependencies
* Install the HTML report ``npm install k6-html-reporter --save-dev``
## Reports
To be able to see the report in HTML format run the next command: ``npm run html:report` once the execution has finished.
