# Chapter 3: Git Branching — Walkthroughs

## 1. Basic Branching
- **File:** `book/03-git-branching/sections/basic-branching-and-merging.asc`
- **Topic:** Creating and switching between feature and hotfix branches
- **Scenario:** Reader creates an `iss53` feature branch, receives an urgent bug report, switches to a `hotfix` branch on production, tests and merges the fix, then returns to the original feature work
- **Word Count:** 1,247

## 2. Basic Merging
- **File:** `book/03-git-branching/sections/basic-branching-and-merging.asc`
- **Topic:** Merging a completed feature branch with a three-way merge
- **Scenario:** Reader merges the completed `iss53` branch back into master, observing the three-way merge process, and cleans up the branch
- **Word Count:** 418

## 3. Basic Merge Conflicts
- **File:** `book/03-git-branching/sections/basic-branching-and-merging.asc`
- **Topic:** Resolving merge conflicts when two branches modify the same file
- **Scenario:** Reader encounters conflict markers after merging, uses `git mergetool` to resolve them, and finalizes with a commit
- **Word Count:** 1,036

## 4. The Basic Rebase
- **File:** `book/03-git-branching/sections/rebasing.asc`
- **Topic:** Rebasing a branch onto another
- **Scenario:** Reader rebases an `experiment` branch onto `master`, rewinding and replaying commits, then completes a fast-forward merge
- **Word Count:** 697

## 5. More Interesting Rebases
- **File:** `book/03-git-branching/sections/rebasing.asc`
- **Topic:** Selective rebasing with `--onto`
- **Scenario:** Reader selectively rebases `client` and `server` topic branches using `--onto`, integrating changes into mainline in stages
- **Word Count:** 1,123

## 6. Pushing Branches
- **File:** `book/03-git-branching/sections/remote-branches.asc`
- **Topic:** Pushing local branches to a remote repository
- **Scenario:** Reader pushes a local `serverfix` branch to a remote, and collaborators fetch and create tracking branches from it
- **Word Count:** 742

## 7. Tracking Branches
- **File:** `book/03-git-branching/sections/remote-branches.asc`
- **Topic:** Setting up and managing tracking branches
- **Scenario:** Reader sets up tracking branches using `-b`, `--track`, and implicit creation, checks tracking status with `-vv`, and sets upstream branches
- **Word Count:** 1,261

## 8. Deleting Remote Branches
- **File:** `book/03-git-branching/sections/remote-branches.asc`
- **Topic:** Removing branches from a remote server
- **Scenario:** Reader deletes the `serverfix` remote branch using `git push --delete`
- **Word Count:** 168

## 9. Changing a Branch Name
- **File:** `book/03-git-branching/sections/branch-management.asc`
- **Topic:** Renaming a local branch and updating the remote
- **Scenario:** Reader renames a local branch, pushes the renamed branch to the remote, and cleans up the old remote branch name
- **Word Count:** 465

## 10. Changing the Master Branch Name
- **File:** `book/03-git-branching/sections/branch-management.asc`
- **Topic:** Renaming the master branch to main
- **Scenario:** Reader renames master to main, pushes to remote, and handles follow-up tasks across dependent projects, CI configs, tests, and documentation
- **Word Count:** 837
