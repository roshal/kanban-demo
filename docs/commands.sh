
exit

git merge --ff-only shadow
git merge --squash shadow
git merge -m '' --squash -X theirs shadow

git commit --allow-empty --allow-empty-message -m ''

yarn upgrade -L

npx yarn-up

find source -name '*.js' | xargs wc -l | sort -g

### develop
npx nps d

### release
npx nps r

### lint
npx nps l

### nodemon
npx nodemon -w webpack -x nps d

### babel-node
npx -p @babel/core -p @babel/node babel-node source/sources/index.js
