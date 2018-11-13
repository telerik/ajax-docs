---
title: Using Sprite Images in RadToolBarSplitButton
page_title: Using Sprite Images in RadToolBarSplitButton | RadToolBar for ASP.NET AJAX Documentation
description: Using Sprite Images in RadToolBarSplitButton
slug: toolbar/how-to/using-sprite-images-in-radtoolbarsplitbutton
tags: using,sprite,images,in,radtoolbarsplitbutton
published: True
position: 1
---

# Using Sprite Images in RadToolBarSplitButton

Change text and image of the selected button in the RadToolBarSplitButton using sprite images

## 

To change the text and the image of the selected RadToolBarButton in the **RadToolBarSplitButton** you will need to use some css styles in a combination with javascript. For this purpose you can use the **SpriteCssClass** property of the RadToolBarButton.To be able to use sprite images for the RadToolBarSplitButton on the first place, you will need to set the **EnableImageSprite** property to **true**. Unfortunately changing the image of the selected RadToolBarButton does not come out of the box when using sprites. Therefore, youwill need to apply some javascript code that will be switching the css classes applied to the selected button when changingthe different RadToolBarButtons.``

>note Note that the **SpriteCssClass** property is available after the **2012.3.1205** version.
>


````XML
.red .rtbIcon {
    background-position: -5px 0;
    background-image: url('img/Untitled.png');
    background-repeat: no-repeat;
}

.blue .rtbIcon {
    background-position: -5px -25px;
    background-image: url('img/Untitled.png');
    background-repeat: no-repeat;
}

.green .rtbIcon {
    background-position: -5px -50px;
    background-image: url('img/Untitled.png');
    background-repeat: no-repeat;
}
````

````ASPNET
<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" OnClientButtonClicking="onClientButtonClicking" EnableRoundedCorners="true" EnableShadows="true" Skin="Metro">
    <Items>
        <telerik:RadToolBarSplitButton EnableImageSprite="true" CssClass="red">
            <Buttons>
                <telerik:RadToolBarButton Text="Red"
                    CheckOnClick="true" Group="Color" ToolTip="Set Color Red" EnableImageSprite="true" SpriteCssClass="red">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarButton Text="Blue"
                    CheckOnClick="true" Group="Color" ToolTip="Set Color Blue" EnableImageSprite="true" SpriteCssClass="blue">
                </telerik:RadToolBarButton>
                <telerik:RadToolBarButton Text="Green"
                    CheckOnClick="true" Group="Color" ToolTip="Set Color Green" EnableImageSprite="true" SpriteCssClass="green">
                </telerik:RadToolBarButton>
            </Buttons>
        </telerik:RadToolBarSplitButton>
    </Items>
</telerik:RadToolBar>
````

````JavaScript
function onClientButtonClicking(sender, args) {
    var button = args.get_item();
    var parent = button.get_parent();
    setSpriteToParent(parent, button.get_spriteCssClass());
   
}

function setSpriteToParent(parent, className) {
    if (className == "blue" || className == "red" || className == "green") {
        parent.set_cssClass(className);
    }
}	
````


