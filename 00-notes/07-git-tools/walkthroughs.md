# Chapter 7: Git Tools — Walkthroughs

## 1. Merge Conflicts
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Resolving a merge conflict end-to-end
- **Scenario:** Two branches modify a Ruby `hello.rb` file (one changes line endings and text, another adds documentation); when merged, conflicts arise and are resolved using various Git tools
- **Word Count:** 1,471

## 2. Aborting a Merge
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Escaping a merge conflict state
- **Scenario:** Reader uses `git merge --abort` and `git reset --hard HEAD` to abandon an in-progress merge
- **Word Count:** 207

## 3. Ignoring Whitespace
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Resolving whitespace-related merge conflicts
- **Scenario:** Reader re-merges using `-Xignore-space-change` to bypass whitespace differences
- **Word Count:** 284

## 4. Manual File Re-merging
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Manually resolving conflicts using low-level Git commands
- **Scenario:** Reader extracts conflicted file versions with `git show :1:/:2:/:3:`, processes them through `dos2unix`, and uses `git merge-file` to resolve conflicts
- **Word Count:** 531

## 5. Checking Out Conflicts
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Viewing conflict markers with additional context
- **Scenario:** Reader uses `git checkout --conflict=diff3` for three-way conflict markers and diff comparison commands to understand merge changes
- **Word Count:** 718

## 6. Undoing Merges — Fix the References
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Undoing an accidental merge by moving branch pointers
- **Scenario:** Reader uses `git reset --hard HEAD~` to undo an accidental merge by resetting the branch to its pre-merge state
- **Word Count:** 306

## 7. Undoing Merges — Reverse the Commit
- **File:** `book/07-git-tools/sections/advanced-merging.asc`
- **Topic:** Reverting a merge commit
- **Scenario:** Reader uses `git revert -m 1 HEAD` to create a new commit that undoes a merge, then navigates the complexity of re-merging after a revert
- **Word Count:** 409

## 8. Bundling
- **File:** `book/07-git-tools/sections/bundling.asc`
- **Topic:** Creating and using Git bundle files for offline transfer
- **Scenario:** Reader creates a bundle from a repository, sends it to another person, then clones and pulls updates from the bundle file
- **Word Count:** 1,127

## 9. File Annotation with Git Blame
- **File:** `book/07-git-tools/sections/debugging.asc`
- **Topic:** Identifying which commits modified specific lines
- **Scenario:** Reader uses `git blame -L 69,82 Makefile` to annotate lines and `-C` to track code movement across files
- **Word Count:** 407

## 10. Binary Search with Git Bisect
- **File:** `book/07-git-tools/sections/debugging.asc`
- **Topic:** Finding the commit that introduced a bug via binary search
- **Scenario:** Reader uses `git bisect` with manual good/bad testing steps, then automates bisect with a test script
- **Word Count:** 788

## 11. Staging and Unstaging Files (Interactive)
- **File:** `book/07-git-tools/sections/interactive-staging.asc`
- **Topic:** Selectively staging files using interactive mode
- **Scenario:** Reader uses `git add -i` to interactively stage and unstage files using the revert option
- **Word Count:** 479

## 12. Staging Patches
- **File:** `book/07-git-tools/sections/interactive-staging.asc`
- **Topic:** Partially staging a file using patch mode
- **Scenario:** Reader uses `git add -p` to respond to hunks interactively, staging only selected portions of a file
- **Word Count:** 328

## 13. Replace — Repository Splitting
- **File:** `book/07-git-tools/sections/replace.asc`
- **Topic:** Splitting and reconnecting repository history with `git replace`
- **Scenario:** Reader splits a repository history into two, creates a base commit with instructions, rebases history, and uses `git replace` to recombine the histories seamlessly
- **Word Count:** 2,118

## 14. Rerere — Merge Conflict Resolution Memory
- **File:** `book/07-git-tools/sections/rerere.asc`
- **Topic:** Recording and replaying merge conflict resolutions
- **Scenario:** Reader enables rerere, creates merge conflicts, records resolutions, and has Git automatically reapply those resolutions during a rebase
- **Word Count:** 1,849

## 15. Reset — The Three Trees Workflow
- **File:** `book/07-git-tools/sections/reset.asc`
- **Topic:** Understanding Git's three-tree model through the commit lifecycle
- **Scenario:** Reader walks through `git init`/`git add`/`git commit`/edit cycles, observing how HEAD, Index, and Working Directory change at each step via diagrams
- **Word Count:** 1,246

## 16. Squashing Commits with Reset
- **File:** `book/07-git-tools/sections/reset.asc`
- **Topic:** Squashing multiple commits into one using `git reset --soft`
- **Scenario:** Reader uses `git reset --soft HEAD~2` combined with `git commit` to collapse multiple commits into a single commit
- **Word Count:** 289

## 17. Changing Multiple Commit Messages
- **File:** `book/07-git-tools/sections/rewriting-history.asc`
- **Topic:** Editing commit messages with interactive rebase
- **Scenario:** Reader uses `git rebase -i HEAD~3`, changes `pick` to `edit`, and walks through the amend/continue cycle for each commit
- **Word Count:** 1,020

## 18. Squashing Commits (Interactive Rebase)
- **File:** `book/07-git-tools/sections/rewriting-history.asc`
- **Topic:** Combining commits into one using interactive rebase
- **Scenario:** Reader changes `pick` to `squash` in the rebase script, then edits the merged commit message
- **Word Count:** 432

## 19. Splitting a Commit
- **File:** `book/07-git-tools/sections/rewriting-history.asc`
- **Topic:** Breaking a single commit into multiple commits
- **Scenario:** Reader uses `edit` in interactive rebase, then `git reset HEAD^` to unstage, followed by multiple `git commit` commands to create separate commits
- **Word Count:** 460

## 20. Removing a File from Every Commit
- **File:** `book/07-git-tools/sections/rewriting-history.asc`
- **Topic:** Rewriting history to remove a file from all commits
- **Scenario:** Reader uses `git filter-branch --tree-filter` to remove a file across the entire commit history
- **Word Count:** 234

## 21. Git Grep
- **File:** `book/07-git-tools/sections/searching.asc`
- **Topic:** Searching code with Git's built-in grep
- **Scenario:** Reader searches through committed trees using `git grep` with flags (`-n`, `-c`, `-p`, `--and`) to locate patterns in source code
- **Word Count:** 460

## 22. Line Log Search
- **File:** `book/07-git-tools/sections/searching.asc`
- **Topic:** Tracking the history of a specific function
- **Scenario:** Reader uses `git log -L :function:file` to view how a specific function changed across commits
- **Word Count:** 294

## 23. Signing Tags
- **File:** `book/07-git-tools/sections/signing.asc`
- **Topic:** Creating GPG-signed tags
- **Scenario:** Reader signs a tag with `git tag -s` and views the GPG signature with `git show`
- **Word Count:** 244

## 24. Verifying Tags
- **File:** `book/07-git-tools/sections/signing.asc`
- **Topic:** Verifying GPG signatures on tags
- **Scenario:** Reader uses `git tag -v` to verify signed tags, with both success and failure cases shown
- **Word Count:** 234

## 25. Signing Commits
- **File:** `book/07-git-tools/sections/signing.asc`
- **Topic:** Creating and verifying GPG-signed commits
- **Scenario:** Reader signs commits with `git commit -S`, verifies signatures with `git log --show-signature` and `%G?` format, and uses `--verify-signatures` for merge/pull
- **Word Count:** 445

## 26. Stashing Your Work
- **File:** `book/07-git-tools/sections/stashing-cleaning.asc`
- **Topic:** Saving and restoring in-progress work with git stash
- **Scenario:** Reader saves work with `git stash`, lists stashes, and reapplies them with `--index` to restore staged status
- **Word Count:** 678

## 27. Creative Stashing
- **File:** `book/07-git-tools/sections/stashing-cleaning.asc`
- **Topic:** Advanced stash options
- **Scenario:** Reader uses `--keep-index`, `--include-untracked/-u`, and `--patch` for selective stashing of different file categories
- **Word Count:** 435

## 28. Creating a Branch from a Stash
- **File:** `book/07-git-tools/sections/stashing-cleaning.asc`
- **Topic:** Applying stashed changes to a new branch
- **Scenario:** Reader uses `git stash branch` to create a new branch with stashed changes cleanly applied
- **Word Count:** 187

## 29. Cleaning Your Working Directory
- **File:** `book/07-git-tools/sections/stashing-cleaning.asc`
- **Topic:** Removing untracked files from the working directory
- **Scenario:** Reader uses `git clean` with various flags (`-f -d`, `-n`, `-x`, `-i`) to safely remove untracked files, with a safety warning about data loss
- **Word Count:** 407

## 30. Starting with Submodules
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Adding a submodule to a project
- **Scenario:** Reader adds a submodule with `git submodule add`, examines `.gitmodules`, and commits the changes
- **Word Count:** 626

## 31. Cloning a Project with Submodules
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Cloning and initializing a project that contains submodules
- **Scenario:** Reader clones a project, initializes submodules with `git submodule init/update`, and uses `--recurse-submodules` as a shortcut
- **Word Count:** 744

## 32. Pulling in Upstream Changes from the Submodule Remote
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Updating submodules to the latest upstream version
- **Scenario:** Reader fetches and merges submodule updates, uses `git submodule update --remote`, and configures which branch to track
- **Word Count:** 921

## 33. Pulling Upstream Changes from the Project Remote
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Syncing superproject changes that update submodule references
- **Scenario:** Reader pulls superproject changes and synchronizes submodules with `git submodule update --init --recursive` and `git submodule sync`
- **Word Count:** 703

## 34. Working on a Submodule
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Making changes inside submodules
- **Scenario:** Reader checks out branches in submodules and uses `--merge` and `--rebase` options with `git submodule update --remote` for local changes
- **Word Count:** 1,122

## 35. Publishing Submodule Changes
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Pushing submodule changes before the superproject
- **Scenario:** Reader uses `git push --recurse-submodules=check` and `=on-demand` to ensure submodule changes are pushed before the superproject
- **Word Count:** 544

## 36. Merging Submodule Changes
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Resolving submodule merge conflicts
- **Scenario:** Reader examines divergent submodule commit SHA-1s, creates branches, and merges submodule changes manually to resolve conflicts
- **Word Count:** 893

## 37. Submodule Foreach
- **File:** `book/07-git-tools/sections/submodules.asc`
- **Topic:** Running commands across all submodules
- **Scenario:** Reader uses `git submodule foreach` to stash, create branches, and view diffs across all submodules at once
- **Word Count:** 521

## 38. Subtree Merging
- **File:** `book/07-git-tools/sections/subtree-merges.asc`
- **Topic:** Adding a separate project as a subdirectory using subtree merge
- **Scenario:** Reader adds a project via `git read-tree`, pulls upstream changes, and merges them back using the subtree merge strategy
- **Word Count:** 745
