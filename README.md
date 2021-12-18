# K6 Performance Tests 
## Table of contents
* [Resume](#resume)
* [Pre-requirements](#pre-requirements)
* [Setup](#setup)
* [Dependencies](#dependencies)
* [Reports](#reports)
## Resume
The main aim of this project is to share the K6 backbone and basic examples about how to implement K6 Performance Tests. We use the Todoist API as reference, you can find it in the following: [link](https://developer.todoist.com/guides/#developing-with-todoist)
## Pre-requirements
* To have installed a node version [managment](https://github.com/nvm-sh/nvm)
* To have installed the ``v16.11.1`` node version or higher
## Setup
* ``$ cd ../repository_folder``
* ``$ git clone ...``
* For MacOS run ``$ brew intall k6``. For any other S.O. go to the next [link](https://k6.io/docs/getting-started/installation)
* Install all the [Dependencies](#dependencies)
* Finally, run: ``$ k6 run --config "./utils/config.json" --console-output "./logs/logs.log" ./scripts/script_name.js``
## Dependencies
* Install the HTML report ``npm install k6-html-reporter --save-dev``
## Reports
To be able to see the report in HTML format run the next command: ``npm run html:report`` once the execution has finished.
## Example
<img width="1345" alt="k6" src="https://user-images.githubusercontent.com/92599376/146653158-de45cd0b-d00c-4faf-a3da-44c27502100f.png">
