


 



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
    height: 220,
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
            height: 65,                                                  
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
                    height: 40,                                             
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
                        
                         
                          html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:#16a34a;background:#ffffff;padding:3px 6px;border-radius:999px;white-space:nowrap;">Perks from My Cards</span><br><b>My Merchant Reward</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-20px 0px 0px 0px;">Claim perks in one place</div>'
                       
                        },
                       
                      


                   
                   
                    ]
                
                   },

                  {
                    xtype: 'container',
                    width: '50%', 
                    hidden:false, 
                    height: 65,                                             
                   style: 'background-color:transparent;',
                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items:[

                         {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:15,
                        },
                       
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:5,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                
                            },
                            items:[
                                {
                                    margin: '0 0 0 0',
                                   // hidden:true, 
                                    html: '<div  style="color:white;text-align: center ;font-size:10px;width:100%;margin:0px 0px 0px 0px;font-weight:bold;">Perks Summary</div>'
                                       
                                }
                            ]
                        },
                       
                       
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            margin: '10 0 0 0',
                            height:40,
                            layout: {
                                type: 'hbox',
                                pack: 'right',
                                align: 'right'
                
                            },
                            items:[
                               
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
                                            width: '85%',
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
                                                    id:'htmlAyohaMerchantReward_TotalPerkEligibleCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Eligible</div>'
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
                                            width: '85%',
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
                                                    id:'htmlAyohaMerchantReward_TotalRedeemCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
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
                                            width: '85%',
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
                                                    id:'htmlAyohaMerchantReward_TotalApprovedRedeemCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Approved</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                    width: 10,
                                    height:40,
                                }
                            ]
                        },


                    ]
                  }

                  


                   ]

        },
       {
        xtype: 'container',
        width: '100%',  
        height: 15,  
       },
        {
    xtype: 'container',
    width: '100%',
    height: 140,
    style:"background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',  
            height: 140,                                             
           style: 'background-color:transparent;',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items:[
              
                // {
                //     xtype: 'container',
                //     width: '100%',
                //     height: 5,
                //     layout: {
                //         type: 'vbox',
                //         pack: 'center',
                //         align: 'center',
                //     },
                //     items:[
                //         { 
                //             html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">Perks Details</div>'
                //         },

                //     ]

                // },
               
                {
                    width: '95%',
                    height: 140,
                    html:'<div style="width:100%;height:140px;margin:0;background:transparent;">'+
                    '<canvas id="loyaltyHBar" style="width:100%;height:140px;"></canvas>'+
                    '</div>'
                }
            ]
        
           },

    ]
        }
      

    ]
  },




//////////////////////



                              ////////Merchant Redemption

                              {

                                  xtype: 'container',
                                  width: '100%',
                                  height: 600,
                                  /// hidden:true,

                                  margin: '0 0 0 0',
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
    height: 40,
    /// hidden:true,
    margin: '0 0 0 0',
    id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Master',
    style: 'border-bottom:2px none #D25959;background-color:transparent',
    scrollable: {
        direction: 'horizontal',
        directionLock: true,
        indicators: false
    },
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },
    items: [
{
    xtype: 'container',
    width: 600,
    height: 40,
    /// hidden:true,
    margin: '0 0 0 0',
    id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Scroll',
    style: 'border-bottom:2px none #D25959;background-color:transparent',
   
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id: 'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
                    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Digital Stamps</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Points',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id: 'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    //html: '<div style="color:#D1D5DB;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>'
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                   
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Events',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
     
      
   
      
      
        
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
    ]
},
       
    ]
},



{
    xtype: 'tabpanel',
    style: "background-color: transparent;", 
   margin: '0 0 0 0',
     id: 'tabpanelAyohaMerchantRewards',
     width: '100%',
     //height: '100%',
     height: 500,
     tabBarPosition: 'top',
     ui: 'plain',
     items: [
        /////////Stamps Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Stamps',
            id:'containerTabpanelAyohaMerchantRewards_Stamps',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            }, 
            items:[
                ////Stamp micropy button

{
    xtype: 'container',
    width: '100%',
    margin: '5 0 0 20',
    height:25,
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },
    items: [


{
    html:'<div class="perk-tabs">'+
    '<button class="perk-btn active" onclick="switchPerkTab(this,\'NA\');">Eligible Perks</button>'+
    '<button class="perk-btn" onclick="switchPerkTab(this,\'Submitted\');">Redeem</button>'+
    '<button class="perk-btn" onclick="switchPerkTab(this,\'Approved\')">Approved</button>'+
    '<button class="perk-btn" onclick="switchPerkTab(this,\'Expired\')">Expired</button>'+
  '</div>'
},





    ]
},

{
    xtype: 'container',
    style: "background-color: transparent;", 
   margin: '0 0 0 0',
     id: 'containerAyohaMerchantRewards_StampStatus',
     width: '100%',
     //height: '100%',
     height: 400,
     layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            margin: '5 0 0 0',
            style: "background-color: transparent;",
            title: 'StampsStatus_EligiblePerks',
            id:'containerTabpanelAyohaMerchantRewards_StampsStatus_Eligible_Redeem_Approved_Expired',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            }, 
            items:[
                
                    {
                        xtype: 'list',
                        width: '95%',
                        height: 400,
                       
                        // height: '98%',
                        // flex: 1,
                      //  store: _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore,
                        // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                       // grouped:true,
                        id: 'listTabpanelAyohaMerchantRewards_StampsStatus',
                        mode: 'SINGLE',
                        scrollable: {
                            direction: 'vertical',
                            indicators: {
                                y: {
                                    autoHide: true
                                },
                                x: {
                                    autoHide: true
                                }
                            }
                        },
                        style: 'background-color:rgba(255,255,255, 0.1);',
                        // width: '100%',
                        disableSelection: true,
                        itemTpl: '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius: 10px 10px 10px 10px;">' +


                         '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0px 0px -15px;height:90px;"><tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center">{ModifiedStampContent}</td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{StampContentNote}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{EnterpriseName}<br>End:{EndDate} - {CampaignDayLeft} Day Left</font></td></tr></table>'

                             + '</div>',
                      
                        //height: '100%',
                      
                        emptyText: '<div  style="background-color:transparent;width:100%;height100%;">Hai!, you have no redemption items yet.Go to Ayoha Mechant Menu ,get their Membership card and then collect your redemptions items!</div>',
                        //listeners: {
                        //    itemsingletap: function (list, idx, target, records, evt) {

                        //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                        //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                        //        //var MembershipCardCode = records.get('MembershipCardCode');
                        //        //var ID = records.get('ID');
                        //        ////FloatPanel_NearestRedemption_EditCardShow_Edit(ID);
                        //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                        //        //setTimeout(function () {
                        //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                        //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

                        //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                        //        //}, 2000);



                        //    },
                        //    deselect: function (list, records) {

                        //    }
                        //},
                        listeners: {
                            itemswipe: function (list, idx, target, record, evt) {
                                //  To get the selection you should use getSelection() instead
                                //////var selected = list.getActiveItem();
                                //////alert(list.getActiveItem());
                                //////if (!selected) { return; }

                                //////var selectedIndex = selected[0];
                                //////alert([selectedIndex, idx]);
                                //Ext.Msg.alert('itemswipe', idx);


                            } // itemswipe
                        }

                    },
                
            ]
        }
    ]
},
////////tabpanel Stamp Status/////

// {
//     xtype: 'tabpanel',
//     style: "background-color: transparent;", 
//    margin: '0 0 0 0',
//      id: 'tabpanelAyohaMerchantRewards_StampStatus',
//      width: '100%',
//      //height: '100%',
//      height: 400,
//      tabBarPosition: 'top',
//      ui: 'plain',
//      items: [
//         /////////StampsStatus_EligiblePerks
//         {
//             xtype: 'container',
//             width: '100%',
//             height: '100%',
//             style: "background-color: transparent;",
//             title: 'StampsStatus_EligiblePerks',
//             id:'containerTabpanelAyohaMerchantRewards_StampsStatus_EligiblePerks',
//             layout: {
//                 type: 'vbox',
//                 pack: 'start',
//                 align: 'center',
//             }, 
//             items:[
//                 {
//                     xtype: 'carousel',
//                     hidden: false,
//                     //width: '95%',
//                     //height: 80,
//                     margin: '2 0 0 0',
//                     width: '98%',
//                     id: 'container_Dashboard_NearestRedeemMembers',
//                     height: 320,
//                     requires: [
//                 'Ext.data.Store',
//                 'Ext.carousel.Carousel',
//                 'Ext.util.DelayedTask',
//                     ],
//                     items: [
                
//                         {
//                             xtype: 'container',
//                             // xtype: 'carousel',
//                             hidden: false,
//                             //width: '95%',
//                             //height: 80,
//                             margin: '-2 0 0 0',
//                             width: '100%',
//                             id: 'container_Dashboard_NearestRedeemMembers_carosel0',
//                             height: 290,
//                             // height: 440,
//                             // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//                             style: 'background-color:transparent',
//                             layout: {
//                                 type: 'vbox',
//                                 pack: 'start',
//                                 align: 'center',
//                             },
//                             items: [
//                                 {
//                                     xtype: 'container',
//                                     //width: '95%',
//                                     //height: 80,
//                                     margin: '12 0 0 0',
//                                     width: '95%',
//                                     height: 85,
//                                     //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//                                     //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                     //  style: 'background-color:transparent',
//                                     //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                   //  style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                     style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center',
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer'
//                                         },
//                                         {
//                                             xtype: 'container',
//                                             width: '92%',
//                                             //height: 100,
//                                             height: 80,
//                                             margin: '10 0 0 0',
//                                             name: 'container_Dashboard_NearestRedeem0',
//                                             //style: {
//                                             //    // background: '#D25959',
//                                             //    background: 'rgba(76, 175, 80, 0.3);',
//                                             //    // border: '2px'
//                                             //},
//                                             style: 'background-color:transparent',
//                                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                             //style: 'background-color:transparent',
//                                             layout: {
//                                                 type: 'hbox',
//                                                 pack: 'center',
//                                                 align: 'center',
//                                             },
//                                             items: [
//                                                 {
//                                                     xtype: 'container',
//                                                     width: '15%',
                
//                                                     margin: '0 0 0 0',
//                                                     //style: {
//                                                     //    // background: '#D25959',
//                                                     //    background: 'rgba(76, 175, 80, 0.3);',
//                                                     //    // border: '2px'
//                                                     //},
//                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                     style: 'background-color:transparent',
//                                                     layout: {
//                                                         type: 'vbox',
//                                                         pack: 'center',
//                                                         align: 'center',
//                                                     },
//                                                     items: [
//                                                           {
                
//                                                               //xtype: 'button',
//                                                               //height: 90,
//                                                               //width: 90,
//                                                              // margin: '-18 0 0 -10',
//                                                               margin: '-18 0 0 35',
//                                                               //zIndex: 400,
//                                                               id: 'Dashboard_NearestRedeem_StampContent0',
//                                                               html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                               //ui: 'plain',
//                                                               //handler: function () {
                
//                                                               //}
                
//                                                           },
                
//                                                     ]
//                                                 },
//                                                   {
//                                                       xtype: 'container',
//                                                       width: '95%',
//                                                      // width: '100%',
//                                                       //zIndex: -99,
//                                                       //margin: '-18 0 0 0',                                   
//                                                       //height: 80,                                   
//                                                       margin: '-14 0 0 0',
//                                                       height: 80,
//                                                       //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                       style: 'background-color:transparent',
//                                                       layout: {
//                                                           type: 'vbox',
//                                                           pack: 'center',
//                                                           align: 'left',
//                                                       },
//                                                       items: [
//                                                            {
//                                                                margin: '-8 0 0 33',
//                                                                id: 'Dashboard_NearestRedeem_StampContentNote0',
//                                                                html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                            },
//                                                             {
//                                                                 margin: '-2 0 0 33',
//                                                                 id: 'Dashboard_NearestRedeem_EnterpriseName0',
//                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                             },
//                                                              {
//                                                                  margin: '0 0 0 33',
//                                                                  width: '100%',
//                                                                  id: 'Dashboard_NearestRedeem_EndDate0',
//                                                                  html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                              },
                
//                                                       ]
//                                                   },
                
                
//                                             ]
//                                         },
                
//                                         {
//                                             xtype: 'spacer'
//                                         },
//                                     ]
                
//                                 },
                
                
                
//                            {
//                                xtype: 'container',
//                                //width: '95%',
//                                //height: 80,
//                                margin: '12 0 0 0',
//                                width: '95%',
//                                height: 85,
//                                //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//                                //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                // style: 'background-color:transparent',
//                                // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                               ///////////// style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                layout: {
//                                    type: 'hbox',
//                                    pack: 'center',
//                                    align: 'center',
//                                },
//                                items: [
//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                    {
//                                        xtype: 'container',
//                                        width: '92%',
//                                        //height: 100,
//                                        height: 80,
//                                        margin: '10 0 0 0',
//                                        name: 'container_Dashboard_NearestRedeem1',
//                                        //style: {
//                                        //    // background: '#D25959',
//                                        //    background: 'rgba(76, 175, 80, 0.3);',
//                                        //    // border: '2px'
//                                        //},
//                                        style: 'background-color:transparent',
//                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                        //style: 'background-color:transparent',
//                                        layout: {
//                                            type: 'hbox',
//                                            pack: 'center',
//                                            align: 'center',
//                                        },
//                                        items: [
//                                            {
//                                                xtype: 'container',
//                                                width: '15%',
//                                                //  zIndex: 400,
//                                                margin: '0 0 0 0',
//                                                //style: {
//                                                //    // background: '#D25959',
//                                                //    background: 'rgba(76, 175, 80, 0.3);',
//                                                //    // border: '2px'
//                                                //},
//                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                style: 'background-color:transparent',
//                                                layout: {
//                                                    type: 'vbox',
//                                                    pack: 'center',
//                                                    align: 'center',
//                                                },
//                                                items: [
//                                                      {
                
//                                                          //xtype: 'button',
//                                                          //height: 90,
//                                                          //width: 90,
//                                                         // margin: '-18 0 0 -10',
//                                                         margin: '-18 0 0 35',
//                                                          //zIndex: 400,
//                                                          id: 'Dashboard_NearestRedeem_StampContent1',
//                                                          html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                          //ui: 'plain',
//                                                          //handler: function () {
                
//                                                          //}
                
//                                                      },
                
//                                                ]
//                                            },
//                                              {
//                                                  xtype: 'container',
//                                                  width: '95%',
//                                                 // width: '100%',
//                                                  // zIndex: -99,
//                                                  //margin: '-18 0 0 0',                                   
//                                                  //height: 80,                                   
//                                                  margin: '-14 0 0 0',
//                                                  height: 80,
//                                                  //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                  style: 'background-color:transparent',
//                                                  layout: {
//                                                      type: 'vbox',
//                                                      pack: 'center',
//                                                      align: 'left',
//                                                  },
//                                                  items: [
//                                                       {
//                                                           margin: '-8 0 0 33',
//                                                           id: 'Dashboard_NearestRedeem_StampContentNote1',
//                                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                       },
//                                                        {
//                                                            margin: '-2 0 0 33',
//                                                            id: 'Dashboard_NearestRedeem_EnterpriseName1',
//                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                        },
//                                                         {
//                                                             margin: '0 0 0 33',
//                                                             width: '100%',
//                                                             id: 'Dashboard_NearestRedeem_EndDate1',
//                                                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                         },
                
//                                                  ]
//                                              },
                
                
//                                        ]
//                                    },
                
//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                ]
                
//                            },
                
                
                
                
//                               {
//                                   xtype: 'container',
//                                   //width: '95%',
//                                   //height: 80,
//                                   margin: '12 0 0 0',
//                                   width: '95%',
//                                   height: 85,
                                 
//                                  // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                   style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                   layout: {
//                                       type: 'hbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   items: [
//                                       {
//                                           xtype: 'spacer'
//                                       },
//                                       {
//                                           xtype: 'container',
//                                           width: '92%',
//                                           //height: 100,
//                                           height: 80,
//                                           margin: '10 0 0 0',
//                                           name: 'container_Dashboard_NearestRedeem2',
//                                           //style: {
//                                           //    // background: '#D25959',
//                                           //    background: 'rgba(76, 175, 80, 0.3);',
//                                           //    // border: '2px'
//                                           //},
//                                           style: 'background-color:transparent',
//                                           //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                           //style: 'background-color:transparent',
//                                           layout: {
//                                               type: 'hbox',
//                                               pack: 'center',
//                                               align: 'center',
//                                           },
//                                           items: [
//                                               {
//                                                   xtype: 'container',
//                                                   width: '15%',
//                                                   //  zIndex: 400,
//                                                   margin: '0 0 0 0',
//                                                   //style: {
//                                                   //    // background: '#D25959',
//                                                   //    background: 'rgba(76, 175, 80, 0.3);',
//                                                   //    // border: '2px'
//                                                   //},
//                                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                   style: 'background-color:transparent',
//                                                   layout: {
//                                                       type: 'vbox',
//                                                       pack: 'center',
//                                                       align: 'center',
//                                                   },
//                                                   items: [
//                                                         {
                
//                                                             //xtype: 'button',
//                                                             //height: 90,
//                                                             //width: 90,
//                                                           //  margin: '-18 0 0 -10',
//                                                             margin: '-18 0 0 35',
//                                                             //zIndex: 400,
//                                                             id: 'Dashboard_NearestRedeem_StampContent2',
//                                                             html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                             //ui: 'plain',
//                                                             //handler: function () {
                
//                                                             //}
                
//                                                         },
                
//                                                   ]
//                                               },
//                                                 {
//                                                     xtype: 'container',
//                                                     width: '95%',
//                                                    // width: '100%',
//                                                     // zIndex: -99,
//                                                     //margin: '-18 0 0 0',                                   
//                                                     //height: 80,                                   
//                                                     margin: '-14 0 0 0',
//                                                     height: 80,
//                                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                     style: 'background-color:transparent',
//                                                     layout: {
//                                                         type: 'vbox',
//                                                         pack: 'center',
//                                                         align: 'left',
//                                                     },
//                                                     items: [
//                                                          {
//                                                              margin: '-8 0 0 33',
//                                                              id: 'Dashboard_NearestRedeem_StampContentNote2',
//                                                              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                          },
//                                                           {
//                                                               margin: '-2 0 0 33',
//                                                               id: 'Dashboard_NearestRedeem_EnterpriseName2',
//                                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                           },
//                                                            {
//                                                                margin: '0 0 0 33',
//                                                                width: '100%',
//                                                                id: 'Dashboard_NearestRedeem_EndDate2',
//                                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                            },
                
//                                                     ]
//                                                 },
                
                
//                                           ]
//                                       },
                
//                                       {
//                                           xtype: 'spacer'
//                                       },
//                                   ]
                
//                               },
                
//                             ]
                
//                         },
                
//                         ///////////////////////////////////////////carosel-2
                
//                         {
//                             xtype: 'container',
//                             // xtype: 'carousel',
//                             hidden: false,
//                             //width: '95%',
//                             //height: 80,
//                             margin: '-2 0 0 0',
//                             width: '100%',
//                             id: 'container_Dashboard_NearestRedeemMembers_carosel1',
//                             height: 290,
//                             // height: 440,
//                             // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//                             style: 'background-color:transparent',
//                             layout: {
//                                 type: 'vbox',
//                                 pack: 'start',
//                                 align: 'center',
//                             },
//                             items: [
//                                 {
//                                     xtype: 'container',
//                                     //width: '95%',
//                                     //height: 80,
//                                     margin: '12 0 0 0',
//                                     width: '95%',
//                                     height: 85,
                                   
//                                     //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                                     style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center',
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer'
//                                         },
//                                         {
//                                             xtype: 'container',
//                                             width: '92%',
//                                             //height: 100,
//                                             height: 80,
//                                             margin: '10 0 0 0',
//                                             name: 'container_Dashboard_NearestRedeem3',
//                                             //style: {
//                                             //    // background: '#D25959',
//                                             //    background: 'rgba(76, 175, 80, 0.3);',
//                                             //    // border: '2px'
//                                             //},
//                                             style: 'background-color:transparent',
//                                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                             //style: 'background-color:transparent',
//                                             layout: {
//                                                 type: 'hbox',
//                                                 pack: 'center',
//                                                 align: 'center',
//                                             },
//                                             items: [
//                                                 {
//                                                     xtype: 'container',
//                                                     width: '15%',
                
//                                                     margin: '0 0 0 0',
//                                                     //style: {
//                                                     //    // background: '#D25959',
//                                                     //    background: 'rgba(76, 175, 80, 0.3);',
//                                                     //    // border: '2px'
//                                                     //},
//                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                     style: 'background-color:transparent',
//                                                     layout: {
//                                                         type: 'vbox',
//                                                         pack: 'center',
//                                                         align: 'center',
//                                                     },
//                                                     items: [
//                                                           {
                
//                                                               //xtype: 'button',
//                                                               //height: 90,
//                                                               //width: 90,
//                                                              // margin: '-18 0 0 -10',
//                                                               margin: '-18 0 0 35',
//                                                               //zIndex: 400,
//                                                               id: 'Dashboard_NearestRedeem_StampContent3',
//                                                               html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                               //ui: 'plain',
//                                                               //handler: function () {
                
//                                                               //}
                
//                                                           },
                
//                                                     ]
//                                                 },
//                                                   {
//                                                       xtype: 'container',
//                                                       width: '95%',
//                                                     //  width: '100%',
//                                                       //zIndex: -99,
//                                                       //margin: '-18 0 0 0',                                   
//                                                       //height: 80,                                   
//                                                       margin: '-14 0 0 0',
//                                                       height: 80,
//                                                       //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                       style: 'background-color:transparent',
//                                                       layout: {
//                                                           type: 'vbox',
//                                                           pack: 'center',
//                                                           align: 'left',
//                                                       },
//                                                       items: [
//                                                            {
//                                                                margin: '-8 0 0 33',
//                                                                id: 'Dashboard_NearestRedeem_StampContentNote3',
//                                                                html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                            },
//                                                             {
//                                                                 margin: '-2 0 0 33',
//                                                                 id: 'Dashboard_NearestRedeem_EnterpriseName3',
//                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                             },
//                                                              {
//                                                                  margin: '0 0 0 33',
//                                                                  width: '100%',
//                                                                  id: 'Dashboard_NearestRedeem_EndDate3',
//                                                                  html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                              },
                
//                                                       ]
//                                                   },
                
                
//                                             ]
//                                         },
                
//                                         {
//                                             xtype: 'spacer'
//                                         },
//                                     ]
                
//                                 },
                
                
                
//                            {
//                                xtype: 'container',
//                                //width: '95%',
//                                //height: 80,
//                                margin: '12 0 0 0',
//                                width: '95%',
//                                height: 85,
//                                //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//                                //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                // style: 'background-color:transparent',
//                                // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                                style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                layout: {
//                                    type: 'hbox',
//                                    pack: 'center',
//                                    align: 'center',
//                                },
//                                items: [
//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                    {
//                                        xtype: 'container',
//                                        width: '92%',
//                                        //height: 100,
//                                        height: 80,
//                                        margin: '10 0 0 0',
//                                        name: 'container_Dashboard_NearestRedeem4',
//                                        //style: {
//                                        //    // background: '#D25959',
//                                        //    background: 'rgba(76, 175, 80, 0.3);',
//                                        //    // border: '2px'
//                                        //},
//                                        style: 'background-color:transparent',
//                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                        //style: 'background-color:transparent',
//                                        layout: {
//                                            type: 'hbox',
//                                            pack: 'center',
//                                            align: 'center',
//                                        },
//                                        items: [
//                                            {
//                                                xtype: 'container',
//                                                width: '15%',
//                                                //  zIndex: 400,
//                                                margin: '0 0 0 0',
//                                                //style: {
//                                                //    // background: '#D25959',
//                                                //    background: 'rgba(76, 175, 80, 0.3);',
//                                                //    // border: '2px'
//                                                //},
//                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                style: 'background-color:transparent',
//                                                layout: {
//                                                    type: 'vbox',
//                                                    pack: 'center',
//                                                    align: 'center',
//                                                },
//                                                items: [
//                                                      {
                
//                                                          //xtype: 'button',
//                                                          //height: 90,
//                                                          //width: 90,
//                                                         // margin: '-18 0 0 -10',
//                                                          margin: '-18 0 0 35',
//                                                          //zIndex: 400,
//                                                          id: 'Dashboard_NearestRedeem_StampContent4',
//                                                          html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                          //ui: 'plain',
//                                                          //handler: function () {
                
//                                                          //}
                
//                                                      },
                
//                                                ]
//                                            },
//                                              {
//                                                  xtype: 'container',
//                                                  width: '95%',
//                                                 // width: '100%',
//                                                  // zIndex: -99,
//                                                  //margin: '-18 0 0 0',                                   
//                                                  //height: 80,                                   
//                                                  margin: '-14 0 0 0',
//                                                  height: 80,
//                                                  //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                  style: 'background-color:transparent',
//                                                  layout: {
//                                                      type: 'vbox',
//                                                      pack: 'center',
//                                                      align: 'left',
//                                                  },
//                                                  items: [
//                                                       {
//                                                           margin: '-8 0 0 33',
//                                                           id: 'Dashboard_NearestRedeem_StampContentNote4',
//                                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                       },
//                                                        {
//                                                            margin: '-2 0 0 33',
//                                                            id: 'Dashboard_NearestRedeem_EnterpriseName4',
//                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                        },
//                                                         {
//                                                             margin: '0 0 0 33',
//                                                             width: '100%',
//                                                             id: 'Dashboard_NearestRedeem_EndDate4',
//                                                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                         },
                
//                                                  ]
//                                              },
                
                
//                                        ]
//                                    },
                
//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                ]
                
//                            },
                
                
                
                
//                               {
//                                   xtype: 'container',
//                                   //width: '95%',
//                                   //height: 80,
//                                   margin: '12 0 0 0',
//                                   width: '95%',
//                                   height: 85,
//                                   //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                   //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                  // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                                  style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                  layout: {
//                                       type: 'hbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   items: [
//                                       {
//                                           xtype: 'spacer'
//                                       },
//                                       {
//                                           xtype: 'container',
//                                           width: '92%',
//                                           //height: 100,
//                                           height: 80,
//                                           margin: '10 0 0 0',
//                                           name: 'container_Dashboard_NearestRedeem5',
//                                           //style: {
//                                           //    // background: '#D25959',
//                                           //    background: 'rgba(76, 175, 80, 0.3);',
//                                           //    // border: '2px'
//                                           //},
//                                           style: 'background-color:transparent',
//                                           //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                           //style: 'background-color:transparent',
//                                           layout: {
//                                               type: 'hbox',
//                                               pack: 'center',
//                                               align: 'center',
//                                           },
//                                           items: [
//                                               {
//                                                   xtype: 'container',
//                                                   width: '15%',
//                                                   //  zIndex: 400,
//                                                   margin: '0 0 0 0',
//                                                   //style: {
//                                                   //    // background: '#D25959',
//                                                   //    background: 'rgba(76, 175, 80, 0.3);',
//                                                   //    // border: '2px'
//                                                   //},
//                                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                   style: 'background-color:transparent',
//                                                   layout: {
//                                                       type: 'vbox',
//                                                       pack: 'center',
//                                                       align: 'center',
//                                                   },
//                                                   items: [
//                                                         {
                
//                                                             //xtype: 'button',
//                                                             //height: 90,
//                                                             //width: 90,
//                                                            // margin: '-18 0 0 -10',
//                                                             margin: '-18 0 0 35',
//                                                             //zIndex: 400,
//                                                             id: 'Dashboard_NearestRedeem_StampContent5',
//                                                             html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                             //ui: 'plain',
//                                                             //handler: function () {
                
//                                                             //}
                
//                                                         },
                
//                                                   ]
//                                               },
//                                                 {
//                                                     xtype: 'container',
//                                                     width: '95%',
//                                                    // width: '100%',
//                                                     // zIndex: -99,
//                                                     //margin: '-18 0 0 0',                                   
//                                                     //height: 80,                                   
//                                                     margin: '-14 0 0 0',
//                                                     height: 80,
//                                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                     style: 'background-color:transparent',
//                                                     layout: {
//                                                         type: 'vbox',
//                                                         pack: 'center',
//                                                         align: 'left',
//                                                     },
//                                                     items: [
//                                                          {
//                                                              margin: '-8 0 0 33',
//                                                              id: 'Dashboard_NearestRedeem_StampContentNote5',
//                                                              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                          },
//                                                           {
//                                                               margin: '-2 0 0 33',
//                                                               id: 'Dashboard_NearestRedeem_EnterpriseName5',
//                                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                           },
//                                                            {
//                                                                margin: '0 0 0 33',
//                                                                width: '100%',
//                                                                id: 'Dashboard_NearestRedeem_EndDate5',
//                                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                            },
                
//                                                     ]
//                                                 },
                
                
//                                           ]
//                                       },
                
//                                       {
//                                           xtype: 'spacer'
//                                       },
//                                   ]
                
//                               },
                
                
//                             ]
                
//                         },
                
                
                
//                         ///////////////////////////carosel-2
//                         {
//                             xtype: 'container',
//                             // xtype: 'carousel',
//                             hidden: false,
//                             //width: '95%',
//                             //height: 80,
//                             margin: '-2 0 0 0',
//                             width: '100%',
//                             id: 'container_Dashboard_NearestRedeemMembers_carosel2',
//                             height: 290,
//                             // height: 440,
//                             // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//                             style: 'background-color:transparent',
//                             layout: {
//                                 type: 'vbox',
//                                 pack: 'start',
//                                 align: 'center',
//                             },
//                             items: [
//                                 {
//                                     xtype: 'container',
//                                     //width: '95%',
//                                     //height: 80,
//                                     margin: '12 0 0 0',
//                                     width: '95%',
//                                     height: 85,
//                                     //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//                                     //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                     //  style: 'background-color:transparent',
//                                     //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                    // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                                    style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                    layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center',
//                                     },
//                                     items: [
//                                         {
//                                             xtype: 'spacer'
//                                         },
//                                         {
//                                             xtype: 'container',
//                                             width: '92%',
//                                             //height: 100,
//                                             height: 80,
//                                             margin: '10 0 0 0',
//                                             name: 'container_Dashboard_NearestRedeem6',
//                                             //style: {
//                                             //    // background: '#D25959',
//                                             //    background: 'rgba(76, 175, 80, 0.3);',
//                                             //    // border: '2px'
//                                             //},
//                                             style: 'background-color:transparent',
//                                             //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                             //style: 'background-color:transparent',
//                                             layout: {
//                                                 type: 'hbox',
//                                                 pack: 'center',
//                                                 align: 'center',
//                                             },
//                                             items: [
//                                                 {
//                                                     xtype: 'container',
//                                                     width: '15%',
                
//                                                     margin: '0 0 0 0',
//                                                     //style: {
//                                                     //    // background: '#D25959',
//                                                     //    background: 'rgba(76, 175, 80, 0.3);',
//                                                     //    // border: '2px'
//                                                     //},
//                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                     style: 'background-color:transparent',
//                                                     layout: {
//                                                         type: 'vbox',
//                                                         pack: 'center',
//                                                         align: 'center',
//                                                     },
//                                                     items: [
//                                                           {
                
//                                                               //xtype: 'button',
//                                                               //height: 90,
//                                                               //width: 90,
//                                                              // margin: '-18 0 0 -10',
//                                                               margin: '-18 0 0 35',
//                                                               //zIndex: 400,
//                                                               id: 'Dashboard_NearestRedeem_StampContent6',
//                                                               html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                               //ui: 'plain',
//                                                               //handler: function () {
                
//                                                               //}
                
//                                                           },
                
//                                                     ]
//                                                 },
//                                                   {
//                                                       xtype: 'container',
//                                                       width: '95%',
//                                                      // width: '100%',
//                                                       //zIndex: -99,
//                                                       //margin: '-18 0 0 0',                                   
//                                                       //height: 80,                                   
//                                                       margin: '-14 0 0 0',
//                                                       height: 80,
//                                                       //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                       style: 'background-color:transparent',
//                                                       layout: {
//                                                           type: 'vbox',
//                                                           pack: 'center',
//                                                           align: 'left',
//                                                       },
//                                                       items: [
//                                                            {
//                                                                margin: '-8 0 0 33',
//                                                                id: 'Dashboard_NearestRedeem_StampContentNote6',
//                                                                html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                            },
//                                                             {
//                                                                 margin: '-2 0 0 33',
//                                                                 id: 'Dashboard_NearestRedeem_EnterpriseName6',
//                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                             },
//                                                              {
//                                                                  margin: '0 0 0 33',
//                                                                  width: '100%',
//                                                                  id: 'Dashboard_NearestRedeem_EndDate6',
//                                                                  html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                              },
                
//                                                       ]
//                                                   },
                
                
//                                             ]
//                                         },
                
//                                         {
//                                             xtype: 'spacer'
//                                         },
//                                     ]
                
//                                 },
                
                
                
//                            {
//                                xtype: 'container',
//                                //width: '95%',
//                                //height: 80,
//                                margin: '12 0 0 0',
//                                width: '95%',
//                                height: 85,
//                                //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//                                //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                // style: 'background-color:transparent',
//                                // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                               style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                               layout: {
//                                    type: 'hbox',
//                                    pack: 'center',
//                                    align: 'center',
//                                },
//                                items: [
//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                    {
//                                        xtype: 'container',
//                                        width: '92%',
//                                        //height: 100,
//                                        height: 80,
//                                        margin: '10 0 0 0',
//                                        name: 'container_Dashboard_NearestRedeem7',
//                                        //style: {
//                                        //    // background: '#D25959',
//                                        //    background: 'rgba(76, 175, 80, 0.3);',
//                                        //    // border: '2px'
//                                        //},
//                                        style: 'background-color:transparent',
//                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                        //style: 'background-color:transparent',
//                                        layout: {
//                                            type: 'hbox',
//                                            pack: 'center',
//                                            align: 'center',
//                                        },
//                                        items: [
//                                            {
//                                                xtype: 'container',
//                                                width: '15%',
//                                                //  zIndex: 400,
//                                                margin: '0 0 0 0',
//                                                //style: {
//                                                //    // background: '#D25959',
//                                                //    background: 'rgba(76, 175, 80, 0.3);',
//                                                //    // border: '2px'
//                                                //},
//                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                style: 'background-color:transparent',
//                                                layout: {
//                                                    type: 'vbox',
//                                                    pack: 'center',
//                                                    align: 'center',
//                                                },
//                                                items: [
//                                                      {
                
//                                                          //xtype: 'button',
//                                                          //height: 90,
//                                                          //width: 90,
//                                                         // margin: '-18 0 0 -10',
//                                                          margin: '-18 0 0 35',
//                                                          //zIndex: 400,
//                                                          id: 'Dashboard_NearestRedeem_StampContent7',
//                                                          html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                          //ui: 'plain',
//                                                          //handler: function () {
                
//                                                          //}
                
//                                                      },
                
//                                                ]
//                                            },
//                                              {
//                                                  xtype: 'container',
//                                                  width: '95%',
//                                                 // width: '100%',
//                                                  // zIndex: -99,
//                                                  //margin: '-18 0 0 0',                                   
//                                                  //height: 80,                                   
//                                                  margin: '-14 0 0 0',
//                                                  height: 80,
//                                                  //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                  style: 'background-color:transparent',
//                                                  layout: {
//                                                      type: 'vbox',
//                                                      pack: 'center',
//                                                      align: 'left',
//                                                  },
//                                                  items: [
//                                                       {
//                                                           margin: '-8 0 0 33',
//                                                           id: 'Dashboard_NearestRedeem_StampContentNote7',
//                                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                       },
//                                                        {
//                                                            margin: '-2 0 0 33',
//                                                            id: 'Dashboard_NearestRedeem_EnterpriseName7',
//                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                        },
//                                                         {
//                                                             margin: '0 0 0 33',
//                                                             width: '100%',
//                                                             id: 'Dashboard_NearestRedeem_EndDate7',
//                                                             html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                         },
                
//                                                  ]
//                                              },
                
                
//                                        ]
//                                    },
                
//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                ]
                
//                            },
                
                
                
                
//                               {
//                                   xtype: 'container',
//                                   //width: '95%',
//                                   //height: 80,
//                                   margin: '12 0 0 0',
//                                   width: '95%',
//                                   height: 85,
//                                   //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                   // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                                  // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
//                                  style: 'border:1px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
//                                  layout: {
//                                       type: 'hbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   items: [
//                                       {
//                                           xtype: 'spacer'
//                                       },
//                                       {
//                                           xtype: 'container',
//                                           width: '92%',
//                                           //height: 100,
//                                           height: 80,
//                                           margin: '10 0 0 0',
//                                           name: 'container_Dashboard_NearestRedeem8',
//                                           //style: {
//                                           //    // background: '#D25959',
//                                           //    background: 'rgba(76, 175, 80, 0.3);',
//                                           //    // border: '2px'
//                                           //},
//                                           style: 'background-color:transparent',
//                                           //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                
//                                           //style: 'background-color:transparent',
//                                           layout: {
//                                               type: 'hbox',
//                                               pack: 'center',
//                                               align: 'center',
//                                           },
//                                           items: [
//                                               {
//                                                   xtype: 'container',
//                                                   width: '15%',
//                                                   //  zIndex: 400,
//                                                   margin: '0 0 0 0',
//                                                   //style: {
//                                                   //    // background: '#D25959',
//                                                   //    background: 'rgba(76, 175, 80, 0.3);',
//                                                   //    // border: '2px'
//                                                   //},
//                                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                   style: 'background-color:transparent',
//                                                   layout: {
//                                                       type: 'vbox',
//                                                       pack: 'center',
//                                                       align: 'center',
//                                                   },
//                                                   items: [
//                                                         {
                
//                                                             //xtype: 'button',
//                                                             //height: 90,
//                                                             //width: 90,
//                                                            // margin: '-18 0 0 -10',
//                                                             margin: '-18 0 0 35',
//                                                             //zIndex: 400,
//                                                             id: 'Dashboard_NearestRedeem_StampContent8',
//                                                             html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',
                
//                                                             //ui: 'plain',
//                                                             //handler: function () {
                
//                                                             //}
                
//                                                         },
                
//                                                   ]
//                                               },
//                                                 {
//                                                     xtype: 'container',
//                                                     width: '95%',
//                                                    // width: '100%',
//                                                     // zIndex: -99,
//                                                     //margin: '-18 0 0 0',                                   
//                                                     //height: 80,                                   
//                                                     margin: '-14 0 0 0',
//                                                     height: 80,
//                                                     //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                     style: 'background-color:transparent',
//                                                     layout: {
//                                                         type: 'vbox',
//                                                         pack: 'center',
//                                                         align: 'left',
//                                                     },
//                                                     items: [
//                                                          {
//                                                              margin: '-8 0 0 33',
//                                                              id: 'Dashboard_NearestRedeem_StampContentNote8',
//                                                              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
//                                                          },
//                                                           {
//                                                               margin: '-2 0 0 33',
//                                                               id: 'Dashboard_NearestRedeem_EnterpriseName8',
//                                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
//                                                           },
//                                                            {
//                                                                margin: '0 0 0 33',
//                                                                width: '100%',
//                                                                id: 'Dashboard_NearestRedeem_EndDate8',
//                                                                html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
//                                                            },
                
//                                                     ]
//                                                 },
                
                
//                                           ]
//                                       },
                
//                                       {
//                                           xtype: 'spacer'
//                                       },
//                                   ]
                
//                               },
                
//                             ]
                
//                         },
//                     ]
//                 },
//             ]
//         },
//         {
//             xtype: 'container',
//             width: '100%',
//             height: '100%',
//             style: "background-color: transparent;",
//             title: 'StampsStatus_EligiblePerks',
//             id:'containerTabpanelAyohaMerchantRewards_StampsStatus_Eligible_Redeem_Approved_Expired',
//             layout: {
//                 type: 'vbox',
//                 pack: 'start',
//                 align: 'center',
//             }, 
//             items:[
                
//                     {
//                         xtype: 'list',
//                         width: '95%',
//                         height: 400,
//                         margin: '5 0 0 0',
//                         // height: '98%',
//                         // flex: 1,
//                       //  store: _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore,
//                         // store:'AyohaUserDashBoardNearestRedeemItemListStore',
//                        // grouped:true,
//                         id: 'listTabpanelAyohaMerchantRewards_StampsStatus',
//                         mode: 'SINGLE',
//                         scrollable: {
//                             direction: 'vertical',
//                             indicators: {
//                                 y: {
//                                     autoHide: true
//                                 },
//                                 x: {
//                                     autoHide: true
//                                 }
//                             }
//                         },
//                         style: 'background-color:rgba(255,255,255, 0.1);',
//                         // width: '100%',
//                         disableSelection: true,
//                         itemTpl: '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius: 10px 10px 10px 10px;">' +


//                          '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0px 0px -15px;height:90px;"><tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center">{ModifiedStampContent}</td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{StampContentNote}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{EnterpriseName}<br>End:{EndDate} - {CampaignDayLeft} Day Left</font></td></tr></table>'

//                              + '</div>',
                      
//                         //height: '100%',
                      
//                         emptyText: '<div  style="background-color:transparent;width:100%;height100%;">Hai!, you have no redemption items yet.Go to Ayoha Mechant Menu ,get their Membership card and then collect your redemptions items!</div>',
//                         //listeners: {
//                         //    itemsingletap: function (list, idx, target, records, evt) {

//                         //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
//                         //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
//                         //        //var MembershipCardCode = records.get('MembershipCardCode');
//                         //        //var ID = records.get('ID');
//                         //        ////FloatPanel_NearestRedemption_EditCardShow_Edit(ID);
//                         //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
//                         //        //setTimeout(function () {
//                         //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
//                         //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

//                         //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
//                         //        //}, 2000);



//                         //    },
//                         //    deselect: function (list, records) {

//                         //    }
//                         //},
//                         listeners: {
//                             itemswipe: function (list, idx, target, record, evt) {
//                                 //  To get the selection you should use getSelection() instead
//                                 //////var selected = list.getActiveItem();
//                                 //////alert(list.getActiveItem());
//                                 //////if (!selected) { return; }

//                                 //////var selectedIndex = selected[0];
//                                 //////alert([selectedIndex, idx]);
//                                 //Ext.Msg.alert('itemswipe', idx);


//                             } // itemswipe
//                         }

//                     },
                
//             ]
//         }
//     ]
// },
//////////////////////






/////// end

            ]
        },        
           /////////Point Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Points',
            id:'containerTabpanelAyohaMerchantRewards_Points',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                                ////Point micropy button

                                {
                                    xtype: 'container',
                                    width: '100%',
                                    margin: '5 0 0 20',
                                    height:25,
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                
                                
                                {
                                    html:'<div class="perk-tabs">'+
                                    '<button class="perk-btn active" onclick="switchPerkTab_Point(this,\'NA\');">Eligible Perks</button>'+
                                    '<button class="perk-btn" onclick="switchPerkTab_Point(this,\'Submitted\');">Redeem</button>'+
                                    '<button class="perk-btn" onclick="switchPerkTab_Point(this,\'Approved\')">Approved</button>'+
                                    '<button class="perk-btn" onclick="switchPerkTab_Point(this,\'Expired\')">Expired</button>'+
                                  '</div>'
                                },
                                
                                
                                
                                
                                
                                    ]
                                },
{
    xtype: 'container',
    width: '100%',
    //width: 1050,
    height: 280,
    //height: '100%',
   // margin: '-150 0 0 0',
   // margin: '-100 0 0 0',
    //style: {
    //    // background: '#D25959',
    //    background: 'rgba(76, 175, 80, 0.3);',
    //    // border: '2px'
    //},
    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    style: 'background-color:transparent',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },
    items: [
      {
        xtype: 'tabpanel',
        style: "background-color: transparent;", 
       margin: '0 0 0 0',
         id: 'tabpanelAyohaMerchantRewards_Points',
         width: '100%',
         //height: '100%',
         height: 280,
         tabBarPosition: 'top',
         ui: 'plain',
         items: [
/////Eligible Points////
{
    xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'EligiblePointsMain',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },
    items:[
        {
            xtype: 'container',
            width: '95%',
            //height: 230,
            height: '100%',
            margin: '0 0 0 0',
            title:'EligiblePoints',
            id:'containerAyohaMerchantRewards_EligiblePoints',
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
                             width: 5
                         },
        
                         {
                             xtype: 'container',
                             name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture0',
                             height: 270,
                             width: 250,                            
                             margin: '0 0 0 0',
                             style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                             layout: {
                                 type: 'vbox',
                                 pack: 'center',
                                 align: 'center',
                             },
                             items: [
                                   {
                                       xtype: 'container',
                                       width: 60,
                                       height: 40,
                                       zIndex: 100,
                                         hidden: true,
                                       id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint0',
                                       margin: '0px 0px -23px -188px',
                                       style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                                      // style: 'background-color:transparent;',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'start',
                                           align: 'center',
                                       },
                                       items: [
                                          {
                                              width: '100%',
                                              zIndex: 100,
                                              hidden: true,
                                              id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint0',
                                              html: '<div style="color:white;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:white;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                          },
                                         
                                       ]
        
                                   },
        
                                  {
        
                                      height: 165,
                                      width: 110,
                                      id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture0',
                                    //  margin: '0 0 0 -8',
                                      html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                                  },
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     height: 38,
                                     margin: '55 0 0 0',
                                     style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'center',
                                     },
                                     items: [
                                           {
                                               margin: '-32 0 0 200',
                                               zIndex: 100,
                                               hidden: true,
                                               id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft0',
                                               html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                           },
                                           {
                                              
                                               margin: '4 0 0 0',
                                               id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt0',
                                               html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                           },
                                           {
        
                                             id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt0',
                                             margin: '-3 0 0 0',
                                             html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                         },
        
        
        
                                     ]
                                 },
        
                             ]
                         },
        
                {
                    xtype: 'panel',
                    width: 20
                },
                {
                    xtype: 'container',
                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture1',
                    height: 270,
                    width: 250,                            
                    margin: '0 0 0 0',
                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                          {
                              xtype: 'container',
                              width: 60,
                                       height: 40,
                                       zIndex: 100,
                                       hidden: true,
                                       id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint1',
                                       margin: '0px 0px -23px -188px',
                                       style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center',
                              },
                              items: [
                                 {
                                     width: '100%',
                                     zIndex: 100,
                                     hidden: true,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint1',
                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                 },
                                
                              ]
        
                          },
        
                         {
        
                             height: 165,
                             width: 110,
                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture1',
                            // margin: '0 0 0 -8',
                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                         },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 38,
                            margin: '55 0 0 0',
                            style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                                  {
                                    margin: '-32 0 0 200',
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft1',
                                      html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                  },
                                  {
                                     
                                      margin: '4 0 0 0',
                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt1',
                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                  },
                                  {
        
                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt1',
                                    margin: '-3 0 0 0',
                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                },
        
        
        
                            ]
                        },
        
                    ]
                },
               
        
                {
                    xtype: 'panel',
                    width: 20
                },
        
        
                {
                    xtype: 'container',
                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture2',
                    height: 270,
                    width: 250,                            
                    margin: '0 0 0 0',
                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                          {
                              xtype: 'container',
                              hidden: true,
                              id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint2',
                              width: 60,
                              height: 40,
                              zIndex: 100,
                              margin: '0px 0px -23px -188px',
                              style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center',
                              },
                              items: [
                                 {
                                     width: '100%',
                                     zIndex: 100,
                                     hidden: true,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint2',
                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                 },
                                
                              ]
        
                          },
        
                         {
        
                             height: 165,
                             width: 110,
                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture2',
                            // margin: '0 0 0 -8',
                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                         },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 38,
                            margin: '55 0 0 0',
                                     style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                                  {
                                    margin: '-32 0 0 200',
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft2',
                                      html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                  },
                                  {
                                     
                                      margin: '4 0 0 0',
                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt2',
                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                  },
                                  {
        
                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt2',
                                    margin: '-3 0 0 0',
                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                },
        
        
        
                            ]
                        },
        
                    ]
                },
        
                {
                    xtype: 'panel',
                    width: 20
                },
                {
                    xtype: 'container',
                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture3',
                    height: 270,
                    width: 250,                            
                    margin: '0 0 0 0',
                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                          {
                              xtype: 'container',
                              hidden: true,
                              id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint3',
                              width: 60,
                              height: 40,
                              zIndex: 100,
                              margin: '0px 0px -23px -188px',
                              style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center',
                              },
                              items: [
                                 {
                                     width: '100%',
                                     zIndex: 100,
                                     hidden: true,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint3',
                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                 },
                                
                              ]
        
                          },
        
                         {
        
                             height: 165,
                             width: 110,
                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture3',
                            // margin: '0 0 0 -8',
                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                         },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 38,
                            margin: '55 0 0 0',
                            style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                                  {
                                    margin: '-32 0 0 200',
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft3',
                                      html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                  },
                                  {
                                     
                                      margin: '4 0 0 0',
                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt3',
                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                  },
                                  {
        
                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt3',
                                    margin: '-3 0 0 0',
                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                },
        
        
        
                            ]
                        },
        
                    ]
                },
        
              
        
                {
                    xtype: 'panel',
                    width: 20
                },
              
                {
                    xtype: 'container',
                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture4',
                    height: 270,
                    width: 250,                            
                    margin: '0 0 0 0',
                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                          {
                              xtype: 'container',
                              hidden: true,
                              id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint4',
                              width: 60,
                              height: 40,
                              zIndex: 100,
                              margin: '0px 0px -23px -188px',
                              style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'center',
                              },
                              items: [
                                 {
                                     width: '100%',
                                     zIndex: 100,
                                     hidden: true,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint4',
                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                 },
                                
                              ]
        
                          },
        
                         {
        
                             height: 165,
                             width: 110,
                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture4',
                            // margin: '0 0 0 -8',
                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                         },
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 38,
                            margin: '55 0 0 0',
                            style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                                  {
                                    margin: '-32 0 0 200',
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft4',
                                      html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                  },
                                  {
                                     
                                      margin: '4 0 0 0',
                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt4',
                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                  },
                                  {
        
                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt4',
                                    margin: '-3 0 0 0',
                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                },
        
        
        
                            ]
                        },
        
                    ]
                },
        
        
        
        
                        {
                            xtype: 'panel',
                            width: 20
                        },
        
                        {
                            xtype: 'container',
                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture5',
                            height: 270,
                            width: 250,                            
                            margin: '0 0 0 0',
                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                                  {
                                      xtype: 'container',
                                      hidden: true,
                                      id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint5',
                                      width: 60,
                                      height: 40,
                                      zIndex: 100,
                                      margin: '0px 0px -23px -188px',
                                      style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                         {
                                             width: '100%',
                                             zIndex: 100,
                                             hidden: true,
                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint5',
                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                         },
                                        
                                      ]
        
                                  },
        
                                 {
        
                                     height: 165,
                                     width: 110,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture5',
                                     ///margin: '0 0 0 -8',
                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                                 },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 38,
                                    margin: '55 0 0 0',
                                     style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                          {
                                            margin: '-32 0 0 200',
                                              zIndex: 100,
                                              hidden: true,
                                              id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft5',
                                              html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                          },
                                          {
                                             
                                              margin: '4 0 0 0',
                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt5',
                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                          },
                                          {
        
                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt5',
                                            margin: '-3 0 0 0',
                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                        },
        
        
        
                                    ]
                                },
        
                            ]
                        },
        
        
        
        
        
        
        
        
                        {
                            xtype: 'panel',
                            width: 20
                        },
        
                        {
                            xtype: 'container',
                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture6',
                            height: 270,
                            width: 250,                            
                            margin: '0 0 0 0',
                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                                  {
                                      xtype: 'container',
                                      width: 60,
                                      height: 40,
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint6',
                                      margin: '0px 0px -23px -188px',
                                      style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                         {
                                             width: '100%',
                                             zIndex: 100,
                                             hidden: true,
                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint6',
                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                         },
                                        
                                      ]
        
                                  },
        
                                 {
        
                                     height: 165,
                                     width: 110,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture6',
                                    // margin: '0 0 0 -8',
                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                                 },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 38,
                                    margin: '55 0 0 0',
                                    style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                          {
                                            margin: '-32 0 0 200',
                                              zIndex: 100,
                                              hidden: true,
                                              id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft6',
                                              html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                          },
                                          {
                                             
                                              margin: '4 0 0 0',
                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt6',
                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                          },
                                          {
        
                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt6',
                                            margin: '-3 0 0 0',
                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                        },
        
        
        
                                    ]
                                },
        
                            ]
                        },
        
        
        
        
        
        
        
                        {
                            xtype: 'panel',
                            width: 20
                        },
        
                        {
                            xtype: 'container',
                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture7',
                            height: 270,
                            width: 250,                            
                            margin: '0 0 0 0',
                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                                  {
                                      xtype: 'container',
                                      width: 60,
                                      height: 40,
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint7',
                                      margin: '0px 0px -23px -188px',
                                      style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                         {
                                             width: '100%',
                                             zIndex: 100,
                                             hidden: true,
                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint7',
                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                         },
                                        
                                      ]
        
                                  },
        
                                 {
        
                                     height: 165,
                                     width: 110,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture7',
                                    // margin: '0 0 0 -8',
                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                                 },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 38,
                                    margin: '55 0 0 0',
                                     style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                          {
                                            margin: '-32 0 0 200',
                                              zIndex: 100,
                                              hidden: true,
                                              id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft7',
                                              html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                          },
                                          {
                                             
                                              margin: '4 0 0 0',
                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt7',
                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                          },
                                          {
        
                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt7',
                                            margin: '-3 0 0 0',
                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                        },
        
        
        
                                    ]
                                },
        
                            ]
                        },
        
        
        
        
                        {
                            xtype: 'panel',
                            width: 20
                        },
        
                        {
                            xtype: 'container',
                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture8',
                            height: 270,
                            width: 250,                            
                            margin: '0 0 0 0',
                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                                  {
                                      xtype: 'container',
                                      width: 60,
                                      height: 40,
                                      zIndex: 100,
                                      hidden: true,
                                      id: 'containerLoyaltyPointNearestRedeemItem_ItemPoint8',
                                      margin: '0px 0px -23px -188px',
                                      style: 'border-right:1px solid #ECECEC;border-left:1px solid #ECECEC;border-bottom:1px solid #ECECEC;border-top:1px solid #ECECEC;background-color: purple;border-radius: 0px 0px 10px 10px;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center',
                                      },
                                      items: [
                                         {
                                             width: '100%',
                                             zIndex: 100,
                                             hidden: true,
                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint8',
                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
        
                                         },
                                        
                                      ]
        
                                  },
        
                                 {
        
                                     height: 165,
                                     width: 110,
                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture8',
                                    // margin: '0 0 0 -8',
                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:50px 0px 0px 0px">',
        
                                 },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 38,
                                    margin: '55 0 0 0',
                                    style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 10px 10px;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                          {
                                            margin: '-32 0 0 200',
                                              zIndex: 100,
                                              hidden: true,
                                              id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft8',
                                              html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',
        
                                          },
                                          {
                                             
                                              margin: '4 0 0 0',
                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt8',
                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',
                                          },
                                          {
        
                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt8',
                                            margin: '-3 0 0 0',
                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',
                                        },
        
        
        
                                    ]
                                },
        
                            ]
                        },
        
        
            ]
        },
    ]
},


/////End Eligible Points/////
         ]
      },
        

       
    ]

},
            ]
        },
         /////////Voucher Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Vouchers',
            id:'containerTabpanelAyohaMerchantRewards_Vouchers',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                    margin: '5 0 0 20',
                    height:25,
                    style: 'background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items: [
                {
                    xtype: 'container',
                    width: 110,
                    margin: '0 0 0 0',
                    height:17,
                    style: 'background-color:black;border-radius:30px',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items:[
                        {
                            id: 'html_AyohaMerchantRewards_VoucherTab_ReadyVoucher',
                            html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;">Entitled Vouchers</div>'
                        }
                    ]
                },
             
                {
                    xtype: 'container',
                    width: 7,
                    margin: '0 0 0 0',
                    height:17,
                },
                {
                    xtype: 'container',
                    width: 58,
                    margin: '0 0 0 0',
                    height:17,
                    style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items:[
                        {
                            html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Redeem</div>'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 7,
                    margin: '0 0 0 0',
                    height:17,
                },
                {
                    xtype: 'container',
                    width: 58,
                    margin: '0 0 0 0',
                    height:17,
                    style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items:[
                        {
                            html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Approved</div>'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: 7,
                    margin: '0 0 0 0',
                    height:17,
                },
                {
                    xtype: 'container',
                    width: 75,
                    margin: '0 0 0 0',
                    height:17,
                    style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items:[
                        {
                            html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">All Vouchers</div>'
                        }
                    ]
                }
                    ]
                },
                {
                    xtype: 'container',
                    width: '98%',
                    /// hidden:true,
                    margin: '15 0 0 0',
                    height: '100%',
                    style: 'background-color: transparent;',
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items: [
                         {

                             id: 'FloatPanel_DashboardMerchantRewardVoucherList',
                             // margin: '-4 0 0 14',
                             margin: '0 0 0 0',
                             // store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore,
                             // grouped: true,
                             xtype: 'dataview',
                             // xtype: 'list',
                             height: '100%',
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
            ]
        },
        ////////Contest Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Contests',
            id:'containerTabpanelAyohaMerchantRewards_Contests',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'container',
                    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: '100%',
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
                            margin: '5 0 0 20',
                            height:25,
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                        {
                            xtype: 'container',
                            width: 110,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:black;border-radius:30px',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    id: 'html_AyohaMerchantRewards_VoucherTab_EntitledContests',
                                    html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;">Available Contest</div>'
                                }
                            ]
                        },
                     
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 58,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Joined</div>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 58,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Result</div>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 75,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">All Contests</div>'
                                }
                            ]
                        }
                            ]
                        },


                       


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: '100%',
                                           margin: '-5 0 0 0',
                                           //  hidden: true,
                                           id: 'htmlFloatPanel_DashboardMerchantMembershipContest',
                                           style: "background-color: transparent;",
                                           // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                           layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'center'

                                           },
                                           items: [
                                               {

                                                   id: 'FloatPanel_MerchantReward_MembershipContest',
                                                  // margin: '-30 0 0 0',
                                                   margin: '0 0 0 0',
                                                   //  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                   // grouped: true,
                                                   xtype: 'dataview',
                                                   //xtype: 'list',
                                                   height: '100%',
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


                                                   itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:400px;">' +
                                                 '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
                                                 '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:300px;margin:-25px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                               // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
                                                '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 50%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

                                                '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


                                              '</div>',


                                                   emptyText: '<div  style="background-color:transparent;width:100%; height: 400px;margin:20px 0px 0px 0px;text-align:center"><img src="resources/icons/NoMembershipEventContest01.jpg" style="width: 95%; height: 500px;"/></div>',

                                               },
                                           ]
                                       },


                    ]
                },
            ]
        },
        ///////////Event Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Events',
            id:'containerTabpanelAyohaMerchantRewards_Events',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'container',
                    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: '100%',
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
                            margin: '5 0 0 20',
                            height:25,
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                        {
                            xtype: 'container',
                            width: 100,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:black;border-radius:30px',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    id: 'html_AyohaMerchantRewards_VoucherTab_InvitedEvents',
                                    html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;">Event Invitations</div>'
                                }
                            ]
                        },
                     
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 58,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Interested</div>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 68,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">I Will Joined</div>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 65,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">All Events</div>'
                                }
                            ]
                        }
                            ]
                        },


                         


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: '100%',
                                           margin: '-5 0 0 0',
                                           //  hidden: true,
                                           id: 'htmlFloatPanel_DashboardMerchantMembershipEvent',
                                           style: "background-color: transparent;",
                                           // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                           layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'center'

                                           },
                                           items: [
                                               {

                                                   id: 'FloatPanel_MerchantReward_MembershipEvent',
                                                   margin: '0 0 0 0',
                                                   //  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                   // grouped: true,
                                                   xtype: 'dataview',
                                                   //xtype: 'list',
                                                   height: '100%',
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
                                                    '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

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
            ]
        },
        ///////////Discount Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Discounts',
            id:'containerTabpanelAyohaMerchantRewards_Discounts',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },  
            items:[
                {
                    xtype: 'container',
                    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: '100%',
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
                            margin: '5 0 0 20',
                            height:25,
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                        {
                            xtype: 'container',
                            width: 100,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:black;border-radius:30px',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    id: 'html_AyohaMerchantRewards_VoucherTab_EligibleVoucher',
                                    html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;">Eligible Discounts</div>'
                                }
                            ]
                        },
                     
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 58,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Redeem</div>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 58,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div  style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">Approved</div>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            width: 7,
                            margin: '0 0 0 0',
                            height:17,
                        },
                        {
                            xtype: 'container',
                            width: 75,
                            margin: '0 0 0 0',
                            height:17,
                            style: 'background-color:transparent;border-radius:30px;border:0.5px solid  #9CA3AF',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items:[
                                {
                                    html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color: #9CA3AF;text-align: center;font-size:10px;width:100%;">All Discounts</div>'
                                }
                            ]
                        }
                            ]
                        },
                         
                
                
                
                         
                
                         {
                            xtype: 'container',
                            width: '100%',
                            height:'100%',
                            margin: '0 0 0 0',
                            //  hidden: true,
                            id: 'containerAyohaMerchantRewardDiscountListt',
                            style: "background-color: transparent;",
                            // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                
                            },
                            items: [
                                {
                
                                    id: 'AyohaMerchantRewardDiscountList',
                                    xtype: 'dataview',
                                    margin: '-5 0 0 0',
                                    // xtype: 'list',
                                    height:'100%',
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
                
                
                                    //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
                                    //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                    //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                    //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +
                
                
                                    //'</div>',
                
                
                                    itemTpl: '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
                                  '&nbsp;&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;&nbsp;<br><br>' +
                                  '&nbsp;&nbsp;&nbsp;<img  onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);"   src="{DiscountImgPath}" style="width:{ModifiedWidth}px; height: 280px;margin:-25px 0px 0px 0px;"/>&nbsp;&nbsp;&nbsp;<br>' +
                                // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
                                 '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="width: 50%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;"  onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);">Discount Name:</div><br><div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{DiscountName}</div></div><div style="width: 50%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;" onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;"><br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;" onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;"></div></div></div></div></div><br>' +
                
                                 '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="width: 50%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;"  onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);">Discount Rate:</div><br><div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{DiscountPercent}%</div></div><div style="width: 50%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;" onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;" onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);">Valid Until<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;" onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);">{ModifiedDiscountEndDate}</div></div></div><br>' +
                
                
                               '</div>',
                
                
                                    emptyText: '<div  style="background-color:transparent;width:100%; height: 280px;margin:20px 0px 0px 0px;text-align:center"><img src="resources/icons/NoMembershipEventContest01.jpg" style="width: 95%; height: 500px;"/></div>',
                
                                },
                            ]
                        },
                
                
                
                
                
                    ]
                },
            ]
        }

     ]
},








////////




                                      




                                      {
                                          xtype: 'container',
                                          hidden: false,
                                          //width: '95%',
                                          //height: 80,
                                          margin: '0 0 0 0',
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



                                            






                                                  




                                                    //////////////////// voucher redemption
                                                  //////////////////Ayoha Voucher////
            //         {
            //             xtype: 'container',
            //             width: '100%',
            //             /// hidden:true,
            //             // margin: '120 0 0 0',
            //             style: {
            //                 // background: '#D25959',
            //                 background: 'transparent',
            //                 // border: '2px'
            //             },
            //             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            //             layout: {
            //                 type: 'hbox',
            //                 pack: 'center',
            //                 align: 'center',
            //             },
            //             items: [
            //                  {
            //                      margin: '0 0 0 14',
            //                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //                      id: 'htmlFloatPanel_DashboardMerchantRewardTxt',
            //                      html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Merchant Voucher</b></div>'
            //                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            //                  },
            //                   {
            //                       xtype: 'spacer'
            //                   },
            // {

            //     margin: '0 14 0 0',
            //     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //     html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
            //     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

            // }

            //                   //{
            //                   //    margin: '-4 0 0 14',
            //                   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //                   //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1.-Welcome/Opening Account Voucer</div>'
            //                   //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            //                   //},
            //             ]
            //         },



                     








                                                    ////////


                                          ]

                                      },
    //////////////////////////////////////end merchant redemption

















                                  ]
                              },



















                              /////////////////////////////////////////////////

                              ///////Membership Contest

                             

                              ////////////////////////////////////////////////////////



                              //////membership event


                             





/////////////////////////////////////// Membership Discount Card Section//////////////////////////////////////////////////////////









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






                              


                                //    {
                                //        xtype: 'container',
                                //        width: '100%',
                                //        height: 500,
                                //    }























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


    // var containerView = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem0]')[0];
    // var containerViewEl = containerView.element;
    // containerViewEl.on('tap',
    //   function (event, node, options, eOpts) {

    //       // SingleTap_Dashboard_NearestRedeem0();
    //       SingleTap_Dashboard_NearestRedeem_StampCard(0);
    //   }
    // );


    // var containerView1 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem1]')[0];
    // var containerViewEl1 = containerView1.element;
    // containerViewEl1.on('tap',
    //   function (event, node, options, eOpts) {

    //       //SingleTap_Dashboard_NearestRedeem1();
    //       SingleTap_Dashboard_NearestRedeem_StampCard(1);
    //   }
    // );


    // var containerView2 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem2]')[0];
    // var containerViewEl2 = containerView2.element;
    // containerViewEl2.on('tap',
    //   function (event, node, options, eOpts) {

    //       // SingleTap_Dashboard_NearestRedeem2();
    //       SingleTap_Dashboard_NearestRedeem_StampCard(2);
    //   }
    // );



    // var containerView3 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem3]')[0];
    // var containerViewEl3 = containerView3.element;
    // containerViewEl3.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(3);
    //   }
    // );


    // var containerView4 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem4]')[0];
    // var containerViewEl4 = containerView4.element;
    // containerViewEl4.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(4);
    //   }
    // );




    // var containerView5 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem5]')[0];
    // var containerViewEl5 = containerView5.element;
    // containerViewEl5.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(5);
    //   }
    // );




    // var containerView6 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem6]')[0];
    // var containerViewEl6 = containerView6.element;
    // containerViewEl6.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(6);
    //   }
    // );




    // var containerView7 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem7]')[0];
    // var containerViewEl7 = containerView7.element;
    // containerViewEl7.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(7);
    //   }
    // );


    // var containerView8 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem8]')[0];
    // var containerViewEl8 = containerView8.element;
    // containerViewEl8.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(8);
    //   }
    // );

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

  
    //AyohaMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore();
    AyohaMerchantReward_LoadPerksChartBarData();
   
   // AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore_Initialized();

   

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
                    
                    Ext.getCmp('FloatPanel_MerchantReward_MembershipEvent').setStore(_DataStore_AyohaRewardEventLoadBySubscriberAccNoStore);
                    AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                   
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                    console.error('Failed to load store data or no record found.');
                   
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
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHeight(160);
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setWidth('100%');
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHtml('<img src="' + StampContent + '"  style="width: 100%;height: 265px;margin: -15px 0px 0px 0px;">');
                                var subStr = StampContentNote.substring(0, 19);
                                Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">' + subStr + '</div>');
            
            
                                // Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');
            
            
            
                                Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:transparent;text-align: center;font-size:10px;width:100%;font-weight:normal;">No End Date</div>');
                                // Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('10 0 0 0');
                                if (isRequiredStartEndDate == "YES") {
                                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid orange;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: orange;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>');
                                    if (isCampaignExpired == "NotExpired") {
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">End:' + EndDate + '</div>');
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                                    }
                                    if (isCampaignExpired == "Expired") {
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div class="blink_me" style="color:red;text-align: center;font-size:10px;width:105%;font-weight:normal;border: 1px solid red;background-color: white;border-radius: 10px 10px 10px 10px;">Campaign Expired!</div>');
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid orange;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: red;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Pass</div></div>');
                                    }
            
                                } else {
                                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('8 0 0 0');
                                }
            
                               // Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:white;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">' + StampContentSequence + ' <div style="color:white;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>');
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:white;text-align: center;font-size:18px;width:100%;font-weight:bold;">' + StampContentSequence + ' <div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:-7px 0px 0px 0px">Points</div></div>');
                            Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHidden(false);
                            Ext.getCmp('containerLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHidden(false);
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
                  
                    var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getCount();
                    Ext.getCmp('FloatPanel_DashboardMerchantRewardVoucherList').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);
            
                    if (count < 1) {

                        Ext.getCmp('html_AyohaMerchantRewards_VoucherTab_ReadyVoucher').setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;">Your Vouchers-(0)</div>');
                    
                    }
            
                    if (count == 1) {
                        Ext.getCmp('html_AyohaMerchantRewards_VoucherTab_ReadyVoucher').setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;">Your Vouchers-(' + count + ')</div>');
                        //Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
                    }
            
                    if (count > 1) {
                        Ext.getCmp('html_AyohaMerchantRewards_VoucherTab_ReadyVoucher').setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;">Your Vouchers-(' + count + ')</div>');
                       // Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
                    }
                    AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                   LoadingPanelHide();
                } else {
                    console.error('Failed to load store data or no record found.');
                   
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
                  
                    Ext.getCmp('FloatPanel_MerchantReward_MembershipContest').setStore(_DataStore_AyohaRewardContestLoadBySubscriberAccNoStore);
                    AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                } else {
                    console.error('Failed to load store data or no record found.');
                   
                    LoadingPanelHide();
                    AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                }
               
            }
        });







    
       
    }





    function AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo() {



       

        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + 'DiscountCampaing/DiscountCampaing_LoadBySubscriberAccNo');
    
      
   
      
        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    
                    Ext.getCmp('AyohaMerchantRewardDiscountList').setStore(_DataStore_DiscountCampaing_LoadBySubscriberAccNoStore);
                   // AyohaMerchantReward_LoadDashboard();
                   // Load_TotalEligible_vs_Used_Doughnut();
                 
                } else {
                    console.log('jemmm not founfd.');
                    
                  
                    //AyohaMerchantReward_LoadDashboard();
                    //Load_TotalEligible_vs_Used_Doughnut();
                   
                }
               
            }
        });







    
       
    }




// Global chart handler
window._EligibleVsUsedChart = window._EligibleVsUsedChart || null;
window._EligibleVsUsed_DatalabelsRegistered =
  window._EligibleVsUsed_DatalabelsRegistered || false;

  function AyohaMerchantReward_LoadDashboard() {

    var TtlEligiblePerk=parseInt(
        AppState.AyohaMerchantReward.ContestEligible
         +AppState.AyohaMerchantReward.EventEligible
        +AppState.AyohaMerchantReward.PointPerksEligible
        +AppState.AyohaMerchantReward.StampedPerksEligible
        +AppState.AyohaMerchantReward.VoucherPerksEligible
        +AppState.AyohaMerchantReward.DiscountEligible);
        AppState.AyohaMerchantReward.TotalEligiblePerks=TtlEligiblePerk;
        
        var TtlRedeemPerks=parseInt(
            AppState.AyohaMerchantReward.ContestJoined
            +AppState.AyohaMerchantReward.EventJoined
            +AppState.AyohaMerchantReward.PointPerksRedeemSubmitted
            +AppState.AyohaMerchantReward.StampedPerksRedeemSubmitted
            +AppState.AyohaMerchantReward.VoucherPerksRedeem
            +AppState.AyohaMerchantReward.DiscountRedeem
            );
        AppState.AyohaMerchantReward.TotalRedeemedPerks=TtlRedeemPerks;
        
        
        var TtlRedeemApprovePerks=parseInt(
            AppState.AyohaMerchantReward.ContestApproved
            +0
            +AppState.AyohaMerchantReward.PointPerksRedeemApproved
            +AppState.AyohaMerchantReward.StampedPerksRedeemApproved
            +AppState.AyohaMerchantReward.VoucherPerksRedeemApproved
            +0
            
            
            )
        AppState.AyohaMerchantReward.TotalApprovedRedeemedPerks=TtlRedeemApprovePerks;









        Ext.getCmp('htmlAyohaMerchantReward_TotalPerkEligibleCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+AppState.AyohaMerchantReward.TotalEligiblePerks+'</div>');
        Ext.getCmp('htmlAyohaMerchantReward_TotalRedeemCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+AppState.AyohaMerchantReward.TotalRedeemedPerks+'</div>');
        Ext.getCmp('htmlAyohaMerchantReward_TotalApprovedRedeemCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+AppState.AyohaMerchantReward.TotalApprovedRedeemedPerks+'</div>');


    var canvas = document.getElementById('loyaltyHBar');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');

    // Register datalabels plugin sekali sahaja
    if (!window._EligibleVsUsed_DatalabelsRegistered && window.ChartDataLabels) {
        Chart.register(ChartDataLabels);
        window._EligibleVsUsed_DatalabelsRegistered = true;
    }

    // Destroy chart lama (elak "Canvas is already in use")
    if (window._EligibleVsUsedChart) {
        window._EligibleVsUsedChart.destroy();
        window._EligibleVsUsedChart = null;
    }

    // ⚠️ MESTI sama panjang: 6 item
    var labels   = ['Stamps', 'Points', 'Vouchers', 'Contests', 'Events', 'Discounts'];
   // var labels   = ['Contests', 'Events', 'Points', 'Stamps', 'Vouchers', 'Discounts'];
    var eligible = [

        AppState.AyohaMerchantReward.StampedPerksEligible,
        AppState.AyohaMerchantReward.PointPerksEligible,
        AppState.AyohaMerchantReward.VoucherPerksEligible,
        AppState.AyohaMerchantReward.ContestEligible,
        AppState.AyohaMerchantReward.EventEligible,
        AppState.AyohaMerchantReward.DiscountEligible

    ];
    var used =    [
        AppState.AyohaMerchantReward.StampedPerksRedeemSubmitted,
        AppState.AyohaMerchantReward.PointPerksRedeemSubmitted,
        AppState.AyohaMerchantReward.VoucherPerksRedeem,
        0,
        AppState.AyohaMerchantReward.EventJoined,
         AppState.AyohaMerchantReward.DiscountRedeem
    ];
   //  approved for offline voucher and discount will be in next released;
    var approved =[
        AppState.AyohaMerchantReward.StampedPerksRedeemApproved,
        AppState.AyohaMerchantReward.PointPerksRedeemApproved,
       0,
        0,
        0, 
        0
    
    ];
    var joined =[
        0,
        0,
        0,
        AppState.AyohaMerchantReward.ContestJoined,
        AppState.AyohaMerchantReward.EventJoined,
        0
];

        var expired =[
            AppState.AyohaMerchantReward.StampedPerksRedeemExpired,
            AppState.AyohaMerchantReward.PointPerksExpired,
            AppState.AyohaMerchantReward.VoucherExpired,
            AppState.AyohaMerchantReward.ContestExpired,
            AppState.AyohaMerchantReward.EventExpired,
            AppState.AyohaMerchantReward.DiscountExpired
        ];

    window._EligibleVsUsedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
               
                {
                    label: 'Eligible',
                    data: eligible,
                    stack: 'perks',
                    backgroundColor: 'rgba(255,255,255,0.55)',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Expired',
                    data: expired,
                    stack: 'perks',
                    backgroundColor: 'red',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Redeemed',
                    data: used,
                    stack: 'perks',
                    backgroundColor: '#f97316',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Approved',
                    data: approved,
                    stack: 'perks',
                    backgroundColor: 'green',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Joined',
                    data: joined,
                    stack: 'perks',
                    backgroundColor: 'blue',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                }
            ]
        },
        options: {
            // indexAxis default = 'x', so boleh buang / biar kosong untuk vertical bar
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: '#ffffff',   // tulisan nama perks putih
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.15)'
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        precision: 0,
                        color: '#ffffff',   // tulisan axis Y putih (0,1,2,…)
                        font: {
                            size: 10
                        }
                    },
                    suggestedMax: 7,
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',   // atas
                    align: 'end',    // align ke kiri (top-left)
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                        color: '#ffffff',
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            var label = ctx.dataset.label || '';
                            var value = ctx.parsed.y; // vertical bar → guna nilai Y
                            return label + ': ' + value;
                        }
                    }
                },
                datalabels: {
                    color: '#ffffff',       // nombor atas bar putih
                    anchor: 'center',
                    align: 'center',
                    formatter: function (v) {
                        return v > 0 ? v : ''; // kalau 0, jangan tulis
                    },
                    font: {
                        weight: '600',
                        size: 8              // ikut komen: 8px
                    }
                }
            }
        }
    });


    AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore_Initialized();
}






function AyohaMerchantReward_LoadPerksChartBarData() {
    var task = Ext.create('Ext.util.DelayedTask', function () {




     











        var objn = {
            "SubscriberAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/MerchantReward/MerchantReward_Perks_DashboardData',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    if (data.total > 0) {


                        AppState.AyohaMerchantReward.ContestEligible= data.results[0].ContestEligible;
                        AppState.AyohaMerchantReward.ContestJoined= data.results[0].ContestJoined;
                        AppState.AyohaMerchantReward.ContestApproved= data.results[0].ContestApproved;
                        AppState.AyohaMerchantReward.ContestExpired= data.results[0].ContestExpired;
                        
                        AppState.AyohaMerchantReward.EventEligible= data.results[0].EventEligible;
                        AppState.AyohaMerchantReward.EventJoined= data.results[0].EventJoined;
                        AppState.AyohaMerchantReward.EventExpired= data.results[0].EventExpired;
                        
                        AppState.AyohaMerchantReward.PointPerksEligible= data.results[0].PointPerksEligible;
                        AppState.AyohaMerchantReward.PointPerksRedeemSubmitted= data.results[0].PointPerksRedeemSubmitted;
                        AppState.AyohaMerchantReward.PointPerksRedeemApproved= data.results[0].PointPerksRedeemApproved;
                        AppState.AyohaMerchantReward.PointPerksExpired= data.results[0].PointPerksExpired;
                        
                        AppState.AyohaMerchantReward.StampedPerksEligible= data.results[0].StampedPerksEligible;
                        AppState.AyohaMerchantReward.StampedPerksRedeemSubmitted= data.results[0].StampedPerksRedeemSubmitted;
                        AppState.AyohaMerchantReward.StampedPerksRedeemApproved= data.results[0].StampedPerksRedeemApproved;
                        AppState.AyohaMerchantReward.StampedPerksRedeemRejected= data.results[0].StampedPerksRedeemRejected;
                        AppState.AyohaMerchantReward.StampedPerksRedeemExpired= data.results[0].StampedPerksRedeemExpired;
                        
                        AppState.AyohaMerchantReward.VoucherPerksEligible= data.results[0].VoucherPerksEligible;
                        AppState.AyohaMerchantReward.VoucherPerksRedeem= data.results[0].VoucherPerksRedeem;
                        AppState.AyohaMerchantReward.VoucherPerksRedeemApproved= data.results[0].VoucherPerksRedeemApproved;
                        AppState.AyohaMerchantReward.VoucherExpired= data.results[0].VoucherExpired;
                        
                        
                        AppState.AyohaMerchantReward.DiscountEligible= data.results[0].DiscountEligible;
                        AppState.AyohaMerchantReward.DiscountExpired= data.results[0].DiscountExpired;
                        AppState.AyohaMerchantReward.DiscountRedeem= data.results[0].DiscountRedeem;



                        AyohaMerchantReward_LoadDashboard();



                       
                    }
                    if (data.total == 0) {
                      

                    }



                  

                }
                else {

                }

               
            },

            failure: function (result, request) {
              
               
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(100);
}




function AyohaMerchantReward_InitializedTabEvent() {
    


    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps.on('tap',
      function (event, node, options, eOpts) {
       

        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(0);
        animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps');
      
      }
    );





    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(1);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Points');
      
      }
    );




    
    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(2);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers');
      
      }
    );






    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Contest</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(3);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Contests');
      
      }
    );






    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(4);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Events');
      
      }
    );

    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(5);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts');
      
      }
    );
}




function AyohaMerchantReward_SwitchTab(tabName,index,StampedRedeemStatus) {

   // Ext.getCmp(tabName).setActiveItem(index);

    AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore(StampedRedeemStatus)


}






function AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore_Initialized() {
  
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('StampedRedeemStatus','NA');
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemStatus');
    
    
    
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    var record = records[0]; // Access only the first record                 
                 
                    Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus').setStore(_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore);
                    AyohaMerchantReward_NearestRedeemItemPointCardStore();
                   
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                    
                    AyohaMerchantReward_NearestRedeemItemPointCardStore();
                }
               // 
            }
        });





    }

function AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore(StampedRedeemStatus) {
  
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('StampedRedeemStatus',StampedRedeemStatus);
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemStatus');
    
    
    
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    var record = records[0]; // Access only the first record
                    AppState.AyohaMerchantReward.StampPerks=parseInt(record.get('StampEligibleCount'));
                    Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus').setStore(_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore);
                   
                   
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                    AppState.AyohaMerchantReward.StampPerks=0;
                  
                }
               // 
            }
        });





    }



    function AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemExpiredStore() {
  
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemExpired');
        
        
        
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.load({
                callback: function (records, operation, success) {
                    if (success && records.length > 0) {
                        var record = records[0]; // Access only the first record
                       
                        Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus').setStore(_DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore);
                       
                       
                        
                        // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                    } else {
                      
                      
                    }
                   // 
                }
            });
    
    
    
    
    
        }



    


    function switchPerkTab(btn,StampedRedeemStatus) {
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
      
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        if(StampedRedeemStatus!="Expired"){
            AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore(StampedRedeemStatus);
        }else{
            AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemExpiredStore();
        }
      
       
      }





      function AyohaMerchantReward_openStampCardRedemption(val) {

        // FloatPanel_NearestRedemption_NotificationShow(ID);
         //  FloatPanel_NearestRedemptionHide();
         //alert(val);
     
         var StampCampaignCode = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContent = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentNote = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentSequence = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterpriseName = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var CountRow = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EndDate = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StartDate = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampRuleRemarks = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var IsStampRulePopUp = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampCampaignName = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterpriseAccNo= _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentFinal = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var CountStampYES = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterprisesLogo = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
     
         var StampCampaignCodes = StampCampaignCode.get('StampCampaignCode');
         var StampContents = StampContent.get('StampContent').replace("width:70px", "width:80px");
         var StampContentNotes = StampContentNote.get('StampContentNote');
         var StampContentSequences = StampContentSequence.get('StampContentSequence');
         var EnterpriseNames = EnterpriseName.get('EnterpriseName');
         var CountRows = CountRow.get('CountRow');
         var EndDates = EndDate.get('EndDate');
         var StartDates = StartDate.get('StartDate');
         var StampRuleRemarkss = StampRuleRemarks.get('StampRuleRemarks');
         var IsStampRulePopUps = IsStampRulePopUp.get('IsStampRulePopUp');
         var StampCampaignNames = StampCampaignName.get('StampCampaignName');
         var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
         var StampContentFinals = StampContents.replace("height:70px", "height:80px");
         var CountStampYESs = CountStampYES.get('CountStampYES');
         var EnterprisesLogos = EnterprisesLogo.get('EnterprisesLogo');
     
     
     
         //var StampCampaignCode = ArrStampCampaignCode[0];
         //var EnterpriseAccNo = ArrEnterpriseAccNo[0];
         //var StartDate = ArrStartDate[0];
         //var EndDate = ArrEndDate[0];
         var SubscriberAccNo = GetCurrAyohaUserAccountNo();
         //var EnterpriseName = ArrEnterpriseName[0];
         //var StampRuleRemarks = ArrStampRuleRemarks[0];
         //var isStampRulePopUp = ArrIsStampRulePopUp[0];
         //var StampCampaignName = ArrStampCampaignName[0];
         //var CountLoyaltyStamped = ArrStampContentSequence[0];
         //var CountStampCardRowShow = ArrStampTotalRow[0];
         //var EnterprisesLogo = ArrEnterprisesLogo[0];
     
     
     
         globalLatestPointCampaignCode = StampCampaignCodes;
         
         var strStampedYES = CountStampYESs;
         var StampedYES = strStampedYES.split("/");
         var YESStamped = StampedYES[0];
         var TotalRows = StampedYES[1];
         localStorage.setItem('StampCampaignCode', StampCampaignCodes);
 
         localStorage.setItem('CountLoyaltyStamped', YESStamped);
         localStorage.setItem('CountStampCardRowShow', TotalRows);
         FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);
 
     
     
     
        //  if (IsStampRulePopUps == "POINTLOYALTYCARD")
        //  {
        //      FloatLoyaltyCardPointShow(StampCampaignNames, globalLatestPointCampaignCode, EnterprisesLogos, EnterpriseNames, EnterpriseAccNos);
     
        //  } else {
            
        //  }
     
        
     
     
     
     
     
        
     }