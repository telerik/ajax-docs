---
title: Known Limitations
page_title: Known Limitations | UI for ASP.NET AJAX Documentation
description: Known Limitations
slug: ajax/troubleshooting/known-limitations
tags: known,limitations
published: True
position: 8
---

# Known Limitations



Here is a list of all known __RadAjax__ limitations:

## 

1. __RadAjax and Standard Validators____RadAjax__ controls fully support server and client-side validation with the standard validators. However, when the page uses __ValidationSummary__ control with a __CustomValidator__,it performs server-side validation, so you need to wrap it in an __ASP:Panel__ and add the panel to the __UpdatedControls__ collection in the AJAX settings when the page is AJAX-enabled with __RadAjaxManager__, or add the __ValidationSummary__ control in the __RadAjaxPanel__control if such is used for the page ajaxification. __Example 1__ shows how to do this.__Example 1__: Using the __ValidationSummary__ control with __RadAjaxManager__.

````ASPNET
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
	        <asp:ValidationSummary ID="ValidationSummary1" runat="server" />
	    </asp:Panel>
````



1. __RadAjaxTimer control__Telerik decided not to include a Timer control in __RadAjax for ASP.NET AJAX__, because the Timer control is a postback control and does not include AJAX capabilities by itself. In addition, Microsoft included a Timer control in Microsoft AJAX that offers basic functionality, and you canuse the "Classic" Timer as shown in[this online demo](http://demos.telerik.com/aspnet-ajax/ajax/examples/common/ajaxifytimer/defaultcs.aspx) which illustrates sample approach.

1. __Ajaxified control postbacks when there are no updated controls__The following __RadAjaxManager__ setting will not ajaxify the button:

````ASPNET
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">                
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````

You can work around this limitation by adding a control to be updated. For example, we could add the the same control (the initiator)as __UpdatedControl__:

````ASPNET
	    <UpdatedControls>
	        <telerik:AjaxUpdatedControl ControlID="Button1" />
	    </UpdatedControls>
````



1. __RadAjaxManager and RadAjaxPanel in the same application__There are some known issues when using both the __RadAjaxManager__ and the __RadAjaxPanel__in some complex applications, for example, those with a master page or WebUserControls. However, a single __RadAjaxManager__(and no panels) in the master/main page could handle these scenarios.

1. __Client-Side events OnRequestSent and OnResponseReceived missing__Telerik removed these events in __RadAjax for ASP.NET AJAX__. There is no way to "simulate" them due to the way ASP.NET AJAX works.Please use [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%}) and [OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%}) for your needs.

1. __Various controls not supported by the Microsoft AJAX framework__You can find a full list of controls that are not compatible with __RadAjax for ASP.NET AJAX__[here]({%slug ajax/application-scenarios/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax%}).

1. __AJAX requests may not work in all scenarios when setting the RestoreOriginalRenderDelegate property to false or inheriting from RadAjaxPage (to support Medium trust in DNN/SharePoint)__ Please be aware of this fact when configuring __RadAjaxManager__ or __RadAjaxPanel__ for your particular project schema.

# See Also

 * [Changes and Backwards Compatibility]({%slug ajax/changes-and-backwards-compatibility%})

 * [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%})

 * [OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%})

 * [Incompatible Controls and Updating 3rd Party Controls with Telerik RadAjax]({%slug ajax/application-scenarios/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax%})
