import { History } from 'history'

export interface RootProps {
  history: History
}

export interface GithubRepository {
  id: number
  stargazers_count: number
  full_name: string
  description: string
  html_url: string
}

export interface Account {
  id: number,
  name: string,
  email: string,
  contact: string,
  address: string
}

declare module 'keymirror' {
  export default function keyMirror()
}
