<template>
  <div class="about">
    <Transition name="slide-fade">
      <h1 class="about__title" v-if="loaded">Class Reunion 2013</h1>
    </Transition>
    <p class="subheader">Greetings to all MUSTANGS from the graduating class of 2013!</p>
    <p class="about__text">
      The time has finally come to start looking forward to the commencement of our High School Reunion. We, the class
      of 2013, have been a powerful force and are continuing to be a key influence in changing the world. Wishing
      everyone the best of luck as we navigate our way through our lives 10 years past.
    </p>
    <p class="about__text">
      President, Jacob Hecht and Vice President, Christian King are pleased to announce the class of 2013 Ten Year
      Reunion. This event will be the most iconic class reunion that Mandarin High School has bared witness to since its
      opening 33 years ago and it will be one like no other. Don't miss out!
    </p>
    <p class="subheader">Party starts @7PM on May 20th 2023</p>
    <p class="about__text">
      The reunion will be hosted at the Scottish Rite, located at <a target="_blank"
        href="https://goo.gl/maps/GW2hbhm7HMJxgyeq9">965 Hubbard St, Jacksonville, FL 32206</a>.
    </p>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.581355027319!2d-81.65544628456536!3d30.33442371176967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b723dfc5cce5%3A0xf9b0bd6c83858eda!2sJacksonville%20Scottish%20Rite!5e0!3m2!1sen!2sus!4v1675725581522!5m2!1sen!2sus"
        width="90%" height="300" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <p class="about__text">
      Your ticket includes an exclusive venue, DJ, and a selection of foods and non-alcoholic drinks to enjoy while 
      catching up and reminiscing with old friends. For those who prefer something stronger, a cash bar will be available throughout 
      the night, serving alcoholic beverages to keep the party going. Get ready for a night filled with dancing, good company, food, and drinks!
    </p>
    <p class="subheader">Get ready for the most iconic class reunion that Mandarin High School has ever seen!</p>
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
  width: 98%;
}

.subheader {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  padding: 5px;
}

.map-container {
  display: block;
  width: 100%;
  max-width: 100%;
}
</style>
