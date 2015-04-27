---
title: OnSocialButtonClicked
page_title: OnSocialButtonClicked | RadSocialShare for ASP.NET AJAX Documentation
description: OnSocialButtonClicked
slug: socialshare/client-side-programming/events/onsocialbuttonclicked
tags: onsocialbuttonclicked
published: True
position: 7
---

# OnSocialButtonClicked



## 

**OnSocialButtonClicked** - fires when one of the **RadSocialButtons** is clicked. The event is subsequent to the [OnSocialButtonClicking]({%slug socialshare/client-side-programming/events/onsocialbuttonclicking%}) event and it cannot be canceled.

The event handler receives two parameters:

1. sender - the **RadSocialShare** instance that fired the event.

1. eventArgs - event arguments that expose the following methods:

* get_dialog() - returns the client object of the displayed dialog.

* get_socialNetType() - returns the type of the clicked **RadSocialButton**.

* get_url() - returns the shared URL.

# See Also

 * [Client-side Events]({%slug socialshare/client-side-programming/events/overview%})
