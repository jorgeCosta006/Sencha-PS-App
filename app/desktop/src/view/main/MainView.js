var myContainer = Ext.create('Ext.container.Viewport', {
  layout: {
    type: 'border'
  },
  items: [{
    region: 'west',
    layout: {
      type: 'vbox',
      align: 'stretch'
    },
    flex: 1,
    split: true,
    items: [
      {
        xtype: 'sessiongridpanel',
        flex: 3
      },
      {
        xtype: 'splitter',
        width: 1
      },
      {
        xtype: 'presenters',
        flex: 1
      }
    ]
  },
  {
    xtype: 'detailspanel',
    flex: 2,
    region: 'center',
    split: true
  }]
});

Ext.define('Sencha-PS-App.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  items: [{ myContainer }]
});