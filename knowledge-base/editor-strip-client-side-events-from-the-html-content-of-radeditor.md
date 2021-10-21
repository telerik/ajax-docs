---
title: Strip client-side events from the HTML content of RadEditor
description: This custom content filter based solution shows how to parse the content of RadEditor and strip the onclick, onmousedown, onmouseover attributes from it. 
page_title: Strip client-side events from the HTML content of RadEditor
slug: editor-strip-client-side-events-from-the-html-content-of-radeditor
res_type: kb
---

## Description

This [custom content filter](https://demos.telerik.com/aspnet-ajax/editor/examples/contentfilters/defaultcs.aspx) solution shows how to parse the content and strip the onclick, onmousedown, onmouseover attributes. Use it as a base to strip the desired attributes from the content.

## Solution

To strip all client-side event related attributes you can use a content filter as it is shown in the code below:

````ASP.NET
<telerik:radeditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad">  
    <Content> 
        <a href="javascript:doSomething();" >Click here</a> 
        <div onclick="alert();">Click Here</div> 
    </Content> 
</telerik:radeditor> 
<script type="text/javascript">  
function OnClientLoad(editor, args)  
{  
   editor.get_FiltersManager().add(new MyFilter());  
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
     var dom = document.createElement("DIV");     
     dom.innerHTML = content;     
         
     var elems = dom.getElementsByTagName("*");     
     for (var i=0; i < elems.length; i++)     
     {     
        //Remove all onmouseover, onmouseout, onclick eventhandlers from element           
        var elem = elems[i];  
        elem.removeAttribute("onmouseover");  
        elem.removeAttribute("onmouseout");  
        elem.removeAttribute("onclick");  
        //remove other eventhandlers that you do not want to be included in the content
          
        if (elem.tagName == "A")  
        {  
            if(elem.href.indexOf("javascript:") == 0) //if the href values of the link tags start with javascript:  then set href="#""
            {  
                elem.setAttribute("href", "#");  
            }  
        }  
     }                      
     return dom.innerHTML;      
   }  
}  
MyFilter.registerClass('MyFilter', Telerik.Web.UI.Editor.Filter);  
</script> 
````

You can also check out these dedicated articles describing how to prevent XSS in RadEditor:
* [Prevent Cross-site Scripting XSS](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss))
* [Attribute DOM Events](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/prevent-cross-site-scripting-(xss)#attribute-dom-events)


