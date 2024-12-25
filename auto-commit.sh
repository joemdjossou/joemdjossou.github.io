#!/bin/bash

# Auto-commit and push script
# This script commits and pushes all changes in the repository

cd /Users/joemdjossou/Documents/GitHub/joemdjossou.github.io

# Check if there are any changes
if [[ -n $(git status -s) ]]; then
    # Add all changes (excluding .DS_Store and node_modules)
    git add -A
    git reset -- .DS_Store
    git reset -- node_modules/
    git reset -- node_modules/.cache/
    
    # Check if there are still changes to commit
    if [[ -n $(git status -s) ]]; then
        # Commit with timestamp
        git commit -m "Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
        
        # Push to remote
        git push origin main
        
        echo "$(date): Changes committed and pushed successfully"
    else
        echo "$(date): No changes to commit (only ignored files)"
    fi
else
    echo "$(date): No changes detected"
fi

