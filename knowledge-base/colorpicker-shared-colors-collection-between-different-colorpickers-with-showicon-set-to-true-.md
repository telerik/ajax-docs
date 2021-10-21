---
title: Shared colors collection between different ColorPickers with ShowIcon set to "true"
description: Shared colors collection between different ColorPickers with ShowIcon set to "true" - RadColorPicker. Check it now!
type: how-to
page_title: Shared colors collection between different ColorPickers with ShowIcon set to "true"
slug: colorpicker-shared-colors-collection-between-different-colorpickers-with-showicon-set-to-true-
res_type: kb
---


## PROBLEM  

When you use ShowIcon="true" for several instances of the RadColorPicker for ASP.NET AJAX control, each control would serialize the colors in its Items collection and send that information to the browser. Then, as soon as you click the button to open the palette of the RadColorPicker, that palette will be created based on the information in the items collection. This, however, would result in sending unneeded data to the client, because actually the palette is the same for all color pickers.  
  
## SOLUTION   

Below you can see how to avoid the scenario above, by using only a few lines of code.  
  

Let us assume that you have ten RadColorPicker instances with ShowIcon set to "true" and that you want all of them to show the colors, defined in the Default preset of the color picker. In order to make only one of the color pickers serialize and send the information for all 232 colors (Value and Title), you need to do the following:  

1. Set **Preset="None"** and clear the items collection for nine of the RadColorPickers.
2. Set **Preset="Default"** for the tenth RadColorPicker.
3. Put the following JavaScript function on your page:
    ````ASP.NET
    <script type="text/javascript">  
    function OnClientLoad(sender, args)  
    {  
        var sourceColorPicker = $find('<%= RadColorPicker1.ClientID %>');  
        var sharedColors = sourceColorPicker._items;  
        sender._items = sharedColors;  
        
        // The number of columns is different for different predefined presets  
        sender._columns = sourceColorPicker._columns;  
    }  
    </script> 
    ````
4. Assign the OnClientLoad function as a handler for the **ClientLoad **event for the nine RadColorPickers with no preset.


As a result, when you check the HTML of your page (right click on the page -&gt; View (Page) Source), you will see the following fragment rendered only once, instead of ten times:  

````ASP.NET
"[{\"value\":\"#000000\",\"title\":\"#000000\"},{\"value\":\"#000033\",\"title\":\"#000033\"},{\"value\":\"#000066\",\"title\":\"#000066\"},{\"value\":\"#000099\",\"title\":\"#000099\"},{\"value\":\"#0000CC\",\"title\":\"#0000CC\"},{\"value\":\"#0000FF\",\"title\":\"#0000FF\"},{\"value\":\"#003300\",\"title\":\"#003300\"},{\"value\":\"#003333\",\"title\":\"#003333\"},{\"value\":\"#003366\",\"title\":\"#003366\"},{\"value\":\"#003399\",\"title\":\"#003399\"},{\"value\":\"#0033CC\",\"title\":\"#0033CC\"},{\"value\":\"#0033FF\",\"title\":\"#0033FF\"},{\"value\":\"#006600\",\"title\":\"#006600\"},{\"value\":\"#006633\",\"title\":\"#006633\"},{\"value\":\"#006666\",\"title\":\"#006666\"},{\"value\":\"#006699\",\"title\":\"#006699\"},{\"value\":\"#0066CC\",\"title\":\"#0066CC\"},{\"value\":\"#0066FF\",\"title\":\"#0066FF\"},{\"value\":\"#009900\",\"title\":\"#009900\"},{\"value\":\"#009933\",\"title\":\"#009933\"},{\"value\":\"#009966\",\"title\":\"#009966\"},{\"value\":\"#009999\",\"title\":\"#009999\"},{\"value\":\"#0099CC\",\"title\":\"#0099CC\"},{\"value\":\"#0099FF\",\"title\":\"#0099FF\"},{\"value\":\"#00CC00\",\"title\":\"#00CC00\"},{\"value\":\"#00CC33\",\"title\":\"#00CC33\"},{\"value\":\"#00CC66\",\"title\":\"#00CC66\"},{\"value\":\"#00CC99\",\"title\":\"#00CC99\"},{\"value\":\"#00CCCC\",\"title\":\"#00CCCC\"},{\"value\":\"#00CCFF\",\"title\":\"#00CCFF\"},{\"value\":\"#00FF00\",\"title\":\"#00FF00\"},{\"value\":\"#00FF33\",\"title\":\"#00FF33\"},{\"value\":\"#00FF66\",\"title\":\"#00FF66\"},{\"value\":\"#00FF99\",\"title\":\"#00FF99\"},{\"value\":\"#00FFCC\",\"title\":\"#00FFCC\"},{\"value\":\"#00FFFF\",\"title\":\"#00FFFF\"},{\"value\":\"#330000\",\"title\":\"#330000\"},{\"value\":\"#330033\",\"title\":\"#330033\"},{\"value\":\"#330066\",\"title\":\"#330066\"},{\"value\":\"#330099\",\"title\":\"#330099\"},{\"value\":\"#3300CC\",\"title\":\"#3300CC\"},{\"value\":\"#3300FF\",\"title\":\"#3300FF\"},{\"value\":\"#333300\",\"title\":\"#333300\"},{\"value\":\"#333333\",\"title\":\"#333333\"},{\"value\":\"#333366\",\"title\":\"#333366\"},{\"value\":\"#333399\",\"title\":\"#333399\"},{\"value\":\"#3333CC\",\"title\":\"#3333CC\"},{\"value\":\"#3333FF\",\"title\":\"#3333FF\"},{\"value\":\"#336600\",\"title\":\"#336600\"},{\"value\":\"#336633\",\"title\":\"#336633\"},{\"value\":\"#336666\",\"title\":\"#336666\"},{\"value\":\"#336699\",\"title\":\"#336699\"},{\"value\":\"#3366CC\",\"title\":\"#3366CC\"},{\"value\":\"#3366FF\",\"title\":\"#3366FF\"},{\"value\":\"#339900\",\"title\":\"#339900\"},{\"value\":\"#339933\",\"title\":\"#339933\"},{\"value\":\"#339966\",\"title\":\"#339966\"},{\"value\":\"#339999\",\"title\":\"#339999\"},{\"value\":\"#3399CC\",\"title\":\"#3399CC\"},{\"value\":\"#3399FF\",\"title\":\"#3399FF\"},{\"value\":\"#33CC00\",\"title\":\"#33CC00\"},{\"value\":\"#33CC33\",\"title\":\"#33CC33\"},{\"value\":\"#33CC66\",\"title\":\"#33CC66\"},{\"value\":\"#33CC99\",\"title\":\"#33CC99\"},{\"value\":\"#33CCCC\",\"title\":\"#33CCCC\"},{\"value\":\"#33CCFF\",\"title\":\"#33CCFF\"},{\"value\":\"#33FF00\",\"title\":\"#33FF00\"},{\"value\":\"#33FF33\",\"title\":\"#33FF33\"},{\"value\":\"#33FF66\",\"title\":\"#33FF66\"},{\"value\":\"#33FF99\",\"title\":\"#33FF99\"},{\"value\":\"#33FFCC\",\"title\":\"#33FFCC\"},{\"value\":\"#33FFFF\",\"title\":\"#33FFFF\"},{\"value\":\"#660000\",\"title\":\"#660000\"},{\"value\":\"#660033\",\"title\":\"#660033\"},{\"value\":\"#660066\",\"title\":\"#660066\"},{\"value\":\"#660099\",\"title\":\"#660099\"},{\"value\":\"#6600CC\",\"title\":\"#6600CC\"},{\"value\":\"#6600FF\",\"title\":\"#6600FF\"},{\"value\":\"#663300\",\"title\":\"#663300\"},{\"value\":\"#663333\",\"title\":\"#663333\"},{\"value\":\"#663366\",\"title\":\"#663366\"},{\"value\":\"#663399\",\"title\":\"#663399\"},{\"value\":\"#6633CC\",\"title\":\"#6633CC\"},{\"value\":\"#6633FF\",\"title\":\"#6633FF\"},{\"value\":\"#666600\",\"title\":\"#666600\"},{\"value\":\"#666633\",\"title\":\"#666633\"},{\"value\":\"#666666\",\"title\":\"#666666\"},{\"value\":\"#666699\",\"title\":\"#666699\"},{\"value\":\"#6666CC\",\"title\":\"#6666CC\"},{\"value\":\"#6666FF\",\"title\":\"#6666FF\"},{\"value\":\"#669900\",\"title\":\"#669900\"},{\"value\":\"#669933\",\"title\":\"#669933\"},{\"value\":\"#669966\",\"title\":\"#669966\"},{\"value\":\"#669999\",\"title\":\"#669999\"},{\"value\":\"#6699CC\",\"title\":\"#6699CC\"},{\"value\":\"#6699FF\",\"title\":\"#6699FF\"},{\"value\":\"#66CC00\",\"title\":\"#66CC00\"},{\"value\":\"#66CC33\",\"title\":\"#66CC33\"},{\"value\":\"#66CC66\",\"title\":\"#66CC66\"},{\"value\":\"#66CC99\",\"title\":\"#66CC99\"},{\"value\":\"#66CCCC\",\"title\":\"#66CCCC\"},{\"value\":\"#66CCFF\",\"title\":\"#66CCFF\"},{\"value\":\"#66FF00\",\"title\":\"#66FF00\"},{\"value\":\"#66FF33\",\"title\":\"#66FF33\"},{\"value\":\"#66FF66\",\"title\":\"#66FF66\"},{\"value\":\"#66FF99\",\"title\":\"#66FF99\"},{\"value\":\"#66FFCC\",\"title\":\"#66FFCC\"},{\"value\":\"#66FFFF\",\"title\":\"#66FFFF\"},{\"value\":\"#990000\",\"title\":\"#990000\"},{\"value\":\"#990033\",\"title\":\"#990033\"},{\"value\":\"#990066\",\"title\":\"#990066\"},{\"value\":\"#990099\",\"title\":\"#990099\"},{\"value\":\"#9900CC\",\"title\":\"#9900CC\"},{\"value\":\"#9900FF\",\"title\":\"#9900FF\"},{\"value\":\"#993300\",\"title\":\"#993300\"},{\"value\":\"#993333\",\"title\":\"#993333\"},{\"value\":\"#993366\",\"title\":\"#993366\"},{\"value\":\"#993399\",\"title\":\"#993399\"},{\"value\":\"#9933CC\",\"title\":\"#9933CC\"},{\"value\":\"#9933FF\",\"title\":\"#9933FF\"},{\"value\":\"#996600\",\"title\":\"#996600\"},{\"value\":\"#996633\",\"title\":\"#996633\"},{\"value\":\"#996666\",\"title\":\"#996666\"},{\"value\":\"#996699\",\"title\":\"#996699\"},{\"value\":\"#9966CC\",\"title\":\"#9966CC\"},{\"value\":\"#9966FF\",\"title\":\"#9966FF\"},{\"value\":\"#999900\",\"title\":\"#999900\"},{\"value\":\"#999933\",\"title\":\"#999933\"},{\"value\":\"#999966\",\"title\":\"#999966\"},{\"value\":\"#999999\",\"title\":\"#999999\"},{\"value\":\"#9999CC\",\"title\":\"#9999CC\"},{\"value\":\"#9999FF\",\"title\":\"#9999FF\"},{\"value\":\"#99CC00\",\"title\":\"#99CC00\"},{\"value\":\"#99CC33\",\"title\":\"#99CC33\"},{\"value\":\"#99CC66\",\"title\":\"#99CC66\"},{\"value\":\"#99CC99\",\"title\":\"#99CC99\"},{\"value\":\"#99CCCC\",\"title\":\"#99CCCC\"},{\"value\":\"#99CCFF\",\"title\":\"#99CCFF\"},{\"value\":\"#99FF00\",\"title\":\"#99FF00\"},{\"value\":\"#99FF33\",\"title\":\"#99FF33\"},{\"value\":\"#99FF66\",\"title\":\"#99FF66\"},{\"value\":\"#99FF99\",\"title\":\"#99FF99\"},{\"value\":\"#99FFCC\",\"title\":\"#99FFCC\"},{\"value\":\"#99FFFF\",\"title\":\"#99FFFF\"},{\"value\":\"#CC0000\",\"title\":\"#CC0000\"},{\"value\":\"#CC0033\",\"title\":\"#CC0033\"},{\"value\":\"#CC0066\",\"title\":\"#CC0066\"},{\"value\":\"#CC0099\",\"title\":\"#CC0099\"},{\"value\":\"#CC00CC\",\"title\":\"#CC00CC\"},{\"value\":\"#CC00FF\",\"title\":\"#CC00FF\"},{\"value\":\"#CC3300\",\"title\":\"#CC3300\"},{\"value\":\"#CC3333\",\"title\":\"#CC3333\"},{\"value\":\"#CC3366\",\"title\":\"#CC3366\"},{\"value\":\"#CC3399\",\"title\":\"#CC3399\"},{\"value\":\"#CC33CC\",\"title\":\"#CC33CC\"},{\"value\":\"#CC33FF\",\"title\":\"#CC33FF\"},{\"value\":\"#CC6600\",\"title\":\"#CC6600\"},{\"value\":\"#CC6633\",\"title\":\"#CC6633\"},{\"value\":\"#CC6666\",\"title\":\"#CC6666\"},{\"value\":\"#CC6699\",\"title\":\"#CC6699\"},{\"value\":\"#CC66CC\",\"title\":\"#CC66CC\"},{\"value\":\"#CC66FF\",\"title\":\"#CC66FF\"},{\"value\":\"#CC9900\",\"title\":\"#CC9900\"},{\"value\":\"#CC9933\",\"title\":\"#CC9933\"},{\"value\":\"#CC9966\",\"title\":\"#CC9966\"},{\"value\":\"#CC9999\",\"title\":\"#CC9999\"},{\"value\":\"#CC99CC\",\"title\":\"#CC99CC\"},{\"value\":\"#CC99FF\",\"title\":\"#CC99FF\"},{\"value\":\"#CCCC00\",\"title\":\"#CCCC00\"},{\"value\":\"#CCCC33\",\"title\":\"#CCCC33\"},{\"value\":\"#CCCC66\",\"title\":\"#CCCC66\"},{\"value\":\"#CCCC99\",\"title\":\"#CCCC99\"},{\"value\":\"#CCCCCC\",\"title\":\"#CCCCCC\"},{\"value\":\"#CCCCFF\",\"title\":\"#CCCCFF\"},{\"value\":\"#CCFF00\",\"title\":\"#CCFF00\"},{\"value\":\"#CCFF33\",\"title\":\"#CCFF33\"},{\"value\":\"#CCFF66\",\"title\":\"#CCFF66\"},{\"value\":\"#CCFF99\",\"title\":\"#CCFF99\"},{\"value\":\"#CCFFCC\",\"title\":\"#CCFFCC\"},{\"value\":\"#CCFFFF\",\"title\":\"#CCFFFF\"},{\"value\":\"#FF0000\",\"title\":\"#FF0000\"},{\"value\":\"#FF0033\",\"title\":\"#FF0033\"},{\"value\":\"#FF0066\",\"title\":\"#FF0066\"},{\"value\":\"#FF0099\",\"title\":\"#FF0099\"},{\"value\":\"#FF00CC\",\"title\":\"#FF00CC\"},{\"value\":\"#FF00FF\",\"title\":\"#FF00FF\"},{\"value\":\"#FF3300\",\"title\":\"#FF3300\"},{\"value\":\"#FF3333\",\"title\":\"#FF3333\"},{\"value\":\"#FF3366\",\"title\":\"#FF3366\"},{\"value\":\"#FF3399\",\"title\":\"#FF3399\"},{\"value\":\"#FF33CC\",\"title\":\"#FF33CC\"},{\"value\":\"#FF33FF\",\"title\":\"#FF33FF\"},{\"value\":\"#FF6600\",\"title\":\"#FF6600\"},{\"value\":\"#FF6633\",\"title\":\"#FF6633\"},{\"value\":\"#FF6666\",\"title\":\"#FF6666\"},{\"value\":\"#FF6699\",\"title\":\"#FF6699\"},{\"value\":\"#FF66CC\",\"title\":\"#FF66CC\"},{\"value\":\"#FF66FF\",\"title\":\"#FF66FF\"},{\"value\":\"#FF9900\",\"title\":\"#FF9900\"},{\"value\":\"#FF9933\",\"title\":\"#FF9933\"},{\"value\":\"#FF9966\",\"title\":\"#FF9966\"},{\"value\":\"#FF9999\",\"title\":\"#FF9999\"},{\"value\":\"#FF99CC\",\"title\":\"#FF99CC\"},{\"value\":\"#FF99FF\",\"title\":\"#FF99FF\"},{\"value\":\"#FFCC00\",\"title\":\"#FFCC00\"},{\"value\":\"#FFCC33\",\"title\":\"#FFCC33\"},{\"value\":\"#FFCC66\",\"title\":\"#FFCC66\"},{\"value\":\"#FFCC99\",\"title\":\"#FFCC99\"},{\"value\":\"#FFCCCC\",\"title\":\"#FFCCCC\"},{\"value\":\"#FFCCFF\",\"title\":\"#FFCCFF\"},{\"value\":\"#FFFF00\",\"title\":\"#FFFF00\"},{\"value\":\"#FFFF33\",\"title\":\"#FFFF33\"},{\"value\":\"#FFFF66\",\"title\":\"#FFFF66\"},{\"value\":\"#FFFF99\",\"title\":\"#FFFF99\"},{\"value\":\"#FFFFCC\",\"title\":\"#FFFFCC\"},{\"value\":\"#FFFFFF\",\"title\":\"#FFFFFF\"},{\"value\":\"#000000\",\"title\":\"#000000\"},{\"value\":\"#111111\",\"title\":\"#111111\"},{\"value\":\"#222222\",\"title\":\"#222222\"},{\"value\":\"#333333\",\"title\":\"#333333\"},{\"value\":\"#444444\",\"title\":\"#444444\"},{\"value\":\"#555555\",\"title\":\"#555555\"},{\"value\":\"#666666\",\"title\":\"#666666\"},{\"value\":\"#777777\",\"title\":\"#777777\"},{\"value\":\"#888888\",\"title\":\"#888888\"},{\"value\":\"#999999\",\"title\":\"#999999\"},{\"value\":\"#AAAAAA\",\"title\":\"#AAAAAA\"},{\"value\":\"#BBBBBB\",\"title\":\"#BBBBBB\"},{\"value\":\"#CCCCCC\",\"title\":\"#CCCCCC\"},{\"value\":\"#DDDDDD\",\"title\":\"#DDDDDD\"},{\"value\":\"#EEEEEE\",\"title\":\"#EEEEEE\"},{\"value\":\"#FFFFFF\",\"title\":\"#FFFFFF\"}]" 
````



 Here is a sample you can use for testing and reference:  

````ASP.NET
<telerik:RadColorPicker ID="RadColorPicker1" runat="server" ShowIcon="true" Preset="Default" RenderMode="Lightweight">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker2" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker3" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker4" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker5" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker6" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker7" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker8" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker9" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<telerik:RadColorPicker ID="RadColorPicker10" runat="server" ShowIcon="true" Preset="None" RenderMode="Lightweight"
    OnClientLoad="OnClientLoad">
</telerik:RadColorPicker>
<script type="text/javascript">
    function OnClientLoad(sender, args) {
        var sourceColorPicker = $find('<%= RadColorPicker1.ClientID %>');
            var sharedColors = sourceColorPicker._items;
            sender._items = sharedColors;
            // The number of columns is different for different predefined presets
            sender._columns = sourceColorPicker._columns;
        }
</script>
````




   