/// <reference types="astro/client" />

export interface AirtableImage {
    id: string
    width: number
    height: number
    url: string
    filename: string
    size: number
    type: string
}

export interface AirtableRow<T> {
    id: string
    createdTime: string
    fields: T
}

export type ShowcaseEvent = Airtable<{
    Name?: string
    Received?: string
    Images: AirtableImage[]
}>

export type Client = Airtable<{
    Name?: string
    Logo: AirtableImage[]
}>
