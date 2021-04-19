const headers = {
  'Content-type': 'application/json',
}

const postConfig = {
  method: 'POST',
  headers,
}

export const repoFetcher = (): Promise<any> =>
  fetch('/api/repos/starred', postConfig)
    .then((res) => res.json())
    .then((json) => json.data)

export const commitsFetcher = (owner: string, name: string): Promise<any> =>
  fetch(`/api/repos/${owner}/${name}`, postConfig)
    .then((res) => res.json())
    .then((json) => json.data)
