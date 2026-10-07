---
title: Visual Studio 2012 Datasource Configuration
page_title: Visual Studio 2012 Datasource Configuration - RadGrid
description: Learn how to resolve the Visual Studio 2012 database schema error by configuring a LocalDB or SQL Server Express connection for RadGrid.
slug: grid/design-time/visual-studio-2012-datasource-configuration
tags: visual,studio,2012,datasource,configuration
published: True
position: 9
previous_url: controls/grid/getting-started/visual-studio-2012-datasource-configuration
---

# Visual Studio 2012 Datasource Configuration



## How to resolve the "Database schema could not be retrieved" exception message.

* ![Database schema could not be retrieved dialog](images/grid_gettingstarted_exception.png)

To resolve this error, reconfigure the connection string. By default, Visual Studio 2012 uses LocalDB, which was introduced with SQL Server 2012. For more information, see the [LocalDB overview](http://blogs.msdn.com/b/sqlexpress/archive/2011/07/12/introducing-localdb-a-better-sql-express.aspx).

If LocalDB is not installed or you do not want to use it, follow these steps to use the SQL Server Express server:

* Once you get to the "Choose Your Data Connection" dialog, click the **"New Connection..."** button.
![grid gettingstarted exception new Connection](images/grid_getting_started_new_connection.png)

* After that the **"Add Connection"** dialog is displayed. Here you need to choose the server that will be used to host the database file.
![grid gettingstarted exception new Connection](images/grid_gettingstarted_exception_newConnection.png)

* In the **"Server name:"** dropdown control you choose the server instance.

* Next, click the **"Attach a database file:"** RadioButton. Then browse to the database file location.

* Once, you are done with these steps, verify the connection with the **"Test connection"** button.
![New connection dialog settings](images/grid_gettingstarted_exception_connectionPreferences.png)

* Finally, click the **OK** button and proceed as usual.

## See Also

- [Getting started with RadGrid]({%slug grid/design-time/getting-started-with-radgrid-for-asp.net-ajax%})
- [Visual Studio support]({%slug grid/design-time/visual-studio-support%})
