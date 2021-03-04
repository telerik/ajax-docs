---
title: Setting hidden RadEditor in edit mode on click and putting it in non editable mode onblur 
description: See how to make RadEditor editable on click and hide it and save its content when the control loses focus or when hitting a toolbar button
type: how-to
page_title: Setting hidden RadEditor in edit mode on click and putting it in non editable mode onblur 
slug: editor-setting-hidden-radeditor-in-edit-mode-on-click-and-putting-it-in-non-editable-mode-onblur
res_type: kb
---

## Description

The solutions below demonstrate how to make RadEditor editable on click and hide it and save its content when the control loses focus or when hitting a toolbar button

## Solution 1

Check out the built-in functionality provided by RadEditor: 
* [Inline Editing demo](https://demos.telerik.com/aspnet-ajax/editor/examples/inline-editing/defaultcs.aspx)
* [Inline Editing help](https://demos.telerik.com/aspnet-ajax/editor/examples/inline-editing/defaultcs.aspx)

## Solution 2

In order to make RadEditor editable on click, hide it and save its content when the control loses focus, you should:
1. Put the editor in a hidden div element with style="display:block" having id="tContent"
2. Place the tContent element in a parent div element with id="lContent" and set some initial content that we will set in RadEditor when the onclick event of the lContent div is fired.
3. When the user clicks on the lContent div we will get a reference to the hidden editor's div and set its display css property to "", which will make the editor visible on the page. We will also set the parent lContent div content in the editor's content area via the editor.set_html(lContent.innerHTML) method.
4. When the user clicks outside of RadEditor and the editor loses its focus, we will hide the tContent div element and put the editor's content in the parent lContent div element.

Here is the whole code solution:

````ASPX
<div id="lContent">Sample Content 123</div>  
<div style="display:none" id="tContent">   
    <telerik:radeditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">   
            <Content></Content>   
    </telerik:radeditor>  
</div>  
<script type="text/javascript">   
    var lContent, tContent;   
    lContent = $get('lContent');   
    tContent = $get('tContent');   
    $addHandler(lContent, "click", lContent_Click);   
         
function OnClientLoad(editor, args)   
{   
    var element = document.all ? editor.get_document().body : editor.get_document();   
    $telerik.addExternalHandler(element, "blur", function(e)   
    {   
        var labelUpdated;   
        var editorContent = editor.get_html(true);   
        if (lContent.textContent == editorContent)   
            labelUpdated = false;   
        else   
            labelUpdated = true;   
            
        lContent.innerHTML = editorContent;   
        tContent.style.display = 'none';   
        lContent.style.display = '';   
    
        if (labelUpdated)    
        {   
            alert('Updating... ' + editorContent);   
        }   
    });   
}   
    
function lContent_Click()   
{   
    lContent.style.display = 'none';   
    tContent.style.display = '';   
      
     var editor = $find("<%=RadEditor1.ClientID%>"); //get a reference to RadEditor client object   
     editor.setFocus(); //set the focus on the the editor   
     editor.set_html(lContent.innerHTML);   
}   
</script> 
````
 
## Solution 3

In order to make RadEditor editable on double click, hide it and save its content on custom button click, use the code below:

````ASPX
<style>  
.annotation   
{   
    border:1px solid red;   
    width:600px;       
}   
</style>  
    
<script type="text/javascript">   
    var isEditing = false;   
         
    function setEditorVisible(toShow)   
    {   
        var editorWrapper = $get("editorWrapper");   
         
        if (toShow)   
        {   
            editorWrapper.style.visibility = "visible";   
            editorWrapper.style.position = "";   
        }   
        else   
        {   
            editorWrapper.style.visibility = "hidden";   
            editorWrapper.style.position = "absolute";   
        }   
    }   
            
     function editAnnotation(target, ev)   
     {   
        //Cancel the event - prevent it to reach body   
        //TODO: Add more stuff to cancel it in Mozilla   
        ev.cancelBubble = true;   
        ev.returnValue = false;    
          
        //Check if already editing   
        if (isEditing) return;   
             
        var editorWrapper = $get("editorWrapper");   
        var editor = $find("<%=RadEditor1.ClientID %>");     
                             
        //Position the editor next to the div, hide the div   
        var bounds = $telerik.getBounds(target);   
             
        //Do not set the size explicitly anymore - witn new version when using abs positioning   
        editor.setSize(bounds.width, bounds.height);   
                                                     
        target.parentNode.insertBefore(editorWrapper, target);   
          
        setEditorVisible(true);   
        editor.onParentNodeChanged(); 
        target.style.display = "none";                           
             
        //set editor content   
        editor.set_html(target.innerHTML);   
             
        //Prevent from moving the editor to another annotation while editing current one   
        isEditing = true;   
     }          
          
          
    Telerik.Web.UI.Editor.CommandList["Save"] = function(commandName, editor, args)   
    {   
        //Get content from editor, set it in DIV, hide the editor   
        var editorWrapper = $get("editorWrapper");     
        var target = editorWrapper.nextSibling;   
             
        target.innerHTML = editor.get_html(true);//true runs all the content XHTML filters.                   
        setEditorVisible(false);           
        target.style.display = "";          
             
        //!   
        isEditing = false;                
    };   
            
             
     document.body.ondblclick = function()   
     {           
        var editorWrapper = $get("editorWrapper");   
             
        setEditorVisible(false);   
             
        //Show the div that is being edited   
        var target = editorWrapper.nextSibling;   
        if (target && target.style.display == "none") target.style.display = "";   
             
        //!   
        isEditing = false;   
     }      
    
</script>  
    
    
<div id= "editorWrapper" style="visibility:hidden;position:absolute;top:0px;">   
    
    
<telerik:radeditor runat="server" ID="RadEditor1"    
 Height="200px"  
>    
<Tools>  
<telerik:EditorToolGroup>  
<telerik:EditorTool Name="Save" />  
</telerik:EditorToolGroup>  
</Tools>        
<Modules>  
<telerik:EditorModule Name=RadEditorStatistics />  
</Modules>  
  <documentmanager SearchPatterns="*.*" viewpaths="~/" uploadpaths="~/" />               
  <imagemanager viewpaths="~/" uploadpaths="~/" />                                     
       
  <Content>  
       
       
  </Content>  
</telerik:radeditor>  
</div>  
    
Double-click to edit an annotation.<br />  
 To Cancel editing - double-click outside any div, in the BODY<br />  
 To save the changes to the edited DIV click on Save button    
<br /><br />  
Annotation 1   
<div class="annotation" ondblclick="editAnnotation(this, event)">   
This is sample content    
</div>  
    
<br /><br />  
    
Annotation 2   
<div class="annotation" ondblclick="editAnnotation(this, event)">   
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
</div>  
    
<br /><br />  
    
Annotation 3   
<div class="annotation" ondblclick="editAnnotation(this, event)">   
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
This is sample content This is sample content This is sample content This is sample content This is sample content This is sample content    
</div>   
````        

Here is how the third solution works:
1. Double-click to edit an annotation
2. To Cancel editing - double-click outside any div, in the BODY
3. To save the changes to the edited DIV click on Save button




## See Also

- [Inline Editing](https://demos.telerik.com/aspnet-ajax/editor/examples/inline-editing/defaultcs.aspx)

