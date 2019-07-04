
exit

git add --all

git checkout -b shadow

git checkout master
git checkout shadow

git push origin master
git push origin shadow

git merge --ff-only shadow
git merge --squash shadow

git rebase master

git commit --allow-empty --allow-empty-message -m ''
git commit --allow-empty --allow-empty-message -m '' --amend

git add --all && git commit --allow-empty --allow-empty-message -m '' && git push origin master
git add --all && git commit --allow-empty --allow-empty-message -m '' --amend && git push origin master -f

yarn upgrade -L

npx yarn-up

find source -name '*.js' | xargs wc -l | sort -g

# develop
npx nps d

# release
npx nps r

# lint
npx nps l

# nodemon
npx nodemon -w webpack -x nps d
