---
title: Known Reasons for Error Messages
page_title: Known Reasons for Error Messages | UI for ASP.NET AJAX Documentation
description: Known Reasons for Error Messages
slug: ajax/troubleshooting/known-reasons-for-error-messages
tags: known,reasons,for,error,messages
published: True
position: 0
---

# Known Reasons for Error Messages



## 

This help article describes three common reasons for error messages and their solutions.

* __Receiving Sys.WebForms.PageRequestManagerParserErrorException.__You may receive this error if you have used __RadAjaxPanel__ and __RadAjaxManager__ to AJAX-enablethe same control at the same time. You can Read more about the problem in [this help topic]({%slug ajax/radajaxmanager/troubleshooting/controls-wrapped-in-ajaxpanel-and-added-to-ajaxmanager-settings%}).

* __The state information is invalid for this page and might be corrupted.__Firefox 1.5 and up uses in-memory caching for entire web pages, including their JavaScript states, for a single browser session. Going backward and forward between visited pages requires no page loading and the JavaScript states are preserved. This feature, referred to by some as bfcache (for "Back-Forward Cache"), makes page navigation very fast. This caching state is preserved until the user closes the browser.Please refer to the help article [Ajax, ViewState and Firefox]({%slug ajax/troubleshooting/firefox-specifics%}) more information and workaround.

* __Dialog with the following error:__*Unexpected ajax response was received from the server.**This may be caused by one of the following reasons:**- Server.Transfer.**- Custom http handler.**- Incorrect loading of an "Ajaxified" user control.**Verify that you don't get a server-side exception or any other undesired behavior, by setting the __EnableAJAX__ property to __false__.*Most often people see this error when using __Server.Transfer__ method. Note that some control may use thismethod internally (like the __asp:LoginView__ control). In order to redirect to another page in an AJAX-enabled application, you should use the approaches mentioned in the help article[Redirecting to another page]({%slug ajax/how-to/redirecting-to-another-page%}). In most cases __Response.Redirect__ does the trick. You could also try using the __Redirect__ method of __RadAjax__ controls.Another possible reason you might see this error is because the application improperly loaded user controls. The [ Loading user controls]({%slug ajax/how-to/load-user-controls%}) help topic will help you fix the error in your code.Additionally, if the above does not help, you could disable AJAX as suggested in the error message. This will help you verify whetherthe error is related to using AJAX and if it is not, to fix any server-side errors if any are thrown.
