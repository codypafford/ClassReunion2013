<script>
export default {
  name: "MainMenu",
  setup() {
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  computed: {},
  async mounted() {
  },
  watch: {
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = false
    }
  },
};

</script>

<template>
  <header>
    <button class="main-menu__button">
      <font-awesome-icon class="main-menu__icon" icon="fa-solid fa-bars" />
    </button>
    <nav :class="`main-menu ${this.isMenuOpen ? 'main-menu--visible' : ''}`">
      <button class="main-menu__close-button" >
        <font-awesome-icon icon="fa-times" />
      </button>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">More Info</RouterLink>
        </li>
        <li v-if="user && user.sub">
          <RouterLink :to='`/account/profile/${user.sub}`'>Account</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background-color: white;
  height: 60px;
  padding: 0 1.5rem;
  border-bottom: 1px solid #f2f2f2;
  z-index: 999;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
}

.main-menu__auth-button {
  margin-left: auto;
}

.main-menu__close-button {
  border: none;
  background: none;
  font-size: 2rem;
  margin-bottom: 3rem;
  align-self: flex-start;
}

.main-menu__close-button:hover {
  cursor: pointer;
}

.main-menu::before {
  content: "";
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: calc(100vw + 288px);
  opacity: 0;
  transition: opacity .2s cubic-bezier(.33, 1, .68, 1);
}

.main-menu--visible::before {
  opacity: .8;
}

.main-menu {
  color: black;
  padding: 1rem;
  position: fixed;
  visibility: hidden;
  height: 100vh;
  width: 288px;
  left: -288px;
  top: 0;
  background-color: #f1f1f1;
  z-index: 999;
  transition: visibility 0s, left .3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 99999
}

.main-menu .btn {
  height: 48px;
  padding: 0 24px;
  margin: .5rem 0;
  border-radius: 999px;
}

.main-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.main-menu ul::after {
  content: "";
  padding-top: 1rem;
  display: block;
  margin: 1rem;
  border-bottom: 1px solid #e6e6e6;
}

.main-menu li a {
  font-size: 2rem;
  transition: none;
}

.main-menu--visible {
  left: 0;
  visibility: visible;
}

.main-menu__button {
  background: none;
  border: none;
  margin-right: auto;
}

.main-menu__button:hover {
  cursor: pointer;
}

.main-menu__icon {
  color: black;
}

.logo {
  border-radius: 50%;
}

.logo:hover {
  cursor: pointer;
}

nav a {
  text-decoration: none;
  color: black;
  padding-right: 1rem;
}

.router-link-active {
  font-weight: bold;
  color: #21313e;
}

@media screen and (min-width: 1px) {
  .main-menu ul::after {
    content: none;
  }

  .main-menu__mobile-auth {
    display: none;
  }

  .main-menu__icon {
    display: none;
  }

  .main-menu::before {
    position: relative;
    background: none;
    content: none;
    opacity: 0;
  }

  .main-menu__button {
    display: none;
  }

  .main-menu {
    color: black;
    position: relative;
    background: none;
    visibility: visible;
    height: auto;
    width: auto;
    z-index: 1;
    transition: none;
    padding: 0;
    left: 0;
  }

  .main-menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .main-menu__close-button {
    display: none;
  }

  .main-menu li {
    display: inline-block;
  }

  .main-menu li a {
    font-size: 1rem;
  }

  .main-menu--visible {
    visibility: visible;
  }
}
</style>
