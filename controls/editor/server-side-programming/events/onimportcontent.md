---
title: OnImportContent
page_title: OnImportContent - RadEditor
description: Check our Web Forms article about OnImportContent.
slug: editor/server-side-programming/events/onimportcontent
tags: onimportcontent
published: True
position: 1
---

# OnImportContent

The **OnImportConent** event fires just before the content is imported in the **Telerik Editor** control. It provides access to the content that is going to be imported so you can modify it (**Example 2**).

The event handler receives two arguments:

1. **Sender**–the **RadEditor** instance that raised the event.

1. **Event arguments**–an object of type [Telerik.Web.UI.EditorImportingArgs](https://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_editorimportingargs.html) that exposes the [HtmlFormatProvider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/html/htmlformatprovider) and the [RadFlowDocument](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/model/radflowdocument) instances with which you can programmatically control the settings or the content imported.

>caption Example 1: Using the event to modify the ExportSettings of the HtmlFormatProvider instance.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnImportContent="RadEditor1_ImportContent">
</telerik:RadEditor>
<asp:Button runat="server" ID="Button1" Text="Import DOCX Content" OnClick="Button1_Click" />
````
````C#
using System;
using System.Net;
using System.IO;
using Telerik.Web.UI;
using Telerik.Windows.Documents.Flow.FormatProviders.Html;

public partial class DefaultCS : System.Web.UI.Page
{
	protected void RadEditor1_ImportContent(object sender, EditorImportingArgs e)
	{
		HtmlFormatProvider htmlFormatProvider = e.HtmlFormatProvider as HtmlFormatProvider;

		htmlFormatProvider.ExportSettings.DocumentExportLevel = DocumentExportLevel.Document;
	}

	protected void Button1_Click(object sender, EventArgs e)
	{
		FileStream fileStream = new FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read);
		RadEditor1.LoadDocxContent(fileStream);
	}
}
````
````VB
Imports System.Net
Imports System.IO
Imports Telerik.Web.UI
Imports Telerik.Windows.Documents.Flow.FormatProviders.Html

Partial Class DefaultVB
	Inherits System.Web.UI.Page

	Protected Sub RadEditor1_ImportContent(sender As Object, e As EditorImportingArgs)
		Dim htmlFormatProvider As HtmlFormatProvider = TryCast(e.HtmlFormatProvider, HtmlFormatProvider)

		htmlFormatProvider.ExportSettings.DocumentExportLevel = DocumentExportLevel.Document
	End Sub

	Protected Sub Button1_Click(sender As Object, e As EventArgs)
		Dim fileStream As New FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read)
		RadEditor1.LoadDocxContent(fileStream)
	End Sub
End Class
````


>caption Example 2: Adding an additional paragraph to the **RadFlowDocument** through the **OnImportContent** event.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnImportContent="RadEditor1_ImportContent">
</telerik:RadEditor>
<asp:Button runat="server" ID="Button1" Text="Import DOCX" OnClick="Button1_Click" />
````
````C#
using System.IO;
using Telerik.Web.UI;
using Telerik.Windows.Documents.Flow.FormatProviders.Html;

public partial class DefaultCS : System.Web.UI.Page
{
	protected void RadEditor1_ImportContent(object sender, EditorImportingArgs e)
	{
		RadFlowDocument document = e.RadFlowDocument as RadFlowDocument;

		Paragraph paragraph = new Paragraph(document);
		paragraph.TextAlignment = Alignment.Center;

		Run run = paragraph.Inlines.AddRun("This paragraph is added through the ImportContent event!");
		run.FontSize = 26;

		Section firstSection = (Section)document.Sections.First();
		firstSection.Blocks.Insert(0, paragraph);
	}

	protected void Button1_Click(object sender, EventArgs e)
	{
		FileStream fileStream = new FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read);
		RadEditor1.LoadDocxContent(fileStream);
	}
}
````
````VB
Imports System.IO
Imports System.Net
Imports Telerik.Web.UI
Imports Telerik.Windows.Documents.Flow.Model
Imports Telerik.Windows.Documents.Flow.Model.Styles

Partial Class DefaultVB
	Inherits System.Web.UI.Page
	Protected Sub RadEditor1_ImportContent(sender As Object, e As EditorImportingArgs)
		Dim document As RadFlowDocument = TryCast(e.RadFlowDocument, RadFlowDocument)

		Dim paragraph As New Paragraph(document)
		paragraph.TextAlignment = Alignment.Center

		Dim run As Run = paragraph.Inlines.AddRun("This paragraph is added through the ImportContent event!")
		run.FontSize = 26

		Dim firstSection As Section = DirectCast(document.Sections.First(), Section)
		firstSection.Blocks.Insert(0, paragraph)
	End Sub

	Protected Sub Button1_Click(sender As Object, e As EventArgs)
		Dim fileStream As New FileStream(Server.MapPath("DocxEditor.docx"), FileMode.Open, FileAccess.Read)
		RadEditor1.LoadDocxContent(fileStream)
	End Sub
End Class
````


## See Also

 * [Import and Export to Word]({%slug editor/functionality/import-and-export/import-and-export-to-word%})

 * [Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})
 
 * [Telerik Document Processing Libraries - Overview]({%slug introduction/installation/included-assemblies%})
 
 * [HtmlFormatProvider](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/formats-and-conversion/html/htmlformatprovider)
 
 * [RadFlowDocument](https://docs.telerik.com/devtools/document-processing/libraries/radwordsprocessing/model/radflowdocument)
