---
title: Adding RadEditor dynamically to a page
description: Adding RadEditor dynamically to a page. Check it now!
type: how-to
page_title: Adding RadEditor dynamically to a page
slug: editor-adding-radeditor-dynamically-to-a-page
res_type: kb
---



## HOW-TO   
Add RadEditor programmatically to a page.  
   
## SOLUTION  
  
 You can place a placeholder in your ASPX/ASCX template, e.g.  
 
```ASP.NET 
 <asp:PlaceHolder runat="server" id="editorPlace" />  
````
 
and then, in Page_Load, instantiate a new Editor and add it to the controls collection of the placeholder. All properties of the edit can be set in Page_Load, e.g.  
   
````C#
private void Page_Load(object sender, System.EventArgs e)
{ 
    RadEditor editor = new RadEditor();
    editor.ID = "RadEditor1";
    //editor.ToolsFile = "~/<folder>/ToolsFile.xml";
    editor.Enabled = true;
    editorPlace.Controls.Add(editor);   
}
````

````VB.NET
Private Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs)
    Dim editor As RadEditor = New RadEditor
    editor.ID = "RadEditor1"
     //editor.ToolsFile = "~/<folder>/ToolsFile.xml"
    editor.Enabled = True
    editorPlace.Controls.Add(editor)
End Sub
````
 
 