---
title: Changing the background, text and border colors of RadButton
description: Changing the background, text and border colors of RadButton. Check it now!
type: how-to
page_title: Changing the background, text and border colors of RadButton
slug: button-changing-the-background-text-and-border-colors
res_type: kb
---

## How to

Change the background, text and border colors of RadButton  
  
![Random Color Button](images/button-changing-the-background-text-and-border-colors.gif)  
  
## Solution

The KB article shows how to programmatically update on click the RadButton's background, text and border colors. Since the background color is defined  by a background-image gradient the code changes the background-image property value to none and applies a random background-color and color to RadButton body and its title:

````ASPX
<script>
    function OnClientClicking(button, args) {
        var $ = $telerik.$;
        var buttonID = button.get_id();
        var buttonWrapper = $("#" + button.get_id());
        buttonWrapper.css("background-image", "none");
        buttonWrapper.css("background-color", getRandomColor());
        buttonWrapper.css("color", getRandomColor());
        buttonWrapper.css("border", "1px solid " + getRandomColor());
    }
 
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
</script>
<telerik:RadButton ID="RadButton1" Text="Button" runat="server" AutoPostBack="false" OnClientClicked="OnClientClicking" ButtonType="ToggleButton"></telerik:RadButton>
````

 