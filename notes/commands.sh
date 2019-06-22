
exit

git add --all
git commit --allow-empty --allow-empty-message -m ''
git commit --allow-empty --allow-empty-message -m '' --amend
git push origin master
git checkout master
git checkout shadow
git checkout -b shadow
git merge --squash shadow

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
