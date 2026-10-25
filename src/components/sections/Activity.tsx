import { profile } from "@/lib/data";
import { ActivityView, type GhData, type Repo } from "./ActivityView";

type ApiRepo = { name: string; description: string | null; language: string | null; stargazers_count: number; html_url: string; fork: boolean };

async function getGithub(): Promise<GhData> {
  try {
    const opt = { next: { revalidate: 3600 }, headers: { Accept: "application/vnd.github+json" } };
    const [u, r] = await Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUser}`, opt),
      fetch(`https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`, opt),
    ]);
    if (!u.ok || !r.ok) return null;
    const user = await u.json();
    const repos = (await r.json()) as ApiRepo[];
    if (!Array.isArray(repos)) return null;
    const own = repos.filter((x) => !x.fork);
    const latest: Repo[] = own.slice(0, 6).map((x) => ({
      name: x.name, description: x.description, language: x.language, stars: x.stargazers_count, url: x.html_url,
    }));
    return {
      repos: Number(user.public_repos) || own.length,
      followers: Number(user.followers) || 0,
      stars: own.reduce((a, x) => a + x.stargazers_count, 0),
      latest,
    };
  } catch {
    return null;
  }
}

/** Server component: mengambil data GitHub asli; jika gagal, section tetap tampil tanpa angka. */
export async function Activity() {
  const data = await getGithub();
  return <ActivityView data={data} />;
}
