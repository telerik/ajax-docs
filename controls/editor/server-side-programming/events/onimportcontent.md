---
title: OnImportContent
page_title: OnImportContent | UI for ASP.NET AJAX Documentation
description: OnImportContent
slug: editor/server-side-programming/events/onimportcontent
tags: onimportcontent
published: True
position: 1
---

# OnImportContent



The __OnImportConent__ event fires just before the content is imported in the __Telerik Editor__ control.It provides access to the content that is going to be imported so you can modify it (__Example 2__).

## 

The event handler receives two arguments:

1. __Sender__–the __RadEditor__ instance that raised the event.

1. __Event arguments__–an object of type[Telerik.Web.UI.EditorImportingArgs](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_editorimportingargs.html)that exposes the	[HtmlFormatProvider](055c74e8-b87e-4c0f-b36c-b8210aab2055)and the[RadFlowDocument](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e)	instances with which you can programmatically control the settings or the content imported.

__Example 1__: Using the event to modify the [ExportSettings of the HtmlFormatProvider](d8c19145-c148-435a-9e1b-ef0633785267) instance

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" OnImportContent="RadEditor1_ImportContent">
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



````VB.NET
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


>end

__Example 2__: Adding an additional paragraph to the __RadFlowDocument__ through the __OnImportContent__ event

>tabbedCode

````ASPNET
			<telerik:RadEditor runat="server" ID="RadEditor1" OnImportContent="RadEditor1_ImportContent">
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



````VB.NET
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


>end

# See Also

 * [Import and Export to Word]({%slug editor/functionality/import-and-export/import-and-export-to-word%})

 * [Import from DOCX and RTF]({%slug editor/functionality/import-and-export/import-from-docx-and-rtf%})[Telerik Document Processing Libraries - Overview](d17653ff-fe96-41c5-8739-01671fb45fba)[HtmlFormatProvider](055c74e8-b87e-4c0f-b36c-b8210aab2055)[RadFlowDocument](dd4dbe18-3a7a-4b31-a1e4-2b2ff6fba91e)
