# Chapter 4: Git on the Server — Walkthroughs

## 1. Generating Your SSH Public Key
- **File:** `book/04-git-server/sections/generating-ssh-key.asc`
- **Topic:** Creating SSH key pairs for Git server authentication
- **Scenario:** Reader checks for existing SSH keys in `~/.ssh`, generates a new RSA key pair using `ssh-keygen -o`, sets a passphrase, and learns about the resulting key files
- **Word Count:** 417

## 2. Putting the Bare Repository on a Server
- **File:** `book/04-git-server/sections/git-on-a-server.asc`
- **Topic:** Creating and deploying a bare repository for team collaboration
- **Scenario:** Reader clones a local repository with `--bare`, copies it to a server via SCP, and sets up shared access permissions with `git init --bare --shared`
- **Word Count:** 231

## 3. Setting Up the Server
- **File:** `book/04-git-server/sections/setting-up-server.asc`
- **Topic:** SSH-based Git server access using the authorized_keys method
- **Scenario:** Administrator creates a `git` user, sets up `.ssh` directory with proper permissions, adds developer public keys to `authorized_keys`, creates a bare repository, demonstrates developer push/clone workflows, and restricts shell access using `git-shell`
- **Word Count:** 855

## 4. Git Daemon
- **File:** `book/04-git-server/sections/git-daemon.asc`
- **Topic:** Serving repositories over the git:// protocol with unauthenticated access
- **Scenario:** Reader starts the git daemon with specific options, configures it using systemd on Linux, and marks repositories as exportable with the `git-daemon-export-ok` file
- **Word Count:** 457

## 5. GitWeb — Permanent Installation
- **File:** `book/04-git-server/sections/gitweb.asc`
- **Topic:** Building and deploying GitWeb CGI script for web-based repository viewing
- **Scenario:** Reader clones Git source, builds the GitWeb CGI script specifying the project root, copies it to a web server directory, and configures an Apache VirtualHost with CGI handler
- **Word Count:** 252

## 6. Smart HTTP
- **File:** `book/04-git-server/sections/smart-http.asc`
- **Topic:** Setting up Smart HTTP protocol with Apache for authenticated and unauthenticated access
- **Scenario:** Reader installs Apache with required modules, changes directory ownership to www-data, configures Apache with `git-http-backend` directives, creates `.htpasswd` authentication file, and sets up auth blocks
- **Word Count:** 312
