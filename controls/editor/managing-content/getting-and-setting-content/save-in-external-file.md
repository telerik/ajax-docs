---
title: Save in External File
page_title: Save in External File | RadEditor for ASP.NET AJAX Documentation
description: Save in External File
slug: editor/managing-content/getting-and-setting-content/save-in-external-file
tags: save,in,external,file
published: True
position: 2
---

# Save in External File

You can save the RadEditor content in an external text or HTML file as well as load the content from an external file in the editor by following the instructions below:

1. Create an HTML file (test.html) in the root of your web application

1. Declare RadEditor and an Asp.NET button in your page:

	**ASPNET**
	
		<telerik:radeditor runat="server" ID="RadEditor1" ></telerik:radeditor>
		<asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click"  /> 

1. To save the RadEditor content in the external HTML file when the Submit button is pressed, add the following code inside the button click eventhandler in the codebehind:

	**C#**
	
		protected string path = "test.html"; //specify the path to your file
		...
		protected void Button1_Click1(object sender, EventArgs e)
		{
		   //Open file for writing and write content
		   using (StreamWriter externalFile = new StreamWriter(this.MapPath(path), false))
		   {
			   externalFile.Write(RadEditor1.Content);
		   }
		} 

	**VB**
		
		Protected path As String = "test.html"
		...
		'specify the path to your file
		Protected Sub Button1_Click1(ByVal sender As Object, ByVal e As EventArgs)
			'Open file for writing and write content
			Using externalFile As New StreamWriter(Me.MapPath(path), False)
				externalFile.Write(RadEditor1.Content)
			End Using
		End Sub



1. To load the external file content in the RadEditor, read the file content with the ReadFile function and assign the returned string to the Html property of RadEditor in the Page_Load event:

	**C#**
	
		protected void Page_Load(object sender, EventArgs e)
		{
		   if (!Page.IsPostBack)
		   {
			   RadEditor1.Content = ReadFile(Server.MapPath(path));
		   }
		}
		
		protected string ReadFile(string path)
		{
		   if (!System.IO.File.Exists(path))
		   {
			   return string.Empty;
		   }
		   using (System.IO.StreamReader sr = new System.IO.StreamReader(path))
		   {
			   return sr.ReadToEnd();
		   }
		} 

	**VB**

		Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
			If Not Page.IsPostBack Then
				RadEditor1.Content = ReadFile(Server.MapPath(path))
			End If
		End Sub
	
		Protected Function ReadFile(ByVal path As String) As String
			If Not System.IO.File.Exists(path) Then
				Return String.Empty
			End If
			Using sr As New System.IO.StreamReader(path)
				Return sr.ReadToEnd()
			End Using
		End Function

