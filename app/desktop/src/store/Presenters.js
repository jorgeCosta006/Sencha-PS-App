Ext.define('Sencha-PS-App.store.Presenters', {
    extend: 'Ext.data.Store',

    requires: [
        'Sencha-PS-App.model.Presenter',
        'Ext.util.Filter'
    ],

    model: 'Sencha-PS-App.model.Presenter',
    autoLoad: true,
    storeId: 'Presenters',
    pageSize: 999,
    filters: {
        filterFn: function(item) {
            return false;
        }
    }
})