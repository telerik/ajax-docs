---
title:  Making named anchors visible in editing area
description: Making named anchors visible in editing area of RadEditor. Check it now!
type: how-to
page_title:  Making named anchors visible in editing area
slug: editor-making-named-anchors-visible-in-editing-area
res_type: kb
---


## HOW-TO  
 **Make named anchors visible in editing area  
   
## DESCRIPTION  
 By default, the anchors are invisible in the content area and it is useful to display them to prevent users from accidentally deleting a named anchor. The solution below demonstrates how to highlight the named anchors in Design mode using a [content filter](https://demos.telerik.com/aspnet-ajax/editor/examples/contentfilters/defaultcs.aspx).  
   
## SOLUTION  
When the content is loaded initially in the editor, the code parses the anchors and sets a background-color css property to all of them and highlights them in the content area. When the user switches to Html mode or submits the content the background-color property is removed.  
   
 
````ASP.NET
<telerik:radeditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1">  
<Content>  
    SAMLE CONTENT <BR>SAMPLE CONTENT <A NAME="ANCHOR1">Anchor 1</A><BR><BR>SAMPLE CONTENT<BR><BR>  
    <A HREF="HTTP://ABV.BG">SAMPLE</A>  
    <A HREF="#ANCHOR1">CONTENT</A><BR>  
    <A HREF="HTTP://WWW.TELERIK.COM">WWW.TELERIK.COM</A> <BR>  
    <A NAME="ANCHOR2">Anchor 2</A>  
</Content>  
</telerik:radeditor>  
<script type="text/javascript">  
    function OnClientLoad(editor, args)  
    {  
       editor.get_filtersManager().add(new MyFilter());  
       var links = editor.get_document().getElementsByTagName("A");  
       for (var i=0; i< links.length; i++)  
       {  
           var link = links[i];                              
           if (link && link.getAttribute("NAME"))  
           {                                                  
                link.style.backgroundColor = "yellow"; //here you can set per your choice backgroundImage or className attribute  
           }  
       }  
    }  
    MyFilter = function()  
    {  
       MyFilter.initializeBase(this);  
       this.set_isDom(false);  
       this.set_enabled(true);  
       this.set_name("RadEditor filter");  
       this.set_description("RadEditor filter description");  
    }  
    MyFilter.prototype =  
    {  
       getHtmlContent : function(content)  
       {  
         var oDiv = document.createElement("DIV");  
            oDiv.innerHTML = content;  
            var links = oDiv.getElementsByTagName("A");  
            for (var i=0; i< links.length; i++)  
            {  
               var link = links[i];                              
               if (link && link.getAttribute("NAME"))  
               {                                                  
                    link.style.backgroundColor = "";  
               }  
            }  
            return oDiv.innerHTML;  
       },  
        
       getDesignContent : function(content)  
       {  
            var oDiv = document.createElement("DIV");  
            oDiv.innerHTML = content;  
            var links = oDiv.getElementsByTagName("A");  
            for (var i=0; i< links.length; i++)  
            {  
               var link = links[i];                              
               if (link && link.getAttribute("NAME"))  
               {                                                  
                    link.style.backgroundColor = "yellow"; //here you can set per your choice backgroundImage or className attribute  
               }  
            }  
            return oDiv.innerHTML;  
       }  
    }  
    MyFilter.registerClass('MyFilter', Telerik.Web.UI.Editor.Filter);  
    </script> 
````
 
  