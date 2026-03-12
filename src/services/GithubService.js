import { githubToken } from "@/env.js"
import axios from "axios"

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${githubToken}`
  }
})
const username = 'MickShannahan'


class GithubService {

  async getContributions() {
    const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `
    const res = await githubApi.post('graphql', { query })
    const calendar = res.data.data.user.contributionsCollection.contributionCalendar

    return {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks
    }
  }

  async getLanguages() {
    const res = await githubApi.get(`users/${username}/repos?per_page=100`)
    const repos = res.data

    const languageCounts = {}
    repos.forEach(repo => {
      if (repo.language) {
        languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
      }
    })

    return languageCounts
  }

}

export const githubService = new GithubService()