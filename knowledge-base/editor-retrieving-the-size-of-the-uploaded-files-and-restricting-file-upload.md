---
title: Retrieving the size of the uploaded file(s) and restricting file upload
description: Retrieving the size of the uploaded file(s) and restricting file upload in RadEditor. Check it now!
type: how-to
page_title: Retrieving the size of the uploaded file(s) and restricting file upload
slug: editor-retrieving-the-size-of-the-uploaded-files-and-restricting-file-upload
res_type: kb
---

 
   
## HOW-TO 
 Retrieve the size of the uploaded file(s) and restrict file upload  
   
## SOLUTION  
 The solution below demonstrates how to implement a FileSystemContentProvider and check the uploaded image(s) size. If the file length exceeds the specified max file upload length then the file will be not uploaded:  
   
 **Default.aspx:**  
   
 ````ASP.NET
 <%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>
  
<%@ Register TagPrefix="telerik" Namespace="Telerik.Web.UI" Assembly="Telerik.Web.UI" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Untitled Page</title>
    <style type="text/css">
    </style>
</head>
<body>
    <form id="form1" runat="server">
        <asp:ScriptManager runat="server" ID="ScriptManager">
        </asp:ScriptManager>
        <telerik:RadEditor runat="server" ID="RadEditor1">
        </telerik:RadEditor>
    </form>
</body>
</html>
 ````
 
   
   
 **Default.aspx.cs:**  
   
````C#
using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using Telerik.Web.UI;
using System.IO;
  
public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        RadEditor1.ImageManager.ViewPaths = new string[] { "~/Images" };
        RadEditor1.ImageManager.UploadPaths = new string[] { "~/Images" };
        RadEditor1.ImageManager.DeletePaths = new string[] { "~/Images" };
        RadEditor1.ImageManager.MaxUploadFileSize = 10000000;
        RadEditor1.ImageManager.ContentProviderTypeName = typeof(myprovider).AssemblyQualifiedName;
    }
  
      
  
    public class myprovider : Telerik.Web.UI.Widgets.FileSystemContentProvider
    {
  
        public myprovider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag)
            : base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag)
        {
        }
  
        protected const int maxFileLenght = 256000;
  
        public override string StoreFile(UploadedFile file, string path, string name, params string[] arguments)
        {
            if (file.ContentLength < maxFileLenght)
            {
                string result = base.StoreFile(file, path, name, arguments);
                return result;
            }
            return null;
        }
    }
}
```` 
 
 
   
 The solution could be enhanced by the developer to check the Upload directory length and restrict the files upload if its exceeds the allowed size. The following articles could be helpful for this scenario:   
 * [DirectoryInfo.GetFiles Method](http://msdn.microsoft.com/en-us/library/system.io.directoryinfo.getfiles%28VS.71%29.aspx)[,  
 * File and directory information](http://csharp.net-tutorials.com/file-handling/file-and-directory-information/),  
 * [Calculate Directory Size](http://www.java2s.com/Tutorial/CSharp/0300__File-Directory-Stream/CalculateDirectorySize.htm).

 