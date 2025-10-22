
Ext.define('ianMizi.view.Membership.FloatPanel_Membership_CheckInPage_Confirmed', {

});



var _FloatPanel_Membership_CheckInPage_Confirmed;


var isFloatPanel_Membership_CheckInPage_ConfirmedOpen = 'N';






// function FloatPanel_Membership_CheckInPage_Confirmed() {

//     _FloatPanel_Membership_CheckInPage_Confirmed =
//     Ext.create('Ext.Container', {
//         zIndex: 95,
//         xtype: 'container',
//         height: 530,
//         //height: '100%',
//         width: '90%',
//         id: 'FloatPanel_Membership_CheckInPage_ConfirmedID',
//         draggable: false,

//         styleHtmlContent: true,

//         centered: true,
//         //bottom: 64,
//         // zIndex: 100,
//        // modal: true,
//         // hideOnMaskTap: true,
//         // width         : Ext.os.is.Phone ? '92%' : 420,
//         // height        : Ext.os.is.Phone ? 460 : 500,
//       //  cls           : 'ayo-modal-card',
//         layout: {
//           type: 'fit'
//         //   type: 'vbox',
//         //   pack: 'start',
//         //   align: 'center'
//         },
//         showAnimation: {
//             type: 'popIn',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         hideAnimation: {
            


//             type: 'popOut',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         style: 'border:1px grey solid;background-color:white;border-radius:10px',
//        // style: 'background-color:white;',
//        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      
//         items: [
           

           
//             {
//                 xtype: 'container',
//                 width: '100%',
//                 height: '100%',
//                 id: 'FloatPanel_Membership_CheckInPage_ConfirmedListContentID',
//                 layout: {
//                     type: 'vbox',
//                     pack: 'start',
//                     align: 'center'

//                 },
//                 style: 'background-color:transparent',

//                 items: [
//                     {
//                         xtype: 'container',
//                         cls  : 'ayo-modal-head',
//                         items: [
//                             { xtype:'component', html:'<div class="ayo-modal-icon">🎁</div>' },
                           
//                         ]
//                     },


//                     {
//                         margin: '-20 0 0 0',
//                         html: '<div style="background: transparent;width:100%;font-size: 16px;font-weight:normal;black:white;text-align:center;" >Ayoha Reward Membership</div>',
//                     },
//                     {
//                         margin: '0 0 0 0',
//                         html: '<div style="background: transparent;width:100%;font-size: 22px;font-weight:bold;black:white;text-align:justify;" >Check-In Point Loyalty</div>',
//                     },
//                     {  
//                         xtype: 'container',
//                         width: '90%',
//                         height: 1,
//                         style: 'background-color: #ECF0F1;',

//                     },
//                     {  
//                         xtype: 'container',
//                         width: '100%',
//                         height: 60,

//                     },
//                     //{ xtype:'component', itemId:'title', html:'<div class="ayo-title">Check-In Point Loyalty</div>' },
//                     {
//                         xtype: 'container',
//                         width: '100%',
//                         height: 40,
//                       //  id: 'containerFloatPanel_AyohaStore_CompanyInfo',


//                         margin: '0 0 0 0',
//                         //style: {
//                         //    // background: '#D25959',
//                         //    background: 'rgba(76, 175, 80, 0.3);',
//                         //    // border: '2px'
//                         //},
//                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                         style: 'background-color:transparent',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'center',
//                             align: 'center',
//                         },
//                         items: [
//                          {
//                              margin: '0 0 0 0',
//                              id: 'htmlFloatPanel_Membership_CheckInPage_Confirmed_CompanyLogo',
//                              //badgeText: "2",
//                              //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
//                              html: '<div ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="80" height="65" alt="Company Name"></div>',

//                          },
//                                {

//                                    id: 'htmlFloatPanel_Membership_CheckInPage_Confirmed_CompanyInfo_Name',
//                                    width: '100%',
//                                    html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">IanMizi Technology Sdn Bhd</div>',


//                                },
//                                 // {

//                                 //     id: 'htmlFloatPanel_AyohaStore_CompanyInfo_Line',
//                                 //     width: '100%',
//                                 //     margin: '0 0 0 0',
//                                 //     html: '<div style="background-color:black;text-align: center;font-size:14px;width:80%;font-weight:bold;height:1px"></div>',


//                                 // },
//                                 {

//                                     id: 'htmlFloatPanel_Membership_CheckInPage_Confirmed_CompanyInfo_Tagline',

//                                     width: '100%',
//                                     // iconCls: 'list',
//                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
//                                     html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',


//                                 },
                                

//                         ]
//                     },
//                     {  
//                         xtype: 'container',
//                         width: '100%',
//                         height: 50,

//                     },
//                     {
//                         xtype: 'component',
//                         itemId:'desc',
//                        // margin: '20 0 0 0',
//                         cls  : 'ayo-desc',
//                         styleHtmlContent:true,
//                         html : 'Get <b>10 FREE Ayoha Points</b> just for visiting today. ' +
//                                'You can claim this reward up to <b>3 times per day!</b>'
//                     },
//                     // {
//                     //     xtype: 'button',
//                     //     itemId:'cta',
//                     //     cls  : 'ayo-cta',
//                     //     text : 'Tap to Check-In',
//                     //     handler: function(btn){
//                     //         FloatPanel_Membership_CheckInPage_ConfirmedHide();
//                     //     }
//                     // },
//                     {  
//                         xtype: 'container',
//                         width: '100%',
//                         height: 20,

//                     },
//                     {
//                         //xtype: 'button',
//                         ////  align: 'stretch',

//                         //ui: 'plain',
//                         width: '70%',
//                         margin:'0 0 0 0',
//                         height: 50,
//                         //id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard',
//                         //hidden: true,
//                         //<br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>get 10 Ayoha Points!</b></div>
//                      // html:'<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:150px;width:150px"><div style="color:white;text-align: center;font-size:28px;width:100%;margin:70px 0px 0px 0px;"><b>Check-In</b></div></div>',
//                       html: '<button onclick="FloatPanel_Membership_CheckInPage_ConfirmedHide()" class="ayo-cta">Tap to Check-In</button>',
//                         //handler: function () {
//                         //    getMembershipCard();
//                         //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
//                         //},


//                     },
//                     {
//                         xtype: 'component',
//                         styleHtmlContent:true,
//                         html : '<div onclick="FloatPanel_Membership_CheckInPage_ConfirmedHide()" class="ayo-later">Maybe Later</div>'
//                     }
//                 ],
//             },







          


//         ]





//     });
//     return _FloatPanel_Membership_CheckInPage_Confirmed;



// }





// function FloatPanel_Membership_CheckInPage_Confirmed() {

//     _FloatPanel_Membership_CheckInPage_Confirmed =
//     Ext.create('Ext.Container', {
//         zIndex: 100,
//         xtype: 'container',
//        // height: 530,
//         height: '100%',
//         width: '100%',
//         id: 'FloatPanel_Membership_CheckInPage_ConfirmedID',
//       //  draggable: false,

//         styleHtmlContent: true,

//         centered: true,
//         //bottom: 64,
//         // zIndex: 100,
//         modal: false,
//         // hideOnMaskTap: true,
//         //left: 10,
//         //top:10,
//         layout: {
//             type: 'vbox',
//             pack: 'center',
//                     align: 'center'
//         },
//         showAnimation: {
//             type: 'popIn',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         hideAnimation: {
            


//             type: 'popOut',
//             duration: 250,
//             easing: 'ease-out'
//         },
//        // style: 'border:1px grey solid;background-color:white;border-radius:10px',
//       //  style: 'background-color:rgba(255,255,255, 0.5);border-radius: 0px 0px 0px 0px;',
//         style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
//        // style: 'background-color:white;',
//        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
      
//        // ... inside your main Sencha container config ...
// items: [
//     {
//         xtype: 'container',
//         cls  : 'confirmation-modal-head', // New class for the head
//         items: [
//             // The icon for the confirmed page (coins)
//             { xtype:'component', html:'<div class="confirmation-modal-icon"><img src="https://i.imgur.com/your-coins-icon.png" alt="Coins" class="coins-icon"></div>' },
//         ]
//     },
//     {
//         xtype: 'component',
//         cls: 'confirmation-title-text', // New class for the main title
//         html: 'Check-In Confirmed!',
//         margin: '5 0 0 0', // Adjust margin to push it down from icon
//     },
//     {
//         xtype: 'component',
//         cls: 'confirmation-subtitle-text', // New class for the subtitle
//         html: 'Thanks for visiting. Here are your points.',
//         margin: '5 0 25 0', // Space above points display
//     },
//     {
//         xtype: 'container',
//         cls: 'confirmation-points-display-container', // New container for points
//         items: [
//             {
//                 xtype: 'component',
//                 cls: 'confirmation-points-value', // New class for point value
//                 html: '+10', // Dynamically update this
//             },
//             {
//                 xtype: 'component',
//                 cls: 'confirmation-points-label', // New class for point label
//                 html: 'Ayoha Points Earned',
//             }
//         ]
//     },
//     {
//         xtype: 'component',
//         cls: 'confirmation-progress-text', // New class for progress text
//         html: 'Today\'s Check-ins: 2 of 3', // Dynamically update this
//         margin: '20 0 10 0', // Space above progress bar
//     },
//     {
//         xtype: 'container',
//         cls: 'confirmation-progress-bar-wrapper', // Wrapper for the progress bar
//         width: '90%', // Adjust width as needed
//         items: [
//             {
//                 xtype: 'component',
//                 cls: 'confirmation-progress-bar', // The actual progress bar
//                 // Dynamic width will be set via JS on the style attribute or a Sencha style property
//                 html: '<div style="width: 66.6%;"></div>', // Example: 2 of 3 is 66.6%
//             }
//         ]
//     },
//     {
//         xtype: 'container', // Spacer container
//         height: 30, // Space below progress bar before buttons
//     },
//     {
//         width: '80%', // Width for the primary button
//         height: 50,
//         html: '<button onclick="viewMyAyohaPoints()" class="confirmation-cta-button">View my Ayoha Point!</button>',
//     },
//     {
//         xtype: 'component',
//         styleHtmlContent: true,
//         html: '<div onclick="continueShopping()" class="confirmation-secondary-button">Continue Shopping</div>'
//     }
// ]
// // ... rest of your main Sencha container config ...




//     });
//     return _FloatPanel_Membership_CheckInPage_Confirmed;



// }



function FloatPanel_Membership_CheckInPage_Confirmed() {

    _FloatPanel_Membership_CheckInPage_Confirmed =
    Ext.create('Ext.Container', {
        zIndex: 100,
        xtype: 'container',
        height: '100%', // This is the FULL-SCREEN BACKDROP
        width: '100%',  // This is the FULL-SCREEN BACKDROP
        id: 'FloatPanel_Membership_CheckInPage_ConfirmedID',
        styleHtmlContent: true,
        centered: true,
        
        // --- START: Key Changes for Backdrop ---
        modal: false, // Use Sencha's modal handling
        hideOnMaskTap: false, // Prevent closing on tap
        style: 'background-color:rgba(0, 0, 0, 0.5);', // Style for the BACKDROP
        layout: {
            type: 'vbox',
            pack: 'center',  // Center the white box vertically
            align: 'center'  // Center the white box horizontally
        },
        // --- END: Key Changes for Backdrop ---

        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        
        items: [
            // --- NEW: This is the white modal box ---
            {
                xtype: 'container',
                width: '100%',         // The white box will be 90% of the screen
                maxWidth: '400px',    // ...but no wider than 380px
                id: 'FloatPanel_Membership_CheckInPage_ConfirmedListContentID', // Your original content ID
                
                // --- Style for the WHITE modal box ---
                style: 'background-color:white; border-radius:16px; overflow:visible !important; padding-top: 50px; box-shadow: 0 5px 20px rgba(0,0,0,0.2);',

                layout: {
                    type: 'vbox',
                    align: 'center' // Center all items *inside* the white box
                },

                // --- All your original items go INSIDE this new container ---
                items: [
                    {
                        xtype: 'container',
                        cls: 'confirmation-modal-head', // New class for the head
                        width: '100%', // Ensure it's full width for icon centering
                        items: [
                            // The icon for the confirmed page (coins)
                            { xtype: 'component', html: '<div class="confirmation-modal-icon"><img src="resources/icons/ayohapointcoint03.png" alt="Coins" class="coins-icon"></div>' },
                        ]
                    },
                    {
                        xtype: 'component',
                        cls: 'confirmation-title-text', // New class for the main title
                        html: 'Check-In Confirmed!',
                        margin: '5 0 0 0', // Adjusted margin
                    },
                    {
                        xtype: 'component',
                        cls: 'confirmation-subtitle-text', // New class for the subtitle
                        html: 'Thanks for visiting. Here are your points.',
                        margin: '5 0 25 0', // Space above points display
                    },
                    {
                        xtype: 'container',
                        cls: 'confirmation-points-display-container', // New container for points
                        width: '80%', // 90% width *of the white box*
                        items: [
                            {
                                xtype: 'component',
                                cls: 'confirmation-points-value', // New class for point value
                                html: '+10', // Dynamically update this
                            },
                            {
                                xtype: 'component',
                                cls: 'confirmation-points-label', // New class for point label
                                html: 'Ayoha Points Earned',
                            }
                        ]
                    },
                    {
                        xtype: 'component',
                        cls: 'confirmation-progress-text', // New class for progress text
                        html: 'Today\'s Check-ins: 2 of 3', // Dynamically update this
                        margin: '20 0 10 0', // Space above progress bar
                    },
                    {
                        xtype: 'container',
                        cls: 'confirmation-progress-bar-wrapper', // Wrapper for the progress bar
                        width: '80%', // 90% width *of the white box*
                        items: [
                            {
                                xtype: 'component',
                                cls: 'confirmation-progress-bar', // The actual progress bar
                             //   html: '<div style="width: 66.6%;"></div>', // Example: 2 of 3




                                html:'<div class="checkin-progress-container">'+
                                '<div id="checkin-progress-text" class="progress-text"></div>'+
                            
                                '<div class="progress-bar-container">'+
                                    '<div id="checkin-progress-fill" class="progress-bar-fill"></div>'+
                                '</div>'+
                            '</div>'
                            }
                        ]
                    },
                    {
                        xtype: 'container', // Spacer container
                        height: 30, // Space below progress bar before buttons
                    },
                    {
                        width: '80%', // 80% width *of the white box*
                        height: 50,
                        html: '<button onclick="viewMyAyohaPoints()" class="confirmation-cta-button">View My Ayoha Point!</button>',
                    },
                    {
                        xtype: 'component',
                        styleHtmlContent: true,
                        margin: '0 0 20 0', // Add some space at the bottom
                        html: '<div onclick="FloatPanel_Membership_CheckInPage_ConfirmedHide()" class="confirmation-secondary-button">Continue Shopping</div>'
                    }
                ]
                // --- End of original items ---
            }
            // --- End of new white modal box ---
        ]
    });

    return _FloatPanel_Membership_CheckInPage_Confirmed;
}














function FloatPanel_Membership_CheckInPage_ConfirmedShow(){



    Ext.Viewport.remove(_FloatPanel_Membership_CheckInPage_Confirmed);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_CheckInPage_Confirmed());
    this.overlay.show();
    AddRoutePages("FloatPanel_Membership_CheckInPage_ConfirmedHide()");
    isFloatPanel_Membership_CheckInPage_ConfirmedOpen = 'Y';





   

 
    // Ext.getCmp('htmlFloatPanel_Membership_CheckInPage_Confirmed_CompanyLogo').setHtml('<div><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" style="width:78px;height:78px;background-color:transparent;border:2px none white" alt="Company Name"></div>');
    // Ext.getCmp('htmlFloatPanel_Membership_CheckInPage_Confirmed_CompanyInfo_Name').setHtml('<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    // Ext.getCmp('htmlFloatPanel_Membership_CheckInPage_Confirmed_CompanyInfo_Tagline').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + FloatPanel_AyohaStore_getEnterpriseTagLine() + '</div>');
}



function FloatPanel_Membership_CheckInPage_ConfirmedHide() {
    // FloatPanel_AyohaMerchantInfo_PointCardLoyaltyProgram_AddCardHide();
   
    if (isFloatPanel_Membership_CheckInPage_ConfirmedOpen == "Y") {
        _FloatPanel_Membership_CheckInPage_Confirmed.hide(); isFloatPanel_Membership_CheckInPage_ConfirmedOpen = 'N';
        RemovePages("FloatPanel_Membership_CheckInPage_ConfirmedHide()");
    }
  
}






/**
 * Updates the check-in progress bar and text.
 *
 * @param {number} currentCheckIns - The number of check-ins completed today.
 * @param {number} maxCheckIns - The maximum number of check-ins allowed per day.
 * @param {string} textElementId - The ID of the HTML element for the text.
 * @param {string} barElementId - The ID of the HTML element for the progress bar fill.
 */
function updateCheckInProgress(currentCheckIns, maxCheckIns, textElementId, barElementId) {
    
    // 1. Find the HTML elements by their IDs
    const textElement = document.getElementById(textElementId);
    const barElement = document.getElementById(barElementId);

    if (!textElement || !barElement) {
        console.error("Error: Could not find progress bar elements.");
        return;
    }

    // 2. Sanitize inputs to prevent errors
    let current = Math.max(0, currentCheckIns);
    let max = Math.max(1, maxCheckIns); // Avoid division by zero
    current = Math.min(current, max);   // Current can't be more than max

    // 3. Calculate the percentage
    const percentage = (current / max) * 100;

    // 4. Update the text content
    textElement.textContent = `Today's Check-ins: ${current} of ${max}`;

    // 5. Update the progress bar's width
    barElement.style.width = percentage + '%';
}