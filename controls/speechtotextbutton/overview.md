---
title: Overview
page_title: SpeechToTextButton Overview
description: "Try now the Telerik UI for ASP.NET AJAX SpeechToTextButton control that converts spoken words into text through a button interface. This component is a server-side, ASP.NET WebForms wrapper over the Kendo UI for jQuery SpeechToTextButton widget."
slug: speechtotextbutton/overview
tags: overview
published: True
position: 0
CTAControlName: WebForms SpeechToTextButton
---

# WebForms SpeechToTextButton Overview

The Telerik WebForms SpeechToTextButton provides speech-to-text functionality. It allows users to convert spoken words into text through a button interface that activates speech recognition capabilities. This component is an ASP.NET WebForms wrapper over the [Kendo UI SpeechToTextButton widget](https://docs.telerik.com/kendo-ui/controls/speechtotextbutton/overview).

{% if site.has_cta_panels == true %}
{% include cta-panel-overview.html %}
{% endif %}

!["SpeechToTextButton Overview"](images/sttb-overview.png "SpeechToTextButton Overview")

The SpeechToTextButton utilizes the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to provide real-time speech recognition functionality, making it easy to add voice input capabilities to your applications.

To see the SpeechToTextButton in action, you can check out the live examples at [WebForms SpeechToTextButton demos](https://demos.telerik.com/aspnet-ajax/speechtotextbutton/overview/defaultcs.aspx).

## Functionality and Features

* Speech Recognition - Converts user speech to text using the Web Speech API
* Continuous Recognition - Supports continuous speech recognition for longer dictation sessions
* Real-time Transcription - Provides both final and interim recognition results as the user speaks
* State Management - Visual indication of active and inactive states during recording
* Event Handling - Comprehensive event model for integrating with other components

## Browser Support

The SpeechToTextButton depends on the Web Speech API, which has varying levels of support across browsers:

* Chrome - Full support
* Edge - Full support
* Firefox - Partial support, may require user permissions
* Safari - Limited support
* Mobile Browsers - Support varies; typically requires HTTPS

>important The Web Speech API requires a secure context (HTTPS) in most browsers. Make sure your application is served over HTTPS for optimal functionality.

## Next Steps

- [Getting Started with the Telerik WebForms SpeechToTextButton]({%slug speechtotextbutton/getting-started%})
- [Change the Appearance]({%slug speechtotextbutton/appearance%})
- [Accessibility]({%slug speechtotextbutton/accessibility/overview%})
- [Client-side Programming]({%slug speechtotextbutton/client-side-programming/overview%})
- [Server-side Programming]({%slug speechtotextbutton/server-side-programming/overview%})
