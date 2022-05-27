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

This article provides answers for some of the most frequently asked questions (FAQ) when working with the Telerik UI for ASP.NET AjaxManager. 

At the end of the article you will also find a list containing links to specific Knowledge Base articles covering the most common how-to and troubleshooting scenarios. 

For faster navigation, the links are grouped into the following sets:
 - [How-to Tutorials](#how-to-tutorials)
 - [Troubleshooting Tutorials](#troubleshooting-tutorials)

#### How can I use Ajax to make a button update a Telerik AJAX control?

Use the AjaxManager: 

1. In the left pane of the AjaxManager designer, select the button. 

1. In the middle pane, select the control. 

1. Click **OK** and run the page.

#### My control is within an AjaxPanel. How can I update a control in another AjaxPanel?

Instead of using two AjaxPanels, consider using a single AjaxManager. However, if you still want to use the two panels, make an external call from the AJAX-initiator control to the `AjaxRequest` client-side function of the target AjxPanel. For more information and a demo, refer to the [AjaxPanel documentation]({%slug ajaxpanel/overview%}).

#### How can I load a user control dynamically with Ajax?

There is no difference between the standard loading of controls and AJAX loading. To correctly load user controls dynamically, review the article on [loading user controls]({%slug ajaxpanel/how-to/load-user-controls%}).

#### How can I ajaxify two controls in my project that interact and update each other?

Depending on your application, use a single AjaxPanel to wrap the two controls, or an AjaxManager if the controls are non-adjacent.

#### Can I use an AjaxPanel in another AjaxPanel?

Telerik UI for ASP.NET AJAX does not support the nesting of AjaxPanels. In such cases, you are recommended to revise the page logic and see if you can achieve the same behavior with the AjaxManager and regular `asp:Panels` settings.

#### What to do when I have client-side code that is executed on some of the events of a control inside an AjaxPanel?
  
There is nothing special that you need to do in this case. The AjaxPanel automatically evaluates the client-side code and does not require you to write additional code.

#### I have a control A, which updates a control B, which updates a control C. Then C updates A again. How can I keep the controls dependent on each other and sequentially updated?

It depends on the way the controls are placed on the page. If the controls are neighboring, place them in an AjaxPanel. If the controls are non-adjacent, use the AjaxManager and set the AJAX `Relations`.

#### How can I disable my controls during Ajax?

Use the client-side `OnRequestStartA` event of the AjaxPanel or AjaxManager, and write custom JavaScript code to achieve your goal. Then, re-enable the controls by using the `OnResponseEnd` client-side event. For details, refer to the article on [disabling controls during Ajax]({%slug ajaxpanel/how-to/disable-controls-during-ajax%}) for details.


#### How-to Tutorials

* [Cancel AJAX Requests with the AjaxManager or AjaxPanel]({% slug ajaxmanager/client-side-programming/how-to/cancel-ajax--request %})

* [Show a User Confirmation Dialog and Initiate an AJAX Request]({% slug ajaxmanager/client-side-programming/how-to/client-confirmation-and-ajax %})

* [Pass Two or More Arguments in `ajaxRequest` and `ajaxRequestWithTarget` with the AjaxManager or AjaxPanel]({% slug ajaxmanager/client-side-programming/how-to/pass-more-than-one-argument %})

* [Force a Postback with the AjaxManager or AjaxPanel]({% slug ajaxmanager/client-side-programming/how-to/forcing-a-postback %})

* [Assign Different Client Events for Different Controls with the AjaxManager or AjaxPanel]({% slug ajaxmanager/client-side-programming/how-to/assign-different-client-events-for-different-controls %})

* [Change the Mouse Cursor on Ajax Updates with the AjaxManager or AjaxPanel]({% slug ajaxmanager/client-side-programming/how-to/change-mouse-cursor-on-ajax-update %})
  
* [Add AjaxSettings to the AajaxManager Programmatically]({% slug ajaxmanager/how-to/add-ajaxsettings-programmatically %})

* [Use Telerik AJAX and WebUserControls]({% slug ajaxmanager/how-to/radajax-and-webusercontrols %})

* [Redirect to Another Page from the Server]({% slug ajaxmanager/how-to/redirecting-to-another-page %})

* [Load User Controls]({% slug ajaxmanager/how-to/load-user-controls %})

* [Use Telerik AJAX and MasterPage]({% slug ajaxmanager/how-to/radajax-and-masterpage %})

* [Ajaxify and Update Controls in Master and Content Page with the AjaxManager]({% slug ajaxmanager/how-to/ajaxify-and-update-controls-in-master-and-content-page %})

* [Manually Add an AJAX Request]({% slug ajaxmanager/how-to/manually-add-an-ajax-request %})

* [Exclude Controls from Ajaxifying]({% slug ajaxmanager/how-to/exclude-controls-from-ajaxifying %})

* [Initiate Requests from One ContentPlaceHolder and Load or Update Controls in Another]({% slug ajaxmanager/how-to/initiating-requests-from-contentplaceholder %})

* [Ajaxify Particular Templated GridView Buttons with AjaxManager]({% slug ajaxmanager/how-to/ajaxify-particular-templated-gridview-buttons %})

* [Execute Custom Javascript Code after an AJAX Update]({% slug ajaxmanager/how-to/executing-custom-javascript-code-after-ajax-update %})
  
* [Check for Incompatible Controls and Update Third-Party Controls with Telerik AJAX]({% slug ajaxmanager/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax %})

* [Update in Composite Control]({% slug ajaxmanager/how-to/update-in-composite-control %})

* [Add the AjaxManager Programmatically]({% slug ajaxmanager/how-to/add-radajaxmanager-programmatically %})

* [Disable AJAX with the AjaxManager When the Client Browser Does Not Support it]({% slug ajaxmanager/how-to/disable-ajax-when-client-browser-does-not-support-it %})

* [Disable Controls during AJAX Requests with the AjaxManager]({% slug ajaxmanager/how-to/disable-controls-during-ajax %})

* [Update the UpdatePanels of the Initiator Only]({% slug ajaxmanager/how-to/update-initiator's-updatepanels-only %})
  
* [Use Conditional CSS Comments with Ajax]({% slug ajaxmanager/how-to/how-to-use-css-conditional-comments-with-ajax %})

* [Download Files with an Ajaxified Control When Using the AjaxManager]({% slug ajaxmanager/how-to/download-files-with-ajaxified-control %})

* [Ajax Requests Are Queueing When Using the AjaxManager]({% slug ajaxmanager/how-to/ajax-requests-queueing %})

* [Use Telerik AJAX in Medium Trust]({% slug ajaxmanager/how-to/using-radajax-in-medium-trust %})

* [Set the `EventName` Property in the AjaxManager and UpdatePanel Controls]({% slug ajaxmanager/how-to/eventname-property %})
  

#### Troubleshooting Tutorials

* [AjaxManager Settings Are Not Working When Controls Are Wrapped in an AjaxPanel and Added to the Settings]({% slug ajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings %})

* [`SyntaxError` Occurs in the Browser]({% slug syntax-browser-errors-occur %})

* [An Ajaxified Control Still Makes Postbacks]({% slug ajaxmanager/troubleshooting/ajaxified-control-still-makes-postbacks %})

* [The AjaxManager Designer Does Not Locate All Controls]({% slug ajaxmanager/troubleshooting/radajaxmanager-designer-does-not-locate-all-controls %})

* [Updated Controls Appear on a New Line]({% slug ajaxmanager/troubleshooting/updated-controls-appear-on-a-new-line %})

* [Force Controls in an AJAX-enabled Container to Perform a Postback]({% slug ajaxmanager/troubleshooting/force-controls-in-an-ajax-enabled-container-to-perform-a-postback %})



