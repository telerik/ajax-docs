---
title: Giving the uploaded files unique names
description: Giving the uploaded files unique names in RadEditor. Check it now!
type: how-to
page_title: Giving the uploaded files unique names
slug: editor-giving-the-uploaded-files-unique-names
res_type: kb
---


## HOW-TO
 Give the uploaded files unique names  
   
## DESCRIPTION
 When a user uploads a file, he can overwrite an existing file by clicking on the "overwrite if file exists" checkbox, without caring about others using that file. It is possible to prevent this problem by assigning the uploaded file an unique name (like a guid).  
   
## SOLUTION  
 Here is a code example based on FileSystemContentProvider that shows how to rename the uploaded images:  
   
````C#
    protected void Page_Load(object sender, EventArgs e) 
    { 
        RadEditor1.ImageManager.ViewPaths = new string[] { "~/Images" }; 
        RadEditor1.ImageManager.UploadPaths = new string[] { "~/Images" }; 
        RadEditor1.ImageManager.ContentProviderTypeName = typeof(myprovider).AssemblyQualifiedName; 
    } 
 
    public class myprovider : Telerik.Web.UI.Widgets.FileSystemContentProvider 
    { 
 
        public myprovider(HttpContext context, string[] searchPatterns, string[] viewPaths, string[] uploadPaths, string[] deletePaths, string selectedUrl, string selectedItemTag) 
            : base(context, searchPatterns, viewPaths, uploadPaths, deletePaths, selectedUrl, selectedItemTag) 
        { 
        } 
 
        public override string StoreFile(UploadedFile file, string path, string name, params string[] arguments) 
        { 
            string fileExtention = name.Substring(name.LastIndexOf(".")); 
            string fileNameWithoutExtension = name.Substring(0,name.IndexOf(".")); 
            string newFileName = fileNameWithoutExtension + DateTime.UtcNow.Ticks + fileExtention; 
 
            string result = base.StoreFile(file, path, newFileName, arguments); 
 
            return result; 
        } 
    }
````
 
   