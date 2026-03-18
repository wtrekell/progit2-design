# Chapter 5: Distributed Git — Walkthroughs

## 1. Private Small Team
- **File:** `book/05-distributed-git/sections/contributing.asc`
- **Topic:** Two-developer collaboration workflow on a shared repository
- **Scenario:** John and Jessica clone a shared repo, make changes, push, handle rejected pushes, fetch updates, merge, and push again through a full integration cycle
- **Word Count:** 2,159

## 2. Private Managed Team
- **File:** `book/05-distributed-git/sections/contributing.asc`
- **Topic:** Multi-developer workflow with parallel feature branches and an integration manager
- **Scenario:** Jessica works on two parallel features — featureA with John and featureB with Josie — creating branches, pushing, fetching, merging remote branches, and handling upstream configuration
- **Word Count:** 1,663

## 3. Forked Public Project
- **File:** `book/05-distributed-git/sections/contributing.asc`
- **Topic:** Contributing to a public project through forking
- **Scenario:** Reader clones the main repo, creates topic branches, forks the project, adds the fork as a remote, pushes, creates pull requests, rebases when needed, and handles multiple feature submissions
- **Word Count:** 2,129

## 4. Public Project over Email
- **File:** `book/05-distributed-git/sections/contributing.asc`
- **Topic:** Email-based patch contribution workflow
- **Scenario:** Reader creates topic branches, uses `git format-patch` to generate patch files, configures Git IMAP/SMTP settings in `~/.gitconfig`, and sends patches via `git imap-send` or `git send-email`
- **Word Count:** 1,651

## 5. Applying Patches with git apply
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Applying email patches using `git apply`
- **Scenario:** Maintainer applies patches received via email, checks patches before applying, understands differences from the `patch` command, and handles the manual staging/commit process
- **Word Count:** 471

## 6. Applying Patches with git am
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Applying format-patch generated patches with `git am`
- **Scenario:** Maintainer uses `git am` for clean applies, resolves conflicts with manual editing, uses the `-3` option for three-way merges, and handles interactive mode for multiple patches
- **Word Count:** 1,068

## 7. Checking Out Remote Branches
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Fetching and reviewing contributor branches
- **Scenario:** Maintainer adds a contributor's repository as a remote, fetches from it, and checks out remote branches to test contributed work, including one-time pulls without permanent remotes
- **Word Count:** 432

## 8. Determining What Is Introduced
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Reviewing contributed changes with diff and log analysis
- **Scenario:** Maintainer uses `git log`, `git diff`, and `git merge-base` with triple-dot syntax to understand what changes a topic branch will introduce when merged
- **Word Count:** 533

## 9. Tagging Your Releases
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Creating signed tags and distributing PGP keys
- **Scenario:** Maintainer creates signed tags for releases, distributes their PGP public key in the repository as a blob, and enables others to verify signed tags by importing keys
- **Word Count:** 393

## 10. Generating a Build Number
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Creating human-readable version identifiers with `git describe`
- **Scenario:** Maintainer uses `git describe` to generate version strings for builds, understanding the output format and its use in archiving
- **Word Count:** 279

## 11. Preparing a Release
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Creating distributable release archives
- **Scenario:** Maintainer uses `git archive` to generate tarball and zip formats with proper directory structure for distribution
- **Word Count:** 237

## 12. The Shortlog
- **File:** `book/05-distributed-git/sections/maintaining.asc`
- **Topic:** Generating a summary of commits for release announcements
- **Scenario:** Maintainer uses `git shortlog` to produce an author-grouped commit summary since the last release, suitable for mailing list announcements
- **Word Count:** 220
