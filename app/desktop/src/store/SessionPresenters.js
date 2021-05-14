Ext.define('Sencha-PS-App.store.SessionPresenters', {
    extend: 'Ext.data.Store',

    requires: [
        'Sencha-PS-App.model.SessionPresenter',
        'Ext.util.Filter'
    ],

    model: 'Sencha-PS-App.model.SessionPresenter',
    autoLoad: true,
    storeId: 'SessionPresenters',
    pageSize: 999,
    filters: {
        filterFn: function(item) {
            return false;
        }
    }
})