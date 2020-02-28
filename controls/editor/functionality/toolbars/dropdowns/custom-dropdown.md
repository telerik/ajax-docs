---
title: Custom Dropdown
page_title: Custom Dropdown | RadEditor for ASP.NET AJAX Documentation
description: Custom Dropdown
slug: editor/functionality/toolbars/dropdowns/custom-dropdown
tags: custom,dropdown
published: True
position: 15
---

# Custom Dropdown

Follow the steps below to create custom dropdown in-line in the editor's declaration and dynamically on the server:

1. Register the dropdown by adding the telerik:EditorDropDown tag to Tools inner tag of the RadEditor declaration:

	**ASP.NET**
	
		<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
			<Tools>
				<telerik:EditorToolGroup>
					<telerik:EditorDropDown Name="Emoticons" Text="Emoticons" ItemsPerRow="3" PopupWidth="90"
						PopupHeight="90">
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil1.gif' />" Value="./Emoticons/smil1.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil2.gif' />" Value="./Emoticons/smil2.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil3.gif' />" Value="./Emoticons/smil3.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil4.gif' />" Value="./Emoticons/smil4.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil8.gif' />" Value="./Emoticons/smil8.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil6.gif' />" Value="./Emoticons/smil6.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil7.gif' />" Value="./Emoticons/smil7.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil9.gif' />" Value="./Emoticons/smil9.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil11.gif' />" Value="./Emoticons/smil11.gif" />
					</telerik:EditorDropDown>
				</telerik:EditorToolGroup>
			</Tools>
		</telerik:RadEditor>

	To populate the items of the dropdown use the telerik:EditorDropDownItem inner tag of telerik:EditorDropDown. The **Name** attribute of the telerik:EditorDropDownItem tag represents the item name that will be rendered in the dropdown and the **Value** represents the value of the selected item.

1. To create and configure a custom dropdown dynamically on the server use the code below:

	**C#**
	
		//add a new Toolbar dynamically    
		EditorToolGroup dynamicToolbar = new EditorToolGroup();
		RadEditor1.Tools.Add(dynamicToolbar);

		//add a custom dropdown and set its items and dimension attributes    
		EditorDropDown ddn = new EditorDropDown("DynamicDropdown");
		ddn.Text = "Dynamic dropdown";

		//Set the popup width and height    
		ddn.Attributes["width"] = "110px";
		ddn.Attributes["popupwidth"] = "240px";
		ddn.Attributes["popupheight"] = "100px";

		//Add items    
		ddn.Items.Add("Daily signature", "TTYL,<br/>Tom");
		ddn.Items.Add("Informal Signature", "Greetings,<br/>Tom");
		ddn.Items.Add("Official Signature", "Yours truly,<br/>Tom Jones");

		//Add tool to toolbar    
		dynamicToolbar.Tools.Add(ddn);

	**VB**
		
		'add a new Toolbar dynamically   
		Dim dynamicToolbar As New EditorToolGroup()
		RadEditor1.Tools.Add(dynamicToolbar)

		'add a custom dropdown and set its items and dimension attributes   
		Dim ddn As New EditorDropDown("DynamicDropdown")
		ddn.Text = "Dynamic dropdown"

		'Set the popup width and height   
		ddn.Attributes("width") = "110px"
		ddn.Attributes("popupwidth") = "240px"
		ddn.Attributes("popupheight") = "100px"

		'Add items   
		ddn.Items.Add("Daily signature", "TTYL,<br/>Tom")
		ddn.Items.Add("Informal Signature", "Greetings,<br/>Tom")
		ddn.Items.Add("Official Signature", "Yours truly,<br/>Tom Jones")

		'Add tool to toolbar   
		dynamicToolbar.Tools.Add(ddn)

1. After adding the custom dropdown to the editor's toolbar, you should attach a function to the editor's OnClientCommandExecuting, the arguments of which will give you reference to the selected dropdown name and value.Once you obtain the selected item's value, you can modify it and paste it through the pasteHtml function in the content area, e.g.

	**ASP.NET**
		
		<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
			<Tools>
				<telerik:EditorToolGroup>
					<telerik:EditorDropDown Name="Emoticons" Text="Emoticons" ItemsPerRow="3" PopupWidth="90"
						PopupHeight="90">
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil1.gif' />" Value="./Emoticons/smil1.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil2.gif' />" Value="./Emoticons/smil2.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil3.gif' />" Value="./Emoticons/smil3.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil4.gif' />" Value="./Emoticons/smil4.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil8.gif' />" Value="./Emoticons/smil8.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil6.gif' />" Value="./Emoticons/smil6.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil7.gif' />" Value="./Emoticons/smil7.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil9.gif' />" Value="./Emoticons/smil9.gif" />
						<telerik:EditorDropDownItem Name="<img src='./Emoticons/smil11.gif' />" Value="./Emoticons/smil11.gif" />
					</telerik:EditorDropDown>
				</telerik:EditorToolGroup>
			</Tools>
		</telerik:RadEditor>
		<script type="text/javascript">
			function OnClientCommandExecuting(editor, args)
			{    
				var name = args.get_name();    
				var val = args.get_value();    
				
				if (name == "Emoticons")    
				{        
					editor.pasteHtml("<img src='" + val + "'>");               
					//Cancel the further execution of the command as such a command does not exist in the editor command list        
					args.set_cancel(true);    
				}       
				
				if (name == "DynamicDropdown")    
				{        
					editor.pasteHtml("<div style='width:100px;background-color:#fafafa;border:1px dashed #aaaaaa;'>" + val + "</div>");
					//Cancel the further execution of the command as such a command does not exist in the editor command list        
					args.set_cancel(true);
				}
			}
		</script>


## See Also

 * [Adding Custom Tools](https://demos.telerik.com/aspnet-ajax/Editor/Examples/CustomTools/DefaultCS.aspx)
