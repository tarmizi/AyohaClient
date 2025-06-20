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







   function FloatPanel_AyohaStore_AddToCart_ADD(StampRuleAmounts,ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode, ItemPriceDiscount, ItemPriceDiscountRate, MerchantSumStamp) {
  
    globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmounts;




    AddToCart_ADD = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Qty" + ID).value);
    AddToCart_ADD = AddToCart_ADD + 1;
    if (AddToCart_ADD <= 999) {      
        document.getElementById("input-FloatPanel_AyohaStore_Qty" + ID).value = AddToCart_ADD;
       

      
        // var MerchantSumStamps=0;
        // var TTlMerchantPoint=0;
        // var TTlAyohaPoint=0;
        // var SumPrice;
        if (CampaignType == "Stamp Reward Loyalty Card") {
         



            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
         //   var stamp=0;
            // if (ItemPriceDiscountRate >= 0.1) {
            //     if (ItemPriceDiscount >= StampRuleAmount) {
            //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);                  
            //     } else {
            //         stamp = 0;
            //     }            
            // } else {
            //     if (ItemPrice >= StampRuleAmount) {                      
            //         stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount);                 
            //     } else {
            //         stamp = 0;
            //     }
             
            // }
         

            if (ItemPriceDiscountRate >= 0.1) {
               
                //TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
                TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
              //  SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                
               // TTlMerchantPoint = ItemPrice * MerchantPoint;
               TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPrice * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
                //SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }
          
            MerchantSumStamps = stamp;
          //  TTlAyohaPoint = MerchantSumStamps;
            AyohaPoint = TTlAyohaPoint;
            //TTlMerchantPoint = parseFloat(MerchantPoint);


        }
        if (CampaignType == "Point Reward Loyalty Card") {
            //TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
            //TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
            //MerchantSumStamp = 0;
            if (ItemPriceDiscountRate > 0) {
                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_ADD) * AyohaPoint;
                MerchantSumStamps = 0;
            } else {
                TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
                MerchantSumStamps = 0;
            }
        }

        if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
          
            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
          
            if (ItemPriceDiscountRate >= 0.1) {
               
                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_ADD) * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
              //  SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                
                TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
                //SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }

           
          
          
            // MerchantSumStamps = stamp;
            // AyohaPoint = TTlAyohaPoint;
            MerchantSumStamps = parseInt(MerchantSumStamp) + stamp;
            //TTlAyohaPoint = MerchantSumStamps;
            AyohaPoint = parseInt(MerchantSumStamp) + stamp;
           
        
        }
       
        if (ItemPriceDiscountRate > 0) {
            SumPrice = ItemPriceDiscount * AddToCart_ADD;
        } else {
            SumPrice = ItemPrice * AddToCart_ADD;
        }


       // SumPrice = ItemPrice * AddToCart_ADD;
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_ADD, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamps, MerchantPoint, AyohaPoint);
       
    }
    

}


function FloatPanel_AyohaStore_cart_AddToCart_MINUS(StampRuleAmounts,ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode, ItemPriceDiscount, ItemPriceDiscountRate, MerchantSumStamp) {
  
    AddToCart_MINUS = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);
    AddToCart_MINUS = AddToCart_MINUS - 1;
    globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmounts;
    if (AddToCart_MINUS >= 1) {      
        document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value = AddToCart_MINUS;


        // var MerchantSumStamps=0;
        // var TTlMerchantPoint=0;
        // var TTlAyohaPoint=0;
        // var SumPrice;
        //if (CampaignType == "Stamp Reward Loyalty Card") {
        //    TTlMerchantPoint = 0.00;
        //    TTlAyohaPoint = AddToCart_MINUS * AyohaPoint;
        //    MerchantSumStamp = 1;
        //}
        //if (CampaignType == "Point Reward Loyalty Card") {
        //    TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
        //    TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
        //    MerchantSumStamp = 0;
        //}
        //SumPrice = ItemPrice * AddToCart_MINUS;








        if (CampaignType == "Stamp Reward Loyalty Card") {
           



            // var StampRuleAmount = parseFloat(MerchantPoint);
            // var stamp;
            // if (ItemPriceDiscountRate >= 0.1) {
            //     if (ItemPriceDiscount >= StampRuleAmount) {
            //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);
            //     } else {
            //         stamp = 0;
            //     }
            // } else {
            //     if (ItemPrice >= StampRuleAmount) {
            //         stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount);
            //     } else {
            //         stamp = 0;
            //     }             
            // }
            // MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
            // TTlAyohaPoint = MerchantSumStamps;
            // AyohaPoint = parseInt(MerchantSumStamp) - stamp;
            // TTlMerchantPoint = parseFloat(MerchantPoint);




            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
          
           
         

            if (ItemPriceDiscountRate >= 0.1) {
                TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
            } else {
            
               TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPrice * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
            }
          


             MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
            // TTlAyohaPoint = MerchantSumStamps;
            // AyohaPoint = parseInt(MerchantSumStamp) - stamp;
  
           
           
          
       


            
        }


        if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
       
           
         



            if (ItemPriceDiscountRate >= 0.1) {
               // TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
               // TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
               TTlMerchantPoint = (ItemPriceDiscount * AddToCart_MINUS) * MerchantPoint;
               TTlAyohaPoint = (ItemPriceDiscount * AddToCart_MINUS) * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
            } else {
            
             
              
              // TTlMerchantPoint = ItemPrice * MerchantPoint;
                //TTlAyohaPoint = ItemPrice * AyohaPoint;
                TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
            }
          
           
             MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
            TTlAyohaPoint =TTlAyohaPoint - AyohaPoint;
          //  AyohaPoint = parseInt(MerchantSumStamp) - stamp;
          


          
        }



        if (CampaignType == "Point Reward Loyalty Card") {
            //TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
            //TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
            //MerchantSumStamp = 0;
            if (ItemPriceDiscountRate > 0) {
                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_MINUS) * MerchantPoint;
                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_MINUS) * AyohaPoint;
                MerchantSumStamps = 0;
            } else {
                TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
                MerchantSumStamps = 0;
            }
            TTlAyohaPoint =TTlAyohaPoint - AyohaPoint;
        }

        if (ItemPriceDiscountRate > 0) {
            SumPrice = ItemPriceDiscount * AddToCart_MINUS;
        } else {
            SumPrice = ItemPrice * AddToCart_MINUS;
        }
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_MINUS, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamps, MerchantPoint, AyohaPoint);
      
    }
  
}
