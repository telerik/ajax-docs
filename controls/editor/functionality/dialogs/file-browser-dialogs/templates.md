---
title: Templates
page_title: Templates - RadEditor
description: Check our Web Forms article about Templates.
slug: editor/functionality/dialogs/file-browser-dialogs/templates
tags: templates
published: True
position: 3
---

# Templates

This article explains how RadEditor dialog can reuse HTML documents as templates via the Template Manager dialog.

Templates are HTML docuements (e.g., template.html) that either implement an entire HTML page or a portion of an HTML markup. Using the  Template Manager dialog, you can enable end-users to use, delete and upload HTML files so to be used as templates in the editor's content.

Functionality:

Using the Template Manager dialog the users of a RadEditor can:

* **insert templates** in the editor's content area

* **upload new templates**, which will be available for inserting

* **delete files**

>important RadEditor does not modify ot sanitize files or user actions. You may want to sanitize the user uploaded templates as shown in the [sanitize-html-templates.zip archive](sanitize-html-templates.zip). You can also check and prevent user actions as shown in the [Security]({%slug editor-security%}) article.

Properties to set: 

The behavior of the Template Manager dialog is controlled by the following properties:

|  **Property**  |  **Description**  |
| ------ | ------ |
| **ViewPaths** |A string array which contains the paths where the RadEditor will look for templates files. The default value is an empty array. These folders will be visible in the file browser part of the dialog.|
| **UploadPaths** |A string array which contains the paths to which the RadEditor will be able to upload templates files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| **DeletePaths** |A string array which contains the paths from which the RadEditor will be able to delete templates files. The default value is an empty string array. The elements of this array must be a subset of the ViewPaths array.|
| **MaxUploadFileSize** |The maximum image file size in bytes, allowed for uploading. The default value is **204800** bytes (200 kilobytes).|
| **SearchPatterns** |A string array which contains the file extension filters that controls which files are shown in the Template Manager dialog and which file types can be uploaded through the upload dialog.The * character can be used as a wildcard in the file name, for example *.html will match all template names with extension html.|

**Example 1** and **Example 2** demonstrate the relationship between the folder structure and the property settings:

With the settings above, the users will be able to browse all subfolders of the "~/Templates" folder. They will be able to upload template files to the "~/Templates/New" folder and all its subfolders and delete template files from "~/Templates/New/Articles" and "~/Templates/New/News".

>caption Example 1: Setting Template manager properties inline

````ASP.NET
<telerik:radeditor runat="server" ID="RadEditor1"  >  
   <TemplateManager ViewPaths="~/Templates" UploadPaths="~/Templates/New" DeletePaths="~/Templates/New/Articles,~/Templates/New/News" />
</telerik:radeditor> 
````

>caption Example 2: Setting Template manager properties in CodeBehind.

````C#
string[] viewTemplates = new string[] { "~/Templates" };
string[] uploadTemplates = new string[] { "~/Templates/New" };
string[] deleteTemplates = new string[] { "~/Templates/New/Articles", "~/Templates/New/News" };

if (!IsPostBack)
{
   RadEditor1.TemplateManager.ViewPaths = viewTemplates;
   RadEditor1.TemplateManager.UploadPaths = uploadTemplates;
   RadEditor1.TemplateManager.DeletePaths = deleteTemplates;
} 
````
````VB
Dim viewTemplates As String() = New String() {"~/Templates"}
Dim uploadTemplates As String() = New String() {"~/Templates/New"}
Dim deleteTemplates As String() = New String() {"~/Templates/New/Articles", "~/Templates/New/News"}
If Not IsPostBack Then
	RadEditor1.TemplateManager.ViewPaths = viewTemplates
	RadEditor1.TemplateManager.UploadPaths = uploadTemplates
	RadEditor1.TemplateManager.DeletePaths = deleteTemplates
End If 	
````



Note that the viewTemplates, uploadTemplates and deleteTemplates variables are string arrays and that the Templates folders must be:

* a subdirectory of your web application

* directory placed in the root of IIS - you can set this folder by using the / forward slash symbol, e.g. `RadEditor1.TemplateManager.ViewPaths = new String []{"/Templates"};`

* a virtual directory of your web application that has a physical path pointing outside of your web application.

## See Also

 * [File Managers](https://demos.telerik.com/aspnet/prometheus/Editor/Examples/FileManagers/DefaultCS.aspx)

 * [Set Properties]({%slug editor/getting-started/set-properties%})

 * [Enforce Roles]({%slug editor/functionality/dialogs/examples/enforce-roles%})

 * [Prevent Cross-site Scripting (XSS)]({%slug editor/managing-content/prevent-cross-site-scripting-(xss)%})
