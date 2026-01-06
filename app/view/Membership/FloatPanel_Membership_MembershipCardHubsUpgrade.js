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
                               // itemHeight: 430,

                                useSimpleItems: true,
                                bufferSize: 5,
                                // listeners: {
                                //     painted: function(list){
                                //       var scroller = list.getScrollable().getScroller();
                                //       scroller.on({
                                //         scrollstart: function(){ Ext.getBody().addCls('ayohaScrolling'); },
                                //         scrollend:   function(){ Ext.getBody().removeCls('ayohaScrolling'); }
                                //       });
                                //     }
                                //   },
                                  
                                // listeners: {
                                //     painted: function(list){
                                //       if (list.__ayohaScrollHooked) return;
                                //       list.__ayohaScrollHooked = true;
                                  
                                //       var scroller = list.getScrollable().getScroller();
                                //       scroller.on({
                                //         scrollstart: function(){ Ext.getBody().addCls('ayohaScrolling'); },
                                //         scrollend:   function(){ Ext.getBody().removeCls('ayohaScrolling'); }
                                //       });
                                //     }
                                //   },
                                  
                                 
                                  





                            //     itemTpl: [
                            //         '<div class="ayohaHubRow">',
                            //           '<div class="ayohaHubCard" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)">',
                                  
                            //             '<div class="ayohaHubHero" style="background-image:url(\'{MembershipCardBackgroundImg_back}\');">',
                                  
                            //             '<div class="ayohaPillCheckin">Today&#39;s Check-In: <b>{CheckInCount}</b></div>',
                                  
                            //               '<div class="ayohaMiniCard" style="background-image:url({MembershipCardBackgroundImg});">',
                            //                 '<div class="ayohaMiniTop">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</div>',
                                  
                            //                 '<div class="ayohaMiniMid">',
                            //                   '<div class="ayohaMiniType">{MembershipCardType}</div>',
                            //                   '<div class="ayohaMiniNo">123 4567</div>',
                            //                   '<div class="ayohaMiniName">MEMBER NAME</div>',
                            //                 '</div>',
                                  
                            //                 '<div class="ayohaMiniBottom">',
                            //                   '<div class="ayohaMiniCol">',
                            //                     '<div class="k">Member Since</div>',
                            //                     '<div class="v">Upon approval</div>',
                            //                   '</div>',
                            //                   '<div class="ayohaMiniCol right">',
                            //                     '<div class="k">Valid Until</div>',
                            //                     '<div class="v">Dec 0000</div>',
                            //                   '</div>',
                            //                 '</div>',
                                  
                            //               '</div>',
                                  

                                        


                            //               '<div class="ayohaHubOverlay">',
                            //                '{ModifiedCTA}',
                            //                '{ModifiedHelperCTA}',                                         

                            //               '</div>',
                                  
                            //             '</div>',
                                  
                            //             '<div class="ayohaHubInfo">',
                            //               '<div class="ayohaHubInfoTop">',
                            //                 '<div class="ayohaHubName">{EnterprisesName}</div>',
                            //                 '<div class="ayohaHubType">{BusinessTypeGroup}</div>',
                            //               '</div>',
                                  
                            //               '<div class="ayohaHubAddr">{ModifiedEnterpriseAddress}</div>',
                                  
                            //               '<div class="ayohaHubRating">',
                            //                 '{ModifiedCountStarCountStar}',
                            //                 '<a class="ayohaHubReviews" href="javascript:void(0)">{CountReviewer} Reviews</a>',
                            //               '</div>',

                                         
                                  
                            //             '</div>',
                                  
                            //           '</div>',
                            //         '</div>'
                            //       ].join('')
                                  


                            //   }
                              



                            itemTpl: [
                                '<div class="ayohaHubRow">',
                                  '<div class="ayohaHubCard" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)">',
                              
                                    '<div class="ayohaHubHero" style="background-image:url(\'{MembershipCardBackgroundImg_back}\');">',
                              
                                      '<div class="ayohaPillCheckin">Today&#39;s Check-In: <b>3</b></div>',
                              
                                      '<div class="ayohaMiniCard" style="background-image:url({MembershipCardBackgroundImg});">',
                                        '<div class="ayohaMiniTop">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</div>',
                              
                                        '<div class="ayohaMiniMid">',
                                          '<div class="ayohaMiniType">{MembershipCardType}</div>',
                                          '<div class="ayohaMiniNo">123 4567</div>',
                                          '<div class="ayohaMiniName">MEMBER NAME</div>',
                                        '</div>',
                              
                                        '<div class="ayohaMiniBottom">',
                                          '<div class="ayohaMiniCol">',
                                            '<div class="k">Member Since</div>',
                                            '<div class="v">Upon approval</div>',
                                          '</div>',
                                          '<div class="ayohaMiniCol right">',
                                            '<div class="k">Valid Until</div>',
                                            '<div class="v">Dec 0000</div>',
                                          '</div>',
                                        '</div>',
                                      '</div>',
                              
                                      '<div class="ayohaHubOverlay">',
                                      // '{ModifiedCTA}',
                                    //    '{ModifiedHelperCTA}',        
                                        '<div style="margin:6px 0px 0px 0px"><div class="ayohaBtnCheckInNow">',
                                          '<span class="ico">',
                                            '<svg viewBox="0 0 24 24" aria-hidden="true">',
                                              '<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>',
                                            '</svg>',
                                          '</span>',
                                          '<span class="txt">Check-In Now</span>',
                                        '</div></div>',
                                //    '{ModifiedHelperCTA}',  
                                         '<div class="ayohaHubOverlayHint">✓ Membership Active • Expires Dec 2026</div>',
                              
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

