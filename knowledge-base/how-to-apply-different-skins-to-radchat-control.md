---
title: Applying Different Skins to RadChat Control
description: Learn how to apply different skins to the RadChat control in RadChat for ASP.NET AJAX.
type: how-to
page_title: How to Apply Different Skins to RadChat Control | RadChat for ASP.NET AJAX
slug: how-to-apply-different-skins-to-radchat-control
tags: radchat, skins, customization
res_type: kb
---
## Environment
| Product         | RadChat for ASP.NET AJAX |
|-----------------|--------------------------|
| Version         | all              |

## Description
I want to apply a different skin to the RadChat control in RadChat for ASP.NET AJAX. However, when I set the `Skin` attribute to "Bootstrap", I encounter the following error message in the console: "Failed to load resource: the server responded with a status of 404 (not found)". How can I apply different skins to the RadChat control successfully?

## Solution
Currently, the RadChat control only supports the "Default" skin. Therefore, setting the `Skin` attribute to a different skin, such as "Bootstrap", will result in an error. The RadChat control has been designed with a specific look and feel that aligns with its functionality and user experience, and it currently does not include other embedded skins.

If you want to customize the appearance of the RadChat control beyond what is provided by the "Default" skin, you can use custom CSS to achieve your desired look. This approach allows you to override the default styles and create a custom appearance that matches your application's theme.

Here's an example of how you can start customizing the RadChat control using CSS:

```html
<style>
    .RadChat .t-bubble {
        background-color: aquamarine; /* Change the background color of message bubble */
    }
    .RadChat .t-input {
        background-color: red; /* Change the background color of message input */
    }

    .RadChat .t-message-box {
        border-color: green; /* Change the border color of the input area */
    }
</style>
<telerik:RadChat runat="server" ID="RadChat1" Skin="Default">
    <ClientEvents OnPost="onPost" OnLoad="onLoad" />
    <UserSettings Name="John" />
</telerik:RadChat>
```

Please note that this approach allows you to customize specific CSS properties to achieve the desired appearance. However, it does not provide the ability to apply pre-defined skins such as "Bootstrap" directly to the RadChat control.

Additionally, if you would like to see more embedded skins, including a "Bootstrap" skin, added to the RadChat control in the future, you can vote for and track the following feature request: [Add embedded Skins for RadChat](https://feedback.telerik.com/aspnet-ajax/1477103-add-embedded-skins-for-radchat). Voting for and following this feature request is a great way to show your interest and stay updated on its progress.
