# Chapter 10: Git Internals — Walkthroughs

## 1. Data Recovery via Reflog
- **File:** `book/10-git-internals/sections/maintenance.asc`
- **Topic:** Recovering lost commits using the reflog
- **Scenario:** Reader uses `git reset --hard` to move master to an older commit, then recovers the lost commits using `git reflog` and `git branch` to re-establish access
- **Word Count:** 445

## 2. Data Recovery via git fsck
- **File:** `book/10-git-internals/sections/maintenance.asc`
- **Topic:** Finding dangling commits when the reflog is unavailable
- **Scenario:** Reader deletes the reflog, then uses `git fsck --full` to locate dangling commits and recovers a lost commit via `git branch`
- **Word Count:** 186

## 3. Removing Large Objects from History
- **File:** `book/10-git-internals/sections/maintenance.asc`
- **Topic:** Purging accidentally committed large files from repository history
- **Scenario:** Reader adds a large tarball accidentally, removes it, discovers it still takes space, uses `git verify-pack` and `git rev-list` to locate the object, then uses `git filter-branch` to rewrite history, followed by `git gc` and `git prune`
- **Word Count:** 958

## 4. Creating and Manipulating Git Objects
- **File:** `book/10-git-internals/sections/objects.asc`
- **Topic:** Understanding Git's content-addressable filesystem via plumbing commands
- **Scenario:** Reader initializes a repo, uses `git hash-object` to store content, `git cat-file` to retrieve it, and stores multiple file versions to understand how blobs work
- **Word Count:** 622

## 5. Creating Tree Objects
- **File:** `book/10-git-internals/sections/objects.asc`
- **Topic:** Manually creating tree objects with low-level commands
- **Scenario:** Reader uses `git update-index`, `git write-tree`, and `git read-tree` to create staging areas, write tree snapshots, and combine trees into nested structures
- **Word Count:** 505

## 6. Creating Commit Objects
- **File:** `book/10-git-internals/sections/objects.asc`
- **Topic:** Manually creating commit objects
- **Scenario:** Reader creates three sequential commits by hand using `git commit-tree`, examines their structure with `git cat-file`, and views the resulting history with `git log`
- **Word Count:** 272

## 7. Object Storage via Ruby
- **File:** `book/10-git-internals/sections/objects.asc`
- **Topic:** Understanding Git's object storage format
- **Scenario:** Reader uses Ruby code to manually construct a header, calculate SHA-1, compress with zlib, write an object to disk, and verify with `git cat-file`
- **Word Count:** 428

## 8. Demonstrating Packfiles
- **File:** `book/10-git-internals/sections/packfiles.asc`
- **Topic:** Understanding Git's packfile and delta compression mechanism
- **Scenario:** Reader adds a large file and modifies it, runs `git gc` to trigger packing, then uses `git cat-file` and `git verify-pack` to examine delta compression
- **Word Count:** 583

## 9. Creating References Manually
- **File:** `book/10-git-internals/sections/refs.asc`
- **Topic:** Understanding Git references by creating them manually
- **Scenario:** Reader writes a SHA-1 directly to `.git/refs/heads/master`, then uses the safer `git update-ref` to create branches
- **Word Count:** 225

## 10. Working with HEAD and Symbolic References
- **File:** `book/10-git-internals/sections/refs.asc`
- **Topic:** Understanding the HEAD file and symbolic-ref mechanism
- **Scenario:** Reader inspects the HEAD file directly, uses `git checkout` and `git symbolic-ref` to manipulate and understand how HEAD tracks the current branch
- **Word Count:** 198

## 11. Creating Annotated Tags (Internals)
- **File:** `book/10-git-internals/sections/refs.asc`
- **Topic:** Understanding tag objects at the internals level
- **Scenario:** Reader creates lightweight tags with `git update-ref` and annotated tags with `git tag -a`, then inspects the tag object structure with `git cat-file`
- **Word Count:** 246

## 12. Working with Remote References
- **File:** `book/10-git-internals/sections/refs.asc`
- **Topic:** Understanding how Git stores remote-tracking references
- **Scenario:** Reader adds a remote, pushes commits, then inspects the stored reference in `.git/refs/remotes/origin/master`
- **Word Count:** 149

## 13. The Dumb Protocol
- **File:** `book/10-git-internals/sections/transfer-protocols.asc`
- **Topic:** Understanding the HTTP dumb protocol for fetching
- **Scenario:** Reader simulates the HTTP fetch process step by step: fetching `info/refs`, checking HEAD, fetching individual commit objects, discovering packfiles, downloading pack indexes, and extracting objects
- **Word Count:** 587

## 14. The Smart Protocol — SSH Upload
- **File:** `book/10-git-internals/sections/transfer-protocols.asc`
- **Topic:** Understanding the SSH handshake for pushing data
- **Scenario:** Reader observes how `git push` initiates `send-pack`, the server responds with references and capabilities, and the client transmits the packfile
- **Word Count:** 342

## 15. The Smart Protocol — HTTP(S) Upload
- **File:** `book/10-git-internals/sections/transfer-protocols.asc`
- **Topic:** Understanding the HTTP variant for pushing data
- **Scenario:** Reader observes the HTTP handshake (GET for initial info, POST for packfile) and how it differs from SSH
- **Word Count:** 189

## 16. The Smart Protocol — SSH Download
- **File:** `book/10-git-internals/sections/transfer-protocols.asc`
- **Topic:** Understanding the SSH handshake for fetching data
- **Scenario:** Reader observes how `fetch-pack` connects to `upload-pack`, the server sends references, and the client sends want/have/done commands to initiate packfile transmission
- **Word Count:** 292

## 17. The Smart Protocol — HTTP(S) Download
- **File:** `book/10-git-internals/sections/transfer-protocols.asc`
- **Topic:** Understanding the HTTP variant for fetching data
- **Scenario:** Reader observes the two-request pattern: GET for capabilities, POST with want/have commands to fetch the packfile
- **Word Count:** 129
