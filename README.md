# Instructions for Working with Repository
To keep the main branch clean and avoid merge conflicts, every team member should follow this daily routine when working on this repository.

### 1. Switch to `main` and get the latest updates
Always make sure your local `main` branch has the latest code from GitHub before starting any new feature or bug fix.

```bash
git checkout main
git pull origin main
```

### 2.Create a new branch for your task

Never work directly on main. Create a descriptive branch name based on what you are building (e.g., feature/login-page or fix/navbar-bug).

```bash
git checkout -b feature/your-feature-name
```

### 3. Do your work & commit changes

Work on your code locally. Make small, clear commits with descriptive messages as you progress.

```
# Check modified files
git status

# Stage your changes
git add .

# Commit with a meaningful message
git commit -m "Add authentication logic to login form"
```

### 4. Push your branch to GitHub

When your code is ready or you want to save your progress remotely, push your new branch to GitHub.

```
git push -u origin feature/your-feature-name
```

### 5. Merging Your Code (Pull Request)

a. Go to the repository on GitHub.

b. Click Compare & pull request next to your pushed branch.

c. Add a clear title and description explaining what changes were made.
