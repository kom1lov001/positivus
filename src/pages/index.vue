<template>
  <main class="landing-page">
    <div class="hero min-h-screen bg-primary text-primary-content">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <img src="/src/assets/Icon (2).png" alt="Point of Vue Logo" class="mx-auto mb-6 h-32 w-32 object-contain" />
          <h1 class="mb-5 text-5xl font-bold">Point of Vue</h1>
          <p class="mb-8 text-xl">Your personal productivity dashboard</p>
          <a href="#choose-your-focus" class="btn btn-secondary btn-lg">
            Get Started
            <Icon icon="lucide:chevron-down" width="20" height="20" class="ml-2" />
          </a>
        </div>
      </div>
    </div>

    <section class="bg-base-100 py-16" id="choose-your-focus">
      <div class="container mx-auto px-4">
        <h2 class="mb-12 text-center text-4xl font-bold">Choose Your Focus</h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- Tasks Card -->
          <div class="card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <RouterLink to="/tasks" class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:check-square" width="64" height="64" class="text-primary" />
              </div>
              <h3 class="card-title mb-4 justify-center text-2xl">Tasks</h3>
              <p class="text-base-content/70 mb-6">Manage your tasks, track time, and stay organized with powerful productivity tools.</p>
              <div class="card-actions justify-center">
                <span class="btn btn-primary btn-outline">
                  Manage Tasks
                  <Icon icon="lucide:arrow-right" width="16" height="16" class="ml-2" />
                </span>
              </div>
            </RouterLink>
          </div>

          <div class="card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <RouterLink to="/planner" class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:calendar" width="64" height="64" class="text-secondary" />
              </div>
              <h3 class="card-title mb-4 justify-center text-2xl">Weekly Planner</h3>
              <p class="text-base-content/70 mb-6">Plan your weeks strategically and track your progress across different life areas.</p>
              <div class="card-actions justify-center">
                <span class="btn btn-secondary btn-outline">
                  Plan Week
                  <Icon icon="lucide:arrow-right" width="16" height="16" class="ml-2" />
                </span>
              </div>
            </RouterLink>
          </div>
          <div class="card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <RouterLink to="/reflection" class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:bar-chart-3" width="64" height="64" class="text-warning" />
              </div>
              <h3 class="card-title mb-4 justify-center text-2xl">Weekly Reflection</h3>
              <p class="text-base-content/70 mb-6">Analyze your productivity patterns and gain valuable insights for improvement.</p>
              <div class="card-actions justify-center">
                <span class="btn btn-warning btn-outline">
                  View Analytics
                  <Icon icon="lucide:arrow-right" width="16" height="16" class="ml-2" />
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-base-200 py-16" id="features">
      <div class="container mx-auto px-4">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-bold">Powerful Features</h2>
          <p class="text-base-content/70 text-xl">Everything you need to boost your productivity</p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:clock" width="48" height="48" class="text-primary" />
              </div>
              <h4 class="card-title mb-2 justify-center text-lg">Time Tracking</h4>
              <p class="text-base-content/70 text-sm">Track time spent on tasks with precision and detailed analytics.</p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:target" width="48" height="48" class="text-secondary" />
              </div>
              <h4 class="card-title mb-2 justify-center text-lg">Goal Setting</h4>
              <p class="text-base-content/70 text-sm">Set meaningful goals and track your progress towards achieving them.</p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:bar-chart" width="48" height="48" class="text-warning" />
              </div>
              <h4 class="card-title mb-2 justify-center text-lg">Progress Analytics</h4>
              <p class="text-base-content/70 text-sm">Visualize your productivity patterns with comprehensive analytics.</p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-lg">
            <div class="card-body text-center">
              <div class="mb-4 flex justify-center">
                <Icon icon="lucide:layers" width="48" height="48" class="text-error" />
              </div>
              <h4 class="card-title mb-2 justify-center text-lg">Area Organization</h4>
              <p class="text-base-content/70 text-sm">Organize tasks by life areas for better balance and focus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-base-100 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="mb-4 text-3xl font-bold">Ready to boost your productivity?</h2>
        <p class="text-base-content/70 mb-8 text-xl">Start organizing your life with Point of Vue today.</p>
        <div class="flex flex-col justify-center gap-4 sm:flex-row">
          <RouterLink to="/tasks" class="btn btn-primary btn-lg">
            <Icon icon="lucide:check" width="20" height="20" class="mr-2" />
            Start with Tasks
          </RouterLink>
          <RouterLink to="/planner" class="btn btn-secondary btn-lg">
            <Icon icon="lucide:calendar" width="20" height="20" class="mr-2" />
            Plan Your Week
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
