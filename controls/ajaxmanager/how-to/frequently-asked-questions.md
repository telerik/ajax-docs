---
title: Frequently Asked Questions
page_title: Frequently Asked Questions
description: Check our Web Forms article about Frequently Asked Questions.
slug: ajaxmanager/how-to/frequently-asked-questions
previous_url: ajax/how-to/frequently-asked-questions
tags: frequently,asked,questions
published: True
position: 0
---

# Frequently Asked Questions



## 

- **Q:** I have a button and a control (**RadTreeView** for example). The button should update the control with AJAX. How should I proceed?

  **A:** You should use **RadAjaxManager**. In the left pane of the **RadAjaxManager** designer, select the button and in the middle pane select the treeview. Click OK and run the page.

- **Q:** My control is within a **RadAjaxPanel** and I want to update a control in another **RadAjaxPanel**. Is this possible?

  **A:** Yes. Instead of using two **RadAjaxPanels**, consider using a single **RadAjaxManager**. However if you still want to use the two panels, you should make an external call from the AJAX-initiator control to the **AjaxRequest** client-side function of the target **AJAX Panel**. (For more information and a demo, see [AJAX Panel]({%slug ajaxpanel/overview%}))

- **Q:** I need to load a user control dynamically with AJAX. Is this possible?

  **A:** There is no difference between the standard loading of controls and AJAX loading. Please, carefully review the [Load User Controls]({%slug ajaxpanel/how-to/load-user-controls%}) topic in order to correctly load user controls dynamically.

- **Q:** I have two controls that interact and update each other. How should I ajaxify them?

  **A:** Depending on your application, you can use a single RadAjaxPanel to wrap the two controls or a **RadAjaxManager** in case the controls are non-adjacent.

- **Q:** Can I use **RadAjaxPanel** in another **RadAjaxPanel** (i.e., nested AJAX Panels)?

  **A:** No. Telerik Support recommends you to revise the page logic and see if you can achieve the same behaviour with **RadAjaxManager** and regular asp:Panels.

- **Q:** I have client-side code that is executed on some of the events of a control inside a **RadAjaxPanel**. How should I proceed?
  
  **A:** There is nothing special that you need to do in this case - **RadAjaxPanel** automatically evaluates the client-side code and does not require you to write additional code.

- **Q:** I have a control A, which updates control B, which then updates control C. The control C then updates control A again. Controls are dependent on each other and should be updated sequentially. What would you suggest?

  **A:** The answer depends on how the controls are placed on the Page. If the controls are neighboring, place them in RadAjaxPanel. If the controls are non-adjacent, use **RadAjaxManager** and set the **AJAX Relations** .

- **Q:** I need my controls disabled during AJAX. What should I do?

  **A:** You should use the **RadAjaxPanel** or **RadAjaxManager** client-side event **OnRequestStart** and write custom JavaScript code to achieve your goal. Then you should re-enable the controls by using the **OnResponseEnd** client-side event. See [this topic]({%slug ajaxpanel/how-to/disable-controls-during-ajax%}) for details.
