---
title: Save in File
page_title: Save in File | UI for ASP.NET AJAX Documentation
description: Save in File
slug: editor/managing-content/getting-and-setting-content/save-in-file
tags: save,in,file
published: True
position: 1
---

# Save in File



## 

The code example below demonstrates how to save content directly in the ASPX or ASCX file containing RadEditor for ASP.NET AJAX. This feature can greatly simplify development in many practical scenarios,such as when you have pages with more static content ( e.g. welcome messages, FAQ, company information, contacts etc) that can be equipped with an editor, without the need to be connected to a database.

The content will be saved inside the Content inner tags of RadEditor for ASP.NET AJAX so please remember to add the content tag to the editor declaration in the ASPX file so it can be correctly updated.In order for RadEditor for ASP.NET AJAX to save content directly to the control files, you have to give full permissions to the ASPNET / Network Service user for the folders and files in which the editor resides. You can find info on how to set the permissions at the following link: [Setting ASPNET (Network Service) Permissions](http://www.telerik.com/help/aspnet-ajax/installsettingaspnetpermissions.html).

````ASPNET
	<telerik:radeditor id="RadEditor1" runat="server">
	   <content>
	       Please remember to add the content tag to the editor declaration in the ASPX file so it can be correctly updated
	   </content>
	</telerik:radeditor>
	<asp:Button ID="btnSubmit" Text="Submit" runat="server" OnClick="btnSubmit_Click" /> 
````



>tabbedCode

````C#
		protected void btnSubmit_Click(object sender, EventArgs e)
		{
			//To update the page with the editor,
			//call this function and pass a reference to the RadEditor control
			SaveInCurrentFile(RadEditor1);
		}
	
		private bool _contentUpdated = false;
		private string _editorContent = string.Empty;
	
		private string EditorMatchEvaluator(Match m)
		{
			_contentUpdated = true;
			string newContent = m.Groups[1].Value + _editorContent + "</content>";
			return newContent;
		}
	
		private void SaveInCurrentFile(RadEditor editor)
		{
			try
			{
				//read file
				string physicalFileName = MapPathSecure(this.AppRelativeVirtualPath);
				FileStream fs = new FileStream(physicalFileName, FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite);
				StreamReader sr = new StreamReader(fs);
				string pageContent = sr.ReadToEnd();
	
				//update content
				_contentUpdated = false;
				_editorContent = editor.Content;
				MatchEvaluator mEvaluator = new MatchEvaluator(EditorMatchEvaluator);
				pageContent = Regex.Replace(pageContent, "(<(\\w+):RadEditor[^>]+?ID\\s*=\\s*['\"]?" + editor.ID + "['\"]?[^>]*>[\\s\\S]*?<content>)[\\s\\S]*?</content>", mEvaluator, RegexOptions.IgnoreCase | RegexOptions.Compiled);
				//update file
				if (_contentUpdated)
				{
					fs.Seek(0, SeekOrigin.Begin);
					StreamWriter sw = new StreamWriter(fs);
					sw.BaseStream.SetLength(0);
					sw.Write(pageContent);
					sw.Flush();
					sw.Close();
				}
				else
				{
					sr.Close();
				}
			}
			catch (Exception)
			{
				//"The File Encoding you have provided is not supported!"
				//"Refresh the screen and try again!"
				//"Another process or user is using the resource (ascx/aspx file) you are trying to update."
				//"Check if the ASPNET user (IIS5) / NETWORK SERVICE account (IIS6) has write privileges for this file."
			}
		} 
````



````VB.NET
	Imports System
	Imports System.Data
	Imports System.Configuration
	Imports System.Collections
	Imports System.Web
	Imports System.Web.Security
	Imports System.Web.UI
	Imports System.Web.UI.WebControls
	Imports System.Web.UI.WebControls.WebParts
	Imports System.Web.UI.HtmlControls
	Imports System.Threading
	Imports System.IO
	Imports System.Text
	Imports System.Text.RegularExpressions
	Imports Telerik.Web.UI
		Partial Class Default2
			Inherits System.Web.UI.Page
			Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	
			End Sub
			Protected Sub btnSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSubmit.Click
				SaveInCurrentFile(RadEditor1)
			End Sub
			Private Sub SaveInCurrentFile(ByVal editor As RadEditor)
				Try
					Dim physicalFileName As String = MapPathSecure(Me.AppRelativeVirtualPath)
					Dim fs As New FileStream(physicalFileName, FileMode.Open, FileAccess.ReadWrite, FileShare.ReadWrite)
					Dim sr As New StreamReader(fs)
					Dim pageContent As String = sr.ReadToEnd()
					Dim _editorContent As String = editor.Content
					pageContent = Regex.Replace(pageContent, "(<(\w+):RadEditor[^>]+?ID\s*=\s*['""]?" + editor.ID + "['""]?[^>]*>[\s\S]*?<content>)[\s\S]*?</content>", "$1" + _editorContent + "</content>", RegexOptions.IgnoreCase Or RegexOptions.Compiled)
					fs.Seek(0, SeekOrigin.Begin)
					Dim sw As New StreamWriter(fs)
					sw.BaseStream.SetLength(0)
					sw.Write(pageContent)
					sw.Flush()
					sw.Close()
					sr.Close()
				Catch generatedExceptionName As Exception
				End Try
			End Sub
		End Class
````


>end

# See Also

 * [Save In File example](http://demos.telerik.com/aspnet-ajax/editor/examples/saveinexternalfile/defaultcs.aspx)

 * [Save In Database](http://demos.telerik.com/aspnet-ajax/editor/examples/saveindatabase/defaultcs.aspx)

 * [Set Properties]({%slug editor/getting-started/set-properties%})
