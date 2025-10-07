<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
        <p class="text-xl text-gray-600">Let's discuss your next project.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Form Card -->
        <div class="card p-8">
          <div class="text-center mb-8">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact Form</h2>
            <p class="text-gray-600">
              The contact form is currently under development. 
              Please reach out to me directly using the methods below.
            </p>
          </div>

          <!-- Coming Soon Alert -->
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
              <div>
                <p class="text-blue-800 font-medium">Coming Soon!</p>
                <p class="text-blue-700 text-sm">The contact form will be available shortly. In the meantime, feel free to reach out via email or LinkedIn.</p>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button
              disabled
              class="btn-primary opacity-50 cursor-not-allowed"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
              </svg>
              Send Message (Coming Soon)
            </button>
          </div>
        </div>

        <!-- Direct Contact Card -->
        <div class="card p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
          
          <div class="space-y-6 mb-8">
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Email</div>
                <div class="text-gray-600">jon@example.com</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">LinkedIn</div>
                <div class="text-gray-600">linkedin.com/in/jonrussell</div>
              </div>
            </div>
            
            <div class="flex items-center">
              <div class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">GitHub</div>
                <div class="text-gray-600">github.com/jonrussell</div>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-6">
            <div class="text-center">
              <h4 class="text-lg font-bold text-gray-900 mb-4">Let's Connect</h4>
              <p class="text-gray-600 mb-6">
                I'm always interested in discussing new opportunities, 
                interesting projects, or just having a chat about technology.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:jon@example.com"
                  class="btn-secondary"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
                  </svg>
                  Send Email
                </a>
                
                <a
                  href="https://linkedin.com/in/jonrussell"
                  target="_blank"
                  class="btn-secondary"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact'
}
</script>
