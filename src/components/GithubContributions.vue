<script setup>
import { githubService } from '@/services/GithubService.js'
import { logger } from '@/utils/Logger.js'
import { AppState } from '@/AppState.js'
import { onMounted } from 'vue'

onMounted(() => {
  getExperience()
})

async function getExperience() {
  try {
    const contributions = await githubService.getContributions()
    const languages = await githubService.getLanguages()

    AppState.githubData.weeks = contributions.weeks
    AppState.githubData.totalContributions = contributions.totalContributions
    AppState.githubData.languages = languages
    logger.log('📅', AppState.githubData)
  } catch (error) {
    logger.error("problem getting github experience")
    logger.error(error)
  }
}

function getBgColor(numberOfContributions = 0) {
  if (numberOfContributions == 0) return 'rgba(var(--bs-dark-rgb), .1)'
  if (numberOfContributions > 4) return 'rgba(var(--bs-primary-rgb), 1)'
  if (numberOfContributions > 3) return 'rgba(var(--bs-primary-rgb), .9)'
  if (numberOfContributions > 2) return 'rgba(var(--bs-primary-rgb), .75)'
  if (numberOfContributions > 1) return 'rgba(var(--bs-primary-rgb), .5)'
  if (numberOfContributions > 0) return 'rgba(var(--bs-primary-rgb), .3)'
}

function getMonthLabels() {
  const months = []
  let currentMonth = null
  let weekCount = 0

  AppState.githubData.weeks.forEach(week => {
    const firstDay = week.contributionDays[0]
    const date = new Date(firstDay.date)
    const month = date.toLocaleDateString('en-US', { month: 'short' })

    if (month !== currentMonth) {
      if (currentMonth !== null) {
        months.push({ name: currentMonth, span: weekCount })
      }
      currentMonth = month
      weekCount = 1
    } else {
      weekCount++
    }
  })

  if (currentMonth !== null) {
    months.push({ name: currentMonth, span: weekCount })
  }

  return months
}

</script>


<template>
  <section class="github-contribution my-4 rounded rounded-4">
    <div class="github-months mb-1">
      <div v-for="month in getMonthLabels()" :key="month.name" class="github-month"
        :style="`grid-column: span ${month.span}`">
        <span class=""> {{ month.name }}</span>
      </div>
    </div>
    <section class="github-year">
      <div v-for="(week, wn) in AppState.githubData.weeks" class="github-week" :key="'week-' + wn">
        <div :title="`${day.date} : ${day.contributionCount} contributions`" v-for="day in week?.contributionDays"
          class="github-day" :key="day.date" :style="`--bg-color: ${getBgColor(day.contributionCount)}`">
        </div>
      </div>
    </section>
    <div class="fw-bold fs-5 mt-2 text-dark">
      <span class="bg-primary text-light p-1 px-3 rounded rounded-4"><i class="mdi mdi-source-branch"></i> {{
        AppState.githubData.totalContributions
      }} </span>
      contributions in the last year
    </div>
  </section>
</template>


<style lang="scss" scoped>
.github-contribution {
  --grid-size: 10px;
  font-family: monospace;
  width: auto !important;
}

@media (min-width:768px) {
  .github-contribution {
    --grid-size: 12px;
  }
}

@media (min-width:992px) {
  .github-contribution {
    --grid-size: 16px;
  }
}

.github-months {
  display: grid;
  grid-template-columns: repeat(53, var(--grid-size));
  // gap: 1px;
  font-family: monospace;
  font-weight: bold;
}

.github-month {
  color: var(--bs-dark);
  display: flex;
  align-items: flex-end;
}

.github-year {
  display: grid;
  grid-template-columns: repeat(53, var(--grid-size));
  // gap: 1px;
}

.github-week {
  display: grid;
  grid-template-rows: repeat(7, var(--grid-size));
  gap: 1px;
}

.github-day {
  padding: 2px;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: var(--bg-color);
}
</style>
