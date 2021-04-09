---
title: Calling RadEditor Document manager from RadTreeView
description: See how to call the document manager of RadEditor from a context menu of RadTreeView and save the selected document as a child of the right-clicked node.
type: how-to
page_title: Calling RadEditorDocument manager from RadTreeView
slug: editor-calling-radeditor-document-manager-from-radtreeview
res_type: kb
---

## Description

See how to call the document manager of RadEditor from a context menu of RadTreeView and save the selected document as a child of the right-clicked node.

## Solution

The RadContextMenu class will be used. Hook on the OnClientItemClicking event of RadContextMenu and call the fire client side function of the editor.

````ASP.NET
<telerik:RadTreeView  
	ID="RadTreeView1" 
	style="Z-INDEX: 101; LEFT: 16px; POSITION: absolute; TOP: 440px"           
	runat="server"> 
</telerik:RadTreeView> 
 
<telerik:RadContextMenu ID="RadContextMenu1"          
	runat="server" 
	OnClientItemClicking="HandleContext"> 
    <Targets> 
        <telerik:ContextMenuControlTarget ControlID="RadTreeView1" /> 
    </Targets> 
    <Items> 
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Add"> 
        </telerik:RadMenuItem> 
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Edit"> 
        </telerik:RadMenuItem> 
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Open Document Manager"> 
        </telerik:RadMenuItem> 
    </Items> 
</telerik:RadContextMenu> 
 
<telerik:RadEditor ID="RadEditor1"  
	EditModes="All" 
	style="Z-INDEX: 102; LEFT: 8px; POSITION: absolute; TOP: 16px" 
	runat="server"  
	Height="400px"  
	Width="680px"> 
    <DocumentManager ViewPaths="~/docs" UploadPaths="~/docs" DeletePaths="~/docs" /> 
</telerik:RadEditor> 
 
<asp:TextBox ID="textbox" Runat="server" style="display: none;" Text=""></asp:TextBox> 
<asp:Button id="Button1" style="Z-INDEX: 103; LEFT: 192px; POSITION: absolute; TOP:  
 600px" runat="server" Text="AddToTreeView" OnClick="Button1_Click"></asp:Button> 
 <script type="text/javascript"> 
Telerik.Web.UI.Editor.CommandList["DocumentManager"] = function(commandName, editor, args) 
{ 
   var myCallbackFunction = function(sender, args) 
   { 
       var selectedItem = args.SelectedItem; 
       var docSrc = selectedItem.getPath(); 
       
       editor.pasteHtml("<a href='" + docSrc + "'>" + selectedItem.name + "</a>") 
        
       var input = document.getElementById('textbox'); 
       input.value = docSrc; 
   } 
  editor.showDialog("DocumentManager", {}, myCallbackFunction); 
}; 
 
function HandleContext(sender, eventArgs) 
{ 
    if (eventArgs.get_item().get_text() == "Open Document Manager") 
    { 
        var editor = $find("<%= RadEditor1.ClientID %>");  
        editor.fire("DocumentManager"); 
    } 
} 
</script>
````

````C#
protected void Page_Load(object sender, EventArgs e) 
{ 
    if (!IsPostBack) 
    { 
        RadTreeView1.LoadContentFile("tree.xml"); 
    } 
} 
protected void Button1_Click(object sender, EventArgs e) 
{ 
    if (textbox.Text != "") 
    { 
        RadTreeNode node = RadTreeView1.SelectedNode; 
        RadTreeNode child = new RadTreeNode(); 
        child.Text = textbox.Text; 
        child.NavigateUrl = textbox.Text; 
        node.Nodes.Add(child); 
        node.Expanded = true; 
    } 
} 
````

