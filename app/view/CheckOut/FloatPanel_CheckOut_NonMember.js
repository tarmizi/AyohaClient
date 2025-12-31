Ext.define('ianMizi.view.CheckOut.FloatPanel_CheckOut_NonMember', {

});

var _FloatPanel_CheckOut_NonMember;


var isFloatPanel_CheckOut_NonMemberOpen = 'N';











function FloatPanel_CheckOut_NonMember() {

    _FloatPanel_CheckOut_NonMember =
     Ext.create('Ext.Container', {

         xtype: 'container',
         height: 500,
         width: '100%',
         id: 'LoadingFloatPanel_CheckOut_NonMemberID',
         draggable: false,



         centered: true,
         //bottom: 64,
         bottom:0,
         zIndex: 150,
         modal: true,
         hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             //type: 'popIn',
             //duration: 250,
             //easing: 'ease-out'
             type: 'slideIn',
             direction: 'up',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 250
         },
         hideAnimation: {

             //type: 'popOut',
             //easing: 'easeInOut',
             //duration: 250,
             //type: 'fadeOut',
             //duration: 400,

             type: 'slideOut',
             direction: 'down',
             easing: 'cubic-bezier(.2,0,.2,1)',
             duration: 250

         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;border-radius:30px 30px 0px 0px',
         // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_CheckOut_NonMember.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_CheckOut_NonMemberOpen = 'N';
                             AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_CheckOut_NonMember.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_CheckOut_NonMemberOpen = 'N';
                             AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);border-radius:30px 30px 0px 0px",
             
             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [





                 {

                     xtype: 'container',
                     width: '100%',
                     // docked: 'top',
                     // width: 40,
                     style: ' background-color:white;',
                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                     //hidden: true,

                     id: 'containerFloatPanel_CheckOut_NonMemberHeader',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'transparent',
                     //    // border: '2px'
                     //},
                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                     layout: {
                         type: 'vbox',
                         pack: 'start',
                         align: 'center',
                     },
                     // hidden:true,
                     items:
                            [



                                {
                                    xtype: 'container',
                                   // cls: 'confirmation-modal-head', // New class for the head
                                    width: '100%', // Ensure it's full width for icon centering
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items: [
                                        // The icon for the confirmed page (coins)
                                        { 
                                            xtype: 'component', 
                                            margin:'-120 0 0 0',
                                        html: '<img src="resources/icons/ayohapointcoint03.png" alt="Coins"/>' },
                                    ]
                                },
                               









                            ]

                 },



                 {
                    xtype: 'container',
                     style: 'border-bottom:0px solid;background-color:#4C1B82;border-radius:30px 30px 0px 0px',
                  //   style: 'border-bottom:1px none;background-color:white;border-radius:30px 30px 0px 0px',
                   // style: ayohaThemeColor_Hero(),
       width:'100%',
       height:50,
                    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
       
                    },
                    items:[
                        {
                            margin: '0 0 0 0',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px">Check Out</div>',

                            //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                        },
                    ]
                 },
                 {
                    margin:'10 0 0 0',
                    xtype: 'container',
                style: 'background-color:transparent;',
                  //  style: ayohaThemeColor_Hero(),
       width:'100%',
       height:30,
                    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'left'
       
                    },
                    items:[
                        {
                            margin: '0 0 0 14',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                            html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#3A0ca3;margin:0px 0px 0px 0px">Currently Check-In At:</div>',

                            //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                        },
                    ]
                 },
                 {
                  
                    margin:'0 0 0 0',
                    xtype: 'container',
                style: 'background-color:transparent;',
                  //  style: ayohaThemeColor_Hero(),
       width:'100%',
       height:80,
                    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
       
                    },
                    items:[

                        {
                            width:'30%',
                            margin:'0 0 0 0',
                            height:80,
                            style: 'background-color:transparent;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'right'
               
                            },
                            items:[
                                {
                                   
        
                                    margin:'0 0 0 0',
                                    html:
                                    '<div style="width:70px;height:70px;background:#fff;border:1px solid #d1d5db;border-radius:20px;' +
                                                'display:flex;align-items:center;justify-content:center;overflow:hidden;padding:6px;box-sizing:border-box;">' +
                                      '<img src="resources/icons/communityCoffea.png" alt="Merchant Logo" ' +
                                           'style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;">' +
                                    '</div>'
                               
                             
                                }
                            ]

                        },
                        {
                            width:'70%',
                            margin:'0 0 0 0',
                            height:80,
                            style: 'background-color:transparent;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'left'
               
                            },
                            items:[

                                {
                                    width:'100%',
                                    margin:'0 0 0 0',
                                    height:40,
                                    style: 'background-color:transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'bottom',
                                        align: 'left'
                       
                                    }, 
                                    items:[
                                        {
                                            margin: '0 0 0 10',
                                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-weight:900;font-size:18px;color:#111827;">Ayu Kuala Sepetang</div>',
                
                                        }
                                    ]
                                },
                                {
                                    width:'100%',
                                    margin:'0 0 0 0',
                                    height:40,
                                    style: 'background-color:transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'top',
                                        align: 'left'
                       
                                    }, 
                                    items:[
                                        {
                                            margin: '0 0 0 10',
                                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:13px;color:#6B7280;">Kuala Sepetang</div>',
                
                                        }
                                    ]
                                }
                            ]
                        },
                        
                    ]
                 },
                
                 {
                    margin:'10 0 0 0',
                    xtype: 'container',
                style: 'background-color:transparent;',
                  //  style: ayohaThemeColor_Hero(),
       width:'100%',
       height:20,
                    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'left'
       
                    },
                    items:[
                        {
                            margin: '0 0 0 14',
                            //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                            html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:#3A0ca3;margin:0px 0px 0px 0px">This Session Activity</div>',

                            //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                        },
                    ]
                 },


            {


                // xtype: 'button',
                xtype: 'container',
                margin: '10 0 0 0',
             //   id: 'FloatPanel_CheckOut_NonMemberBorderBg',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: 220,
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                items: [







                    {
           
                        xtype: 'list',
                      //  cls: 'ayohaHappeningList',
                        width:'90%',
                        height:220,
                        id:'listFloatPanel_CheckOutNonMember',
                       // store: storeHappeningNow,
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true,
                            indicators: false
                        },
                        disableSelection: true,
style: 'background-color:rgba(255,255,255, 0);border-radius: 0px 0px 0px 0px;',
                        
                        // itemCls: 'ayohaHItem',
                        itemTpl: new Ext.XTemplate(
                            '<div class="ayohaActItem">',
                          
                              // LEFT ICON
                              '<div class="ayohaActIconWrap">',
                                '<tpl if="badge == \'pin\'">',
                                  '<div class="ayohaBadge ayohaBadgePin" title="Checked-in">',
                                    '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>',
                                  '</div>',
                                '</tpl>',
                          
                                '<tpl if="badge == \'card\'">',
                                  '<div class="ayohaBadge ayohaBadgeCard" title="Joined">',
                                    '<div class="ayohaCardIcon"></div>',
                                    '<div class="ayohaPlusMini">+</div>',
                                  '</div>',
                                '</tpl>',
                          
                                '<tpl if="badge == \'stamp\'">',
                                  '<div class="ayohaBadge ayohaBadgeStamp" title="Stamp Collected">',
                                    '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M7 3h10v4h2v4c0 1.1-.9 2-2 2h-1v4l-4-2-4 2v-4H7c-1.1 0-2-.9-2-2V7h2V3zm2 2v2h6V5H9zm-2 4v2h10V9H7z"/></svg>',
                                  '</div>',
                                '</tpl>',
                          
                                '<tpl if="badge == \'point\'">',
                                  '<div class="ayohaBadge ayohaBadgePoint" title="Points Collected">',
                                    '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M12 2l2.2 4.8L19 7.4l-3.6 3.5.9 5.1L12 14.9 7.7 16l.9-5.1L5 7.4l4.8-.6L12 2z"/></svg>',
                                  '</div>',
                                '</tpl>',
                          
                                '<tpl if="badge == \'event\'">',
                                  '<div class="ayohaBadge ayohaBadgeEvent" title="Event Responded">',
                                    '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M7 2v2H5a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7zm14 8H3V6h18v4zm-3.8 4.2-6.2 6.2L7 16.6l1.4-1.4 2.6 2.6 4.8-4.8 1.4 1.2z"/></svg>',
                                  '</div>',
                                '</tpl>',
                          
                                '<tpl if="badge == \'store\'">',
                                  '<div class="ayohaBadge ayohaBadgeStore" title="Ayoha Store">',
                                    '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M3 9l1-5h16l1 5v2a3 3 0 0 1-3 3c-1.1 0-2-.6-2.6-1.4A3.2 3.2 0 0 1 12 14a3.2 3.2 0 0 1-3.4-1.4A3 3 0 0 1 6 14a3 3 0 0 1-3-3V9zm2 6h14v7H5v-7zm3 2v3h3v-3H8z"/></svg>',
                                  '</div>',
                                '</tpl>',
                          
                                '<tpl if="badge == \'contest\'">',
                                  '<div class="ayohaBadge ayohaBadgeContest" title="Contest Activity">',
                                    '<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#fff" d="M6 2h12v3h2v3c0 3-2 5-5 5h-1.2A5.8 5.8 0 0 1 13 15.7V18h3v2H8v-2h3v-2.3A5.8 5.8 0 0 1 10.2 13H9C6 13 4 11 4 8V5h2V2zm-1 6c0 1.7 1.3 3 3 3h.2A7.6 7.6 0 0 1 7 7V6H5v2zm14-2h-2v1c0 1.4-.4 2.7-1.2 4H16c1.7 0 3-1.3 3-3V6z"/></svg>',
                                  '</div>',
                                '</tpl>',
                              '</div>',
                          
                              // MIDDLE TEXT
                              '<div class="ayohaActText">',
                                '<div class="ayohaActLabel">{ActivityName}</div>',
                                '<tpl if="ActivitySub">',
                                  '<div class="ayohaActSub">{ActivitySub}</div>',
                                '</tpl>',
                              '</div>',
                          
                              // RIGHT VALUE
                              '<div class="ayohaActValue {ValueCls}">{ActivityValue}</div>',
                          
                            '</div>'
                          ),
                          
                          
                        listeners: {
                            itemtap: function (dv, index, target, record) {
                                // TODO: action bila tap user
                                // console.log(record.get('name'));
                            }
                        }
                   
                  }


                ]


            },









             ]




         }







     });
    return _FloatPanel_CheckOut_NonMember;





}

function FloatPanel_CheckOut_NonMemberShow() {

    Ext.Viewport.remove(_FloatPanel_CheckOut_NonMember);
    this.overlay = Ext.Viewport.add(FloatPanel_CheckOut_NonMember());
    this.overlay.show();
    isFloatPanel_CheckOut_NonMemberOpen = 'Y';
    AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
   // FloatPanel_CheckOut_NonMember_EnterprisesWorkingHourLoadByEnterpriseAccNoStore();
   SuccessCheckinController_DashboardSuccessCheckIn_LoadMerchantDashboard_CheckOutActivityStore();
}


function FloatPanel_CheckOut_NonMemberShow_AyohaPointRedemptionHistory() {

    Ext.Viewport.remove(_FloatPanel_CheckOut_NonMember);
    this.overlay = Ext.Viewport.add(FloatPanel_CheckOut_NonMember());
    this.overlay.show();
    isFloatPanel_CheckOut_NonMemberOpen = 'Y';
    AddRoutePages("FloatPanel_CheckOut_NonMemberHide()");
}

function FloatPanel_CheckOut_NonMemberHide() {

    if (isFloatPanel_CheckOut_NonMemberOpen == 'Y') {
        _FloatPanel_CheckOut_NonMember.hide(); isFloatPanel_CheckOut_NonMemberOpen = 'N';
        RemovePages("FloatPanel_CheckOut_NonMemberHide()");
    }

}





function FloatPanel_CheckOut_NonMember_EnterprisesWorkingHourLoadByEnterpriseAccNoStore() {
  





    _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/EnterprisesWorkingHour/EnterprisesWorkingHourLoadByEnterpriseAccNo');
    _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore.getCount();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}

