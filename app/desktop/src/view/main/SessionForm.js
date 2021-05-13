Ext.define("SessionForm", {
    extend: "Ext.window.Window",
    alias: 'widget.sessionForm',
    padding: 5,
    width: 600,
    title: 'Edit Sessions',
    model: 'true',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            title: "",
            defaults: {
                labelWidth: 90,
                margin: '0 0 10 0',
                anchor: '90%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'title',
                    fieldLabel: 'Title'
                },
                {
                    xtype: 'checkboxfield',
                    name: 'approved',
                    fieldLabel: 'Approved'
                }
            ]
        }
    ]
})