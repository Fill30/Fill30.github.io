import { Client, ShowcaseEvent } from '@/env'
import axios from 'axios'

const airtable = import.meta.env.AIRTABLE_API_KEY
    ? axios.create({
          baseURL: 'https://api.airtable.com/v0/appRIwSUX1fo85HgF/',
          timeout: 2000,
          headers: {
              Authorization: `Bearer ${import.meta.env.AIRTABLE_API_KEY}`,
          },
      })
    : null

export async function getShowcaseEvents(): Promise<ShowcaseEvent[] | null> {
    return new Promise((resolve, reject) => {
        if (!airtable) {
            console.error('NO AIRTABLE API KEY CONFIGURED')
            return
        }

        airtable
            ?.get(
                `tblw9UaKECzYofLUy?filterByFormula=AND(%7BShowcase%7D+%3D+TRUE()%2C+%7BStatus%7D+%3D+"Received")&maxRecords=4&sort%5B0%5D%5Bfield%5D=Date&sort%5B0%5D%5Bdirection%5D=desc`
            )
            .then(async (result) => {
                if (result.data?.records)
                    resolve(result.data.records as ShowcaseEvent[])
                else reject(`couldn't find any showcased events`)
            })
            .catch((err) => {
                console.warn(
                    `Got error while trying to get showcase projects from airtable: ${err}`
                )
            })
    })
}

export async function getClients(): Promise<Client[] | null> {
    return new Promise((resolve, reject) => {
        if (!airtable) {
            console.error('NO AIRTABLE API KEY CONFIGURED')
            return
        }

        airtable
            ?.get(`tblL6QEqOaijSdFSz?view=Gallery`) // filtering through view rather than formula
            .then(async (result) => {
                if (result.data?.records)
                    // console.log(JSON.stringify(result.data.records)), //I stringifyed the results it to make sure I could see what the URLs are in the Logo Array.
                    resolve(result.data.records as Client[])
                else reject(`couldn't find any clients`)
            })
            .catch((err) => {
                console.warn(
                    `Got error while trying to get clients from airtable: ${err}`
                )
            })
    })
}
