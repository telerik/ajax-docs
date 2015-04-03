---
title: Migration from RadEditor Classic to RadEditor for ASP.NET AJAX
page_title: Migration from RadEditor Classic to RadEditor for ASP.NET AJAX | UI for ASP.NET AJAX Documentation
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

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (check the topic called Adding ASP.NET AJAX Configuration Elements to an Existing Web Site)

1. Add a ScriptManager control to the page (or user control) in which you are going to add any control from the Telerik UI for ASP.NET AJAX suite. <asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control you can check [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadEditor's directive`<%@ Register Assembly="RadEditor.NET2" Namespace="Telerik.WebControls" TagPrefix="radE" %>`with the new one of RadEditor for ASP.NET AJAX:`<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>`

1. Replace the classic RadEditor's declaration:`<radE:RadEditor id="RadEditor1" Runat="server">Sample Content</radE:RadEditor>`with the new RadEditor for ASP.NET AJAX declaration:` <telerik:radeditor runat="server"Visible="false" ID="RadEditor1"> <Content> Sample content </Content> </telerik:radeditor> `

1. To enable the RadEditor's Dialogs follow the provided information in the following help article: [Introduction to RadEditor's Dialogs]({%slug editor/functionality/dialogs/overview%}).

1. To enable RadSpell in RadEditor review the following help article: [Enable RadSpell in RadEditor]({%slug editor/functionality/spellchecker/overview%}).

1. The __ConfigFile__ property is obsolete in RadEditor for ASP.NET AJAX, because the control can be easily configured to use ASP.NET 2.0 Themes the same way you would do for a ordinary asp.net control. Review the following help article for more information: [Using Themes]({%slug editor/application-scenarios/use-themes%}).

1. RadEditor for ASP.NET AJAX produces out-of-the box Xhtml content. The __Html__ and __Xhtml__ properties are obsolete and replaced with a new property named __Content__.

1. The SaveInFile property is removed. If you want to save the editor's content directly in the page with the editor review the solution in this article: [Saving RadEditor for ASP.NET AJAX content directly in the ASPX or ASCX file containing the editor](http://www.telerik.com/support/kb/aspnet-ajax/editor/saving-radeditor-prometheus-content-directly-in-the-aspx-or-ascx-file-containing-the-editor.aspx).



__Changes in RadEditor for ASP.NET AJAX__

__Server-Side API:__ There have been big changes made here but we tried to provide as much backward compatibility as possible and keep the client-side API.The table below shows all the changed/removed and new properties in new RadEditor for ASP.NET AJAX:




>caption  

|  __Old Name__  |  __New Name__  |  __Type__  | Status |
| ------ | ------ | ------ | ------ |
| __Html__ | __Content__ |property| __Replaced__ |
| __Xhtml__ |n/a - use __Content__ instead|| __Removed__ |
| __ImagesPaths__ | __ViewPaths__ |property|same for all editor dialogs|
| __UploadImagesPaths__ | __UploadPaths__ |property|same for all editor dialogs|
| __DeleteImagesPaths__ | __DeletePaths__ |property|same for all editor dialogs|
| __SetPaths__ | __n/a__ |method| __Removed__ |
| __UseClassicDialogs__ | __set_useClassicDialogs(true) -__ new client-side method|property| __new method__ |
| __RenderAsTextArea__ | __n/a__ |property| __Removed__ |
| __ShowHtmlMode__ | __ __EditModes__ __ |property| __Changed__ |
| __ShowPreviewMode__ | __ __EditModes__ __ |property| __Changed__ |
| __ShowSubmitCancelButtons__ | __n/a__ |property| __Removed__ |
| __new property__ | __[OnClientSelectionChange]({%slug editor/client-side-programming/events/onclientselectionchange%})__ |event| __new event__ |
| __new property__ | __[OnClientPasteHtml]({%slug editor/client-side-programming/events/onclientpastehtml%})__ || __new event__ |
| __OnClientModeChange__ | __[add_modeChange()]({%slug editor/client-side-programming/methods/get_mode%})__ |event| __new method__ |
| __OnClientSubmit__ | __not yet implemented__ |event| __soon__ |
| __OnClientCancel__ | __n/a__ |event| __Removed__ |
| __HasPermission__ | __Enabled__ |property| __Replaced__ |
| __Editable__ | __n/a__ |property| __Removed__ |
| __AllowCustomColors__ | __n/a__ |property| __Removed__ |
| __AllowScripts__ | __RadEditor1.EnableFilter(EditorFilters.RemoveScripts);__ |property| __new mothod__ |
| __AllowThumbGeneration__ | __n/a__ |property| __Removed__ |
| __CacheLocalization__ | __n/a__ |property| __Removed__ |
| __ConfigFile__ | __n/a -[use Themes]({%slug editor/application-scenarios/use-themes%})__ |property| __Removed__ |
| __CookieExpirationTime__ | __n/a__ |property| __Removed__ |
| __EnableClientSerialize__ | __n/a__ |property| __Removed__ |
| __EnableDocking__ | __n/a__ |property| __Removed__ |
| __FocusOnLoad__ | __n/a__ |property| __Removed__ |
| __StripFormattingOnPaste__ | __StripFormattingOptions__ |enum| __Changed__ |

__Client-Side API:__ All important properties are kept. Some of the unimportant properties have been removed. We have strived to provide maximal backward compatibility for an easy transition to the new editor.


>caption  

|  __Old Name__  |  __New Name__  |  __Type__  |  __ __Change__ __  |
| ------ | ------ | ------ | ------ |
| __GetRadEditor()__ | __$find()__ |method| __Replaced__ |
| __Document__ | __get_document()__ |property/method||
| __Fire()__ | __fire()__ |method| __Replaced__ |
| __CancelEdit()__ |n/a|method| __Removed__ |
| __CreateRestorePoint()__ | __createRestorePoint() - obsolete, use getSelection().getRange()__ |method| __Replaced__ |
| __GetContentArea()__ | __get_contentArea()__ |method| __Replaced__ |
| __GetHeight()__ | __editor.get_element().style.height__ |method| __Replaced__ |
| __GetWidth()__ | __editor.get_element().style.width__ |method| __Replaced__ |
| __GetHtml()__ | __get_html()__ |method| __Replaced__ |
| __GetMode()__ | __get_mode()__ |method| __Replaced__ |
| __GetSelection()__ | __getSelection()__ |method| __Replaced__ |
| __GetSelectionHtml()__ | __getSelectionHtml()__ |method| __Replaced__ |
| __GetText()__ | __get_text()__ |method| __Replaced__ |
| __GetToolByName()__ | __getToolByName()__ |method| __Replaced__ |
| __SetHtml()__ | __set_html()__ |method| __Replaced__ |
| __PasteHtml()__ | __pasteHtml()__ |method| __Replaced__ |
| __SetFocus()__ | __setFocus()__ |method| __Replaced__ |
| __SetMode()__ | __set_mode()__ |method| __Replaced__ |
| __SetSize()__ | __setSize()__ |method| __Replaced__ |
| __SetVisible()__ | __set_visible()__ |method| __Replaced__ |
| __ShowDialog()__ | __[showExternalDialog()]({%slug editor/functionality/dialogs/custom-dialogs%})__ |method| __Replaced__ |
| __Submit()__ | __add_submit()__ |method| __Replaced__ |
| __AttachEventHandler()__ | __[attachEventHandler()]({%slug editor/client-side-programming/methods/attacheventhandler%})__ |method| __Replaced__ |
| __GetContentArea()__ | __get_contentArea()__ |method| __Replaced__ |
| __GetTextArea()__ | __get_textArea()__ |method| __Replaced__ |


