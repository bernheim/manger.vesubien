<template>
  <div>
    <div class="header py-48 lg:px-32 px-10 hero">
      <h1 class="text-4xl md:text-6xl">Manger.<br class="lg:hidden block">Vésubien</h1>
      <div class="text-xl">Le portail de l'agriculture Vésubienne</div>
    </div>
    <div class="text-left lg:text-xl py-8 lg:px-32 px-16 border-bars">
      <div><p class="pb-6">C'est d'autant plus important durant cette période de crise, alors que nos marchés sont fermés, d'acheter localement, de profiter de produits locaux, et de soutenir nos agriculteurs valléens.</p></div>
      <div><p>Vous êtes agriculteur ? <a href="mailto:contact@manger.vesubien.com" class="hover:bg-english-full rounded-t p-1 hover:text-white">Contactez-nous.</a></P></div>
    </div>
    <div class="home py-8 lg:px-32 px-10">
      <h2 class="text-2xl lg:text-3xl lg:text-left py-16">Les producteurs de la Vésubie</h2>
      <div>
        <div class="card header-card fruit-card">
          <h2>Fruits</h2>
          </div>
        <displayProducers type="Fruits"></displayProducers>
      </div>
      <div>
        <div class="card header-card vegetables-card">
          <h2>Légumes</h2>
          </div>
        <displayProducers type="Légumes"></displayProducers>
      </div>
      <div>
        <div class="card header-card cheese-card">
          <h2>Fromages</h2>
          <span>&#38; oeufs</span>

          </div>
        <displayProducers type="Fromage"></displayProducers>
      </div>
      <div>
        <div class="card header-card miel-card">
          <h2>Miels</h2>
          <span>&#38; confitures</span>
          </div>
        <displayProducers type="Miel"></displayProducers>
      </div>
      <div><router-link to="/add-producer">Admin</router-link></div>
    </div>
  </div>
</template>

<script>

// @ is an alias to /src
import displayProducers from '@/components/displayProducers.vue'

export default {
  name: 'Home',
  components: {
    displayProducers
    },
  methods: {
  }
}
</script>


<style>
  .miel-card {
      background: linear-gradient(rgba(255,255,255,0.6)), url("~@/assets/images/watercolour-honey.jpg");
      background-repeat: no-repeat;
      background-size: cover;
  }

  .fruit-card {
      background: linear-gradient(rgba(255,255,255,0.6)), url("~@/assets/images/watercolour-pear.jpg");
      background-repeat: no-repeat;
      background-size: cover;
  }

  .vegetables-card {
      background: linear-gradient(rgba(255,255,255,0.6)), url("~@/assets/images/watercolour-vegetables.jpg");
      background-repeat: no-repeat;
      background-size: cover;
  }

  .meat-card {
      background: linear-gradient(rgba(255,255,255,0.6)), url("~@/assets/images/watercolour-meat.jpg");
      background-repeat: no-repeat;
      background-size: cover;
  }

  .cheese-card {
      background: linear-gradient(rgba(255,255,255,0.6)), url("~@/assets/images/watercolour-cheese.jpg");
      background-repeat: no-repeat;
      background-size: cover;
  }
</style>