# Chapter 9: Git and Other Systems — Walkthroughs

## 1. Git-Mercurial Bridge — Installing git-remote-hg
- **File:** `book/09-git-and-other-scms/sections/client-hg.asc`
- **Topic:** Setting up the git-remote-hg bridge tool
- **Scenario:** Reader downloads the script, installs Python dependencies, and clones a Mercurial test repository
- **Word Count:** 142

## 2. Git-Mercurial Bridge — Getting Started
- **File:** `book/09-git-and-other-scms/sections/client-hg.asc`
- **Topic:** Exploring a cloned Mercurial repository from Git
- **Scenario:** Reader clones a Mercurial repository using Git, examines the resulting structure, explores git refs and notes mapping, and sets up `.gitignore` compatibility
- **Word Count:** 557

## 3. Git-Mercurial Bridge — Workflow
- **File:** `book/09-git-and-other-scms/sections/client-hg.asc`
- **Topic:** Full round-trip workflow between Git and Mercurial
- **Scenario:** Reader makes local commits, fetches from remote, merges changes, pushes back to Mercurial, and verifies changes on the Mercurial side
- **Word Count:** 476

## 4. Git-Mercurial Bridge — Branches and Bookmarks
- **File:** `book/09-git-and-other-scms/sections/client-hg.asc`
- **Topic:** Working with Mercurial bookmarks and branches from Git
- **Scenario:** Reader creates feature branches, pushes branches, handles permanent branches, and learns the differences between Git and Mercurial branching models
- **Word Count:** 782

## 5. Git Fusion — Setting Up
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Setting up the Git Fusion virtual machine for Perforce
- **Scenario:** Reader imports the VM, customizes user passwords, creates a Perforce user, configures SSL verification, and tests the connection
- **Word Count:** 326

## 6. Git Fusion — Configuration
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Understanding Git Fusion configuration files
- **Scenario:** Reader explores global and repository-specific configs, examines branch/view mappings, and reviews user mapping files for Git-Perforce interoperability
- **Word Count:** 660

## 7. Git Fusion — Workflow
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Complete Git Fusion workflow between Git and Perforce
- **Scenario:** Reader clones a repository, makes commits, fetches changes from Perforce, merges conflicts, pushes back, and examines results in Perforce's revision graph
- **Word Count:** 1,009

## 8. Git-p4 — Setting Up
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Configuring environment variables for git-p4
- **Scenario:** Reader configures `P4PORT` and `P4USER` environment variables to connect to a Perforce server
- **Word Count:** 65

## 9. Git-p4 — Getting Started
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Performing a shallow clone of a Perforce depot
- **Scenario:** Reader uses `git p4 clone` to import a depot, examines the resulting repository structure, and understands git-p4's remote refs
- **Word Count:** 208

## 10. Git-p4 — Workflow
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Complete git-p4 workflow with Perforce
- **Scenario:** Reader makes commits, syncs with the Perforce server, rebases work, submits changes via interactive editor, and handles merge commits
- **Word Count:** 1,317

## 11. Git-p4 — Branching
- **File:** `book/09-git-and-other-scms/sections/client-p4.asc`
- **Topic:** Working with multiple Perforce branches in Git
- **Scenario:** Reader detects branches with `--detect-branches`, configures branch mappings, and syncs/submits to multiple branches
- **Word Count:** 445

## 12. Git-SVN — Setting Up
- **File:** `book/09-git-and-other-scms/sections/client-svn.asc`
- **Topic:** Creating a local Subversion repository for testing
- **Scenario:** Reader creates a local SVN repo, enables revprop changes, and syncs content from a remote SVN server using `svnsync`
- **Word Count:** 111

## 13. Git-SVN — Getting Started
- **File:** `book/09-git-and-other-scms/sections/client-svn.asc`
- **Topic:** Importing a Subversion repository with `git svn clone`
- **Scenario:** Reader clones with `--stdlayout` for trunk/branches/tags layout and examines the resulting Git repository structure and remote refs
- **Word Count:** 409

## 14. Git-SVN — Committing Back to Subversion
- **File:** `book/09-git-and-other-scms/sections/client-svn.asc`
- **Topic:** Pushing Git commits back to a Subversion server
- **Scenario:** Reader makes local Git commits and pushes back to SVN using `git svn dcommit`, observing how SVN commit IDs are embedded in commit messages
- **Word Count:** 325

## 15. Git-SVN — Pulling in New Changes
- **File:** `book/09-git-and-other-scms/sections/client-svn.asc`
- **Topic:** Syncing when the SVN repository has diverged
- **Scenario:** Reader handles conflicts when SVN diverges from local Git work, using `git svn rebase` to sync and rebase local commits
- **Word Count:** 654

## 16. Git-SVN — Creating a New SVN Branch
- **File:** `book/09-git-and-other-scms/sections/client-svn.asc`
- **Topic:** Creating branches in Subversion from Git
- **Scenario:** Reader uses `git svn branch` to create a new branch on the SVN server, understanding the server-side operations
- **Word Count:** 106

## 17. Git-SVN — Switching Active Branches
- **File:** `book/09-git-and-other-scms/sections/client-svn.asc`
- **Topic:** Tracking and switching between Subversion branches in Git
- **Scenario:** Reader sets up local Git branches to track SVN branches, merges branches while understanding SVN's linear history model limitations
- **Word Count:** 350

## 18. A Custom Importer
- **File:** `book/09-git-and-other-scms/sections/import-custom.asc`
- **Topic:** Building a custom import script using `git fast-import`
- **Scenario:** Reader writes a complete Ruby script that reads a custom source directory structure, generates marks, converts dates, handles files, and pipes everything through `git fast-import` to create a Git repository
- **Word Count:** 1,694

## 19. Importing from Mercurial
- **File:** `book/09-git-and-other-scms/sections/import-hg.asc`
- **Topic:** Converting a Mercurial repository to Git
- **Scenario:** Reader clones the source repo, creates author mapping files, runs the `hg-fast-export` tool, and verifies the import
- **Word Count:** 760

## 20. Importing from Perforce (Git Fusion)
- **File:** `book/09-git-and-other-scms/sections/import-p4.asc`
- **Topic:** Using Git Fusion for a one-time Perforce-to-Git migration
- **Scenario:** Reader configures project settings and user mappings to produce a native Git repository ready to push to a Git host
- **Word Count:** 70

## 21. Importing from Perforce (Git-p4)
- **File:** `book/09-git-and-other-scms/sections/import-p4.asc`
- **Topic:** Using `git p4 clone` for a one-time Perforce import
- **Scenario:** Reader imports a Perforce project with `git p4 clone` and uses `git filter-branch` to clean up git-p4 metadata from commit messages
- **Word Count:** 460

## 22. Importing from Subversion
- **File:** `book/09-git-and-other-scms/sections/import-svn.asc`
- **Topic:** Complete SVN-to-Git conversion with post-import cleanup
- **Scenario:** Reader creates author mapping files, uses `git svn clone` with various flags, performs post-import cleanup of branches/tags/refs, and pushes to a new Git server
- **Word Count:** 938
