
    const express = require('express');
    const webPush = require('web-push');
    const bodyParser = require('body-parser');
    const path = require('path');

    const app = express();

    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, 'Client')));

    const publicVapidKey = "BKj8xTi-oib97fmdv_MSxsVEYZ8cmQ4C5jqOn1ZxK5K_r55HNQ9HFMbqadKJJL-Jt20V68p-lsWIssEErXZsEZE";
    const privateVapidKey = "M0oo1FMXQAL-6oU4V7hBpL-MoBl0qHxFmwPalLWZkqQ";

    webPush.setVapidDetails('mailto:test@example.com', publicVapidKey, privateVapidKey);

    app.post('/subscribe', (req, res) => {
      const subscription = req.body

      res.status(201).json({});

      const payload = JSON.stringify({
        title: 'Push notifications of coronaVirus with Service Workers',
      });

      webPush.sendNotification(subscription, payload)
        .catch(error => console.error(error));
    });

    app.set('port', process.env.PORT || 5000);
    const server = app.listen(app.get('port'), () => {
      console.log(`Express running → PORT ${server.address().port}`);
    });