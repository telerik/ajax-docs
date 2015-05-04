---
title: Yammer Specifics
page_title: Yammer Specifics | RadSocialShare for ASP.NET AJAX Documentation
description: Yammer Specifics
slug: socialshare/troubleshooting/yammer-specifics
tags: yammer,specifics
published: True
position: 4
---

# Yammer Specifics



## Yammer Requirements

The proper functionality of the Yammer buttons requires the following properties of RadSocialShare to be set:

* **YammerAppId** - This is a global property for the control and its value can be obtained from [https://www.yammer.com/client_applications](https://www.yammer.com/client_applications)

* **YammerNetwork** - This property is exposed by the standard Yammer button class. Its value is related to your network permalink. More information about getting it is available at [http://developer.yammer.com/connect/](http://developer.yammer.com/connect/)

## Known issues

Yammer Standard Buttons are created via external scripts from their network and therefore we cannot fully guarantee their correct functionality. It is possible to receive warnings about failed GET requests, for example:

* "*NetworkError: 404 Not Found - https://www.yammer.com/api/v1/subscriptions/to_open_graph_object/347866561131267?_=1358861451515*"

* "*NetworkError: 429 OK - https://www.yammer.com/api/v1/likes/open_graph_object/347866561131267?_=1358861451506*"

## 

This behavior is not related to RadSocialShare but the API that Yammer exposes and can be tested with the following code:

````JavaScript
<script type="text/javascript">
    yam.config({ appId: "DATA-APP-ID" });
    if (yam.helper == undefined) yam.helper = { message: "" };
    yam.connect.actionButton({
        container: document.getElementById("embedded-like"),
        network: "NetworkPermalink",
        action: "like"
    });
</script>
<script type="text/javascript">
    yam.config({ appId: "DATA-APP-ID" });
    if (yam.helper == undefined) yam.helper = { message: "" };
    yam.connect.actionButton({
        container: document.getElementById("embedded-follow"),
        network: "NetworkPermalink",
        action: "follow"
    });
</script>
````



The example above is extracted from [http://developer.yammer.com/connect/](http://developer.yammer.com/connect/) and has been amended.

## Localization

At the time of writing (February 2013) the Yammer buttons do not seem to support localization.

# See Also

 * [More information about connecting with Yammer](http://developer.yammer.com/connect/)

 * [Register application with Yammer](https://www.yammer.com/client_applications)
