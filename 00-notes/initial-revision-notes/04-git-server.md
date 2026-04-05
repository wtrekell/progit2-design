# Chapter 4: Git on the Server — UX Designer Revision Notes

## Overview
Chapter 4 covers collaborative Git setup through remote repositories. For UX designers, this chapter is moderately relevant but severely misaligned — most design teams use hosted platforms (GitHub, GitLab), not self-hosted servers. The heavy focus on server administration creates an accessibility barrier.

**Key structural recommendation:** Reorder chapter to lead with hosted options (currently buried at the end), then present self-hosting as optional.

---

## Section: The Protocols (`protocols.asc`)

### Priority: MEDIUM

- Local Protocol parallels shared design asset drives (Dropbox, Google Drive) — make this connection
- Add "Protocol Choice for Design Teams" matrix: small team → GitHub; medium team → GitLab; large org → self-hosted GitLab
- Simplify HTTP protocol cons — irrelevant if using GitHub/GitLab
- Replace security language with designer framing: "Unencrypted transfers — avoid if design files contain proprietary work"

---

## Section: Getting Git on a Server (`git-on-a-server.asc`)

### Priority: MEDIUM

- Reframe bare repository: "A bare repository is like a server copy in Figma — not edited directly, only used as a central reference point"
- Replace generic "my_project" with "brand-system.git" or "component-library.git"
- Rename "Small Setups" to "Controlling Who Can Access What" — maps to design governance
- Add scenario: UI designers push, lead designers approve, QA/developers have read-only

---

## Section: SSH Key Generation (`generating-ssh-key.asc`)

### Priority: MEDIUM (major friction point for non-developers)

- Lead with hosted alternatives: "Most teams use GitHub/GitLab, which handle SSH setup through their web interface"
- Simplify passphrase section — remove `ssh-agent` discussion
- Add context: "The `.pub` file is safe to share. The other file is secret — like a password."

---

## Section: Setting Up the Server (`setting-up-server.asc`)

### Priority: LOW (irrelevant for 95% of design teams)

- Add prominent NOTE: "This section is for organizations with on-premises requirements. Most teams should use GitHub/GitLab instead."
- Replace chmod permission commands with conceptual explanation

---

## Section: Git Daemon (`git-daemon.asc`)

### Priority: VERY LOW

- Move to "Advanced/Self-Hosted" appendix — designers almost never self-host public repos

---

## Section: GitWeb (`gitweb.asc`)

### Priority: LOW

- Lead with: "If you're using GitHub/GitLab, they provide much better interfaces. Skip this."
- Keep `git instaweb` demo as quick preview option

---

## Section: Smart HTTP (`smart-http.asc`)

### Priority: LOW-MEDIUM

- Frame as: "HTTP/HTTPS for teams more comfortable with passwords than SSH keys — but GitLab is easier"

---

## Section: GitLab (`gitlab.asc`)

### Priority: HIGH (most relevant section for modern design teams)

- Reframe administration for designers: Users → "Team Members"; Groups → "Design System Teams"; Projects → "Each Git repository"
- Add design system governance: branch protection rules, merge request assignment to senior designers, labels (component update, breaking change)
- Add design artifacts context: GitLab can version design tokens JSON, exported SVGs, design documentation

---

## Section: Third Party Hosted Options (`hosted.asc`)

### Priority: HIGH (should be moved to position 2 in chapter)

- Expand with GitHub vs. GitLab comparison table
- Add design-specific features comparison: branch protection, wikis/Pages for docs, integrations with Figma/Slack
- Note: "Works with design files? Yes. Built-in design collaboration? No — use Figma for that."

---

## New Content Needed

1. **Design System Governance with Git** — role mapping, branch protection, approval workflows, release tagging
2. **Quick Start: GitHub for Design Teams** — create repo, invite team, set protection, define roles (5-minute guide)
3. **Exporting Design Artifacts to Git** — Figma → JSON metadata, Sketch → SVG exports, design tokens → YAML/JSON

## Tone Shifts

| Current | Designer-Friendly |
|---------|-------------------|
| "Setting up a Git server" | "Choosing where to host your design system repository" |
| "SSH public key authentication" | "How to securely log in to your repository" |
| "Bare repository" | "Central repository that your team pushes to" |
| "Firewall/port configuration" | "Make sure your team can reach the server" |
