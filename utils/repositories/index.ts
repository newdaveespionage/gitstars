import { RawRepository } from './internalTypes'
import { Repository } from './types'

export const standardizeRepositories = (
  rawRepos: RawRepository[]
): Repository[] =>
  rawRepos.map((rawRepo) => ({
    id: rawRepo.id,
    name: rawRepo.name,
    owner: rawRepo.owner.login,
    url: rawRepo.html_url,
    stars: rawRepo.stargazers_count,
    description: rawRepo.description,
  }))
