
Ext.define('ianMizi.store.AyohaStoreOrder.AyohaStoreOrderPendingOrderMainDashbordStore', {
});

var _DataStore_AyohaStoreOrderPendingOrderMainDashbordStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderPeding_MainDashboardModel',
    id: '_AyohaStoreOrderPendingOrderMainDashbordStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderPendingOrderMainDashbord',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },



    //autoLoad: true

});





var _DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreOrder.AyohaStoreOrderPeding_MainDashboardModel',
    id: '_AyohaStoreOrderPendingOrderMainDashbord_CountStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderPendingOrderMainDashbord_Count',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },



    //autoLoad: true

});