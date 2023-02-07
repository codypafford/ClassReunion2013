<template>
    <div class="about">
      <Transition name="slide-fade">
        <h1 class="about__title" v-if="loaded">Class Reunion 2013</h1>
      </Transition>

      <p class="subheader">Party starts @7PM on May 20th</p>
      <p class="about__text">
        Join us as we come together to reminisce and catch up with old friends at our 2013 class reunion!
      </p>
      <p class="about__text">
        This is a great opportunity to reconnect with classmates and see how everyone has been doing over the years.
      </p>

      <p class="about__text">
        This event will be hosted at the Scottish Rite at <a target="_blank" href="https://goo.gl/maps/GW2hbhm7HMJxgyeq9">965 Hubbard St, Jacksonville, FL 32206</a>
      </p>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.581355027319!2d-81.65544628456536!3d30.33442371176967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b723dfc5cce5%3A0xf9b0bd6c83858eda!2sJacksonville%20Scottish%20Rite!5e0!3m2!1sen!2sus!4v1675725581522!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <p class="about__text">
        There will be plenty of food and drinks.
      </p>
    </div>
  </template>

<script>
  export default {
    name: "AboutPage",
    data() {
      return {
        loaded: false
      }
    },
    mounted() {
      this.loaded = true
    },
  };
</script>
  
  <style>
    /* For transitions */
    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 4s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateX(300px);
      opacity: 0;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 10px;
    }
    
    .about__title {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    
    .about__text {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .subheader {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 15px;
    }
  </style>
  