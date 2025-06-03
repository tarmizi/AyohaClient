Ext.define('ianMizi.store.MembershipCard.MembershipCardLoadBySubscriberAccNoDashboardMainStore', {
   
});



var _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCardLoadBySubscriberAccNoDashboardMainStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain',
        actionMethods: {
            read: 'GET'
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





var _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetailID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetail',
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
});