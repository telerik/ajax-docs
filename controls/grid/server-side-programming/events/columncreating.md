---
title: ColumnCreating
page_title: ColumnCreating Event - RadGrid | UI for ASP.NET AJAX
description: ColumnCreating Event
slug: grid/server-side-programming/events/columncreating
published: True
position: 50
---

# ColumnCreating Event

Fires before a custom column is created. You can handle the event to replace or modify the instance of the column that should be created and added into the collection of column in the corresponding GridTableView .

>note RadGrid ColumnCreating event is fired only for custom columns that inherit one of RadGrid's column types. Additionally, as this event is fired very early in RadGrid's lifecycle, it will not fire if the custom user-created column is placed declaratively in the .aspx page, as the markup is parsed at a later stage.
>Another peculiarity to note, is that the ColumnCreating event will fire only after a postback. It will not fire on initial page load (IsPostBack = false). The explanation for this is that the event is designed to service any needs to restore custom column properties from the viewstate or other source. Where these column properties are initially set when defining the custom column, this is not the case when the page posts back and RadGrid needs to load its properties from the viewstate. This is where the ColumnCreating event comes in, giving the ability to manually restore custom properties for the column.
>

