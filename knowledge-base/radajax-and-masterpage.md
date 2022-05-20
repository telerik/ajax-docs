---
title: Use Telerik AJAX and MasterPage
page_title: Use Telerik AJAX and MasterPage
description: "Learn how to use Telerik UI for ASP.NET AJAX and MasterPage."
slug: ajaxmanager/how-to/radajax-and-masterpage
previous_url: ajax/radajaxmanager/how-to/radajax-and-masterpage, controls/ajaxmanager/how-to/radajax-and-masterpage
tags: telerik, asp, net, ajax, manager, how, to, use, masterpage
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I use Telerik UI for ASP.NET AJAX and `MasterPage`? 

## Solution

You can use the Telerik UI for ASP.NET AJAX controls with `MasterPage` in various scenarios. However, they cannot have two AjaxManager controls in the master and in the content page at the same time. Instead, since the May 2007 release, you can add the `RadAjaxManagerProxy` control and use the configure the design-time in the same way [as the manager]({%slug ajaxmanager/overview%}).

You can also add the AjaxManager control in any `ContentPage`. However, some scenarios cannot be handled when using the AjaxManager in this way, for example, a control in the master page cannot be ajaxified. The AjaxManager can handle only cases when the controls that will be ajaxified are beneath in the manager control hierarchy. Therefore, it is strongly recommended that you place the AjaxManager in the `MasterPage` and add proxy controls in content pages.

The following example demonstrates how to use the `RadAjaxManagerProxy` within a content page. 

>* Note that the `RadAjaxManagerProxy` control can be used for design-time configuration only. It does not have a client-side object or methods
>* If you need the server or client-side AjaxManager functionality, like the `ResponseScripts` collection or the `ajaxRequest` function, you can get the `master` manager instance with the server-side `GetCurrent` method from the `ContentPage` code-behind in this way: `RadAjaxManager.GetCurrent(Page)`. 


````ASPNET
<telerik:RadAjaxManagerProxy ID="AjaxManagerProxy1" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="DropDownList1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="GridView1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="GridView1" />
	            <telerik:AjaxUpdatedControl ControlID="DetailsView1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManagerProxy>
````



Use server-side code block in your JavaScript function to call the master manager `AjaxRequest` function from the `ContentPage` as well:

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function myContentClickHandler() {
	        $find("<%= RadAjaxManager.GetCurrent(Page).ClientID %>").ajaxRequest("content");
	    }
	</script>
</telerik:RadCodeBlock>
````



As to the AJAX settings, they can still be added programmatically. Telerik AJAX controls can be accessed at the code-behind of the `ContentPage` by using the `FindControl` method of the `MasterPage` object. However, if you use a lot of `ContentPage` instances, write the same "finding" code in all the places. A better approach is to set the Manager and the Loading Panel if used as a property, and access it directly.

For a live example, refer to the [demo on using Telerik AJAX and `MasterPage`](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/usercontrol/defaultcs.aspx).

## See Also

* [MasterPages: Ajaxify and Update Controls in the Master and Content Pages]({%slug ajaxmanager/how-to/ajaxify-and-update-controls-in-master-and-content-page%})

* [MasterPages: Initiate Requests from One ContentPlaceHolder and Load or Update Controls in Another]({%slug ajaxmanager/how-to/initiating-requests-from-contentplaceholder%})
