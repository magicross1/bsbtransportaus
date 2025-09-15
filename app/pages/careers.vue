<script setup lang="ts">
// Careers页面SEO配置
useSeoMeta({
  title: 'Careers | Join BSB Transport Australia | Driver & Logistics Jobs',
  description: 'Join BSB Transport Australia team. Career opportunities for drivers, dispatchers, customer service, and logistics professionals. Competitive benefits and growth opportunities.',
  keywords: 'BSB transport careers, transport jobs australia, driver jobs, logistics careers, transport company jobs, BSB transport employment',
  ogImage: 'https://www.bsbtransport.com.au/images/index.png',
  twitterCard: 'summary_large_image'
})

// 面包屑导航
const breadcrumbs = [
  { label: 'Home', to: '/' },
  { label: 'Careers', to: '/careers' }
]

// 职位列表
const jobOpenings = [
  {
    id: 'driver-trailer-standard',
    title: 'Standard Trailer Driver',
    location: 'Sydney, Melbourne',
    type: 'Full-time',
    experience: '2+ years (container transport)',
    salary: 'From $40/hr+',
    description: 'Drive prime mover + standard trailer for container transport between ports, depots and customer sites.',
    requirements: [
      'Heavy Vehicle License (HC or MC)',
      'MSIC Card',
      'Minimum 2 years container transport experience',
      'Good communication skills and teamwork'
    ],
    benefits: [
      'Consistent port & depot runs',
      'Overtime and weekend shifts available',
      'Modern, well-maintained fleet',
      'Safety-first culture (CoR/MSIC compliant)',
      'Paid PPE & on-the-job training',
      'Stable rosters with supportive dispatch'
    ],
    icon: 'i-lucide-truck'
  },
  {
    id: 'driver-sideloader',
    title: 'Sideloader Driver',
    location: 'Sydney, Melbourne',
    type: 'Full-time',
    experience: '2+ years (sideloader)',
    salary: 'From $45/hr+',
    description: 'Operate sideloader equipment for ground-level container loading/unloading across metro areas.',
    requirements: [
      'Heavy Vehicle License (HC or MC)',
      'MSIC Card',
      'Minimum 2 years sideloader driving/operation experience',
      'Strong problem-solving and situational awareness'
    ],
    benefits: [
      'Sideloader allowance & priority dispatch',
      'Dedicated equipment maintenance support',
      'Overtime opportunities',
      'Ongoing competency training (hydraulics & safety)',
      'Digital job dispatch & live support',
      'Premium PPE provided'
    ],
    icon: 'i-lucide-truck'
  },
  {
    id: 'driver-sub-contractor',
    title: 'Sub-Contractor Driver',
    location: 'Sydney, Melbourne',
    type: 'Sub-contractor',
    experience: 'Relevant industry experience',
    salary: 'Per box rate',
    description: 'Work as an owner-driver on port and metro container movements.',
    requirements: [
      'Heavy Vehicle License (HC or MC)',
      'MSIC Card',
      'Own truck (specify with/without trailer or sideloader)',
      'Relevant container transport experience',
      'ABN, insurances and compliance documents'
    ],
    benefits: [
      'Fast payment cycles (7–14 days)',
      'High and steady port volumes',
      'Flexible scheduling to suit your runs',
      'Fuel levy & accessorial pass-throughs',
      'Yard access, loading support & digital dispatch',
      'Long-term partnership opportunities'
    ],
    icon: 'i-lucide-handshake'
  },
  {
    id: 'maintenance-technician',
    title: 'Vehicle Maintenance Technician',
    location: 'Sydney, Melbourne',
    type: 'Part-time',
    experience: '3+ years',
    salary: 'Competitive',
    description: 'Maintain and repair prime movers, trailers and sideloader hydraulic systems to ensure safe, reliable operations.',
    requirements: [
      'Mechanical trade qualification (heavy vehicle preferred)',
      'Experience with diesel engines, braking & suspension',
      'Hydraulic & basic auto-electrical diagnostics',
      'Strong safety awareness and documentation habits',
      'Team player with problem-solving skills'
    ],
    benefits: [
      'Flexible shifts (workshop/yard)',
      'Tool allowance & modern workshop equipment',
      'OEM & sideloader system training',
      'Overtime available during peak periods',
      'Career pathway to full-time role'
    ],
    icon: 'i-lucide-wrench'
  },
  {
    id: 'logistics-coordinator',
    title: 'Logistics Coordinator',
    location: 'Melbourne',
    type: 'Full-time',
    experience: '2+ years',
    salary: 'Competitive',
    description: 'Coordinate daily container transport operations: VBS/slot bookings, driver schedules, customer updates and KPI tracking.',
    requirements: [
      'Experience in container transport or logistics operations',
      'Knowledge of terminals, VBS/slot booking and depot processes',
      'Strong communication & customer service skills',
      'Problem-solving and prioritisation under time pressure',
      'Proficiency with TMS/GPS tools and spreadsheets'
    ],
    benefits: [
      'Competitive salary with performance bonuses',
      'Career progression path (Senior Coordinator / Ops Manager)',
      'Modern systems (TMS, live tracking, digital POD)',
      'Supportive team & structured onboarding',
      'Occasional hybrid/office flexibility'
    ],
    icon: 'i-lucide-clipboard-list'
  },
  {
    id: 'it-developer',
    title: 'Software Developer (Internal Systems)',
    location: 'Sydney',
    type: 'Full-time',
    experience: '3+ years',
    salary: 'From $80,000+',
    description: 'Build and maintain internal logistics systems and automations (e.g. job dispatch, integrations, reporting, document workflows).',
    requirements: [
      'Solid experience in one or more: Python/Node/Java',
      'Frontend with Vue 3 / Nuxt (or similar SPA/SSR framework)',
      'RESTful APIs, authentication and integrations',
      'SQL/NoSQL fundamentals and basic cloud (GCP/AWS) knowledge',
      'Version control (Git) and CI/CD practices'
    ],
    benefits: [
      'Greenfield features with real operational impact',
      'New laptop & tooling budget',
      'Training/certification support (cloud/DevOps/LLM)',
      'Flexible hours with occasional WFH',
      'Close collaboration with operations & leadership'
    ],
    icon: 'i-lucide-code-2'
  }
]

// 公司福利
const companyBenefits = [
  {
    title: 'Competitive Salary',
    description: 'Market-competitive salaries with regular reviews',
    icon: 'i-lucide-dollar-sign'
  },
  {
    title: 'Health Insurance',
    description: 'Comprehensive health and medical insurance coverage',
    icon: 'i-lucide-heart'
  },
  {
    title: 'Career Development',
    description: 'Training programs and career advancement opportunities',
    icon: 'i-lucide-graduation-cap'
  },
  {
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and paid time off',
    icon: 'i-lucide-clock'
  },
  {
    title: 'Team Environment',
    description: 'Supportive and collaborative work environment',
    icon: 'i-lucide-users'
  },
  {
    title: 'Modern Equipment',
    description: 'Latest technology and equipment for optimal performance',
    icon: 'i-lucide-monitor'
  }
]

// 邮件模板数据
const applicationEmailTemplate = {
  subject: 'Job Application - [Position Title]',
  body: `Dear BSB Transport HR Team,

I am writing to express my interest in joining your team.

Position Applied For: [Please specify the position]

Personal Information:
- Full Name: [Your Name]
- Email: [Your Email]
- Phone: [Your Phone]
- Address: [Your Address]

Experience & Qualifications:
- Years of Experience: [X years]
- Relevant Skills: [List your skills]
- Availability: [When can you start?]

Additional Information:
[Tell us about yourself, why you want to join BSB Transport, and any other relevant information]

Please find my resume and cover letter attached.

Thank you for considering my application.

Best regards,
[Your Name]`
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Breadcrumb Navigation -->
    <UContainer class="py-4">
      <UBreadcrumb :links="breadcrumbs" />
    </UContainer>

    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Background Animation Placeholder -->
      <div class="absolute inset-0 opacity-20">
        <div class="animate-pulse bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 h-full w-full"></div>
      </div>

      <UContainer class="relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Team
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Build your career with BSB Transport Australia. Join a professional team dedicated
            to excellence in container transport services across Australia.
          </p>

          <!-- Career Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div class="text-center">
              <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">30+</div>
              <div class="text-gray-600 dark:text-gray-300">Team Members</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">6</div>
              <div class="text-gray-600 dark:text-gray-300">Departments</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-green-600 dark:text-green-400">90%</div>
              <div class="text-gray-600 dark:text-gray-300">Retention Rate</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-orange-600 dark:text-orange-400">24/7</div>
              <div class="text-gray-600 dark:text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Current Openings Section -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Current Job Openings
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore exciting career opportunities with BSB Transport Australia
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <UCard
            v-for="job in jobOpenings"
            :key="job.id"
            class="group hover:shadow-xl transition-all duration-300"
          >
            <template #header>
              <div class="flex items-start justify-between">
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mr-4">
                    <UIcon :name="job.icon" class="text-xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ job.title }}</h3>
                    <p class="text-purple-600 dark:text-purple-400 font-medium">{{ job.location }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <UBadge color="success" variant="soft">{{ job.type }}</UBadge>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">{{ job.salary }}</p>
                </div>
              </div>
            </template>

            <div class="space-y-4">
              <p class="text-gray-600 dark:text-gray-300">{{ job.description }}</p>

              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Requirements:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="req in job.requirements"
                    :key="req"
                    class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <UIcon name="i-lucide-check" class="text-green-500 mr-2 flex-shrink-0" />
                    {{ req }}
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Benefits:</h4>
                <ul class="space-y-1">
                  <li
                    v-for="benefit in job.benefits"
                    :key="benefit"
                    class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                  >
                    <UIcon name="i-lucide-star" class="text-yellow-500 mr-2 flex-shrink-0" />
                    {{ benefit }}
                  </li>
                </ul>
              </div>
            </div>

            <template #footer>
              <div class="relative overflow-hidden">
                <!-- Gradient Background -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <!-- Apply Button -->
                <a
                  :href="`mailto:alex.cheng@bsbtransport.com.au?subject=Job Application - ${encodeURIComponent(job.title)}&body=${encodeURIComponent(applicationEmailTemplate.body)}`"
                  class="block w-full"
                >
                  <UButton
                    variant="ghost"
                    color="primary"
                    class="w-full relative z-10 group-hover:bg-transparent group-hover:text-white transition-all duration-300 font-semibold py-3"
                  >
                    <div class="flex items-center justify-center space-x-2">
                      <UIcon name="i-lucide-rocket" class="w-5 h-5 group-hover:animate-bounce" />
                      <span>Apply Now</span>
                      <UIcon name="i-lucide-arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    <!-- Animated Border -->
                    <div class="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-all duration-300"></div>
                  </UButton>
                </a>

                <!-- Success Indicator -->
                <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </template>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Company Benefits Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Work with Us?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive benefits and opportunities for professional growth
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard
            v-for="benefit in companyBenefits"
            :key="benefit.title"
            class="group hover:shadow-xl transition-all duration-300 text-center"
          >
            <template #header>
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon :name="benefit.icon" class="text-2xl text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ benefit.title }}
                </h3>
              </div>
            </template>

            <div>
              <p class="text-gray-600 dark:text-gray-300">
                {{ benefit.description }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Application Email Section -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <UContainer>
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Apply Now
            </h2>
            <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Send your application directly to our HR team via email. Include your resume and cover letter as attachments.
            </p>
          </div>

          <!-- Email Application Card -->
          <UCard class="shadow-3xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
            <div class="p-8">
              <!-- Email Address Display -->
              <div class="text-center mb-8">
                <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full mb-6">
                  <UIcon name="i-lucide-briefcase" class="text-3xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  alex.cheng@bsbtransport.com.au
                </h3>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our HR team is ready to review your application
                </p>
              </div>

              <!-- Email Button -->
              <div class="text-center mb-8">
                <a
                  href="mailto:alex.cheng@bsbtransport.com.au?subject=Job Application - [Position Title]&body=Dear BSB Transport HR Team,%0D%0A%0D%0AI am writing to express my interest in joining your team.%0D%0A%0D%0APosition Applied For: [Please specify the position]%0D%0A%0D%0APersonal Information:%0D%0A- Full Name: [Your Name]%0D%0A- Email: [Your Email]%0D%0A- Phone: [Your Phone]%0D%0A- Address: [Your Address]%0D%0A%0D%0AExperience & Qualifications:%0D%0A- Years of Experience: [X years]%0D%0A- Relevant Skills: [List your skills]%0D%0A- Availability: [When can you start?]%0D%0A%0D%0AAdditional Information:%0D%0A[Tell us about yourself, why you want to join BSB Transport, and any other relevant information]%0D%0A%0D%0APlease find my resume and cover letter attached.%0D%0A%0D%0AThank you for considering my application.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]"
                  class="relative inline-block group"
                >
                  <!-- Glow Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <!-- Main Button -->
                  <UButton
                    size="xl"
                    color="primary"
                    class="relative z-10 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 border-0 px-16 py-5 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div class="flex items-center space-x-4">
                      <UIcon name="lucide:mail" class="w-6 h-6" />
                      <span>Open Email Client</span>
                      <UIcon name="lucide:external-link" class="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </UButton>

                  <!-- Success Animation -->
                  <div class="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="w-6 h-6 bg-green-400 rounded-full animate-bounce shadow-lg flex items-center justify-center">
                      <UIcon name="i-lucide-check" class="w-4 h-4 text-white" />
                    </div>
                  </div>
                </a>
              </div>

              <!-- Quick Application Templates -->
              <div class="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
                <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <UIcon name="lucide:zap" class="w-5 h-5 text-yellow-500 mr-2" />
                  Quick Application Templates
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <!-- Driver Application Template -->
                  <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                    <div class="flex items-center mb-3">
                      <UIcon name="i-lucide-truck" class="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                      <h5 class="font-semibold text-gray-900 dark:text-white text-sm">Driver Application</h5>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-300 mb-3">
                      "Hi, I'm interested in the [Driver Position] role. I have [X years] experience with [HC/MC license, MSIC, etc.]. Available to start [date]. Please see attached resume."
                    </p>
                    <UButton
                      size="xs"
                      color="primary"
                      variant="outline"
                      :to="`mailto:alex.cheng@bsbtransport.com.au?subject=Driver Application - [Position]&body=Hi BSB Transport HR Team,%0D%0A%0D%0AI'm interested in the [Driver Position] role.%0D%0A%0D%0AExperience:%0D%0A• [X years] container transport experience%0D%0A• [HC/MC] License%0D%0A• MSIC Card%0D%0A• Available to start: [date]%0D%0A%0D%0APlease see attached resume.%0D%0A%0D%0AThank you!`"
                      class="w-full"
                    >
                      Use Template
                    </UButton>
                  </div>

                  <!-- General Application Template -->
                  <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                    <div class="flex items-center mb-3">
                      <UIcon name="i-lucide-briefcase" class="w-5 h-5 text-green-600 dark:text-green-400 mr-2" />
                      <h5 class="font-semibold text-gray-900 dark:text-white text-sm">General Application</h5>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-300 mb-3">
                      "Hi, I'm applying for [Position]. I have [X years] experience in [relevant field]. Attached are my resume and cover letter. Available to start [date]."
                    </p>
                    <UButton
                      size="xs"
                      color="success"
                      variant="outline"
                      :to="`mailto:alex.cheng@bsbtransport.com.au?subject=Job Application - [Position]&body=Hi BSB Transport HR Team,%0D%0A%0D%0AI'm applying for [Position].%0D%0A%0D%0AExperience:%0D%0A• [X years] experience in [relevant field]%0D%0A• Skills: [list key skills]%0D%0A• Available to start: [date]%0D%0A%0D%0AAttached are my resume and cover letter.%0D%0A%0D%0AThank you!`"
                      class="w-full"
                    >
                      Use Template
                    </UButton>
                  </div>

                  <!-- Sub-contractor Template -->
                  <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                    <div class="flex items-center mb-3">
                      <UIcon name="i-lucide-handshake" class="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                      <h5 class="font-semibold text-gray-900 dark:text-white text-sm">Sub-contractor</h5>
                    </div>
                    <p class="text-xs text-gray-600 dark:text-gray-300 mb-3">
                      "Hi, I'm interested in sub-contractor opportunities. I have [truck type] and [X years] experience. ABN and insurance ready. Please contact me."
                    </p>
                    <UButton
                      size="xs"
                      color="secondary"
                      variant="outline"
                      :to="`mailto:alex.cheng@bsbtransport.com.au?subject=Sub-contractor Application&body=Hi BSB Transport Team,%0D%0A%0D%0AI'm interested in sub-contractor opportunities.%0D%0A%0D%0AVehicle Details:%0D%0A• [Truck type: Prime mover/Trailer/Sideloader]%0D%0A• [X years] container transport experience%0D%0A• ABN and insurance ready%0D%0A• Available: [schedule]%0D%0A%0D%0APlease contact me to discuss opportunities.%0D%0A%0D%0AThank you!`"
                      class="w-full"
                    >
                      Use Template
                    </UButton>
                  </div>
                </div>

                <!-- Application Guidelines -->
                <div class="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <h5 class="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <UIcon name="lucide:info" class="w-4 h-4 text-blue-500 mr-2" />
                    Application Guidelines
                  </h5>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600 dark:text-gray-300">
                    <div>
                      <h6 class="font-medium text-gray-900 dark:text-white mb-1">Required Documents:</h6>
                      <ul class="space-y-1">
                        <li>• Resume/CV (PDF format)</li>
                        <li>• Cover Letter (optional)</li>
                        <li>• Certificates/Licenses</li>
                      </ul>
                    </div>
                    <div>
                      <h6 class="font-medium text-gray-900 dark:text-white mb-1">Include:</h6>
                      <ul class="space-y-1">
                        <li>• Position applied for</li>
                        <li>• Contact information</li>
                        <li>• Work experience</li>
                        <li>• Availability</li>
                      </ul>
                    </div>
                    <div>
                      <h6 class="font-medium text-gray-900 dark:text-white mb-1">Tips:</h6>
                      <ul class="space-y-1">
                        <li>• Customize cover letter</li>
                        <li>• Highlight transport experience</li>
                        <li>• Mention certifications</li>
                        <li>• Be specific about availability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Response Time Info -->
              <div class="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-700">
                <div class="flex items-center justify-center space-x-2">
                  <UIcon name="i-lucide-clock" class="w-5 h-5 text-green-600 dark:text-green-400" />
                  <p class="text-sm font-medium text-green-800 dark:text-green-300">
                    We'll review your application and contact you within
                    <span class="font-bold text-green-900 dark:text-green-200">5 business days</span>
                  </p>
                </div>
              </div>

              <!-- Additional Contact Options -->
              <div class="mt-6 flex items-center justify-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
                <div class="flex items-center space-x-1">
                  <UIcon name="i-lucide-shield-check" class="w-4 h-4" />
                  <span>Secure & Confidential</span>
                </div>
                <div class="flex items-center space-x-1">
                  <UIcon name="i-lucide-phone" class="w-4 h-4" />
                  <span>Phone: +61 456 881 666</span>
                </div>
                <div class="flex items-center space-x-1">
                  <UIcon name="i-lucide-users" class="w-4 h-4" />
                  <span>HR Team Review</span>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- Culture Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
      <UContainer>
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">
            Our Company Culture
          </h2>
          <p class="text-xl mb-8 opacity-90">
            At BSB Transport, we foster a culture of safety, professionalism, and continuous improvement.
            We value our team members and invest in their growth and development.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <UIcon name="i-lucide-users" class="text-4xl mb-4 opacity-80" />
              <h3 class="text-xl font-bold mb-2">Team Collaboration</h3>
              <p class="opacity-90">Working together to achieve common goals</p>
            </div>

            <div class="text-center">
              <UIcon name="i-lucide-trending-up" class="text-4xl mb-4 opacity-80" />
              <h3 class="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p class="opacity-90">Continuous learning and career advancement</p>
            </div>

            <div class="text-center">
              <UIcon name="i-lucide-award" class="text-4xl mb-4 opacity-80" />
              <h3 class="text-xl font-bold mb-2">Recognition</h3>
              <p class="opacity-90">Acknowledging and rewarding excellence</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <UContainer>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Join Our Team?
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Start your career journey with BSB Transport Australia today
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <!-- Primary Apply Button -->
            <div class="relative group">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <UButton
                size="xl"
                color="primary"
                to="#application-form"
                class="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 border-0 px-8 py-4 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                <div class="flex items-center space-x-3">
                  <UIcon name="i-lucide-rocket" class="w-6 h-6 animate-pulse" />
                  <span>Apply Now</span>
                  <UIcon name="i-lucide-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </UButton>

              <!-- Floating Success Indicator -->
              <div class="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="w-4 h-4 bg-green-400 rounded-full animate-bounce shadow-lg"></div>
              </div>
            </div>

            <!-- Secondary Contact Button -->
            <UButton
              size="xl"
              variant="outline"
              to="/contact"
              class="px-8 py-4 font-semibold text-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:scale-105"
            >
              <div class="flex items-center space-x-3">
                <UIcon name="i-lucide-phone" class="w-5 h-5" />
                <span>Contact HR</span>
                <UIcon name="lucide:external-link" class="w-4 h-4" />
              </div>
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
