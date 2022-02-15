---
title: Customizing Control Behavior
page_title: Customize Control Behavior
description: "Customize the behavior of a Telerik UI for ASP.NET AJAX control by building on top of its default properties and ready solutions."
slug: getting-started/customize-control-behavior
tags: customize, control, behavior
previous_url: getting-started/customize-control-behavior
published: True
position: 4
---

# Customizing the Behavior of the Controls

Once you have the controls [working in your project]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) and [are acquainted with their features]({%slug getting-started/explore-control-features%}), you can tailor their behavior to your specific project needs.

This article provides tips on customizing the behavior of the Telerik UI for ASP.NET AJAX controls.

## Built-In Properties, Events, and Solutions

The Telerik UI for ASP.NET AJAX controls have built-in features for the most common use cases, while their rich API lets you customize their behavior further. The first step to customizing the behavior of a control is to look for similar built-in features and their corresponding events and API.

If you do not immediately find the feature you need, take a look at the properties and events, and other relevant resources:

* [Demos](https://demos.telerik.com/aspnet-ajax/)
* [Documentation]({%slug introduction/introduction %})
* [Forums](https://www.telerik.com/forums/aspnet-ajax)
* [Code Library section](https://www.telerik.com/support/code-library/aspnet-ajax)
* [Knowledge Base articles](https://www.telerik.com/support/kb/aspnet-ajax)

## Customizing Complex Controls

Internally, complex controls often use other Telerik controls. Customizing their behavior usually boils down to accessing the child controls and using their properties and events as if they were not nested. Thus, looking for child control references is a shortcut to customizing complex controls. They can be exposed as properties and often using `.FindControl()` will let you access them on the server.

## Referencing Client-Side Objects

When you need to get work done in the browser, you will need a reference to the client-side object of the control. This is a bit peculiar in MS AJAX, and the [Get Client-side Reference to a Control Object]({%slug general-information/get-client-side-reference%}) article explains how to do that.

## Handling Client-Side Events

The Telerik UI for ASP.NET AJAX controls provide many client-side events. Since they are server-side controls, these events are exposed through serializable server properties and not as event attributes.

To handle a client-side event of a control, you must provide only the string name of the handler function, without parentheses. If you add parentheses, the event handler function will try to execute as soon as the page loads, and this will usually result in errors.

>caption Handling the client-side click of a Telerik UI for ASP.NET AJAX Button vs a standard button.

````ASP.NET
<input onclick="return myStandardClickHandler(this);" value="Standard control" id="Button1" runat="server" type="submit" />
<telerik:RadPushButton OnClientClicking="myTelerikClickHandler" Text="Telerik control" ID="RadPushButton1" runat="server"></telerik:RadPushButton>
<script>
    function myStandardClickHandler(btn) {
        //to get the object that fired the event, you must wire the event in a special way
        alert(btn);
        //the standard way of stopping further handler execution
        return false;
    }
    function myTelerikClickHandler(sender, args) {
        //the reference to the Telerik control that fired the event is available as the first argument
        alert(sender);
        //cancellable Telerik control events allow you to stop event execution like this
        args.set_cancel(true);
    }
</script>
````


## See Also

* [First Steps with MSI]({% slug introduction/installation/installing-the-telerik-controls-from-msi-file%})
* [First Steps with ZIP]({% slug introduction/installation/installing-the-telerik-controls-from-zip-file %})
* [First Steps with NuGet]({% slug introduction/installation/installing-the-telerik-controls-from-a-nuget-package %})
* [Getting Started with Telerik UI for ASP.NET AJAX (Video Tutorials)](https://learn.telerik.com/learn/course/external/view/elearning/5/telerik-ui-for-aspnet-ajax)
