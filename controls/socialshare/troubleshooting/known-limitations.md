---
title: Known Limitations
page_title: Known Limitations | RadSocialShare for ASP.NET AJAX Documentation
description: Known Limitations in RadSocialShare for ASP.NET AJAX
slug: socialshare/troubleshooting/known-limitations
tags: limitations, known
published: True
position: 6
---

# Known Limitations

This article lists the known limitations of the **RadSocialShare** control.

## Tweet Event of a Twitter Button is not Fired Under IE

When the end user posts their Tweet on Twitter, their scripts should return this information to the originating page. The **Example 1** will show an alert when this happens. This event is not raised in IE. **Example 2** shows how this issue can be reproduced with the pure HTML code Twitter provide. Until it is fixed officially, RadSocialShare cannot raise the event as well, because it depends on the scripts coming from Twitter.

**Example 1**: Twitter does not raise the Tweet event with RadSocialShare.

````ASP.NET
<telerik:RadSocialShare runat="server" ID="RadSocialShare1" OnTweet="OnTweetHandler">
	<MainButtons>
		<telerik:RadTwitterButton />
	</MainButtons>
</telerik:RadSocialShare>
<script>
	function OnTweetHandler(sender, args) {
		alert("OnTweetHandler");
	}
</script>
````

**Example 2**: Pure HTML code from the Twitter website that shows the same issue.

````HTML
<a class="twitter-share-button"
	href="https://twitter.com/share"
	data-url="https://dev.twitter.com/web/tweet-button"
	data-via="your_screen_name"
	data-text="Checking out this page about the Tweet Button"
	data-related="twitterdev:Twitter Developer Relations"
	data-count="vertical">Tweet
</a>

<script type="text/javascript">
	window.twttr = (function (d, s, id) { var t, js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) { return } js = d.createElement(s); js.id = id; js.src = "https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } }) }(document, "script", "twitter-wjs"));

	twttr.ready(function (twttr) {
		// Now bind our custom intent events
		twttr.events.bind('tweet', tweenEvent);
	});

	function tweenEvent(event) {
		alert(event);
	}
</script>
````



The example above is extracted from [https://dev.twitter.com/web/javascript/events](https://dev.twitter.com/web/javascript/events) and has been amended.

You can read more about this problem in the Twitter Community Forums:

* [Can’t catch callback with JavaScript Interface on IE9, IE10 and IE11](https://twittercommunity.com/t/cant-catch-callback-with-javascript-interface-on-ie9-ie10-and-ie11/21325)

* [Twttr.events.bind ‘tweet’ & Internet Explorer](https://twittercommunity.com/t/twttr-events-bind-tweet-internet-explorer/21151)



# See Also

* [Twitter Button Events](https://dev.twitter.com/web/javascript/events)

* [Can’t catch callback with JavaScript Interface on IE9, IE10 and IE11](https://twittercommunity.com/t/cant-catch-callback-with-javascript-interface-on-ie9-ie10-and-ie11/21325)

* [Twttr.events.bind ‘tweet’ & Internet Explorer](https://twittercommunity.com/t/twttr-events-bind-tweet-internet-explorer/21151)
