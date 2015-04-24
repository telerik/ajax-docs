---
title: Common Issues
page_title: Common Issues | RadFileExplorer for ASP.NET AJAX Documentation
description: Common Issues
slug: fileexplorer/troubleshooting/common-issues
tags: common,issues
published: True
position: 0
---

# Common Issues



This topic describes some of the possible issues with RadFileExplorer and how to deal with them

## Upload or Delete commands are disabled

Make sure that *UploadPaths* or *DeletePaths* properties are set correctly

## Setting a path to the InitialPath property does not select folder or file

Make sure that the path set to the property has the same format as the path shown in the RadFileExplorer's addressbar

## An error like "... because the application did not have enough permissions..." occurs only in a production environment. How to debug the issue?

* Remove the RadFileExplorer (or all Telerik controls) from the page

* In the code behind of the same page where the RadFileExplorer was declared add this code:



````C#
	
		protected void Page_Load(object sender, EventArgs e)
		{
			string[] paths = new string[] { "~/RootDirectory1/" };// Path to test
	
			//RadFileExplorer1.Configuration.ViewPaths = paths;
			//RadFileExplorer1.Configuration.DeletePaths = paths;
			//RadFileExplorer1.Configuration.UploadPaths = paths;
	
			FullPermissionsTest(Server.MapPath(paths[0]));// Pass physical path
		}
	
	
		/// <summary>
		/// Full permission test
		/// </summary>
		/// <param name="testPhysicalPath">Physical path</param>
		private void FullPermissionsTest(string testPhysicalPath)
		{
			try
			{
				string physicalPathToTestFolder = System.IO.Path.Combine(testPhysicalPath, "TestDirectory");
				System.IO.DirectoryInfo testDir = System.IO.Directory.CreateDirectory(physicalPathToTestFolder);// Create folder
				testDir.GetDirectories();// List folders
				string testFilePath = System.IO.Path.Combine(testDir.FullName, "TestFile1.txt");// test file paths
				System.IO.File.Create(testFilePath).Close();// Create a file
				testDir.GetFiles("*.*");// List files
				System.IO.File.OpenRead(testFilePath).Close();// Open a file
				System.IO.File.Delete(testFilePath);// delete the test file
				System.IO.Directory.Delete(physicalPathToTestFolder);// delete the test folder
			}
			catch (Exception ex)
			{// Show the probelm
	
				string message = ex.Message;
				string script = string.Format("alert('{0}');", message.Replace("'", @""""));
				ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "KEY", script, true);
			}
		}
	
````
````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        Dim paths As String() = New String() {"~/RootDirectory1/"} ' Path to test
	
	        'RadFileExplorer1.Configuration.ViewPaths = paths;
	        'RadFileExplorer1.Configuration.DeletePaths = paths;
	        'RadFileExplorer1.Configuration.UploadPaths = paths;
	
	        FullPermissionsTest(Server.MapPath(paths(0))) ' Pass physical path
	    End Sub
	
	    ''' <summary>
	    ''' Full permission test
	    ''' </summary>
	    ''' <param name="testPhysicalPath">Physical path</param>
	    ''' <remarks></remarks>
	    Private Sub FullPermissionsTest(ByVal testPhysicalPath As String)
	        Try
	            Dim physicalPathToTestFolder As String = System.IO.Path.Combine(testPhysicalPath, "TestDirectory")
	            Dim testDir As System.IO.DirectoryInfo = System.IO.Directory.CreateDirectory(physicalPathToTestFolder) 'Create folder
	            testDir.GetDirectories() ' List folders
	            Dim testFilePath As String = System.IO.Path.Combine(testDir.FullName, "TestFile1.txt") ' test file paths
	            System.IO.File.Create(testFilePath).Close() ' Create a file
	            testDir.GetFiles("*.*") ' List files
	            System.IO.File.OpenRead(testFilePath).Close() ' Open a file
	            System.IO.File.Delete(testFilePath) ' delete the test file
	            System.IO.Directory.Delete(physicalPathToTestFolder) ' delete the test folder
	        Catch ex As Exception
	            ' Show the probelm
	            Dim message As String = ex.Message
	            Dim script As String = String.Format("alert('{0}');", message.Replace("'", """"))
	            ScriptManager.RegisterStartupScript(Me.Page, Me.Page.[GetType](), "KEY", script, True)
	        End Try
	    End Sub
	
````


* If an exception is thrown during the test, the text of the error (the value of the ex.Message property) will be shown as a JavaScript popup
