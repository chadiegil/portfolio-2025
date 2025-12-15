# How to Push to GitHub

This guide explains different methods to push your code to GitHub, especially when dealing with authentication.

## Prerequisites

- Git installed on your system
- A GitHub account
- A Personal Access Token (PAT) from GitHub

## Method 1: Using Personal Access Token (Quick Method)

### Step 1: Generate a Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Portfolio Project")
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Push with Token

Use this command format:

```bash
git push https://YOUR_TOKEN@github.com/USERNAME/REPOSITORY.git BRANCH_NAME
```

**Example:**
```bash
git push https://YOUR_TOKEN@github.com/chadiegil/portfolio-2025.git master
```

Replace:
- `YOUR_TOKEN` with your Personal Access Token
- `USERNAME` with your GitHub username
- `REPOSITORY` with your repository name
- `BRANCH_NAME` with your branch (usually `master` or `main`)

## Method 2: Using Git Credential Helper (Recommended)

This method saves your credentials so you don't have to enter them every time.

### Step 1: Configure Credential Helper

```bash
git config --global credential.helper store
```

### Step 2: Push Normally

```bash
git push origin master
```

When prompted:
- **Username:** Enter your GitHub username
- **Password:** Paste your Personal Access Token (NOT your GitHub password)

Git will save these credentials for future pushes.

## Method 3: Using SSH (Most Secure)

### Step 1: Generate SSH Key

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Press Enter to accept default file location, then enter a passphrase (optional).

### Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```

2. Go to GitHub → Settings → SSH and GPG keys → New SSH key
3. Paste your public key and save

### Step 3: Change Remote URL to SSH

```bash
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git
```

**Example:**
```bash
git remote set-url origin git@github.com:chadiegil/portfolio-2025.git
```

### Step 4: Push

```bash
git push origin master
```

No credentials needed! SSH handles authentication automatically.

## Method 4: Using GitHub CLI (gh)

### Step 1: Install GitHub CLI

```bash
# On Ubuntu/Debian
sudo apt install gh

# On macOS
brew install gh
```

### Step 2: Authenticate

```bash
gh auth login
```

Follow the prompts to authenticate.

### Step 3: Push

```bash
git push origin master
```

## Common Issues and Solutions

### Issue: "8-digit code" prompt

**Problem:** GitHub is asking for an 8-digit device authorization code, but you only have a 6-digit 2FA code.

**Solution:** 
- The 8-digit code is for device authorization (different from 2FA)
- Use a Personal Access Token instead (Method 1 or 2)
- Or switch to SSH (Method 3)

### Issue: "Authentication failed"

**Solution:**
- Make sure you're using a Personal Access Token, not your GitHub password
- Check that your token has the `repo` scope
- Verify your token hasn't expired

### Issue: "Permission denied"

**Solution:**
- Ensure your token has the correct permissions
- Check that you have write access to the repository
- Verify the repository URL is correct

## Quick Reference Commands

```bash
# Check current remote URL
git remote -v

# Change remote to HTTPS
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git

# Change remote to SSH
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git

# Push to GitHub
git push origin master

# Push with token (one-time)
git push https://TOKEN@github.com/USERNAME/REPOSITORY.git master
```

## Security Best Practices

1. **Never commit tokens to your repository**
   - Add `.env` and token files to `.gitignore`
   - Use environment variables for tokens

2. **Use SSH keys for long-term projects**
   - More secure than tokens
   - No need to enter credentials repeatedly

3. **Rotate tokens regularly**
   - Delete old tokens when creating new ones
   - Use tokens with minimal required permissions

4. **Use credential helper carefully**
   - Credentials are stored in plain text
   - Only use on trusted machines

## Troubleshooting

### Check Git Configuration

```bash
# View all git config
git config --list

# View remote URL
git remote -v

# Test SSH connection
ssh -T git@github.com
```

### Reset Credentials

```bash
# Remove stored credentials
git credential-store erase
# Then enter: protocol=https
# Then enter: host=github.com
# Press Enter twice
```

## Additional Resources

- [GitHub Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [GitHub SSH Keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git Credential Storage](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage)

---

**Note:** If you're using a Personal Access Token that was shared or exposed, regenerate it immediately in GitHub settings for security.

