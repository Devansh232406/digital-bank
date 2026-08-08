# Digital Banking Platform

## Overview
**Digital Bank** is a modern, responsive web application designed to provide users with a seamless and secure digital banking experience. Built using core web technologies, the platform enables users to manage accounts, perform transfers, monitor transactions, and manage cards through an intuitive user interface.

---

## Key Features

* **User Authentication:** Secure login and registration flows.
* **Account Dashboard:** Instant overview of balances, account status, and quick-action shortcuts.
* **Fund Transfers:** Intuitive interface for sending and receiving money.
* **Transaction History:** Comprehensive log to search and review past activity.
* **Card Management:** Overview and management options for linked cards.
* **Profile & Settings:** Personalized account management and customizable user preferences.

---

## Project Structure

```text
digital-bank/
├── assets/            # Static assets (images, icons, vectors)
├── css/               # Application stylesheets
├── js/                # Client-side scripts and interactive logic
├── .gitignore         # Ignored files and folders for Git
├── README.md          # Project documentation
├── about.html         # Project and platform overview
├── cards.html         # Card management dashboard
├── contact.html       # Support and inquiry page
├── dashboard.html     # Primary user account dashboard
├── index.html         # Landing page
├── login.html         # User login portal
├── profile.html       # User profile management
├── services.html      # Overview of available banking services
├── settings.html      # Account preferences and app configurations
├── signup.html        # New user registration
├── transactions.html  # Detailed transaction history
└── transfer-money.html# Money transfer interface


# 🤝 Contribution & Git Workflow Guide

Welcome to the project! 🚀
This guide explains how collaborators should **clone, pull, create features, commit, push, and merge changes** safely.

---

## 📌 Table of Contents

* [1. Initial Setup](#1-initial-setup)
* [2. Get Latest Changes](#2-get-latest-changes)
* [3. Create a New Feature](#3-create-a-new-feature)
* [4. Make Changes](#4-make-changes)
* [5. Commit Changes](#5-commit-changes)
* [6. Push Your Branch](#6-push-your-branch)
* [7. Create a Pull Request](#7-create-a-pull-request)
* [8. Code Review](#8-code-review)
* [9. Merge](#9-merge)
* [10. Delete the Branch](#10-delete-the-branch)
* [11. Sync Your Local Repository](#11-sync-your-local-repository)
* [12. Common Git Commands](#12-common-git-commands)
* [13. Important Rules](#13-important-rules)

---

# 1. Initial Setup

## Clone the Repository

Clone the repository to your computer:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Move into the project:

```bash
cd REPOSITORY
```

Check the remote:

```bash
git remote -v
```

---

# 2. Get Latest Changes

Before starting any work, **always make sure your local `main` branch is updated.**

Switch to `main`:

```bash
git checkout main
```

Pull the latest changes:

```bash
git pull origin main
```

### Recommended alternative

You can also use:

```bash
git switch main
git pull origin main
```

---

# 3. Create a New Feature

⚠️ **Never directly work on `main`.**

Create a separate branch for your feature.

```bash
git checkout -b feature/feature-name
```

Example:

```bash
git checkout -b feature/movie-recommendation
```

Or using the newer syntax:

```bash
git switch -c feature/movie-recommendation
```

### Branch Naming Convention

Use descriptive branch names:

```text
feature/feature-name
bugfix/bug-description
docs/documentation-name
refactor/code-area
test/test-name
```

Examples:

```text
feature/login-page
feature/recommendation-model
bugfix/api-error
docs/update-readme
refactor/model-training
test/recommendation-tests
```

---

# 4. Make Changes

Now work on your assigned feature.

After making changes, check what changed:

```bash
git status
```

See the exact changes:

```bash
git diff
```

---

# 5. Commit Changes

Add your changes:

```bash
git add .
```

Or add specific files:

```bash
git add filename.py
```

Commit:

```bash
git commit -m "Add movie recommendation model"
```

### Commit Message Convention

Use clear and meaningful commit messages.

| Type       | Example                             |
| ---------- | ----------------------------------- |
| `feat`     | `feat: add recommendation model`    |
| `fix`      | `fix: resolve API error`            |
| `docs`     | `docs: update README`               |
| `refactor` | `refactor: improve model structure` |
| `test`     | `test: add recommendation tests`    |
| `chore`    | `chore: update dependencies`        |

Example:

```bash
git commit -m "feat: add movie recommendation model"
```

---

# 6. Push Your Branch

Push your feature branch to GitHub:

```bash
git push origin feature/movie-recommendation
```

For the first push, you can use:

```bash
git push -u origin feature/movie-recommendation
```

---

# 7. Create a Pull Request

After pushing your branch:

1. Open the repository on GitHub.
2. GitHub will show your recently pushed branch.
3. Click **Compare & pull request**.
4. Set:

```text
base: main
compare: feature/movie-recommendation
```

5. Add a clear title.
6. Explain what you changed.
7. Mention any important testing or issues.
8. Create the Pull Request.

### Pull Request Example

**Title:**

```text
Add movie recommendation model
```

**Description:**

```text
## Changes
- Added movie recommendation model
- Added preprocessing pipeline
- Added model evaluation

## Testing
- Tested on MovieLens dataset
- Validation MAE: 0.75

## Related Issue
Closes #12
```

---

# 8. Code Review

The project maintainer will review the Pull Request.

There are three possible outcomes:

### ✅ Approved

The PR is ready to merge.

### 🔄 Changes Requested

Make the requested changes locally:

```bash
git add .
git commit -m "fix: address review comments"
git push origin feature/movie-recommendation
```

The existing Pull Request will automatically update.

### ❌ Rejected

Discuss the reason with the maintainer before continuing.

---

# 9. Merge

Only merge after the Pull Request has been reviewed and approved.

Preferred workflow:

```text
Feature Branch
      ↓
Pull Request
      ↓
Code Review
      ↓
Approval
      ↓
Merge → main
```

The maintainer will merge the Pull Request into:

```text
main
```

### ⚠️ Collaborators should NOT force-push to `main`.

Never do:

```bash
git push --force origin main
```

---

# 10. Delete the Branch

After your Pull Request has been merged, delete the remote branch through GitHub.

Then delete your local branch:

```bash
git checkout main
git pull origin main
git branch -d feature/movie-recommendation
```

If the branch was not merged and you intentionally want to delete it:

```bash
git branch -D feature/movie-recommendation
```

---

# 11. Sync Your Local Repository

Before starting your next task:

```bash
git checkout main
git pull origin main
```

Then create a new branch:

```bash
git checkout -b feature/new-feature
```

### Complete cycle

Every feature should generally follow:

```bash
git checkout main
git pull origin main

git checkout -b feature/my-feature

# Make changes

git status
git add .
git commit -m "feat: add my feature"

git push -u origin feature/my-feature
```

Then:

```text
GitHub
  ↓
Pull Request
  ↓
Review
  ↓
Approval
  ↓
Merge
  ↓
Delete Branch
```

---

# 12. Common Git Commands

### Check current branch

```bash
git branch
```

### Switch branch

```bash
git checkout branch-name
```

or:

```bash
git switch branch-name
```

### Create a branch

```bash
git checkout -b feature/name
```

### Check repository status

```bash
git status
```

### See commit history

```bash
git log --oneline
```

### See remote repository

```bash
git remote -v
```

### Get latest changes

```bash
git pull origin main
```

### Stage changes

```bash
git add .
```

### Commit

```bash
git commit -m "feat: description"
```

### Push

```bash
git push origin branch-name
```

### See all branches

```bash
git branch -a
```

---

# 13. ⚠️ Important Rules

### 🚫 Don't work directly on `main`

Always create a feature branch.

### 🚫 Don't force push

Avoid:

```bash
git push --force
```

Especially on `main`.

### 🚫 Don't commit secrets

Never commit:

```text
.env
API keys
Passwords
Private credentials
Access tokens
```

Make sure sensitive files are included in `.gitignore`.

### ✅ Pull before starting new work

Always:

```bash
git checkout main
git pull origin main
```

### ✅ Keep commits small

Prefer:

```text
feat: add login API
fix: handle invalid credentials
docs: update API documentation
```

instead of:

```text
updated everything
```

### ✅ Test before pushing

Make sure your feature works locally before creating a Pull Request.

### ✅ Communicate conflicts

If you encounter a merge conflict, don't randomly delete code.

Ask the maintainer or discuss which implementation should remain.

---

# 🔥 Recommended Team Workflow

```text
                 ┌──────────────┐
                 │     main     │
                 └──────┬───────┘
                        │
                   git pull
                        │
                        ▼
              ┌──────────────────┐
              │ Create Feature   │
              │     Branch       │
              └────────┬─────────┘
                       │
                  Make Changes
                       │
                       ▼
                  git add .
                       │
                       ▼
                    commit
                       │
                       ▼
                     push
                       │
                       ▼
              ┌──────────────────┐
              │  Pull Request    │
              └────────┬─────────┘
                       │
                   Code Review
                       │
                       ▼
                  ✅ Approved
                       │
                       ▼
                    Merge
                       │
                       ▼
                     main
                       │
                       ▼
                  Delete Branch
```

---

# 🧠 Golden Rule

> **Never modify `main` directly.**

Think of it like this:

**`main` = stable production code**

**`feature/*` = your workspace**

**Pull Request = your request to add your work to the project**

---

## 👥 Team Responsibility

| Role        | Responsibility                                |
| ----------- | --------------------------------------------- |
| Contributor | Create branch → Code → Commit → Push → PR     |
| Reviewer    | Review code → Request changes / Approve       |
| Maintainer  | Resolve conflicts → Merge PR → Protect `main` |

---

## 🚀 Quick Start

If you already cloned the repository, this is the workflow you'll use most often:

```bash
git checkout main
git pull origin main

git checkout -b feature/my-feature

# Work on your feature

git add .
git commit -m "feat: add my feature"

git push -u origin feature/my-feature
```

Then open a **Pull Request on GitHub**.

**That's it. Build → Push → PR → Review → Merge. 🚀**

