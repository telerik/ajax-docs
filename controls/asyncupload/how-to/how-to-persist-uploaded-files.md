---
title: How to Persist Uploaded Files
page_title: How to Persist Uploaded Files | UI for ASP.NET AJAX Documentation
description: How to Persist Uploaded Files
slug: asyncupload/how-to/how-to-persist-uploaded-files
tags: how,to,persist,uploaded,files
published: True
position: 3
---

# How to Persist Uploaded Files

## Persist uploaded files

**RadAsyncUpload** provides **PostbackTriggers** property which can be used to persist the information forthe successfully uploaded files after a postback.Using that property the information about successfully uploaded files will be persisted after every postback until an exact control triggers a postback. When a postback is triggered from a control which ID is contained by **PostbackTriggers** property all the information for the uploaded files will become available on the server side and the RadAsyncUpload control will stop persisting the uploaded files' information.

Indeed **RadAsyncUpload** persists it’s client state(it is a hidden field on the client side that contains information about RadAsyncUploadcontrol) until an exact control triggers a postback. When that happens the client state is reset.

**PostbackTriggers** property is a string array and it can be set from the markup or from the code behind. In case that the property is set from the markup and from the code behind, the value from the code behind is taking in mind.

````ASPNET
<telerik:RadScriptManager runat="server" ID="RadScriptManager"></telerik:RadScriptManager>         
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" PostbackTriggers="Button3,Button4"></telerik:RadAsyncUpload>

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

