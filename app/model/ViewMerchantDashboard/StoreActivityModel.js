Ext.define('ianMizi.model.ViewMerchantDashboard.StoreActivityModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'AccountNo',
            'UserPhoto',
            'AccountName',
            'CampaignCode',
            'UpdatedDate',
            'enterpriseAccNo',
            'TblActivity',
            'LoyaltyActivity',
            'RelativeActivityTime',
            'UpdatedTime',
            'AyohaRewardPointCheckIn',
            {
                name: 'badge',
                convert: function (value, record) {
              
                  var str = (record.get('TblActivity') || (record.raw && record.raw.TblActivity) || '').trim();
              
                  var map = {
                    'Check-In Status': 'pin',
                    'Memberships Status': 'card',
                    'Stamp Collected': 'stamp',
                    'Point Collected': 'point',
                    'Contest Status': 'contest',
                    'Event Respond': 'event',
                    'Ayoha Store': 'store'
                  };
              
                  return map[str] || ''; // ✅ penting: return string, bukan undefined
                }
              },
              {
                name: 'ActivityName',
                convert: function (value, record) {
     
                    var _value;
                    var str = record.get('TblActivity');
                    if(str=="Check-In Status"){
                        _value = 'Checked in';
                        return _value;
                    } if(str=="Memberships Status"){
                        _value = 'Joined membership 🎉';
                        return _value;
                    }
                    if(str=="Stamp Collected"){
                        _value = 'Collected a stamp';
                        return _value;
                    }  if(str=="Point Collected"){
                        _value = 'Earned points';
                        return _value;
                    }
                    if(str=="Contest Status"){
                        _value = 'Joined a contest';
                        return _value;
                    }
                    if(str=="Event Respond"){
                        _value = 'Responded to an event';
                        return _value;
                    }
                    
                    if(str=="Ayoha Store"){
                        _value = 'Purchased an item';
                        return _value;
                    }
                    
                    else{
                      _value = 'No Name';
                    }
                  
                    
                }
            },
            {
                name: 'ActivitySub',
                convert: function (value, record) {
     
                    var _value;
                    var str = record.get('TblActivity');
                    var LoyaltyActivity=record.get('LoyaltyActivity');
                    var AyohaRewardPointCheckIn=record.get('AyohaRewardPointCheckIn');
                 
                    
                    if(str=="Check-In Status"){
                        _value =AyohaRewardPointCheckIn+ 'A.pts';
                        return _value;
                    } if(str=="Memberships Status"){
                        _value =LoyaltyActivity;
                        return _value;
                    }
                    if(str=="Stamp Collected"){
                        _value =LoyaltyActivity;
                        return _value;
                    }  if(str=="Point Collected"){
                        _value = LoyaltyActivity;
                        return _value;
                    }
                    if(str=="Contest Status"){
                        _value = LoyaltyActivity;
                        return _value;
                    }
                    if(str=="Event Respond"){
                        _value = LoyaltyActivity;
                        return _value;
                    }
                    
                    if(str=="Ayoha Store"){
                        _value = LoyaltyActivity;
                        return _value;
                    }
                    
                    else{
                      _value = 'No Name';
                    }
                  
                    
                }
            },
        ]
    }
});