---
title: Inserting a Video Tag via the Media Manager instead of the default Object/Embed ones
description: See how to override the built-in behavior of the Media manager and insert a video tag in RadEditor.
type: how-to
page_title: Inserting a Video Tag via the Media Manager instead of the default Object/Embed ones
slug: editor-insert-a-video-tag-via-the-media-manager-instead-of-the-default-object-embed-ones
res_type: kb
---

## How-To

Insert a Video Tag via the Media Manager instead of the default Object/Embed ones

## Description

By default the Media manager works and inserts object/embed tags as the one below:

````ASP.NET
<object classid="clsid:6BF52A52-394A-11D3-B153-00C04F79FAA6" width="150" height="150" type="application/x-oleobject">
<param name="URL" value="PATH_TO_VIDEO_FILE/RadNavigation.avi"><embed src="PATH_TO_VIDEO_FILE/RadNavigation.avi" width="150" height="150" type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/MediaPlayer"></object>
````

The problem that you may experience is that those tags require Windows Media Player plugin to play, which is not supported anymore by Chrome and Firefox.

What you can do is to customize the Media manager to insert a [<video> HTML5](https://www.w3schools.com/html/html5_video.asp) tag instead.

## Solution

To do that attach to the [OnClientPasteHtml event](http://demos.telerik.com/aspnet-ajax/editor/examples/onclientpastehtml/defaultcs.aspx) of the Media Manager and to insert a video tag pointing to the selected video file, instead of an object/embed tag, i.e.

````ASP.NET
<script type="text/javascript">
    function OnClientPasteHtml(sender, args) {
        var commandName = args.get_commandName();
        //obtain the original content from the Media manager so that we can later obtain the path to of the selected video file
        var value = args.get_value();
        var videoUrl;
  
        if (commandName == "MediaManager") {
            var div = document.createElement("DIV");
            Telerik.Web.UI.Editor.Utils.setElementInnerHtml(div, value);
            //obtain the video file src
            if (!$telerik.isIE) {
                videoUrl = div.firstChild.childNodes[0].value;
            }
            else {
                videoUrl = div.firstChild.URL;
                              
            }
  
            //Create and insert a video tag with the src pointing to the selected in the Media dialog file
            args.set_value("<video src=" + videoUrl + " controls=\"controls\" />");
        }
    }
</script>
<telerik:RadEditor OnClientPasteHtml="OnClientPasteHtml" runat="server" ID="RadEditor1">
    <MediaManager ViewPaths="~/Editor/images" UploadPaths="~/Editor/images" SearchPatterns="*.mp4" />
</telerik:RadEditor>
<script type="text/javascript">
    //the code below is needed to disable the built-in MozillaKeepFlash content filter of RadEditor, which transforms the object/embed tags to an image in Firefox
    Telerik.Web.UI.Editor.MozillaKeepFlash.prototype.getHtmlContent = function (argument) {
        return argument;
    }
  
    Telerik.Web.UI.Editor.MozillaKeepFlash.prototype.getDesignContent = function (argument) {
        return argument;
    }
</script>
````
