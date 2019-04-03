require('SassPath/index.scss');

import BaseController from 'ControllerPath/BaseController';

import Crosstab from 'LibrariesPath/Modules/Crosstab';

new BaseController().registerController({
    preprocess: function() {
        new Crosstab({
            eventName: 'crosstabEvent',
            eventData: {
                test: 'testing data'
            }
        }).sendMessage();
    },

    render: function() {
    },

    ready: function() {
        new Crosstab({
            eventName: 'crosstabEvent'
        }).recieveMessage();

        App.callback.allCrosstabMessage = function(message) {
            if (message.event === 'crosstabEvent') {
                document.getElementById('app').innerHTML = 'id = ' +
                message.timestamp;
            }
        };
    }
});
