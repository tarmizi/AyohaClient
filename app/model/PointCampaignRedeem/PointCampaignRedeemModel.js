Ext.define('ianMizi.model.PointCampaignRedeem.PointCampaignRedeemModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             'ID',
      'ImgPath',
      'AyohaUserGroupCode',
      'ItemName',
      'ItemCode',
      'ItemPoint',
      'ItemImg',
      'RowStatus',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'Remarks',
      'ItemPrizePriceCost',
      'AyohaUserGroupCategory',
      'PointCampaignCode',
      'EnterpriseAccNo',
      'MembershipCardCode',
      'EnterpriseName',
      'CountRow',
      'EndDate',
      'StartDate',
      'PointCampaignName',
      'EnterprisesLogo',
      'isRequiredStartEndDate',
      'isCampaignExpired',
      'CampaignDayLeft',
      'AdvertisementTitle',
      {
        name: 'ModifiedItemImg',
        convert: function (value, record) {
            var _value;
            var StampContent = record.get('ImgPath');          
                _value = '<img src="' + StampContent + '" width="70px" height="70px" alt="Company Name">';  
            return _value
        }
    },       
        ]
    }
});



