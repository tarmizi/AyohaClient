
Ext.define('ianMizi.store.AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoStore', {
});





var _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_AyohaRewardContestLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNo',
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







var _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_ContestCampaignRedeem_LoadByContestRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/ContestCampaignRedeem_LoadByContestRedeemStatus',
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