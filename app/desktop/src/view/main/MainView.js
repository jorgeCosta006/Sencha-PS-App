// var sessionGridPanel = Ext.create("Ext.grid.Panel", {
//   store: {
//     fields: ['id', 'title', 'approved'],
//     data: [
//       {id: 101, title: 'Javascript for dummies', approved: true},
//       {id: 102, title: 'C# for smarties', approved: false},
//       {id: 103, title: 'ExtJS for everyone', approved: true}
//     ]
//   },
//   columns: [
//     {
//       xtype: 'gridcolumn',
//       dataIndex: 'id'
//     },
//     {
//       xtype: 'gridcolumn',
//       dataIndex: 'title'
//     },
//     {
//       xtype: 'gridcolumn',
//       dataIndex: 'approved'
//     }
//   ]
// });

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
    items: [{
      html: '<b>Sessions Panel</b>',
      flex: 2,
      // style: {
      //   border: '2px solid blue'
      // },
      // resizable: true,
      xtype: 'panel'
    },
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