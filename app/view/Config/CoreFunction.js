Ext.define('ianMizi.view.Config.CoreFunction', {
});






function CoreFunction_DashboardAyohaUser() {
    //  alert("DashboardAyohaUserMainStore");
   
      globalLatestPoint = "0";
      globalLatestStamp = "0/0";
  
      _DataStore_DashboardAyohaUserMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
      _DataStore_DashboardAyohaUserMainStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardAyohaUserMain'); 
      _DataStore_DashboardAyohaUserMainStore.load({
      callback: function (records, operation, success) {
          if (success && records.length > 0) {
  
              var count = _DataStore_DashboardAyohaUserMainStore.getCount();
              var modelRecord =  records[0];
              console.log("_DataStore_DashboardAyohaUserMainStore:" + count);
  
              var ThisWeekCountsStamp = modelRecord.get('ThisWeekCountsStamp');
              var ThisWeekCountsPoint = modelRecord.get('ThisWeekCountsPoint');
              var TotalCountStamp = modelRecord.get('TotalCountStamp');
              var TotalCountPoint = modelRecord.get('TotalCountPoint');
              var TotalCampaign = modelRecord.get('TotalCampaign');
              var TotalMembershipCard = modelRecord.get('TotalMembershipCard');
              var AyohaPoint = modelRecord.get('AyohaPoint');
      
      
              var LatestStamp = modelRecord.get('LatestStamp');
              var LatestStampDate = modelRecord.get('LatestStampDate');
              var LatestPoint = modelRecord.get('LatestPoint');
              var LatestPointDate = modelRecord.get('LatestPointDate');
              var TypeCRDB = modelRecord.get('TypeCRDB');
              var PointType = modelRecord.get('PointType');
              var ThisWeekCountsStampRedeem = modelRecord.get('ThisWeekCountsStampRedeem');
              var ThisWeekCountsPointRedeem = modelRecord.get('ThisWeekCountsPointRedeem');
              var EnterpriseNameStampCard = modelRecord.get('EnterpriseNameStampCard');
              var EnterpriseNamePointCard = modelRecord.get('EnterpriseNamePointCard');
              var AyohaTaAndWin_TapBalance = parseInt(modelRecord.get('AyohaTaAndWin_TapBalance'));
              //var AyohaMember_Rank = modelRecord.get('AyohaMember_Rank');
              var rank = modelRecord.get('AyohaMember_Rank');
  
              var BadgeCount_Stamp = modelRecord.get('BadgeCount_Stamp');
              var BadgeCount_Point = modelRecord.get('BadgeCount_Point');
              var BadgeCount_Discount = modelRecord.get('BadgeCount_Discount');
              var BadgeCount_Contest = modelRecord.get('BadgeCount_Contest');
              var BadgeCount_Event = modelRecord.get('BadgeCount_Event');
              var BadgeCount_Voucher = modelRecord.get('BadgeCount_Voucher');
  
  
  
  
  
  
               var parts = rank.split(",");
               var AyohaMember_Rank=parts[0];
               var AyohaMember_NextRank=parts[1];
               DashboardAyohaMember_NextRankPoint=parts[2];
               AppState.FloatPanel_AyohaReward.AyohaMember_NextRankPoint=parts[2];           
             // localStorage.setItem("AyohaMember_Rank", AyohaMember_Rank);
      
      
              globalDashboard_TotalItemQuantityCart = modelRecord.get('TotalItemQuantityCart');
      
              globalLatestStampCampaignCode = modelRecord.get('LatestStampCampaignCode');
              globalLatestPointCampaignCode = modelRecord.get('LatestPointCampaignCode');
              globalPNUnread = modelRecord.get('PNUnread');
      
      
      
      
      
              globalEnterpriseNameStampCard = EnterpriseNameStampCard;
      
      
      
              if (ThisWeekCountsStamp) {
                  ThisWeekCountsStamp = ThisWeekCountsStamp;
              } else {
                  ThisWeekCountsStamp = '0';
              }
      
              if (ThisWeekCountsPoint) {
                  ThisWeekCountsPoint = ThisWeekCountsPoint;
              } else {
                  ThisWeekCountsPoint = '0';
              }
      
              if (TotalCountStamp) {
                  TotalCountStamp = TotalCountStamp;
              } else {
                  TotalCountStamp = '0';
              }
              if (TotalCountPoint) {
                  TotalCountPoint = TotalCountPoint;
              } else {
                  TotalCountPoint = '0';
              }
              if (TotalMembershipCard) {
                  TotalMembershipCard = TotalMembershipCard;
              } else {
                  TotalMembershipCard = '0';
              }
      
      
              if (TotalCampaign) {
                  TotalCampaign = TotalCampaign;
              } else {
                  TotalCampaign = '0';
              }
              if (AyohaPoint) {
                  AyohaPoint = AyohaPoint;
              } else {
                  AyohaPoint = '0';
              }
              globalDashboard_AyohaPoint = AyohaPoint;
              if (ThisWeekCountsStampRedeem) {
                  ThisWeekCountsStampRedeem = ThisWeekCountsStampRedeem;
              } else {
                  ThisWeekCountsStampRedeem = '0';
              }
      
      
              if (ThisWeekCountsPointRedeem) {
                  ThisWeekCountsPointRedeem = ThisWeekCountsPointRedeem;
              } else {
                  ThisWeekCountsPointRedeem = '0';
              }
      
      
              globalLatestStamp = LatestStamp;
      
              //if (LatestPoint) {
              //    LatestPoint = LatestPoint;
              //} else
              //{
              //    LatestPoint = "0";
              //}
      
      
              if (globalPNUnread) {
                  globalPNUnread = globalPNUnread;
              } else {
                  globalPNUnread = '0';
              }
      
             localStorage.setItem("AyohaPoint", AyohaPoint);
              var a = parseFloat(TotalCountStamp);
              var b = parseInt(TotalCountPoint);
      
      
              console.log(b);
      
      
              var a1 = a * 10;
              var b1 = b / 10;
              // var AyohaPoint = a + b;
              // var AyohaPoint = Math.round(a1 + b1);
      
              ////Ext.getCmp('Dashboard_AyohaActivity_ThisWeekStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsStamp + '</div>');
              ////Ext.getCmp('DashBoard_AyohaRewards_TotalStampsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + LatestStamp + '</div>');
              ////Ext.getCmp('DashBoard_AyohaRewards_TotalStampsLblLastDate').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">' + EnterpriseNameStampCard + ' - ' + LatestStampDate + '</div>');
              ////Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLblLastDate').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">' + EnterpriseNamePointCard + ' - ' + LatestPointDate + '</div>');
      
              globalEnterpriseNamePointCard = EnterpriseNamePointCard;
      
      
              //ori //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekPoint').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPoint + '</div>');
              //ori //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + TotalCountPoint + '</div>');
      
      
      
              var vals = GetCurrAyohaUserAccountNo().split('-');
              var id_Exts = vals[2];
      
      
              var isVerifiedUser = localStorage.getItem('AyohaUserisUserVerified');
              var AccName = localStorage.getItem('AyohaUserAccountNameDisplay');
      
              if (isVerifiedUser == "YES") {
                  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHidden(false);
                 // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Hello!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-26px 0px 0px 0px"><u>Ranking : ' + AyohaMember_Rank + '</u></div>');
                  Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccName.toUpperCase() + '</div>');
                 // Ext.getCmp('btnMyAccount_DashboardRankIconText').setHtml('<div class="blink_me" style="color:white;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px 10px"><b> ' + AyohaMember_Rank + '</b></div>');
                  Ext.getCmp('btnMyAccount_DashboardRankIconText').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="color:white;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px 0px"><b> ' + AyohaMember_Rank + '</b></div>');
                  document.getElementById("txtDashboard_RankingIcon").textContent = AyohaMember_Rank;
  
               
                  document.getElementById("txtNextRanking").textContent = AyohaMember_NextRank;
                  AppState.FloatPanel_AyohaReward.TextNextRankStar=AyohaMember_NextRank;
                  
                  const txtNextRanking = document.getElementById("txtNextRanking");
                  txtNextRanking.style.fontWeight = "bold";
                  // var AyohaMember_NextRank=parts[1];
                  // var AyohaMember_NextRankPoint=parts[2];    
  
  
                AppState.FloatPanel_AyohaReward.TextRankStar=AyohaMember_Rank;
                  
      
                  if (AyohaMember_Rank == "Black Iron") {
                      //  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                     // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/blackIron.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Bronze.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/blackIron.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Bronze.png";
                      
                                        
                      // Ubah margin
                       txtNextRanking.style.margin = "20px -100px 0px 0px";
                      // html: '<div style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>',
                  }
                  if (AyohaMember_Rank == "Bronze") {
                      //  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                     // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Bronze.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Silver.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Bronze.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Silver.png"; 
                    
                      txtNextRanking.style.margin = "20px -100px 0px 0px";
                  }
                  if (AyohaMember_Rank == "Silver") {
                      // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Silver.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Gold.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Silver.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Gold.png";
                   
                      txtNextRanking.style.margin = "20px -100px 0px 0px";
                  }
                  if (AyohaMember_Rank == "Gold") {
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Gold.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Platinum.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Gold.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Platinum.png";
                    
                      txtNextRanking.style.margin = "20px -80px 0px 0px";
                  }
                  if (AyohaMember_Rank == "Platinum") {
                      // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.jpg" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                     // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Platinum.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/kingclubIcon.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Platinum.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/kingclubIcon.png";
                 
                      txtNextRanking.style.margin = "20px -80px 0px 0px";
                  }
                  if (AyohaMember_Rank == "King Club") {
                      // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/icons/kingclubIcon.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/kingclubIcon.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/kingclubIcon.png";                   
                  }
              }
      
      
      
      
              var sign;
              if (TypeCRDB == "Credit") {
                  sign = "<font size=6 color=black><b>+</b></font>";
              } if (TypeCRDB == "Debit") {
                  sign = "<font size=6 color=black><b>-</b></font>";
              }
              //var txtType = "<div style='margin:-7px 0px 0px 0px;width:10px;height:10px;'><font size=1 color=white><b>(" + PointType + ")</b></font></div>";
              var txtType = "<font size=1 color=white margin-top:-5px><b>(" + PointType + ")</b></font>";
              //  Ext.getCmp('Dashboard_AyohaActivity_ThisWeekPoint').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPoint + '</div>');
      
              ////var latestpoints = LatestPoint;
      
              if (LatestPoint) {
                  globalLatestPoint = LatestPoint;
                  //  Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + sign + LatestPoint + '</div>');
              } else {
                  globalLatestPoint = "0";
              }
      
      
      
              // if (globalDashboard_TotalItemQuantityCart) {
              //     globalDashboard_TotalItemQuantityCart = globalDashboard_TotalItemQuantityCart;
              //     Ext.getCmp('containerDashbord_MyCart').setHidden(false);
              // } else {
              //     globalDashboard_TotalItemQuantityCart = "0";
              //     Ext.getCmp('containerDashbord_MyCart').setHidden(true);
              // }
  
              globalDashboard_TotalItemQuantityCart_fromAyohaNotification=globalDashboard_TotalItemQuantityCart;
           
            //Ext.getCmp('htmlDashbord_OrderCart_CountbadgeText').setHtml('<div style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;"><b>' + globalDashboard_TotalItemQuantityCart + '</b></div>');
           
              
              Dashboard_updateBadge_AyohaMerchantList_CheckOutAndShoppingBag('htmlMyDashboard_AyohaOnlineMerchantStoreChecout_CountbadgeText', globalDashboard_TotalItemQuantityCart);
              // Ext.getCmp('htmlDashbord_AyohaHotMerchant_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalDashboard_TotalItemQuantityCart + '</b></div>');
      
      
             globalDashboard_TotalItemQuantityCart = 0;
      
              //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsTypeLbl').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:bold"> (' + PointType + ')</div>');
      
              //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekRedeemStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsStampRedeem + '</div>');
      
              //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekCountsPointRedeem').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPointRedeem + '</div>');
      
      
      
             // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Collected Ayoha Points</b></div></div>');
              
             // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:180px;width:180px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:50px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-28px 0px 0px 0px"><b>Your Ayoha Points</b></div></div>');
  
             document.getElementById("txtDashboard_MembershipSince").textContent =convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate);          
              
            
            //  document.getElementById("txtDashboard_AyohaPoint").textContent = AyohaPoint;
              document.getElementById("Dashboard_AyohaRewardPoint").textContent = AyohaPoint;
             // document.getElementById("Dashboard_AyohaRewardPoint").textContent = `${AyohaPoint.toLocaleString('en-MY')} pts`;
              document.getElementById('Dashboard_userPts').textContent = `${AyohaPoint.toLocaleString('en-MY')} pts`;
              
            
              
  
  if (convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate)=="Non Ayoha Member"){
      document.getElementById("txtDashboard_MembershipTier").style.visibility = "hidden";
      document.getElementById("txtDashboard_MembershipNo").textContent = "00-00-00-00";
  }else{
  // Show
  document.getElementById("txtDashboard_MembershipTier").style.visibility = "visible";
  document.getElementById("txtDashboard_MembershipNo").textContent = globalLogginAyohaUser_AccountNo_Display;
  }
  AppState.FloatPanel_AyohaReward.AyohaRewardPointBalance=AyohaPoint;
  AppState.FloatPanel_AyohaReward.MembershipNo=globalLogginAyohaUser_AccountNo_Display;
  AppState.FloatPanel_AyohaReward.MembershipSince=convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate);
  AppState.FloatPanel_AyohaReward.AyohaTaAndWinTapBalance=AyohaTaAndWin_TapBalance;
  
  
  

  
  
  
  
            
  
  
             // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:180px;width:180px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:50px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-33px 0px 0px 0px"><b>Your Ayoha Points</b></div></div>');
             
              Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + AyohaTaAndWin_TapBalance + '</font> Chance Left</div></div>');
              //Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>(' + AyohaTaAndWin_TapBalance + ')</font> Chance Left</div></div>');
              AyohaPoint = 0;
      
      
              if (globalPNUnread != "0") {
                 // Ext.getCmp('btnMyAccount_DashboardPicProfile').setBadgeText(globalPNUnread);
                  // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setBadgeText(globalPNUnread);
                 // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/NotificationPurple.png" width="20" height="20" alt="Company Name"><div style="margin:-30px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
                  Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/Notification.png" width="22" height="22" alt="Company Name"><div style="margin:-35px 0px 0px -10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
                }
      
      
      
      
  
  
  
  
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_StampCardLoyaltyBadgeID', BadgeCount_Stamp); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_PointCardLoyaltyBadgeID', BadgeCount_Point); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_DiscountCardLoyaltyBadgeID', BadgeCount_Discount); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_ContestCardLoyaltyBadgeID', BadgeCount_Contest); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_EventCardLoyaltyBadgeID', BadgeCount_Event); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_VoucherCardLoyaltyBadgeID', BadgeCount_Voucher); 
  
  
  
  
  
      
             // AyohaRewardPointRewardRankingStore();
             // AyohaRewardContestLoadActiveStore();          
              //Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore_Front() 
          
  
  
         
          } else {
              console.error('Failed to load store data or no record found.');
              LoadingPanelHide();
          }
      }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
  }





  function CoreFunction_DashboardLoadInitialPerk() {
  



    
    _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.getProxy().setUrl(GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_DashboardInitialLoad');




    _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore loaded successfully, total records: ' + records.length);
    
              
                Ext.getCmp('Dashboard_MyAccount_MembershipPerksList').setStore(_DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore)
                
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




}



function CoreFunction_DashboardLoadByEnterpriseAccNoStorePerk() {
  



    
    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo',globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNo');




    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore loaded successfully, total records: ' + records.length);
    
              
                Ext.getCmp('Dashboard_MyAccount_MembershipPerksList').setStore(_DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore)
                
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




}







// FloatPanel_AyohaRewardVoucherDetailShow_MerchantPerks(
//     payload.VoucherName,
//     payload.VoucherImgPath,
//     payload.EntitledVoucherEndDate,
//     payload.DayLeft,
//     payload.VoucherCode,
//     payload.VoucherAmount,
//     payload.VoucherTermAndCondition,
//     payload.MembershipCardCode,
//     payload.EnterpriseCountStar,
//     payload.EnterpriseAccNo,
//     payload.TotalReviewer
//   );

//   FloatPanel_AyohaEnterpriseRewardItem_MembershipCardLoadByMembershipCardCodeStore({MembershipCardCode},{EnterpriseCountStar},{EnterpriseAccNo},{TotalReviewer});