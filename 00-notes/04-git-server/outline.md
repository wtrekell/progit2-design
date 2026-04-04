# Chapter 4: Git on the Server — Section Outline

> **Storyline phase**: Team Infrastructure
> **Characters**: Nora, Sam
> **Key event**: SketchSpark moves to GitHub; branch protection and roles established

---

## Structural Change: Reorder Sections

The original chapter buries hosted options at the end. Designers almost always use hosted platforms. Reorder:

1. Third Party Hosted Options (moved from position 9 to position 1)
2. The Protocols (trimmed)
3. SSH Key Generation (simplified)
4. GitLab (kept, reframed)
5. Getting Git on a Server (moved to "Advanced" section)
6. Setting Up the Server (moved to "Advanced")
7. Git Daemon (moved to "Advanced")
8. Smart HTTP (moved to "Advanced")
9. GitWeb (moved to "Advanced")

---

## Section: Third Party Hosted Options (`hosted.asc`) — MOVED TO LEAD
**Original**: 11 lines | **Action**: EXPAND

### Keep
- Concept of hosted options

### Rewrite
- Expand from 11 lines to ~60 lines
- Add comparison table: GitHub vs. GitLab vs. Bitbucket (features relevant to design teams: PR reviews, branch protection, project boards, Pages for docs, free tier)
- Add Nora's decision: "The SketchSpark team picks GitHub — they already have accounts, the PR review workflow is visual, and GitHub Pages will host their product documentation later."

### New
- "Quick Start: GitHub for Your Design Project" walkthrough:
  1. Create organization → create repository → push existing local repo
  2. Invite Sam as collaborator
  3. Enable branch protection on `main` (require PR, require 1 approval)
  4. Set up team roles (admin, write, read-only)
- This replaces the need for most of the server setup sections

---

## Section: The Protocols (`protocols.asc`)
**Original**: 212 lines | **Action**: TRIM HEAVILY

### Keep
- HTTPS and SSH protocol descriptions (the only two designers use)
- Brief pros/cons of each

### Rewrite
- Frame as "Two ways to connect to GitHub": HTTPS (simpler, uses password/token) and SSH (more secure, uses key pair)
- Replace security language with designer framing: "HTTPS asks for your password each time (or a saved token). SSH uses a key file on your computer — set it up once and forget it."

### Cut
- Local Protocol (lines 6-64) — move to advanced/appendix
- Dumb HTTP (irrelevant)
- Git Protocol (lines 180-211) — irrelevant for design teams

### Target
- ~60 lines (down from 212)

---

## Section: Generating Your SSH Public Key (`generating-ssh-key.asc`)
**Original**: 58 lines | **Action**: SIMPLIFY

### Keep
- Key generation command (`ssh-keygen`)
- Checking for existing keys
- Displaying public key

### Rewrite
- Sam's first SSH key: "Sam has never used SSH. Nora walks him through it."
- Simplify passphrase guidance: "Choose a passphrase you'll remember. It protects your key if your laptop is lost or stolen."
- Add: "The `.pub` file is safe to share — give it to GitHub. The other file is your secret key. Never share it, never commit it to a repository."

### Cut
- `ssh-agent` discussion — too advanced for this stage
- Detailed key inspection

### Target
- ~35 lines (down from 58)

---

## Section: GitLab (`gitlab.asc`)
**Original**: 131 lines | **Action**: REFRAME

### Keep
- Basic structure (installation, administration, usage, collaboration)
- Merge request workflow

### Rewrite
- Reframe administration terms for design teams:
  - Users → "Team Members"
  - Groups → "Design Teams"
  - Projects → "Repositories"
- Add design governance context: branch protection rules, merge request assignment, labels (`new-component`, `bug-fix`, `breaking-change`)
- Note: "If your organization uses GitLab instead of GitHub, the core concepts are identical — repositories, branches, merge requests (GitLab's term for pull requests), and code review."

### Trim
- Cut installation details to: "GitLab can be self-hosted or used at gitlab.com. Ask your IT team for the URL."

---

## Sections Moved to "Advanced: Self-Hosting" Block

The following sections are wrapped in a single prefaced block:

> "The sections below cover self-hosted Git servers. Most design teams use GitHub or GitLab and can skip this entirely. Read on only if your organization requires on-premises hosting."

### Getting Git on a Server (`git-on-a-server.asc`)
**Original**: 102 lines | **Action**: KEEP, ADD NOTE
- Add intro note directing designers to the hosted section
- Replace `my_project` with `sketchspark.git`
- Keep bare repository explanation: "A bare repository is like a server copy — not edited directly, only used as a central reference point."

### Setting Up the Server (`setting-up-server.asc`)
**Original**: 150 lines | **Action**: KEEP AS-IS
- Mark clearly as "for system administrators"

### Git Daemon (`git-daemon.asc`)
**Original**: 67 lines | **Action**: KEEP AS-IS, ADD NOTE
- Add: "Rarely used by design teams. Skip unless your sysadmin specifically requires it."

### Smart HTTP (`smart-http.asc`)
**Original**: 73 lines | **Action**: KEEP AS-IS, ADD NOTE

### GitWeb (`gitweb.asc`)
**Original**: 71 lines | **Action**: KEEP AS-IS, ADD NOTE
- Add: "If you're using GitHub or GitLab, they provide much better interfaces. This section is for self-hosted setups only."

---

## Chapter Summary
**Action**: REWRITE

### New
- "SketchSpark lives on GitHub. The team has branch protection, roles, and a pull request workflow. Sam can push his branches and Nora can review before anything reaches `main`. In the next chapter, two more people join — Priya (illustrator) and Kai (engineer) — and the team learns to coordinate four parallel workstreams."
