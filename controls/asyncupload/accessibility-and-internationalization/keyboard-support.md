---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: asyncupload/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support

## 

As a part of Q2 2013 __RadAsyncUpload__ control introduced fully built-in keyboard support. The following code snippet describes how you can use the keyboard support with the __RadAsyncUpload__ control.

````ASPNET
<telerik:RadAsyncUpload ID="RadAsyncUpload1" runat="server" AccessKey="P" TabIndex="1"/>
````

* __Access Keys__ - You can specify a key that lets the end-users to move focus directly to the __RadAsyncUpload__. Once focus is on the __RadAsyncUpload__, the user can use the Tab key for navigation. The access key is defined using the __AccessKey__ property. For example, if you set the __AccessKey__ property to "P", focus moves to the __RadAsyncUpload__ when the user press "Alt+P".![asyncupload-accessibilityandinternalization-keyboardsupport-focus](images/asyncupload-accessibilityandinternalization-keyboardsupport-focus.png)

* __Key Navigation__- __RadAsyncUpload__ allows end-users to navigate the selected files structure using the Tab and Shift + Tab:![asyncupload-accessibilityandinternalization-keyboardsupport-navigationpage](images/asyncupload-accessibilityandinternalization-keyboardsupport-navigationpage.png)

* __Action Key__ - __RadAsyncUPload__ uses "Spacebar" or the "Enter" key to activate the "File Upload" dialog window.![asyncupload-accessibilityandinternalization-keyboardsupport-open](images/asyncupload-accessibilityandinternalization-keyboardsupport-open.png)

>note To enable the keyboard support for Internet Explorer 9 or earlier, you will have to set the __DisablePlugins__ property to __true__ .
>When using Internet Explorer, you need to press Tab key twice, in order to move focus to next control on the page. This is a browser behavior.
>


>caption  Key combinations supported by different browsers 

| Browser | Focus | Action Key | Navigation Forward | Navigation Backward |
| ------ | ------ | ------ | ------ | ------ |
| __Internet Explorer__ |Alt + __Access Key__ |Space|Tab|Shift + Tab|
| __Firefox__ |Alt + Shift + __Access Key__ |Space|Tab|Shift + Tab|
| __Chrome__ |Alt + __Access Key__ (Alt + Shift + __Access Key__ )|Space (Enter)|Tab|Shift + Tab|
| __Safari__ |Alt + __Access Key__ (Alt + Shift + __Access Key__ )|Space (Enter)|Tab|Shift + Tab|
| __Opera__ |Not Supported|Space (Enter)|Tab|Shift + Tab|

# See Also

 * [Getting Started]({%slug asyncupload/getting-started%})

 * [Skins]({%slug asyncupload/appearance-and-styling/skins%})

 * [Localizing RadAsyncUpload]({%slug asyncupload/accessibility-and-internationalization/localizing-radasyncupload%})
