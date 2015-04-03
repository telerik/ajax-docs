---
title: Visual Studio 2012 Datasource Configuration
page_title: Visual Studio 2012 Datasource Configuration | UI for ASP.NET AJAX Documentation
description: Visual Studio 2012 Datasource Configuration
slug: grid/getting-started/visual-studio-2012-datasource-configuration
tags: visual,studio,2012,datasource,configuration
published: True
position: 9
---

# Visual Studio 2012 Datasource Configuration



## How to resolve the "Database schema could not be retrieved" exception message.

* ![Database schema could not be retrieved dialog](images/grid_gettingstarted_exception.png)

In order to get over this error, you should reconfigure the connection string that will be used. By default Visual Studio 2012 uses the LocalDB SQL Server which was introduced with SQL Server 2012. More information about the LocalDB feature could be found in [this](http://blogs.msdn.com/b/sqlexpress/archive/2011/07/12/introducing-localdb-a-better-sql-express.aspx) blog post.

If you do not have the LocalDB option installed on your machine or if you do not want to use it, you cold use the following steps in order to start using the SQLExpress server again:

* Once you get to the "Choose Your Data Connection" dialog, click the __"New Connection..."__ button.

* After that the __"Add Connection"__ dialog is displayed. Here you need to choose the server thatwill be used to host the database file.![grid gettingstarted exception new Connection](images/grid_gettingstarted_exception_newConnection.png)

* In the __"Server name:"__ dropdown control you choose the server instance.

* Next, click the __"Attach a database file:"__ radiobutton. Then browse to the database file location.

* Once, you are done with these steps, verify the connection with the __"Test connection"__ button.![New connection dialog settings](images/grid_gettingstarted_exception_connectionPreferences.png)

* Finally, click the "OK" button and proceed as usual.
