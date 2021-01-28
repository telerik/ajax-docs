---
title: Associate RadToolTip with RadToolBarButton
page_title: Associate RadToolTip with RadToolBarButton - RadToolBar
description: Check our Web Forms article about Associate RadToolTip with RadToolBarButton.
slug: toolbar/how-to/associate-radtooltip-with-radtoolbarbutton
tags: associate,radtooltip,with,from,radtoolbarbutton
published: True
position: 2
---

# Associate RadToolTip with RadToolBarButton

## 

Since 2016 Q1 SP1 custom attributes as well as **id** are not rendered for the **RadToolBarButton**, thus the **RadToolTip**'s **TargetControlID** property cannot be used to set the **RadToolBarButton** as target. This topic shows how **RadToolTip** can be associated with **RadToolBarButton** without using this property.


````ASPNET
<telerik:RadToolBar ID="RadToolBar1" runat="server" Width="300px" OnClientMouseOver="OnClientMouseOver">
	<Items>
		<telerik:RadToolBarButton Text="ToolTip added on mouseover" Value="Add" CommandName="add">
		</telerik:RadToolBarButton>
		<telerik:RadToolBarButton Text="No tooltip"></telerik:RadToolBarButton>
	</Items>
</telerik:RadToolBar>

<telerik:RadToolTip ID="RadToolTip1" RelativeTo="Element" runat="server" ShowEvent="FromCode" HideEvent="LeaveTargetAndToolTip">
	<div>
		My Custom ToolTip
	</div>
</telerik:RadToolTip>

<script type="text/javascript">
	function ShowToolTip(element) {
		var tooltip = $find("<%=RadToolTip1.ClientID%>");
		tooltip.set_targetControl(element);
		tooltip.show();
	}

	function OnClientMouseOver(sender, args) {
		var button = args.get_item();
		var sCommandName = button.get_commandName();
		if (sCommandName == 'add') {
			ShowToolTip(button.get_element());
		}
	}
</script>
````

