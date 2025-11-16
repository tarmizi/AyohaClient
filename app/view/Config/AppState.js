Ext.define('ianMizi.view.Config.AppState', {
});




// // AppState.js
var AppState = {
    // FloatPanel_MerchantDetailPage: {
    //     cartTotalItemQuantity: 0,
    // },
    // FloatPanel_MerchantPerkPage: {
    //     cartTotalItemQuantity: 0,
    // },
    // FloatPanel_MainDashboard_PendingOrder: {
    //     TotalItemQuantity: 0,
    //     OrderStatus: null,
    //     // enterpriseAccNo: null,
    //     // subscriberAccNo: null
    // },
    FloatPanel_AyohaRewardVoucherDetail: {
        MembershipCardCode: null,
        EnterpriseCountStar: null,
        EnterpriseAccNo:null,
        TotalReviewer:null,
        MembershipCardName:null,
        MembershipCardFeePaymentCycle:null
    
    },



    FloatPanel_QrCodeScanner_Scanned: {
        QRCodeResult: null,
        QRCodeResult_PageType: null,
        MerchantTagline: null,
        EnterpriseAddress: null,
    
    },
  


    MainDashboard: {

        MainDashboardRelativeCheckInTime : null,
        MainDashboardAyohaRewardPointCheckIn :null,
        MainDashboardCheckInCount : null,
        MainDashboardBottomkMenuTabTag : null,
      
    
    },


    FloatPanel_AyohaReward:{
        AyohaRewardPointBalance : null,
        MembershipSince: null,
        MembershipTier: null,
        MembershipNo: null,
        imgRankStar : null,
        imgNextRankStar : null,
        TextRankStar : null,
        TextNextRankStar : null,        
        AyohaMember_NextRankPoint : null,
        isButtonEnterContestOrViewMyRanking : null,
        TapAndWinMainImg : null,
        isContestTapAndWinActive : null,
        AyohaTaAndWinTapBalance: null,
        AyohaVoucherCount : null,
       
    },

    LoginAyohaUser:{
        AyohaUserisUserVerified: null,
        AyohaVersion: null,
        AyohaUserGroupCode: null,
        AyohaUserPicProfile: null,
        AyohaUserAccountNames: null,
        CurrPhoneNumber: null,
        AyohaUserVerifiedString: null,
        AyohaUserEmail: null,
        AyohaUserKatalaluan: null,
        AyohaUserAccountNo: null,
        AccountNoDisplay: null,
    },



    AyohaMerchantReward:{
        StampPerks: 0,
        PointPerks: 0,
        VoucherPerks: 0,
        ContestPerks: 0,
        EventPerks: 0,
        DiscountPerks: 0,
        ContestJoined:0,
        EventJoined:0,
        PointPerksRedeemSubmitted:0,
        PointPerksRedeemApproved:0,
        StampedPerksRedeemSubmitted:0,
        StampedPerksRedeemApproved:0,
        StampedPerksRedeemRejected:0,
        VoucherPerksRedeem:0,
        DiscountRedeem:0,
        TotalEligiblePerks:0,
        TotalRedeemedPerks:0,
        TotalApprovedRedeemedPerks:0,
    }
};


