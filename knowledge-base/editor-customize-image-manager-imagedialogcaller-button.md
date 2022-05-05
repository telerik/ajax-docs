---
title: Call a custom dialog from the Image Manager ImageDialogCaller button
description: The purpose of the ImageDialogCaller user control is to launch the built-in Image Manager dialog, from dialogs like the ImageMap, SetimageProperties, Table and Cell Properties and Style Builder, and to return its value back to the opener dialog. See how you can customize it and launch a custom Image Manager dialog from it in RadEditor for ASP.NET AJAX.
type: how-to
page_title: Call a custom dialog from the Image Manager ImageDialogCaller button
slug: editor-customize-image-manager-imagedialogcaller-button
position: 
tags: 
ticketid: 1563109
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
The purpose of the ImageDialogCaller user control is to launch the built-in Image Manager dialog, from dialogs like the ImageMap, SetImageProperties, Table and Cell Properties and Style Builder, and to return its value back to the opener dialog. See how you can customize it and launch a custom Image Manager dialog from it in RadEditor for ASP.NET AJAX.

## Solution
Here is the solution:

1) Copy the EditorDialogs folder from the [Telerik UI for ASP.NET AJAX](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx) installation to the root of your project
2) Set the editor's ExternalDialogsPath property to point to the EditorDialogs folder, e.g.

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" ExternalDialogsPath="~/EditorDialogs">
     <ImageManager ViewPaths="~/Images" UploadPaths="~/Images" />
     <Content>
         <img alt="my image" src="someimage.png" />
     </Content>
</telerik:RadEditor>
````
3) Open the \EditorDialogs\ImageMap.ascx file, locate the

 
````ASP.NET
<tools:ImageDialogCaller id="ImageSrc" runat="server" />
<!-- 
The purpose of the ImageDialogCaller user control is to launch the built-in Image Manager dialog, from dialogs like the ImageMap, SetimageProperties, Table and Cell Properties and Style Builder, and to return its value back to the opener dialog which in our case is the ImageMap Image file selection input.
-->
````

control and paste the following script below it which will override the built-in _onButtonClickHandler handler of the ImageDialogCaller and allow the communication with the custom Image Manager dialog:

````JavaScript
<script type="text/javascript">
            Telerik.Web.UI.ImageDialogCaller.prototype._onButtonClickHandler = function(e)
            {
                var thisObject = this;
                var callbackfunction = function(sender, args)
                {
                    var src = args;
                    if (src)
                    {
                        thisObject._inputElement.value = src;
                        thisObject.raiseEvent("valueSelected");
                    }
                }
                var args = {editor : this.get_editor()};

                this._editor.showExternalDialog(
                  'CustomImageManager.aspx', //specify here the custom dialog file name
                  args,
                  600,
                  400,
                  callbackfunction,
                  null,
                  'CustomImageManager',
                  true,
                  null,
                  false,
                  false)
            };
            </script>
````

>note The CustomImageManager.aspx parameter of showExternalDialog is the custom dialog that will be opened when clicking on the Image Manager  (ImageDialogCaller) button 

4) Here is the content of the test image manager custom dialog - CustomImageManager.aspx, which should be placed at the root of the web project:

````ASP.NET
<%@ Page language="c#" %> 

<!DOCTYPE HTML > 
<html> 
  <head> 
        <title>Image Manager</title> 
        <script type="text/javascript"> 
        function getRadWindow() //mandatory for the RadWindow dialogs functionality 
        { 
            if (window.radWindow) 
            { 
                return window.radWindow; 
            } 
            if (window.frameElement && window.frameElement.radWindow) 
            { 
                return window.frameElement.radWindow; 
            } 
        return null; 
        } 

        function initDialog() //called when the dialog is initialized 
        { 
            var clientParameters = getRadWindow().ClientParameters; //return the arguments supplied from the parent page 
        } 

        if (window.attachEvent) 
        { 
            window.attachEvent("onload", initDialog); 
        } 
        else if (window.addEventListener) 
        { 
            window.addEventListener("load", initDialog, false); 
        } 

        function GetImageUrl(listBoxId ) 
        { 
            var listbox = document.getElementById( listBoxId ); 
            var url = listbox[listbox.selectedIndex].value; 
            if( url != "" ) 
            {        
                getRadWindow().close(url); //use the close function of the getRadWindow to close the dialog and pass the arguments from the dialog to the callback function of the ImageMap dialog
            } 
        } 
        </script> 
</head> 
    <body> 
        <form id="Form1" method="post" runat="server"> 
            <table id="Table1" cellSpacing="0" cellPadding="1"  border="0"> 
                <tr> 
                <td colspan=2>Select an image:</td> 
                </tr><TR> 
                    <TD> 
                        <asp:ListBox id="ListBox1" runat="server" Width="224px" Rows="8"> 
                            <asp:ListItem Value="http://www.telerik.com/demos/aspnet/Editor/Img/productBox.gif">Image1</asp:ListItem> 
                            <asp:ListItem Value="http://www.telerik.com/demos/aspnet/Editor/Img/productBox.gif">Image2</asp:ListItem> 
                            <asp:ListItem Value="http://www.telerik.com/demos/aspnet/Editor/Img/productBox.gif">Image3</asp:ListItem> 
                            <asp:ListItem Value="http://www.telerik.com/demos/aspnet/Editor/Img/productBox.gif">Image4</asp:ListItem> 
                            <asp:ListItem Value="http://www.telerik.com/demos/aspnet/Editor/Img/productBox.gif">Image5</asp:ListItem> 
                        </asp:ListBox></TD> 
                    <TD vAlign="top"> 
                        <button id="Button1" onclick="return GetImageUrl('<%=this.ListBox1.ClientID%>');" style="BORDER-RIGHT: dimgray 1px solid; BORDER-TOP: dimgray 1px solid; BORDER-LEFT: dimgray 1px solid; WIDTH: 64px; BORDER-BOTTOM: dimgray 1px solid; HEIGHT: 24px" type=button>Insert</Button></TD> 
                </TR> 
            </table> 
        </form> 
    </body> 
</html> 
````

## See Also
* [Customize RadEditor built-in dialogs](https://demos.telerik.com/aspnet-ajax/editor/examples/externaldialogspath/defaultcs.aspx)
 
 