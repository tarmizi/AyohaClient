Ext.define('ianMizi.view.Membership.FloatPanel_Membership_MembershipCardHubsUpgrade', {

});

var _FloatPanel_Membership_MembershipCardHubsUpgrade;


var isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';






function FloatPanel_Membership_MembershipCardHubsUpgrade() {

    _FloatPanel_Membership_MembershipCardHubsUpgrade =
    Ext.create('Ext.Panel', {
      
        //zIndex: 310,
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_Membership_MembershipCardHubsUpgradeID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
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
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
       // style: 'background-color:white;',
        style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        // listeners: {
        //     initialize: function (c) {
        //         this.element.on({
        //             swipe: function (e, node, options) {
        //                 //if (e.direction == "up") {
        //                 //    LoyaltyCardRedeemListHide();
        //                 //}
        //                 if (e.direction == "left") {
        //                     _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'left',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
        //                     RemovePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");
        //                     isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';
        //                 } if (e.direction == "right") {
        //                     _FloatPanel_Membership_MembershipCardHubsUpgrade.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'right',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
        //                     RemovePages("FloatPanel_Membership_MembershipCardHubsUpgradeHide()");
        //                     isFloatPanel_Membership_MembershipCardHubsUpgradeOpen = 'N';
        //                 }
                      
        //             }
        //         });
        //     }
        // },
        
      
    
        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              // style: ' background-color:transparent;',
               style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
               // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                layout: {
                    type: 'fit',

                },
               
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_Membership_MembershipCardHubsUpgradeHeader',
                                style: {
                                    // background: '#D25959',
                                    background: 'transparent',
                                    // border: '2px'
                                },
                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
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
                                                         margin: '0 0 0 10',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
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
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_Membership_MembershipCardHubsUpgrade_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Membership Hubs</b></font>'
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
                                xtype: 'list',
                              id: 'FloatPanel_Membership_MembershipCardHubsUpgradeList',
                                height: '100%',
                                width: '95%',
                                margin: '0 0 0 -10',
                               // style: 'background-color: transparent;',
                              //  style: 'background-color:rgba(255, 255, 255, 0);border-radius: 0px 0px 0px 0px;',
                                style: 'background-color:rgba(255, 255, 255, 0); border-radius:0;',
                                scrollable: {
                                  direction: 'vertical',
                                  indicators: false
                                },
                               
                                disableSelection: true,
                                // inline: {
                                //   wrap: false
                                // },
                                itemHeight: 'auto',
                               
                                // store: {
                                //   fields: ['id'],
                                //   data: [
                                //     { id: 1 },
                                //     { id: 2 },
                                //   ]
                                // },
                               // store: _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore,
                              
                             
                              
                                itemTpl: [
                                    // Outer card wrapper
                                    //'<div style="min-width:100vw; max-width:100vw; height:auto; margin:0; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                                    '<div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="min-width:88vw; max-width:88vw; margin-right:5vw; box-sizing:border-box; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                                      // Background Image Section
                                      //'<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8sRD9DXiKgEd0sTh66b2Ljls8laA8hQ0yw&s\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                      '<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'{MembershipCardBackgroundImg_back}\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                  
                                        // Membership Card Image (Gold)
                                       // '<img src="https://5.imimg.com/data5/KA/JP/TU/SELLER-22794929/gold-membership-card.jpg" alt="Gold Member" ',
                                       // 'style="position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.5); z-index:2;">',
                                       '<div  style="border:1px solid white;position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px;  z-index:2;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;box-shadow: 5px 2px 18px #888888;">' +
   
                                       '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-9px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" ><tr><td style="background-color:transparent;border-color:white;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:33px;color:white" colspan="3">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:8px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:9px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-22px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:8px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:8px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:7px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:8px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-10px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                     '</div>'+





                                        // Text Overlay
                                        '<div style="position:absolute; bottom:0; left:0; width:100%; background-color:rgba(0,0,0,0.5); color:white; padding:2vw; z-index:1;">',
                                          '<div style="font-size:3vw; line-height:1.2;">{ModifiedMarketingTagline}</div>',
                                          '<div class="blink_me" style="font-size:4.2vw; font-weight:bold;">{ModifiedGetItNow}</div>',
                                          '<div style="font-size:3vw;">Membership Fees: RM{MembershipCardFee}</div>',
                                        '</div>',
                                      '</div>',
                                  
                                      // Merchant Info Section
                                      '<div style="padding:4vw; background-color:white;">',
                                        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">',
                                          '<div style="font-weight:bold; font-size:4.5vw;">{EnterprisesName}</div>',
                                          '<div style="display:flex; align-items:center;">',
                                           // '<img src="https://cdn-icons-png.flaticon.com/512/2920/2920029.png" width="6vw" style="margin-right:1vw;">',
                                            '<span style="font-size:3vw; color:#555;">{BusinessTypeGroup}</span>',
                                          '</div>',
                                        '</div>',
                                  
                                        '<div style="font-size:3.2vw; color:#444;">{ModifiedEnterpriseAddress}</div>',
                                  
                                        '<div id:"ModifiedCountStarCountStar" style="margin-top:2vw; font-size:3.2vw; color:#333;">{ModifiedCountStarCountStar} ',
                                          '<a href="#" style="color:#3366cc; text-decoration:none;">{CountReviewer} Reviews</a>',
                                        '</div>',
                                      '</div>',
                                    '</div>'
                                  ].join('')
                                  
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                              
                           

                    },
















                            // {
                            //     xtype: 'container',
                            //     id: 'containerFloatPanel_Membership_MembershipCardHubsUpgradeStampCardList',
                            //     // margin: '-10 0 0 0',
                            //     width: '100%',
                            //     height: '100%',
                            //     //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            //     style: "background-color: transparent;",
                            //     //style: "background-color: #F35B57;",
                            //     title: 'FloatPanel_Membership_MembershipCardHubsUpgradeCardLis',
                            //     layout: {
                            //         type: 'vbox',
                            //         pack: 'start',
                            //         align: 'left'

                            //     },
                            //     scrollable: {
                            //         direction: 'vertical',
                            //         directionLock: true,
                            //         indicators: false,
                            //         bounces: false,
                                   
                            //         //threshold: 20,
                                   
                            //     },
                            //     //listeners: {
                            //     //    initialize: function (c) {

                            //     //        this.element.on({
                            //     //            swipe: function (e, node, options) {
                            //     //                if (e.direction == "left") {
                            //     //                    //  alert("Hey! I swipe left");

                            //     //                } else {
                            //     //                    //  alert("Hey! I swipe right");
                            //     //                    Ext.getCmp('tabpanelFloatPanel_Membership_MembershipCardHubsUpgrade').setActiveItem(0);
                            //     //                }
                            //     //            }
                            //     //        });
                            //     //    }
                            //     //},

                            //     items: [
                            //         {
                            //             xtype: 'panel',
                            //             height: 5
                            //         },

                            //         {
                            //             xtype: 'container',
                            //             width: '100%',
                            //             height:1500,                                       
                            //             style: 'background-color:transparent',
                            //             id:'container_DashboardFloatPanel_Membership_MembershipCardHubsUpgrade_Main',
                            //             layout: {
                            //                 // type: 'vbox',
                            //                 // align: 'stretch'
                            //                 type: 'vbox',
                            //                 pack: 'start',
                            //                 align: 'center',
                            //             },
                            //             items:[
                                          
                            
                            
                            //                 { 
                            //                     xtype: 'container',
                            //                    width: '100%',
                            //                    height:'100%',
                            //                  //  hidden:true,                  
                            //                  //  margin: '100 0 0 0',
                            //                    margin: '0 0 0 0',
                            //                    style: 'background-color:transparent',
                            //                    layout: {
                            //                    type: 'vbox',
                            //                    pack: 'start',
                            //                    align: 'center',
                            //                    },
                            //                     items:[
                                               
                            
                                              
                            //                     {
                            //                         xtype: 'container',
                            //                         width: '100%',
                            //                         height: 610,                                  
                            //                         margin: '15 0 0 0',
                            //                         //zIndex:100,
                                                  
                            //                         id: 'containerFloatPanel_Membership_MembershipCardHubsUpgradePaid',
                            //                         style: "background-color: transparent;",
                            //                         // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                            //                         layout: {
                            //                             type: 'vbox',
                            //                             pack: 'start',
                            //                             align: 'center'
                            
                            //                         },
                            //                         items: [
                                                        
                                                      
                            
                            
                            
                            
                            //                 ]
                                                
                                        
                            //             },
                            
                            
                            
                                                
                                                    
                            // ]
                            // },
                            
                            
                            //             ]
                            
                            //         }

                            //     ]

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
        _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain');
        
        _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load({
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
                 
                    Ext.getCmp('FloatPanel_Membership_MembershipCardHubsUpgradeList').setStore(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore);

        
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

