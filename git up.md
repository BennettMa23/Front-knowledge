在 github 上创建一个新的仓库，给它一个合适的名字，比如 project。
在本地创建一个文件夹，用来存放你的项目文件，比如 project。
在本地文件夹中打开 git bash，输入 git init 命令，初始化一个本地仓库。
将你的项目文件复制或移动到本地文件夹中，然后输入 git add . 命令，将所有文件添加到暂存区。
输入 git commit -m "first commit" 命令，将暂存区的文件提交到本地仓库，并添加一个提交信息。
输入 git remote add origin https://github.com/yourname/project.git 命令，将本地仓库与远程仓库关联起来，其中 yourname 是你的 github 用户名，project 是你的 github 仓库名。
输入 git push -u origin master 命令，将本地仓库的内容推送到远程仓库的 master 分支，并设置为默认分支。由于新建的远程仓库是空的，所以要加上-u这个参数，等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需下面这样就可以了：git push origin master 
这时你可以在 github 上查看你的仓库，应该能看到你的项目文件已经上传成功了。