---
title: Implementing external Table of Contents where the links point to specific sections within RadEditor
description: See how to implement external Table of Contents (TOC) where the links point to specific sections within RadEditor.
type: how-to
page_title: Implement external Table of Contents where the links point to specific sections within RadEditor
slug: editor-implement-external-table-of-contents-where-the-links-point-to-specific-sections-within-radeditor
res_type: kb
---

## Description

See how to implement external Table of Contents where the links point to specific sections within RadEditor

## Solution

The code below shows how to implement exterior links (the table of contents placed outside the editor) that focus on a specific section within the content area of RadEditor:

````ASP.NET
<div onclick="return NavigateToAnchor(event);">  
    <ol> 
        <li><a href="#SingleFile">Single File</a> </li> 
        <li><a href="#FullKeyboard">Full keyboard</a> </li> 
        <li><a href="#XHTML">XHTML enabled output</a> </li> 
    </ol> 
</div> 
<br /> 
<telerik:radeditor id="RadEditor1" runat="server">  
<Content> 
    RadEditor is the successor of the well known industry standard Editor for ASP.NET.  
    The tight integration with ASP.NET AJAX and powerful new capabilities of the “Prometheus”  
    suite features the new WYSIWYG Editor as a flexible and lightweight component, turning  
    to be the fastest loading Web Editor. Among the hottest features are:  
    <br> 
    <br> 
    <ul> 
        <li><a name="SingleFile">Single-file</a> 
        , drag-and-drop deployment  
        <li><em>Built on top of ASP.NET AJAX<br> <br><br><br><br><br><br><br>
        </em> 
        <li><em>Unmatched loading speed with new semantic rendering </em> 
        <li><a name="FullKeyboard">Full keyboard</a> 
        accessibility  
        <li><em>Flexible Skinning mechanism</em><br><br><br><br><br><br><br><br><br>  
            <li><em>Simplified and intuitive toolbar configuration</em> 
        <li><a name="XHTML">Out-of-the-box XHTML-enabled</a> output<br><br><br><br><br><br><br><br><br><br><br><br> 
        </li> 
    </ul> 
</Content> 
</telerik:radeditor> 
 
<script type="text/javascript">        
    function NavigateToAnchor(e)        
    {        
        var link = e.target ? e.target : e.srcElement;        
        if (link.tagName != "A") return;                
        var href = link.href;        
        var anchorName = href.substr(href.lastIndexOf("#") + 1);        
        var editor = $find("<%=RadEditor1.ClientID%>");   //get a reference to RadEditor      
        var oDocument = editor.get_document();   
        var as = oDocument.getElementsByTagName("A");  //get a reference to the anchors in the content area      
                
        for (var i=0; i < as.length; i++)        
        {        
            var a = as[i];        
            if (a.getAttribute("name") == anchorName)        
            {                                
                a.scrollIntoView(true);        
            }        
        }        
        //Cancel the event        
        return false;        
    }        
</script> 
````

