Ext.define('ianMizi.store.PointCampaignRedeem.PointCampaignRedeemLoadByPointRedeemStatusStore', {
   
});




var _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.PointCampaignRedeem.PointCampaignRedeemModel',
    id: '_PointCampaignRedeemLoadByPointRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemLoadByPointRedeemStatus',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },



});