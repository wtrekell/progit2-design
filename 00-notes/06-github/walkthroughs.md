# Chapter 6: GitHub — Walkthroughs

## 1. SSH Access Configuration
- **File:** `book/06-github/sections/1-setting-up-account.asc`
- **Topic:** Adding SSH keys to a GitHub account
- **Scenario:** Reader navigates to GitHub account settings, opens the SSH keys section, and pastes their public key to enable SSH-based authentication
- **Word Count:** 181

## 2. Avatar Upload and Configuration
- **File:** `book/06-github/sections/1-setting-up-account.asc`
- **Topic:** Replacing the default GitHub avatar
- **Scenario:** Reader navigates to the Profile tab, uploads a custom image, and crops it for their profile picture
- **Word Count:** 128

## 3. Creating a Pull Request
- **File:** `book/06-github/sections/2-contributing.asc`
- **Topic:** Full fork-and-PR contribution workflow
- **Scenario:** Reader forks the Arduino "blink" project, clones it locally, creates a topic branch, modifies LED delay timing in the code, commits, pushes to their fork, and opens a Pull Request on GitHub
- **Word Count:** 715

## 4. Iterating on a Pull Request
- **File:** `book/06-github/sections/2-contributing.asc`
- **Topic:** Responding to reviewer feedback on a Pull Request
- **Scenario:** Reader receives review comments, makes additional commits to the topic branch, pushes updates, and observes the collaborative review cycle through GitHub's UI
- **Word Count:** 279

## 5. Keeping up with Upstream
- **File:** `book/06-github/sections/2-contributing.asc`
- **Topic:** Resolving merge conflicts in a Pull Request
- **Scenario:** Reader adds the original repository as a remote, fetches upstream changes, merges the upstream master branch, resolves conflicts, and pushes the updated branch
- **Word Count:** 392

## 6. Setting up and Testing GitHub Webhooks
- **File:** `book/06-github/sections/5-scripting.asc`
- **Topic:** Configuring webhooks with a Ruby Sinatra service
- **Scenario:** Reader builds a webhook handler that checks commit metadata (pusher, branch, files) and sends email notifications, then configures and tests the webhook through GitHub's settings
- **Word Count:** 366

## 7. Making API Calls to Comment on Issues
- **File:** `book/06-github/sections/5-scripting.asc`
- **Topic:** Authenticating and posting comments via the GitHub API
- **Scenario:** Reader generates a personal access token, constructs an authenticated `curl` POST request, and posts a comment on a GitHub issue
- **Word Count:** 272

## 8. Changing Pull Request Status via API
- **File:** `book/06-github/sections/5-scripting.asc`
- **Topic:** Automated commit validation using webhooks and the Status API
- **Scenario:** Reader builds a Ruby Sinatra webhook handler that checks commit messages for "Signed-off-by", parses webhook payloads, and posts commit status updates back to GitHub
- **Word Count:** 409

## 9. Keeping a GitHub Fork Up-to-Date
- **File:** `book/06-github/sections/2-contributing.asc`
- **Topic:** Syncing a forked repository with the original upstream
- **Scenario:** Reader syncs their fork using two approaches: a simple one-time `git pull` with a URL, and a more automated configuration using `git remote` setup
- **Word Count:** 359
