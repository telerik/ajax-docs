---
title: Frequently Asked Questions
page_title: Frequently Asked Questions | UI for ASP.NET AJAX Documentation
description: Frequently Asked Questions
slug: ajax/application-scenarios/frequently-asked-questions
tags: frequently,asked,questions
published: True
position: 0
---

# Frequently Asked Questions



## 

1. __Q:__ I have a button and a control (__RadTreeView__ for example). The button should update the control with AJAX. How should I proceed?__A:__ You should use __RadAjaxManager__. In the left pane of the __RadAjaxManager__ designer, select the button and in the middle pane select the treeview. Click OK and run the page.

1. __Q:__ My control is within a __RadAjaxPanel__ and I want to update a control in another __RadAjaxPanel__. Is this possible?__A:__ Yes. Instead of using two __RadAjaxPanels__, consider using a single __RadAjaxManager__. However if you still want to use the two panels, you should make an external call from the AJAX-initiator control to the __AjaxRequest__ client-side function of the target __AJAX Panel__. (For more information and a demo, see [AJAX Panel]({%slug ajax/radajaxpanel/overview%}))

1. __Q:__ I need to load a user control dynamically with AJAX. Is this possible?__A:__ There is no difference between the standard loading of controls and AJAX loading. Please, carefully review the [Load User Controls]({%slug ajax/application-scenarios/load-user-controls%}) topic in order tocorrectly load user controls dynamically.

1. __Q:__ I have two controls that interact and update each other. How should I ajaxify them?__A:__ Depending on your application, you can use a single RadAjaxPanel to wrap the two controls or a __RadAjaxManager__ in case the controls are non-adjacent.

1. __Q:__ Can I use __RadAjaxPanel__ in another __RadAjaxPanel__ (i.e., nested AJAX Panels)?__A:__ No. Telerik Support recommends you to revise the page logic and see if you can achieve the same behavior with __RadAjaxManager__ and regular asp:Panels.

1. __Q:__ I have client-side code that is executed on some of the events of a control inside a __RadAjaxPanel__. How should I proceed?__A:__ There is nothing special that you need to do in this case - __RadAjaxPanel__ automatically evaluates the client-side code and does not require you to write additional code.

1. __Q:__ I have a control A, which updates control B, which then updates control C. The control C then updates control A again. Controls are dependent on each other and should be updated sequentially. What would you suggest?__A:__ The answer depends on how the controls are placed on the Page. If the controls are neighboring, place them in RadAjaxPanel. If the controls are non-adjacent, use __RadAjaxManager__ and set the __AJAX Relations__.

1. __Q:__ I need my controls disabled during AJAX. What should I do?__A:__ You should use the __RadAjaxPanel__ or __RadAjaxManager__ client-side event __OnRequestStart__ and write custom JavaScript code to achieve your goal. Then you should re-enable the controls by using the __OnResponseEnd__ client-side event. See [this topic]({%slug ajax/application-scenarios/disable-controls-during-ajax%}) for details.
