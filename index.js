const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('<iframe src="https://giphy.com/embed/Efpfk11XWXwTSKqgV2" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>');
});

app.listen(PORT, function () {
    console.log('Server is running, port ' + PORT);
});