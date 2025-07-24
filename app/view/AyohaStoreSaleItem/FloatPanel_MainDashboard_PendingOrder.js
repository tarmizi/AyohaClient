Ext.define('ianMizi.view.AyohaStoreSaleItem.FloatPanel_MainDashboard_PendingOrder', {
});

var isFloatPanel_MainDashboard_PendingOrder_Open = "N";








var _FloatPanel_MainDashboard_PendingOrder;

function FloatPanel_MainDashboard_PendingOrder() {

    _FloatPanel_MainDashboard_PendingOrder =      Ext.create('Ext.Container', {

        xtype: 'Panel',
        height: 100,
        width: '100%',
        id: 'LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID',
        draggable: false,



        centered: false,
        //bottom: 64,
        bottom: 70,
        zIndex: 10,
        modal: false,
        hideOnMaskTap: true,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center',
        },
        showAnimation: {
            //type: 'popIn',
            //duration: 250,
            //easing: 'ease-out'
            type: 'slideIn',
            direction: 'up',
            easing: 'cubic-bezier(.2,0,.2,1)',
            duration:1050
        },
        hideAnimation: {
          
                ////type: 'popOut',
                ////easing: 'easeInOut',
                ////duration: 250,
                //type: 'fadeOut',
            //duration: 400,
            type: 'slideOut',
            direction: 'down',
            easing: 'cubic-bezier(.2,0,.2,1)',
            duration: 250
        
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
       style: 'background-color: rgba(0, 0, 0, 0.0);border-right:1px solid none;border-left:1px solid none;border-bottom:1px solid none;border-top:1px solid none;',
      //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
       

        items: [





            {

                xtype: 'container',
                width: '100%',
                // docked: 'top',
                // width: 40,
                style: ' background-color:white;',
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_MainDashboard_PendingOrderHeader',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                hidden:true,
                items:
                       [


                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_MainDashboard_PendingOrderyBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {


                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },


                                        {
                                            margin: '0 0 0 0',
                                            html: '<font size=2 color=black><b>Filter By Year</b></font>'
                                        },












                       ]

            },
{ xtype: 'container',
width: '95%',
height: 95,
// docked: 'top', width: 40,
style: 'background-color: rgba(0, 0, 0, 0.0)',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items:[
        {
            xtype: 'dataview',
            store: 'YearOnlyStore',
            id: 'FloatPanel_MainDashboard_PendingOrderListID',
            mode: 'SINGLE',
            style: 'background-color: rgba(0, 0, 0, 0);',
            scrollable: 'vertical',
            disableSelection: true,
            height:95,
        
            // **no fixed height here** — let each item size itself
            width: '100%',
        
            itemTpl:
              '<div style="display: flex; align-items: center; justify-content: space-between; ' +
                          'background-color: #fff; border: 1px solid #e0e0e0; border-radius: 60px; ' +
                          'padding: 8px 16px; margin: 6px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05); ' +
                          'box-sizing: border-box; font-family: Arial, sans-serif;">' +
        
                // left side: icon + text
                '<div style="display: flex; align-items: center; gap: 12px;">' +
                  '<img src="https://setkita.com/AyohaImgCard/Logo/95154-95943-258-NoEnterprise/kopisuratcinta.png" ' +
                       'alt="Icon" style="width: 68px; height: 68px; border-radius: 50%; object-fit: cover;" />' +
                  '<div>' +
                    '<div style="font-size: 14px; font-weight: 600; color: #1c1c1e;">Kopi Surat Cinta</div>' +
                    '<div style="font-size: 12px; color: #6c6c70; margin-top: 2px;">1 x Kopi</div>' +
                    '<div style="font-size: 10px; color: #aeaeae; margin-top: 2px;">23/7/2025 11:55:12am</div>' +
                  '</div>' +
                '</div>' +
        
                // right side: status badge + points
                '<div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">' +
                  '<span style="background-color: #ffc107; color: white; padding: 2px 8px;margin:-20px 20px 0px 0px;' +
                              'border-radius: 6px; font-size: 10px; font-weight: 600;">Order In‑Progress</span>' +
                  '<div style="text-align: center;margin:10px 20px 0px 0px;">' +
                    '<div class="blink_me" style="font-size: 18px; font-weight: bold; color: #1c1c1e;">100.00</div>' +
                    '<div class="blink_me" style="font-size: 12px; color: #6c6c70;">Ayoha Point</div>' +
                  '</div>' +
                '</div>' +
        
              '</div>'
        }
        
    ]
},
            

    //    {


    //        // xtype: 'button',
    //        xtype: 'panel',
    //        margin: '0 0 0 0',
    //        id: 'FloatPanel_MainDashboard_PendingOrderBg',
    //        //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
    //        style: 'background-color: rgba(0, 0, 0, 0.0)',
    //        height: 30,
    //        width: '100%',
    //        // style: 'border:2px solid #D25959;',
    //        layout: {
    //            type: 'vbox',
    //            pack: 'left',
    //            align: 'left'
    //        },
    //        items: [







               


    //        ]


    //    },









        ]







    });

    return _FloatPanel_MainDashboard_PendingOrder;
}

var globalFloatPanel_AyohaCardManagement_AdvertisementButton;

function FloatPanel_MainDashboard_PendingOrderShow() {
    Ext.Viewport.remove(_FloatPanel_MainDashboard_PendingOrder);
    this.overlay = Ext.Viewport.add(FloatPanel_MainDashboard_PendingOrder());
    this.overlay.show();
    isFloatPanel_MainDashboard_PendingOrder_Open = 'Y';
   // globalFloatPanel_AyohaCardManagement_AdvertisementButton="FloatPanel_AyohaCardManagement_AdvertisementButton_Point";
}


function FloatPanel_MainDashboard_PendingOrderHide() {
    if (isFloatPanel_MainDashboard_PendingOrder_Open == 'Y') {
        _FloatPanel_MainDashboard_PendingOrder.hide();
        isFloatPanel_MainDashboard_PendingOrder_Open = 'N';
    }

}


