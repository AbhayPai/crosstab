export default function View(config) {
    'use strict';

    this.render = function() {
        try {
            document.getElementById(config.selectorId).innerHTML =
                require('ViewPath/Templates/Handlebars/' +
                config.templateName + '.handlebars')(config.templateData);
        } catch (e) {
            // Do nothing.
        }
    };
}
