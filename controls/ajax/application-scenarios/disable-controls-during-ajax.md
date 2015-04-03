---
title: Disable Controls During AJAX
page_title: Disable Controls During AJAX | UI for ASP.NET AJAX Documentation
description: Disable Controls During AJAX
slug: ajax/application-scenarios/disable-controls-during-ajax
tags: disable,controls,during,ajax
published: True
position: 8
---

# Disable Controls During AJAX



## 

This help article describes how to disable a single control during an AJAX update or how to set a global flag to disable a control, and shows examples of each.

You may want to disable control during an AJAX update, so the users won't be able to use it before response end. You can easily disable a control during an AJAX update using the [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%}) and[OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%}) client-side events and changing the __disabled__ value.

__Example 1__ shows this approach.

Example 1: Prevent the interaction with a control during an AJAX request.

````ASPNET
	    <script type="text/javascript">
	        function RequestStart(sender, args) {
	            args.EventTargetElement.disabled = true;
	        }
	        function ResponseEnd(sender, args) {
	            args.EventTargetElement.disabled = false;
	        }        
	    </script>
	    <asp:Button ID="btnUpdate" runat="server" Text="Update" />
	    <asp:Label ID="Label1" runat="server"></asp:Label>
	    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
	    </telerik:RadScriptManager>
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="btnUpdate">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Label1" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	        <ClientEvents OnRequestStart="RequestStart" OnResponseEnd="ResponseEnd" />
	    </telerik:RadAjaxManager>
````



Implementing the code in __Example 1__ will disable any control that has already started a request until its response ends.



If you want to disable AJAX until the current response finishes, no matter which control has started the first request and which is going to make a second one, you can set a global flag as shown in __Example 2__.

Example 2: Notify the user that an action is in progress.

````JavaScript
	
	        var AjaxIsActive = false;
	        function RequestStart() {
	            if (!AjaxIsActive) {
	                AjaxIsActive = true;
	            }
	            else {
	                alert('Wait for ajax to finish'); return false;
	            }
	        }
	        function ResponseEnd() {
	            AjaxIsActive = false;
	        }
	
````



# See Also

 * [OnRequestStart]({%slug ajax/client-side-programming/events/onrequeststart%})

 * [OnResponseEnd]({%slug ajax/client-side-programming/events/onresponseend%})
