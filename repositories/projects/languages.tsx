const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Other: "#ededed",
  Python: "#3572a5",
  CSS: "#663399",
  HTML: "#e34c26",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  "Jupyter Notebook": "#da5b0b",
};
  
export async function getLanguagesGitHub(github_urls: string[]) {
  const lang_dict: Record<string, { name: string; color: string; weight: number }[]> = {};
  for (let i = 0; i < github_urls.length; i++) {
    const url = github_urls[i];
    const repoInfo = (url.split('github.com/')[1]).split('/');
    const repoOwner = repoInfo[0];
    const repoName = repoInfo[1];
    const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`);
   
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    lang_dict[url] = Object.entries(data).map(([name, weight]) => ({
      name,
      color: languageColors[name] || "#cccccc",
      weight: parseInt(weight as string)
    }));
  }
  return lang_dict;
}