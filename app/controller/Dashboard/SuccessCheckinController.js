
Ext.define('ianMizi.controller.Dashboard.SuccessCheckinController', {
    extend: 'Ext.app.Controller',

    config: {
        // tak perlu refs / control kalau tak attach view
    },

    firstController: function () {
        alert('from SuccessCheckinController');
    },




    DashBoard_StampCardLoadByEnterpriseAccNoStore:function() {
      
        _DataStore_DashBoard_StampCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());       
        _DataStore_DashBoard_StampCardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashBoardStampCardLoadByEnterpriseAccNo');
        
        
        
        _DataStore_DashBoard_StampCardLoadByEnterpriseAccNoStore.load({
                callback: function (records, operation, success) {
                    if (success && records.length > 0) {
                        var record = records[0]; // Access only the first record
                  
                        Ext.getCmp('listTabpanelDashboardMerchantRewards_StampsStatus_NA').setStore(_DataStore_DashBoard_StampCardLoadByEnterpriseAccNoStore);
                       
                       
                        
                        // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                    } else {
                      
                        Ext.getCmp('listTabpanelDashboardMerchantRewards_StampsStatus_NA').setStore(_DataStore_DashBoard_StampCardLoadByEnterpriseAccNoStore);
                       
                    }
                   // 
                }
            });
    
    
    
    
    
        },









        

        Dashboard_StampCard_SuccessCheckIn_LoadStampCardPerkStore:function() {

    _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardStampCard_SuccessCheckIn_LoadStampCardPerk');
 

    _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                Ext.getCmp('listTabpanelDashboardMerchantRewards_StampsStatus_NA').setStore(_DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore);
                Ext.getCmp('listTabpanelDashboard_PerksInfo_StampsStatus_NA').setStore(_DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore);
                   
                       
                
               // LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });



},





});


function SuccessCheckinController_Dashboard_LoadPointPerks() {

    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaMerchantInfo_LoyaltyProgram";

    _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardPointCard_SuccessCheckIn_LoadPointCardPerk');
 

    _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                
                Ext.getCmp('listTabpanelDashboardMerchantRewards_Point').setStore(_DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore);
                Ext.getCmp('listTabpanelDashboard_PerksInfo_Point').setStore(_DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore);
           
                //   if(records.length > 1){
            //     var containerheight=records.length * 95;
            //     var existingcontainerheight=165;
            //     var newcontainerHeight=existingcontainerheight+containerheight;
            //     Ext.getCmp('containerDashboard_Perks_Points').setHeight(newcontainerHeight-95)

            //     Ext.getCmp('containerTabpanelDashboardMerchantRewards_PointsStatus_Eligible').setHeight(containerheight)



                
            //   }
               
                
               // LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                //LoadingPanelHide();
            }
        }
    });







}



var globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen;
function SuccessCheckinController_Dashboard_LoadVoucherPerks_setPerksOpen() {
    globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="Y";
    is_FloatPanel_DashboardMerchantRewardHide = "N";
}


//window.AyohaLoyaltySelected = window.AyohaLoyaltySelected || 'points'; // default

function AyohaSelectLoyaltySegNonTab(type) {



    if(type=='stamps'){
        ianMizi.app
        .getController('Dashboard.SuccessCheckinController')
        .Dashboard_StampCard_SuccessCheckIn_LoadStampCardPerkStore();
      
    }
    if(type=='points'){
        SuccessCheckinController_Dashboard_LoadPointPerks();
      
    }
    if(type=='vouchers'){
        SuccessCheckinController_Dashboard_LoadVoucherPerks();
       
    }

    if(type=='contest'){
        SuccessCheckinController_Dashboard_LoadContestPerks();
        
        
    }
    if(type=='event'){
        SuccessCheckinController_Dashboard_LoadEventPerks();
         
        
    }

    if(type=='discount'){
        SuccessCheckinController_Dashboard_LoadDiscountPerks();
         
        
    }
    
    
}

function AyohaSelectLoyaltySeg(type) {
    // 1. Senarai ID
    var allSegments = ['segStamps', 'segPoints', 'segVouchers', 'segContest', 'segEvent', 'segDiscount'];
    
    // 2. Mapping Type ke ID
    var targetId = '';
    if (type === 'stamps') targetId = 'segStamps';
    else if (type === 'points') targetId = 'segPoints';
    else if (type === 'vouchers') targetId = 'segVouchers';
    else if (type === 'contest') targetId = 'segContest';
    else if (type === 'event') targetId = 'segEvent';
    else if (type === 'discount') targetId = 'segDiscount';

    // 3. Loop untuk toggle class
    allSegments.forEach(function(id) {
        var el = document.getElementById(id);
        if (el) {
            if (id === targetId) {
                // Tambah class selected
                if (!el.classList.contains('ayohaSel')) {
                    el.classList.add('ayohaSel');
                    
                    // --- FIX SCROLLING (Hanya scroll container, bukan page) ---
                    var container = el.parentElement; // Ambil bapa element (.ayoha-container)
                    
                    // Kira posisi tengah
                    var scrollPosition = el.offsetLeft - (container.offsetWidth / 2) + (el.offsetWidth / 2);
                    
                    // Scroll container sahaja
                    container.scrollTo({
                        left: scrollPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Buang class
                el.classList.remove('ayohaSel');
            }
        }
    });

    // Simpan state global
    window.AyohaLoyaltySelected = type;


    if(type=='stamps'){
        ianMizi.app
        .getController('Dashboard.SuccessCheckinController')
        .Dashboard_StampCard_SuccessCheckIn_LoadStampCardPerkStore();
        Ext.getCmp('tabpanelDashboard_PerksInfo').setActiveItem(0);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(250);
        Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(400);
        Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHeight(400);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(400);
    }
    if(type=='points'){
        SuccessCheckinController_Dashboard_LoadPointPerks();
        Ext.getCmp('tabpanelDashboard_PerksInfo').setActiveItem(1);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(250);
        Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(400);
        Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHeight(400);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(400);
    }
    if(type=='vouchers'){
        SuccessCheckinController_Dashboard_LoadVoucherPerks();
        Ext.getCmp('tabpanelDashboard_PerksInfo').setActiveItem(2);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(270);
        Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(420);
        Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHeight(420);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(420);
    }

    if(type=='contest'){
        SuccessCheckinController_Dashboard_LoadContestPerks();
        Ext.getCmp('tabpanelDashboard_PerksInfo').setActiveItem(3);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(560);
        Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(560);
        Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHeight(560);     
        
    }
    if(type=='event'){
        SuccessCheckinController_Dashboard_LoadEventPerks();
        Ext.getCmp('tabpanelDashboard_PerksInfo').setActiveItem(4);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(560);
        Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(560);
        Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHeight(560);     
        
    }

    if(type=='discount'){
        SuccessCheckinController_Dashboard_LoadDiscountPerks();
        Ext.getCmp('tabpanelDashboard_PerksInfo').setActiveItem(5);
        Ext.getCmp('tabpanelDashboard_PerksInfo').setHeight(560);
        Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(560);
        Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHeight(560);     
        
    }
    
    
}

  
function AyohaContestImgFit(imgEl){
    try{
      var w = imgEl.naturalWidth || 0;
      var h = imgEl.naturalHeight || 0;
      if(!w || !h) return;
  
      var r = w / h;
      var frame = imgEl.parentNode;
      var bg = frame ? frame.querySelector('.ayohaImgBg') : null;
  
      // wide banner (contoh 16:9) -> cover (lebih cantik)
      if(r >= 1.7){
        imgEl.style.objectFit = 'cover';
        if(bg) bg.style.display = 'none';
      }else{
        // poster/doc/photo biasa -> contain tapi ruang tepi diisi blur bg
        imgEl.style.objectFit = 'contain';
        if(bg){
          bg.style.display = 'block';
          bg.src = imgEl.src;
        }
      }
  
      imgEl.style.objectPosition = 'center';
    }catch(e){}
  }
  
  function AyohaImgFitAuto(imgEl){
    try{
      var w = imgEl.naturalWidth || 0;
      var h = imgEl.naturalHeight || 0;
      if(!w || !h) return;
  
      var r = w / h;                       // ratio
      var frame = imgEl.parentNode;        // div frame
      var bg = frame ? frame.querySelector('.ayohaImgBg') : null;
  
      // wide banner -> cover, lain2 -> contain + blur bg
      if(r >= 1.7){
        imgEl.style.objectFit = 'cover';
        if(bg) bg.style.display = 'none';
      }else{
        imgEl.style.objectFit = 'contain';
        if(bg){
          bg.style.display = 'block';
          bg.src = imgEl.src;
        }
      }
  
      imgEl.style.objectPosition = 'center';
      imgEl.style.width = '100%';
      imgEl.style.height = '100%';
      imgEl.style.display = 'block';
    }catch(e){}
  }
  

function SuccessCheckinController_Dashboard_LoadVoucherPerks() {
 
    _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerk');

  //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();




  _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
               // console.log('Store loaded successfully, total records: ' + records.length);
               globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="Y";
             AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount=records.length;
                Ext.getCmp('listTabpanelDashboardMerchantRewards_Voucher').setStore(_DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore);
                Ext.getCmp('listTabpanelDashboard_PerksInfo_Voucher').setStore(_DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore);
                
                
                // setScreenWidth_Voucherperks();
                setScreenWidthListDynamic(records.length,"voucherCard_");

            } else {
                globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });







   

}




function SuccessCheckinController_Dashboard_LoadContestPerks() {

    _DataStore_Contest_SuccessCheckIn_LoadContestPerkStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_Contest_SuccessCheckIn_LoadContestPerkStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_Contest_SuccessCheckIn_LoadContestPerkStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardContest_SuccessCheckIn_LoadContestPerk');

  //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();




  _DataStore_Contest_SuccessCheckIn_LoadContestPerkStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
            
              // globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="Y";
              // AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount=records.length;
                Ext.getCmp('listTabpanelDashboardMerchantRewards_Contest').setStore(_DataStore_Contest_SuccessCheckIn_LoadContestPerkStore);
                Ext.getCmp('listTabpanelDashboard_PerksInfo_Contest').setStore(_DataStore_Contest_SuccessCheckIn_LoadContestPerkStore);
               
               
                setScreenWidthListDynamic(records.length,"contestCard_");
               
            } else {
               
              //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });







   

}





function SuccessCheckinController_Dashboard_LoadEventPerks() {

    _DataStore_Event_SuccessCheckIn_Load_EventPerkStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_Event_SuccessCheckIn_Load_EventPerkStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_Event_SuccessCheckIn_Load_EventPerkStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardEvent_SuccessCheckIn_Load_EventPerk');

  //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();




  _DataStore_Event_SuccessCheckIn_Load_EventPerkStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
            
              // globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="Y";
              // AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount=records.length;
                Ext.getCmp('listTabpanelDashboardMerchantRewards_Event').setStore(_DataStore_Event_SuccessCheckIn_Load_EventPerkStore);
                Ext.getCmp('listTabpanelDashboard_PerksInfo_Event').setStore(_DataStore_Event_SuccessCheckIn_Load_EventPerkStore);
               
               
                setScreenWidthListDynamic(records.length,"eventCard_");
               
            } else {
               
              //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });



}








function SuccessCheckinController_Dashboard_LoadDiscountPerks() {

    _DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardDiscount_SuccessCheckIn_Load_DiscountPerk');

  //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();




  _DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
            
              // globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="Y";
              // AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount=records.length;
                Ext.getCmp('listTabpanelDashboardMerchantRewards_Discount').setStore(_DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore);
                Ext.getCmp('listTabpanelDashboard_PerksInfo_Discount').setStore(_DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore);
              
                setScreenWidthListDynamic(records.length,"discountCard_");
               
            } else {
               
              //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });



}





function SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo() {

    // Helper untuk pastikan integer selamat (elak NaN)
    var getSafeInt = function(val) {
        var num = parseInt(val, 10);
        return isNaN(num) ? 0 : num;
    };

    // Helper untuk set text content dengan selamat (elak error kalau ID tak jumpa)
    var setSafeText = function(id, text) {
        var el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // 1. Setup Proxy Store
    _DataStore_SuccessCheckIn_LoadPerkCanEnjoyInfoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_SuccessCheckIn_LoadPerkCanEnjoyInfoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_SuccessCheckIn_LoadPerkCanEnjoyInfoStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo');

    // 2. Load Store
    _DataStore_SuccessCheckIn_LoadPerkCanEnjoyInfoStore.load({
        callback: function (records, operation, success) {

            if (success && records.length > 0) {
                
                var record = records[0];
                console.log("Data Loaded:", record.data);

                // --- A. DATA PARSING (Guna Helper) ---
                var StampPerksCount   = getSafeInt(record.get('StampPerksCount'));
                var PointPerksCount   = getSafeInt(record.get('PointPerksCount'));
                var VoucherEntitle    = getSafeInt(record.get('VoucherEntitle'));
                var AvailableContest  = getSafeInt(record.get('AvailableContest'));
                var AvailableEvent    = getSafeInt(record.get('AvailableEvent'));
                var AvailableDiscount = getSafeInt(record.get('AvailableDiscount'));

                // Data lain untuk paparan text
                var StampProgress     = record.get('StampProgressDisplay');
                var CurrPoints        = parseFloat(record.get('CurrentPointsBalance')).toFixed(2); // Cantikkan decimal
                var VoucherUsed       = getSafeInt(record.get('VoucherUsed'));
                var SubmittedContest  = getSafeInt(record.get('SubmittedContest'));
                var JoinedEvent       = getSafeInt(record.get('JoinedEvent'));
                var DiscountUsage     = getSafeInt(record.get('DiscountUsage'));

                // --- B. UPDATE TEKS UI (Sekali jalan) ---
                setSafeText("Dashboard_PerksYouCanEnjoyHere_StampCount", '● ' + StampPerksCount + ' Rewards');
                setSafeText("Dashboard_PerksYouCanEnjoyHere_PointCount", '● ' + PointPerksCount + ' Bonus');
                setSafeText("Dashboard_PerksYouCanEnjoyHere_VoucherCount", '● ' + VoucherEntitle + ' Gifts');
                setSafeText("Dashboard_PerksYouCanEnjoyHere_ContestCount", '● ' + AvailableContest + ' Prizes');
                setSafeText("Dashboard_PerksYouCanEnjoyHere_EventCount", '● ' + AvailableEvent + ' Invites');
                setSafeText("Dashboard_PerksYouCanEnjoyHere_DiscountCount", '● ' + AvailableDiscount + ' Promo');

                // Update text dalam tab/panel (Guna loop atau set manual macam ni ok sebab ID spesifik)
                // InTabPanel
                setSafeText("Dashboard_successCheckIn_CurrentStamp_InTabPanel", StampProgress);
                setSafeText("Dashboard_successCheckIn_CurrentPoint_InTabPanel", CurrPoints + ' Pts');
                setSafeText("Dashboard_successCheckIn_Voucher_InTabPanel", VoucherUsed + '/' + VoucherEntitle);
                setSafeText("Dashboard_successCheckIn_Contest_InTabPanel", SubmittedContest + '/' + AvailableContest);
                setSafeText("Dashboard_successCheckIn_Event_InTabPanel", JoinedEvent + '/' + AvailableEvent);
                setSafeText("Dashboard_successCheckIn_Discount_InTabPanel", DiscountUsage + '/' + AvailableDiscount);
                
                // OutTabPanel
                setSafeText("Dashboard_successCheckIn_CurrentStamp_OutTabPanel", StampProgress);
                setSafeText("Dashboard_successCheckIn_CurrentPoint_OutTabPanel", CurrPoints + ' Pts');
                setSafeText("Dashboard_successCheckIn_Voucher_OutTabPanel", VoucherUsed + '/' + VoucherEntitle);
                setSafeText("Dashboard_successCheckIn_Contest_OutTabPanel", SubmittedContest + '/' + AvailableContest);
                setSafeText("Dashboard_successCheckIn_Event_OutTabPanel", JoinedEvent + '/' + AvailableEvent);
                setSafeText("Dashboard_successCheckIn_Discount_OutTabPanel", DiscountUsage + '/' + AvailableDiscount);

                // --- C. LOGIC CALCULATE PERKS & HEIGHT ---
                var ttlPerks = 0;
                var currentHeight = 0;

                // Reset semua ke hidden dulu supaya bersih
                var segments = ['segStamps', 'segPoints', 'segVouchers', 'segContest', 'segEvent', 'segDiscount'];
                var containers = ['containerDashboard_Perks_Stamps', 'containerDashboard_Perks_Points', 'containerDashboard_Perks_Vouchers', 'containerDashboard_Perks_Contests', 'containerDashboard_Perks_Events', 'containerDashboard_Perks_Discounts'];
                
                // Helper function untuk process setiap section
                var processSection = function(count, heightVal, segId, contId) {
                    if (count > 0) {
                        ttlPerks++;
                        currentHeight += heightVal;
                        if(document.getElementById(segId)) document.getElementById(segId).style.display = 'flex';
                        Ext.getCmp(contId).setHidden(false);
                    } else {
                        if(document.getElementById(segId)) document.getElementById(segId).style.display = 'none';
                        Ext.getCmp(contId).setHidden(true);
                    }
                };

                // Jalankan logic untuk setiap item
                processSection(StampPerksCount, 230, 'segStamps', 'containerDashboard_Perks_Stamps');
                processSection(PointPerksCount, 230, 'segPoints', 'containerDashboard_Perks_Points');
                processSection(VoucherEntitle, 260, 'segVouchers', 'containerDashboard_Perks_Vouchers');
                processSection(AvailableContest, 390, 'segContest', 'containerDashboard_Perks_Contests');
                processSection(AvailableEvent, 390, 'segEvent', 'containerDashboard_Perks_Events');
                processSection(AvailableDiscount, 390, 'segDiscount', 'containerDashboard_Perks_Discounts');

                
                // --- D. LOGIC UI SWITCHING (<=2 vs >=3) ---
                
                if (ttlPerks <= 2) {
                    // MODE: SEDIKIT (Tunjuk Vertical List - OutSideTapPanel)
                    Ext.getCmp('containerDashboardHeader_ButtonPerks_Main3').setHidden(true);
                    Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHidden(true);
                    Ext.getCmp('containerDashboard_PerksOutSideTapPanel').setHidden(false);
                    
                    Ext.getCmp('containerDashboard_PerksOutSideTapPanel').setHeight(currentHeight);
                    Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight(currentHeight + 100);

                    // Auto Select (Priority Logic)
                    if (StampPerksCount > 0)      AyohaSelectLoyaltySegNonTab('stamps');
                    else if (PointPerksCount > 0) AyohaSelectLoyaltySegNonTab('points');
                    else if (VoucherEntitle > 0)  AyohaSelectLoyaltySegNonTab('vouchers');
                    else if (AvailableContest > 0) AyohaSelectLoyaltySegNonTab('contest');
                    else if (AvailableEvent > 0)  AyohaSelectLoyaltySegNonTab('event');
                    else if (AvailableDiscount > 0) AyohaSelectLoyaltySegNonTab('discount');

                } else {
                    // MODE: BANYAK (Tunjuk Tab Panel - InSideTapPanel)
                    Ext.getCmp('containerDashboardHeader_ButtonPerks_Main3').setHidden(false);
                    Ext.getCmp('containerDashboard_PerksInSideTapPanel').setHidden(false);
                    Ext.getCmp('containerDashboard_PerksOutSideTapPanel').setHidden(true);
                    
                    // Reset height jika perlu (optional)
                    // Ext.getCmp('containerDashboard_PerksYouCanEnjoyHere').setHeight('100%'); 

                    // Auto Select (Priority Logic) - Guna Else If supaya tak run banyak kali
                    if (StampPerksCount > 0)      AyohaSelectLoyaltySeg('stamps');
                    else if (PointPerksCount > 0) AyohaSelectLoyaltySeg('points');
                    else if (VoucherEntitle > 0)  AyohaSelectLoyaltySeg('vouchers');
                    else if (AvailableContest > 0) AyohaSelectLoyaltySeg('contest');
                    else if (AvailableEvent > 0)  AyohaSelectLoyaltySeg('event');
                    else if (AvailableDiscount > 0) AyohaSelectLoyaltySeg('discount');
                }
                SuccessCheckinController_DashboardSuccessCheckIn_LoadUnLockMemberOnlyPerks();
            } else {
                // Tiada data atau success = false
                console.log("No records found or load failed.");
                SuccessCheckinController_DashboardSuccessCheckIn_LoadUnLockMemberOnlyPerks();
                // Boleh handle UI kosong di sini jika perlu
            }
        },
        failure: function() {
            console.log("Store load failure");
        }
    });
}



function SuccessCheckinController_DashboardSuccessCheckIn_LoadUnLockMemberOnlyPerks() {

   
    _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo_DashboardMain');

 

    _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.load({
        callback: function (records, operation, success) {
            // alert(records.length)
            // alert(success)
            if (success && records.length > 0) {
           
              
                Ext.getCmp('listDashboard_MembershipCard_CheckIn').setStore(_DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore);
               // setScreenWidthMembershipCardCheckIn(count,jenis)
               setScreenWidthMembershipCardCheckIn(records.length,"membershipCard_");
               SuccessCheckinController_DashboardSuccessCheckIn_LoadVIEWMerchantDashboard_StoreActivity();
               
            } else {
               
              //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });



}




function SuccessCheckinController_DashboardSuccessCheckIn_LoadVIEWMerchantDashboard_StoreActivity() {

   
    _DataStore_VIEWMerchantDashboard_StoreActivityStore.getProxy().setExtraParam('enterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo); 
    _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setUrl(GetAPIurl() + '/VIEW_MerchantDashboard/VIEWMerchantDashboard_StoreActivity');

 

    _DataStore_VIEWMerchantDashboard_StoreActivityStore.load({
        callback: function (records, operation, success) {
            // alert(records.length)
            // alert(success)
            if (success && records.length > 0) {
           
              
                Ext.getCmp('listDashboardStoreActivity').setStore(_DataStore_VIEWMerchantDashboard_StoreActivityStore);
             //  setScreenWidthMembershipCardCheckIn(records.length,"membershipCard_");
               
            } else {
               
              //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });



}











function setScreenWidthListDynamic(count,jenis) {

    var ejasWidth=Math.max(
        document.documentElement.clientWidth || 0, // viewport width
        window.innerWidth || 0
      );
    //var count=AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount;
   
    if(count==1){

        var w = ejasWidth-45;
        var els = document.querySelectorAll('[id^="'+jenis+'"]');
        for (var i = 0; i < els.length; i++) {
          els[i].style.width = w + 'px';
        }
      
    }
    if(count>1){
        var w = ejasWidth-80;
        var els = document.querySelectorAll('[id^="'+jenis+'"]');
        for (var i = 0; i < els.length; i++) {
          els[i].style.width = w + 'px';
        }
    }


     
  }







  function setScreenWidthMembershipCardCheckIn(count,jenis) {

    var ejasWidth=Math.max(
        document.documentElement.clientWidth || 0, // viewport width
        window.innerWidth || 0
      );
    //var count=AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount;
   
    if(count==1){

        var w = ejasWidth-35;
        var els = document.querySelectorAll('[id^="'+jenis+'"]');
        for (var i = 0; i < els.length; i++) {
          els[i].style.width = w + 'px';
        }
      
    }
    if(count>1){
        var w = ejasWidth-70;
        var els = document.querySelectorAll('[id^="'+jenis+'"]');
        for (var i = 0; i < els.length; i++) {
          els[i].style.width = w + 'px';
        }
    }


     
  }


function setScreenWidth_Voucherperks() {

    var ejasWidth=Math.max(
        document.documentElement.clientWidth || 0, // viewport width
        window.innerWidth || 0
      );
    var count=AppState.MainDashboard.MainDashboard_CheckInSuccess_VoucherCount;
   
    if(count==1){

        var w = ejasWidth-45;
        var els = document.querySelectorAll('[id^="voucherCard_"]');
        for (var i = 0; i < els.length; i++) {
          els[i].style.width = w + 'px';
        }
      
    }
    if(count>1){
        var w = ejasWidth-80;
        var els = document.querySelectorAll('[id^="voucherCard_"]');
        for (var i = 0; i < els.length; i++) {
          els[i].style.width = w + 'px';
        }
    }


     
  }


function SuccessCheckinController_Dashboard_StampCard_SuccessCheckIn_OpenMerchantLoyaltyProgram(val){
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";
 
    var StampCampaignCode = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StampContent = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StampContentNote = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StampContentSequence = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseName = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var CountRow = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var EndDate = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StartDate = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StampRuleRemarks = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var IsStampRulePopUp = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StampCampaignName = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo= _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var StampContentFinal = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var CountStampYES = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var EnterprisesLogo = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);
    var isMember = _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore.findRecord('ID', val, 0, false, false, true);



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
    var EnterprisesLogos = EnterprisesLogo.get('EnterpriseLogo');
    var isMembers = isMember.get('isMember');


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
    
   

    MembershipTag=isMembers;
    var strStampedYES = CountStampYESs;
    var StampedYES = strStampedYES.split("/");
    var YESStamped = StampedYES[0];
    var TotalRows = StampedYES[1];
    localStorage.setItem('StampCampaignCode', StampCampaignCodes);

    localStorage.setItem('CountLoyaltyStamped', YESStamped);
    localStorage.setItem('CountStampCardRowShow', TotalRows);
    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);

   
}




function SuccessCheckinController_Dashboard_PointCard_SuccessCheckIn_OpenMerchantLoyaltyProgram(val){
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";

    

    var EnterpriseAccNo = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var PointCampaignCode = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardCode = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountStar = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var CountReviewer = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var MembershipCardFeePaymentCycle = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var EnterpriseLogo = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
    var EnterpriseName = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var PointCampaignName = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
var EndDate = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
var StrEndDate = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
var isCampaignExpired = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);
var isMember = _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore.findRecord('MembershipCardCode', val, 0, false, false, true);






    var EnterpriseAccNos= EnterpriseAccNo.get('EnterpriseAccNo');
    var PointCampaignCodes= PointCampaignCode.get('PointCampaignCode');
     var MembershipCardCodes= MembershipCardCode.get('MembershipCardCode');
     var CountStars= CountStar.get('CountStar');
     var CountReviewers= CountReviewer.get('CountReviewer');
     var EnterpriseNames= EnterpriseName.get('EnterpriseName');
     var EnterpriseLogos= EnterpriseLogo.get('EnterpriseLogo');
     var PointCampaignNames= PointCampaignName.get('PointCampaignName');
     var EndDates= EndDate.get('EndDate');
     var StrEndDates= StrEndDate.get('StrEndDate');
     var isCampaignExpireds= isCampaignExpired.get('isCampaignExpired');
     var isMembers= isMember.get('isMember');

    globalLatestPointCampaignCode = PointCampaignCodes;    

    MembershipTag=isMembers;
    globalFloatPanelMerchantDetailPage_MembershipCardCode=MembershipCardCodes;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNos;
    globalFloatPanelMerchantDetailPage_CountStar=CountStars;
    globalFloatPanelMerchantDetailPage_CountReviewer=CountReviewers;


    globalFloatPanel_AyohaStore_CheckOut_EnterpriseName= EnterpriseNames;
    globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo= EnterpriseLogos;
    

    FloatLoyaltyCardPointShow(PointCampaignNames, PointCampaignCodes, EnterpriseLogos, EnterpriseNames, EnterpriseAccNos, EndDates, StrEndDates, isCampaignExpireds);



    //FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(val, EnterpriseAccNos, MembershipTag,MembershipCardFeePaymentCycles,CountStars,CountReviewers);
        
        
}


function Dashboard_Perks_SetActive(type) {

    var tabs = [
        {id: 'htmlDashboardHeader_ButtonPerks_Stamps',   label: 'Digital Stamps', key:'Stamps'},
        {id: 'htmlDashboard_ButtonPerks_Points',         label: 'Point Rewards',  key:'Points'},
        {id: 'htmlDashboard_ButtonPerks_Vouchers',       label: 'Vouchers',       key:'Vouchers'},
        {id: 'htmlDashboard_ButtonPerks_Contests',       label: 'Contests',       key:'Contests'},
        {id: 'htmlDashboard_ButtonPerks_Events',         label: 'Events',         key:'Events'},
        {id: 'htmlDashboard_ButtonPerks_Discounts',      label: 'Discounts',      key:'Discounts'}
    ];

    Ext.Array.each(tabs, function (tab) {
        var cmp = Ext.getCmp(tab.id);
        if (!cmp) return;

        var isActive = (tab.key === type);

        cmp.setHtml(
            '<div style="text-align:center;width:100%;">' +

              // TEXT
              '<div style="font-size:12px;' +
                    (isActive
                        ? 'font-weight:700;color:#111827;'     // active = hitam bold
                        : 'font-weight:600;color:#7c3aed;'     // inactive = ungu, still “enabled”
                    ) +
              '">' + tab.label + '</div>' +

              // UNDERLINE
              '<div style="margin:4px auto 0 auto;' +
                    'height:' + (isActive ? '3' : '2') + 'px;' +
                    'width:'  + (isActive ? '40' : '32') + 'px;' +
                    'border-radius:999px;' +
                    (isActive
                        ? 'background-image:linear-gradient(90deg,#ff00de,#c800ff);' // Ayoha gradient
                        : 'background:rgba(199,210,254,0.9);'                        // lembut utk inactive
                    ) +
              '"></div>' +

            '</div>'
        );
    });

    // sini sambung tukar content dataview ikut `type` kalau perlu
    // contohnya:
    // if (type === 'Stamps') { ... }
}
