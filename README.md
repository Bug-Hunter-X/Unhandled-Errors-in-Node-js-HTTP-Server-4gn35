# Node.js Unhandled Error Example

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers. The example shows a simple HTTP server that does not handle errors, leading to unexpected crashes.  A solution is provided that incorporates error handling best practices.

## Bug

The `bug.js` file contains an HTTP server that's missing robust error handling. If the port is in use or other server-side issues occur, the server crashes without providing any helpful information.

## Solution

The `bugSolution.js` file demonstrates how to add error handling to address these issues.  It uses `server.on('error', ...)` to capture and log errors, preventing unexpected crashes and providing valuable debugging information.

## How to Run

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` (or `node bugSolution.js` for the solution).