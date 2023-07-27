---
title: Add a combobox to RadEditor tools collection
description: See how you can replace the built-in tools with custom ones, for example, to replace a RadEditor dropdown with RadComboBox which offers filtering out-of-the-box - Telerik UI for ASP.NET AJAX
type: how-to
page_title: Add a Custom Control in the RadEditor toolbar
slug: editor-replace-a-dropdown-with-combobox
position: 
tags: 
ticketid: 1617243
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadEditor for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
In specific scenarios, the developer may want to replace the built-in tools with custom ones, for example, to replace a RadEditor dropdown with RadComboBox which offers filtering out-of-the-box.

## Solution
You can use the code below to put RadComboBox before a custom dropdown of RadEditor on the toolbar and after that hide the custom one:

````ASPX
        <telerik:RadComboBox ID="RadComboBox1" runat="server" Height="240px" Width="150px" Filter="StartsWith" OnClientSelectedIndexChanging="OnClientSelectedIndexChanging" OnClientKeyPressing="OnClientKeyPressing">
            <Items>
                <telerik:RadComboBoxItem Text="Item1" Value="Item1" />
                <telerik:RadComboBoxItem Text="Item2" Value="Item2" />
                <telerik:RadComboBoxItem Text="Item3" Value="Item3" />
            </Items>
        </telerik:RadComboBox>
        <telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">
            <Tools>
                <telerik:EditorToolGroup>
                    <telerik:EditorTool Name="Bold" />
                    <telerik:EditorTool Name="Italic" />
                    <telerik:EditorTool Name="Underline" />
                    <telerik:EditorDropDown Name="CustomDropdown" Width="160px" />
                    <telerik:EditorTool Name="LinkManager" />
                </telerik:EditorToolGroup>
            </Tools>
        </telerik:RadEditor>
        <script type="text/javascript"> 
            function OnClientLoad(editor) {
                //get a reference to the combo wrapper 
                var combo = $find("<%=RadComboBox1.ClientID%>");
                var comboWrapper = combo.get_element();

                //get a reference to the custom dropdown tool and its parent element 
                var customDropdown = editor.getToolByName("CustomDropdown").get_element();
                var parentCustomTool = customDropdown.parentNode;

                //insert the combobox before the custom dropdown 
                parentCustomTool.insertBefore(comboWrapper, customDropdown);
                //hide the custom dropdown 
                customDropdown.style.display = "none";
            }

            function OnClientSelectedIndexChanging(sender, args) {
                var editor = $find("<%=RadEditor1.ClientID%>");
                editor.pasteHtml(sender.get_value());
            }

            function OnClientKeyPressing(sender, eventArgs) {
                
                if (eventArgs.get_domEvent().keyCode == 13) {
                    var item = sender.findItemByText(sender.get_text());
                    if (item) item.select();
                }
            }
        </script>
````

  