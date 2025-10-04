Ext.define('ianMizi.model.MerchantLoyaltyCampaign.StampCardModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'StampCardCode',
                  'StampCampaignCode',
                  'StampContent',
                  'StampContentSequence',
                  'StampContentNote',
                  'StampCardType',
                  'EnterpriseAccNo',
                  'CreatedByAccNo',
                  'CreatedBy',
                  'CreatedDate',
                  'ModifiedBy',
                  'ModifiedDate',
                  'RowStatus',
                  'TextOne',
                  'TextTwo',
                  'DivContent',
                  'DivContentTextTwo',
                  'StampContentDefaultTemplateID',
                  'ShowHide',
                  'ImgContentName',
                  'isRedeemItem',
                  'StampedStatus',
                  'SubscriberAccNo',
                  'StampedBy',
                  'StampedDate',
                  'StampedTime',
                  'EnterpriseLogo',
                  'EnterpriseName',
                  'CountRow',
                  'EndDate',
                  'StampRuleRemarks',
                  'IsStampRulePopUp',
                  'StartDate',
                  'StampCampaignName',
                  'NextRedeemItemStampContent',
                  'NextRedeemItemStampContentNote',
                  'CountStampCardRowShow',
                  'CountStampCardRowYES',
                  'CountStampYES',
                  'EnterprisesLogo',
                  'EnterpriseTagLine',
                  'isRequiredStartEndDate',
                  'isCampaignExpired',
                  'CampaignDayLeft',
                  'AdvertisementTitle',
                  'MembershipCardCode',
                  'CountStar',
                  'CountReviewer',
                  'SearchCol',
                  'MembershipCardFeePaymentCycle',              
                     {
                         name: 'ModifiedStampContent',
                         convert: function (value, record) {
                             var _value;
                           
                             _value = record.get('StampContent');  

                             return _value
                         }
                     },
                     {
                         name: 'ModifiedCampaignType',
                         convert: function (value, record) {
                             var _value;
                             var IsStampRulePopUp = record.get('IsStampRulePopUp');
                             if (IsStampRulePopUp == "POINTLOYALTYCARD") {
                                 _value = 'Point Loyalty Campaign';
                                 return _value
                             } if (IsStampRulePopUp == "YES" || IsStampRulePopUp == "NO") {
                                 _value = 'Stamp Loyalty Campaign';
                                 return _value
                             }
                             else {
                                 _value = 'Unknown Loyalty Campaign';
                                 return _value
                             }



                           
                         }
                     },
        ]
    }
});

