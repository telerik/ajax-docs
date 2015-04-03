---
title: OnSocialButtonClicking
page_title: OnSocialButtonClicking | UI for ASP.NET AJAX Documentation
description: OnSocialButtonClicking
slug: socialshare/client-side-programming/events/onsocialbuttonclicking
tags: onsocialbuttonclicking
published: True
position: 8
---

# OnSocialButtonClicking



## 

__OnSocialButtonClicking__ - fires when one of the __RadSocialButtons__ is clicked. The event is raised before the [OnSocialButtonClicked]({%slug socialshare/client-side-programming/events/onsocialbuttonclicked%}) event and it can be canceled.

The event handler receives two parameters:

1. sender - the __RadSocialShare__ instance that fired the event.

1. eventArgs - event arguments that expose the following methods:

* get_cancel() - returns a bool value that indicates whether the event will be canceled. True means the event is canceled.

* set_cancel(*shouldCancel*) - sets a bool value that indicates whether the event will be canceled. Setting true means the event will be canceled.

* get_socialNetType() - returns the type of the clicked __RadSocialButton__.

* get_url() - returns the shared URL.

* set_stringsToShare(*url, title*) - changes the strings that will be shared - URL and Title. If any of them is omitted the old value is not changed.

# See Also

 * [Client-side Events]({%slug socialshare/client-side-programming/events/overview%})
