---
title: Using the Target Attribute
page_title: Using the Target Attribute | RadWindow for ASP.NET AJAX Documentation
description: Using the Target Attribute
slug: window/how-to/using-the-target-attribute
tags: using,the,target,attribute
published: True
position: 5
---

# Using the Target Attribute

The **RadWindow** objects on your page are automatically added to the frames collection of the browser. As a result, you can use the **RadWindow** objects as the target of a link, just as you link to any other frame or window.

When you use the **RadWindow** as the target of a link, the link will not open unless the window is currently visible. You can prevent this limitation by adding an **onclick** attribute to the link in which you open the window.

## Example

Copy the following markup into your default.aspx source. Run the application and click on both links. Observe that the target attribute opens each specified URL in the target window. Close both windows, and click the links again. Notice that the Navigation link, which has an **onclick** attribute, reopens and displays the Google Web site, but the Content link no longer works.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
	<table style="height: 500px">
		<tr>
			<td style="vertical-align: top; width: 220px;" id="NavigationDiv">
				<a href="http://www.google.com" target="NavigationWindow" onclick="window.radopen(null, 'NavigationWindow');">
					Load Google in Navigation Window</a>
				<br />
				<a href="http://www.yahoo.com" target="ContentWindow">Load Yahoo in Content Window</a>
			</td>
			<td id="ContentDiv" style="width: 213px">
				<telerik:RadWindowManager ID="RadWindowManager1" runat="server" Skin="Vista" VisibleOnPageLoad="True">
					<Windows>
						<telerik:RadWindow OffsetElementID="NavigationDiv" runat="server" Width="200px" Height="200px"
							Top="50px" ID="NavigationWindow" Style="display: none;" Behaviors="Default" InitialBehaviors="None"
							Title="Navigation Window">
						</telerik:RadWindow>
						<telerik:RadWindow OffsetElementID="ContentDiv" runat="server" Height="400px" ID="ContentWindow"
							Style="display: none;" Behaviors="Default" InitialBehaviors="None" Title="Content Window">
						</telerik:RadWindow>
					</Windows>
				</telerik:RadWindowManager>
			</td>
		</tr>
	</table>
````

## See Also

 * [Opening Windows]({%slug window/getting-started/opening-windows%})
