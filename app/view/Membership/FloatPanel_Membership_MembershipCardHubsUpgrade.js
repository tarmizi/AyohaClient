Ext.define('ianMizi.view.Membership.FloatPanel_Membership_MembershipCardHubsUpgrade', {

});

var _FloatPanel_Membership_MembershipCardHubsUpgrade;


var isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';






function FloatPanel_Membership_MembershipCardHubsUpgrade() {

    _FloatPanel_Membership_MembershipCardHubsUpgrade =
    Ext.create('Ext.Container', {
        zIndex: 20,
        xtype: 'container',
        height: '100%',
        width: '100%',
        id: 'FloatPanel_Membership_MembershipCardHubsUpgradeID',
        draggable: false,
        centered: true,
        modal: false, // Use Sencha's modal handling
        hideOnMaskTap: false, // Prevent closing on tap        
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'

        },
        showAnimation: {
            type: 'popIn',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
           
        },
       style:ayohaThemeColor_Body(),
        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              style: ' background-color:transparent;',
               layout: {
                type: 'vbox',
                pack: 'start',  // Center the white box vertically
                align: 'center'  // Center the white box horizontally
            },
              
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height: ayoha_HeaderHeight(),
                        style:ayohaThemeColor_Header(),
                        id: 'containerFloatPanel_Membership_MembershipCardHubsUpgradeHeader',
                       
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },
                        // hidden:true,
                        items:
                               [


                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_Membership_MembershipCardHubsUpgradeBack',
                                                 height: 30,
                                                 width: 35,
                                                 margin: '5 0 0 10',
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                // html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     // FloatPanel_Membership_MembershipCardHubsUpgradeHide();
                                                     // FloatPanel_Membership_MembershipCardHubsUpgrade_AddCardHide();
                                                     isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';
                                                     _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(Ext.fx.Animation({
                                                         type: 'slideOut',
                                                         direction: 'left',
                                                         easing: 'cubic-bezier(.7,0,.7,1)',
                                                         duration: 250

                                                     }));
                                                     RemovePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");

                                                 }
                                             },

                                              {
                                                  xtype: 'spacer',

                                              },
                                              {
                                                margin: '0 15 0 0',
                                                id: 'htmlFloatPanel_Membership_MembershipCardHubsUpgrade_TitleHeaderTxt',
                                               html:ayohaTheme_HeaderText('Merchant Membership Cards'),
                                               // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:18px;color:white">Ayoha Merchant Review</div>',
                                            },                                
     

                                             


                                                    {
                                                        xtype: 'button',
                                                        hidden:true,
                                                        id: 'btnFloatPanel_Membership_MembershipCardHubsUpgrade_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {

                                                            isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';

                                                            _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                            RemovePages(_FloatPanel_Membership_MembershipCardHubsUpgrade, "isFloatPanel_Membership_MembershipCardHubsUpgradeOpen");
                                                            //FloatPanel_Membership_MembershipCardHubsUpgrade_AddCardHide();
                                                        }
                                                    },









                               ]

                    },
                    {
                        xtype: 'container',

                        width: '100%',
                        height: '100%',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            




                            {
                                xtype: 'list',
                                id: 'FloatPanel_Membership_MembershipCardHubsUpgradeList',
                                cls: 'ayohaHubList', // ✅ penting untuk center + styling
                                height: '100%',
                                width: '100%',
                                style: 'background-color:rgba(255, 255, 255, 0); border-radius:0;',
                                scrollable: { direction: 'vertical', indicators: false },
                                disableSelection: true,
                                itemHeight: 'auto',
                              
                                itemTpl: [
                                  '<div class="ayohaHubRow">',
                                    '<div class="ayohaHubCard" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)">',
                              
                                      '<div class="ayohaHubHero" style="background-image:url(\'{MembershipCardBackgroundImg_back}\');">',
                                    //  '<div class="ayohaCheckInPill">Today Check In: 1</div>',

                                      '<div class="ayohaCheckInPill ' +
                                      '<tpl if="TodayCheckInCount == 0">zero</tpl>' +
                                      '<tpl if="TodayCheckInCount != 0">active</tpl>' +
                                    '">Today Check In: {TodayCheckInCount}</div>',
                                    



                                        '<div class="ayohaMiniCard" style="background-image:url({MembershipCardBackgroundImg});">',
                                          '<div class="ayohaMiniTop">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</div>',
                              
                                          '<div class="ayohaMiniMid">',
                                            '<div class="ayohaMiniType">{MembershipCardType}</div>',
                                            '<div class="ayohaMiniNo">123 4567</div>',
                                            '<div class="ayohaMiniName">MEMBER NAME</div>',
                                          '</div>',
                              

                                          '<div class="ayohaMiniBottom">' +
                                          '<div class="ayohaMiniCol">' +
                                            '<div class="k">Member Since</div>' +
                                            '<div class="v">Upon approval</div>' +
                                          '</div>' +
                                          '<div class="ayohaMiniCol right">' +
                                            '<div class="k">Valid Until</div>' +
                                            '<div class="v">Dec 0000</div>' +
                                          '</div>' +
                                        '</div>',
                                        



                                        //   '<div class="ayohaMiniBottom">',
                                        //     '<div class="ayohaMiniCol">',
                                        //       '<div class="k">Member Since</div>',
                                        //       '<div class="v">After Approved</div>',
                                        //     '</div>',
                                        //     '<div class="ayohaMiniCol right">',
                                        //       '<div class="k">Valid Until</div>',
                                        //       '<div class="v">{ModifiedStrExpiredDate}</div>',
                                        //     '</div>',
                                        //   '</div>',
                                        '</div>',
                              
                                        '<div class="ayohaHubOverlay">',
                                        //   '<div class="ayohaHubTagline">{ModifiedMarketingTagline}</div>',
                                          '<div class="ayohaHubCta">{ModifiedGetItNow}</div>',
                                          '<div class="ayohaHubFee">Membership from RM{MembershipCardFee}</div>',
                                        '</div>',
                              
                                      '</div>',
                              
                                      '<div class="ayohaHubInfo">',
                                        '<div class="ayohaHubInfoTop">',
                                          '<div class="ayohaHubName">{EnterprisesName}</div>',
                                          '<div class="ayohaHubType">{BusinessTypeGroup}</div>',
                                        '</div>',
                              
                                        '<div class="ayohaHubAddr">{ModifiedEnterpriseAddress}</div>',
                              
                                        '<div class="ayohaHubRating">',
                                          '{ModifiedCountStarCountStar}',
                                          '<a class="ayohaHubReviews" href="javascript:void(0)">{CountReviewer} Reviews</a>',
                                        '</div>',
                                      '</div>',
                              
                                    '</div>',
                                  '</div>'
                                ].join('')
                              }
                              







  
                    //         {
                    //             xtype: 'list',
                    //           id: 'FloatPanel_Membership_MembershipCardHubsUpgradeList',
                    //             height: '100%',
                    //             width: '100%',
                    //             margin: '0 0 0 0',
                    //             style: 'background-color:rgba(255, 255, 255, 0); border-radius:0;',
                    //             scrollable: {
                    //               direction: 'vertical',
                    //               indicators: false
                    //             },
                               
                    //             disableSelection: true,
                                
                    //             itemHeight: 'auto',
                               
                              
                              
                             
                              
                    //             itemTpl: [
                    //                 // Outer card wrapper
                    //                 //'<div style="min-width:100vw; max-width:100vw; height:auto; margin:0; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                    //                 '<div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="min-width:88vw; max-width:88vw; margin-right:5vw; box-sizing:border-box; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                    //                   // Background Image Section
                    //                   //'<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8sRD9DXiKgEd0sTh66b2Ljls8laA8hQ0yw&s\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                    //                   '<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'{MembershipCardBackgroundImg_back}\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                  
                    //                     // Membership Card Image (Gold)
                    //                    // '<img src="https://5.imimg.com/data5/KA/JP/TU/SELLER-22794929/gold-membership-card.jpg" alt="Gold Member" ',
                    //                    // 'style="position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.5); z-index:2;">',
                    //                    '<div  style="border:1px solid white;position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px;  z-index:2;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;box-shadow: 5px 2px 18px #888888;">' +
   
                    //                    '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-9px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" ><tr><td style="background-color:transparent;border-color:white;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:33px;color:white" colspan="3">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:8px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:9px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-22px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:8px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:8px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:7px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:8px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-10px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                    //                                                  '</div>'+





                    //                     // Text Overlay
                    //                     '<div style="position:absolute; bottom:0; left:0; width:100%; background-color:rgba(0,0,0,0.5); color:white; padding:2vw; z-index:1;">',
                    //                       '<div style="font-size:3vw; line-height:1.2;">{ModifiedMarketingTagline}</div>',
                    //                       '<div class="blink_me" style="font-size:4.2vw; font-weight:bold;">{ModifiedGetItNow}</div>',
                    //                       '<div style="font-size:3vw;">Membership Fees: RM{MembershipCardFee}</div>',
                    //                     '</div>',
                    //                   '</div>',
                                  
                    //                   // Merchant Info Section
                    //                   '<div style="padding:4vw; background-color:white;">',
                    //                     '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">',
                    //                       '<div style="font-weight:bold; font-size:4.5vw;">{EnterprisesName}</div>',
                    //                       '<div style="display:flex; align-items:center;">',
                    //                        // '<img src="https://cdn-icons-png.flaticon.com/512/2920/2920029.png" width="6vw" style="margin-right:1vw;">',
                    //                         '<span style="font-size:3vw; color:#555;">{BusinessTypeGroup}</span>',
                    //                       '</div>',
                    //                     '</div>',
                                  
                    //                     '<div style="font-size:3.2vw; color:#444;">{ModifiedEnterpriseAddress}</div>',
                                  
                    //                     '<div id:"ModifiedCountStarCountStar" style="margin-top:2vw; font-size:3.2vw; color:#333;">{ModifiedCountStarCountStar} ',
                    //                       '<a href="#" style="color:#3366cc; text-decoration:none;">{CountReviewer} Reviews</a>',
                    //                     '</div>',
                    //                   '</div>',
                    //                 '</div>'
                    //               ].join('')                                 
                              
                    // },
                       
                
                
                
                ]
                    },


                ]
            },

        ]

    });
    return _FloatPanel_Membership_MembershipCardHubsUpgrade;



}








function FloatPanel_Membership_MembershipCardHubsUpgradeShow() {

    Ext.Viewport.remove(_FloatPanel_Membership_MembershipCardHubsUpgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_MembershipCardHubsUpgrade());
    this.overlay.show();
   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");
    isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'Y';
   // Dashboard_MembershipCardHub();

   FloatPanel_Membership_MembershipCardHubsUpgrade_MembershipCardLoadBySubscriberAccNoDashboardMainStore();
    //document.getElementById("input-FloatPanel_Membership_MembershipCardHubsUpgrade_SearchTxt").addEventListener("keyup", MembershipsLoadBySubscriberAccNoStoreOnKeyUp);
 




    
    
}


function  FloatPanel_Membership_MembershipCardHubsUpgrade_MembershipCardLoadBySubscriberAccNoDashboardMainStore() {
   
        globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
        globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
        _DataStore_MembershipCard_LoadforCheck_InStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCard_LoadforCheck_InStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCard_LoadforCheck_In');
        
        _DataStore_MembershipCard_LoadforCheck_InStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    // var allData = records;
        
                    // // Store - MembershipCardFee > 0
                    // var storeWithFee = Ext.create('Ext.data.Store', {
                    //     model: 'ianMizi.model.MembershipCard.MembershipCardModel',
                    //     data: allData.filter(function (record) {
                    //         return record.get('MembershipCardFee') > 0;
                    //     })
                    // });
        
                    // // Store - MembershipCardFee <= 0
                    // var storeFOC = Ext.create('Ext.data.Store', {
                    //     model: 'ianMizi.model.MembershipCard.MembershipCardModel',
                    //     data: allData.filter(function (record) {
                    //         return record.get('MembershipCardFee') <= 0;
                    //     })
                    // });
        
                    // // Store - Top Rated (3.5 stars and above, sorted descending)
                    // var storeTopRated = Ext.create('Ext.data.Store', {
                    //     model: 'ianMizi.model.MembershipCard.MembershipCardModel',
                    //     data: allData
                    //         .filter(function (record) {
                    //             var star = record.get('CountStar');
                    //             return star !== null && star !== undefined && star >= 3.5;
                    //         })
                    //         .sort(function (a, b) {
                    //             return b.get('CountStar') - a.get('CountStar');
                    //         })
                    // });
        
                    // Set stores to list components
                 
                    Ext.getCmp('FloatPanel_Membership_MembershipCardHubsUpgradeList').setStore(_DataStore_MembershipCard_LoadforCheck_InStore);

        
                    console.log('Stores updated based on loaded membership card data.');
                } else {
                    console.log('Failed to load membership card data or no records returned.');
                }
            }
        });
        
    
    
    
    
    
    
    
    
    
    
    }
    


function FloatPanel_Membership_MembershipCardHubsUpgradeHide() {
    // FloatPanel_Membership_MembershipCardHubsUpgrade_AddCardHide();
    if (isFloatPanel_Membership_MembershipCardHubsUpgradeOpen == "Y") {
        _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(); isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';
        RemovePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");
    }
   
}


// //var _DataStore_MembershipsLoadBySubscriberAccNoStore;
// function FloatPanel_Membership_MembershipCardHubsUpgrade_MembershipsLoadBySubscriberAccNoStore() {


//     //console.log(GetCurrAyohaUserAccountNo());

//     //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
//     //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
//     //});
//     //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

//    // alert(GetCurrAyohaUserAccountNo())
//     _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
//     _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo');
//     _DataStore_MembershipsLoadBySubscriberAccNoStore.load();

//     var task = Ext.create('Ext.util.DelayedTask', function () {
      
//         //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
//         //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
//         //});

//         ////  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
//         ////  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
//         ////console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


//         //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

//         //var myStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');
//         //_DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');

//         var count = parseInt(_DataStore_MembershipsLoadBySubscriberAccNoStore.getCount());

      
    
      
//         LoadingPanelHide();
//         Ext.Viewport.setMasked(false);










//     });
//     task.delay(1000);




// }

