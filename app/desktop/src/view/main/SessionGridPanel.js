Ext.define("SessionGridPanel", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sessiongridpanel',
    listeners: {
        itemdblclick: function(gridpanel, record, item, e){
            var formWindow = Ext.create('SessionForm');
            formWindow.show();
        }
    },
    store: {
        fields: [
            'id',
            {
                name: 'title',
                sortType: 'asUCText'
            },
            'approved',
            {
                dateFormat: 'c',
                name: 'sessionTimeDateTime',
                sortType: 'asDate',
                type: 'date'
            },
            {
                convert: function (v, rec) {
                    var convertIt = Ext.util.Format.dateRenderer('m/d/Y g:i a'),
                        pretty = convertIt(rec.get("sessionTimeDateTime"));
                    return pretty;
                },
                name: 'sessionTimePretty',
                type: 'string'
            }
        ],
        autoLoad: true,
        autoSync: true,
        proxy: {
            type: 'rest',
            url: '/data/sessions.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        sorters: [
            { property: 'title' }
        ],
        groupField: 'sessionTimeDateTime'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'id',
            text: 'Id'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'title',
            text: 'Title',
            flex: 1,
            minWidth: 100,
            width: 75
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'approved',
            text: 'Approved'
        },
        {
            dataIndex: 'sessionTimePretty',
            text: 'Session Start Time',
            width: 180
        }
    ],
    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: [
                '{[values.rows[0].get(\'sessionTimePretty\')]} (Session Count: {rows.length})'
            ]
        }
    ]
});