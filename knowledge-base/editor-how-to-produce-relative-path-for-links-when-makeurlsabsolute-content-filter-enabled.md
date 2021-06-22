---
title: How to produce relative path for links when MakeUrlsAbsolute content filter enabled
description: How to produce relative path for links when RadEditor MakeUrlsAbsolute content filter enabled. Check it now!
type: how-to
page_title: How to produce relative path for links when MakeUrlsAbsolute content filter enabled
slug: editor-how-to-produce-relative-path-for-links-when-makeurlsabsolute-content-filter-enabled
res_type: kb
---


   
## HOW-TO  

Produce relative path for links when RadEditor MakeUrlsAbsolute filter property is set to **true**.  
   
   
## DESCRIPTION  

In some scenarios you might need to enable the MakeUrlsAbsolute content filter to provide absolute URLs for your content but you want to keep the relative paths for link elements. By design, this content filter applies for IMG, A, EMBED and AREA elemets and does not provide configuration properties.  
   
   
## SOLUTION  

For such scenario you can create a custom content filter to remove the domain name from the HREF attribute of the links. In order to ensure that this filter will be applied, it must not be a DOM filter because of the order of executing of content filters:  

Built-in DOM filters -> Custom DOM filters -> ConvertToXhtml filter -> Built-in string filters -> Custom string filters   

Creating such filter as a string filter, will ensure that it will be executed last.  

Here is the complete code solution:  
 
 
````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" ContentFilters="MakeUrlsAbsolute, DefaultFilters"
    OnClientLoad="OnClientLoad">
</telerik:RadEditor>
 
<script type="text/javascript">
function OnClientLoad(editor, args)
{
    editor.get_filtersManager().add(new MyFilter());
}
MyFilter = function()
{
    MyFilter.initializeBase(this);
    //set_isDom(false) in order to create the filter as string filter
    this.set_isDom(false);
    this.set_enabled(true);
    this.set_name("RadEditor filter that strips the domain from links HREF attribute");
    this.set_description("Relative links");
}
MyFilter.prototype =
{
    //function executed when going into HTML mode and upon submit
    getHtmlContent: function(content)
    {
        //regual expression that will match opening A tag
        var regExp = new RegExp("<a[^>]*href=['\"][^>\"']*['\"][^>]*>", "gi");
        //current page domain name - to be excluded from the URL
        var domain = "http://" + window.location.host;
            //sub-folders path
            var path = window.location.pathname;
            path = path.substr(0, path.lastIndexOf("/") + 1);
 
        var newContent = content.replace(regExp, function(match, offset, fullText)
        {
            return match.replace(domain + path, "");
        });
        return newContent;
    }
}
MyFilter.registerClass('MyFilter', Telerik.Web.UI.Editor.Filter);
</script>
````
 
   
   
   
 


