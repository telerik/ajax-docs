---
title: Known Limitations
page_title: AjaxManager Known Limitations
description: "Learn more about the known limitations when using the Telerik UI for ASP.NET AjaxManager."
slug: ajaxmanager/troubleshooting/known-limitations
previous_url: ajax/troubleshooting/known-limitations, controls/ajaxmanager/troubleshooting/known-limitations 
tags: telerik, asp, net, ajax, manager, known, limitations, issues
published: True
position: 99
---

# Known Limitations When Using Telerik AJAX and the AjaxManager

This article lists the known limitations you may encounter when working with the Telerik UI for ASP.NET AjaxManager.   

* **Standard validation**&mdash;The AjaxManager fully supports server and client-side validation with the standard validators. However, when the page uses a `ValidationSummary` control with a `CustomValidator`, it performs server-side validation. 

  Therefore, when the page is AJAX-enabled with the AjaxManager, you need to wrap it in an `ASP:Panel` and add the panel to the `UpdatedControls` collection in the AJAX settings, or add the `ValidationSummary` control in the AjaxPanel control if such is used for the page ajaxification. 

  The following example demonstrates how to use the `ValidationSummary` control with the `AjaxManager`.

  ````ASP.NET
  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  	<AjaxSettings>
  	    <telerik:AjaxSetting AjaxControlID="btnValidate">
  	        <UpdatedControls>
  	            <telerik:AjaxUpdatedControl ControlID="TextBox1" />
  	            <telerik:AjaxUpdatedControl ControlID="pnlValidationSummary" />
  	        </UpdatedControls>
  	    </telerik:AjaxSetting>
  	</AjaxSettings>
  </telerik:RadAjaxManager>
  <asp:TextBox ID="TextBox1" runat="server" />
  <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1"
  	 Display="None" ErrorMessage="Required Field" />
  <asp:Button ID="btnValidate" runat="server" />
  <asp:Panel ID="pnlValidatorSummary" runat="server">
  	asp:ValidationSummary ID="ValidationSummary1" runat="server" />
  </asp:Panel>
  ````



* **AjaxTimer**&mdash;The Telerik UI for ASP.NET AJAX does not deliver an AjaxTimer control, because a Timer control is a postback control and does not include AJAX capabilities by itself. 

  In addition, Microsoft included a Timer control in Microsoft AJAX that offers basic functionalities. For more information, refer to the [demo on ajaxifying the Timer](https://demos.telerik.com/aspnet-ajax/ajax/examples/common/ajaxifytimer/defaultcs.aspx).

* **Ajaxified control postbacks when controls are not updated**&mdash;The AjaxManager setting from the following example will not ajaxify the button.

    ````ASP.NET
      <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
      	<AjaxSettings>
      	    <telerik:AjaxSetting AjaxControlID="Button1">                
      	    </telerik:AjaxSetting>
      	 </AjaxSettings>
      </telerik:RadAjaxManager>
    ````



    To work around this limitation, add a control that will be updated. For example, add the same control (the initiator) as the `UpdatedControl`:

    ````ASP.NET
      <UpdatedControls>
      	<telerik:AjaxUpdatedControl ControlID="Button1" />
      </UpdatedControls>
    ````



* **Using the AjaxManager and AjaxPanel in the same application**&mdash;In some complex scenarios, such as when using a master page or WebUserControls, having both the AjaxManager and the AjaxPanel may lead to issues. To handle such problems, use a single AjaxManager and no panels in the master or main page of the project.

* **The `OnRequestSent` and `OnResponseReceived` clisent-side events are missing**&mdash;The AjaxManager does not provide these events and you cannot simulate them due to the way ASP.NET AJAX works. To work around this issue, use the [`OnRequestStart`]({%slug ajaxmanager/client-side-programming/events/onrequeststart%}) and [`OnResponseEnd`]({%slug ajaxmanager/client-side-programming/events/onresponseend%}) for your needs.

* **Various controls are not supported by the Microsoft AJAX framework**&mdash;For the full list of controls that are not compatible with the AjaxManager, refer to the article on [checking for incompatible controls and updating third-party controls]({%slug ajaxmanager/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax%}).

* **AJAX requests are not working when `RestoreOriginalRenderDelegate` is `false`**&mdash;The same issue may occur when inheriting from an AjaxPage to support Medium Trust in DNN or SharePoint. You need to consider these limitations when you configure the AjaxManager or the AjaxPanel for your particular project schema.

* **When using Medium Trust, client-side validation does not execute and validators are added dynamically during an Ajax call**&mdash;When the Medium Trust level is used, you cannot use reflection to set private properties. However, when you use validators in a template that is placed in an AjaxPanel, you need to set the `_parent` private property of the validators to the updated panel with reflection. This approach is required so that all validators are rendered as expected. Therefore, in such scenarios, to make validators work as expected, use `asp:UpdatePanel` instead of the AjaxPanel or AjaxManager.

* **Parent-child control configuration**&mdash;Child elements cannot be the `AjaxSetting` initiator or update their parent container element. To add and update a container or a parent control, allow the container or the control, or an external component to be the initiator. It is similar to placing a `telerik:RadAjaxPanel` or `asp:UpdatePanel` on the page: it will affect only the content inside this panel. The AjaxManager is similar; only it achieves what is going on under the hood.

## See Also

* [OnRequestStart]({%slug ajaxmanager/client-side-programming/events/onrequeststart%})
* [OnResponseEnd]({%slug ajaxmanager/client-side-programming/events/onresponseend%})
* [Checking for Incompatible Controls and Updating Third-Party Controls]({%slug ajaxmanager/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax%})
