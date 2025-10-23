Ext.define('ianMizi.view.AyohaReward.FloatPanel_AyohaReward', {

});

var _FloatPanel_AyohaReward;


var isFloatPanel_AyohaRewardOpen = 'N';

var _FloatPanel_AyohaReward_isFirstLoad = "N";









function FloatPanel_AyohaReward() {

    _FloatPanel_AyohaReward =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaRewardID',
         draggable: false,
         zIndex: 200,


         centered: true,
         //bottom: 64,
         // zIndex: 100,
         modal: false,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },

       style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
    


         items: [

{
    xtype: 'AyohaReward_MainDashboard',
}




                        


         ]


     












     });
    return _FloatPanel_AyohaReward;



}



function FloatPanel_AyohaRewardShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward());
    this.overlay.show();
    isFloatPanel_AyohaRewardOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaRewardHide()");


   
   


}





function FloatPanel_AyohaRewardHide() {
    if (isFloatPanel_AyohaRewardOpen == "Y") {
        _FloatPanel_AyohaReward.hide(); isFloatPanel_AyohaRewardOpen = 'N';
        _FloatPanel_AyohaReward_isFirstLoad = "N";
        RemovePages("FloatPanel_AyohaRewardHide()");
    }
   
}


//GetCurrAyohaUserGroupCode()

var _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore;
function AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore() {

    Ext.getStore('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').getProxy().setExtraParams({
        AyohaUserGroupCode: GetCurrAyohaUserGroupCode()
    });
    Ext.StoreMgr.get('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').getProxy().setExtraParams({
            AyohaUserGroupCode: GetCurrAyohaUserGroupCode()
        });
        _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore=Ext.StoreMgr.get('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore').load();
        var myStore = Ext.getStore('AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore');
        count = myStore.getCount();
        AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore();
        // adjustHeight();
        Ext.Viewport.setMasked(false);
       

    });
    task.delay(500);
}


var _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore;
function AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore() {

    Ext.getStore('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').getProxy().setExtraParams({
        RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').getProxy().setExtraParams({
            RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo()
        });
        _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore= Ext.StoreMgr.get('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore').load();
        var myStore = Ext.getStore('AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByStore');
        count = myStore.getCount();
        AyohaRewardPointLoadBySubscriberAccNoStore();
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);
}






function AyohaRewardPointLoadBySubscriberAccNoStore() {
  
    Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoStore');
        count = myStore.getCount();
        _FloatPanel_AyohaReward_isFirstLoad = "Y";
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);


}


function adjustHeight() {
    //270
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(218);
    console.log(y);
    console.log(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    var newHeight = adjustedHeight - 33;
    //alert(adjustedHeight);
    //alert(newHeight)
    return newHeight;
   




}







var globalItemPoint;
function AyohaPointCheckRedeemEntitle(val) {

  
    var ItemPoint = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);
   

 
    globalItemPoint = ItemPoint.get('ItemPoint');
 
    var AyohaPoint = localStorage.getItem("AyohaPoint");


   // 10 console.log(globalItemPoint);
    //601 console.log(AyohaPoint);

    if (AyohaPoint >= globalItemPoint) {
        FloatPanel_RedeemPrizeShow(val);
       
    } else {
        Swal.fire({
            title: 'Insufficient Ayoha Point',
            text: "Unable to redeem prize!!",
            showConfirmButton: false,
            imageUrl: "resources/icons/insufficientRedeem.png",
            imageWidth: 300,
            imageHeight: 200,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<a href>Ayoha Reward v 1.0</a>'
        })
       
       
    }
}





function FloatPanel_AyohaReward_MoveCarousel(Idx) {
  
    console.log(Idx)
    if (Idx == 0) {
        Ext.getCmp('carouselFloatPanel_AyohaReward').setActiveItem(0);      
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderIcon').setHtml('<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderTxt').setHtml('<font size=1 color=black>Redeem Prize</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=purple><b><u>Redeem</u></b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=purple><b><u>Prize</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Ayoha Points</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Transfer</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
    }
    if (Idx == 1) {
        Ext.getCmp('carouselFloatPanel_AyohaReward').setActiveItem(1);
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderIcon').setHtml('<img src="resources/icons/myredeemption.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderTxt').setHtml('<font size=1 color=black>My Redemptions</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=purple><b><u>My</u></b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=purple><b><u>Redemption</u></b></font>');    
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Ayoha Points</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Transfer</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
      

    }
    if (Idx == 2) {

        Ext.getCmp('carouselFloatPanel_AyohaReward').setActiveItem(2);
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderIcon').setHtml('<img src="resources/icons/HistoryPurple01.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaRewardMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Points History</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Ayoha Points</u></b></font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=purple><b><u>History</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt01').setHtml('<font size=1 color=grey>Transfer</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_TransferaAyohaPointTxt02').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Ayoha Point</font>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>Cash Back</font>');
    }
   

}

