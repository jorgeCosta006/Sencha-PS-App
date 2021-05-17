Ext.define('Sencha-PS-App.view.Presenters', {
    extend: 'Ext.grid.Panel',

    title: 'Presenter(s)',
    alias: 'widget.presenters',
    requires: [ 'Sencha-PS-App.store.Presenters'],

    store: { type: 'Presenters' },
    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'firstLast',
            text: 'Presenter Name',
            flex: 1
        },
        {
            xtype: 'numbercolumn',
            dataIndex: 'id',
            text: 'id'
        }
    ]
})