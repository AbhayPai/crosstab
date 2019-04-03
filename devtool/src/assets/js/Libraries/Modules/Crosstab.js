import CoreCrosstab from 'crosstab';

export default function Crosstab(config) {
    let Name = '';
    let Public = this;
    let Prop = Public;

    Public.setOptions = function() {
        Prop.defaults = {
            eventName: 'crosstabEvent',
            eventData: {},
            eventDestination: ''
        };
        Prop.options = config || {};

        for (Name in Prop.defaults) {
            if (Prop.options[Name] === undefined) {
                Prop.options[Name] = Prop.defaults[Name];
            }
        }

        return Prop.options;
    };

    Public.sendMessage = function() {
        Public.setOptions();

        CoreCrosstab.broadcast(
            Prop.options.eventName,
            Prop.options.eventData,
            Prop.options.eventDestination
        );
    };

    Public.recieveMessage = function() {
        Public.setOptions();

        CoreCrosstab.on(
            Prop.options.eventName, function (message) {
                if (App.callback.allCrosstabMessage) {
                    App.callback.allCrosstabMessage(message);
                }
            }
        );
    };
}
