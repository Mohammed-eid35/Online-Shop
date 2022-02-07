const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');


dotenv.config({path : 'backend/config/config.env'});

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})