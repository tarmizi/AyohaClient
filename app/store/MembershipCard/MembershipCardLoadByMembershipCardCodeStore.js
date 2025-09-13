Ext.define('ianMizi.store.MembershipCard.MembershipCardLoadByMembershipCardCodeStore', {
   
});



var _DataStore_MembershipCardLoadByMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'ianMizi.model.MembershipCard.MembershipCardMembershipsModel',
    id: '_MembershipCardLoadByMembershipCardCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByMembershipCardCode',
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