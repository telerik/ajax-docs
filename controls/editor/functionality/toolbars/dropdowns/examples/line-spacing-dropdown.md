---
title: Line Spacing Dropdown
page_title: Line Spacing Dropdown - RadEditor
description: Check our Web Forms article about Line Spacing Dropdown.
slug: editor/functionality/toolbars/dropdowns/examples/line-spacing-dropdown
tags: line,spacing,dropdown
published: True
position: 0
---

# Line Spacing Dropdown

Here is an example demonstrating how to create a line spacing dropdown, from which you can change line distance within text:

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server">
</asp:ScriptManager>
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
	<Tools>
		<telerik:EditorToolGroup>
			<telerik:EditorDropDown Name="LineSpacing" Text="Line Spacing" PopupWidth="110" PopupHeight="90">
				<telerik:EditorDropDownItem Name="Default" Value="" />
				<telerik:EditorDropDownItem Name="Single space" Value="20px" />
				<telerik:EditorDropDownItem Name="1.5 Lines" Value="35px" />
				<telerik:EditorDropDownItem Name="Double spacing" Value="50px" />
			</telerik:EditorDropDown>
		</telerik:EditorToolGroup>
	</Tools>
</telerik:RadEditor>
<script type="text/javascript">
	function OnClientCommandExecuting(editor, args)
	{
		var name = args.get_name();
		var val = args.get_value();
		var cArea = editor.get_contentArea();
		if (name == "LineSpacing")
		{
			if (cArea.firstChild && cArea.firstChild.tagName == "P")
			{
				cArea.firstChild.style.lineHeight = val;
			}
			else
			{
				editor.set_html("<p style='line-height:" + val + "'>" + editor.get_html() + "</p>");
			} 
			args.set_cancel(true);
		}
	}
</script>
````


