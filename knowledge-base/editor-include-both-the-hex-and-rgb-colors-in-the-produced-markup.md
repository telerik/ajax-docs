---
title: Include both the HEX and RGB colors in the produced markup
description: See how to include both the HEX and RGB colors in the produced markup of RadEditor.
type: how-to
page_title: Include both the HEX and RGB colors in the produced markup
slug: editor-include-both-the-hex-and-rgb-colors-in-the-produced-markup
res_type: kb
---

## Description

"I want to figure out how to leave both the #color code and the rgb color codes. We are using the editor to design email templates and some email clients recognize the #color code and some recognize rgb so we need to have both in there. No matter what we do in the code view, it strips one or the other and we don't want the editor to strip either value. How do I accomplish this?"

## Solution

The solution is to disable the Content Filters and implement your own custom content filter as the one below:

````ASP.NET
<telerik:RadEditor RenderMode="Lightweight" runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad" ContentFilters="None">
    <Content>
        <font style="color: #ffc000;">test</font>
        <br/>
        <span style="color: rgb(255, 192, 0);">test2</span>
    </Content>
</telerik:RadEditor>
<script type="text/javascript">
    function rgb2hex(rgb) {
        if (rgb.search("rgb") == -1) {
            return rgb;
        } else {
            rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
    }

    function applyColorAttributes(contentElement) {
        var all = contentElement.getElementsByTagName("*");
        var elemCount = all.length;

        for (var i = 0; i < elemCount; i++) {
            if (all[i].style.color) {
                var colorAttribute = all[i].style.color;
                all[i].setAttribute("color", rgb2hex(colorAttribute));
                all[i].style.color = "";
                all[i].style.color = colorAttribute;
            }
        }
    }


    function OnClientLoad(editor, args) {
        editor.get_filtersManager().add(new MyFilter());
    }
    MyFilter = function () {
        MyFilter.initializeBase(this);
        this.set_isDom(true);
        this.set_enabled(true);
        this.set_name("RadEditor filter");
        this.set_description("RadEditor filter description");
    }
    MyFilter.prototype =
    {
        getHtmlContent: function (contentElement) {
            applyColorAttributes(contentElement);
            return contentElement;
        },
        getDesignContent: function (contentElement) {
            applyColorAttributes(contentElement);
            return contentElement;
        }
    }
    MyFilter.registerClass('MyFilter', Telerik.Web.UI.Editor.Filter);
</script>
````

The above solution uses the rgb2hex function provided in the following StackOverflow thread: [How to get hex color value rather than RGB value](https://stackoverflow.com/questions/1740700/how-to-get-hex-color-value-rather-than-rgb-value?).
In case you need to do the opposite - to convert the HEX to RGB value, you can use the hex2rgb in this article: jQuery: [HEX to RGB calculation different between browsers](https://stackoverflow.com/questions/4262417/jquery-hex-to-rgb-calculation-different-between-browsers)?

## The Result

The initial content

````ASP.NET
<font style="color: #ffc000;">test</font>
<br/>
<span style="color: rgb(255, 192, 0);">test2</span>
````

will be converted to

````ASP.NET
<font style="color: rgb(255, 192, 0);" color="#ffc000">test</font>
<br>
<span style="color: rgb(255, 192, 0);" color="#ffc000">test2</span>
````

