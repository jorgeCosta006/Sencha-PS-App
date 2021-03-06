Ext.define("Sencha-PS-App.controller.SessionController", {
    extend: 'Ext.app.Controller',

    stores: ['Presenters', 'SessionPresenters'],

    refs: [
        {
            ref: 'details',
            selector: ' detailspanel'
        },
        {
            ref: 'presenters',
            selector: ' presenters'
        },
        {
            ref: 'sessions',
            selector: ' sessionsgripanel'
        }
    ],

    init: function () {
        this.control({
            "sessiongridpanel": {
                itemdblclick: function (gridpanel, record, item, e) {
                    var formWindow = Ext.create('Sencha-PS-App.view.SessionForm');

                    var form = formWindow.down('form');
                    form.loadRecord(record);

                    formWindow.show();
                },
                select: function (rowmodel, record, index, eOpts) {
                    var sessionId = record.get("id");

                    var presenterIds = [];

                    this.getSessionPresentersStore().clearFilter();
                    this.getSessionPresentersStore().filterBy(function (rec) {
                        if (rec.get("sessionId") === sessionId) {
                            presenterIds.push(rec.get('presenterId'));
                        }
                    });

                    this.getPresentersStore().clearFilter();
                    this.getPresentersStore().filterBy(function (rec) {
                        var foundMatch = false;
                        for (var i = 0; i < presenterIds.length; i++) {
                            if (rec.get("id") === presenterIds[i]) {
                                foundMatch = true;
                            }
                        }
                        return foundMatch;
                    });

                    var sessions = record.getData();
                    sessions.presenters = [];
                    this.getPresentersStore().each(function(presenterRecord){
                        sessions.presenters.push(presenterRecord.getData());
                    })

                    var detailsPanel = this.getDetails();
                    this.getPresentersStore().each(function (presenterRecord){
                        sessions.presenters.push(presenterRecord.getData());
                    })
                    detailsPanel.update(sessions);
                }
            }
        })
    }
});