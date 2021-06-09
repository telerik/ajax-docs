---
title: Animate hiding and showing of RadButton to fade out and fade in
description: Animate hiding and showing of RadButton to fade out and fade in. Check it now!
type: how-to
page_title: Animate hiding and showing of RadButton to fade out and fade in
slug: button-animate-hiding-and-showing-of-radbutton-to-fade-out-and-fade-in
res_type: kb
---


## Description

Generally, RadButton provides its own **.set\_visible()** method which can be used to toggle its state:  

 [RadButton Client-side Object Model](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/client-side-programming/overview#client-side-object-model)  
  
 If you want to add some animated effect to this action to make it more pleasant to the eye, look no further than the approach below.
 
 ![Animate Button Hiding](images/button-animate-hiding-and-showing.gif)

## Solution
  
 - Approach 1:
  
  To achieve this requirement, you can access the element of the button and use jQuery to handle the rest:

  ````JavaScript
  function externalButtonClick() {
    // var $ = $telerik.$;
    var radButton = $find('<%= RadButton1.ClientID %>');
 
    if (radButton.get_visible()) {
        $(radButton.get_element()).fadeOut("slow");
    }
    else {
        $(radButton.get_element()).fadeIn("slow");
    }
  }
  ````

 - Approach 2:
  
  Alternatively, you can delve into the secret territories of the button object and override its built-in method:  

  ````JavaScript
      // var $ = $telerik.$;;
    Telerik.Web.UI.RadButton.prototype.set_visible = function (value) {
        var e = Function._validateParams(arguments, [{ name: "value", type: Boolean }]);
        if (e) throw e;
        var buttonEl = this._element;
        if (!buttonEl) throw Error.invalidOperation(Sys.Res.cantBeCalledAfterDispose);
        if (value) {
            $(this._element).fadeIn("slow", function () {
                Sys.UI.DomElement.setVisible(buttonEl, value)
            });
        }
        else {
            $(this._element).fadeOut("slow", function () {
                Sys.UI.DomElement.setVisible(buttonEl, value)
            });
        }
    }
  ````


 