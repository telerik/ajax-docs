---
title: OnClientContextMenuItemClicked
page_title: OnClientContextMenuItemClicked - RadSplitButton
description: Check our Web Forms article about OnClientContextMenuItemClicked.
slug: splitbutton/client-side-programming/events/onclientcontextmenuitemclicked
tags: onclientcontextmenuitemclicked
published: True
position: 7
---

# OnClientContextMenuItemClicked

The **contextMenuItemClicked** event is fired when the user clicks on a ContextMenu Item.

The event handler receives two parameters:

1. The instance of the clicked RadSplitButton control

1. An eventArgs parameter of type Telerik.Web.UI.**RadSplitButtonContextMenuItemClickedEventArgs**, containing the following properties and methods:

	* get_item() - returns the clicked Menu Item

	* get_newButtonText() - gets the `Text` that is about to be set as RadSplitButton's Text. By default returns `Text` of the clicked MenuItem.

	* set_newButtonText() - sets the `Text` that is about to be set as RadSplitButton's Text

	* get_newCommandName() - gets the `CommandName` that is about to be set as RadSplitButton's Text. By default returns `Value` of the clicked MenuItem.

	* set_newCommandName() - sets the `CommandName` that is about to be set as RadSplitButton's Text

	* get_newCommandArgument() - gets the `CommandArgument` that is about to be set as RadSplitButton's Text. By default returns an empty String.

	* set_newCommandArgument() - sets the `CommandArgument` that is about to be set as RadSplitButton's Text

>note This event provides to the user the opportunity to have full control over the `Text`, `CommandName` and `CommandArgument` that will be processed to the Server.

>caption Example:

````ASPX
<script>
    function OnClientContextMenuItemClicked(sender, args) {
        args.set_newButtonText("New Text");
        args.set_newCommandArgument("New CommandArgs");
        args.set_newCommandName("New CommandName");
    }
</script>
<telerik:RadSplitButton runat="server" AutoPostBack="true" ID="RadSplitButton1" Text="Paste" CommandName="Paste"
    OnClientContextMenuItemClicked="OnClientContextMenuItemClicked" OnCommand="RadSplitButton1_Command">
    <ContextMenu>
        <Items>
            <telerik:RadMenuItem Text="Paste" Value="Paste"></telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Paste plain" Value="PastePlain"></telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Paste as HTML" Value="PasteHtml"></telerik:RadMenuItem>
        </Items>
    </ContextMenu>
</telerik:RadSplitButton>
<br />
<asp:Label Text="Label1" ID="Label1" runat="server" />
````

````C#
protected void RadSplitButton1_Command(object sender, CommandEventArgs e)
{
    var button = sender as RadSplitButton;
    var commandName = e.CommandName;
    var commandArgument = e.CommandArgument;
    Label1.Text = String.Format("<br />CommandName: <b>{0}</b>;<br /> CommandArgument:<b>{1}</b>", commandName, commandArgument);
}
````
````VB
Protected Sub RadSplitButton1_Command(ByVal sender As Object, ByVal e As CommandEventArgs)
    Dim button = TryCast(sender, RadSplitButton)
    Dim commandName = e.CommandName
    Dim commandArgument = e.CommandArgument
    Label1.Text = String.Format("<br />CommandName: <b>{0}</b>;<br /> CommandArgument:<b>{1}</b>", commandName, commandArgument)
End Sub
````

## Set different CommandArgument for each Menu item

The embedded ContextMenu in RadSplitButton can handle custom attributes as described in [RadMenu Custom Attributes]({%slug menu/radmenu-items/custom-attributes%}). With the help of the OnClientContextMenuItemClicked event we can set different CommandName and CommandArgument upon clicking each MenuItem:

````ASPX
<telerik:RadSplitButton runat="server" ID="RadSplitButton1" Text="Paste"
    CommandName="Paste" CommandArgument="Default Argument"
    OnClientContextMenuItemClicked="OnClientContextMenuItemClicked"
    OnCommand="RadSplitButton1_Command" Skin="Silk">
    <ContextMenu>
        <Items>
            <telerik:RadMenuItem Text="Paste" CommandName="Paste" CommandArgument="Custom Argument 1"></telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Paste as Plain Text" CommandName="PastePlainText" CommandArgument="Custom Argument 2"></telerik:RadMenuItem>
            <telerik:RadMenuItem Text="Paste as HTML" CommandName="PasteHtml" CommandArgument="Custom Argument 3"></telerik:RadMenuItem>
        </Items>
    </ContextMenu>
</telerik:RadSplitButton>
<br />
<asp:Label Text="" ID="Label1" runat="server" />
````

````JavaScript
function OnClientContextMenuItemClicked(sender, args) {
    var item = args.get_item();
    //get the custom attributes (CommandName and CommandArgument) set to the items
    var itemCommandName = item.get_attributes().getAttribute("CommandName");
    var itemCommandArg = item.get_attributes().getAttribute("CommandArgument");
    args.set_newCommandName(itemCommandName);
    args.set_newCommandArgument(itemCommandArg);
}
````

````C#
protected void RadSplitButton1_Command(object sender, CommandEventArgs e)
{
    var commandName = e.CommandName;
    var commandArgument = e.CommandArgument;
    Label1.Text += String.Format("<br />CommandName: <b>{0}</b>;<br />CommandArgument: <b>{1}</b>", commandName, commandArgument);
}
````
````VB
Protected Sub RadSplitButton1_Command(ByVal sender As Object, ByVal e As CommandEventArgs)
    Dim commandName = e.CommandName
    Dim commandArgument = e.CommandArgument
    Label1.Text &= String.Format("<br />CommandName: <b>{0}</b>;<br />CommandArgument: <b>{1}</b>", commandName, commandArgument)
End Sub
````

## See Also

 * [RadSplitButton - Client-side Events Demo](https://demos.telerik.com/aspnet-ajax/splitbutton/client-side-events/defaultcs.aspx)
 
 * [SplitButton Object]({%slug splitbutton/client-side-programming/splitbutton-object%})

 * [Telerik.Web.UI.RadButtonEventArgs](https://docs.telerik.com/devtools/aspnet-ajax/api/client/args/Telerik.Web.UI.ButtonEventArgs)
