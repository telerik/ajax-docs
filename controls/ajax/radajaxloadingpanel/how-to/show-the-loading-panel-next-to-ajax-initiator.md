---
title: Show the Loading Panel next to AJAX Initiator
page_title: Show the Loading Panel next to AJAX Initiator | RadAjax for ASP.NET AJAX Documentation
description: Show the Loading Panel next to AJAX Initiator
slug: ajax/radajaxloadingpanel/how-to/show-the-loading-panel-next-to-ajax-initiator
tags: show,the,loading,panel,next,to,ajax,initiator
published: True
position: 2
---

# Show the Loading Panel next to AJAX Initiator



## 

Sometimes people may want to show the loading panel on a specific position, like right next to the AJAX initiator for example. When you have a complex control, e.g. tabstrip, it could be better to show the loading over the clicked tab (say the tabstrip is updated itself via AJAX) instead of showing it on one and the same place.

In order to achieve that you can use a **Sticky** loading panel (set the RadAjaxLoadingPanel **IsSticky** property to true) and set the loading panel position on the **OnRequestStart**client-side event, using the event arguments' **EventTargetElement** attributes. Below is a sample code you can use and modify according to your exact needs. There are some standard controls (for simplicity) which are ajaxified and update a label control in this example.

There is just one tricky thing here (the first line from the following RequestStart function) - we clear the displayed loading panels cache, otherwise the first loading panel position will be used on each subsequent request. Then we change *left* and *top* attributes of loading panel element style according to the offset of the event target in this case. On button and checkbox click events we just update the label server-side.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function RequestStart(sender, eventArgs) {
	        var divElementStyle = $find("<%= RadAjaxLoadingPanel1.ClientID %>").get_element().style;
	        divElementStyle.position = 'absolute';
	        //position the loading panel
	        divElementStyle.left = eventArgs.get_eventTargetElement().offsetLeft + eventArgs.get_eventTargetElement().offsetWidth + "px";
	        divElementStyle.top = eventArgs.get_eventTargetElement().offsetTop + "px";
	    }
	</script>
</telerik:RadCodeBlock>
````



````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<ClientEvents OnRequestStart="RequestStart"></ClientEvents>
	<AjaxSettings>
	     <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Label1" LoadingPanelID="RadAjaxLoadingPanel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="Button2">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Label1" LoadingPanelID="RadAjaxLoadingPanel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	    <telerik:AjaxSetting AjaxControlID="CheckBox1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Label1" LoadingPanelID="RadAjaxLoadingPanel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" MinDisplayTime="1000"
	Skin="" IsSticky="true">
	<asp:Image ID="Image1" runat="server" ImageUrl="~/loading.gif" AlternateText="Loading.." />
</telerik:RadAjaxLoadingPanel>
<asp:Button ID="Button1" runat="server" Text="Button" Width="100px" />
<asp:Label ID="Label1" runat="server" Text="Label" Style="z-index: 103; left: 137px;
	        position: absolute; top: 255px"></asp:Label>
<asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="True" Text="check box" />
<asp:Button ID="Button2" runat="server" Text="Button2" Width="100px" />
````


