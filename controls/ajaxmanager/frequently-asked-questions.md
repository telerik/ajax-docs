---
title: Frequently Asked Questions
page_title: AjaxManager Frequently Asked Questions
description: "Find the answers of the most frequently asked questions when working with the Telerik UI for ASP.NET AjaxManager."
slug: ajaxmanager/how-to/frequently-asked-questions
previous_url: ajax/how-to/frequently-asked-questions, controls/ajaxmanager/how-to/frequently-asked-questions
tags: telerik, asp, net, ajax, manager, frequently, asked, questions
published: True
position: 100
---

# Frequently Asked Questions about the AjaxManager

This article provides answers for some of the most frequently asked questions when working with the Telerik UI for ASP.NET AjaxManager. 

### How can I use Ajax to make a button update a Telerik AJAX control?

Use the AjaxManager: 

1. In the left pane of the AjaxManager designer, select the button. 

1. In the middle pane, select the control. 

1. Click **OK** and run the page.

### My control is within an AjaxPanel. How can I update a control in another AjaxPanel?

Instead of using two AjaxPanels, consider using a single AjaxManager. However, if you still want to use the two panels, make an external call from the AJAX-initiator control to the `AjaxRequest` client-side function of the target AjxPanel. For more information and a demo, refer to the [AjaxPanel documentation]({%slug ajaxpanel/overview%}).

### How can I load a user control dynamically with Ajax?

There is no difference between the standard loading of controls and AJAX loading. To correctly load user controls dynamically, review the article on [loading user controls]({%slug ajaxpanel/how-to/load-user-controls%}).

### How can I ajaxify two controls in my project that interact and update each other?

Depending on your application, use a single AjaxPanel to wrap the two controls, or an AjaxManager if the controls are non-adjacent.

### Can I use an AjaxPanel in another AjaxPanel?

Telerik UI for ASP.NET AJAX does not support the nesting of AjaxPanels. In such cases, you are recommended to revise the page logic and see if you can achieve the same behavior with the AjaxManager and regular `asp:Panels` settings.

### What to do when I have client-side code that is executed on some of the events of a control inside an AjaxPanel?
  
There is nothing special that you need to do in this case. The AjaxPanel automatically evaluates the client-side code and does not require you to write additional code.

### I have a control A, which updates a control B, which updates a control C. Then C updates A again. How can I keep the controls dependent on each other and sequentially updated?

It depends on the way the controls are placed on the page. If the controls are neighboring, place them in an AjaxPanel. If the controls are non-adjacent, use the AjaxManager and set the AJAX `Relations`.

### How can I disable my controls during Ajax?

Use the client-side `OnRequestStartA` event of the AjaxPanel or AjaxManager, and write custom JavaScript code to achieve your goal. Then, re-enable the controls by using the `OnResponseEnd` client-side event. For details, refer to the article on [disabling controls during Ajax]({%slug ajaxpanel/how-to/disable-controls-during-ajax%}) for details.
