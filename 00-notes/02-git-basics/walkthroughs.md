# Chapter 2: Git Basics — Walkthroughs

## 1. Initializing a Repository in an Existing Directory
- **File:** `book/02-git-basics/sections/getting-a-repository.asc`
- **Topic:** Creating a new Git repository from an existing project
- **Scenario:** Reader navigates to a project directory (with platform-specific paths for Linux, macOS, Windows), runs `git init`, then stages and commits initial files
- **Word Count:** 271

## 2. Cloning an Existing Repository
- **File:** `book/02-git-basics/sections/getting-a-repository.asc`
- **Topic:** Cloning a remote repository
- **Scenario:** Reader clones the libgit2 repository using `git clone`, then clones again into a custom-named directory
- **Word Count:** 207

## 3. Checking the Status of Your Files
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Tracking file status in a repository
- **Scenario:** Reader runs `git status` after a fresh clone, creates a README file, and observes the status change from clean to untracked
- **Word Count:** 169

## 4. Tracking New Files
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Adding untracked files to Git
- **Scenario:** Reader stages a new README file with `git add` and verifies the status change to staged
- **Word Count:** 121

## 5. Staging Modified Files
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Understanding the staging workflow for modified files
- **Scenario:** Reader modifies a tracked file, stages it with `git add`, makes further edits, and discovers that Git stages only the version at `git add` time — requiring re-staging
- **Word Count:** 326

## 6. Short Status
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Compact status output
- **Scenario:** Reader uses `git status -s` to view two-column status indicators for staging area and working directory
- **Word Count:** 76

## 7. Viewing Your Staged and Unstaged Changes
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Inspecting differences before committing
- **Scenario:** Reader uses `git diff` for unstaged changes and `git diff --staged` for staged changes, including a scenario with both staged and unstaged portions of the same file
- **Word Count:** 380

## 8. Committing Your Changes
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Creating commits
- **Scenario:** Reader commits using both the editor-based `git commit` and inline `git commit -m` workflows, seeing editor output and commit confirmation
- **Word Count:** 235

## 9. Skipping the Staging Area
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Committing without explicit staging
- **Scenario:** Reader uses `git commit -a` to bypass the staging area, automatically staging all tracked files before committing
- **Word Count:** 94

## 10. Removing Files
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Removing files from Git tracking
- **Scenario:** Reader manually deletes a file and observes the status, then uses `git rm` to stage the removal, and `git rm --cached` to keep the file locally while removing it from tracking
- **Word Count:** 256

## 11. Moving Files
- **File:** `book/02-git-basics/sections/recording-changes.asc`
- **Topic:** Renaming files in Git
- **Scenario:** Reader renames a file with `git mv`, observes the rename status, and learns it is equivalent to manual move + remove + add
- **Word Count:** 187

## 12. Adding Remote Repositories
- **File:** `book/02-git-basics/sections/remotes.asc`
- **Topic:** Configuring remote repositories
- **Scenario:** Reader adds a new remote shortname (`pb`) with `git remote add`, verifies with `git remote -v`, and fetches from it
- **Word Count:** 212

## 13. Pushing to Your Remotes
- **File:** `book/02-git-basics/sections/remotes.asc`
- **Topic:** Pushing commits to a remote server
- **Scenario:** Reader pushes to origin/master with `git push` and learns when pushes succeed or fail due to upstream changes
- **Word Count:** 126

## 14. Inspecting a Remote
- **File:** `book/02-git-basics/sections/remotes.asc`
- **Topic:** Viewing detailed remote information
- **Scenario:** Reader uses `git remote show <remote>` on both a simple case and a complex multi-branch project with tracking configurations
- **Word Count:** 268

## 15. Renaming and Removing Remotes
- **File:** `book/02-git-basics/sections/remotes.asc`
- **Topic:** Managing remote shortnames
- **Scenario:** Reader renames a remote with `git remote rename` and deletes one with `git remote remove`, verifying status after each
- **Word Count:** 143

## 16. Annotated Tags
- **File:** `book/02-git-basics/sections/tagging.asc`
- **Topic:** Creating annotated tags
- **Scenario:** Reader creates an annotated tag with `git tag -a` and `-m`, then inspects metadata and commit info with `git show`
- **Word Count:** 178

## 17. Lightweight Tags
- **File:** `book/02-git-basics/sections/tagging.asc`
- **Topic:** Creating lightweight tags
- **Scenario:** Reader creates a lightweight tag (no `-a`, `-s`, or `-m`) and compares the `git show` output to annotated tags
- **Word Count:** 145

## 18. Tagging Later
- **File:** `book/02-git-basics/sections/tagging.asc`
- **Topic:** Retroactively tagging past commits
- **Scenario:** Reader views `git log` output, tags an old commit by hash, and verifies with `git tag` and `git show`
- **Word Count:** 223

## 19. Sharing Tags
- **File:** `book/02-git-basics/sections/tagging.asc`
- **Topic:** Pushing tags to remote servers
- **Scenario:** Reader pushes a single tag with `git push origin <tagname>` and all tags with `git push origin --tags`
- **Word Count:** 159

## 20. Deleting Tags
- **File:** `book/02-git-basics/sections/tagging.asc`
- **Topic:** Removing tags locally and remotely
- **Scenario:** Reader deletes a local tag with `git tag -d`, then removes a remote tag using both `git push :refs/tags/` and `git push --delete` syntax
- **Word Count:** 148

## 21. Checking out Tags
- **File:** `book/02-git-basics/sections/tagging.asc`
- **Topic:** Checking out code at a tag
- **Scenario:** Reader checks out a tag with `git checkout`, learns about detached HEAD state, and creates a branch from a tag with `git checkout -b`
- **Word Count:** 212

## 22. Undoing a Commit with --amend
- **File:** `book/02-git-basics/sections/undoing.asc`
- **Topic:** Amending the last commit
- **Scenario:** Reader commits too early, then stages forgotten files and uses `git commit --amend` to replace the previous commit
- **Word Count:** 189

## 23. Unstaging a Staged File (git reset)
- **File:** `book/02-git-basics/sections/undoing.asc`
- **Topic:** Unstaging files with git reset
- **Scenario:** Reader uses `git reset HEAD <file>` to unstage a file, with status output before and after
- **Word Count:** 142

## 24. Unmodifying a Modified File (git checkout)
- **File:** `book/02-git-basics/sections/undoing.asc`
- **Topic:** Discarding working directory changes
- **Scenario:** Reader uses `git checkout -- <file>` to revert a modified file, with status verification
- **Word Count:** 131

## 25. Unstaging a Staged File with git restore
- **File:** `book/02-git-basics/sections/undoing.asc`
- **Topic:** Unstaging files with the modern git restore command
- **Scenario:** Reader uses `git restore --staged <file>` as the modern alternative to `git reset` for unstaging
- **Word Count:** 139

## 26. Unmodifying a Modified File with git restore
- **File:** `book/02-git-basics/sections/undoing.asc`
- **Topic:** Discarding changes with git restore
- **Scenario:** Reader uses `git restore <file>` as the modern alternative to `git checkout --` for discarding changes
- **Word Count:** 124

## 27. Viewing the Commit History
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Basic commit history viewing
- **Scenario:** Reader clones a simple project and runs `git log` to view commit history with author, date, and message
- **Word Count:** 142

## 28. Using git log -p (Patch View)
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Viewing diffs in commit history
- **Scenario:** Reader uses `git log -p -2` to show the last two commits with full diffs for code review
- **Word Count:** 121

## 29. Using git log --stat
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Abbreviated change statistics per commit
- **Scenario:** Reader uses `git log --stat` to see file change counts and insertion/deletion summaries
- **Word Count:** 100

## 30. Using git log --pretty
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Custom log output formatting
- **Scenario:** Reader uses `--pretty=oneline` and `--pretty=format:` with custom format strings to tailor log output
- **Word Count:** 174

## 31. Using git log --graph
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Visualizing branch and merge history
- **Scenario:** Reader uses `--pretty=format` combined with `--graph` to display an ASCII graph of branch history
- **Word Count:** 90

## 32. Limiting Log Output with Time Filters
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Time-based commit filtering
- **Scenario:** Reader uses `git log --since` with various date formats to filter commits by time range
- **Word Count:** 93

## 33. Filtering Commits by Author and Content
- **File:** `book/02-git-basics/sections/viewing-history.asc`
- **Topic:** Advanced commit filtering with pickaxe and multi-filter queries
- **Scenario:** Reader uses `git log -S` to find commits changing a specific string, and combines author, date, and path filters
- **Word Count:** 208
