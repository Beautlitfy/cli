# @beautlitfy/cli

A command line interface for Beautlitfy

- [@beautlitfy/cli](#beautlitfycli)
	- [Installation](#installation)
	- [Usage](#usage)
		- [Commands List](#commands-list)
			- [Serve](#serve)
  
## Installation

    npm i -g @beautlitfy/cli

or

    yarn global add @beautlitfy/cli

## Usage

Main command **btlfy**

### Commands List

|Command|Description|
|---|---|
|create (c) \<name\> |Create an app using only Beautlitfy|
|generate *(g)* \<type\> \<name\>|Generates a new entity|
|[serve](#serve)|Start dev server for app or component|
|publish|Send my component to be aggregated to Beautlitfy catalog|

You can see more detail below

#### Serve

Start a server and enjoy! We use [es-dev-server](https://open-wc.org/developing/es-dev-server.html) to serve our components and apps, you only need one command to serve `app`, `component`, `providers`

To custom server port you can use `BEAUTLITFY_PORT` env var, default is `8080`

You can to use SASS, LESS or Stylus into your UI components, only yo must be specified into beautlitfy.toml > styles a valid style, automatically we add to your CSS code an autorprefixer to be it more compatible with browsers
