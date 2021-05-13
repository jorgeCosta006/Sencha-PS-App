Ext.define("SessionGridPanel", {
  extend: 'Ext.grid.Panel',
  alias: 'widget.sessiongridpanel',
  store: {
    fields: ['id', 'title', 'approved'],
    data: [
      { id: 101, title: 'Javascript for dummies', approved: true },
      { id: 102, title: 'C# for smarties', approved: false },
      { id: 103, title: 'ExtJS for everyone', approved: true }
    ]
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
    }
  ]
});

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
      }
      ,
      { xtype: 'splitter', width: 1 },
      {
        html: '<b>Speakers Panel</b>',
        flex: 1,
        // style: {
        //   border: '2px solid blue'
        // },
        // resizable: true,
        xtype: 'panel'
      }]
  },
  {
    region: 'center',
    html: '<b>Details Panel</b>',
    flex: 1,
    // style: {
    //   border: '2px solid blue'
    // },
    // resizable: true,
    xtype: 'panel',
    title: 'Details Panel',
    collapsible: true,
    collapsed: true,
    // collapseDirection: 'right'
  }]
});

Ext.define('Sencha-PS-App.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  items: [{ myContainer }]
});