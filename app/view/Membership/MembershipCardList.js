Ext.define('ianMizi.view.Membership.MembershipCardList', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'MembershipCardList',
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
            width: '100%',
            height: '100%',
          // style: ' background-color:transparent;',
           style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
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
                            id: 'containerFloatPanel_MembershipCardList_MyMembershipCardStampCardList',
                            // margin: '-10 0 0 0',
                            width: '100%',
                            height: '100%',
                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                            style: "background-color: transparent;",
                            //style: "background-color: #F35B57;",
                            title: 'FloatPanel_MembershipCardList_MyMembershipCardCardLis',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'

                            },
                            //listeners: {
                            //    initialize: function (c) {

                            //        this.element.on({
                            //            swipe: function (e, node, options) {
                            //                if (e.direction == "left") {
                            //                    //  alert("Hey! I swipe left");

                            //                } else {
                            //                    //  alert("Hey! I swipe right");
                            //                    Ext.getCmp('tabpanelFloatPanel_MembershipCardList_MyMembershipCard').setActiveItem(0);
                            //                }
                            //            }
                            //        });
                            //    }
                            //},

                            items: [
                                {
                                    xtype: 'panel',
                                    height: 5
                                },

                              {
                                  xtype: 'container',
                                  width: '100%',
                                  height: '100%',
                                  style: "background-color: transparent;",
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'left'

                                  },
                                  items: [

                                  

                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              hidden:true,
                                              // style: 'background-color:black;color:white',
                                              style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'start',
                                                  align: 'center'

                                              },
                                              //height: 50,
                                              // margin:'10 0 0 0',
                                              items: [

                                                      //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                      //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                      //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                      //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                      //    '</div></div></div>'

                                                      {

                                                          width: '50%',
                                                          html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;My Membership Card List</div>'
                                                      },

                                                      //{

                                                      //    width: '50%',
                                                      //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                      //},
                                                      //     //{
                                                           //    margin: '-8 0 0 0',

                                                           //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                           //},
                                                           // {
                                                           //     margin: '-7 0 0 0',

                                                           //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                           // },


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
                                              //style: 'background-color:#f7f7f7',
                                              style: 'background-color:white',
                                              items: [
                                                  //{
                                                  //    xtype: 'container',
                                                  //    id: 'container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                                                  //    hidden:false,
                                                  //    width: '100%',
                                                  //    height: '100%',
                                                  //    layout: {
                                                  //        type: 'vbox',
                                                  //        pack: 'center',
                                                  //        align: 'center'

                                                  //    },
                                                  //    //style: 'background-color:#f7f7f7',
                                                  //    style: 'background-color:white',
                                                  //    items: [
                                                  //        {
                                                  //            width: '100%',
                                                  //            height: '100%',
                                                  //            html: '<div OnClick="Dashboard_SearchMerchantListShow()" style="background-color:transparent;width: 100%; height: 400px;margin:40px 0px 0px 0px;padding:0px 0px"><div style="width:100%;text-align:center;margin:0px 0px 0px 0px;color:grey;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;" OnClick="Dashboard_SearchMerchantListShow()">Hi!, you have not subscribed any membership card.Tap Ayoha Mechant below and get their Membership card Now!</div><br><img OnClick="Dashboard_SearchMerchantListShow()" src="resources/icons/AyohaMerchant03.png" style="width: 150px; height: 130px;"/><br><div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div></div>',
                                                  //        }
                                                  //    ]
                                                  //},


                                                  {
                                                      xtype: 'container',
                                                      //width: '95%',
                                                      //height: 80,
                                                     // hidden: true,
                                                      margin: '0 0 0 0',
                                                      width: '100%',
                                                      id: 'container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                                                      name: 'namecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                                                      height: '100%',
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

                                                             // id: 'htmlDashboard_NearestRedeem_NonMembersTxtx',
                                                              html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Hi!, you have not subscribed any membership card.</div>'

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
                                                              // id: 'htmlDashboard_NearestRedeem_NonMembersTxt0x',
                                                               html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Tap Ayoha Mechant below and get their Membership card Now!.</div>'

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
                                                               // id: 'htmlDashboard_NearestRedeem_NonMembersTxt00x',
                                                                html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Enjoy the membership privilleg and get double reward from us!</div>'

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
                                                               id: 'htmlDashboard_NearestRedeem_NonMembersx',
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
                                                               id: 'htmlDashboard_NearestRedeem_NonMembersTxtAyohaMerchantx',
                                                               html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div>'

                                                               //ui: 'plain',
                                                               //handler: function () {

                                                               //}

                                                           },

                                                      ]
                                                  },
                                                  {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    height: 150,
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
                                                            height: 150,                                                     
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
                                                                    height: 150,                                                     
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
                                                                            html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:black;background:gold;border:1px solid #fac;padding:3px 6px;border-radius:999px;white-space:nowrap;">Centralised membership cards</span><br><b>My Membership Cards</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-20px 0px 0px 0px;">All merchant cards you joined</div>'
                                                                           
                                                                       
                                                                        },
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
                                                                            height:20,
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'left'
                                                                
                                                                            },
                                                                            items:[
                                                                                {
                                                                                    margin: '0 0 0 14',
                                                                                    html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">Membership Summary</div>'
                                                                                       
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
                                                                pack: 'center',
                                                                align: 'center'
                                                
                                                            },
                                                            items:[
                                                                {
                                                                    xtype: 'container',
                                                                    width: '3%',
                                                                    height:40,
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: '32%',
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
                                                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                                                },
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Paid</div>'
                                                                                },
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Membership</div>'
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                   
                                                                       
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: '32%',
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
                                                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                                                },
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Free</div>'
                                                                                },
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Membership</div>'
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                   
                                                                       
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: '32%',
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
                                                                           // box-shadow: 5px 10px 18px #888888;
                                                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            height:40,
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'center'
                                                                
                                                                            },
                                                                            items:[
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                                                },
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Pending</div>'
                                                                                },
                                                                                {
                                                                                    html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Approval</div>'
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
                                                                    height: 150,                                                     
                                                                   style: 'background-color:transparent;',
                                                                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                                                    layout: {
                                                                        type: 'hbox',
                                                                        pack: 'left',
                                                                        align: 'left',
                                                                    },
                                                                    items:[
                                                                        {
                                                                            width: 320,
                                                                            height: 160,
                                                                            html:'<div style="max-width:320px;height:160px;margin:0px 0px 0px -40px;background:transparent;">'+
                                                                            '<canvas id="membershipStatusDonut"></canvas>'+
                                                                            '</div>'
                                                                        }
                                                                    ]
                                                                
                                                                   },
                                        
                                                                  
                                           
                                           
                                                                   ]
                                           
                                                        },
                                                       
                                                      
                
                                                    ]
                                                  },
                                                  {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    height: '100%',
                                                    // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                                                    style:"background-color:transparent",
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
                                        
                                                    },
                                                    items:[
                                                        {
                                                            xtype: 'list',
                                                            hidden: true,
                                                            //flex:1,
                                                          height: '100%',
                                                            //  store: 'MembershipsLoadBySubscriberAccNoStore',
                                                           // store:_DataStore_MembershipsLoadBySubscriberAccNoStore,
                                                            id: 'FloatPanel_MembershipCardList_MyMembershipCardListID',
                                                            mode: 'SINGLE',
                                                            style: 'background-color:rgba(255,255,255, 0.1);border-radius: 0px 0px 0px 0px;',
                                                            //grouped: true,
                                                            disableSelection: true,
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
                                                            style: 'background-color:rgba(255,255,255, 0.1);border-radius: 0px 0px 0px 0px;',
                                                            //                    itemTpl: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;height:250px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +    
                                                            //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                            //   '</div>' +
                                                            //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
      
                                                          //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                            itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                        
                                                               '{ModifiedMembershipApprovalStatus}' +
                                                          '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseTagLine}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                                                        '</div>' +
                                                                                        // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                            '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                                                            '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                                                           //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +
      
      
                                                            //'<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Point Rate</div>' +
                                                            '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Membership Fees(RM)</div></div>' +
                                                              '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;">{MembershipFee}</div></div>' +
                                                            //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-16px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div></div>',
                                                            '<br><div style="width:100%;text-align:center;margin:-28px 0px 0px 0px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div>',
      
                                                      
                                                            //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
      
                                                          //  emptyText: '<div OnClick="Dashboard_SearchMerchantListShow()" style="background-color:transparent;width: 100%; height: 400px;margin:40px 0px 0px 0px;padding:0px 0px"><div style="width:100%;text-align:center;margin:0px 0px 0px 0px;color:grey;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;" OnClick="Dashboard_SearchMerchantListShow()">Hi!, you have not subscribed any membership card.Tap Ayoha Mechant below and get their Membership card Now!</div><br><img OnClick="Dashboard_SearchMerchantListShow()" src="resources/icons/AyohaMerchant03.png" style="width: 150px; height: 130px;"/><br><div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div></div>',
      
      
      
      
      
                                                            width: '100%',
                                                            //listeners: {
                                                            //    itemsingletap: function (list, idx, target, records, evt) {
      
                                                            //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                            //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                            //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                            //        //var ID = records.get('ID');
                                                            //        //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');
      
                                                            //        //globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MembershipCardList_MyMembershipCard";
                                                            //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                            //        //setTimeout(function () {
                                                                     
                                                            //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                            //        //}, 2000);
      
                                                                  
      
                                                            //    },
                                                            //    deselect: function (list, records) {
      
                                                            //    }
                                                            //},
      
                                                        },
                                                    ]
                                                  },
                                                 
                                              ]
                                          },



                                  ]
                              },

                            ]

                        },




                        {
                            xtype: 'container',
                            id: 'containerFloatPanel_MembershipCardList_MyMembershipCardTitleOutter',
                            width: '100%',
                            docked: 'bottom',
                            // hidden:true,
                            height: 40,
                            // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                            // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                            style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                            // style: "background-color: #EAEEF3;",

                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'

                            },
                            items: [




                                  {
                                      xtype: 'button',
                                      id: 'btnFloatPanel_MembershipCardList_MyMembershipCardListSearch',
                                      // hidden: true,
                                      //  badgeText: '1',
                                      margin: '2 0 0 -5',
                                      height: 40,
                                      width: 40,
                                      html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                                      ui: 'plain',
                                      handler: function () {
                                          // NotificationsPanelShow();

                                          // LoyaltyCardRedeemListShow();


                                          //  LoyaltyCardRedeemListShow();
                                      }
                                  },



                                 {
                                     id: 'FloatPanel_MembershipCardList_MyMembershipCard_SearchTxt',
                                     margin: '0 0 0 -10',
                                     width: '78%',
                                     height: 20,
                                     html: '<input type="text" id="input-FloatPanel_MembershipCardList_MyMembershipCard_SearchTxt" placeHolder="Search Card" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                 },



                                 {
                                     id: 'FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt',
                                     margin: '0 0 0 0',
                                     // width: '75%',
                                     height: 20,
                                     html: '<font size=3 color=black>(0)</font>'
                                 },
                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_MembershipCardList_MyMembershipCardFilter',
                                      hidden: true,
                                     //  badgeText: '1',
                                     margin: '2 0 0 15',
                                     height: 25,
                                     width: 35,
                                     html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                     ui: 'plain',
                                     handler: function () {
                                         // NotificationsPanelShow();

                                         // LoyaltyCardRedeemListShow();


                                         //  LoyaltyCardRedeemListShow();
                                     }
                                 },





                            ]

                        },


                          //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                          //{
                          //    xtype: 'tabpanel',
                          //    // hidden: true,
                          //    //  hidden:true,
                          //    id: 'tabpanelFloatPanel_MembershipCardList_MyMembershipCard',
                          //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                          //    // style: 'background-color: black;',
                          //    // margin: '-20 0 0 -26',
                          //    // margin: '25 0 0 0',

                          //    //width: 200,
                          //    width: '96%',
                          //    height: '100%',
                          //    //height: 120,
                          //    //height: 50,
                          //    //  zIndex: 200,
                          //    //  docked: 'bottom',
                          //    tabBarPosition: 'top',
                          //    ui: 'plain',
                          //    // docked: 'bottom',

                          //    initialize: function (c) {
                          //        //this.getTabBar().hide();


                          //    },



                          //    items: [










































                          //    ]

                          //    //}
                          //},










                    ]
                },





















                



























            ]
        },

    ]
},
initialize: function () {

}
});




function MembershipCardListLoad(){
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");
    document.getElementById("input-FloatPanel_MembershipCardList_MyMembershipCard_SearchTxt").addEventListener("keyup", MembershipsLoadBySubscriberAccNoStoreOnKeyUp);
    FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();



    var containerViewnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard = Ext.ComponentQuery.query('container[name=namecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard]')[0];
    var containerViewElnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard = containerViewnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard.element;
    containerViewElnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard.on('tap',
      function (event, node, options, eOpts) {
          Dashboard_SearchMerchantListShow();
          // FloatPanel_RewardStoreShow();
      }
    );
    MembershipCardList_MembershipStatusChart();
}

// keep a handle globally (optional but handy)
window.membershipStatusChart = window.membershipStatusChart || null;
window._datalabelsRegistered = window._datalabelsRegistered || false;

function MembershipCardList_MembershipStatusChart() {
  const counts = { active: 8, expired: 1 };
  const total  = counts.active + counts.expired; // 9

  const canvas = document.getElementById('membershipStatusDonut');
  if (!canvas) return; // canvas not in DOM yet

  // ✅ Destroy any existing chart on this canvas
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  if (window.membershipStatusChart) { window.membershipStatusChart.destroy(); window.membershipStatusChart = null; }

  const ctx = canvas.getContext('2d');

  // Register plugin once
  if (!window._datalabelsRegistered) {
    Chart.register(ChartDataLabels);
    window._datalabelsRegistered = true;
  }

  // Center "Total" text (white)
  const centerText = {
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      const p = chart.getDatasetMeta(0).data[0];
      const cx = p?.x ?? (chartArea.left + chartArea.right) / 2;
      const cy = p?.y ?? (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '700 12px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
      ctx.fillStyle = '#fff';      // "Total"
      ctx.fillText('Total', cx, cy - 10);
      ctx.font = '900 22px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
      ctx.fillStyle = '#fff';      // "9"
      ctx.fillText(total, cx, cy + 10);
      ctx.restore();
    }
  };

  // Create chart
  window.membershipStatusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Active', 'Expired'],
      datasets: [{
        data: [counts.active, counts.expired],
        backgroundColor: ['rgba(46, 204, 113, 0.95)', 'rgba(231, 76, 60, 0.70)'],
        borderColor: '#ffffff',  // solid white border
        borderWidth: 1,
        borderAlign: 'inner',
        hoverOffset: 6,
        cutout: '66%'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 8, right: 8, bottom: 12, left: 8 } },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#fff', usePointStyle: true, pointStyle: 'circle',
            font: { weight: '700', size: 10 }
          }
        },
        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}` } },
        datalabels: {
          display: true,
          color: '#fff',           // numbers on slices in white
          anchor: 'center',
          align: 'center',
          offset: 0,
          clip: true,
          clamp: true,
          formatter: (v) => `${v}`,
          font: (ctx) => {
            const data = ctx.dataset.data, v = data[ctx.dataIndex];
            const pct = v / data.reduce((a,b)=>a+b,0) * 100;
            const base = ctx.chart.width < 360 ? 11 : 13;
            return { weight: '900', size: pct < 14 ? base - 2 : base, family: 'system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif' };
          }
        }
      },
      animation: { duration: 800, animateRotate: true }
    },
    plugins: [centerText]
  });
}

  