Ext.define('Sencha-PS-App.model.Session', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    fields: [
        'id',
        { name: 'title', sortType: 'asUCText' },
        { name: 'approved', type: 'boolean' },
        {
            dateFormat: 'c',
            name: 'sessionTimeDateTime',
            sortType: 'asDate',
            type: 'date'
        },
        {
            convert: function (v, rec) {
                var converIT = Ext.util.Format.dateRenderer,
                pretty = converIT(rec.get("sessionTimeDateTime"))
                return pretty;
            },
            name: 'sessionTimePretty',
            type: 'string'
        }
    ],
    proxy: {
        type: 'rest',
        url: '/data/sessions.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
})