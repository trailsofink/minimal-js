// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

// Change to true to allow Turbo
Turbo.session.drive = false;

// Allow UJS alongside Turbo
import jquery from "jquery";
window.jQuery = jquery;
window.$ = jquery;
import Rails from "@rails/ujs";
Rails.start();

for (let n = 1; n <= 100; n++) {
  if (n % 15 === 0) {
    console.log("fizzbuzz");
  } else if (n % 5 === 0) {
    console.log("buzz");
  } else if (n % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(n);
  }
}
