# Appendix A: Git in Other Environments — Walkthroughs

## 1. Setting Up Git Bash Completion
- **File:** `book/A-git-in-other-environments/sections/bash.asc`
- **Topic:** Enabling Git tab completion in Bash
- **Scenario:** Reader checks their Git version, retrieves the completion file from Git source, copies it to their home directory, adds a source line to `.bashrc`, and tests with `git chec<tab>`
- **Word Count:** 133

## 2. Customizing Git Bash Prompt
- **File:** `book/A-git-in-other-environments/sections/bash.asc`
- **Topic:** Displaying Git branch and status in the Bash prompt
- **Scenario:** Reader copies `git-prompt.sh` from Git source, adds configuration lines to `.bashrc` with `GIT_PS1_SHOWDIRTYSTATE` and `PS1` exports, and sees branch/status info in their prompt
- **Word Count:** 132

## 3. Setting PowerShell ExecutionPolicy
- **File:** `book/A-git-in-other-environments/sections/powershell.asc`
- **Topic:** Configuring PowerShell script execution for posh-git
- **Scenario:** Reader sets the `ExecutionPolicy` to `RemoteSigned`, learning about scopes (LocalMachine vs CurrentUser) and signing requirements
- **Word Count:** 121

## 4. Installing posh-git via PowerShell Gallery
- **File:** `book/A-git-in-other-environments/sections/powershell.asc`
- **Topic:** Installing posh-git using the PowerShell package manager
- **Scenario:** Reader runs `Install-Module` commands, handles scope options (CurrentUser vs AllUsers), and resolves potential failures with PowerShellGet and certificates
- **Word Count:** 153

## 5. Updating PowerShell Prompt for Git
- **File:** `book/A-git-in-other-environments/sections/powershell.asc`
- **Topic:** Importing posh-git and configuring the prompt
- **Scenario:** Reader executes `Import-Module` and `Add-PoshGitToProfile` to display Git information in their PowerShell prompt on startup
- **Word Count:** 89

## 6. Installing posh-git from Source
- **File:** `book/A-git-in-other-environments/sections/powershell.asc`
- **Topic:** Manual posh-git installation from a downloaded release
- **Scenario:** Reader downloads a release, uncompresses it, imports the module using a full file path, and adds it to their profile for automatic loading
- **Word Count:** 73

## 7. Setting Up Zsh Git Tab Completion
- **File:** `book/A-git-in-other-environments/sections/zsh.asc`
- **Topic:** Enabling Git tab completion in Zsh
- **Scenario:** Reader adds a single command to `.zshrc` and learns about Zsh's richer completion interface with descriptions and graphical navigation
- **Word Count:** 90

## 8. Customizing Zsh Prompt with Git Branch Information
- **File:** `book/A-git-in-other-environments/sections/zsh.asc`
- **Topic:** Displaying Git branch in the Zsh prompt using vcs_info
- **Scenario:** Reader adds `vcs_info` configuration lines to `~/.zshrc`, chooses between right-side (RPROMPT) or left-side (PROMPT) display, and sees the result
- **Word Count:** 144
