# Chapter 8: Customizing Git — Walkthroughs

## 1. Setting Up External Merge and Diff Tools with P4Merge
- **File:** `book/08-customizing-git/sections/config.asc`
- **Topic:** Configuring a visual merge/diff tool
- **Scenario:** Reader downloads P4Merge, creates wrapper scripts (`extMerge` and `extDiff`), makes them executable, configures Git to use them via `git config`, tests with `git diff`, and switches to KDiff3 as an alternative
- **Word Count:** 1,348

## 2. Diffing Word Documents Using Git Attributes
- **File:** `book/08-customizing-git/sections/attributes.asc`
- **Topic:** Converting binary Word documents to diffable text
- **Scenario:** Reader installs and configures `docx2txt`, creates a wrapper script, configures Git with `git config`, and demonstrates the actual diff output showing changes in a Word document
- **Word Count:** 1,166

## 3. Extracting EXIF Data from Images for Diffing
- **File:** `book/08-customizing-git/sections/attributes.asc`
- **Topic:** Diffing image files by extracting EXIF metadata
- **Scenario:** Reader installs `exiftool`, configures it in `.gitattributes` for `.png` files, replaces an image, and runs `git diff` to see textual EXIF metadata changes
- **Word Count:** 542

## 4. Implementing C Code Indentation Filter
- **File:** `book/08-customizing-git/sections/attributes.asc`
- **Topic:** Setting up clean/smudge filters for C source files
- **Scenario:** Reader configures `.gitattributes` rules for `*.c` files and sets up `git config` commands to run the `indent` program on commit and `cat` on checkout
- **Word Count:** 287

## 5. Setting Up Keyword Expansion with Custom Date Filter
- **File:** `book/08-customizing-git/sections/attributes.asc`
- **Topic:** Custom keyword expansion using clean/smudge filters
- **Scenario:** Reader writes a Ruby script to inject `$Date$` values into files, configures Git filters, creates a test file, commits, and verifies the date substitution on checkout
- **Word Count:** 762

## 6. Enforcing Commit Message Format via Server-Side Hooks
- **File:** `book/08-customizing-git/sections/policy.asc`
- **Topic:** Server-side update hook for commit message validation
- **Scenario:** Reader builds a Ruby script in the server-side `update` hook that uses `git rev-list` and `git cat-file` to extract commits, tests messages against a `[ref: XXXX]` regex pattern, and rejects non-compliant pushes
- **Word Count:** 1,115

## 7. Implementing User-Based ACL System via Hooks
- **File:** `book/08-customizing-git/sections/policy.asc`
- **Topic:** Path-based access control enforcement with server-side hooks
- **Scenario:** Reader creates an ACL file format, writes a Ruby method to parse ACL rules, uses `git rev-list` and `git log` to identify modified files, and checks user permissions against the ACL
- **Word Count:** 1,496

## 8. Testing the Server-Side Enforcement Policies
- **File:** `book/08-customizing-git/sections/policy.asc`
- **Topic:** Verifying server-side hook behavior
- **Scenario:** Reader runs `git push` with a non-compliant commit message to see hook rejection output, then tests a documentation writer attempting to modify files outside their ACL scope
- **Word Count:** 744

## 9. Setting Up Client-Side Commit Message Validation
- **File:** `book/08-customizing-git/sections/policy.asc`
- **Topic:** Client-side `commit-msg` hook for pre-push validation
- **Scenario:** Reader creates a Ruby `commit-msg` hook script that validates messages against the regex pattern, demonstrates both failed and successful commits
- **Word Count:** 558

## 10. Setting Up Client-Side ACL Permission Checking
- **File:** `book/08-customizing-git/sections/policy.asc`
- **Topic:** Client-side `pre-commit` hook for ACL enforcement
- **Scenario:** Reader creates a `pre-commit` hook that reads the ACL file, uses `git diff-index` to get staged changes, checks permissions, and exits non-zero if the user lacks access
- **Word Count:** 1,101

## 11. Setting Up Pre-Rebase Hook to Prevent Pushing Rebased Commits
- **File:** `book/08-customizing-git/sections/policy.asc`
- **Topic:** Pre-rebase hook to protect already-pushed commits
- **Scenario:** Reader creates a `pre-rebase` script using `git rev-list` and `git branch -r` to identify commits already pushed to remote branches, aborting the rebase if any match
- **Word Count:** 688
