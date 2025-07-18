
Ext.define('ianMizi.store.AyohaStoreCart.AyohaStoreCartLoadCartAyohaStore', {
});
var AyohaStoreCartRouteFunction='AyohaStoreCartLoadCartAyohaStore';
var AyohaStoreCartRouteMethod='GET';
var _DataStore_AyohaStoreCartLoadCartAyohaStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaStoreCart.AyohaStoreCartModel',
    id: '_AyohaStoreCartLoadCartAyohaStoreID',
    proxy: {
        type: 'ajax',
       // url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStore',
        url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            //read: 'GET'
            read: AyohaStoreCartRouteMethod
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

