---
title: Overview
page_title: Client-side Events Overview - RadSocialShare
description: Check our Web Forms article about Overview.
slug: socialshare/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Client-side Events Overview



The **RadSocialShare** control offers many client-side events that you can use together with its [client-side API]({%slug socialshare/client-side-programming/radsocialshare-object%}) to control its behavior. These events are set through a number of properties whose value is the name of a JavaScript function that executes when the specific client-side event occurs. The available events are are listed below.

>tip When the JavaScript function is called, it is supplied with two arguments: the sender (i.e., the RadSocialShare instance that fired the event), and an event arguments object (which may or may not contain methods, depending on the event).
>


* [OnFacebookLike]({%slug socialshare/client-side-programming/events/onfacebooklike%}) - fires when the Facebook Like standard button is clicked.

* [OnFacebookSend]({%slug socialshare/client-side-programming/events/onfacebooksend%}) - fires when the Facebook Send standard button is clicked.

* [OnFacebookUnLike]({%slug socialshare/client-side-programming/events/onfacebookunlike%}) - fires when the Facebook UnLike standard button is clicked.

* [OnGooglePlusOneOff]({%slug socialshare/client-side-programming/events/ongoogleplusoneoff%}) - fires when the GooglePlus standard button is clicked for disapproval.

* [OnGooglePlusOneOn]({%slug socialshare/client-side-programming/events/ongoogleplusoneon%}) - fires when the GooglePlus standard button is clicked for approval.

* [OnLinkedInShare]({%slug socialshare/client-side-programming/events/onlinkedinshare%}) - fires when the LinkedIn standard button is clicked.

* [OnSocialButtonClicked]({%slug socialshare/client-side-programming/events/onsocialbuttonclicked%}) - fires when one of the **RadSocialButtons** (styled button) is clicked. The event is subsequent to the [OnSocialButtonClicking]({%slug socialshare/client-side-programming/events/onsocialbuttonclicking%}) event and it cannot be canceled.

* [OnSocialButtonClicking]({%slug socialshare/client-side-programming/events/onsocialbuttonclicking%}) - fires when one of the **RadSocialButtons** (styled button) is clicked. The event is raised before the [OnSocialButtonClicked]({%slug socialshare/client-side-programming/events/onsocialbuttonclicked%}) event and it can be canceled.

* [OnTweet]({%slug socialshare/client-side-programming/events/ontweet%}) - fires when the tweet is posted.

# See Also

 * [OnFacebookLike]({%slug socialshare/client-side-programming/events/onfacebooklike%})

 * [OnFacebookSend]({%slug socialshare/client-side-programming/events/onfacebooksend%})

 * [OnFacebookUnLike]({%slug socialshare/client-side-programming/events/onfacebookunlike%})

 * [OnGooglePlusOneOff]({%slug socialshare/client-side-programming/events/ongoogleplusoneoff%})

 * [OnGooglePlusOneOn]({%slug socialshare/client-side-programming/events/ongoogleplusoneon%})

 * [OnLinkedInShare]({%slug socialshare/client-side-programming/events/onlinkedinshare%})

 * [OnSocialButtonClicked]({%slug socialshare/client-side-programming/events/onsocialbuttonclicked%})

 * [OnSocialButtonClicking]({%slug socialshare/client-side-programming/events/onsocialbuttonclicking%})

 * [OnTweet]({%slug socialshare/client-side-programming/events/ontweet%})
