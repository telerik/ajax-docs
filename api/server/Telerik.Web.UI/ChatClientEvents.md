---
title: Telerik.Web.UI.ChatClientEvents
page_title: Telerik.Web.UI.ChatClientEvents
description: Telerik.Web.UI.ChatClientEvents
---

# Telerik.Web.UI.ChatClientEvents

Defines the client events handlers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.ChatClientEvents : IDefaultCheck

## Properties

###  OnActionClick `String`

Fired when an action button is clicked inside an attachment template, or when a suggestedAction is clicked.

###  OnInitialize `String`

Fired when the chat control is initialized.

###  OnLoad `String`

Fired when the chat control is loaded on the page.

###  OnPost `String`

Fired when a message is posted to the chat widget. This can be either through the message box, or an action button click.

###  OnSendMessage `String`

Fired when a message is posted through the chat message box.

###  OnToolClick `String`

Fired when a button from the toolbar is clicked.

###  OnTypingEnd `String`

Fired when the user clears the chat message box, signaling that he stopped typing. The event is also triggered when the user submits the currenlty typed in message.

###  OnTypingStart `String`

Fired when the user starts typing in the chat message box. The event is fired only once, and not upon each keystroke.

