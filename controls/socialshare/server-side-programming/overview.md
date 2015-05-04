---
title: Overview
page_title: Server-side Programming Overview | RadSocialShare for ASP.NET AJAX Documentation
description: Overview
slug: socialshare/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## Global Control Properties


>caption The control's specific properties

|  **Name**  |  **Description**  |
| ------ | ------ |
| **DialogHeight** |Get/Set the height of the social dialog popup|
| **DialogLeft** |Get/Set the left of the social dialog popup. Default is center|
| **DialogTop** |Get/Set the top of the social dialog. Default is center|
| **DialogWidth** |Get/Set the width of the social dialog popup|
| **FacebookAppId** |Specifies the fpAppId of your Facebook application|
| **GoogleAnalyticsUA** |Specifies the web property ID for your Analytics account|
| **Height** |Get/Set the height of the social share control|
| **HideIframesOnDialogMove** |Get/Set whether IFRAMEs should be hidden while dialog (compact popup or send email) is moved. The default value is true|
| **Orientation** |Get/Set orientation of the buttons|
| **TitleToShare** |Get/Set the title of the shared message. The default value is the title of the current page or the url itself|
| **UrlToShare** |Get/Set the url to share. The default value is empty string which results in sharing the page on which the button resides|
| **Width** |Get/Set the width of the social share control|
| **YammerAppId** |Specifies the AppId of your Yammer application|

## EmailSettings Properties


>caption Properties for EmailSettings Inner Tag. Mandatory for the SendEmail button to function

|  **Name**  |  **Description**  |
| ------ | ------ |
| **FromEmail** |Get/Set the e-mail on behalf of which the message from the built-in E-mail form is sent|
| **SMTPServer** |Get/Set the SMTP server that will service the requests|
| **Password** |Get/Set the password for authenticating with the SMTP server|
| **UserName** |Get/Set the user name for authenticating with the SMTP server|

## Setting Client-side Event Handlers Properties


>caption Properties for Setting Client-side Event Handlers

|  **Name**  |  **Description**  |
| ------ | ------ |
| **OnFacebookLike** |Fires when the Facebook Like Standard button is clicked|
| **OnFacebookSend** |Fires when the Facebook Send Standard button is clicked|
| **OnFacebookUnLike** |Fires when the Facebook UnLike Standard button is clicked|
| **OnGooglePlusOneOff** |Fires when the GooglePlus Standard button is clicked for disapproval|
| **OnGooglePlusOneOn** |Fires when the GooglePlus Standard button is clicked for approval|
| **OnLinkedInShare** |Fires when the LinkedIn Standard button is clicked for sharing the page in LinedIn|
| **OnSocialButtonClicked** |Fires when one of the RadSocialButtons is clicked|
| **OnSocialButtonClicking** |Fires when one of the RadSocialButtons is being clicked. Can be cancelled.|
| **OnTweet** |Fires when the Tweet Standard button is clicked|

## RadSocialButton Properties


>caption Properties specific for the styled buttons. Override their global counterparts

|  **Name**  |  **Description**  |
| ------ | ------ |
| **CssClass** |Get/Set custom CssClass for the social button|
| **CustomIconHeight** |Get/Set the height of a button's custom icon|
| **CustomIconUrl** |Get/Set the the url of a custom icon for the button|
| **CustomIconWidth** |Get/Set the width of a button's custom icon|
| **DialogHeight** |Get/Set the height of the social dialog popup|
| **DialogLeft** |Get/Set the left of the social dialog popup. Default is center|
| **DialogTop** |Get/Set the top of the social dialog. Default is center|
| **DialogWidth** |Get/Set the width of the social dialog popup|
| **LabelText** |Get/Set the the text of the button label.|
| **SocialNetType** |Get/Set the the social net type of the button|
| **TitleToShare** |Get/Set the title of the shared message. The default value is the title of the current page or the url itself|
| **ToolTip** |Get/Set the tooltip of the button.|
| **UrlToShare** |Get/Set the url to share. The default value is empty string which results in sharing the page on which the button resides|

## RadCompactButton Properties


>caption Properties, specific for the CompactPopup Button.

|  **Name**  |  **Description**  |
| ------ | ------ |
| **CssClass** |Get/Set custom CssClass for the compact popup button|
| **CustomIconHeight** |Get/Set the height of a button's custom icon|
| **CustomIconUrl** |Get/Set the the url of a custom icon for the button|
| **CustomIconWidth** |Get/Set the width of a button's custom icon|
| **DialogHeight** |Get/Set the height of the compact popup|
| **DialogLeft** |Get/Set the left of the compact popup. Default is center|
| **DialogTitle** |Get/Set the title of the compact dialog|
| **DialogTop** |Get/Set the top of the compact popup dialog. Default is center|
| **DialogWidth** |Get/Set the width of the compact popup dialog|
| **LabelText** |Get/Set the the text of the button label.|
| **ToolTip** |Get/Set the tooltip of the button.|

## RadFacebookButton Properties


>caption Properties for the Facebook Standard button

|  **Name**  |  **Description**  |
| ------ | ------ |
| **ColorScheme** |Get/Set the color sheme of the button|
| **Font** |Get/Set the font for the button|
| **ButtonType** |Get/Set the the social net type of the button|
| **ShowFaces** |Get/Set whether profile pictures should be displayed|
| **Width** |Get/Set the width of the button - used when annotation is displayed|
| **ButtonLayout** |Get/Set the button layout|
| **ReferralsLabel** |Get/Set the label for referrals|

## RadTwitterButton Properties


>caption Properties for the Twitter Standard button

|  **Name**  |  **Description**  |
| ------ | ------ |
| **CounterMode** |Get/Set the counter mode for the button|

## RadGoogleButton Properties


>caption Properties for the Google Standard button

|  **Name**  |  **Description**  |
| ------ | ------ |
| **AnnotationType** |Get/Set the annotation type of the button|
| **ButtonSize** |Get/Set the size of the button|
| **Width** |Get/Set the width of the button - used when annotation is displayed|

## RadLinkedInButton Properties


>caption Properties for the LinkedIn Standard button

|  **Name**  |  **Description**  |
| ------ | ------ |
| **CounterMode** |Get/Set the counter mode for the button|
| **ShowZeroCount** |Get/Set ShowZeroCount value for the button (if a counter should be shown if there are 0 shares)|

## RadYammerButton Properties


>caption Properties for the Yammer Standard button

|  **Name**  |  **Description**  |
| ------ | ------ |
| **ButtonType** |Get/Set the type of the button|
| **YammerNetwork** |Get/Set the network permalink|

## RadPinterestButton Properties


>caption Properties for the Pinterest Standard button

|  **Name**  |  **Description**  |
| ------ | ------ |
| **ButtonType** |Get/Set the type of the button|
| **CounterMode** (PinIt specific property)|Sets the state of the counter baloon.|
| **TitleToShare** (PinIt specific property)|Sets the title of the pinned image.|
| **UrlToShare** | For a **PinIt** button - Sets the URL of the image sent to the Pinterest network. For a **Follow** button - Sets URL of the Pinterest account which is to be followed.|
| **FromUrl** (PinIt specific property)|Sets a from link (the URL from which the image was pinned) in the Pin.|

# See Also

 * [Properties Enumerators]({%slug socialshare/server-side-programming/properties-enumerators%})

 * [Standard Buttons]({%slug socialshare/configuring-buttons/standard%})

 * [Styled Buttons]({%slug socialshare/configuring-buttons/styled%})
