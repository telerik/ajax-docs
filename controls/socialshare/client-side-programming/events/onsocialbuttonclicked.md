---
title: OnSocialButtonClicked
page_title: OnSocialButtonClicked | UI for ASP.NET AJAX Documentation
description: OnSocialButtonClicked
slug: socialshare/client-side-programming/events/onsocialbuttonclicked
tags: onsocialbuttonclicked
published: True
position: 7
---

# OnSocialButtonClicked



## 

__OnSocialButtonClicked__ - fires when one of the __RadSocialButtons__ is clicked. The event is subsequent to the [OnSocialButtonClicking]({%slug socialshare/client-side-programming/events/onsocialbuttonclicking%}) event and it cannot be canceled.

The event handler receives two parameters:

1. sender - the __RadSocialShare__ instance that fired the event.

1. eventArgs - event arguments that expose the following methods:

* get_dialog() - returns the client object of the displayed dialog.

* get_socialNetType() - returns the type of the clicked __RadSocialButton__.

* get_url() - returns the shared URL.

# See Also

 * [Client-side Events]({%slug socialshare/client-side-programming/events/overview%})
