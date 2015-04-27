---
title: OnTweet
page_title: OnTweet | RadSocialShare for ASP.NET AJAX Documentation
description: OnTweet
slug: socialshare/client-side-programming/events/ontweet
tags: ontweet
published: True
position: 9
---

# OnTweet



## 

**OnTweet** - fires when the Tweet button is clicked in the sharing popup (i.e. after the actual tweet is posted). Does not fire immediately after the Tweet Standard button is clicked in the RadSocialShare control. Scripts from Twitter return the information about this event and its behavior cannot be changed.

The event handler receives two parameters:

1. sender - the **RadSocialShare** instance that fired the event.

1. eventArgs - event arguments. It exposes the get_url() method that returns the shared URL.

# See Also

 * [Client-side Events]({%slug socialshare/client-side-programming/events/overview%})

 * [Common Standard Buttons Issues]({%slug socialshare/troubleshooting/standard-buttons'-events%})
