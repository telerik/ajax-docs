---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: socialshare/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## Global Control Properties


>caption The control's specific properties

|  __Name__  |  __Description__  |
| ------ | ------ |
| __DialogHeight__ |Get/Set the height of the social dialog popup|
| __DialogLeft__ |Get/Set the left of the social dialog popup. Default is center|
| __DialogTop__ |Get/Set the top of the social dialog. Default is center|
| __DialogWidth__ |Get/Set the width of the social dialog popup|
| __FacebookAppId__ |Specifies the fpAppId of your Facebook application|
| __GoogleAnalyticsUA__ |Specifies the web property ID for your Analytics account|
| __Height__ |Get/Set the height of the social share control|
| __HideIframesOnDialogMove__ |Get/Set whether IFRAMEs should be hidden while dialog (compact popup or send email) is moved. The default value is true|
| __Orientation__ |Get/Set orientation of the buttons|
| __TitleToShare__ |Get/Set the title of the shared message. The default value is the title of the current page or the url itself|
| __UrlToShare__ |Get/Set the url to share. The default value is empty string which results in sharing the page on which the button resides|
| __Width__ |Get/Set the width of the social share control|
| __YammerAppId__ |Specifies the AppId of your Yammer application|

## EmailSettings Properties


>caption Properties for EmailSettings Inner Tag. Mandatory for the SendEmail button to function

|  __Name__  |  __Description__  |
| ------ | ------ |
| __FromEmail__ |Get/Set the e-mail on behalf of which the message from the built-in E-mail form is sent|
| __SMTPServer__ |Get/Set the SMTP server that will service the requests|
| __Password__ |Get/Set the password for authenticating with the SMTP server|
| __UserName__ |Get/Set the user name for authenticating with the SMTP server|

## Setting Client-side Event Handlers Properties


>caption Properties for Setting Client-side Event Handlers

|  __Name__  |  __Description__  |
| ------ | ------ |
| __OnFacebookLike__ |Fires when the Facebook Like Standard button is clicked|
| __OnFacebookSend__ |Fires when the Facebook Send Standard button is clicked|
| __OnFacebookUnLike__ |Fires when the Facebook UnLike Standard button is clicked|
| __OnGooglePlusOneOff__ |Fires when the GooglePlus Standard button is clicked for disapproval|
| __OnGooglePlusOneOn__ |Fires when the GooglePlus Standard button is clicked for approval|
| __OnLinkedInShare__ |Fires when the LinkedIn Standard button is clicked for sharing the page in LinedIn|
| __OnSocialButtonClicked__ |Fires when one of the RadSocialButtons is clicked|
| __OnSocialButtonClicking__ |Fires when one of the RadSocialButtons is being clicked. Can be cancelled.|
| __OnTweet__ |Fires when the Tweet Standard button is clicked|

## RadSocialButton Properties


>caption Properties specific for the styled buttons. Override their global counterparts

|  __Name__  |  __Description__  |
| ------ | ------ |
| __CssClass__ |Get/Set custom CssClass for the social button|
| __CustomIconHeight__ |Get/Set the height of a button's custom icon|
| __CustomIconUrl__ |Get/Set the the url of a custom icon for the button|
| __CustomIconWidth__ |Get/Set the width of a button's custom icon|
| __DialogHeight__ |Get/Set the height of the social dialog popup|
| __DialogLeft__ |Get/Set the left of the social dialog popup. Default is center|
| __DialogTop__ |Get/Set the top of the social dialog. Default is center|
| __DialogWidth__ |Get/Set the width of the social dialog popup|
| __LabelText__ |Get/Set the the text of the button label.|
| __SocialNetType__ |Get/Set the the social net type of the button|
| __TitleToShare__ |Get/Set the title of the shared message. The default value is the title of the current page or the url itself|
| __ToolTip__ |Get/Set the tooltip of the button.|
| __UrlToShare__ |Get/Set the url to share. The default value is empty string which results in sharing the page on which the button resides|

## RadCompactButton Properties


>caption Properties, specific for the CompactPopup Button.

|  __Name__  |  __Description__  |
| ------ | ------ |
| __CssClass__ |Get/Set custom CssClass for the compact popup button|
| __CustomIconHeight__ |Get/Set the height of a button's custom icon|
| __CustomIconUrl__ |Get/Set the the url of a custom icon for the button|
| __CustomIconWidth__ |Get/Set the width of a button's custom icon|
| __DialogHeight__ |Get/Set the height of the compact popup|
| __DialogLeft__ |Get/Set the left of the compact popup. Default is center|
| __DialogTitle__ |Get/Set the title of the compact dialog|
| __DialogTop__ |Get/Set the top of the compact popup dialog. Default is center|
| __DialogWidth__ |Get/Set the width of the compact popup dialog|
| __LabelText__ |Get/Set the the text of the button label.|
| __ToolTip__ |Get/Set the tooltip of the button.|

## RadFacebookButton Properties


>caption Properties for the Facebook Standard button

|  __Name__  |  __Description__  |
| ------ | ------ |
| __ColorScheme__ |Get/Set the color sheme of the button|
| __Font__ |Get/Set the font for the button|
| __ButtonType__ |Get/Set the the social net type of the button|
| __ShowFaces__ |Get/Set whether profile pictures should be displayed|
| __Width__ |Get/Set the width of the button - used when annotation is displayed|
| __ButtonLayout__ |Get/Set the button layout|
| __ReferralsLabel__ |Get/Set the label for referrals|

## RadTwitterButton Properties


>caption Properties for the Twitter Standard button

|  __Name__  |  __Description__  |
| ------ | ------ |
| __CounterMode__ |Get/Set the counter mode for the button|

## RadGoogleButton Properties


>caption Properties for the Google Standard button

|  __Name__  |  __Description__  |
| ------ | ------ |
| __AnnotationType__ |Get/Set the annotation type of the button|
| __ButtonSize__ |Get/Set the size of the button|
| __Width__ |Get/Set the width of the button - used when annotation is displayed|

## RadLinkedInButton Properties


>caption Properties for the LinkedIn Standard button

|  __Name__  |  __Description__  |
| ------ | ------ |
| __CounterMode__ |Get/Set the counter mode for the button|
| __ShowZeroCount__ |Get/Set ShowZeroCount value for the button (if a counter should be shown if there are 0 shares)|

## RadYammerButton Properties


>caption Properties for the Yammer Standard button

|  __Name__  |  __Description__  |
| ------ | ------ |
| __ButtonType__ |Get/Set the type of the button|
| __YammerNetwork__ |Get/Set the network permalink|

## RadPinterestButton Properties


>caption Properties for the Pinterest Standard button

|  __Name__  |  __Description__  |
| ------ | ------ |
| __ButtonType__ |Get/Set the type of the button|
| __CounterMode__ (PinIt specific property)|Sets the state of the counter baloon.|
| __TitleToShare__ (PinIt specific property)|Sets the title of the pinned image.|
| __UrlToShare__ |

* PinIt button - Sets the URL of the image sent to the pinterest network

* Follow button - Sets URL of the Pinterest account which is to be followed|
| __FromUrl__ (PinIt specific property)|Sets a from link (the URL from which the image was pinned) in the Pin.|

# See Also

 * [Properties Enumerators]({%slug socialshare/server-side-programming/properties-enumerators%})

 * [Standard Buttons]({%slug socialshare/configuring-buttons/standard%})

 * [Styled Buttons]({%slug socialshare/configuring-buttons/styled%})
