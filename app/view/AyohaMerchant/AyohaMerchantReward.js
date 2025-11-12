


 



Ext.define('ianMizi.view.AyohaMerchant.AyohaMerchantReward', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'AyohaMerchantReward',
    //id: 'AyohaReward_MainDashboardID',
    //requires: [
    //     'ianMizi.view.Dashboard.DashboardMerchantReward',
    //],
    
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
    
        style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
    items: [
        {

            xtype: 'container',
            // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
            width: '100%',
            height: '100%',
            items: [



                    {
                        xtype: 'container',
                        // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 280px;background-repeat: no-repeat;',
                        style: "background-color: transparent;",
                        width: '100%',
                        height: '100%',
                        title: 'DashboardMerchantReward',
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true,
                            indicators: false
                        },
                        layout: {
                            type: 'vbox',
                            //pack: 'start',
                            //align: 'center'

                        },
                        items: [
                            

                           


                           ////// merchant store list container //////

            //                {
            //                 xtype: 'container',
            //                 width: '100%',
            //                 hidden: false,
            //                 id:'containerDashboard_AyohaOnlineMerchantStoreList',
            //                 margin: '40 0 0 0',
            //                 // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
            //                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //                 style: 'background-color:transparent',
            //                 layout: {
            //                     type: 'hbox',
            //                     pack: 'center',
            //                     align: 'center',
            //                 },
            //                 items: [
            //                      {
            //                          margin: '0 0 0 14',
            //                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //                          html: '<div style="color:black;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Merchant List</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">From neighbourhood stalls to hidden gems,<br> explore and enjoy more every visit</div>'
            //                          // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            //                      },
            //                      {
            //                          xtype: 'spacer'
            //                      },
            //                      {
            //                         xtype: 'container',
            //                         zIndex: 50,
            //                         height: 40,
            //                         width: 80,
            //                         layout: {
            //                             type: 'vbox',
            //                             pack: 'center',
            //                             align: 'center'
                                
            //                         },
            //                         items:[
            //                             {
            //   xtype: 'container',
            //   height: 25,
            //   width: 80,
            //                             },
            //                             {
              
            //                                 margin: '0 0 0 0',
                                         
            //                                 html: '<div onclick="Dashboard_SearchMerchantListShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
                                        
            //                             },
            //                             {
            //                                 xtype: 'container',
            //                                 height: 10,
            //                                 width: 80,
            //                                                             },
            //                             {
            //                                 xtype: 'container',
            //                                 zIndex: 50,
            //                                 height: 40,
            //                                 width: 80,
            //                                 layout: {
            //                                     type: 'hbox',
            //                                     pack: 'center',
            //                                     align: 'center'
                                        
            //                                 },
            //                                 items:[
                    
                    
                    
                    
                    
                    
            //                                     {
            //                                         xtype: 'container',
            //                                         zIndex: 50,
            //                                         height: 40,
            //                                         width: 35,
            //                                         //hidden:true,
            //                                        // hidden:true,
            //                                        // margin: '10 0 0 0',
            //                                         margin: '-3 0 0 0',
            //                                         // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
            //                                         id: 'containerMyDashboard_AyohaOnlineMerchantStoreCheckout',
            //                                         name: 'nameMyDashboard_AyohaOnlineMerchantStoreCheckout',
            //                                         style: 'background-color:transparent;',
            //                                        //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
            //                                         layout: {
            //                                             type: 'vbox',
            //                                             pack: 'center',
            //                                             align: 'center'
                                                
            //                                         },
            //                                         items: [
                                                       
            //                                             {
            //                                                // margin: '10 0 0 3',
            //                                                 margin: '3 0 0 3',
            //                                                 height: 20,
            //                                                 width: 20,
            //                                                // hidden:true,
            //                                               //  zIndex:-1,
            //                                                // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
            //                                               // id: '',
            //                                               html: '<div id="htmlMyDashboard_AyohaOnlineMerchantStoreChecout_CountbadgeText" style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
            //                                             },
                            
            //                                     {
            //                                         margin: '-5 2 0 0',
            //                                        // hidden:true,
            //                                         width: 18,
            //                                         height: 18,
            //                                         html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:20px;height:20px;">',
            //                                         // ui:'plain'
            //                                     },
                                                
                                                
            //                                         ]
            //                                     },
                            
                            
            //                                     {
            //                                         xtype: 'container',
            //                                         zIndex: 50,
            //                                         height: 40,
            //                                         width: 35,
            //                                         //hidden:true,
            //                                        // hidden:true,
            //                                        // margin: '10 0 0 0',
            //                                         margin: '-3 0 0 0',
            //                                         // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
            //                                         id: 'containerMyDashboard_AyohaOnlineMerchantStoreShoppingBag',
            //                                         name: 'nameMyDashboard_AyohaOnlineMerchantStoreShoppingBag',
            //                                         style: 'background-color:transparent;',
            //                                        //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
            //                                         layout: {
            //                                             type: 'vbox',
            //                                             pack: 'center',
            //                                             align: 'center'
                                                
            //                                         },
            //                                         items: [
                                                
            //                                             {
            //                                                // margin: '10 0 0 3',
            //                                                 margin: '3 0 0 3',
            //                                                 height: 20,
            //                                                 width: 20,
            //                                                hidden:false,
            //                                               //  zIndex:-1,
            //                                                // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
            //                                                //id: 'htmlMyDashboard_AyohaOnlineMerchantStoreShoppingBag_CountbadgeText',
            //                                               html: '<div  id="htmlMyDashboard_AyohaOnlineMerchantStoreShoppingBag_CountbadgeText"  style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
            //                                             },
                            
            //                                     {
            //                                         margin: '-5 2 0 0',
            //                                        // hidden:true,
            //                                         width: 18,
            //                                         height: 18,
            //                                         html: '<img src="resources/icons/shoppingbag03.png" alt="Image" style="width:20px;height:20px;">',
            //                                         // ui:'plain'
            //                                     },
                                                
                                                
            //                                         ]
            //                                     },
            //                                 ]
            //                              },
            //                         ]
            //                     },
                                
                               
              
              
            //                     // {
            //                     //     xtype: 'container',
            //                     //     zIndex: 50,
            //                     //     height: 40,
            //                     //     width: 35,
            //                     //     //hidden:true,
            //                     //    // hidden:true,
            //                     //    // margin: '10 0 0 0',
            //                     //     margin: '-3 0 0 0',
            //                     //     // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
            //                     //     id: 'containerMyDashboard_AyohaOnlineMerchantStore',
            //                     //     name: 'nameMyDashboard_AyohaOnlineMerchantStore',
            //                     //     style: 'background-color:transparent;',
            //                     //    //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
            //                     //     layout: {
            //                     //         type: 'vbox',
            //                     //         pack: 'center',
            //                     //         align: 'center'
                                
            //                     //     },
            //                     //     items: [
                                
            //                     //         {
            //                     //            // margin: '10 0 0 3',
            //                     //             margin: '3 0 0 3',
            //                     //             height: 20,
            //                     //             width: 20,
            //                     //             //hidden:true,
            //                     //           //  zIndex:-1,
            //                     //            // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
            //                     //            id: 'htmlMyDashboard_AyohaOnlineMerchantStore_CountbadgeText',
            //                     //           html: '<div style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;display:none;">0</div>',
            //                     //         },
              
            //                     // {
            //                     //     margin: '-5 2 0 0',
            //                     //    // hidden:true,
            //                     //     width: 18,
            //                     //     height: 18,
            //                     //     html: '<img src="resources/icons/onlineStore.jpg" alt="Image" style="width:20px;height:20px;">',
            //                     //     // ui:'plain'
            //                     // },
                                
                                
            //                     //     ]
            //                     // },
              
              
                               
              
            //                     //   {
            //                     //       xtype: 'button',
            //                     //       id: 'btnMyDashboard_AyohaOnlineMerchantStore',
            //                     //       //hidden:true,
            //                     //       //  badgeText: '1',
            //                     //       margin: '0 10 0 0',
            //                     //       height: 35,
            //                     //       width: 35,
            //                     //       html: '<img src="resources/icons/onlineStore.jpg" width="25" height="25" alt="Company Name">',
            //                     //       ui: 'plain',
            //                     //       handler: function () {
            //                     //         FloatPanel_Membership_MembershipCardHubsShow();
            //                     //       }
            //                     //   },
              
              
              
            //                 ]
            //   },
            //   {
            //                 xtype: 'container',
                        
            //                 id: 'Dashboard_Carousel_PremiumAdvertisement',
            //                 name: 'nameDashboard_Carousel_PremiumAdvertisement',                
            //                 //width: '100%',
            //                 //height: '100%',
            //                 margin: '25 0 0 0',
            //                 width: '100%',
            //             // height: 480,
            //              height: 370,
            //                // disable:true,
            //                style: 'background-color:transparent',
                         
                        
            //              //margin: '-322 0 0 0',
            //                 //indicators: false,
            //                 layout: {
            //                     type: 'vbox',
            //                     pack: 'start',
            //                     align: 'center',
            //                 },
            //                 items: [
            //                    {
            //                        xtype: 'carousel',
            //                        id: 'mainDashboardCarousel_PremiumAdvertisement',
            //                        name: 'namemainDashboardCarousel_PremiumAdvertisement',
            //                        height: 370,
            //                        width: '95%',
            //                        style: 'background-color:transparent',
            //                        listeners: {
            //                            activeitemchange: function (container, newCard, oldCard, index) {
            //                                var index =parseInt(container.getActiveIndex());
            //                                indexmainDashboardCarousel =parseInt(container.getActiveIndex());
                                         
                                          
                                        
            //                                    DashboardArrIndexmainDashboardCarousel =parseInt(index);
                                              
                                                        
            //                                    Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setStyle('background-color: rgba(0, 0, 0, 0.4);display:block;');
            //                                    Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setZIndex(100);
            //                                    Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setHidden(false);
              
            //                                    slideUpShow('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',500);
              
                                              
                                              
                                         
                               
                               
            //                                 //    Ext.getCmp('containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement').setHidden(false);
            //                                 //    Ext.getCmp('containerDashbord_MyAyohaStore_PremiumAdvertisement').setHidden(false);
                                              
                                             
                                               
                     
                                               
                                               
                                             
                               
                               
                               
                               
            //                                    Ext.getCmp('htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement').setHtml('<div style="width: 48px; height: 42px ; z-index: 100 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="'+ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel]+'" width="44" height="39" alt="Company Name"></div>');
            //                                    Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">'+ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]+'</div>');
            //                                    Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:11px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">'+ArrAdvertisementPremium_AdvertisementTitle[DashboardArrIndexmainDashboardCarousel]+'</div>');
                                               
                               
                               
                               
            //                                    Dashboard_CalculateRating(ArrAdvertisementPremium_EnterpriseAccNo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]);
                                          
            //                                console.log("mainDashboardCarousel Index_PremiumAdvertisement:" + container.getActiveIndex());
            //                            },
                                      
                                       
            //                        },
            //                                                          items:[
              
                              
                              
                              
                              
                              
                              
                              
                              
                              
            //                    ]
            //                    },
                               
                               
                               
            //             {
            //                xtype: 'container',
            //               //margin: '170 0 0 0',
            //                margin: '0 0 0 0',
            //             //  docked:'bottom',
            //              margin: '-92 0 0 0',
            //             //hidden:true,
            //               zIndex: 200,
            //                id: 'containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',
            //               // name: 'namecontainerMyAccount_DashboardMyReward',
                        
            //              // style: 'background-color:yellow;',
            //               style: 'background-color:transparent;',
            //                //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
            //                // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
                       
            //                height: 50,
            //                width: '95%',
            //                layout: {
                       
            //                    type: 'hbox',
            //                    pack: 'center',
            //                    align: 'center'
            //                },
            //                items: [
            //                    //{
            //                    //    xtype: 'panel',
            //                    //    width:1
            //                    //},
            //                    {
            //                        xtype: 'container', 
            //                        id: 'containerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',
            //                        name: 'namecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',                        
            //                        width: '70%',
            //                       height: 50,
            //                       //hidden:true,
            //                       style: 'background-color:transparent;',
            //                       zIndex: 200,
            //                       layout: {
                       
            //                        type: 'hbox',
            //                        pack: 'start',
            //                        align: 'center'
            //                    },
            //                       items:[
                                  
            //                        {
            //                            xtype: 'container',
            //                            width: '24%',
            //                            id: 'containerDashboard_AyohaStore_Logo_PremiumAdvertisement',
            //                            height: 50,
            //                           // style: 'background-color:transparent;',
            //                            margin: '0 0 0 0',
            //                            //style: {
            //                            //    // background: '#D25959',
            //                            //    background: 'rgba(76, 175, 80, 0.3);',
            //                            //    // border: '2px'
            //                            //},
            //                           //  style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: white;',
            //                          style: 'background-color:transparent',
            //                            layout: {
            //                                type: 'vbox',
            //                                pack: 'center',
            //                                align: 'center',
            //                            },
            //                            items: [
            //                                  {
            //                                      //xtype: 'button',
            //                                      //height: 75,
            //                                      //width: 75,
            //                                    //   height: 50,
            //                                    //   width: '100%',
            //                                      margin: '0 0 0 16',
            //                                      id: 'htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement',
            //                                      //badgeText: "2",
            //                                      //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
            //                                      html: '<div style="width: 50px; height: 47px ; z-index: 200 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="50" height="47" alt="Company Name"></div>',
              
            //                                  },
              
            //                            ]
            //                        },
            //                        {
            //                            xtype: 'spacer',
            //                            width: 10
            //                        },
            //                           {
            //                               xtype: 'container',
            //                               width: '74%',
            //                               id: 'containerDashboard_AyohaStore_CompanyInfo_PremiumAdvertisement',
              
              
            //                               margin: '0 0 0 0',
            //                               //style: {
            //                               //    // background: '#D25959',
            //                               //    background: 'rgba(76, 175, 80, 0.3);',
            //                               //    // border: '2px'
            //                               //},
            //                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //                               style: 'background-color:transparent',
            //                               layout: {
            //                                   type: 'vbox',
            //                                   pack: 'center',
            //                                   align: 'center',
            //                               },
            //                               items: [
            //                                      {
              
            //                                          id: 'htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement',
            //                                          width: '100%',
            //                                          html: '<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">IanMizi Technology Sdn Bhd</div>',
              
              
            //                                      },
            //                                       {
              
            //                                           id: 'htmlDashboard_AyohaStore_CompanyInfo_Line_PremiumAdvertisement',
            //                                           width: '100%',
            //                                           margin: '0 0 0 0',
            //                                           html: '<div style="background-color:white;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',
              
              
            //                                       },
            //                                       {
              
            //                                           id: 'htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement',
              
            //                                           width: '100%',
            //                                           // iconCls: 'list',
            //                                           //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
            //                                           html: '<div style="color:white;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Burger padu bak hang!</div>',
              
              
            //                                       },
                                                  
              
            //                               ]
            //                           },
            //                       ]
              
            //                    },
              
            //                    {
            //                        xtype: 'container',
            //                        zIndex: 100,
            //                        width: '30%',
            //                       height: 50,
            //                       layout: {
                       
            //                        type: 'hbox',
            //                        pack: 'end',
            //                        align: 'center'
            //                    },
            //                       items:[
              
                                 
              
            //                        {
              
            //                            xtype: 'container',
            //                          //  width: '30%',
            //                          id: 'containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
            //                          name: 'namecontainerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
            //                            width: '60%',
            //                            //hidden: true,
            //                            //margin:'0 0 0 0',
            //                            height: 35,
            //                            style: 'background-color: transparent;',
            //                           // id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',
              
            //                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //                            // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            //                            layout: {
            //                                type: 'vbox',
            //                                pack: 'center',
            //                                align: 'center',
            //                            },
            //                            items: [
            //                                {
            //                                    xtype: 'container',
            //                                    width: '100%',
            //                                   // flex: 1,
            //                                    margin: '-5 0 0 0',
            //                                    height: 50,
            //                                    id: 'containerDashbord_ReviewAndRate_PremiumAdvertisement',
            //                                   // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
            //                                    // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
            //                                    style: "background-color: transparent;",
            //                                    layout: {
            //                                        type: 'vbox',
            //                                        pack: 'center',
            //                                        align: 'center'
              
            //                                    },
            //                                    items: [
            //                                        {
            //                                            margin: '0 0 0 0',
            //                                            id: 'htmlDashbord_ReviewAndRateCount_PremiumAdvertisement',
            //                                            html: '<div style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
              
            //                                        },
              
            //                                        {
            //                                            xtype: 'container',
            //                                            width: '100%',
            //                                            margin: '-12 0 0 0',
            //                                            height: 9,
            //                                            // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
            //                                            style: "background-color: transparent;",
            //                                            layout: {
            //                                                type: 'hbox',
            //                                                pack: 'center',
            //                                                align: 'center'
              
            //                                            },
            //                                            items: [
              
            //                                                {
            //                                                    id: 'htmlDashbord_Star1',
            //                                                    height: 9,
            //                                                    width: 9,
            //                                                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            //                                                },
            //   {
            //   id: 'htmlDashbord_Star2',
            //   height: 9,
            //   width: 9,
            //   html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            //   },
            //   {
            //   id: 'htmlDashbord_Star3',
            //   height: 9,
            //   width: 9,
            //   html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            //   },
            //   {
            //   id: 'htmlDashbord_Star4',
            //   height: 9,
            //   width: 9,
            //   html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
            //   },
            //   {
            //   id: 'htmlDashbord_Star5',
            //   height: 9,
            //   width: 9,
            //   html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
              
            //   },
            //                                            ]
            //                                        },
              
            //                                        {
            //                                            xtype: 'container',
            //                                            width: '100%',
            //                                            margin: '10 0 0 0',
            //                                            height: 9,
            //                                            layout: {
            //                                                type: 'hbox',
            //                                                pack: 'center',
            //                                                align: 'center'
            //                                            },
            //                                            items: [
            //                                                {
            //                                                    id: 'htmlDashbord_ReviewByCount_PremiumAdvertisement',
            //                                                    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:white;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
            //                                                },
            //                                            ]
            //                                        },
            //                                         //{
            //                                         //    margin: '0 0 0 0',
            //                                         //    height: 15,
            //                                         //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
            //                                         //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
            //                                         //}
            //                                    ]
            //                                },
            //                            ]
            //                        },
              
              
              
              
                                 
            //                        {
            //                            xtype: 'panel',
            //                           width: 7
            //                           // width: 3
            //                        },
              
              
                                   
            //                        {
            //                         xtype: 'container',
            //                         id: 'containerDashbord_MyAyohaStore_PremiumAdvertisement',
            //                         name: 'namecontainerDashbord_MyAyohaStore_PremiumAdvertisement',
                                  
            //                         style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
            //                         height: 40,
            //                         width: 40,
            //                         margin: '0 0 0 0',
            //                         layout: {
              
            //                             type: 'vbox',
            //                             pack: 'center',
            //                             align: 'center'
            //                         },
            //                         items: [
            //                             {
            //                                 //xtype: 'button',
            //                                 //id: 'btnMyAccount_DashboardEwalletIcon',
            //                                 height: 20,
            //                                 width: 20,
            //                                 margin: '0 0 0 0',
            //                                 // iconCls: 'list',
            //                                 //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
            //                                 html: '<div ><img src="resources/icons/onlineStore.jpg" style ="width:20px;height:20px;" alt="Company Name"></div>',
            //                                 // ui: 'plain',
            //                                 //handler: function () {
              
            //                                 //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
            //                                 //    //    type: 'slideOut',
            //                                 //    //    direction: 'left',
            //                                 //    //    easing: 'cubic-bezier(.7,0,.7,1)',
            //                                 //    //    duration: 250
              
            //                                 //    //}));
            //                                 //    //isLoyaltyCardRedeemListOpen = 'N';
            //                                 //}
            //                             },
            //                         ]
            //                     },
              
              
            //                       ]
              
            //                    },
                             
            //              {
            //                       xtype: 'spacer',
            //                       width:20
            //                    },
            //                ]
            //            },
                               
              
                                  
              
                              
              
            //                 ]
            //   },
            


/////////////////////////////////////////hero section

{
    xtype: 'container',
    width: '100%',
    height: 200,
    // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
    style:"background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {

            xtype: 'container',
            width: '100%',  
            height: 200,                                                  
           style: 'background-color:transparent;',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'left',
            },




            // hidden:true,
            items:
                   [
                   {
                    xtype: 'container',
                    width: '50%', 
                    hidden:false, 
                    height: 200,                                          
                   style: 'background-color:transparent;',
                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left',
                    },
                    items:[
                        {
                            margin: '10 0 0 14',
                        
                           // id: 'labelDashboard_LastCheckInTimeStamp',    
                           // html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">00:00:00</div>'
                         //   html: '<div style="display:inline-flex;align-items:center;gap:10px;padding:2px 5px;border-radius:999px;border:2px solid transparent;background:linear-gradient(#ffffff,#ffffff) padding-box,linear-gradient(90deg,#ff00de,#c800ff) border-box;box-shadow:0 10px 24px rgba(200,0,255,.28);color:#111827;font-size:10px;font-weight:bold;"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ayohaGrad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff00de"/><stop offset="1" stop-color="#c800ff"/></linearGradient></defs><rect x="3" y="9" width="18" height="11" rx="3" fill="url(#ayohaGrad1)"/><rect x="11" y="9" width="2" height="11" fill="#fff" opacity=".9"/><rect x="3" y="13" width="18" height="2" fill="#fff" opacity=".9"/><rect x="11" y="6.6" width="2" height="2.4" fill="url(#ayohaGrad1)"/><circle cx="8" cy="7" r="3" fill="url(#ayohaGrad1)"/><circle cx="16" cy="7" r="3" fill="url(#ayohaGrad1)"/></svg><span>My Ayoha Reward Membership</span></div>'
                       
                           // id: 'labelDashboard_LastCheckInTimeStamp',    
                           // html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">00:00:00</div>'
                        //     html: '<div style="display:flex;align-items:center;margin:4px 0 8px 0;">'
                        //     + '<span style="display:inline-block;padding:2px;background:#ffffff;border-radius:999px;box-shadow:0 8px 18px rgba(0,0,0,.22);">'
                        //       + '<span style="display:inline-flex;align-items:center;gap:6px;color:#5B21B6;font:800 10px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:2px 4px;border-radius:999px;background:#ffffff;border:1px solid rgba(91,33,182,.18);">'
                              
                        //         + 'Perks from My Cards'
                        //       + '</span>'
                        //     + '</span>'
                        //   + '</div><div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>My Merchant Reward</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-20px 0px 0px 0px;">Claim perks in one place</div>'
                         
                          html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:#16a34a;background:#ffffff;padding:3px 6px;border-radius:999px;white-space:nowrap;">Perks from My Cards</span><br><b>My Merchant Reward</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-20px 0px 0px 0px;">Claim perks in one place</div>'
                       
                        },
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:18,
                        },
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:20,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'left'
                
                            },
                            items:[
                                {
                                    margin: '0 0 0 14',
                                   // hidden:true, 
                                    html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">Dashboard Summary</div>'
                                       
                                }
                            ]
                        },
                       
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:40,
                            layout: {
                                type: 'hbox',
                                pack: 'left',
                                align: 'left'
                
                            },
                            items:[
                                {
                                    xtype: 'container',
                                    width: '3%',
                                    height:40,
                                },
                                {
                                    xtype: 'container',
                                    width: '31%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                  //  id:'htmlMembershipCardList_paidMembershipCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Contest</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Joined</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                    width: '31%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                  //  id:'htmlMembershipCardList_freeMembershipCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Event</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Respond</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                
                                
                            ]
                        },



{
    xtype: 'container',
    style:"background-color:transparent",
    width: '100%',
    height:5,
},



                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:40,
                            layout: {
                                type: 'hbox',
                                pack: 'left',
                                align: 'left'
                
                            },
                            items:[
                                {
                                    xtype: 'container',
                                    width: '3%',
                                    height:40,
                                },
                                {
                                    xtype: 'container',
                                    width: '31%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                  //  id:'htmlMembershipCardList_paidMembershipCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Point</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Redeem</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                    width: '31%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                  //  id:'htmlMembershipCardList_freeMembershipCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Redeem</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Approved</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                
                                
                            ]
                        }
                    ]
                
                   },

                   {
                    xtype: 'container',
                    width: '50%',  
                    height: 200,                                               
                   style: 'background-color:transparent;',
                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'right',
                    },
                    items:[
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 20,
                        },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 10,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                { 
                                    html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">Perks Eligible</div>'
                                },

                                { 
                                    html: '<div  style="color:white;text-align: center;font-size:12px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">Total:12</div>'
                                },
                            ]

                        },
                       
                        {
                            width: 200,
                            height: 160,
                            html:'<div style="max-width:200px;height:160px;margin:5px 0px 0px 0px;background:transparent;">'+
                            '<canvas id="loyaltyHBar"></canvas>'+
                            '</div>'
                        }
                    ]
                
                   },

                  


                   ]

        },
       
      

    ]
  },




//////////////////////



                              ////////Merchant Redemption

                              {

                                  xtype: 'container',
                                  width: '100%',
                                  height: 800,
                                  /// hidden:true,

                                  margin: '20 0 0 0',
                                  id: 'containerDashboard_MerchantRedemptionMain',
                                  style: {
                                      // background: '#D25959',
                                      background: 'transparent',
                                      // border: '2px'
                                  },
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',

                                  },
                                  items: [
                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          /// hidden:true,
                                          margin: '0 0 0 0',
                                          id: 'containerDashboard_MerchantRedemption',
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
                                          items: [
                                               {
                                                   margin: '10 0 0 14',
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Merchant Redemption</b></div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },
                                               {
                                                   xtype: 'spacer'
                                               },
                                                //{
                                                //    xtype: 'button',
                                                //    id: 'btnMyDashboard_AyohaRewardNearestRedeemInfo',
                                                //    //  badgeText: '1',
                                                //    margin: '0 10 0 0',
                                                //    height: 35,
                                                //    width: 35,
                                                //    html: '<img src="resources/icons/AyohaStoreGrey.png" width="25" height="25" alt="Company Name">',
                                                //    ui: 'plain',
                                                //    handler: function () {
                                                //        FloatPanel_NearestRedemptionShow();
                                                //    }
                                                //},
                                                 {
                                                     xtype: 'button',
                                                     id: 'btnMyDashboard_AyohaRewardNearestRedeemInfo',
                                                     //  badgeText: '1',
                                                     margin: '10 -5 0 0',
                                                     height: 35,
                                                     width: 100,
                                                     html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;"><u>View All</u></div>',
                                                     // html: '<img src="resources/icons/AyohaStoreGrey.png" width="25" height="25" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         FloatPanel_NearestRedemptionShow();
                                                     }
                                                 },

                                          ]
                                      },

                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          // hidden: true,
                                          margin: '7 0 0 0',
                                          id: 'containerLoyaltyStampNearestRedeemItem_Header',
                                          style: {
                                              // background: '#D25959',
                                              background: 'transparent',
                                              // border: '2px'
                                          },
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'left',
                                              align: 'left',
                                          },
                                          items: [
                                               {
                                                   margin: '6 0 0 14',
                                                   id: 'htmlLoyaltyStampNearestRedeemItem_Header',
                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1).-Stamp Loyalty Redemption</div>'
                                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                               },

                                                {
                                                    xtype: 'button',
                                                    id: 'btnLoyaltyStampNearestRedeemItem_Header',
                                                    // hidden: true,
                                                    //  badgeText: '1',
                                                    margin: '0 0 0 0',
                                                    height: 30,
                                                    width: 30,
                                                    html: '<img src="resources/icons/AyohaStampCardWhite01.png" width="20" height="20" alt="Company Name">',
                                                    ui: 'plain',
                                                    handler: function () {
                                                        //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                    }
                                                },



                                          ]
                                      },




                                      {
                                          xtype: 'container',
                                          hidden: false,
                                          //width: '95%',
                                          //height: 80,
                                          margin: '-10 0 0 0',
                                          width: '100%',
                                          id: 'container_Dashboard_NearestRedeemMembersMaster',
                                          height: 290,
                                          // height: 440,
                                          // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center',
                                          },
                                          items: [
                                              {
                                                  xtype: 'container',
                                                  //width: '95%',
                                                  //height: 80,
                                                  hidden: true,
                                                  margin: '0 0 0 0',
                                                  width: '100%',
                                                  id: 'container_Dashboard_NearestRedeemNonMembers',
                                                  name: 'namecontainer_Dashboard_NearestRedeemNonMembers',
                                                  height: 280,
                                                  //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                  style: 'background-color:transparent',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [

                                                      {

                                                          //xtype: 'button',
                                                          //height: 90,
                                                          //width: 90,
                                                          margin: '10 0 0 0',
                                                          //zIndex: 400,

                                                          id: 'htmlDashboard_NearestRedeem_NonMembersTxt',
                                                          html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Hai!, you have no stamp redemption items yet.</div>'

                                                          //ui: 'plain',
                                                          //handler: function () {

                                                          //}

                                                      },


                                                       {

                                                           //xtype: 'button',
                                                           //height: 90,
                                                           //width: 90,
                                                           //  margin: '0 0 0 60',
                                                           //zIndex: 400,
                                                           margin: '0 0 0 0',
                                                           id: 'htmlDashboard_NearestRedeem_NonMembersTxt0',
                                                           html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Tap Ayoha Mechant below ,get their Membership card</div>'

                                                           //ui: 'plain',
                                                           //handler: function () {

                                                           //}

                                                       },

                                                        {

                                                            //xtype: 'button',
                                                            //height: 90,
                                                            //width: 90,
                                                            //  margin: '0 0 0 60',
                                                            //zIndex: 400,
                                                            margin: '0 0 0 0',
                                                            id: 'htmlDashboard_NearestRedeem_NonMembersTxt00',
                                                            html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">and then collect your redemptions items!</div>'

                                                            //ui: 'plain',
                                                            //handler: function () {

                                                            //}

                                                        },
                                                       {

                                                           //xtype: 'button',
                                                           //height: 90,
                                                           //width: 90,
                                                           margin: '20 0 0 0',
                                                           //zIndex: 400,
                                                           width: 100,
                                                           height: 100,
                                                           id: 'htmlDashboard_NearestRedeem_NonMembers',
                                                           html: '<img src="resources/icons/AyohaMerchant03.png" alt="Image" style="width:150px;height:100px;zIndex:400px">',

                                                           //ui: 'plain',
                                                           //handler: function () {

                                                           //}

                                                       },
                                                       {

                                                           //xtype: 'button',
                                                           //height: 90,
                                                           //width: 90,
                                                           //  margin: '0 0 0 60',
                                                           //zIndex: 400,
                                                           margin: '3 0 0 0',
                                                           id: 'htmlDashboard_NearestRedeem_NonMembersTxtAyohaMerchant',
                                                           html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div>'

                                                           //ui: 'plain',
                                                           //handler: function () {

                                                           //}

                                                       },

                                                  ]
                                              },



                                              {
                                                  xtype: 'carousel',
                                                  hidden: false,
                                                  //width: '95%',
                                                  //height: 80,
                                                  margin: '2 0 0 0',
                                                  width: '100%',
                                                  id: 'container_Dashboard_NearestRedeemMembers',
                                                  height: 320,
                                                  requires: [
   'Ext.data.Store',
   'Ext.carousel.Carousel',
   'Ext.util.DelayedTask',
                                                  ],
                                                  items: [

                                                      {
                                                          xtype: 'container',
                                                          // xtype: 'carousel',
                                                          hidden: false,
                                                          //width: '95%',
                                                          //height: 80,
                                                          margin: '-2 0 0 0',
                                                          width: '100%',
                                                          id: 'container_Dashboard_NearestRedeemMembers_carosel0',
                                                          height: 290,
                                                          // height: 440,
                                                          // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                          style: 'background-color:transparent',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center',
                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'container',
                                                                  //width: '95%',
                                                                  //height: 80,
                                                                  margin: '12 0 0 0',
                                                                  width: '95%',
                                                                  height: 85,
                                                                  //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                  //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                  //  style: 'background-color:transparent',
                                                                  //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                  style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  layout: {
                                                                      type: 'hbox',
                                                                      pack: 'center',
                                                                      align: 'center',
                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '92%',
                                                                          //height: 100,
                                                                          height: 80,
                                                                          margin: '10 0 0 0',
                                                                          name: 'container_Dashboard_NearestRedeem0',
                                                                          //style: {
                                                                          //    // background: '#D25959',
                                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                                          //    // border: '2px'
                                                                          //},
                                                                          style: 'background-color:transparent',
                                                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                          //style: 'background-color:transparent',
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center',
                                                                          },
                                                                          items: [
                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '15%',

                                                                                  margin: '0 0 0 0',
                                                                                  //style: {
                                                                                  //    // background: '#D25959',
                                                                                  //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                  //    // border: '2px'
                                                                                  //},
                                                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                  style: 'background-color:transparent',
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'center',
                                                                                  },
                                                                                  items: [
                                                                                        {

                                                                                            //xtype: 'button',
                                                                                            //height: 90,
                                                                                            //width: 90,
                                                                                           // margin: '-18 0 0 -10',
                                                                                            margin: '-18 0 0 35',
                                                                                            //zIndex: 400,
                                                                                            id: 'Dashboard_NearestRedeem_StampContent0',
                                                                                            html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                            //ui: 'plain',
                                                                                            //handler: function () {

                                                                                            //}

                                                                                        },

                                                                                  ]
                                                                              },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '95%',
                                                                                   // width: '100%',
                                                                                    //zIndex: -99,
                                                                                    //margin: '-18 0 0 0',                                   
                                                                                    //height: 80,                                   
                                                                                    margin: '-14 0 0 0',
                                                                                    height: 80,
                                                                                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'background-color:transparent',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'left',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             margin: '-8 0 0 33',
                                                                                             id: 'Dashboard_NearestRedeem_StampContentNote0',
                                                                                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                         },
                                                                                          {
                                                                                              margin: '-2 0 0 33',
                                                                                              id: 'Dashboard_NearestRedeem_EnterpriseName0',
                                                                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                          },
                                                                                           {
                                                                                               margin: '0 0 0 33',
                                                                                               width: '100%',
                                                                                               id: 'Dashboard_NearestRedeem_EndDate0',
                                                                                               html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                           },

                                                                                    ]
                                                                                },


                                                                          ]
                                                                      },

                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                  ]

                                                              },



                                                         {
                                                             xtype: 'container',
                                                             //width: '95%',
                                                             //height: 80,
                                                             margin: '12 0 0 0',
                                                             width: '95%',
                                                             height: 85,
                                                             //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                             //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             // style: 'background-color:transparent',
                                                             // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                             //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                 {
                                                                     xtype: 'spacer'
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     width: '92%',
                                                                     //height: 100,
                                                                     height: 80,
                                                                     margin: '10 0 0 0',
                                                                     name: 'container_Dashboard_NearestRedeem1',
                                                                     //style: {
                                                                     //    // background: '#D25959',
                                                                     //    background: 'rgba(76, 175, 80, 0.3);',
                                                                     //    // border: '2px'
                                                                     //},
                                                                     style: 'background-color:transparent',
                                                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                     //style: 'background-color:transparent',
                                                                     layout: {
                                                                         type: 'hbox',
                                                                         pack: 'center',
                                                                         align: 'center',
                                                                     },
                                                                     items: [
                                                                         {
                                                                             xtype: 'container',
                                                                             width: '15%',
                                                                             //  zIndex: 400,
                                                                             margin: '0 0 0 0',
                                                                             //style: {
                                                                             //    // background: '#D25959',
                                                                             //    background: 'rgba(76, 175, 80, 0.3);',
                                                                             //    // border: '2px'
                                                                             //},
                                                                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                             style: 'background-color:transparent',
                                                                             layout: {
                                                                                 type: 'vbox',
                                                                                 pack: 'center',
                                                                                 align: 'center',
                                                                             },
                                                                             items: [
                                                                                   {

                                                                                       //xtype: 'button',
                                                                                       //height: 90,
                                                                                       //width: 90,
                                                                                      // margin: '-18 0 0 -10',
                                                                                      margin: '-18 0 0 35',
                                                                                       //zIndex: 400,
                                                                                       id: 'Dashboard_NearestRedeem_StampContent1',
                                                                                       html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                       //ui: 'plain',
                                                                                       //handler: function () {

                                                                                       //}

                                                                                   },

                                                                             ]
                                                                         },
                                                                           {
                                                                               xtype: 'container',
                                                                               width: '95%',
                                                                              // width: '100%',
                                                                               // zIndex: -99,
                                                                               //margin: '-18 0 0 0',                                   
                                                                               //height: 80,                                   
                                                                               margin: '-14 0 0 0',
                                                                               height: 80,
                                                                               //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: 'background-color:transparent',
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'left',
                                                                               },
                                                                               items: [
                                                                                    {
                                                                                        margin: '-8 0 0 33',
                                                                                        id: 'Dashboard_NearestRedeem_StampContentNote1',
                                                                                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                    },
                                                                                     {
                                                                                         margin: '-2 0 0 33',
                                                                                         id: 'Dashboard_NearestRedeem_EnterpriseName1',
                                                                                         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                     },
                                                                                      {
                                                                                          margin: '0 0 0 33',
                                                                                          width: '100%',
                                                                                          id: 'Dashboard_NearestRedeem_EndDate1',
                                                                                          html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                      },

                                                                               ]
                                                                           },


                                                                     ]
                                                                 },

                                                                 {
                                                                     xtype: 'spacer'
                                                                 },
                                                             ]

                                                         },




                                                            {
                                                                xtype: 'container',
                                                                //width: '95%',
                                                                //height: 80,
                                                                margin: '12 0 0 0',
                                                                width: '95%',
                                                                height: 85,
                                                                //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'center',
                                                                    align: 'center',
                                                                },
                                                                items: [
                                                                    {
                                                                        xtype: 'spacer'
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '92%',
                                                                        //height: 100,
                                                                        height: 80,
                                                                        margin: '10 0 0 0',
                                                                        name: 'container_Dashboard_NearestRedeem2',
                                                                        //style: {
                                                                        //    // background: '#D25959',
                                                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                                                        //    // border: '2px'
                                                                        //},
                                                                        style: 'background-color:transparent',
                                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                        //style: 'background-color:transparent',
                                                                        layout: {
                                                                            type: 'hbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '15%',
                                                                                //  zIndex: 400,
                                                                                margin: '0 0 0 0',
                                                                                //style: {
                                                                                //    // background: '#D25959',
                                                                                //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                //    // border: '2px'
                                                                                //},
                                                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                style: 'background-color:transparent',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                      {

                                                                                          //xtype: 'button',
                                                                                          //height: 90,
                                                                                          //width: 90,
                                                                                        //  margin: '-18 0 0 -10',
                                                                                          margin: '-18 0 0 35',
                                                                                          //zIndex: 400,
                                                                                          id: 'Dashboard_NearestRedeem_StampContent2',
                                                                                          html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                          //ui: 'plain',
                                                                                          //handler: function () {

                                                                                          //}

                                                                                      },

                                                                                ]
                                                                            },
                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '95%',
                                                                                 // width: '100%',
                                                                                  // zIndex: -99,
                                                                                  //margin: '-18 0 0 0',                                   
                                                                                  //height: 80,                                   
                                                                                  margin: '-14 0 0 0',
                                                                                  height: 80,
                                                                                  //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                  style: 'background-color:transparent',
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'left',
                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           margin: '-8 0 0 33',
                                                                                           id: 'Dashboard_NearestRedeem_StampContentNote2',
                                                                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                       },
                                                                                        {
                                                                                            margin: '-2 0 0 33',
                                                                                            id: 'Dashboard_NearestRedeem_EnterpriseName2',
                                                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                        },
                                                                                         {
                                                                                             margin: '0 0 0 33',
                                                                                             width: '100%',
                                                                                             id: 'Dashboard_NearestRedeem_EndDate2',
                                                                                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                         },

                                                                                  ]
                                                                              },


                                                                        ]
                                                                    },

                                                                    {
                                                                        xtype: 'spacer'
                                                                    },
                                                                ]

                                                            },

                                                          ]

                                                      },

                                                      ///////////////////////////////////////////carosel-2

                                                      {
                                                          xtype: 'container',
                                                          // xtype: 'carousel',
                                                          hidden: false,
                                                          //width: '95%',
                                                          //height: 80,
                                                          margin: '-2 0 0 0',
                                                          width: '100%',
                                                          id: 'container_Dashboard_NearestRedeemMembers_carosel1',
                                                          height: 290,
                                                          // height: 440,
                                                          // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                          style: 'background-color:transparent',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center',
                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'container',
                                                                  //width: '95%',
                                                                  //height: 80,
                                                                  margin: '12 0 0 0',
                                                                  width: '95%',
                                                                  height: 85,
                                                                  //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                  //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                  //  style: 'background-color:transparent',
                                                                  // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                  style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  layout: {
                                                                      type: 'hbox',
                                                                      pack: 'center',
                                                                      align: 'center',
                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '92%',
                                                                          //height: 100,
                                                                          height: 80,
                                                                          margin: '10 0 0 0',
                                                                          name: 'container_Dashboard_NearestRedeem3',
                                                                          //style: {
                                                                          //    // background: '#D25959',
                                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                                          //    // border: '2px'
                                                                          //},
                                                                          style: 'background-color:transparent',
                                                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                          //style: 'background-color:transparent',
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center',
                                                                          },
                                                                          items: [
                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '15%',

                                                                                  margin: '0 0 0 0',
                                                                                  //style: {
                                                                                  //    // background: '#D25959',
                                                                                  //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                  //    // border: '2px'
                                                                                  //},
                                                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                  style: 'background-color:transparent',
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'center',
                                                                                  },
                                                                                  items: [
                                                                                        {

                                                                                            //xtype: 'button',
                                                                                            //height: 90,
                                                                                            //width: 90,
                                                                                           // margin: '-18 0 0 -10',
                                                                                            margin: '-18 0 0 35',
                                                                                            //zIndex: 400,
                                                                                            id: 'Dashboard_NearestRedeem_StampContent3',
                                                                                            html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                            //ui: 'plain',
                                                                                            //handler: function () {

                                                                                            //}

                                                                                        },

                                                                                  ]
                                                                              },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '95%',
                                                                                  //  width: '100%',
                                                                                    //zIndex: -99,
                                                                                    //margin: '-18 0 0 0',                                   
                                                                                    //height: 80,                                   
                                                                                    margin: '-14 0 0 0',
                                                                                    height: 80,
                                                                                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'background-color:transparent',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'left',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             margin: '-8 0 0 33',
                                                                                             id: 'Dashboard_NearestRedeem_StampContentNote3',
                                                                                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                         },
                                                                                          {
                                                                                              margin: '-2 0 0 33',
                                                                                              id: 'Dashboard_NearestRedeem_EnterpriseName3',
                                                                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                          },
                                                                                           {
                                                                                               margin: '0 0 0 33',
                                                                                               width: '100%',
                                                                                               id: 'Dashboard_NearestRedeem_EndDate3',
                                                                                               html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                           },

                                                                                    ]
                                                                                },


                                                                          ]
                                                                      },

                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                  ]

                                                              },



                                                         {
                                                             xtype: 'container',
                                                             //width: '95%',
                                                             //height: 80,
                                                             margin: '12 0 0 0',
                                                             width: '95%',
                                                             height: 85,
                                                             //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                             //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             // style: 'background-color:transparent',
                                                             // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                 {
                                                                     xtype: 'spacer'
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     width: '92%',
                                                                     //height: 100,
                                                                     height: 80,
                                                                     margin: '10 0 0 0',
                                                                     name: 'container_Dashboard_NearestRedeem4',
                                                                     //style: {
                                                                     //    // background: '#D25959',
                                                                     //    background: 'rgba(76, 175, 80, 0.3);',
                                                                     //    // border: '2px'
                                                                     //},
                                                                     style: 'background-color:transparent',
                                                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                     //style: 'background-color:transparent',
                                                                     layout: {
                                                                         type: 'hbox',
                                                                         pack: 'center',
                                                                         align: 'center',
                                                                     },
                                                                     items: [
                                                                         {
                                                                             xtype: 'container',
                                                                             width: '15%',
                                                                             //  zIndex: 400,
                                                                             margin: '0 0 0 0',
                                                                             //style: {
                                                                             //    // background: '#D25959',
                                                                             //    background: 'rgba(76, 175, 80, 0.3);',
                                                                             //    // border: '2px'
                                                                             //},
                                                                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                             style: 'background-color:transparent',
                                                                             layout: {
                                                                                 type: 'vbox',
                                                                                 pack: 'center',
                                                                                 align: 'center',
                                                                             },
                                                                             items: [
                                                                                   {

                                                                                       //xtype: 'button',
                                                                                       //height: 90,
                                                                                       //width: 90,
                                                                                      // margin: '-18 0 0 -10',
                                                                                       margin: '-18 0 0 35',
                                                                                       //zIndex: 400,
                                                                                       id: 'Dashboard_NearestRedeem_StampContent4',
                                                                                       html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                       //ui: 'plain',
                                                                                       //handler: function () {

                                                                                       //}

                                                                                   },

                                                                             ]
                                                                         },
                                                                           {
                                                                               xtype: 'container',
                                                                               width: '95%',
                                                                              // width: '100%',
                                                                               // zIndex: -99,
                                                                               //margin: '-18 0 0 0',                                   
                                                                               //height: 80,                                   
                                                                               margin: '-14 0 0 0',
                                                                               height: 80,
                                                                               //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: 'background-color:transparent',
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'left',
                                                                               },
                                                                               items: [
                                                                                    {
                                                                                        margin: '-8 0 0 33',
                                                                                        id: 'Dashboard_NearestRedeem_StampContentNote4',
                                                                                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                    },
                                                                                     {
                                                                                         margin: '-2 0 0 33',
                                                                                         id: 'Dashboard_NearestRedeem_EnterpriseName4',
                                                                                         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                     },
                                                                                      {
                                                                                          margin: '0 0 0 33',
                                                                                          width: '100%',
                                                                                          id: 'Dashboard_NearestRedeem_EndDate4',
                                                                                          html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                      },

                                                                               ]
                                                                           },


                                                                     ]
                                                                 },

                                                                 {
                                                                     xtype: 'spacer'
                                                                 },
                                                             ]

                                                         },




                                                            {
                                                                xtype: 'container',
                                                                //width: '95%',
                                                                //height: 80,
                                                                margin: '12 0 0 0',
                                                                width: '95%',
                                                                height: 85,
                                                                //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'center',
                                                                    align: 'center',
                                                                },
                                                                items: [
                                                                    {
                                                                        xtype: 'spacer'
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '92%',
                                                                        //height: 100,
                                                                        height: 80,
                                                                        margin: '10 0 0 0',
                                                                        name: 'container_Dashboard_NearestRedeem5',
                                                                        //style: {
                                                                        //    // background: '#D25959',
                                                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                                                        //    // border: '2px'
                                                                        //},
                                                                        style: 'background-color:transparent',
                                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                        //style: 'background-color:transparent',
                                                                        layout: {
                                                                            type: 'hbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '15%',
                                                                                //  zIndex: 400,
                                                                                margin: '0 0 0 0',
                                                                                //style: {
                                                                                //    // background: '#D25959',
                                                                                //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                //    // border: '2px'
                                                                                //},
                                                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                style: 'background-color:transparent',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                      {

                                                                                          //xtype: 'button',
                                                                                          //height: 90,
                                                                                          //width: 90,
                                                                                         // margin: '-18 0 0 -10',
                                                                                          margin: '-18 0 0 35',
                                                                                          //zIndex: 400,
                                                                                          id: 'Dashboard_NearestRedeem_StampContent5',
                                                                                          html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                          //ui: 'plain',
                                                                                          //handler: function () {

                                                                                          //}

                                                                                      },

                                                                                ]
                                                                            },
                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '95%',
                                                                                 // width: '100%',
                                                                                  // zIndex: -99,
                                                                                  //margin: '-18 0 0 0',                                   
                                                                                  //height: 80,                                   
                                                                                  margin: '-14 0 0 0',
                                                                                  height: 80,
                                                                                  //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                  style: 'background-color:transparent',
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'left',
                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           margin: '-8 0 0 33',
                                                                                           id: 'Dashboard_NearestRedeem_StampContentNote5',
                                                                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                       },
                                                                                        {
                                                                                            margin: '-2 0 0 33',
                                                                                            id: 'Dashboard_NearestRedeem_EnterpriseName5',
                                                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                        },
                                                                                         {
                                                                                             margin: '0 0 0 33',
                                                                                             width: '100%',
                                                                                             id: 'Dashboard_NearestRedeem_EndDate5',
                                                                                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                         },

                                                                                  ]
                                                                              },


                                                                        ]
                                                                    },

                                                                    {
                                                                        xtype: 'spacer'
                                                                    },
                                                                ]

                                                            },


                                                          ]

                                                      },



                                                      ///////////////////////////carosel-2
                                                      {
                                                          xtype: 'container',
                                                          // xtype: 'carousel',
                                                          hidden: false,
                                                          //width: '95%',
                                                          //height: 80,
                                                          margin: '-2 0 0 0',
                                                          width: '100%',
                                                          id: 'container_Dashboard_NearestRedeemMembers_carosel2',
                                                          height: 290,
                                                          // height: 440,
                                                          // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                          style: 'background-color:transparent',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'start',
                                                              align: 'center',
                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'container',
                                                                  //width: '95%',
                                                                  //height: 80,
                                                                  margin: '12 0 0 0',
                                                                  width: '95%',
                                                                  height: 85,
                                                                  //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                  //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                  //  style: 'background-color:transparent',
                                                                  //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                  style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  layout: {
                                                                      type: 'hbox',
                                                                      pack: 'center',
                                                                      align: 'center',
                                                                  },
                                                                  items: [
                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          width: '92%',
                                                                          //height: 100,
                                                                          height: 80,
                                                                          margin: '10 0 0 0',
                                                                          name: 'container_Dashboard_NearestRedeem6',
                                                                          //style: {
                                                                          //    // background: '#D25959',
                                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                                          //    // border: '2px'
                                                                          //},
                                                                          style: 'background-color:transparent',
                                                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                          //style: 'background-color:transparent',
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'center',
                                                                              align: 'center',
                                                                          },
                                                                          items: [
                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '15%',

                                                                                  margin: '0 0 0 0',
                                                                                  //style: {
                                                                                  //    // background: '#D25959',
                                                                                  //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                  //    // border: '2px'
                                                                                  //},
                                                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                  style: 'background-color:transparent',
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'center',
                                                                                  },
                                                                                  items: [
                                                                                        {

                                                                                            //xtype: 'button',
                                                                                            //height: 90,
                                                                                            //width: 90,
                                                                                           // margin: '-18 0 0 -10',
                                                                                            margin: '-18 0 0 35',
                                                                                            //zIndex: 400,
                                                                                            id: 'Dashboard_NearestRedeem_StampContent6',
                                                                                            html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                            //ui: 'plain',
                                                                                            //handler: function () {

                                                                                            //}

                                                                                        },

                                                                                  ]
                                                                              },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '95%',
                                                                                   // width: '100%',
                                                                                    //zIndex: -99,
                                                                                    //margin: '-18 0 0 0',                                   
                                                                                    //height: 80,                                   
                                                                                    margin: '-14 0 0 0',
                                                                                    height: 80,
                                                                                    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'background-color:transparent',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'left',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             margin: '-8 0 0 33',
                                                                                             id: 'Dashboard_NearestRedeem_StampContentNote6',
                                                                                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                         },
                                                                                          {
                                                                                              margin: '-2 0 0 33',
                                                                                              id: 'Dashboard_NearestRedeem_EnterpriseName6',
                                                                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                          },
                                                                                           {
                                                                                               margin: '0 0 0 33',
                                                                                               width: '100%',
                                                                                               id: 'Dashboard_NearestRedeem_EndDate6',
                                                                                               html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                           },

                                                                                    ]
                                                                                },


                                                                          ]
                                                                      },

                                                                      {
                                                                          xtype: 'spacer'
                                                                      },
                                                                  ]

                                                              },



                                                         {
                                                             xtype: 'container',
                                                             //width: '95%',
                                                             //height: 80,
                                                             margin: '12 0 0 0',
                                                             width: '95%',
                                                             height: 85,
                                                             //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                             //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             // style: 'background-color:transparent',
                                                             // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                             style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                 {
                                                                     xtype: 'spacer'
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     width: '92%',
                                                                     //height: 100,
                                                                     height: 80,
                                                                     margin: '10 0 0 0',
                                                                     name: 'container_Dashboard_NearestRedeem7',
                                                                     //style: {
                                                                     //    // background: '#D25959',
                                                                     //    background: 'rgba(76, 175, 80, 0.3);',
                                                                     //    // border: '2px'
                                                                     //},
                                                                     style: 'background-color:transparent',
                                                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                     //style: 'background-color:transparent',
                                                                     layout: {
                                                                         type: 'hbox',
                                                                         pack: 'center',
                                                                         align: 'center',
                                                                     },
                                                                     items: [
                                                                         {
                                                                             xtype: 'container',
                                                                             width: '15%',
                                                                             //  zIndex: 400,
                                                                             margin: '0 0 0 0',
                                                                             //style: {
                                                                             //    // background: '#D25959',
                                                                             //    background: 'rgba(76, 175, 80, 0.3);',
                                                                             //    // border: '2px'
                                                                             //},
                                                                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                             style: 'background-color:transparent',
                                                                             layout: {
                                                                                 type: 'vbox',
                                                                                 pack: 'center',
                                                                                 align: 'center',
                                                                             },
                                                                             items: [
                                                                                   {

                                                                                       //xtype: 'button',
                                                                                       //height: 90,
                                                                                       //width: 90,
                                                                                      // margin: '-18 0 0 -10',
                                                                                       margin: '-18 0 0 35',
                                                                                       //zIndex: 400,
                                                                                       id: 'Dashboard_NearestRedeem_StampContent7',
                                                                                       html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                       //ui: 'plain',
                                                                                       //handler: function () {

                                                                                       //}

                                                                                   },

                                                                             ]
                                                                         },
                                                                           {
                                                                               xtype: 'container',
                                                                               width: '95%',
                                                                              // width: '100%',
                                                                               // zIndex: -99,
                                                                               //margin: '-18 0 0 0',                                   
                                                                               //height: 80,                                   
                                                                               margin: '-14 0 0 0',
                                                                               height: 80,
                                                                               //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: 'background-color:transparent',
                                                                               layout: {
                                                                                   type: 'vbox',
                                                                                   pack: 'center',
                                                                                   align: 'left',
                                                                               },
                                                                               items: [
                                                                                    {
                                                                                        margin: '-8 0 0 33',
                                                                                        id: 'Dashboard_NearestRedeem_StampContentNote7',
                                                                                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                    },
                                                                                     {
                                                                                         margin: '-2 0 0 33',
                                                                                         id: 'Dashboard_NearestRedeem_EnterpriseName7',
                                                                                         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                     },
                                                                                      {
                                                                                          margin: '0 0 0 33',
                                                                                          width: '100%',
                                                                                          id: 'Dashboard_NearestRedeem_EndDate7',
                                                                                          html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                      },

                                                                               ]
                                                                           },


                                                                     ]
                                                                 },

                                                                 {
                                                                     xtype: 'spacer'
                                                                 },
                                                             ]

                                                         },




                                                            {
                                                                xtype: 'container',
                                                                //width: '95%',
                                                                //height: 80,
                                                                margin: '12 0 0 0',
                                                                width: '95%',
                                                                height: 85,
                                                                //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'center',
                                                                    align: 'center',
                                                                },
                                                                items: [
                                                                    {
                                                                        xtype: 'spacer'
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '92%',
                                                                        //height: 100,
                                                                        height: 80,
                                                                        margin: '10 0 0 0',
                                                                        name: 'container_Dashboard_NearestRedeem8',
                                                                        //style: {
                                                                        //    // background: '#D25959',
                                                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                                                        //    // border: '2px'
                                                                        //},
                                                                        style: 'background-color:transparent',
                                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                        //style: 'background-color:transparent',
                                                                        layout: {
                                                                            type: 'hbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '15%',
                                                                                //  zIndex: 400,
                                                                                margin: '0 0 0 0',
                                                                                //style: {
                                                                                //    // background: '#D25959',
                                                                                //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                //    // border: '2px'
                                                                                //},
                                                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                style: 'background-color:transparent',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                      {

                                                                                          //xtype: 'button',
                                                                                          //height: 90,
                                                                                          //width: 90,
                                                                                         // margin: '-18 0 0 -10',
                                                                                          margin: '-18 0 0 35',
                                                                                          //zIndex: 400,
                                                                                          id: 'Dashboard_NearestRedeem_StampContent8',
                                                                                          html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                          //ui: 'plain',
                                                                                          //handler: function () {

                                                                                          //}

                                                                                      },

                                                                                ]
                                                                            },
                                                                              {
                                                                                  xtype: 'container',
                                                                                  width: '95%',
                                                                                 // width: '100%',
                                                                                  // zIndex: -99,
                                                                                  //margin: '-18 0 0 0',                                   
                                                                                  //height: 80,                                   
                                                                                  margin: '-14 0 0 0',
                                                                                  height: 80,
                                                                                  //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                  style: 'background-color:transparent',
                                                                                  layout: {
                                                                                      type: 'vbox',
                                                                                      pack: 'center',
                                                                                      align: 'left',
                                                                                  },
                                                                                  items: [
                                                                                       {
                                                                                           margin: '-8 0 0 33',
                                                                                           id: 'Dashboard_NearestRedeem_StampContentNote8',
                                                                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                       },
                                                                                        {
                                                                                            margin: '-2 0 0 33',
                                                                                            id: 'Dashboard_NearestRedeem_EnterpriseName8',
                                                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                        },
                                                                                         {
                                                                                             margin: '0 0 0 33',
                                                                                             width: '100%',
                                                                                             id: 'Dashboard_NearestRedeem_EndDate8',
                                                                                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                         },

                                                                                  ]
                                                                              },


                                                                        ]
                                                                    },

                                                                    {
                                                                        xtype: 'spacer'
                                                                    },
                                                                ]

                                                            },

                                                          ]

                                                      },
                                                  ]
                                              },




                                                    ///////////////////////////////////////////////////////
                                                    //Loyalty Point Nearest Redeem Item

                                                                {
                                                                    xtype: 'container',
                                                                    width: '100%',
                                                                    // hidden: true,
                                                                    margin: '10 0 0 0',
                                                                    id: 'containerLoyaltyPointNearestRedeemItem_Header',
                                                                    style: {
                                                                        // background: '#D25959',
                                                                        background: 'transparent',
                                                                        // border: '2px'
                                                                    },
                                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                                    layout: {
                                                                        type: 'hbox',
                                                                        pack: 'left',
                                                                        align: 'left',
                                                                    },
                                                                    items: [
                                                                         {
                                                                             margin: '8 0 0 14',
                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_Header',
                                                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">2).-Point Loyalty Redemption</div>'
                                                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                                         },

                                                                          {
                                                                              xtype: 'button',
                                                                              id: 'btnLoyaltyPointNearestRedeemItem_Header',
                                                                              // hidden: true,
                                                                              //  badgeText: '1',
                                                                              margin: '0 0 0 0',
                                                                              height: 30,
                                                                              width: 30,
                                                                              html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                                  //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                                              }
                                                                          },



                                                                    ]
                                                                },


                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        //width: 1050,
                                                        height: 260,
                                                        margin: '-46 0 0 0',
                                                        //style: {
                                                        //    // background: '#D25959',
                                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                                        //    // border: '2px'
                                                        //},
                                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                        style: 'background-color:transparent',

                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center',
                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'spacer'
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                width: '95%',
                                                                height: 230,
                                                                margin: '0 0 0 0',
                                                                //style: {
                                                                //    // background: '#D25959',
                                                                //    background: 'rgba(76, 175, 80, 0.3);',
                                                                //    // border: '2px'
                                                                //},
                                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                // style: 'background-color:rgba(255, 255, 255, 0);border-radius: 10px 10px 10px 10px;',
                                                                style: 'background-color:transparent',
                                                                layout: {
                                                                    type: 'hbox',
                                                                    pack: 'center',
                                                                    align: 'center',
                                                                },
                                                                scrollable: {
                                                                    direction: 'horizontal',
                                                                    directionLock: true,
                                                                    indicators: false
                                                                },
                                                                items: [

                                                                             {
                                                                                 xtype: 'panel',
                                                                                 width: 2
                                                                             },

                                                                             {
                                                                                 xtype: 'container',
                                                                                 name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture0',
                                                                                 height: 165,
                                                                                 width: 160,
                                                                                 margin: '20 0 0 0',

                                                                                 //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                 //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                 style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                 layout: {
                                                                                     type: 'vbox',
                                                                                     pack: 'center',
                                                                                     align: 'center',
                                                                                 },
                                                                                 items: [
                                                                                       {
                                                                                           xtype: 'container',
                                                                                           width: '100%',
                                                                                           height: 18,
                                                                                           zIndex: 200,
                                                                                           style: 'background-color:transparent;',
                                                                                           layout: {
                                                                                               type: 'vbox',
                                                                                               pack: 'start',
                                                                                               align: 'center',
                                                                                               //type: 'hbox',
                                                                                               //pack: 'start',
                                                                                               //align: 'center',
                                                                                           },
                                                                                           items: [
                                                                                              {
                                                                                                  width: '100%',
                                                                                                  zIndex: 100,
                                                                                                  id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint0',
                                                                                                  html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',

                                                                                              },
                                                                                              //{
                                                                                              //    xtype:'spacer'
                                                                                              //},
                                                                                              // {
                                                                                              //     //width: '100%',
                                                                                              //     zIndex: 100,
                                                                                              //     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft0',
                                                                                              //     html: '<div style="color:purple;text-align: right;font-size:12px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">100<div style="color:purple;text-align: right;font-size:6px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Day Left</div></div>',

                                                                                              // },
                                                                                           ]

                                                                                       },

                                                                                      {

                                                                                          height: 165,
                                                                                          width: 110,
                                                                                          id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture0',
                                                                                          //margin: '-70 0 0 0',
                                                                                          margin: '-16 0 0 -8',
                                                                                          html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px">',

                                                                                      },
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '100%',
                                                                                         height: 38,
                                                                                         // docked: 'bottom',
                                                                                         /// hidden:true,
                                                                                         margin: '-42 0 0 0',
                                                                                         style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                         //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'start',
                                                                                             align: 'center',
                                                                                         },
                                                                                         items: [
                                                                                               {
                                                                                                   //width: '100%',
                                                                                                   margin: '-30 0 0 120',
                                                                                                   zIndex: 100,
                                                                                                   hidden: true,
                                                                                                   id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft0',
                                                                                                   html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                               },
                                                                                               {
                                                                                                   // margin: '-13 0 0 0',
                                                                                                   margin: '3 0 0 0',
                                                                                                   id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt0',
                                                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                   html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                               },

                                                                                            //{

                                                                                            //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                            //    margin:'-3 0 0 0',
                                                                                            //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                            //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                            //},

                                                                                             {

                                                                                                 id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt0',
                                                                                                 margin: '-3 0 0 0',
                                                                                                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                 html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                             },



                                                                                         ]
                                                                                     },





                                                                                 ]
                                                                             },

                                                                    {
                                                                        xtype: 'panel',
                                                                        width: 15
                                                                    },

                                                                    {
                                                                        xtype: 'container',
                                                                        height: 165,
                                                                        width: 160,
                                                                        margin: '20 0 0 0',
                                                                        name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture1',
                                                                        //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                        //  style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                        style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [

                                                                                 {
                                                                                     xtype: 'container',
                                                                                     width: '100%',
                                                                                     height: 18,
                                                                                     zIndex: 200,
                                                                                     style: 'background-color:transparent;',
                                                                                     layout: {
                                                                                         type: 'vbox',
                                                                                         pack: 'start',
                                                                                         align: 'center',
                                                                                     },
                                                                                     items: [
                                                                                        {
                                                                                            width: '100%',
                                                                                            zIndex: 100,
                                                                                            id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint1',
                                                                                            html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                        },
                                                                                     ]

                                                                                 },


                                                                             {

                                                                                 height: 165,
                                                                                 width: 110,
                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture1',
                                                                                 //margin: '-70 0 0 0',
                                                                                 margin: '-16 0 0 -8',
                                                                                 html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px">',

                                                                             },
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '100%',
                                                                                height: 38,
                                                                                // docked: 'bottom',
                                                                                /// hidden:true,
                                                                                margin: '-42 0 0 0',
                                                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'start',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         //width: '100%',
                                                                                         margin: '-30 0 0 120',
                                                                                         zIndex: 100,
                                                                                         hidden: true,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft1',
                                                                                         html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                     },
                                                                                      {
                                                                                          margin: '3 0 0 0',
                                                                                          id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt1',
                                                                                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                          html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                      },

                                                                                   //{

                                                                                   //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                   //    margin:'-3 0 0 0',
                                                                                   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                   //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                   //},

                                                                                    {

                                                                                        id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt1',
                                                                                        margin: '-3 0 0 0',
                                                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                    },



                                                                                ]
                                                                            },





                                                                        ]
                                                                    },

                                                                    {
                                                                        xtype: 'panel',
                                                                        width: 15
                                                                    },

                                                                    {
                                                                        xtype: 'container',
                                                                        height: 165,
                                                                        width: 160,
                                                                        margin: '20 0 0 0',
                                                                        name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture2',
                                                                        //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                        // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                        style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '100%',
                                                                                 height: 18,
                                                                                 zIndex: 200,
                                                                                 style: 'background-color:transparent;',
                                                                                 layout: {
                                                                                     type: 'vbox',
                                                                                     pack: 'start',
                                                                                     align: 'center',
                                                                                 },
                                                                                 items: [
                                                                                     {
                                                                                         width: '100%',
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint2',
                                                                                         html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                     }
                                                                                 ]

                                                                             },
                                                                             {

                                                                                 height: 165,
                                                                                 width: 110,
                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture2',
                                                                                 margin: '-16 0 0 -8',
                                                                                 html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                             },
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '100%',
                                                                                height: 38,
                                                                                // docked: 'bottom',
                                                                                /// hidden:true,
                                                                                margin: '-42 0 0 0',
                                                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'start',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                    {
                                                                                        //width: '100%',
                                                                                        margin: '-30 0 0 120',
                                                                                        zIndex: 100,
                                                                                        hidden: true,
                                                                                        id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft2',
                                                                                        html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                    },
                                                                                      {
                                                                                          margin: '3 0 0 0',
                                                                                          id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt2',
                                                                                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                          html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                      },

                                                                                   //{

                                                                                   //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                   //    margin:'-3 0 0 0',
                                                                                   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                   //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                   //},

                                                                                    {

                                                                                        id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt2',
                                                                                        margin: '-3 0 0 0',
                                                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                    },



                                                                                ]
                                                                            },





                                                                        ]
                                                                    },



                                                                    {
                                                                        xtype: 'panel',
                                                                        width: 15
                                                                    },


                                                                    {
                                                                        xtype: 'container',
                                                                        height: 165,
                                                                        width: 160,
                                                                        margin: '20 0 0 0',
                                                                        name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture3',
                                                                        //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                        style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '100%',
                                                                                 height: 18,
                                                                                 zIndex: 200,
                                                                                 style: 'background-color:transparent;',
                                                                                 layout: {
                                                                                     type: 'vbox',
                                                                                     pack: 'start',
                                                                                     align: 'center',
                                                                                 },
                                                                                 items: [
                                                                                     {
                                                                                         width: '100%',
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint3',
                                                                                         html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                     }
                                                                                 ]

                                                                             },
                                                                             {

                                                                                 height: 165,
                                                                                 width: 110,
                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture3',
                                                                                 margin: '-16 0 0 -8',
                                                                                 html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                             },
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '100%',
                                                                                height: 38,
                                                                                // docked: 'bottom',
                                                                                /// hidden:true,
                                                                                margin: '-42 0 0 0',
                                                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'start',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         //width: '100%',
                                                                                         margin: '-30 0 0 120',
                                                                                         zIndex: 100,
                                                                                         hidden: true,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft3',
                                                                                         html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                     },
                                                                                      {
                                                                                          margin: '3 0 0 0',
                                                                                          id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt3',
                                                                                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                          html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                      },

                                                                                   //{

                                                                                   //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                   //    margin:'-3 0 0 0',
                                                                                   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                   //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                   //},

                                                                                    {

                                                                                        id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt3',
                                                                                        margin: '-3 0 0 0',
                                                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                    },



                                                                                ]
                                                                            },





                                                                        ]
                                                                    },

                                                                    {
                                                                        xtype: 'panel',
                                                                        width: 15
                                                                    },

                                                                    {
                                                                        xtype: 'container',
                                                                        height: 165,
                                                                        width: 160,
                                                                        margin: '20 0 0 0',
                                                                        name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture4',
                                                                        //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                        style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'center',
                                                                            align: 'center',
                                                                        },
                                                                        items: [
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '100%',
                                                                                 height: 18,
                                                                                 zIndex: 200,
                                                                                 style: 'background-color:transparent;',
                                                                                 layout: {
                                                                                     type: 'vbox',
                                                                                     pack: 'start',
                                                                                     align: 'center',
                                                                                 },
                                                                                 items: [
                                                                                     {
                                                                                         width: '100%',
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint4',
                                                                                         html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                     }
                                                                                 ]

                                                                             },
                                                                             {

                                                                                 height: 165,
                                                                                 width: 110,
                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture4',
                                                                                 margin: '-16 0 0 -8',
                                                                                 html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                             },
                                                                            {
                                                                                xtype: 'container',
                                                                                width: '100%',
                                                                                height: 38,
                                                                                // docked: 'bottom',
                                                                                /// hidden:true,
                                                                                margin: '-42 0 0 0',
                                                                                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'start',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         //width: '100%',
                                                                                         margin: '-30 0 0 120',
                                                                                         zIndex: 100,
                                                                                         hidden: true,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft4',
                                                                                         html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                     },
                                                                                      {
                                                                                          margin: '3 0 0 0',
                                                                                          id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt4',
                                                                                          //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                          html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                      },

                                                                                   //{

                                                                                   //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                   //    margin:'-3 0 0 0',
                                                                                   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                   //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                   //},

                                                                                    {

                                                                                        id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt4',
                                                                                        margin: '-3 0 0 0',
                                                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                    },



                                                                                ]
                                                                            },




                                                                        ]

                                                                    },




                                                                            {
                                                                                xtype: 'panel',
                                                                                width: 15
                                                                            },

                                                                            {
                                                                                xtype: 'container',
                                                                                //hidden: true,
                                                                                height: 165,
                                                                                width: 160,
                                                                                margin: '20 0 0 0',
                                                                                name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture5',
                                                                                //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '100%',
                                                                                         height: 18,
                                                                                         zIndex: 200,
                                                                                         style: 'background-color:transparent;',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'start',
                                                                                             align: 'center',
                                                                                         },
                                                                                         items: [
                                                                                             {
                                                                                                 width: '100%',
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint5',
                                                                                                 html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                             }
                                                                                         ]

                                                                                     },
                                                                                     {

                                                                                         height: 165,
                                                                                         width: 110,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture5',
                                                                                         margin: '-16 0 0 -8',
                                                                                         html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                     },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '100%',
                                                                                        height: 38,
                                                                                        // docked: 'bottom',
                                                                                        /// hidden:true,
                                                                                        margin: '-42 0 0 0',
                                                                                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                        //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'start',
                                                                                            align: 'center',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 //width: '100%',
                                                                                                 margin: '-30 0 0 120',
                                                                                                 zIndex: 100,
                                                                                                 hidden: true,
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft5',
                                                                                                 html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                             },
                                                                                              {
                                                                                                  margin: '3 0 0 0',
                                                                                                  id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt5',
                                                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                  html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                              },

                                                                                           //{

                                                                                           //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                           //    margin:'-3 0 0 0',
                                                                                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                           //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                           //},

                                                                                            {

                                                                                                id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt5',
                                                                                                margin: '-3 0 0 0',
                                                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                            },



                                                                                        ]
                                                                                    },





                                                                                ]
                                                                            },








                                                                            {
                                                                                xtype: 'panel',
                                                                                width: 15
                                                                            },

                                                                            {
                                                                                xtype: 'container',
                                                                                //hidden: true,
                                                                                height: 165,
                                                                                width: 160,
                                                                                margin: '20 0 0 0',
                                                                                name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture6',
                                                                                //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '100%',
                                                                                         height: 18,
                                                                                         zIndex: 200,
                                                                                         style: 'background-color:transparent;',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'start',
                                                                                             align: 'center',
                                                                                         },
                                                                                         items: [
                                                                                             {
                                                                                                 width: '100%',
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint6',
                                                                                                 html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                             }
                                                                                         ]

                                                                                     },
                                                                                     {

                                                                                         height: 165,
                                                                                         width: 110,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture6',
                                                                                         margin: '-16 0 0 -8',
                                                                                         html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                     },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '100%',
                                                                                        height: 38,
                                                                                        // docked: 'bottom',
                                                                                        /// hidden:true,
                                                                                        margin: '-42 0 0 0',
                                                                                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                        //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'start',
                                                                                            align: 'center',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 //width: '100%',
                                                                                                 margin: '-30 0 0 120',
                                                                                                 zIndex: 100,
                                                                                                 hidden: true,
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft6',
                                                                                                 html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                             },
                                                                                              {
                                                                                                  margin: '3 0 0 0',
                                                                                                  id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt6',
                                                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                  html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                              },

                                                                                           //{

                                                                                           //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                           //    margin:'-3 0 0 0',
                                                                                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                           //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                           //},

                                                                                            {

                                                                                                id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt6',
                                                                                                margin: '-3 0 0 0',
                                                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                            },



                                                                                        ]
                                                                                    },





                                                                                ]
                                                                            },







                                                                            {
                                                                                xtype: 'panel',
                                                                                width: 15
                                                                            },

                                                                            {
                                                                                xtype: 'container',
                                                                                //hidden: true,
                                                                                height: 165,
                                                                                width: 160,
                                                                                margin: '20 0 0 0',
                                                                                name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture7',
                                                                                //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '100%',
                                                                                         height: 18,
                                                                                         zIndex: 200,
                                                                                         style: 'background-color:transparent;',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'start',
                                                                                             align: 'center',
                                                                                         },
                                                                                         items: [
                                                                                             {
                                                                                                 width: '100%',
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint7',
                                                                                                 html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                             }
                                                                                         ]

                                                                                     },
                                                                                     {

                                                                                         height: 165,
                                                                                         width: 110,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture7',
                                                                                         margin: '-16 0 0 -8',
                                                                                         html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                     },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '100%',
                                                                                        height: 38,
                                                                                        // docked: 'bottom',
                                                                                        /// hidden:true,
                                                                                        margin: '-42 0 0 0',
                                                                                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                        //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'start',
                                                                                            align: 'center',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 //width: '100%',
                                                                                                 margin: '-30 0 0 120',
                                                                                                 zIndex: 100,
                                                                                                 hidden: true,
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft7',
                                                                                                 html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                             },
                                                                                              {
                                                                                                  margin: '3 0 0 0',
                                                                                                  id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt7',
                                                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                  html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                              },

                                                                                           //{

                                                                                           //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                           //    margin:'-3 0 0 0',
                                                                                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                           //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                           //},

                                                                                            {

                                                                                                id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt7',
                                                                                                margin: '-3 0 0 0',
                                                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                            },



                                                                                        ]
                                                                                    },





                                                                                ]
                                                                            },




                                                                            {
                                                                                xtype: 'panel',
                                                                                width: 15
                                                                            },

                                                                            {
                                                                                xtype: 'container',
                                                                                //hidden: true,
                                                                                height: 165,
                                                                                width: 160,
                                                                                margin: '20 0 0 0',
                                                                                name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture8',
                                                                                //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'center',
                                                                                    align: 'center',
                                                                                },
                                                                                items: [
                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '100%',
                                                                                         height: 18,
                                                                                         zIndex: 200,
                                                                                         style: 'background-color:transparent;',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'start',
                                                                                             align: 'center',
                                                                                         },
                                                                                         items: [
                                                                                             {
                                                                                                 width: '100%',
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint8',
                                                                                                 html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                             }
                                                                                         ]

                                                                                     },
                                                                                     {

                                                                                         height: 165,
                                                                                         width: 110,
                                                                                         id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture8',
                                                                                         margin: '-16 0 0 -8',
                                                                                         html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                     },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '100%',
                                                                                        height: 38,
                                                                                        // docked: 'bottom',
                                                                                        /// hidden:true,
                                                                                        margin: '-42 0 0 0',
                                                                                        style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                        //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'start',
                                                                                            align: 'center',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 //width: '100%',
                                                                                                 margin: '-30 0 0 120',
                                                                                                 zIndex: 100,
                                                                                                 hidden: true,
                                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft8',
                                                                                                 html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                             },
                                                                                              {
                                                                                                  margin: '3 0 0 0',
                                                                                                  id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt8',
                                                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                  html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                              },

                                                                                           //{

                                                                                           //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                           //    margin:'-3 0 0 0',
                                                                                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                           //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                           //},

                                                                                            {

                                                                                                id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt8',
                                                                                                margin: '-3 0 0 0',
                                                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                            },



                                                                                        ]
                                                                                    },





                                                                                ]
                                                                            },

                                                                ]
                                                            },

                                                            {
                                                                xtype: 'spacer'
                                                            },
                                                        ]

                                                    },




                                                    //////////////////// voucher redemption
                                                  //////////////////Ayoha Voucher////
                    {
                        xtype: 'container',
                        width: '100%',
                        /// hidden:true,
                        // margin: '120 0 0 0',
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
                        items: [
                             {
                                 margin: '0 0 0 14',
                                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                 id: 'htmlFloatPanel_DashboardMerchantRewardTxt',
                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Merchant Voucher</b></div>'
                                 // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                             },
                              {
                                  xtype: 'spacer'
                              },
            {

                margin: '0 14 0 0',
                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

            }

                              //{
                              //    margin: '-4 0 0 14',
                              //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                              //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1.-Welcome/Opening Account Voucer</div>'
                              //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                              //},
                        ]
                    },



                     {
                         xtype: 'container',
                         width: '98%',
                         /// hidden:true,
                         margin: '10 0 0 0',
                         height: 222,
                         style: 'background-color: transparent;',
                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                         //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                              {

                                  id: 'FloatPanel_DashboardMerchantRewardVoucherList',
                                  // margin: '-4 0 0 14',
                                  // margin: '-5 0 0 0',
                                  // store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore,
                                  // grouped: true,
                                  xtype: 'dataview',
                                  // xtype: 'list',
                                  height: 200,
                                  //scrollable: true,
                                  // scrollable: 'horizontal',
                                  // indicators: false,
                                  //inline: true,
                                  inline: {
                                      wrap: false
                                  },
                                  scrollable: {
                                      direction: 'horizontal',
                                      indicators: false,
                                  },
                                  width: '100%',
                                  cls: 'dataview-item',
                                  //itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>',
                                  itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
                                  emptyText: '<div style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="resources/icons/NotAvailableVoucher.png" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:9px;word-wrap: break-word;font-weight:normal;width:100%">*Vouchers will be given by ayoha reward to users when users reach a certain level of spending in the ayoha merchant online store and also certain special days such as religious days, national independence day, birthdays and so on.</div></div>',
                              },
                              //{
                              //    height: 198,
                              //    width: '100%',
                              //    // margin: '0 0 0 14',
                              //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                              //    html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/AyohaVoucher.png"/>'
                              //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                              //},
                         ]
                     },








                                                    ////////


                                          ]

                                      },
    //////////////////////////////////////end merchant redemption

















                                  ]
                              },



















                              /////////////////////////////////////////////////

                              ///////Membership Contest

                              {
                                  xtype: 'container',
                                  //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                                  width: '100%',
                                  margin: '120 0 0 0',
                                  height: 600,
                                  style: "background-color: transparent;",
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center'

                                  },
                                  items: [
                                         //////////////////////////MembershipContest


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           // hidden: true,
                                           margin: '10 0 0 0',
                                           id: 'containerFloatPanel_DashboardMerchantMembershipContest_Header',
                                           style: {
                                               // background: '#D25959',
                                               background: 'transparent',
                                               // border: '2px'
                                           },
                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                           layout: {
                                               type: 'hbox',
                                               pack: 'left',
                                               align: 'left',
                                           },
                                           items: [
                                                {
                                                    margin: '8 0 0 14',
                                                    id: 'htmlFloatPanel_DashboardMerchantMembershipContest_Header',
                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                    html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">Membership Contest</div>'
                                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                },

                                                 {
                                                     xtype: 'button',
                                                     id: 'btnFloatPanel_DashboardMerchantMembershipContest_Header',
                                                     // hidden: true,
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 30,
                                                     width: 30,
                                                     html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                     }
                                                 },



                                           ]
                                       },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 600,
                                                         margin: '0 0 0 0',
                                                         //  hidden: true,
                                                         id: 'htmlFloatPanel_DashboardMerchantMembershipContest',
                                                         style: "background-color: transparent;",
                                                         // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center'

                                                         },
                                                         items: [
                                                             {

                                                                 id: 'FloatPanel_MerchantReward_MembershipContest',
                                                                 margin: '-30 0 0 0',
                                                                 //  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                                 // grouped: true,
                                                                 xtype: 'dataview',
                                                                 //xtype: 'list',
                                                                 height: 600,
                                                                 style: "background-color: transparent;",
                                                                 inline: {
                                                                     wrap: false
                                                                 },
                                                                 scrollable: {
                                                                     direction: 'horizontal',
                                                                     indicators: false,
                                                                 },
                                                                 width: '100%',


                                                                 //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
                                                                 //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                                 //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                 //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


                                                                 //'</div>',


                                                                 itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
                                                               '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
                                                               '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-25px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                             // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
                                                              '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 50%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

                                                              '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


                                                            '</div>',


                                                                 emptyText: '<div  style="background-color:transparent;width:100%; height: 500px;margin:20px 0px 0px 0px;text-align:center"><img src="resources/icons/NoMembershipEventContest01.jpg" style="width: 95%; height: 500px;"/></div>',

                                                             },
                                                         ]
                                                     },


                                  ]
                              },

                              ////////////////////////////////////////////////////////



                              //////membership event


                              {
                                  xtype: 'container',
                                  //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                                  width: '100%',
                                  margin: '30 0 0 0',
                                  height: 400,
                                  style: "background-color: transparent;",
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center'

                                  },
                                  items: [
                                         //////////////////////////MembershipEvent


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           // hidden: true,
                                           margin: '0 0 0 0',
                                           id: 'containerLoyaltMembershipEvent_Header',
                                           style: {
                                               // background: '#D25959',
                                               background: 'transparent',
                                               // border: '2px'
                                           },
                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                           layout: {
                                               type: 'hbox',
                                               pack: 'left',
                                               align: 'left',
                                           },
                                           items: [
                                                {
                                                    margin: '8 0 0 14',
                                                    id: 'htmlLoyaltyMembershipEvent_Header',
                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                    html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Membership Events</div>'
                                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                },

                                                 {
                                                     xtype: 'button',
                                                     id: 'btnLoyaltyMembershipEventtNearestRedeemItem_Header',
                                                     // hidden: true,
                                                     //  badgeText: '1',
                                                     margin: '0 0 0 0',
                                                     height: 30,
                                                     width: 30,
                                                     html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                     }
                                                 },



                                           ]
                                       },


                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         height: 400,
                                                         margin: '40 0 0 0',
                                                         //  hidden: true,
                                                         id: 'htmlFloatPanel_DashboardMerchantMembershipEvent',
                                                         style: "background-color: transparent;",
                                                         // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center'

                                                         },
                                                         items: [
                                                             {

                                                                 id: 'FloatPanel_MerchantReward_MembershipEvent',
                                                                 margin: '-15 0 0 0',
                                                                 //  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                                 // grouped: true,
                                                                 xtype: 'dataview',
                                                                 //xtype: 'list',
                                                                 height: 500,
                                                                 style: "background-color: transparent;",
                                                                 inline: {
                                                                     wrap: false
                                                                 },
                                                                 scrollable: {
                                                                     direction: 'horizontal',
                                                                     indicators: false,
                                                                 },
                                                                 width: '100%',
                                                                 // cls: 'dataview-item',
                                                                 //itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')"  src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')">{EventName}</div><br><div  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">{ModifiedPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>',

                                                                 //itemTpl: '<div class="myContent" style="background-color:white;width:100%;height:400px;">' +
                                                                 //     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                                 //    '&nbsp;&nbsp;<img src="{EventCoverPhoto}" style="width:390px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                 //   '&nbsp;&nbsp;<div style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 270px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div><br><div style="margin:-21px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-21px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div></div></div>&nbsp;&nbsp;' +
                                                                 //   '&nbsp;&nbsp;<div style="width: 90px; float:left; height:30px; background:red; margin:0px"></div><div style="width: 270px; float:left; height:30px; background:black; margin:0px;word-break: break-all;"></div>&nbsp;&nbsp;' +
                                                                 //   '</div>',



                                                                 itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:400px;">' +
                                                                  '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

                                                                  // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
                                                                  '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:{ModifiedWidth}px;height:200px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:transparent; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:transparent; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div><br>' +


                                                              //'{ModifiedRespondStatus}' +
                                                               '</div>',


                                                                 //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


                                                                 // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
                                                                 emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

                                                             },
                                                         ]
                                                     },


                                  ]
                              },





/////////////////////////////////////// Membership Discount Card Section//////////////////////////////////////////////////////////


{
    xtype: 'container',
    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
    width: '100%',
    margin: '30 0 0 0',
    height: 260,
    style: "background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items: [
          

         {
             xtype: 'container',
             width: '100%',
             // hidden: true,
             margin: '0 0 0 0',
             id: 'containerLoyaltMembershipDiscount_Header',
             style: {
                 // background: '#D25959',
                 background: 'transparent',
                 // border: '2px'
             },
             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
             layout: {
                 type: 'hbox',
                 pack: 'left',
                 align: 'left',
             },
             items: [
                  {
                      margin: '8 0 0 14',
                      id: 'htmlLoyaltyMembershipDiscount_Header',
                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                      html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Membership Discount</div>'
                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                  },

                   {
                       xtype: 'button',
                       id: 'btnLoyaltyMembershipDiscountItem_Header',
                       // hidden: true,
                       //  badgeText: '1',
                       margin: '0 0 0 0',
                       height: 30,
                       width: 30,
                       html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                       }
                   },



             ]
         },


         {
            xtype: 'container',
            width: '98%',
            /// hidden:true,
            margin: '10 0 0 0',
            height: 222,
            style: 'background-color: transparent;',
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                 {
        
                     id: 'AyohaMerchantRewardDiscountList',
                     // margin: '-4 0 0 14',
                     // margin: '-5 0 0 0',
                     // store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore,
                     // grouped: true,
                     xtype: 'dataview',
                     // xtype: 'list',
                     height: 200,
                     //scrollable: true,
                     // scrollable: 'horizontal',
                     // indicators: false,
                     //inline: true,
                     inline: {
                         wrap: false
                     },
                     scrollable: {
                         direction: 'horizontal',
                         indicators: false,
                     },
                     width: '100%',
                     cls: 'dataview-item',
                     //itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>',
                     itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{DiscountImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{DiscountEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Discount:<b>{DiscountPercent}%</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Discount Name:{DiscountName}</div></td></tr></tbody></table></div></div>',
                     emptyText: '<div style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="resources/icons/NotAvailableVoucher.png" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:9px;word-wrap: break-word;font-weight:normal;width:100%">*Vouchers will be given by ayoha reward to users when users reach a certain level of spending in the ayoha merchant online store and also certain special days such as religious days, national independence day, birthdays and so on.</div></div>',
                 },
                 //{
                 //    height: 198,
                 //    width: '100%',
                 //    // margin: '0 0 0 14',
                 //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                 //    html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/AyohaVoucher.png"/>'
                 //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                 //},
            ]
        },


    ]
},






                              //////////////////////////////////////////////////////////

                              ///////Membership Weekly Summary


                        //       {
                        //           xtype: 'container',
                        //           width: '100%',
                        //           hidden: true,
                        //           margin: '30 0 0 0',
                        //           style: {
                        //               // background: '#D25959',
                        //               background: 'transparent',
                        //               // border: '2px'
                        //           },
                        //           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                        //           layout: {
                        //               type: 'hbox',
                        //               pack: 'left',
                        //               align: 'left',
                        //           },
                        //           items: [
                        //                {
                        //                    margin: '0 0 0 14',
                        //                    zIndex: 100,
                        //                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                        //                    html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Membership Weekly Summary</b></div>'
                        //                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                        //                },
                        //           ]
                        //       },

                        //  {
                        //      xtype: 'container',
                        //      width: '100%',
                        //      margin: '0 0 0 0',
                        //      hidden: true,
                        //      style: {
                        //          // background: '#D25959',
                        //          background: 'transparent',
                        //          // border: '2px'
                        //      },
                        //      height: 8,

                        //  },


                        //  {

                        //      xtype: 'container',
                        //      style: "background-color: transparent;",
                        //      hidden: true,
                        //      width: '100%',
                        //      //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                        //      layout: {
                        //          type: 'hbox',
                        //          pack: 'center',
                        //          align: 'center'

                        //      },
                        //      items: [
                        //           {
                        //               xtype: 'spacer'
                        //           },
                        //          {
                        //              xtype: 'container',
                        //              width: '45%',
                        //              height: 90,
                        //              margin: '0 0 0 0',
                        //              //style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                        //              style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                        //              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                        //              layout: {
                        //                  type: 'vbox',
                        //                  pack: 'center',
                        //                  align: 'center',
                        //              },
                        //              items: [
                        //                    {
                        //                        xtype: 'container',
                        //                        width: '100%',

                        //                        margin: '0 0 0 0',
                        //                        //style: {
                        //                        //    // background: '#D25959',
                        //                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //                        //    // border: '2px'
                        //                        //},
                        //                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                        style: 'background-color:transparent',
                        //                        layout: {
                        //                            type: 'vbox',

                        //                        },
                        //                        items: [
                        //                             {
                        //                                 margin: '0 0 0 0',
                        //                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                        //                             },

                        //                        ]
                        //                    },
                        //                       {
                        //                           xtype: 'container',
                        //                           width: '100%',

                        //                           margin: '-5 0 0 0',
                        //                           //style: {
                        //                           //    // background: '#D25959',
                        //                           //    background: 'rgba(76, 175, 80, 0.3);',
                        //                           //    // border: '2px'
                        //                           //},
                        //                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                           style: 'background-color:transparent',
                        //                           layout: {
                        //                               type: 'hbox',
                        //                               pack: 'center',
                        //                               align: 'center',
                        //                           },
                        //                           items: [
                        //                                {

                        //                                    xtype: 'button',
                        //                                    height: 60,
                        //                                    width: 60,

                        //                                    margin: '0 0 0 0',
                        //                                    id: 'btnMyAccount_Dashboard_Enterprise_Activity_Stamp',
                        //                                    //badgeText: "2",
                        //                                    html: '<img src="resources/icons/latestStampcardPurple.png" width="50" height="50" alt="Company Name">',
                        //                                    ui: 'plain',
                        //                                    handler: function () {

                        //                                        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                        //                                        //  setupMovementMap(2);





                        //                                        //Ext.getCmp('mainView').setActiveItem(16);
                        //                                        //loadNotificationSummary();
                        //                                    }
                        //                                },
                        //                                    {
                        //                                        margin: '0 0 0 0',
                        //                                        id: 'Dashboard_AyohaActivity_ThisWeekStamp',
                        //                                        html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">100</div>',
                        //                                    },
                        //                                    //margin: '10 0 0 0',
                        //                                    //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                        //                           ]
                        //                       },
                        //                    {
                        //                        margin: '-5 0 0 0',
                        //                        html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Stamps</div>',
                        //                    },
                        //              ]
                        //          },

                        //          {
                        //              xtype: 'spacer',
                        //              // hidden: true
                        //          },



                        //            {
                        //                xtype: 'container',
                        //                width: '45%',
                        //                // hidden: true,
                        //                height: 90,
                        //                margin: '0 0 0 0',
                        //                //  style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                        //                style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                        //                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                        //                layout: {
                        //                    type: 'vbox',
                        //                    pack: 'center',
                        //                    align: 'center',
                        //                },
                        //                items: [
                        //                      {
                        //                          xtype: 'container',
                        //                          width: '100%',

                        //                          margin: '0 0 0 0',
                        //                          //style: {
                        //                          //    // background: '#D25959',
                        //                          //    background: 'rgba(76, 175, 80, 0.3);',
                        //                          //    // border: '2px'
                        //                          //},
                        //                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                          style: 'background-color:transparent',
                        //                          layout: {
                        //                              type: 'vbox',

                        //                          },
                        //                          items: [
                        //                               {
                        //                                   margin: '0 0 0 0',
                        //                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamp Card Redemption</div>',
                        //                               },

                        //                          ]
                        //                      },
                        //                         {
                        //                             xtype: 'container',
                        //                             width: '100%',

                        //                             margin: '-5 0 0 0',
                        //                             //style: {
                        //                             //    // background: '#D25959',
                        //                             //    background: 'rgba(76, 175, 80, 0.3);',
                        //                             //    // border: '2px'
                        //                             //},
                        //                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                             style: 'background-color:transparent',
                        //                             layout: {
                        //                                 type: 'hbox',
                        //                                 pack: 'center',
                        //                                 align: 'center',
                        //                             },
                        //                             items: [
                        //                                  {

                        //                                      xtype: 'button',
                        //                                      height: 60,
                        //                                      width: 60,

                        //                                      margin: '0 0 0 0',
                        //                                      id: 'btnMyAccount_Dashboard_Enterprise_Activity_Campaign',
                        //                                      //badgeText: "2",
                        //                                      html: '<img src="resources/icons/StampRedeemThisWeek03.png" width="50" height="50" alt="Company Name">',
                        //                                      ui: 'plain',
                        //                                      handler: function () {

                        //                                          //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                        //                                          //  setupMovementMap(2);





                        //                                          //Ext.getCmp('mainView').setActiveItem(16);
                        //                                          //loadNotificationSummary();
                        //                                      }
                        //                                  },
                        //                                      {
                        //                                          margin: '0 0 0 0',
                        //                                          id: 'Dashboard_AyohaActivity_ThisWeekRedeemStamp',
                        //                                          html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                        //                                      },
                        //                                      //margin: '10 0 0 0',
                        //                                      //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                        //                             ]
                        //                         },
                        //                          {
                        //                              margin: '-5 0 0 0',
                        //                              html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Redeem</div>',
                        //                          },

                        //                ]
                        //            },
                        //             {
                        //                 xtype: 'spacer',
                        //                 // hidden: true,
                        //             },
                        //      ]


                        //  },







                        //  {

                        //      xtype: 'container',
                        //      style: "background-color: transparent;",
                        //      width: '100%',
                        //      margin: '15 0 0 0',
                        //      hidden: true,
                        //      //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                        //      layout: {
                        //          type: 'hbox',
                        //          pack: 'center',
                        //          align: 'center'

                        //      },
                        //      items: [
                        //           {
                        //               xtype: 'spacer'
                        //           },
                        //          {
                        //              xtype: 'container',
                        //              width: '45%',
                        //              height: 90,
                        //              margin: '0 0 0 0',
                        //              style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                        //              //style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                        //              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                        //              layout: {
                        //                  type: 'vbox',
                        //                  pack: 'center',
                        //                  align: 'center',
                        //              },
                        //              items: [
                        //                    {
                        //                        xtype: 'container',
                        //                        width: '100%',

                        //                        margin: '0 0 0 0',
                        //                        //style: {
                        //                        //    // background: '#D25959',
                        //                        //    background: 'rgba(76, 175, 80, 0.3);',
                        //                        //    // border: '2px'
                        //                        //},
                        //                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                        style: 'background-color:transparent',
                        //                        layout: {
                        //                            type: 'vbox',

                        //                        },
                        //                        items: [
                        //                             {
                        //                                 margin: '0 0 0 0',
                        //                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Points</div>',
                        //                             },

                        //                        ]
                        //                    },
                        //                       {
                        //                           xtype: 'container',
                        //                           width: '100%',

                        //                           margin: '-5 0 0 0',
                        //                           //style: {
                        //                           //    // background: '#D25959',
                        //                           //    background: 'rgba(76, 175, 80, 0.3);',
                        //                           //    // border: '2px'
                        //                           //},
                        //                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                           style: 'background-color:transparent',
                        //                           layout: {
                        //                               type: 'hbox',
                        //                               pack: 'center',
                        //                               align: 'center',
                        //                           },
                        //                           items: [
                        //                                {

                        //                                    xtype: 'button',
                        //                                    height: 60,
                        //                                    width: 60,

                        //                                    margin: '0 0 0 0',
                        //                                    id: 'btnMyAccount_Dashboard_Enterprise_Activity_Point',
                        //                                    //badgeText: "2",
                        //                                    html: '<img src="resources/icons/ayoharedeeempoint01.png" width="50" height="50" alt="Company Name">',
                        //                                    ui: 'plain',
                        //                                    handler: function () {

                        //                                        //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                        //                                        //  setupMovementMap(2);





                        //                                        //Ext.getCmp('mainView').setActiveItem(16);
                        //                                        //loadNotificationSummary();
                        //                                    }
                        //                                },
                        //                                    {
                        //                                        margin: '0 0 0 0',
                        //                                        id: 'Dashboard_AyohaActivity_ThisWeekPoint',
                        //                                        html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                        //                                    },
                        //                                    //margin: '10 0 0 0',
                        //                                    //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                        //                           ]
                        //                       },
                        //                    {
                        //                        margin: '-5 0 0 0',
                        //                        html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Points</div>',
                        //                    },
                        //              ]
                        //          },

                        //          {
                        //              xtype: 'spacer'
                        //          },



                        //            {
                        //                xtype: 'container',
                        //                width: '45%',
                        //                height: 90,
                        //                margin: '0 0 0 0',
                        //                style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                        //                //style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                        //                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                        //                layout: {
                        //                    type: 'vbox',
                        //                    pack: 'center',
                        //                    align: 'center',
                        //                },
                        //                items: [
                        //                      {
                        //                          xtype: 'container',
                        //                          width: '100%',

                        //                          margin: '0 0 0 0',
                        //                          //style: {
                        //                          //    // background: '#D25959',
                        //                          //    background: 'rgba(76, 175, 80, 0.3);',
                        //                          //    // border: '2px'
                        //                          //},
                        //                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                          style: 'background-color:transparent',
                        //                          layout: {
                        //                              type: 'vbox',

                        //                          },
                        //                          items: [
                        //                               {
                        //                                   margin: '0 0 0 0',
                        //                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Point Card Redemption</div>',
                        //                               },

                        //                          ]
                        //                      },
                        //                         {
                        //                             xtype: 'container',
                        //                             width: '100%',

                        //                             margin: '-5 0 0 0',
                        //                             //style: {
                        //                             //    // background: '#D25959',
                        //                             //    background: 'rgba(76, 175, 80, 0.3);',
                        //                             //    // border: '2px'
                        //                             //},
                        //                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                        //                             style: 'background-color:transparent',
                        //                             layout: {
                        //                                 type: 'hbox',
                        //                                 pack: 'center',
                        //                                 align: 'center',
                        //                             },
                        //                             items: [
                        //                                  {

                        //                                      xtype: 'button',
                        //                                      height: 60,
                        //                                      width: 60,

                        //                                      margin: '0 0 0 0',
                        //                                      id: 'btnMyAccount_Dashboard_Enterprise_Activity_MembershipCards',
                        //                                      //badgeText: "2",
                        //                                      html: '<img src="resources/icons/thisweekpointredemption01.png" width="50" height="50" alt="Company Name">',
                        //                                      ui: 'plain',
                        //                                      handler: function () {

                        //                                          //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                        //                                          //  setupMovementMap(2);



                        //                                          //setDashBoardPushNotificationsQuota();
                        //                                          //setDashBoardSMSQuota();
                        //                                          //setDashBoardWhatAppQuota()

                        //                                          //Ext.getCmp('mainView').setActiveItem(16);
                        //                                          //loadNotificationSummary();
                        //                                      }
                        //                                  },
                        //                                      {
                        //                                          margin: '0 0 0 0',
                        //                                          id: 'Dashboard_AyohaActivity_ThisWeekCountsPointRedeem',
                        //                                          html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                        //                                      },
                        //                                      //margin: '10 0 0 0',
                        //                                      //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                        //                             ]
                        //                         },
                        //                          {
                        //                              margin: '-5 0 0 0',
                        //                              html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Redeem</div>',
                        //                          },

                        //                ]
                        //            },
                        //             {
                        //                 xtype: 'spacer'
                        //             },
                        //      ]


                        //  },






                              


                                   {
                                       xtype: 'container',
                                       width: '100%',
                                       height: 500,
                                   }























                            ////////

                        ]
                    },






            ]



        },
    ]
},
initialize: function () {

}
});





function AyohaMerchant_AyohaMerchantRewardLoad() {


    AddRoutePages("FloatPanel_DashboardMerchantRewardHide()");
    MembershipTag="YES";
    var containerView = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem0]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          // SingleTap_Dashboard_NearestRedeem0();
          SingleTap_Dashboard_NearestRedeem_StampCard(0);
      }
    );


    var containerView1 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem1]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {

          //SingleTap_Dashboard_NearestRedeem1();
          SingleTap_Dashboard_NearestRedeem_StampCard(1);
      }
    );


    var containerView2 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem2]')[0];
    var containerViewEl2 = containerView2.element;
    containerViewEl2.on('tap',
      function (event, node, options, eOpts) {

          // SingleTap_Dashboard_NearestRedeem2();
          SingleTap_Dashboard_NearestRedeem_StampCard(2);
      }
    );



    var containerView3 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem3]')[0];
    var containerViewEl3 = containerView3.element;
    containerViewEl3.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(3);
      }
    );


    var containerView4 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem4]')[0];
    var containerViewEl4 = containerView4.element;
    containerViewEl4.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(4);
      }
    );




    var containerView5 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem5]')[0];
    var containerViewEl5 = containerView5.element;
    containerViewEl5.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(5);
      }
    );




    var containerView6 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem6]')[0];
    var containerViewEl6 = containerView6.element;
    containerViewEl6.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(6);
      }
    );




    var containerView7 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem7]')[0];
    var containerViewEl7 = containerView7.element;
    containerViewEl7.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(7);
      }
    );


    var containerView8 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem8]')[0];
    var containerViewEl8 = containerView8.element;
    containerViewEl8.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(8);
      }
    );

    var containerViewLatestStamps = Ext.ComponentQuery.query('container[name=containerDashboard_User_LatestStamps]')[0];
    var containerViewElLatestStamps = containerViewLatestStamps.element;
    containerViewElLatestStamps.on('tap',
      function (event, node, options, eOpts) {


          SingleTap_Dashboard_User_LatestStamps();


      }
    );



    var containerViewTotalPoints = Ext.ComponentQuery.query('container[name=containerDashboard_AyohaRewards_TotalPoints]')[0];
    var containerViewElTotalPoints = containerViewTotalPoints.element;
    containerViewElTotalPoints.on('tap',
      function (event, node, options, eOpts) {




          SingleTap_Dashboard_User_LatestPoint();



      }
    );









    var containerViewNearestRedeemNonMembers = Ext.ComponentQuery.query('container[name=namecontainer_Dashboard_NearestRedeemNonMembers]')[0];
    var containerViewElNearestRedeemNonMembers = containerViewNearestRedeemNonMembers.element;
    containerViewElNearestRedeemNonMembers.on('tap',
      function (event, node, options, eOpts) {
          Dashboard_SearchMerchantListShow();
         // FloatPanel_RewardStoreShow();
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture0 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture0]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture0 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture0.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture0.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(0);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture1 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture1]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture1 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture1.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture1.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(1);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture2 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture2]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture2 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture2.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture2.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(2);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );

    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture3 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture3]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture3 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture3.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture3.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(3);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );

    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture4 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture4]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture4 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture4.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture4.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(4);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint4();
      }
    );


    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture5 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture5]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture5 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture5.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture5.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(5);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint5();
      }
    );

    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture6 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture6]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture6 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture6.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture6.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(6);
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture7 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture7]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture7 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture7.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture7.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(7);
      }
    );


    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture8 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture8]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture8 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture8.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture8.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(8);
      }
    );





    var containerViewLoyaltynamecontainerVIA_Advertisement = Ext.ComponentQuery.query('container[name=namecontainerVIA_Advertisement]')[0];
    var containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement = containerViewLoyaltynamecontainerVIA_Advertisement.element;
    containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
      }
    );
    var containerViewNamecontainerDashboardVIAAdvertisement_eStore = Ext.ComponentQuery.query('container[name=nameContainerDashboardVIAAdvertisement_eStore]')[0];
    var containerViewElDashboardVIAAdvertisement_eStore = containerViewNamecontainerDashboardVIAAdvertisement_eStore.element;
    containerViewElDashboardVIAAdvertisement_eStore.on('tap',
      function (event, node, options, eOpts) {

          Dashboard_openVIAAdvertisement_OnlineStore();


      }
    );



   

    var y = parseInt(screen.width - 24);
    var x = parseInt(window.innerWidth - 64);
    var z = parseInt(window.innerWidth - 58);
    console.log(y)
    console.log(x)

    //  Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardVoucherImg_NA').setWidth(y);
    //Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardVoucherImg_NA').setHtml('<div  style="background-color:transparent;width: '+y+'px; height: 150px;"><img src="resources/icons/NotAvailableVoucher.png" style="width: 100%; height: 150px;"/></div>');

    ////////////Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardContestImg_NA').setWidth(x);
    ////////////Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardContestImg_NA').setHtml('<div  style="background-color:transparent;width: '+x+'px; height: 150px;"><img src="resources/icons/AyohaMerchantContest01.png" style="width: 100%; height: 150px;"/></div>');

    //Ext.getCmp('htmlFloatPanel_DashboardMerchantMembershipEventImg_NA').setWidth(z);
    //Ext.getCmp('htmlFloatPanel_DashboardMerchantMembershipEventImg_NA').setHtml('<div  style="background-color:transparent;width: ' + z + 'px; height: 150px;"><img src="resources/icons/membershipEvent.png" style="width: 100%; height: 150px;"/></div>')

    AyohaMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore();


   

}



function AyohaMerchantReward_Reset(){
    if (is_FloatPanel_DashboardMerchantRewardHide == 'Y') {           
        is_FloatPanel_DashboardMerchantRewardHide = 'N';
        VIAAdvertismentAutoSlideReset();
        RemovePages("FloatPanel_DashboardMerchantRewardHide()");
    }
}


















function AyohaMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore() {



    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemStampCard');
   

    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              // alert('Store loaded successfully, total records: ' + records.length);
              AppState.AyohaMerchantReward.StampPerks=records.length;
                var count = records.length;
                ArrStampContentSequence.length = 0;
                ArrStampTotalRow.length = 0;
        
                ArrStampCampaignCode.length = 0;
                ArrStampContentNote.length = 0;
                ArrEnterpriseName.length = 0;
                ArrEndDate.length = 0;
                ArrStampContent.length = 0;
        
                ArrStartDate.length = 0;
                ArrStampRuleRemarks.length = 0;
                ArrIsStampRulePopUp.length = 0;
                ArrEnterpriseAccNo.length = 0;
                ArrStampCampaignName.length = 0;
        
        
                ArrCountStampYES.length = 0;
                ArrEnterprisesLogo.length = 0;
        
                ArrStampisRequiredStartEndDate.length = 0;
                ArrStampisCampaignExpired.length = 0;
                ArrStampCampaignDayLeft.length = 0;
                ArrStampCampaignAdvertisementTitle.length = 0;
                //unlimited load//
                for (i = 0; i < count; i++) {
                    // for (i = 0; i < a; i++) {
                    //   var modelRecord = myStore.getAt(i);
                    var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getAt(i);
                    if (modelRecord.get('StampCampaignCode')) {
                        var StampCampaignCode = modelRecord.get('StampCampaignCode');
                        //var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                        var StampContent = modelRecord.get('StampContent');
                        var StampContentNote = modelRecord.get('StampContentNote');
                        var StampContentSequence = modelRecord.get('StampContentSequence');
                        var EnterpriseName = modelRecord.get('EnterpriseName').toUpperCase();
                        var CountRow = modelRecord.get('CountRow');
                        var EndDate = modelRecord.get('EndDate');
                        var StartDate = modelRecord.get('StartDate');
                        var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
                        var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
                        var StampCampaignName = modelRecord.get('StampCampaignName');
                        var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
                        var StampContentFinal = StampContent.replace("height:70px", "height:80px");
                        var CountStampYES = modelRecord.get('CountStampYES');
                        var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
                        var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
                        var isCampaignExpired = modelRecord.get('isCampaignExpired');
                        var CampaignDayLeft = parseInt(modelRecord.get('CampaignDayLeft'));
                        var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
        
        
                     
                        if (i <= 8) {
                            Ext.getCmp('Dashboard_NearestRedeem_StampContent' + i).setHtml(StampContent.replace("-90px", "-50px"));
                            Ext.getCmp('Dashboard_NearestRedeem_StampContentNote' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 2px;">' + StampContentNote + '</div>');
                            Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;margin:5px 0px 0px 2px;">' + EnterpriseName + '</div>');
        
        
                            if (isCampaignExpired == "Expired") {
        
                                Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: left;font-size:10px;font-weight:normal;width:100%;margin:3px 0px 0px 2px">End Date:' + EndDate + ' (Campaign Expired !)</div>');
                                //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: center;font-size:12px;font-weight:normal;width:50%">End Date:' + EndDate + '</div><div  style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">Campaign Expired !</div>');
        
                            }
                            if (isCampaignExpired == "NotExpired") {
                                   
                                //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div  style="color:purple;text-align: right;font-size:12px;font-weight:bold;margin:-19px -150px 0px 0px;">' + CampaignDayLeft + ' Day Left</div>');
                                Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
                                if (CampaignDayLeft >= 20 && CampaignDayLeft <= 30) {
                                    // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:green;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
        
                                }
                                if (CampaignDayLeft >= 10 && CampaignDayLeft <= 19) {
                                    // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:orange;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
                                }
                                if (CampaignDayLeft >= 1 && CampaignDayLeft <= 9) {
                                    //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
        
                                }
                            }
                        }
        
                        if (isRequiredStartEndDate == "NO") {
                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:5px 0px 0px 2px">End Date:&nbsp;<i>No End Date,Valid LifeTime</i></div>');
        
                        }
                    
        
        
        
                        ArrStampContentSequence.push(StampContentSequence);
                        ArrStampTotalRow.push(CountRow);
                        //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
                        //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
                        ArrStampCampaignCode.push(StampCampaignCode);
                        ArrStampContentNote.push(StampContentNote);
                        ArrEnterpriseName.push(EnterpriseName);
                        ArrEndDate.push(EndDate);
                        ArrStampContent.push(StampContentFinal);
                        ArrStartDate.push(StartDate);
                        ArrStampRuleRemarks.push(StampRuleRemarks);
                        ArrIsStampRulePopUp.push(IsStampRulePopUp);
                        ArrEnterpriseAccNo.push(EnterpriseAccNo);
                        ArrStampCampaignName.push(StampCampaignName);
                        ArrCountStampYES.push(CountStampYES);
                        ArrEnterprisesLogo.push(EnterprisesLogo);
                        ArrStampisRequiredStartEndDate.push(isRequiredStartEndDate);
                        ArrStampisCampaignExpired.push(isCampaignExpired);
                        ArrStampCampaignDayLeft.push(CampaignDayLeft);
                        ArrStampCampaignAdvertisementTitle.push(AdvertisementTitle);
                    }
        
        
        
                }
        
        
        
                if (count <= 0) {
        
        
        
        
        
                    Ext.getCmp('container_Dashboard_NearestRedeemNonMembers').setHidden(false);
                    Ext.getCmp('container_Dashboard_NearestRedeemMembers').setHidden(true);
                }
               
                AyohaMerchantReward_NearestRedeemItemPointCardStore();
                //AyohaMerchantReward_loadVIAAdvertisement();



               
               
            } else {
                AppState.AyohaMerchantReward.StampPerks=0;
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
                AyohaMerchantReward_NearestRedeemItemPointCardStore();
            }
        }
    });





}





function AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore() {
    if(isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        return;
    }
        _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNo');
    
    
    
        _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    AppState.AyohaMerchantReward.EventPerks=records.length;
                    Ext.getCmp('FloatPanel_MerchantReward_MembershipEvent').setStore(_DataStore_AyohaRewardEventLoadBySubscriberAccNoStore);
                    AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                   
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                    console.error('Failed to load store data or no record found.');
                    AppState.AyohaMerchantReward.EventPerks=0;
                    AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                  
                    LoadingPanelHide();
                }
               // 
            }
        });





    }

    function AyohaMerchantReward_NearestRedeemItemPointCardStore() {

        _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemPointCard');     
    
        _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    AppState.AyohaMerchantReward.PointPerks=records.length;
                   // alert('Point Perks Available: ' + AppState.AyohaMerchantReward.PointPerks)
                    var count = records.length;
                    ArrPointContentSequence.length = 0;
                    ArrPointTotalRow.length = 0;
                    ArrPointCampaignCode.length = 0;
                    ArrPointContentNote.length = 0;
                    ArrPointEnterpriseName.length = 0;
                    ArrPointEndDate.length = 0;
                    ArrPointContent.length = 0;
                    ArrPointStartDate.length = 0;
                    ArrPointRuleRemarks.length = 0;
                    ArrIsPointRulePopUp.length = 0;
                    ArrPointEnterpriseAccNo.length = 0;
                    ArrPointCampaignName.length = 0;
                    ArrCountPointYES.length = 0;
                    ArrPointEnterprisesLogo.length = 0;
                    ArrPointisRequiredStartEndDate.length = 0;
                    ArrPointisCampaignExpired.length = 0;
                    ArrPointAdvertisementTitle.length = 0;
                    //unlimited load//
                    for (i = 0; i < count; i++) {
                        // for (i = 0; i < a; i++) {
                        var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getAt(i);
                        if (modelRecord.get('StampCampaignCode')) {
                            var StampCampaignCode = modelRecord.get('StampCampaignCode');
                            var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                            var StampContentNote = modelRecord.get('StampContentNote');
                            var StampContentSequence = modelRecord.get('StampContentSequence');
                            var EnterpriseName = modelRecord.get('EnterpriseName');
                            var CountRow = modelRecord.get('CountRow');
                            var EndDate = modelRecord.get('EndDate');
                            var StartDate = modelRecord.get('StartDate');
                            var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
                            var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
                            var StampCampaignName = modelRecord.get('StampCampaignName');
                            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
                            var StampContentFinal = StampContent.replace("height:70px", "height:80px");
                            var CountStampYES = modelRecord.get('CountStampYES');
                            var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
                            var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
                            var isCampaignExpired = modelRecord.get('isCampaignExpired');
                            var CampaignDayLeft = modelRecord.get('CampaignDayLeft');
                            var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
                            if (i <= 8) {
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHtml('<img src="' + StampContent + '"  style="width: 120px; height: 160px;">');
                                var subStr = StampContentNote.substring(0, 19);
                                Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">' + subStr + '</div>');
            
            
                                // Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');
            
            
            
                                Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:transparent;text-align: center;font-size:10px;width:100%;font-weight:normal;">No End Date</div>');
                                // Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('10 0 0 0');
                                if (isRequiredStartEndDate == "YES") {
                                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>');
                                    if (isCampaignExpired == "NotExpired") {
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">End Date:' + EndDate + '</div>');
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                                    }
                                    if (isCampaignExpired == "Expired") {
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div class="blink_me" style="color:red;text-align: center;font-size:10px;width:105%;font-weight:normal;border: 1px solid red;background-color: white;border-radius: 10px 10px 10px 10px;">Campaign Expired!</div>');
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Pass</div></div>');
                                    }
            
                                } else {
                                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('8 0 0 0');
                                }
            
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">' + StampContentSequence + ' <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>');
            
                            }
            
            
            
                            ArrPointContentSequence.push(StampContentSequence);
                            ArrPointTotalRow.push(CountRow);
                            //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
                            //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
                            ArrPointCampaignCode.push(StampCampaignCode);
                            ArrPointContentNote.push(StampContentNote);
                            ArrPointEnterpriseName.push(EnterpriseName);
                            ArrPointEndDate.push(EndDate);
                            ArrPointContent.push(StampContentFinal);
                            ArrPointStartDate.push(StartDate);
                            ArrPointRuleRemarks.push(StampRuleRemarks);
                            ArrIsPointRulePopUp.push(IsStampRulePopUp);
                            ArrPointEnterpriseAccNo.push(EnterpriseAccNo);
                            ArrPointCampaignName.push(StampCampaignName);
                            ArrCountPointYES.push(CountStampYES);
                            ArrPointEnterprisesLogo.push(EnterprisesLogo);
                            ArrPointisRequiredStartEndDate.push(isRequiredStartEndDate);
                            ArrPointisCampaignExpired.push(isCampaignExpired);
                            ArrPointAdvertisementTitle.push(AdvertisementTitle);
                        }
            
                        AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
            
                    }
                } else {
                    AppState.AyohaMerchantReward.PointPerks=0;
                    console.error('Failed to load store data or no record found.');
                    AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    LoadingPanelHide();
                }
            }
        });
    
    
    }
    

    function AyohaMerchantReward_loadVIAAdvertisement() {
        AdvertismentTypeTag = 'VIAAdvertisement';
        globalFloatPanel_AyohaStore_ModuleTagging = 'VIAAdvertisement';
    
       
    
    
    
        _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadMediaAdvertisementVIA'); 
        _DataStore_AdvertisementloadMediaAdvertisementVIAStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    var count = records.length;
                    CountAdvertisementMedia = count - 1;
                    var modelRecorded = records[0];;
                    var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
                    var AdvertisementCode = modelRecorded.get('AdvertisementCode');
                    var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
                    var EnterpriseName = modelRecorded.get('EnterpriseName');
                    var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
                    var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
                    var EnterpriseHQAccNo = modelRecorded.get('EnterpriseHQAccNo');
            
                    globalDashboardVIAAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
                    globalDashboardVIAAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
                    globalDashboardVIAAdvertisement_EnterpriseName = EnterpriseName;
                    globalDashboardVIAAdvertisement_AdvertisementTitle = AdvertisementTitle;
            
            
            
            
            
            
            
            
                    localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);
                    localStorage.setItem('EnterpriseHQAccNo', EnterpriseHQAccNo);
            
                    Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
                    Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
                    //   Ext.getCmp('htmlDasboardAdvertisementTitleTxt').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AdvertisementTitle + '</div>');
            
            
                    //console.log(GetEnterpriseHQAccNo());
                    //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
                    //var modelRecord = myStore.getAt(0);
            
                    //var Complaint = modelRecord.get('Complaint');
                    // var MinStoreAlert = modelRecord.get('MinStoreAlert');
                    // var StoreBalance = modelRecord.get('TotalStock');
            
                    carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
                    ArrCaptionTextVIAAdvertisement.length = 0;
                    ArrMediaFileName.length = 0;
            
                    for (i = 0; i < count; i++) {
                        var modelRecord = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(i);
            
                        var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
                        var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
                        var MediaType = modelRecord.get('MediaType');
                        var MediaFileName = modelRecord.get('MediaFileName');
            
            
            
            
            
                        ArrMediaFileName.push(MediaFileName);
            
                        Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
                        //  xtype: 'pinchzoomimage',
                        if (MediaType == "Image") {
                            carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                            // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
                        }
                        if (MediaType == "Video") {
                            carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });
            
                        }
            
                        if (AdvertismentMediaNote) {
                            ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
                        } else {
                            ArrCaptionTextVIAAdvertisement.push('NULL');
                        }
            
            
                       
                    }
            
            
            
            
                    var modelRecords = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
                    localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
                    localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
                    localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
                    localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
                    Ext.Viewport.setMasked(false);
                    AyohaMerchantReward_VIAAdvertismentAutoSlide();
                    AyohaMerchantReward_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);
                   // AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
        
                
                } else {
                    console.error('Failed to load store data or no record found.');
                   // AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    LoadingPanelHide();
                }
            }
        });




      
    
      
          
        //     var count = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getCount();
    
        //     CountAdvertisementMedia = count - 1;
        //     var modelRecorded = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        //     var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        //     var AdvertisementCode = modelRecorded.get('AdvertisementCode');
        //     var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
        //     var EnterpriseName = modelRecorded.get('EnterpriseName');
        //     var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
        //     var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
        //     var EnterpriseHQAccNo = modelRecorded.get('EnterpriseHQAccNo');
    
        //     globalDashboardVIAAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
        //     globalDashboardVIAAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
        //     globalDashboardVIAAdvertisement_EnterpriseName = EnterpriseName;
        //     globalDashboardVIAAdvertisement_AdvertisementTitle = AdvertisementTitle;
    
    
    
    
    
    
    
    
        //     localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);
        //     localStorage.setItem('EnterpriseHQAccNo', EnterpriseHQAccNo);
    
        //     Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        //     Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
        //     //   Ext.getCmp('htmlDasboardAdvertisementTitleTxt').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AdvertisementTitle + '</div>');
    
    
        //     //console.log(GetEnterpriseHQAccNo());
        //     //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //     //var modelRecord = myStore.getAt(0);
    
        //     //var Complaint = modelRecord.get('Complaint');
        //     // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        //     // var StoreBalance = modelRecord.get('TotalStock');
    
        //     carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
        //     ArrCaptionTextVIAAdvertisement.length = 0;
        //     ArrMediaFileName.length = 0;
    
        //     for (i = 0; i < count; i++) {
        //         var modelRecord = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(i);
    
        //         var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
        //         var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
        //         var MediaType = modelRecord.get('MediaType');
        //         var MediaFileName = modelRecord.get('MediaFileName');
    
    
    
    
    
        //         ArrMediaFileName.push(MediaFileName);
    
        //         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
        //         //  xtype: 'pinchzoomimage',
        //         if (MediaType == "Image") {
        //             carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'image', margin: '7 0 0 0' });
        //             // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
        //         }
        //         if (MediaType == "Video") {
        //             carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });
    
        //         }
    
        //         if (AdvertismentMediaNote) {
        //             ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
        //         } else {
        //             ArrCaptionTextVIAAdvertisement.push('NULL');
        //         }
    
    
        //         // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        //     }
    
    
    
    
        //     //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //     //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);
    
    
        //     var modelRecords = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        //     localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        //     localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        //     localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //     //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        //     localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        //     // localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //     //  localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        //     // localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));
        //     ////globalVIAEnterpriseFacebookUrl=modelRecords.get('EnterpriseFacebook');
        //     ////globalVIAEnterpriseInstagramUrl = modelRecords.get('EnterpriseInstagram');
        //     ////globalVIAPICContactNo = modelRecords.get('PICContactNo');
        //     ////globalEnterpriseCoordinate = modelRecords.get('EnterpriseCoordinate');
        //     Ext.Viewport.setMasked(false);
        //     VIAAdvertismentAutoSlide();
        //     //loadAdvertisementloadHotSeatStore();
        //     Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);
        //     FloatPanel_DashboardMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
        // });
        // task.delay(1000);
    
    }



    function AyohaMerchantReward_VIAAdvertismentAutoSlide() {
        var i = 0;
        var interval = parseInt(3000);
        var crsl = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
    
        var maxIndenx = crsl.getMaxItemIndex();
        //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
        VIAAdvertismentAutoSlideTimer = setInterval(function () {
    
            crsl.next();
            globalMediaFileName = ArrMediaFileName[crsl.getActiveIndex() + 1];
          
            if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
                // crsl.previous();
                Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            }
            //if (crsl.getActiveIndex() === 0) {
            //    crsl.next();
            //}
    
            Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + arrVIAAdvertisementeStoreIconPath[VIAAdvertisementOnlineStoreIndex] + '" width="38" height="38" alt="Company Name"></div>');
            Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + arrVIAAdvertisementeStoreName[VIAAdvertisementOnlineStoreIndex] + '</b></font></div></div>');
    
            VIAAdvertisementOnlineStoreIndex++;
            // console.log(VIAAdvertisementOnlineStoreIndex);
            if (VIAAdvertisementOnlineStoreIndex == VIAAdvertisementCount) {
                // console.log('stop');
                VIAAdvertisementOnlineStoreIndex = 0;
                // console.log('reset');
            }
            //  console.log(VIAAdvertisementOnlineStoreIndex);
    
    
    
    
        }, interval);
    }

    function  AyohaMerchantReward_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo) {

        arrVIAAdvertisementeStoreName.length = 0;
        arrVIAAdvertisementOnlineStoreUrl.length = 0;
        arrVIAAdvertisementeStoreIconPath.length = 0;
    
        _DataStore_EnterprisesContactUsLinkStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
        _DataStore_EnterprisesContactUsLinkStore.getProxy().setUrl(GetAPIurl() + 'Enterprises/EnterprisesContactUsLink');
        _DataStore_EnterprisesContactUsLinkStore.load({
    callback: function (records, operation, success) {
        if (success && records.length > 0) {
            console.log('Store loaded successfully, total records: ' + records.length);

            var record = records[0]; // Access only the first record


            var Store = records[0];
            VIAAdvertisementCount = records.length;
            globalVIAEnterpriseFacebookUrl = Store.get('EnterpriseFacebook');
            globalVIAEnterpriseInstagramUrl = Store.get('EnterpriseInstagram');
            globalVIAPICContactNo = Store.get('PICContactNo');
            globalEnterpriseCoordinate = Store.get('EnterpriseCoordinate');
            globalVIAEnterpriseWebsite = Store.get('EnterpriseWebsite');
    
            globalVIAMerchantLinkType = Store.get('MerchantLinkType');
    
            console.log(globalEnterpriseCoordinate);
    
            console.log(globalVIAEnterpriseInstagramUrl);
    
            if (globalEnterpriseCoordinate != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(true);
            }
            if (globalVIAEnterpriseFacebookUrl != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(true);
            }
            if (globalVIAEnterpriseInstagramUrl != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(true);
            }
            if (globalVIAPICContactNo != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(true);
            }


            for (i = 0; i < records.length ; i++) {
                Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(i);
    
    
    
                arrVIAAdvertisementeStoreName.push(Stores.get('eStoreName'));
                arrVIAAdvertisementOnlineStoreUrl.push(Stores.get('OnlineStoreUrl'));
                arrVIAAdvertisementeStoreIconPath.push(Stores.get('eStoreIconPath'));
    
                //if (Stores.get('eStoreName')) {
                //    Ext.getCmp('containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_' + i).setHidden(false);
                //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon' + i).setHtml('<div class="blink_me"><img src="' + Stores.get('eStoreIconPath') + '" width="32" height="32" alt="Company Name" onclick="FloatPanel_PreviewAdvertisement_OpenOnlineStore' + i + '()"></div>');
                //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName' + i).setHtml('<div class="blink_me" style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + Stores.get('eStoreName') + '</div>');
    
                //} else {
                //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>No Online Store</b></font>');
                //}
    
            }



          
           
        } else {
            console.error('Failed to load store data or no record found.');
            LoadingPanelHide();
        }
    }
});
    
    
    
    }



    function AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore() {

        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setExtraParam('VoucherType', "AyohaMerchantVoucher");
        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantReward');
    
      //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();
    
    
    
    
        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    console.log('Store loaded successfully, total records: ' + records.length);
                    AppState.AyohaMerchantReward.VoucherPerks=records.length;
                    var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getCount();
                    Ext.getCmp('FloatPanel_DashboardMerchantRewardVoucherList').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);
            
                    if (count < 1) {
                        Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Vocher (0)</div>');
                    }
            
                    if (count == 1) {
                        Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
                    }
            
                    if (count > 1) {
                        Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
                    }
                    AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                   LoadingPanelHide();
                } else {
                    console.error('Failed to load store data or no record found.');
                    AppState.AyohaMerchantReward.VoucherPerks=0;
                    LoadingPanelHide();
                    AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                }
            }
        });
    
    
    
    
    
    
    
       
    
    }
    



    function AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore() {

        _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNo');
    
      
    
      
        _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    AppState.AyohaMerchantReward.ContestPerks=records.length;
                    Ext.getCmp('FloatPanel_MerchantReward_MembershipContest').setStore(_DataStore_AyohaRewardContestLoadBySubscriberAccNoStore);
                    AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                } else {
                    console.error('Failed to load store data or no record found.');
                    AppState.AyohaMerchantReward.ContestPerks=0;
                    LoadingPanelHide();
                    AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                }
               
            }
        });







    
       
    }





    function AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo() {

        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/DiscountCampaign/DiscountCampaing_LoadBySubscriberAccNo');
    
      
    
      
        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    AppState.AyohaMerchantReward.DiscountPerks=records.length;
                    Ext.getCmp('AyohaMerchantRewardDiscountList').setStore(_DataStore_DiscountCampaing_LoadBySubscriberAccNoStore);
                    AyohaMerchantReward_LoadDashboard();
                } else {
                    console.log('jemmm not founfd.');
                    AppState.AyohaMerchantReward.DiscountPerks=0;
                    AyohaMerchantReward_LoadDashboard();
                   
                }
               
            }
        });







    
       
    }





// keep a handle globally (optional but handy)
window.membershipStatusChart = window.membershipStatusChart || null;
window._datalabelsRegistered = window._datalabelsRegistered || false;

// keep a handle globally (optional but handy)
// window.membershipStatusChart = window.membershipStatusChart || null;
// window._datalabelsRegistered = window._datalabelsRegistered || false;

function AyohaMerchantReward_LoadDashboard() {
const counts = { Stamped: AppState.AyohaMerchantReward.StampPerks,Points: AppState.AyohaMerchantReward.PointPerks,Voucher: AppState.AyohaMerchantReward.VoucherPerks,Contest:AppState.AyohaMerchantReward.ContestPerks,Event:AppState.AyohaMerchantReward.EventPerks,Discount:AppState.AyohaMerchantReward.DiscountPerks};
 
 // const counts = { Stamped: 2,Points: 2,Voucher: 3,Contest:2,Event:0,Discount:1};
 
  const total  = (counts.Stamped || 0) + (counts.Points || 0);

  const canvas = document.getElementById('loyaltyHBar'); // keep same ID
  if (!canvas) return; // canvas not in DOM yet

  // ✅ Destroy any existing chart on this canvas
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  if (window.membershipStatusChart) { 
    window.membershipStatusChart.destroy(); 
    window.membershipStatusChart = null; 
  }

  const ctx = canvas.getContext('2d');

  // Register plugin once
  if (!window._datalabelsRegistered && typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
    window._datalabelsRegistered = true;
  }

  // Build chart (horizontal bar)
  window.membershipStatusChart = new Chart(ctx, {
    type: 'bar',
    data: {
    //  labels: ['Active', 'Expired'],
      labels : ['Stamped','Points','Voucher','Contest','Event','Discount'],
      datasets: [{
        data: [counts.Stamped, counts.Points, counts.Voucher, counts.Contest, counts.Event, counts.Discount],
        backgroundColor: [
          'rgba(46, 204, 113, 0.95)',   // Stamped
          'rgba(231, 76, 60, 0.70)' ,    // Points
          'rgb(255, 99, 71)',   // Voucher
          'rgb(255, 165, 0)' ,    // Contest
          'rgba(100, 249, 71, 0.5)',   // Event
          'rgba(160, 0, 255, 0.7)' ,    // Discount
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
        borderSkipped: false,
        borderRadius: 20,
       // barThickness: 18,
        barThickness: 20,
        categoryPercentage: 0.9,
        barPercentage: 0.9,
        hoverBorderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y',                 // ← horizontal bars
      responsive: true,
      maintainAspectRatio: false,
      //layout: { padding: { top: 8, right: 12, bottom: 12, left: 12 } },
      layout: { padding: { top: 4, right: 8, bottom:8, left: 8 } },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.15)' },
          ticks: { color: '#fff', font: { size: 6, weight: '600' } },
          beginAtZero: true,
          precision: 0,
          display: false // bars are already labeled on Y axis
        },
        y: {
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 9, weight: '500' } }
        }
      },
      plugins: {
        title: {
          display: false,
          text: `Total: ${total}`,
          color: '#fff',
          font: { size: 10, weight: '800' },
          padding: { top: 2, bottom: 2 }
        },
        legend: {
          display: false // bars are already labeled on Y axis
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed.x}`
          }
        },
        datalabels: {
          display: true,
          color: '#fff',
          anchor: 'center',  // centered inside the bar
          align: 'center',
          offset: 0,
          clip: true,
          clamp: true,
          formatter: (v) => `${v}`,
          font: (ctx) => {
            const data = ctx.dataset.data, v = data[ctx.dataIndex] || 0;
            const sum = data.reduce((a,b)=>a+(b||0),0) || 1;
            const pct = (v / sum) * 100;
            const base = ctx.chart.width < 360 ? 11 : 13;
            return { weight: '800', size: pct < 14 ? base - 2 : base, family: 'system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif' };
          }
        }
      },
      animation: { duration: 1000 }
    }
  });
}



// keep a handle globally (optional but handy)
// window.membershipStatusChart = window.membershipStatusChart || null;
// window._datalabelsRegistered = window._datalabelsRegistered || false;

function AyohaMerchantReward_LoadDashboardDoughnut(activeCount, expiredCount) {
  // Map your two inputs into the 6 categories you display
  const counts = {
    Stamped:  activeCount,
    Points:   expiredCount,
    Voucher:  2,
    Contest:  3,
    Event:    2,
    Discount: 2
  };

  const labels = ['Stamped','Points','Voucher','Contest','Event','Discount'];
  const dataArr = [
    counts.Stamped, counts.Points, counts.Voucher,
    counts.Contest, counts.Event, counts.Discount
  ];
  const total = dataArr.reduce((a,b)=>a + (b||0), 0);

  const canvas = document.getElementById('loyaltyHBar'); // reuse same canvas id
  if (!canvas) return;

  // ✅ Destroy any existing chart on this canvas
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  if (window.membershipStatusChart) {
    window.membershipStatusChart.destroy();
    window.membershipStatusChart = null;
  }

  const ctx = canvas.getContext('2d');

  // Register plugin once
  if (!window._datalabelsRegistered && typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
    window._datalabelsRegistered = true;
  }

  // Center "Total" text plugin
  const centerText = {
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      // find center by first arc element or chart area mid
      const arc = chart.getDatasetMeta(0).data?.[0];
      const cx = arc?.x ?? (chartArea.left + chartArea.right) / 2;
      const cy = arc?.y ?? (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';

      ctx.font = '700 12px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
      ctx.fillText('Total', cx, cy - 10);

      ctx.font = '900 22px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
      ctx.fillText(total, cx, cy + 10);
      ctx.restore();
    }
  };

  // Build chart (DOUGHNUT)
  window.membershipStatusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data: dataArr,
        backgroundColor: [
          'rgba(46, 204, 113, 0.95)',  // Stamped
          'rgba(231, 76, 60, 0.70)',   // Points
          'rgb(255, 99, 71)',          // Voucher
          'rgb(255, 165, 0)',          // Contest
          'rgba(100, 249, 71, 0.5)',   // Event
          'rgba(160, 0, 255, 0.7)'     // Discount
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
        borderAlign: 'inner',
        hoverOffset: 6,
        cutout: '62%'                  // donut thickness
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 4, right: 8, bottom: 8, left: 8 } },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#fff', usePointStyle: true, pointStyle: 'circle', font: { size: 10, weight: '700' } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.label}: ${ctx.parsed}` // parsed is the slice value
          }
        },
        datalabels: {
          display: true,
          color: '#fff',
          anchor: 'center',
          align: 'center',
          offset: 0,
          clip: true,
          clamp: true,
          formatter: (v) => (v ? `${v}` : ''), // hide zeros
          font: (ctx) => {
            const data = ctx.dataset.data, v = data[ctx.dataIndex] || 0;
            const sum = data.reduce((a,b)=>a+(b||0),0) || 1;
            const pct = (v / sum) * 100;
            const base = ctx.chart.width < 360 ? 11 : 13;
            return { weight: '900', size: pct < 14 ? base - 2 : base, family: 'system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif' };
          }
        }
      },
      animation: { duration: 800, animateRotate: true, animateScale: false }
    },
    plugins: [centerText]
  });
}











function AyohaMerchantReward_LoadDashboardVertical(activeCount, expiredCount) {
  const counts = { Stamped: activeCount, Points: expiredCount, Voucher: 2, Contest: 3, Event: 2, Discount: 2 };
  const total  = (counts.Stamped || 0) + (counts.Points || 0);

  const canvas = document.getElementById('loyaltyHBar');
  if (!canvas) return;

  // ✅ Destroy any existing chart on this canvas
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  if (window.membershipStatusChart) { 
    window.membershipStatusChart.destroy(); 
    window.membershipStatusChart = null; 
  }

  const ctx = canvas.getContext('2d');

  // Register plugin once
  if (!window._datalabelsRegistered && typeof ChartDataLabels !== 'undefined') {
    Chart.register(ChartDataLabels);
    window._datalabelsRegistered = true;
  }

  // Build chart (VERTICAL bar)
  window.membershipStatusChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels : ['Stamped','Points','Voucher','Contest','Event','Discount'],
      datasets: [{
        data: [counts.Stamped, counts.Points, counts.Voucher, counts.Contest, counts.Event, counts.Discount],
        backgroundColor: [
          'rgba(46, 204, 113, 0.95)',   // Stamped
          'rgba(231, 76, 60, 0.70)',    // Points
          'rgb(255, 99, 71)',           // Voucher
          'rgb(255, 165, 0)',           // Contest
          'rgba(100, 249, 71, 0.5)',    // Event
          'rgba(160, 0, 255, 0.7)',     // Discount
        ],
        borderColor: '#ffffff',
        borderWidth: 1,
        borderSkipped: false,
        borderRadius: 0,          // set {topLeft:8, topRight:8} if you want rounded tops
        barThickness: 14,
        categoryPercentage: 0.9,
        barPercentage: 0.9,
        hoverBorderWidth: 1
      }]
    },
    options: {
      // indexAxis removed → defaults to vertical bars
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 4, right: 8, bottom: 8, left: 8 } },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#fff', font: { size: 10, weight: '700' } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.15)' }, // value axis grid
          ticks: { color: '#fff', font: { size: 8, weight: '700' } },
          beginAtZero: true,
          precision: 0
        }
      },
      plugins: {
        title: {
          display: false,
          text: `Total: ${total}`,
          color: '#fff',
          font: { size: 10, weight: '800' },
          padding: { top: 2, bottom: 2 }
        },
        legend: { display: false },
        tooltip: {
          callbacks: {
            // vertical bars → value is on Y
            label: (ctx) => `${ctx.label}: ${ctx.parsed.y}`
          }
        },
        datalabels: {
          display: true,
          color: '#fff',
          anchor: 'end',     // position at end of bar
          align: 'top',      // above the bar
          offset: 2,
          clip: false,
          clamp: true,
          formatter: (v) => `${v}`,
          font: (ctx) => {
            const data = ctx.dataset.data, v = data[ctx.dataIndex] || 0;
            const sum = data.reduce((a,b)=>a+(b||0),0) || 1;
            const pct = (v / sum) * 100;
            const base = ctx.chart.width < 360 ? 11 : 13;
            return { weight: '800', size: pct < 14 ? base - 2 : base, family: 'system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif' };
          }
        }
      },
      animation: { duration: 800 }
    }
  });
}
