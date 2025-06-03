Ext.define('ianMizi.view.Config.CoreVariable', {
});





function FloatPanel_AyohaStore_getEnterpriseAccNo() {
    // alert(globalFloatPanel_AyohaStore_ModuleTagging)
       var EntAccNo;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntAccNo = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntAccNo = globalDashboardVIAAdvertisement_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntAccNo = globalStampCampaignEnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntAccNo = globalEnterpriseAccNo_FloatLoyaltyCardPoint;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntAccNo = globalFloatPanel_RewardStore_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntAccNo = globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntAccNo = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardOrderHistory") {
           EntAccNo = globalFloatPanel_OrderHistory_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntAccNo = globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart") {
           EntAccNo = globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardAyohaVoucherHistory") {
           EntAccNo = globalFloatPanel_OrderHistory_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CheckOut") {
           EntAccNo = globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntAccNo = globalDashboard_AyohaHotMerchant_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntAccNo = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntAccNo = _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaNotification") {
           EntAccNo = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntAccNo = _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo;
       }
       return EntAccNo;
   }
   
   function FloatPanel_AyohaStore_getEnterpriseLogo() {
   
   //alert(globalFloatPanel_AyohaStore_ModuleTagging)
       var EntLogo;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntLogo = globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntLogo = globalDashboardVIAAdvertisement_EnterpriseLogoPath;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntLogo = globalStampCampaignEnterpriseLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntLogo = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntLogo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntLogo = globalFloatPanel_FloatingAdvertisement_CompanyLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntLogo = globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardOrderHistory") {
           EntLogo = globalFloatPanel_OrderCartEnterpriseLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntLogo = globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart") {
           EntLogo = globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseLogo;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardAyohaVoucherHistory") {
           EntLogo = globalFloatPanel_OrderCartEnterpriseLogo;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntLogo = globalDashboard_AyohaHotMerchant_EnterpriseLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntLogo = globalFloatPanelMerchantDetailPage_EnterpriseLogo;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntLogo = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntLogo = global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo;
       }
   
   
       
    //   alert(globalFloatPanelMerchantDetailPage_EnterpriseLogo);
       return EntLogo;
   }
   
   
   function FloatPanel_AyohaStore_getEnterpriseName() {
   
   
      
   
       var EntName;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntName = globalFloatPanel_PreviewAdvertisement_EnterpriseName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntName = globalDashboardVIAAdvertisement_EnterpriseName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntName = globalStampCampaignEnterpriseName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntName = globalPointCampaignEnterpriseName_FloatLoyaltyCardPoint;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntName = globalFloatPanel_RewardStore_EnterpriseName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntName = globalFloatPanel_FloatingAdvertisement_CompanyName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntName = globalFloatPanel_AyohaNotification_Notification_EnterpriseName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardOrderHistory") {
           EntName = globalFloatPanel_OrderCartEnterpriseName;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntName = globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart") {
           EntName = globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseName;
       }
   
   
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardAyohaVoucherHistory") {
           EntName = globalFloatPanel_OrderCartEnterpriseName;
       }
   
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntName = globalDashboard_AyohaHotMerchant_EnterpriseName;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntName = globalFloatPanelMerchantDetailPage_EnterpriseName;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntName = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntName = global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName;
       }
   
   
       
       return EntName;
   }
   
   function FloatPanel_AyohaStore_getEnterpriseTagLine() {
      // alert(globalFloatPanel_AyohaStore_ModuleTagging)
       var EntTagLine;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntTagLine = globalFloatPanel_PreviewAdvertisement_AdvertisementTitle;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntTagLine = globalDashboardVIAAdvertisement_AdvertisementTitle;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntTagLine = globalStampCampaignAdvertisementTitle;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntTagLine = globalFloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCard_EnterpriseTagLine;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntTagLine = globalFloatPanel_FloatingAdvertisement_AdvertismentTitle;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntTagLine = globalFloatPanel_AyohaNotification_Notification_EnterpriseTagLine;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
       }
       if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntTagLine = globalDashboard_AyohaHotMerchant_EnterpriseTagLine;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntTagLine = globalFloatPanelMerchantDetailPage_EnterpriseTagLine;
       }
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntTagLine = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesTagLine;
       }
   
   
       if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
       }
       return EntTagLine;
   }