<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import App from '../App.vue';

const approaches = [
    {
        title: 'API Development',
        description: 'Designing and implementing RESTful APIs with proper authentication, rate limiting, and comprehensive documentation.',
    },
    {
        title: 'Database Optimization',
        description: 'Optimizing database performance through proper indexing, query optimization, and efficient data structures.',
    },
    {
        title: 'System Architecture',
        description: 'Building scalable backend architectures that can handle growth and maintain performance under load.',
    },
    {
        title: 'Code Quality',
        description: 'Writing clean, maintainable code with comprehensive testing and following best practices and design patterns.',
    },
];

const skills = [
    { title: 'Vue.js', icon: 'mdi-vuejs' },
    { title: 'Plays well with others.', icon: 'mdi-vuejs' },
];
</script>

<template>
    <App>
        <Head title="Jon Russell - Senior Software Engineer" />

        <section class="bg-white py-16">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="content-wrapper">
                    <div class="description">
                        <div class="title2">Get to know me!</div>
                        <div>
                            <p>
                                I'm a software developer specializing in JavaScript and web technologies, with a passion for performance,
                                accessibility, mentoring, and enhancing both user and developer experiences.
                            </p>
                            <p>
                                I embrace digital minimalism, using technology to create meaningful solutions that improve lives and drive business
                                value.
                            </p>
                            <p>
                                In my free time, I work on side projects and explore emerging technologies. Check out some of my work in the Projects
                                section below.
                            </p>
                            <p>
                                I'm always open to collaborations where I can contribute, learn, and grow. If my skills and experience align with your
                                needs, feel free to reach out!
                            </p>
                        </div>
                        <div>
                            <button
                                id="about-projects-button"
                                data-track-click="about:projects-button"

                                class="small"
                                data-astro-cid-7mc3ftep=""
                            >
                                Projects
                            </button>
                        </div>
                    </div>
                    <div class="skills">
                        <div class="title2">My toolkit</div>
                        <div class="skills-list">
                            <span class="skill-block">JavaScript</span
                            ><span class="skill-block">Node.js</span
                            ><span class="skill-block">TypeScript</span
                            ><span class="skill-block">CSS</span
                            ><span class="skill-block">SASS</span
                            ><span class="skill-block">SQL</span
                            ><span class="skill-block">Vite</span
                            ><span class="skill-block">webpack</span
                            ><span class="skill-block">Astro</span
                            ><span class="skill-block">Jest</span
                            ><span class="skill-block">Cypress</span
                            ><span class="skill-block">CLI</span
                            ><span class="skill-block">Git</span
                            ><span class="skill-block">SEO</span
                            ><span class="skill-block">a11y</span
                            ><span class="skill-block">Vercel</span>
                        </div>
                        <!-- <div>
          <a href="/resume" data-track-click="about:resume-button" tabindex="-1"
            ><Button>Resume</Button></a
          >
        </div> -->
                    </div>
                </div>

                <ul>
                    <li style="--percent: 97.5%">JavaScript</li>
                    <li style="--percent: 97.5%">React</li>
                    <li style="--percent: 97.5%">CSS</li>
                    <li style="--percent: 90%">Angular</li>
                    <li style="--percent: 90%">TypeScript</li>
                    <li style="--percent: 90%">Automated Testing</li>
                    <li style="--percent: 75%">Node</li>
                    <li style="--percent: 60%">Prompt Engineering</li>
                    <li style="--percent: 25%">DevOps</li>
                    <li style="--percent: 20%">Design</li>
                </ul>
            </div>
        </section>

        <section>
            <div class="section-wrapper">
                <div class="mb-16 text-center">
                    <p class="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
                        Currently a Senior Software Engineer with expertise in Laravel, PHP, and full-stack development. I specialize in building
                        high-performance APIs, database optimization, and creating seamless integrations that bridge the gap between frontend and
                        backend systems.
                    </p>
                </div>

                <!-- Approach Section -->
                <div class="mb-16">
                    <h2 class="mb-8 text-center text-3xl font-bold text-gray-900">My Approach</h2>
                    <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
                        My comprehensive development approach that builds reliable and maintainable backend systems.
                    </p>

                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div v-for="(approach, index) in approaches" :key="index" class="card p-6">
                            <div class="mb-4 flex items-center">
                                <div class="bg-primary-600 mr-4 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white">
                                    {{ index + 1 }}
                                </div>
                                <h3 class="text-xl font-bold text-gray-900">{{ approach.title }}</h3>
                            </div>
                            <p class="leading-relaxed text-gray-600">{{ approach.description }}</p>
                        </div>
                    </div>
                </div>

                <!-- Experience Section -->
                <div>
                    <h2 class="mb-8 text-center text-3xl font-bold text-gray-900">Experience</h2>
                    <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
                        It's not just about writing code. It's about building solutions that scale and deliver real business value.
                    </p>

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div v-for="(stat, index) in stats" :key="index" class="card p-6 text-center">
                            <div class="text-primary-600 mb-2 text-3xl font-bold">{{ stat.value }}</div>
                            <div class="text-gray-600">{{ stat.label }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </App>
</template>
