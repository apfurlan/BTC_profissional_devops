BRANCH=$(git branch --show-current)
git add . && git commit -m "$1" && git push origin $BRANCH