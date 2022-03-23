---
title: Using AjaxManager and AjaxPanel Causes Reversed Execution Order for the create Control Function 
page_title: Using AjaxManager and AjaxPanel Causes Reversed Execution Order for the create Control Function
description: "Learn what to do when using the Telerik UI for ASP.NET AjaxManager and AjaxPanel leads to a reversed execution order of the create control function."
slug: ajaxmanager/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls
previous_url: ajax/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls, controls/ajaxmanager/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls, controls/ajaxmanager/troubleshooting/tips-and-tricks-for-ajaxifying-specific-controls
tags: telerik, asp, net, ajax, manager, panel, causes, reversed, execution, order, of, create, control, function
published: True
type: troubleshooting
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxPanel</td>
		</tr>
	</tbody>
</table>

## Description

What can I do when using the Telerik UI for ASP.NET AjaxManager and AjaxPanel leads to a reversed execution order of the `$create` control function?

## Solution  

The reversed execution order is different from the same in a regular postback. For example, if you have the code from the example below, the `$create` functions for both inputs will execute in a different order on initial load and after an AJAX request:

````ASP.NET
<telerik:RadCodeBlock ID="RCB1" runat="server">
	<script type="text/javascript">
	    function onTextBoxLoad(sender, args) {
	        alert(sender.get_id());
	    } 
	</script>
</telerik:RadCodeBlock>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
<telerik:RadTextBox RenderMode="Lightweight" runat="server" ID="RadTextBox1">
	    <ClientEvents OnLoad="onTextBoxLoad" />
</telerik:RadTextBox>
<telerik:RadTextBox RenderMode="Lightweight" runat="server" ID="RadTextBox2">
	    <ClientEvents OnLoad="onTextBoxLoad" />
</telerik:RadTextBox>
<asp:Button ID="Button2" runat="server" Text="Do Ajax Call" />
</telerik:RadAjaxPanel>
````



Also the `$create` function execution depends on the order of the AJAX settings if you are using the AjaxManager control. The following demo demonstrates that on an AJAX call (click `Button1`), the `$create` functions for the three buttons will execute in the order they are added in the AjaxManager settings as updated controls and not in the original order that appears in the initial page load.

````ASP.NET
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	    <script type="text/javascript">
	            function buttonLoad(sender, args) {
	                alert(sender.get_id());
	            }
	    </script>
</telerik:RadCodeBlock>
<telerik:RadAjaxManager ID="RadAjaxManager3" runat="server">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="RadButton1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="RadButton2" />
	            <telerik:AjaxUpdatedControl ControlID="RadButton1" />
	            <telerik:AjaxUpdatedControl ControlID="RadButton3" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadButton RenderMode="Lightweight" ID="RadButton1" runat="server" OnClientLoad="buttonLoad" Text="Click">
</telerik:RadButton>
<telerik:RadButton RenderMode="Lightweight" ID="RadButton2" runat="server" OnClientLoad="buttonLoad">
</telerik:RadButton>
<telerik:RadButton RenderMode="Lightweight" ID="RadButton3" runat="server" OnClientLoad="buttonLoad">
</telerik:RadButton>
````



Since the Q1 2014 release, you can handle both cases with the `KeepOriginalOrderOfScriptDescriptorsDuringAjax` setting by setting it globally in the `web.config` file under the `appSettings` tag.

````ASP.NET
<appSettings>
	<add key="KeepOriginalOrderOfScriptDescriptorsDuringAjax" value="true"/>
</appSettings>
````


