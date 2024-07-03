import type { Avatar, Badge, Link } from '#ui/types'
import type { ParsedContent } from '@nuxt/content'

export interface BlogPost extends ParsedContent {
  title: string
  description: string
  date: string
  image?: HTMLImageElement
  badge?: Badge
  authors?: ({
    name: string
    description?: string
    avatar?: Avatar
  } & Link)[]
}
