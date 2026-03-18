# Appendix B: Embedding Git in your Applications — Walkthroughs

## 1. JGit — Getting Set Up
- **File:** `book/B-embedding-git/sections/jgit.asc`
- **Topic:** Configuring JGit as a dependency in a Java project
- **Scenario:** Reader adds JGit via Maven `pom.xml` dependency, with an alternative path for manually managing binary dependencies and compiling on the command line
- **Word Count:** 130

## 2. JGit — Plumbing API
- **File:** `book/B-embedding-git/sections/jgit.asc`
- **Topic:** Using JGit's low-level plumbing API for repository operations
- **Scenario:** Reader creates and opens repositories using `FileRepositoryBuilder`, retrieves references, gets object IDs, performs rev-parse operations, loads raw object contents, creates/deletes branches, and reads configuration values
- **Word Count:** 721

## 3. JGit — Porcelain API
- **File:** `book/B-embedding-git/sections/jgit.asc`
- **Topic:** Using JGit's high-level porcelain APIs with fluent builders
- **Scenario:** Reader performs a `git ls-remote`-like operation using the `Git` class, setting up credentials, chaining method calls, and iterating over results
- **Word Count:** 212

## 4. Libgit2 — Crafting a Commit (Ruby Bindings)
- **File:** `book/B-embedding-git/sections/libgit2.asc`
- **Topic:** Creating a commit programmatically using Rugged (Libgit2 Ruby bindings)
- **Scenario:** Reader follows 8 sequential steps: writing a blob, populating the index, creating a signature, crafting a commit object with tree/author/committer/message/parents/ref parameters, and looking up the resulting commit
- **Word Count:** 203
