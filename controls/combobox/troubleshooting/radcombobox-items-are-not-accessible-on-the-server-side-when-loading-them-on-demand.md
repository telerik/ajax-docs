---
title: RadComboBox items are not accessible on the server-side when loading them on demand
page_title: RadComboBox items are not accessible on the server-side when loading them on demand | UI for ASP.NET AJAX Documentation
description: RadComboBox items are not accessible on the server-side when loading them on demand
slug: combobox/troubleshooting/radcombobox-items-are-not-accessible-on-the-server-side-when-loading-them-on-demand
tags: radcombobox,items,are,not,accessible,on,the,server-side,when,loading,them,on,demand
published: True
position: 0
---

# RadComboBox items are not accessible on the server-side when loading them on demand



## 

RadComboBox items loaded on demand using the ItemsRequested event handler or WebService do not exist on the server and cannot be accessed using the server-side FindItemByText / Value methods. **SelectedItem** and **SelectedIndex** properties are always Null / Nothing.

This is needed for speed (otherwise the combobox will not be that responsive upon each keypress if state information and ViewState were persisted).

The properties that are accessible on the server are: **Text** and **SelectedValue**.
