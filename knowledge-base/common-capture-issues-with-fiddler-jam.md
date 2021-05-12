---
title: Capture issues with Fiddler Jam
description: Capturing issues in the browser with Telerik Fiddler Jam extention tool
type: how-to
page_title: Capturing issues in the browser with Telerik Fiddler Jam extention tool
slug: common-capture-issues-with-fiddler-jam
position: 
published: true
tags: 
res_type: kb
---


## What is Fiddler Jam

[Fiddler Jam](https://www.telerik.com/fiddler-jam) is designed for support teams to spend less time instructing end-users by delivering a solution that helps you troubleshoot remote issues quickly, easily, and securely. The traditional back-and-forth is eliminated, creating a more harmonious experience that exceeds your user’s expectations.

### How it works

End-users share the full context (network logs, browser console logs, and screenshots of each action) via a Chrome extension instead of manually attaching to an email or a support ticket. Your support team analyzes the logs for troubleshooting. If needed, developers debug further by inspecting the logs in the [Fiddler Jam Portal](https://jam.getfiddler.com/) or with [Fiddler Everywhere](https://www.telerik.com/fiddler/fiddler-everywhere).

### Security

Fiddler Jam is a Chrome extension tool that can capture the ongoing tab activity and generate links with the captured activity logs. With such functionality, a particular set of security is added as functionality to Fiddler Jam to protect its users' privacy and allow you to share logs with some information being entirely stripped. You can find more information on the topic in [Fiddler Jam Secuirty](https://docs.telerik.com/fiddler-jam/security).

## Installing Fiddler Jam

You can download and install the Fiddler Jam Chrome extension from [Chrome Web Store page for Fiddler Jam](https://chrome.google.com/webstore/detail/fiddler-jam/fnkjlegmkbicdodlheligomlfbdblpfj). Detailed instruction on how to install the extension can be found in [Fiddler Jam Extension Installation](https://docs.telerik.com/fiddler-jam/extension/installation) article.

For an easier access to the extension you can pin it:
1. Click the Extensions button on the Google Chrome toolbar (next to your profile avatar).
2. Click the pin next to the Fiddler Jam extension.


## Capture a log

Once you have [installed the Fiddler Jam browser extension](#installing-fiddler-jam), you can start capturing your issue and send it to the support team. The detailed capturing instructions can be found in [Fiddler Jam extension - Recording a log](https://docs.telerik.com/fiddler-jam/extension/recording-a-log) while below you can find summarized instructions to follow more easily when capturing a log and sharing with the Telerik support team.

1. Open a new tab. You can also type/paste <a href="about:blank">about:blank</a> in the address bar and press Enter
1. Open the Fiddler Jam extension 
1. Click the `Advanced Options` text button (located above the `Start Capture` button)
1. Ensure the `Mask Post Data` switch is disabled if reproducing the issue triggers a postback.
1. Click the `Start Capture button`
1. Navigate to your page
1. Reproduce or observe the issue
1. Once the issue is replicated, open the extension again and click the `Stop Capture` button
1. Proceed to [Submit a log](#submit-a-log)

## Submit a log

1. *Optional* Toggle the `Password Protection` switch and enter a password (requirements: min 8 characters, 1 uppercase leter, 1 lowercase letter, 1 number)
1. Click the `Get Link` button
1. Copy the generated link and share it in the support ticket


## See Also

* [Fiddler Jam product page](https://www.telerik.com/fiddler-jam)
* [Fiddler Jam documentation](https://docs.telerik.com/fiddler-jam/introduction)
* [General troubleshooting of JavaScript errors]({%slug common-general-troubleshooting-javascript-errors %})
* [Improve Your Debugging Skills with Chrome DevTools blog](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools)
  
