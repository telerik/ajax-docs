---
title: Known Limitations
page_title: Known Limitations | RadAjax for ASP.NET AJAX Documentation
description: Known Limitations
slug: ajaxpanel/troubleshooting/known-limitations
tags: known,limitations
published: True
position: 8
---

# Known Limitations



Here is a list of all known **RadAjax** limitations:

## 

1. **RadAjax and Standard Validators**
 **RadAjax** controls fully support server and client-side validation with the standard validators. However, when the page uses **ValidationSummary** control with a **CustomValidator** ,it performs server-side validation, so you need to wrap it in an **ASP:Panel** and add the panel to the **UpdatedControls** collection in the AJAX settings when the page is AJAX-enabled with **RadAjaxManager** , or add the **ValidationSummary** control in the **RadAjaxPanel** control if such is used for the page ajaxification. **Example 1** shows how to do this.
 
 **Example 1** : Using the **ValidationSummary** control with **RadAjaxManager** .

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



2. **RadAjaxTimer control** Telerik decided not to include a Timer control in **RadAjax for ASP.NET AJAX** , because the Timer control is a postback control and does not include AJAX capabilities by itself. In addition, Microsoft included a Timer control in Microsoft AJAX that offers basic functionality, and you cause the "Classic" Timer as shown in[this online demo](https://demos.telerik.com/aspnet-ajax/ajax/examples/common/ajaxifytimer/defaultcs.aspx) which illustrates sample approach.

3. **Ajaxified control postbacks when there are no updated controls**The following **RadAjaxManager** setting will not ajaxify the button:

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">                
	    </telerik:AjaxSetting>
	 </AjaxSettings>
</telerik:RadAjaxManager>
````

You can work around this limitation by adding a control to be updated. For example, we could add the the same control (the initiator)as **UpdatedControl** :

````ASP.NET
<UpdatedControls>
	<telerik:AjaxUpdatedControl ControlID="Button1" />
</UpdatedControls>
````



4. **RadAjaxManager and RadAjaxPanel in the same application** There are some known issues when using both the **RadAjaxManager** and the **RadAjaxPanel** in some complex applications, for example, those with a master page or WebUserControls. However, a single **RadAjaxManager**(and no panels) in the master/main page could handle these scenarios.

5. **Client-Side events OnRequestSent and OnResponseReceived missing** Telerik removed these events in **RadAjax for ASP.NET AJAX**. There is no way to "simulate" them due to the way ASP.NET AJAX works.Please use [OnRequestStart]({%slug ajaxpanel/client-side-programming/events/onrequeststart%}) and [OnResponseEnd]({%slug ajaxpanel/client-side-programming/events/onresponseend%}) for your needs.

6. **Various controls not supported by the Microsoft AJAX framework** You can find a full list of controls that are not compatible with **RadAjax for ASP.NET AJAX**[here]({%slug ajaxpanel/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax%}).

7. **AJAX requests may not work in all scenarios when setting the RestoreOriginalRenderDelegate property to false or inheriting from RadAjaxPage (to support Medium trust in DNN/SharePoint).** Please be aware of this fact when configuring **RadAjaxManager** or **RadAjaxPanel** for your particular project schema.

8. **Client-side validation does not execute when Medium Trust is used and validators are added dynamically during Ajax call.** 
When Medium Trust level is used we cannot use reflection in order to set private properties. However when validators are used in a template placed in AjaxPanel the validators' _parent private property needs to be set to the updated panel with reflection. This is required in order all validators to be rendered as expected. Therefore in such scenarios to make validators work as expected **asp:UpdatePanel** should be used instead of RadAjaxPanel or RadAjaxManager.

## See Also

 * [OnRequestStart]({%slug ajaxpanel/client-side-programming/events/onrequeststart%})

 * [OnResponseEnd]({%slug ajaxpanel/client-side-programming/events/onresponseend%})

 * [Incompatible Controls and Updating 3rd Party Controls with Telerik RadAjax]({%slug ajaxpanel/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax%})
