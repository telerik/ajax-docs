---
title: How to execute custom code called on RadEditor client-side events
description: See how to export RadEditor content to PDF
type: how-to
page_title: How to execute custom code called on RadEditor client events
slug: editor-how-to-execute-custom-code-called-on-radeditor-client-events
res_type: kb
---

## Description

Execute custom code on the desired RadEditor for SharePoint client-side events.


## Solution

The code below demonstrates how to check whether the inserted image through the Image manager has an "alt" attribute set and if it doesn't then urge the user to enter an "alt" attribute name:

1. Open the \Program Files\Common Files\Microsoft Shared\Web Server Extensions\wpresources\RadEditorSharePoint\x.x.x.x__1f131a624888eeed\Resources\SPEditorTools.js file and write at the end of the file your custom code to be executed on the desired event:   

````JavaScript
function OnClientPasteHtml(sender, args)    
{    
    var commandName = args.get_commandName();    
    var value = args.get_value();    
     
    if (commandName == "ImageManager")    
    {    
        //See if an img has an alt tag set     
        var div = document.createElement("DIV");     
     
        //Do not use div.innerHTML as in IE this would cause the image's src or the link's href to be converted to absolute path.    
        //This is a severe IE quirk.    
        Telerik.Web.UI.Editor.Utils.setElementInnerHtml(div,value);    
     
        //Now check if there is alt attribute     
        var img = div.firstChild;     
        if (!img.alt)    
        {     
            var alt = prompt("No alt tag specified. Please specify an alt attribute for the image", "");    
            img.setAttribute("alt", alt);    
     
            //Set new content to be pasted into the editor     
            args.set_value(div.innerHTML);    
        }     
    }    
}
````
 
2. Open the respective ConfigFile (ConfigFile.xml or ListConfigFile.xml) and set your custom function to be executed on the desired event e.g.

<property name="OnClientPasteHtml">OnClientPasteHtml</property> 
 
3. Save the files, clear the browser's cache and review the result.

For more information about the different editor's events please review the [Client-side Events
](https://demos.telerik.com/aspnet-ajax/editor/examples/clientsideevents/defaultcs.aspx) demo.

