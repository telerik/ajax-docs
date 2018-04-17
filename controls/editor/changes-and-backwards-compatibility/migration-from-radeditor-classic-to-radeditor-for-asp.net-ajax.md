---
title: Migration from RadEditor Classic to RadEditor for ASP.NET AJAX
page_title: Migration from RadEditor Classic to RadEditor for ASP.NET AJAX | RadEditor for ASP.NET AJAX Documentation
description: Migration from RadEditor Classic to RadEditor for ASP.NET AJAX
slug: editor/changes-and-backwards-compatibility/migration-from-radeditor-classic-to-radeditor-for-asp.net-ajax
tags: migration,from,radeditor,classic,to,radeditor,for,asp.net,ajax
published: True
position: 1
---

# Migration from RadEditor Classic to RadEditor for ASP.NET AJAX


## Migration from RadEditor Classic to RadEditor for ASP.NET AJAX

You can find below the list of steps to migrate your web applications from the classic RadEditor to RadEditor for ASP.NET AJAX:

1. To add RadEditor for ASP.NET AJAX to an existing ASP.NET web application you need to follow these steps:

	1. Make sure you have installed ASP.NET AJAX, which is built-in part of the .NET 4.x+ installations.

	1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (check the topic called Adding ASP.NET AJAX Configuration Elements to an Existing Web Site)

	1. Add a ScriptManager control to the page (or user control) in which you are going to add any control from the Telerik® UI for ASP.NET AJAX suite. `<asp:ScriptManager ID="ScriptManager1" runat="server" />` If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control you can check [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik® UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadEditor's directive`<%@ Register Assembly="RadEditor.NET2" Namespace="Telerik.WebControls" TagPrefix="radE" %>`with the new one of RadEditor for ASP.NET AJAX:`<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>`

1. Replace the classic RadEditor's declaration:`<radE:RadEditor id="RadEditor1" Runat="server">Sample Content</radE:RadEditor>`with the new RadEditor for ASP.NET AJAX declaration:` <telerik:radeditor runat="server"Visible="false" ID="RadEditor1"> <Content> Sample content </Content> </telerik:radeditor> `

1. To enable the RadEditor's Dialogs follow the provided information in the following help article: [Introduction to RadEditor's Dialogs]({%slug editor/functionality/dialogs/overview%}).

1. To enable RadSpell in RadEditor review the following help article: [Enable RadSpell in RadEditor]({%slug editor/functionality/spellchecker/overview%}).

1. The **ConfigFile** property is obsolete in RadEditor for ASP.NET AJAX, because the control can be easily configured to use ASP.NET 2.0 Themes the same way you would do for a ordinary asp.net control. Review the following help article for more information: [Using Themes]({%slug editor/how-to/use-themes%}).

1. RadEditor for ASP.NET AJAX produces out-of-the box Xhtml content. The **Html** and **Xhtml** properties are obsolete and replaced with a new property named **Content**.

1. The SaveInFile property is removed. If you want to save the editor's content directly in the page with the editor review the solution in this article: [Saving RadEditor for ASP.NET AJAX content directly in the ASPX or ASCX file containing the editor](http://www.telerik.com/support/kb/aspnet-ajax/editor/saving-radeditor-prometheus-content-directly-in-the-aspx-or-ascx-file-containing-the-editor.aspx).



**Changes in RadEditor for ASP.NET AJAX**

**Server-Side API:** There have been big changes made here but we tried to provide as much backward compatibility as possible and keep the client-side API.The table below shows all the changed/removed and new properties in new RadEditor for ASP.NET AJAX:

|  **Old Name**  |  **New Name**  |  **Type**  | Status |
| ------ | ------ | ------ | ------ |
| **Html** | **Content** |property| **Replaced** |
| **Xhtml** |n/a - use **Content** instead|| **Removed** |
| **ImagesPaths** | **ViewPaths** |property|same for all editor dialogs|
| **UploadImagesPaths** | **UploadPaths** |property|same for all editor dialogs|
| **DeleteImagesPaths** | **DeletePaths** |property|same for all editor dialogs|
| **SetPaths** | **n/a** |method| **Removed** |
| **UseClassicDialogs** | **set_useClassicDialogs(true) -** new client-side method|property| **new method** |
| **RenderAsTextArea** | **n/a** |property| **Removed** |
| **ShowHtmlMode** | **EditModes** |property| **Changed** |
| **ShowPreviewMode** | **EditModes** |property| **Changed** |
| **ShowSubmitCancelButtons** | **n/a** |property| **Removed** |
| **new property** | **[OnClientSelectionChange]({%slug editor/client-side-programming/events/onclientselectionchange%})** |event| **new event** |
| **new property** | **[OnClientPasteHtml]({%slug editor/client-side-programming/events/onclientpastehtml%})** || **new event** |
| **OnClientModeChange** | **[add_modeChange()]({%slug editor/client-side-programming/methods/get_mode%})** |event| **new method** |
| **OnClientSubmit** | **not yet implemented** |event| **soon** |
| **OnClientCancel** | **n/a** |event| **Removed** |
| **HasPermission** | **Enabled** |property| **Replaced** |
| **Editable** | **n/a** |property| **Removed** |
| **AllowCustomColors** | **n/a** |property| **Removed** |
| **AllowScripts** | **RadEditor1.EnableFilter(EditorFilters.RemoveScripts);** |property| **new mothod** |
| **AllowThumbGeneration** | **n/a** |property| **Removed** |
| **CacheLocalization** | **n/a** |property| **Removed** |
| **ConfigFile** | **n/a -[use Themes]({%slug editor/how-to/use-themes%})** |property| **Removed** |
| **CookieExpirationTime** | **n/a** |property| **Removed** |
| **EnableClientSerialize** | **n/a** |property| **Removed** |
| **EnableDocking** | **n/a** |property| **Removed** |
| **FocusOnLoad** | **n/a** |property| **Removed** |
| **StripFormattingOnPaste** | **StripFormattingOptions** |enum| **Changed** |

**Client-Side API:** All important properties are kept. Some of the unimportant properties have been removed. We have strived to provide maximal backward compatibility for an easy transition to the new editor.

|  **Old Name**  |  **New Name**  |  **Type**  |  **Change**  |
| ------ | ------ | ------ | ------ |
| **GetRadEditor()** | **$find()** |method| **Replaced** |
| **Document** | **get_document()** |property/method||
| **Fire()** | **fire()** |method| **Replaced** |
| **CancelEdit()** |n/a|method| **Removed** |
| **CreateRestorePoint()** | **createRestorePoint() - obsolete, use getSelection().getRange()** |method| **Replaced** |
| **GetContentArea()** | **get_contentArea()** |method| **Replaced** |
| **GetHeight()** | **editor.get_element().style.height** |method| **Replaced** |
| **GetWidth()** | **editor.get_element().style.width** |method| **Replaced** |
| **GetHtml()** | **get_html()** |method| **Replaced** |
| **GetMode()** | **get_mode()** |method| **Replaced** |
| **GetSelection()** | **getSelection()** |method| **Replaced** |
| **GetSelectionHtml()** | **getSelectionHtml()** |method| **Replaced** |
| **GetText()** | **get_text()** |method| **Replaced** |
| **GetToolByName()** | **getToolByName()** |method| **Replaced** |
| **SetHtml()** | **set_html()** |method| **Replaced** |
| **PasteHtml()** | **pasteHtml()** |method| **Replaced** |
| **SetFocus()** | **setFocus()** |method| **Replaced** |
| **SetMode()** | **set_mode()** |method| **Replaced** |
| **SetSize()** | **setSize()** |method| **Replaced** |
| **SetVisible()** | **set_visible()** |method| **Replaced** |
| **ShowDialog()** | **[showExternalDialog()]({%slug editor/functionality/dialogs/custom-dialogs%})** |method| **Replaced** |
| **Submit()** | **add_submit()** |method| **Replaced** |
| **AttachEventHandler()** | **[attachEventHandler()]({%slug editor/client-side-programming/methods/attacheventhandler%})** |method| **Replaced** |
| **GetContentArea()** | **get_contentArea()** |method| **Replaced** |
| **GetTextArea()** | **get_textArea()** |method| **Replaced** |


