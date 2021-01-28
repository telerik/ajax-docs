---
title: Wrong Results at Medium Typing Speed
page_title: Wrong Results at Medium Typing Speed - RadSearchBox
description: Check our Web Forms article about Wrong Results at Medium Typing Speed for users because of overlapping requests.
slug: controls/searchbox/troubleshooting/wrong-results-at-medium-typing-speed
tags: wrong,results,search,request,delay,user,typing,speed
published: true
position: 0
---

# Wrong Results at Medium Typing Speed


Sometimes you get wrong results from a previous request when typing at a medium speed (akin to typing with a single finger only). This happens because requests overlap and not all of them return as expected.

An example of such wrong results is as follows:

1. type `1`, then `5` and `0` at medium speed
1. you may only see the results for `1` because the other requests were interrupted by the response of the first request
1. type `0` and get the results for `1500`
1. you may not get results for `150` at all because it was cancelled by the other request

>note You may not always be able to reproduce this, as the behavior will vary by your typing speed and the network speed.

If you type fairly quickly or rather slowly, the results are returned as expected because either only one request is initiated, or each request returns before the next request is initiated.

We have found empirically that the default value of `250` milliseconds delay before a request gets invoked, if no further keystrokes were entered, works best for the majority of cases.

>caption Change the default delay to a value that works best for your end users and desired UX.

````ASP.NET
<telerik:RadSearchBox runat="server" ID="RadSearchBox1" OnClientLoad="setDelay"></telerik:RadSearchBox>
<script>
	function setDelay(sender, args) {
		//tweak value according to your preferences and UX tests
		sender.set_requestDelay(500);
	}
</script>
````

