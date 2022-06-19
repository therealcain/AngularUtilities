import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  async listGithubDirectories(user, repo, branch, directory) {
    const url = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}`;
    directory = directory.split('/').filter(Boolean);

    const dir = await directory.reduce(async (acc, dir) => {
      const url = await acc;
      const list = await fetch(url).then(res => res.json());
      return list.tree.find(node => node.path === dir);
    }, url);

    if (dir) {
      const list = await fetch(dir.url).then(res => res.json());
      return list.tree.map(node => node.path);
    }
  }

  async getMarkdowns(user, repo, branch, directory) {
    return this.listGithubDirectories(user, repo, branch, directory).then((values: string[]) => {
        return values.filter(word => word.endsWith(".md"));
      }
    ).catch((reason) => {
      console.log(reason);
      return [];
    })
  }

  getMarkdownPagePath(user, repo, branch, directory, markdownName) {
    return `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${directory}/${markdownName}`;
  }
}
