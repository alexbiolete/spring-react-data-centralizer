# Data Centralizer

A simple (unfinished) application for centralizing the data from reports in Excel/Spreadsheet format and manipulate it to generate a new report.

As an example I created a microservice "First" which handles data about potential candidates for hiring, a microservice "Second" which handles data about job positions and in the microservice "Generate" it should gather data from the other two microservices and generate a new report based on it, which can be exported in Excel/Spreadsheet format.

## Technology stack

- Backend: **Spring**
  - Spring Data JPA (MySQL)
  - Apache POI
- Frontend (Web): **React.js**
  - TypeScript (JavaScript ES6)
  - React Router
  - Sass
  - CRACO
  - TailwindCSS
- Frontend (Mobile): **React Native**
  - TypeScript (JavaScript ES6)
  - Expo
  - React Navigation (Bottom Tabs, Native Stack)
  - React Native Vector Icons
  - React Table

## API endpoints
- "First" microservice
  - GET /api/first - returns data
  - POST /api/first/import - imports file and saves its data into the DB
  - GET /api/first/export - exports data in Excel/Spreadsheet file
- "Second" microservice
  - GET /api/second - returns data
  - POST /api/second/import - imports file and saves its data into the DB
  - GET /api/second/export - exports data in Excel/Spreadsheet file
- "Generated" microservice
  - GET /api/generated - returns data
  - GET /api/generated/gather - calls method to gather data from the other microservices
  - GET /api/generated/export - exports data in Excel/Spreadsheet file

## License
This project is licensed under the GNU GPLv3 License - see the [LICENSE](/LICENSE) file for details.

## Contact developer
If you are interested in using this project or if you just want to reach out to me, please send an e-mail at [alexbiolete@pm.me](mailto:alexbiolete@pm.me).
