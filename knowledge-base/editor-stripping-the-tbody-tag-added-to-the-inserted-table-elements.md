---
title: Stripping the TBODY tag added to the inserted TABLE elements in RadEditor
description: Stripping the TBODY tag added to the inserted TABLE elements inserted in RadEditor. Check it now!
type: how-to
page_title: Stripping the TBODY tag added to the inserted TABLE elements in RadEditor
slug: editor-stripping-the-tbody-tag-added-to-the-inserted-table-elements
res_type: kb
---


 **PROBLEM**  
 When inserting a TABLE in the content area the browser automatically adds a TBODY element. In some scenarios this tag is not needed and you can easily strip using one of the solutions shown below.  
   
 **SOLUTION 1**  
 One possible way to strip the &lt;tbody&gt; tags is to implement a custom content filter, which will remove the TBODY tags instances using the replace() method and a regular expression. Here is an example:  
   
````ASP.NET
<telerik:radeditor runat="server" ID="RadEditor1"     
     OnClientLoad="OnClientLoad">   
</telerik:radeditor> 
 
<script type="text/javascript">  
    function OnClientLoad(editor, args)  
    {  
       editor.get_filtersManager().add(new MyFilter());  
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
         var newContent = content;  
         //Make changes to the content and return it  
         newContent = newContent.replace(/\<TBODY>/gi,"").replace(/\<\/TBODY>/gi,"");  
         return newContent;  
       },  
        
       getDesignContent : function(content)  
       {  
         var newContent = content;  
         //Make changes to the content and return it  
         newContent = newContent.replace(/\<TBODY>/gi,"").replace(/\<\/TBODY>/gi,"");  
         return newContent;  
       }  
    }  
    MyFilter.registerClass('MyFilter', Telerik.Web.UI.Editor.Filter);  
    </script> 
````
 
   
 **SOLUTION 2**  
 You can also strip the &lt;tbody&gt; and &lt;/tbody&gt; tags on the server using the RadEditor1.Content.Replace() server method.  

 
 