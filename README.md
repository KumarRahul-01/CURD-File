concurrently npm run dev and npm run json-server.
npm start.

"json-server": "json-server --watch src/database/db.json  --port 3005",
    "start": "concurrently \"npm run dev\" \"npm run json-server\"",

    "dependencies": {
    "axios": "^1.6.8",
    "concurrently": "^8.2.2",
    "json-server": "^1.0.0-alpha.23",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
