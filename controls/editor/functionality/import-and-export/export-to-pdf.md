---
title: Export to PDF
page_title: Export to PDF | RadEditor for ASP.NET AJAX Documentation
description: Export to PDF
slug: editor/functionality/import-and-export/export-to-pdf
tags: export,to,pdf
published: True
position: 0
---

# Export to PDF

This help article treats the PDF export functionality of **RadEditor** and the corresponding settings, events and limitations.

* [How-to Export the RadEditor Content to a PDF File](#how-to-export-the-radeditor-content-to-a-pdf-file)
* [PDF Specific Settings](#pdf-specific-settings)
* [OnExportContent Event](#onexportcontent-event)
* [Using an External HTML to PDF Conversion Library](#using-an-external-html-to-pdf-conversion-library)
* [Unsupported Features and Scenarios](#unsupported-features-and-scenarios)
* [Client-side Export](#client-side-export)

## How-to Export the RadEditor Content to a PDF File

The approach is very straight-forward - to export the editor content to PDF format:

1. Enable the **PdfExportFilter** filter of RadEditor: `ContentFilters="DefaultFilters,PdfExportFilter"` -	if it is disabled tables will not be exported.

1. Fire the `ExportToPdf()` server-side method to export the content to a PDF file and send it to the user.

## PDF Specific Settings

There is an additional sub-category (**Pdf**) for the **ExportSettings** dedicated to various configuration settings for the exported .pdf document. Below is a list of them:

| Name | Description |
| ------ | ------ |
|AllowAdd / AllowCopy / AllowModify / AllowPrinting|Boolean properties that determines whether the corresponding action is allowed for the generated *PDF* file|
|Author / Creator / Keywords / Producer / Subject / Title| *PDF* document-specific information|
|PageTitle|Sets the page title (appears on the top of the page)|
|PageWidth / PageHeight|These properties are related to the size of the generated page. You can define the size manually using *PageWidth* / *PageHeight* .|
|PageBottomMargin / PageTopMargin / PageLeftMargin / PageRightMargin / PageFooterMargin / PageHeaderMargin|All the page margins could be controlled via these settings.|
|PageHeader / PageFooter|You can define a header and/or footer through these elements for the left/middle/right cell ( **Example 1** ).|

>caption Example 1: Configure PDF export settings - title, author, header and footer.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor2" ContentFilters="DefaultFilters, PdfExportFilter">
	<Content>
<p>Some content in RadEditor.</p>
	</Content>
	<ExportSettings>
		<Pdf PageTitle="Page Title" Author="Author">
			<PageHeader>
				<LeftCell Text="<em>Header - left cell</em>" TextAlign="Left" />
				<MiddleCell Text="<span style='font-size: 20px;'><strong>Header - middle cell</strong></span>" TextAlign="Center" />
				<RightCell Text="<a href='http://www.telerik.com/'>Header - right cell</a>" TextAlign="Right" />
			</PageHeader>
			<PageFooter>
				<LeftCell Text="<em>Footer - left cell</em>" TextAlign="Left" />
				<MiddleCell Text="<strong>Footer - middle cell</strong>" TextAlign="Center" />
				<RightCell Text="<a href='http://www.telerik.com/'>Footer - right cell</a>" TextAlign="Right" />
			</PageFooter>
		</Pdf>
	</ExportSettings>
</telerik:RadEditor>
<br />
<asp:Button ID="Button2" Text="Export RadEditor Content to PDF" runat="server" OnClick="Button1_Click" />
````
````C#	
protected void Button1_Click(object sender, EventArgs e)
{
	RadEditor1.ExportToPdf();
}	
````
````VB	
Protected Sub Button1_Click(sender As Object, e As EventArgs)
	RadEditor1.ExportToPdf()
End Sub
````

>note The default page orientation for the *PDF* file is *Portrait.* You can easily switch to *Landscape* by modifying the *PageWidth* / *PageHeight* properties manually.
>
*  **A4 Portrait** : `<Pdf PageWidth="210mm" PageHeight="297mm" />`
*  **A4 Landscape** : `<Pdf PageWidth="297mm" PageHeight="210mm" />`

## OnExportContent Event

It is possible to silently export the content as PDF on the server via the **OnExportContent** event of RadEditor without any user interaction. After doing so, the server code will just need to redirect to the page from which the request was initially made.For the purposes of the export, you may need to configure the relative settings of the control through the	**RadEditor.ExportSettings** section. The available properties are:

* **FileName** - a string specifying the name (without the extension) of the file that will be created. The file extension is automatically added based on the method that is used.
* **OpenInNewWindow** - open the exported PDF in a new instead of the same page.

Below you can find an example demonstrating how to export the editor's content as PDF on the server using the **OnExportContent** event of **Telerik Editor**.

>caption Example 2: Save the exported PDF on the server.

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnExportContent="RadEditor1_ExportContent" ContentFilters="DefaultFilters, PdfExportFilter">
</telerik:RadEditor>
<asp:Button runat="server" ID="Button1" Text="Export to PDF" OnClick="Button1_Click" />
````
````C#
using System;
using System.IO;
using Telerik.Web.UI;

public partial class DefaultCS : System.Web.UI.Page
{
	protected void RadEditor1_ExportContent(object sender, EditorExportingArgs e)
	{
		string url = String.Format("~/{0}.pdf", RadEditor1.ExportSettings.FileName);
		string path = Server.MapPath(url);

		if (File.Exists(path))
		{
			File.Delete(path);
		}

		using (FileStream fs = File.Create(path))
		{
			Byte[] info = System.Text.Encoding.Default.GetBytes(e.ExportOutput);
			fs.Write(info, 0, info.Length);
		}

		e.Cancel = true;
	}

	protected void Button1_Click(object sender, EventArgs e)
	{
		RadEditor1.ExportToPdf();
	}
}
````
````VB
Imports System.IO
Imports Telerik.Web.UI

Partial Class DefaultVB
	Inherits System.Web.UI.Page

	Protected Sub RadEditor1_ExportContent(sender As Object, e As EditorExportingArgs)
		Dim url As String = String.Format("~/{0}.pdf", RadEditor1.ExportSettings.FileName)
		Dim path As String = Server.MapPath(url)

		If File.Exists(path) Then
			File.Delete(path)
		End If

		Using fs As FileStream = File.Create(path)
			Dim info As [Byte]() = System.Text.Encoding.[Default].GetBytes(e.ExportOutput)
			fs.Write(info, 0, info.Length)
		End Using

		e.Cancel = True
	End Sub

	Protected Sub Button1_Click(sender As Object, e As EventArgs)
		RadEditor1.ExportToPdf()
	End Sub
End Class
````

## Using an External HTML to PDF Conversion Library

It is possible to use an external HTML to PDF conversion library for the Export to PDF feature of RadEditor.In order to use a custom one, the **RadEditorExportTemplate** abstract class, defined in the **Telerik.Web.UI.Editor.Export**	namespace of the Telerik.Web.UI assembly has to be implemented. Below is an example demonstrating the class constructor and its methods that would need to be overridden.


>caption Example 3: Using a custom server PDF export library with RadEditor.

````C#
public abstract class RadEditorExportTemplate
{
	public RadEditorExportTemplate(RadEditor radEditor)
	{
		//parameterized constructor which can be used to get
		//a reference to the editor and pass PDF export settings
		//e.g.: editor = radEditor;
	}

	public virtual void Export()
	{
		//This method is used to export the editor's content.
	}

	protected internal abstract string GenerateOutput()
	{
		//This method is used to generate the output string,
		//which is generated based on the editor's content.
	}

	protected internal virtual void InitializeXmlContent()
	{
		//Initializes the XmlContent property as the first step of the template.
		//The XmlContent property can be used later in the GenerateOutput method.
	}

	protected internal virtual string GenerateXmlStirng(string pageTitle, string content)
	{
		//Generate xml string, which is loaded in the GetXmlDocument method.
	}

	protected virtual string ValidateContentForExport(string content)
	{
		//Make some validation modifications to the editor's
		//content before loading it in the GetXmlDocument method.
	}

	protected virtual void FireEditorOnExportEvent(string output)
	{
		//Fires OnExportEvent of the editor.
	}

	protected virtual void WritePageResponse(string output)
	{
		//Writes the string output to the editor's Page.Response property.
	}

	protected virtual void ConfigureResponse()
	{
		//Confugures the editor's Page.Response for writing.
	}

	protected abstract string ContentType
	{
		//The content type of the editor's Page.Response object.
		get;
	}

	protected abstract string FileExtension
	{
		//The extension of the exported file.
		get;
	}

	protected abstract ExportType ExportType
	{
		//The ExportType object passed as an argument in the 
		//EditorExportingArgs argumet, when editor's OnExport is fired.
		get;
	}

	protected virtual Encoding ResponseWriteEncoding
	{
		//The Encoding used in WritePageResponse method.
		get;
	}

	protected virtual string XmlTemplate
	{
		//The default xml template string used in the GenerateXmlStirng method.
		//{0} is the dtd, {1} is the title, {2} is the content.
		get
		{
			return @"<?xml version=""1.0"" encoding=""utf-8""?>{0}<html xmlns=""http://www.w3.org/1999/xhtml"" xmlns:fo=""http://www.w3.org/1999/XSL/Format""><head><title>{1}</title></head><body>{2}</body></html>";
		}
	}
}	
````
````VB	
Public MustInherit Class RadEditorExportTemplate
	
	Public Sub New(radEditor As RadEditor)
		'parameterized constructor which can be used to get
		'a reference to the editor and pass PDF export settings
		'e.g.: editor = radEditor;
	End Sub

	Public Overridable Sub Export()
		'This method is used to export the editor's content.
	End Sub

	'This method is used to generate the output string,
	'which is generated based on the editor's content.
	Protected Friend MustOverride Function GenerateOutput() As String
	
	Protected Friend Overridable Sub InitializeXmlContent()
		'Initializes the XmlContent property as the first step of the template.
		'The XmlContent property can be used later in the GenerateOutput method.
	End Sub

	Protected Friend Overridable Function GenerateXmlStirng(pageTitle As String, content As String) As String
		'Generate xml string, which is loaded in the GetXmlDocument method.
	End Function

	Protected Overridable Function ValidateContentForExport(content As String) As String
		'Make some validation modifications to the editor's
		'content before loading it in the GetXmlDocument method.
	End Function

	Protected Overridable Sub FireEditorOnExportEvent(output As String)
		'Fires OnExportEvent of the editor.
	End Sub

	Protected Overridable Sub WritePageResponse(output As String)
		'Writes the string output to the editor's Page.Response property.
	End Sub

	Protected Overridable Sub ConfigureResponse()
		'Confugures the editor's Page.Response for writing.
	End Sub

	'The content type of the editor's Page.Response object.
	Protected MustOverride ReadOnly Property ContentType() As String

	'The extension of the exported file.
	Protected MustOverride ReadOnly Property FileExtension() As String

	'The ExportType object passed as an argument in the 
	'EditorExportingArgs argumet, when editor's OnExport is fired.
	Protected MustOverride ReadOnly Property ExportType() As ExportType
	
	Protected Overridable ReadOnly Property ResponseWriteEncoding() As Encoding
		'The Encoding used in WritePageResponse method.
		Get
		End Get
	End Property

	Protected Overridable ReadOnly Property XmlTemplate() As String
		'The default xml template string used in the GenerateXmlStirng method.
		'{0} is the dtd, {1} is the title, {2} is the content.
		Get
			Return "<?xml version=""1.0"" encoding=""utf-8""?>{0}<html xmlns=""http://www.w3.org/1999/xhtml"" xmlns:fo=""http://www.w3.org/1999/XSL/Format""><head><title>{1}</title></head><body>{2}</body></html>"
		End Get
	End Property

End Class	
````

Next, an instance of the Custom Pdf Export Template needs to be passed to the Editor. This can be done in the **Page_Load** event handler, for example, in the following way.


>caption Example 4: Apply the custom export template to RadEditor 

````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadEditor1.SetPdfExportTemplate(new CustomPdfExportTemplate(RadEditor1));
	//call RadEditor1.ExportToPdf(); to export the Editor's content
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadEditor1.SetPdfExportTemplate(New CustomPdfExportTemplate(RadEditor1))
	'call RadEditor1.ExportToPdf() to export the Editor's content
End Sub
````


Last, but not least, by calling the **ExportToPDF()** the content will be exported using the newly defined	library instead of the default one.

For more information on how to use an external library and a complete example with source code, refer to the [Using an external library for the export to PDF functionality in Telerik’s ASP.NET Editor](http://blogs.telerik.com/aspnet-ajax/posts/13-02-21/using-an-external-library-for-the-export-to-pdf-functionality-in-telerik-s-asp.net-editor) blog post.

## Unsupported Features and Scenarios

Although we are striving to constantly improve our products, there are some limitations in the current implementation of our PDF engine:

* Image transparency;
* Right-to-left fonts;
* Nested DIV elements with absolute position;
* Nested DIV elements with specified width or height;
* Automatic text clipping;
* Client-side binding;
* Medium trust;
* Img tags that point to non-existing image files break the PDF file generation;
* Exporting full HTML page (currently, only the content inside the body tag can be exported).


## Client-side Export

You can export the editor contents to PDF on the client by using [RadClientExportManager]({%slug clientexportmanager/overview%}) as shown in **Example 5**. To do this:


1. Add RadClientExportManager to the page and configure it according to your needs.

1. Prepare an empty HTML node that will be used by RadClientExportManager.

1. use the [get_html()]({%slug editor/client-side-programming/methods/get_html%}) method RadEditor exposes to obtain the HTML.

1. place the HTML in the temporary node, export it and clear the node.

>caption Example 5: Export RadEditor to PDF on the client

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">
	<Content>
		<strong>lorem</strong> ipsum <em>dolor</em> sit amet
	</Content>
</telerik:RadEditor>
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	<PdfSettings FileName="someFileName.pdf" />
</telerik:RadClientExportManager>
<asp:Button ID="Button1" Text="export editor on client" OnClientClick="exprotPdfOnClient(); return false;" runat="server" />
<div id="dummyContentWrapper"></div>
<script>
	function exprotPdfOnClient() {
		var editorHtml = $find("<%=RadEditor1.ClientID%>").get_html(true);
		var dummyContainer = $telerik.$("#dummyContentWrapper");
		dummyContainer.html(editorHtml);
		$find("<%=RadClientExportManager1.ClientID%>").exportPDF(dummyContainer);
		dummyContainer.html("");
	}
</script>
````


This approach provides the following benefits:

* There is no postback to the server which improves the page performance.

* The ClientExportManager logic is used which includes the PAKO library and has fewer limitations than the built-in server-side export library.

	>note Review the [RadClientExportManager Browser Support]({%slug clientexportmanager/browser-support%}) and evaluate it against your expected user base. 


## See Also

 * [Using an external library for the export to PDF functionality in Telerik’s ASP.NET Editor](http://blogs.telerik.com/aspnet-ajax/posts/13-02-21/using-an-external-library-for-the-export-to-pdf-functionality-in-telerik-s-asp.net-editor)
