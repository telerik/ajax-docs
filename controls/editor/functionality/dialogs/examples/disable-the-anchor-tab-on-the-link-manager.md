---
title: Disable the Anchor Tab on the Link Manager
page_title: Disable the Anchor Tab on the Link Manager | RadEditor for ASP.NET AJAX Documentation
description: Disable the Anchor Tab on the Link Manager
slug: editor/functionality/dialogs/examples/disable-the-anchor-tab-on-the-link-manager
tags: disable,the,anchor,tab,on,the,link,manager
published: True
position: 0
---

# Disable the Anchor Tab on the Link Manager

In order to disable the Anchor tab on the Link manager of RadEditor, do the following:

1. Copy the **EditorDialogs** folder from the Telerik controls' installation folder to the root of your web application

	>tip If you are using the Telerik UI controls for ASP.NET AJAX from a ZIP archive instead of MSI installer, note that you can find the **EditorDialogs** folder in the chosen path of the extracted files.

1. Set the **ExternalDialogsPath** property to point to the location of this folder, e.g. `<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server" ExternalDialogsPath="~/EditorDialogs"></telerik:RadEditor>`

1. Open the **\EditorDialogs\LinkManager.ascx** file and set the RadTab's **Visible** property to false, e.g. `<telerik:RadTab Text="Anchor" Visible="false" Value="Anchor"></telerik:RadTab>`

1. Save the file and refresh the dialog.

## See Also

 * [ExternalDialogsPath property](http://demos.telerik.com/aspnet/prometheus/Editor/Examples/ExternalDialogsPath/DefaultCS.aspx)
