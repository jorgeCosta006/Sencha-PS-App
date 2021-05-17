Ext.define("Sencha-PS-App.controller.SessionController", {
    extend: 'Ext.app.Controller',

    stores: ['Sessions', 'Presenters', 'SessionPresenters'],

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

                    // var spStore = this.getSessionPresentersStore();
                    // Ext.Array.each(spStore, function(rec){
                    //     // if(rec.get("sessionId") === sessionId){
                    //     //     presenterIds.push(rec.get('presenterId'));
                    //     // }
                    // });

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
                }
            }
        })
    }
})