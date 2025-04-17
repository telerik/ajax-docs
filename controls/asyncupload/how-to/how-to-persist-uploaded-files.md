---
title: How to Persist Uploaded Files
page_title: How to Persist Uploaded Files - RadAsyncUpload
description: Explore how to persist uploaded files using the AsyncUpload control for reliable file management.
slug: asyncupload/how-to/how-to-persist-uploaded-files
tags: how,to,persist,uploaded,files
published: True
position: 3
---

# How to Persist Uploaded Files

## Persist uploaded files

**RadAsyncUpload** provides **PostbackTriggers** property which can be used to persist the information for the successfully uploaded files after a postback. Using that property the information about successfully uploaded files will be persisted after every postback until an exact control triggers a postback. When a postback is triggered from a control which ID is contained by **PostbackTriggers** property all the information for the uploaded files will become available on the server side and the RadAsyncUpload control will stop persisting the uploaded files' information.

Indeed **RadAsyncUpload** persists its client state (it is a hidden field on the client side that contains information about RadAsyncUploadcontrol) until an exact control triggers a postback. When that happens the client state is reset.

>note In order to persist the files after a postback, the **RadAsyncUpload** has to be rendered on the page.
>

The **PostbackTriggers** property accepts as a value a string array. The codebehind values have higher priority over the ones in the markup and override them:

````ASPNET
<telerik:RadScriptManager runat="server" ID="RadScriptManager"></telerik:RadScriptManager>         
<telerik:RadAsyncUpload RenderMode="Lightweight" runat="server" ID="RadAsyncUpload1" PostbackTriggers="Button3,Button4"></telerik:RadAsyncUpload>

<asp:Button Text="Button1" ID="Button1" runat="server" />
<asp:Button Text="Button2" ID="Button2" runat="server" />
<asp:Button Text="Button3" ID="Button3" runat="server" />
<asp:Button Text="Button4" ID="Button4" runat="server" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadAsyncUpload1.PostbackTriggers = new string[] { "Button1", "Button2" };
}
````
````VB.NET
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    RadAsyncUpload1.PostbackTriggers = New String() {"Button1", "Button2"}
End Sub
````

