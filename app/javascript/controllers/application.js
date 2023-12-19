import { Application } from "@hotwired/stimulus"
//= require rails-ujs
//= require bookmarks

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
