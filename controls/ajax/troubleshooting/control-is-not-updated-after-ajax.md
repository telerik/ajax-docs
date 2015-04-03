---
title: Control is Not Updated after AJAX
page_title: Control is Not Updated after AJAX | UI for ASP.NET AJAX Documentation
description: Control is Not Updated after AJAX
slug: ajax/troubleshooting/control-is-not-updated-after-ajax
tags: control,is,not,updated,after,ajax
published: True
position: 3
---

# Control is Not Updated after AJAX



You have added the necessary AJAX settings, but the AJAX-enabled control is not updating as expected. There are several possible reasons forthis when you are using [RadAjaxManager]({%slug ajax/radajaxmanager/overview%}).This help article suggests a few workarounds.

## 

* *First of all, you should check whether the control is updated without using AJAX.*Set the __EnableAJAX__ property of __RadAjaxManager__ to*false *and verify your control is updated using regular postbacks.Note that in most cases, the AJAX initiator control (the one set as AJAX-enabled) will need to post backto the server, so the __RadAjaxManager__ will be able to "tranform" its postbacks to AJAX requests.

* *You should verify whether the proper AJAX initiator control is set and any user interaction concerning this controlupdates the one set as the AJAX updated control.*For instance, you may get unexpected results when using an [ajaxRequestWithTarget]({%slug ajax/client-side-programming/overview%})client-side function. There, the AJAX initiator is the control whose UniqueID is set as the __eventTarget__ argument of the	function, which	may not be __RadAjaxPanel__ or __RadAjaxManager__ controls. On the other hand, when	one updates a control in an __AjaxRequest__ server side, the AJAX initiator should be __RadAjaxManager__	itself.

* *Check whether you tried to ajaxify a control placed in a __RadAjaxPanel__ using the__RadAjaxManager__.*If you have placed a button in a __RadAjaxPanel__ and you want the button to update a control that is outside of the	__RadAjaxPanel__, it will not be updated despite the __RadAjaxManager's__ AJAX settings. This is because	__RadAjaxPanel__ precedes __RadAjaxManager__ so the __RadAjaxPanel__ will make the	AJAX requests updating its content only (as this is the way that the __RadAjaxPanel__ control is designed). You can find more	information [here]({%slug ajax/radajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}).

* *You have an AJAX-enabled container control (like __asp:Panel__) and you want to AJAX-enable a controlinside it.*Note, you cannot do this using the __RadAjaxManager__ designer. If you have added such settings manually, some of	them will not work. __Example 1__ shows a button that is expected to update two labels.Example 1:Button1 will not update the Label2 in this case.

````ASPNET
	    <asp:Panel ID="Panel1" runat="server" Height="51px" Width="287px">
	        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
	        <asp:Label ID="Label1" runat="server" Text="1" Height="18px" Width="224px"></asp:Label>
	    </asp:Panel>
	    <asp:Label ID="Label2" runat="server" Text="2" />
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Panel1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Label2" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Label1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
````

In __Example 1__, only one label will be updated because only one of these settings will be performed by the Manager.	The __RadAjaxManager__ designer will not allow you to add the second setting and you may simply use only one AjaxControlID	(Panel1 or Button1) to achieve your goal (__Example 2__).Example 2: Button1 will update both Label controls.

````ASPNET
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Label2" />
	                    <telerik:AjaxUpdatedControl ControlID="Label1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
````



# See Also

 * [Controls Wrapped in AjaxPanel and Added to AjaxManager Settings]({%slug ajax/radajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%})
