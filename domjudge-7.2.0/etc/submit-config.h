// Generated from 'submit-config.h.in' on Mon Aug 24 02:55:15 AST 2020.

#ifndef _SUBMIT_CONFIG_
#define _SUBMIT_CONFIG_

/* Team HOME subdirectory to use for storing temporary/log/etc. files
   and permissions. */
#define USERDIR      ".domjudge"
#define USERPERMDIR  0700
#define USERPERMFILE 0600

/* Last modified time in minutes after which to warn for submitting
   an old file. */
#define WARN_MTIME   5

/* Base URL of the DOMjudge web interfaces, used to access the REST API. */
#define BASEURL      "http://34.224.1.58:12345/"

#endif /* _SUBMIT_CONFIG_ */
