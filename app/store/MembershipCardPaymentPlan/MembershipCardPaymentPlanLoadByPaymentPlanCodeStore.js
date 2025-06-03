Ext.define('ianMizi.store.MembershipCardPaymentPlan.MembershipCardPaymentPlanLoadByPaymentPlanCodeStore', {  
});




// var _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore = Ext.create('Ext.data.Store', {

//     model: 'ianMizi.model.MembershipCardPaymentPlan.MembershipCardPaymentPlanModel',
//     id: '_MembershipCardPaymentPlanLoadByPaymentPlanCodeStoreID',
//     proxy: {
//         type: 'ajax',
//         url: GetAPIurl() + '/MembershipCardPaymentPlan/MembershipCardPaymentPlanLoadByPaymentPlanCode',
//         actionMethods: {
//             read: 'POST'
//         },
//         reader: {
//             type: 'json',
//             rootProperty: 'results',
//             totalProperty: 'total',
//             successProperty: 'success',
//             messageProperty: 'message'
//         }
//     },
// });





var _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore = Ext.create('Ext.data.Store', {

   // model: 'ianMizi.model.MembershipCardPaymentPlan.MembershipCardPaymentPlanModel',
    model:'ianMizi.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCardPaymentPlanLoadByPaymentPlanCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion',
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